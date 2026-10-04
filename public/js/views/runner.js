import { lessonById, unitById, MILESTONES, UNITS, ITEMS } from '../content/index.js';
import { APP } from '../config.js';
import { esc, itx, sup, rich, tr, meaning, pick, shuffle, dayKey } from '../util.js';
import { icons, confetti } from '../art.js';
import { num } from '../i18n.js';
import { lessonSteps, practiceSteps, distractors } from '../engine.js';
import { check, checkTokens } from '../grade.js';
import { newCard, schedule } from '../srs.js';
import { unitProgress } from '../plan.js';
import { buildSummary, live } from '../share.js';
import { runScene } from './scene.js';
import { messages } from '../whatsapp.js';

// ── Interrupted lessons resume where she left them (a phone call shouldn't cost a lesson)
const RESUME_KEY = `${APP.storageKey}:resume`;
const MAX_RESUME_AGE = 3 * 24 * 3600 * 1000;
const itemReplacer = (k, v) => (v && typeof v === 'object' && v.lessonId && ITEMS.has(v.id) ? { $i: v.id } : v);
const itemReviver = (k, v) => (v && typeof v === 'object' && v.$i ? ITEMS.get(v.$i) : v);

export function getResume(lessonId) {
  try {
    const r = JSON.parse(localStorage.getItem(RESUME_KEY) || 'null', itemReviver);
    if (!r || Date.now() - r.at > MAX_RESUME_AGE) return null;
    return !lessonId || r.lessonId === lessonId ? r : null;
  } catch { return null; }
}
function saveResume(data) {
  try { localStorage.setItem(RESUME_KEY, JSON.stringify({ ...data, at: Date.now() }, itemReplacer)); } catch { /* optional */ }
}
export function clearResume() { try { localStorage.removeItem(RESUME_KEY); } catch { /* optional */ } }

export async function startLesson(root, app, id) {
  const lesson = lessonById(id);
  if (!lesson) { app.navigate('#/path'); return; }
  if (lesson.kind === 'scene') return runScene(root, app, lesson, { onDone: (stats) => finishLesson(app, lesson, new Map(), stats) });
  const saved = getResume(lesson.id);
  if (saved && saved.i > 1) {
    const go = await app.confirm({ title: app.t('resume.title'), text: app.t('resume.text'), yes: app.t('resume.yes'), no: app.t('resume.no') });
    if (go) return runSession(root, app, { mode: 'lesson', lesson, steps: saved.steps, resume: saved });
  }
  clearResume();
  const steps = lessonSteps(lesson, { audio: app.speech.available });
  runSession(root, app, { mode: 'lesson', lesson, steps });
}

export function startPractice(root, app, unitId) {
  const unit = unitById(unitId);
  if (!unit) { app.navigate('#/path'); return; }
  const steps = practiceSteps(unit, app.store.state, { audio: app.speech.available });
  if (!steps.length) { app.navigate('#/path'); return; }
  runSession(root, app, { mode: 'practice', unit, steps });
}

/** Persist a finished lesson (or scene). Returns info for the end screen. */
function finishLesson(app, lesson, results, stats = {}) {
  const today = dayKey();
  const unit = unitById(lesson.unitId);
  const wasUnitDone = unitProgress(app.store.state, unit).complete;
  const milestoneDoneBefore = milestoneDone(app.store.state, unit.milestone);
  let added = 0;
  app.store.update((s) => {
    const prev = s.lessons[lesson.id];
    s.lessons[lesson.id] = { doneAt: prev?.doneAt || today, lastAt: today, firstTry: stats.ok ?? 0, total: stats.total ?? 0, runs: (prev?.runs || 0) + 1 };
    for (const item of lesson.items || []) {
      if (!s.srs[item.id]) { s.srs[item.id] = newCard(today, results.get(item.id) !== false); added++; }
    }
    app.store.bumpDay('lessons');
  });
  pushShare(app);
  const unitNowDone = !wasUnitDone && unitProgress(app.store.state, unit).complete;
  const msNow = !milestoneDoneBefore && milestoneDone(app.store.state, unit.milestone);
  return { added, unitNowDone, unit, milestone: msNow ? MILESTONES.find((m) => m.id === unit.milestone) : null };
}

function milestoneDone(state, mid) {
  return UNITS.filter((u) => u.milestone === mid).every((u) => unitProgress(state, u).complete);
}

/** Quietly refresh the shared summary when live sharing is on. */
export function pushShare(app) {
  const s = app.store.state;
  if (!s.share.enabled || !s.share.live?.id) return;
  live.push(s.share.live, buildSummary(s))
    .then(() => app.store.update((st) => { st.share.lastSharedAt = dayKey(); }))
    .catch(() => {});
}

// ─────────────────────────────────────────────────────────────
export function runSession(root, app, opts) {
  const { t, lang } = app;
  const P = app.P;
  const S = {
    steps: opts.steps.slice(), i: 0, results: new Map(), retried: new Set(),
    last: Date.now(), start: Date.now(), answer: null, checked: false, noSpeak: false,
  };
  if (opts.resume) {
    S.i = opts.resume.i; S.results = new Map(opts.resume.results); S.retried = new Set(opts.resume.retried);
  }
  const persist = () => {
    if (opts.mode !== 'lesson') return;
    saveResume({ lessonId: opts.lesson.id, steps: S.steps, i: S.i, results: [...S.results], retried: [...S.retried] });
  };
  const answerable = (st) => !['intro', 'note', 'discover', 'speak'].includes(st.type);
  const tick = () => { const now = Date.now(); app.store.addTime((now - S.last) / 1000); S.last = now; };

  root.innerHTML = `
  <div class="runner">
    <div class="run-top">
      <button class="icon-btn" id="quit" aria-label="${esc(t('close'))}">${icons.close(24)}</button>
      <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"><i style="width:0%"></i></div>
      ${opts.lesson?.note ? `<button class="icon-btn" id="help" aria-label="${esc(t('lesson.help'))}" title="${esc(t('lesson.help'))}">${icons.help(24)}</button>` : ''}
    </div>
    <main class="run-body" id="step" tabindex="-1" aria-live="polite"></main>
    <div class="run-foot"><button class="btn block" id="foot"></button></div>
    <div class="sheet" id="sheet" role="status" aria-live="assertive"></div>
  </div>`;

  const body = root.querySelector('#step');
  const foot = root.querySelector('#foot');
  const sheet = root.querySelector('#sheet');
  const barEl = root.querySelector('.bar > i');

  const setFoot = (label, enabled = true, cls = '') => {
    foot.innerHTML = label; foot.disabled = !enabled; foot.className = `btn block ${cls}`;
  };

  root.querySelector('#quit').addEventListener('click', async () => {
    if (S.i === 0) return history.length > 1 ? history.back() : app.navigate('#/today');
    const ok = await app.confirm({ title: t('lesson.quit'), text: opts.mode === 'lesson' ? t('lesson.quitText') : '', yes: t('lesson.quitYes'), no: t('lesson.quitNo') });
    if (ok) { tick(); persist(); app.navigate(opts.mode === 'review' ? '#/review' : opts.mode === 'practice' ? '#/path' : '#/today'); }
  });

  root.querySelector('#help')?.addEventListener('click', () => {
    const l = opts.lesson;
    const paras = (l.note?.[lang] || l.note?.fr || []).map((p) => `<p style="margin-top:8px">${rich(P(p))}</p>`).join('');
    app.sheet({ title: lessonTitle(l), html: `${paras}${l.compare ? `<div class="aside compare"><p>${rich(P(tr(l.compare, lang)))}</p></div>` : ''}` });
  });

  root.querySelector('.runner').addEventListener('click', tick, true);
  const onKey = (e) => {
    if (!document.body.contains(root.querySelector('.runner'))) { document.removeEventListener('keydown', onKey); return; }
    const ae = document.activeElement;
    const onChoice = ae?.classList?.contains('option') || ae?.classList?.contains('tile');
    if (e.key === 'Enter' && !e.shiftKey && !foot.disabled && !sheet.classList.contains('show') && (ae?.tagName !== 'BUTTON' || onChoice)) { e.preventDefault(); foot.click(); }
    if (/^[1-5]$/.test(e.key) && document.activeElement?.tagName !== 'TEXTAREA') {
      const opt = body.querySelectorAll('.options .option')[Number(e.key) - 1];
      opt?.click();
    }
  };
  document.addEventListener('keydown', onKey);

  function playItem(item, slow = false) {
    const btn = body.querySelector('.play.main');
    return slow ? app.playSlow(item.it, btn) : app.play(item.it, btn);
  }

  // ── step renderers ────────────────────────────────────────
  function render() {
    S.answer = null; S.checked = false;
    sheet.className = 'sheet'; sheet.innerHTML = '';
    barEl.style.width = `${(S.i / S.steps.length) * 100}%`;
    barEl.parentElement.setAttribute('aria-valuenow', Math.round((S.i / S.steps.length) * 100));
    const st = S.steps[S.i];
    if (!st) return finish();
    if (st.type === 'speak' && S.noSpeak) { S.i++; return render(); }
    persist();
    const R = renderers[st.type];
    R(st);
    body.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  const lessonTitle = (l) => P(tr(l.title, lang));

  const renderers = {
    intro() {
      const l = opts.lesson; const u = unitById(l.unitId);
      body.innerHTML = `<div class="intro">
        <div class="intro-art hue-${u.hue}">${icons[u.icon](52)}</div>
        <p class="center eyebrow">${esc(t('path.month', { n: num(u.month) }))} · ${esc(tr(u.title, lang))}</p>
        <h1 style="margin-top:6px">${esc(lessonTitle(l))}</h1>
        <div class="it-title">${itx(l.title.it)}</div>
        <div class="card tint-rose" style="margin-top:22px"><div class="eyebrow">${esc(t('lesson.goal'))}</div><p style="margin-top:4px;font-weight:700">${esc(P(tr(l.goal, lang)))}</p></div>
      </div>`;
      setFoot(`${esc(t('start'))} ${icons.arrow(18)}`);
    },
    note() {
      const l = opts.lesson;
      const paras = (l.note?.[lang] || l.note?.fr || []).map((p) => `<p>${rich(P(p))}</p>`).join('');
      body.innerHTML = `<div class="note-card">
        <h2 style="margin-bottom:14px">${esc(lessonTitle(l))}</h2>
        <div class="card">${paras}</div>
        ${l.compare ? `<div class="aside compare"><div class="eyebrow">${esc(lang === 'ar' ? t('lesson.compareAr') : t('lesson.compare'))}</div><p>${rich(P(tr(l.compare, lang)))}</p></div>` : ''}
        ${l.culture ? `<div class="aside culture"><div class="eyebrow">${esc(t('lesson.culture'))}</div><p>${rich(P(tr(l.culture, lang)))}</p></div>` : ''}
      </div>`;
      setFoot(`${esc(t('continue'))} ${icons.arrow(18)}`);
    },
    discover(st) {
      body.innerHTML = `<h2>${esc(t('lesson.discover'))}</h2>
        <p class="faint" style="margin-top:4px">${esc(app.speech.available ? t('lesson.discoverHint') : t('ex.noAudio'))}</p>
        <div class="discover">${st.items.map((it) => `
          <button ${app.speech.available ? `data-say="${esc(it.it)}"` : ''} aria-label="${esc(P(it.it))}">
            ${app.speech.available ? `<span class="play">${icons.sound(18)}</span>` : ''}
            <span class="w">${itx(P(it.it))}${it.hint ? `<span class="pron">[${esc(it.hint)}]</span> ` : ''}${sup(P(meaning(it, lang)), lang)}</span>
          </button>`).join('')}</div>`;
      setFoot(`${esc(t('continue'))} ${icons.arrow(18)}`);
    },
    choose(st) { optionStep(st, 'choose'); },
    reverse(st) { optionStep(st, 'reverse'); },
    listen(st) { optionStep(st, 'listen'); },
    match(st) { matchStep(st); },
    build(st) { buildStepView(st, false); },
    listenBuild(st) { buildStepView(st, true); },
    type(st) { typeStep(st); },
    minimal(st) { minimalStep(st); },
    speak(st) { speakStep(st); },
  };

  // Minimal pairs: train the ear on sounds that change meaning (p/b, v/f, double consonants)
  function minimalStep(st) {
    const item = st.item;
    const audio = app.speech.available;
    body.innerHTML = `<div class="prompt-label">${esc(audio ? t('ex.minimal') : t('ex.minimalRead'))}</div>
      ${audio ? `<div class="listen-center"><div class="row">
          <button class="play big main" data-say="${esc(item.it)}" aria-label="${esc(t('listen'))}">${icons.sound(38)}</button>
          <button class="play" data-say="${esc(item.it)}" data-slow="1" aria-label="${esc(t('slow'))}">${icons.turtle(22)}</button></div></div>`
        : `<div class="prompt-big">${sup(P(meaning(item, lang)), lang)}</div>`}
      <div class="options pair" role="group">${st.options.map((o, i) => `
        <button class="option" data-id="${o.id}" aria-pressed="false"><span class="k">${i + 1}</span>${itx(o.it)}</button>`).join('')}</div>`;
    setFoot(esc(t('check')), false);
    body.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => {
      if (S.checked) return;
      body.querySelectorAll('.option').forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true'); S.answer = b.dataset.id; setFoot(esc(t('check')), true);
    }));
    if (audio) setTimeout(() => playItem(item), 250);
    S.check = () => {
      body.querySelectorAll('.option').forEach((b) => {
        b.disabled = true;
        if (b.dataset.id === item.id) b.classList.add('correct'); else if (b.dataset.id === S.answer) b.classList.add('wrong');
      });
      const other = st.options.find((o) => o.id !== item.id);
      return { ok: S.answer === item.id, item, kind: 'pair', note: S.answer === item.id ? null : {
        fr: `*${item.it}* = ${item.fr} · *${other.it}* = ${other.fr}`, ar: `*${item.it}* = ${item.ar} · *${other.it}* = ${other.ar}` } };
    };
  }

  // Shadowing: listen, repeat aloud, record and compare. Audio never leaves the device.
  function speakStep(st) {
    const item = st.item;
    const canRecord = !!(navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
    let rec = null, chunks = [], myUrl = null, timer = null, stream = null;
    body.innerHTML = `<div class="prompt-label">${esc(t('ex.speak'))}</div>
      <div class="prompt-big">${app.speech.available ? `<button class="play main" data-say="${esc(item.it)}" aria-label="${esc(t('listen'))}">${icons.sound(20)}</button>` : ''}${itx(P(item.it))}</div>
      <p class="muted" style="margin-top:6px">${sup(P(meaning(item, lang)), lang)}</p>
      <div class="speak-box">
        ${canRecord ? `<button class="rec" id="rec" aria-label="${esc(t('speak.record'))}">${icons.mic(34)}</button>
          <span id="rec-l" class="faint">${esc(t('speak.record'))}</span>
          <button class="btn secondary small" id="mine" hidden>${icons.play(16)} ${esc(t('speak.mine'))}</button>`
        : `<p class="faint">${esc(t('speak.noMic'))}</p>`}
      </div>
      <p class="faint row" style="margin-top:14px">${icons.shield(16)} <span>${esc(t('speak.private'))}</span></p>
      <button class="btn ghost small" id="cant" style="margin-top:6px">${esc(t('speak.cant'))}</button>`;
    setFoot(esc(canRecord ? t('speak.done') : t('speak.said')), !canRecord);
    if (app.speech.available) setTimeout(() => playItem(item), 250);
    const recBtn = body.querySelector('#rec');
    const label = body.querySelector('#rec-l');
    const mine = body.querySelector('#mine');
    const stopRec = () => { if (rec && rec.state === 'recording') rec.stop(); clearTimeout(timer); };
    recBtn?.addEventListener('click', async () => {
      if (rec && rec.state === 'recording') return stopRec();
      try {
        app.speech.stop();
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        chunks = []; rec = new MediaRecorder(stream);
        rec.ondataavailable = (e) => chunks.push(e.data);
        rec.onstop = () => {
          stream.getTracks().forEach((tr) => tr.stop());
          if (myUrl) URL.revokeObjectURL(myUrl);
          myUrl = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
          recBtn.classList.remove('on'); recBtn.innerHTML = icons.mic(34);
          label.textContent = t('speak.again'); mine.hidden = false;
          setFoot(esc(t('speak.done')), true);
          new Audio(myUrl).play().catch(() => {});
        };
        rec.start();
        recBtn.classList.add('on'); recBtn.innerHTML = icons.stop(30); label.textContent = t('speak.recording');
        timer = setTimeout(stopRec, 8000);
      } catch {
        label.textContent = t('speak.denied');
        setFoot(esc(t('speak.said')), true);
      }
    });
    mine?.addEventListener('click', () => { if (myUrl) new Audio(myUrl).play().catch(() => {}); });
    body.querySelector('#cant').addEventListener('click', () => { stopRec(); S.noSpeak = true; next(); });
    S.passiveCleanup = () => { stopRec(); if (myUrl) setTimeout(() => URL.revokeObjectURL(myUrl), 1000); };
  }

  function optionStep(st, mode) {
    const item = st.item;
    let prompt;
    if (mode === 'choose') {
      prompt = `<div class="prompt-label">${esc(t('ex.choose'))}</div>
        <div class="prompt-big">${app.speech.available ? `<button class="play main" data-say="${esc(item.it)}" aria-label="${esc(t('listen'))}">${icons.sound(20)}</button>` : ''}${itx(P(item.it))}</div>
        ${item.hint ? `<p class="hint">[${esc(item.hint)}]</p>` : ''}`;
    } else if (mode === 'reverse') {
      prompt = `<div class="prompt-label">${esc(t('ex.reverse'))}</div><div class="prompt-big">${sup(P(meaning(item, lang)), lang)}</div>`;
    } else {
      prompt = `<div class="prompt-label">${esc(t('ex.listen'))}</div>
        <div class="listen-center"><div class="row">
          <button class="play big main" data-say="${esc(item.it)}" aria-label="${esc(t('listen'))}">${icons.sound(38)}</button>
          <button class="play" data-say="${esc(item.it)}" data-slow="1" aria-label="${esc(t('slow'))}" title="${esc(t('slow'))}">${icons.turtle(22)}</button>
        </div></div>`;
    }
    const label = (o) => (mode === 'choose' ? sup(P(meaning(o, lang)), lang) : itx(P(o.it)));
    body.innerHTML = `${prompt}<div class="options" role="group">${st.options.map((o, i) => `
      <button class="option" data-id="${o.id}" aria-pressed="false"><span class="k">${i + 1}</span>${label(o)}</button>`).join('')}</div>`;
    setFoot(esc(t('check')), false);
    body.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => {
      if (S.checked) return;
      body.querySelectorAll('.option').forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      S.answer = b.dataset.id;
      setFoot(esc(t('check')), true);
      if (mode !== 'choose' && app.speech.available && mode === 'reverse') app.play(st.options.find((o) => o.id === b.dataset.id).it);
    }));
    if (mode !== 'reverse' && app.speech.available) setTimeout(() => playItem(item), 250);
    S.check = () => {
      const ok = S.answer === item.id;
      body.querySelectorAll('.option').forEach((b) => {
        b.disabled = true;
        if (b.dataset.id === item.id) b.classList.add('correct');
        else if (b.dataset.id === S.answer) b.classList.add('wrong');
      });
      return { ok, item };
    };
  }

  function matchStep(st) {
    const left = shuffle(st.items), right = shuffle(st.items);
    let sel = null; let matched = 0; const mistakes = new Set();
    body.innerHTML = `<div class="prompt-label">${esc(t('ex.match'))}</div>
      <div class="match">
        <div class="col">${left.map((o) => `<button class="option" data-side="l" data-id="${o.id}">${itx(P(o.it))}</button>`).join('')}</div>
        <div class="col">${right.map((o) => `<button class="option" data-side="r" data-id="${o.id}">${sup(P(meaning(o, lang)), lang)}</button>`).join('')}</div>
      </div>`;
    setFoot(esc(t('continue')), false);
    body.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => {
      if (b.classList.contains('gone')) return;
      if (b.dataset.side === 'l' && app.speech.available) app.play(st.items.find((x) => x.id === b.dataset.id).it);
      if (!sel || sel.dataset.side === b.dataset.side) {
        body.querySelectorAll(`.option[data-side="${b.dataset.side}"]`).forEach((x) => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true'); sel = b; return;
      }
      if (sel.dataset.id === b.dataset.id) {
        [sel, b].forEach((x) => { x.classList.add('gone'); x.setAttribute('aria-pressed', 'false'); x.disabled = true; });
        matched++;
      } else {
        mistakes.add(sel.dataset.id); mistakes.add(b.dataset.id);
        [sel, b].forEach((x) => { x.classList.add('shake'); x.setAttribute('aria-pressed', 'false'); setTimeout(() => x.classList.remove('shake'), 400); });
      }
      sel = null;
      if (matched === st.items.length) {
        st.items.forEach((it) => { if (!S.results.has(it.id)) S.results.set(it.id, !mistakes.has(it.id)); });
        setFoot(`${esc(pick(t('fb.right')))} ${icons.arrow(18)}`, true, 'good');
        S.passive = true;
      }
    }));
    S.passive = false;
  }

  function buildStepView(st, listen) {
    const item = st.item;
    const tiles = st.tiles.map((tk, i) => ({ tk: P(tk), i }));
    const chosen = [];
    body.innerHTML = `<div class="prompt-label">${esc(listen ? t('ex.listenBuild') : t('ex.build'))}</div>
      ${listen ? `<div class="listen-center"><div class="row">
          <button class="play big main" data-say="${esc(item.it)}" aria-label="${esc(t('listen'))}">${icons.sound(38)}</button>
          <button class="play" data-say="${esc(item.it)}" data-slow="1" aria-label="${esc(t('slow'))}">${icons.turtle(22)}</button></div></div>`
        : `<div class="prompt-big">${sup(P(meaning(item, lang)), lang)}</div>`}
      <div class="build-answer" id="ans" data-empty="…"></div>
      <div class="tiles" id="tiles">${tiles.map((x) => `<button class="tile it" lang="it" data-i="${x.i}">${esc(x.tk)}</button>`).join('')}</div>`;
    setFoot(esc(t('check')), false);
    const ans = body.querySelector('#ans');
    const paint = () => {
      ans.innerHTML = chosen.map((i) => `<button class="tile it" lang="it" data-back="${i}">${esc(tiles[i].tk)}</button>`).join('');
      body.querySelectorAll('#tiles .tile').forEach((b) => b.classList.toggle('used', chosen.includes(Number(b.dataset.i))));
      S.answer = chosen.map((i) => tiles[i].tk);
      setFoot(esc(t('check')), chosen.length > 0);
    };
    body.querySelector('#tiles').addEventListener('click', (e) => {
      const b = e.target.closest('.tile'); if (!b || S.checked) return;
      const i = Number(b.dataset.i); if (!chosen.includes(i)) { chosen.push(i); paint(); }
    });
    ans.addEventListener('click', (e) => {
      const b = e.target.closest('[data-back]'); if (!b || S.checked) return;
      chosen.splice(chosen.indexOf(Number(b.dataset.back)), 1); paint();
    });
    if (listen && app.speech.available) setTimeout(() => playItem(item), 250);
    S.check = () => {
      const r = checkTokens(S.answer, st.tokens.map(P));
      return { ...r, item };
    };
  }

  function typeStep(st) {
    const item = st.item;
    body.innerHTML = `<div class="prompt-label">${esc(t('ex.type'))}</div>
      <div class="prompt-big">${sup(P(meaning(item, lang)), lang)}</div>
      <div class="type-wrap">
        <textarea id="typed" lang="it" dir="ltr" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="${esc(t('ex.typePh'))}" aria-label="${esc(t('ex.typePh'))}"></textarea>
        <div class="accents" aria-label="Accents">${['à', 'è', 'é', 'ì', 'ò', 'ù', '’'].map((c) => `<button type="button" data-ch="${c}">${c}</button>`).join('')}</div>
      </div>`;
    setFoot(esc(t('check')), false);
    const ta = body.querySelector('#typed');
    ta.addEventListener('input', () => { S.answer = ta.value; setFoot(esc(t('check')), ta.value.trim().length > 0); });
    ta.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); if (!foot.disabled) foot.click(); } });
    body.querySelector('.accents').addEventListener('click', (e) => {
      const b = e.target.closest('[data-ch]'); if (!b) return;
      const { selectionStart: a, selectionEnd: z, value } = ta;
      ta.value = value.slice(0, a) + b.dataset.ch + value.slice(z);
      ta.focus(); ta.selectionStart = ta.selectionEnd = a + 1;
      ta.dispatchEvent(new Event('input'));
    });
    setTimeout(() => ta.focus(), 50);
    S.check = () => {
      ta.readOnly = true;
      const accepted = app.store.state.accepted?.[item.id] || [];
      return { ...check(S.answer, [P(item.it), ...accepted], { frenchMeaning: item.fr }), item };
    };
  }

  // ── check & feedback ───────────────────────────────────────
  function showFeedback(res) {
    const item = res.item;
    const almostKinds = ['double', 'h', 'sound', 'order', 'missing', 'word'];
    const title = res.ok ? pick(t('fb.right')) : almostKinds.includes(res.kind) ? t('fb.almost') : t('fb.wrong');
    const note = res.note ? `<p>${rich(P(res.note[lang] || res.note.fr))}</p>` : '';
    const showAnswer = !res.ok || res.kind !== 'exact';
    sheet.className = `sheet show ${res.ok ? 'ok' : 'no'}`;
    sheet.innerHTML = `<h3>${res.ok ? icons.check(26) : icons.close(26)} ${res.ok && lang !== 'ar' ? itx(title) : esc(title)}</h3>
      <div class="fb-body">${note}
        ${!res.ok && !res.note ? `<div class="faint">${esc(t('fb.answer'))}</div>` : ''}
        ${showAnswer || !res.note ? `<div class="answer">${app.speech.available ? `<button class="play" data-say="${esc(item.it)}" aria-label="${esc(t('listen'))}">${icons.sound(18)}</button>` : ''}
          <span>${itx(P(item.it))}<br><span class="muted" style="font-weight:600">${sup(P(meaning(item, lang)), lang)}</span></span></div>` : ''}
        ${res.willRetry ? `<p class="faint">${esc(t('fb.again'))}</p>` : ''}
      </div>
      <button class="btn block ${res.ok ? 'good' : 'bad'}" id="sheet-next">${esc(t('continue'))} ${icons.arrow(18)}</button>
      <div class="row" style="justify-content:center;margin-top:6px">
        ${!res.ok && ['type', 'build', 'listenBuild'].includes(S.steps[S.i].type) ? `<button class="btn ghost small" id="override">${icons.check(16)} ${esc(t('fb.override'))}</button>` : ''}
        ${app.waButton(messages.question(app.partner, P(item.it), item.fr, Array.isArray(S.answer) ? S.answer.join(' ') : (S.steps[S.i].type === 'type' ? S.answer : '')), t('wa.ask', { p: app.partner }), 'btn ghost small')}
        <button class="btn ghost small" id="report">${icons.flag(16)} ${esc(t('fb.report'))}</button>
      </div>`;
    sheet.querySelector('#sheet-next').addEventListener('click', next);
    sheet.querySelector('#override')?.addEventListener('click', () => {
      // She knows better than a pattern matcher: count it right and remember her answer.
      S.results.set(item.id, true);
      const mine = Array.isArray(S.answer) ? S.answer.join(' ') : String(S.answer || '');
      S.steps = S.steps.filter((x, idx) => idx <= S.i || x.item?.id !== item.id);
      if (S.steps[S.i].type === 'type' && mine.trim()) {
        app.store.update((s) => { s.accepted[item.id] = [...new Set([...(s.accepted[item.id] || []), mine.trim()])].slice(-5); });
      }
      app.toast(t('fb.overrideDone'));
      next();
    });
    sheet.querySelector('#report').addEventListener('click', async () => {
      const note = await app.ask({ title: t('report.title'), text: t('report.text'), placeholder: t('report.ph'), yes: t('report.send'), no: t('cancel') });
      if (note === null) return;
      const mine = Array.isArray(S.answer) ? S.answer.join(' ') : String(S.answer || '');
      app.store.update((s) => { s.reports.push({ itemId: item.id, it: item.it, answer: mine.slice(0, 120), note: note.slice(0, 300), at: dayKey() }); });
      app.toast(t('report.thanks'));
    });
    setTimeout(() => sheet.querySelector('#sheet-next')?.focus(), 60);
    foot.parentElement.style.visibility = 'hidden';
    if (res.ok && app.speech.available && (S.steps[S.i].type === 'build' || S.steps[S.i].type === 'type')) app.play(item.it);
  }

  function requeue(st) {
    const item = st.item;
    if (!item || S.retried.has(item.id)) return;
    S.retried.add(item.id);
    let copy = { ...st };
    if (st.options) copy.options = shuffle([item, ...distractors(item, 3)]);
    if (st.tiles) copy.tiles = shuffle(st.tiles);
    S.steps.push(copy);
  }

  function next() {
    S.passiveCleanup?.(); S.passiveCleanup = null;
    foot.parentElement.style.visibility = '';
    S.i++; render();
  }

  foot.addEventListener('click', () => {
    const st = S.steps[S.i];
    if (!st) return;
    if (!answerable(st) || st.type === 'match') { if (st.type !== 'match' || S.passive) next(); return; }
    if (S.checked) return;
    S.checked = true;
    const res = S.check();
    if (!S.results.has(res.item.id)) S.results.set(res.item.id, res.ok);
    res.willRetry = !res.ok && !S.retried.has(res.item.id) && opts.mode !== 'review';
    if (!res.ok) requeue(st);
    showFeedback(res);
  });

  // ── end ───────────────────────────────────────────────────
  function finish() {
    tick();
    if (opts.mode === 'lesson') clearResume();
    document.removeEventListener('keydown', onKey);
    const total = S.results.size;
    const ok = [...S.results.values()].filter(Boolean).length;
    const mins = Math.max(1, Math.round((Date.now() - S.start) / 60000));
    let extra = '', title, canNow = '', added = 0, waMsg = null;

    if (opts.mode === 'lesson') {
      const info = finishLesson(app, opts.lesson, S.results, { ok, total });
      added = info.added;
      title = t('end.title');
      canNow = `<div class="card tint-sage" style="text-align:start;margin-top:18px"><div class="eyebrow">${esc(t('end.canNow'))}</div><p style="font-weight:700;margin-top:4px">${esc(P(tr(opts.lesson.goal, lang)))}</p></div>`;
      if (info.unitNowDone) extra += `<div class="card tint-gold" style="margin-top:12px;text-align:start"><b>${esc(t('end.unitDone', { u: tr(info.unit.title, lang) }))}</b><p style="margin-top:4px">${esc(P(tr(info.unit.canDo, lang)))}</p></div>`;
      if (info.milestone) extra += `<div class="card tint-rose" style="margin-top:12px"><b>${esc(t('end.milestone', { m: tr(info.milestone.title, lang) }))}</b></div>`;
      waMsg = info.milestone ? messages.milestone(app.partner, info.milestone) : info.unitNowDone ? messages.unit(app.partner, info.unit) : messages.lesson(app.partner, opts.lesson);
    } else {
      const today = dayKey();
      app.store.update((s) => {
        for (const [id, good] of S.results) s.srs[id] = schedule(s.srs[id] || newCard(today, good), good, today);
        app.store.bumpDay('reviews');
        app.store.bumpDay('reviewed', S.results.size);
      });
      pushShare(app);
      title = t('end.reviewTitle');
      canNow = `<p class="muted" style="margin-top:10px">${esc(t('end.reviewText', { a: num(ok), b: num(total) }))}</p>`;
    }

    root.querySelector('.runner').innerHTML = `
      <main class="run-body end">${confetti()}
        <div class="medal">${icons.check(64)}</div>
        <h1>${esc(title)}</h1>
        ${opts.lesson ? `<p class="it-title" style="font-family:var(--font-display);font-style:italic;color:var(--accent-deep);margin-top:4px">${itx(opts.lesson.title.it)}</p>` : ''}
        ${canNow}${extra}
        <div class="stats">
          ${total ? `<div>${icons.check(22)} ${esc(t('end.firstTry', { a: num(ok), b: num(total) }))}</div>` : ''}
          <div>${icons.today(22)} ${esc(t('end.time', { n: num(mins) }))}</div>
          ${added ? `<div>${icons.review(22)} ${esc(t('end.words', { n: num(added) }))}</div>` : ''}
        </div>
        ${waMsg ? app.waButton(waMsg, t('wa.celebrate', { p: app.partner }), 'btn secondary block') : ''}
      </main>
      <div class="run-foot"><a class="btn block" href="#/today">${esc(t('continue'))} ${icons.arrow(18)}</a></div>`;
  }

  render();
}
