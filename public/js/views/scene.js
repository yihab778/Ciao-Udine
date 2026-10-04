// Interactive guided dialogues: realistic replies, branching reactions,
// and a friendly coach that explains why an answer doesn't fit.
import { unitById } from '../content/index.js';
import { esc, itx, sup, rich, tr, shuffle } from '../util.js';
import { icons, confetti } from '../art.js';
import { num } from '../i18n.js';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export function runScene(root, app, lesson, { onDone }) {
  const { t, lang } = app;
  const P = app.P;
  const u = unitById(lesson.unitId);
  const npc = lesson.npc;
  const autoplay = app.profile.autoplay !== false && app.speech.available;
  let help = false, turnIdx = 0, firstTry = 0, wrongThisTurn = 0, busy = false;
  let last = Date.now();
  const start = Date.now();
  const tick = () => { const n = Date.now(); app.store.addTime((n - last) / 1000); last = n; };

  root.innerHTML = `
  <div class="runner">
    <div class="run-top">
      <button class="icon-btn" id="quit" aria-label="${esc(t('close'))}">${icons.close(24)}</button>
      <div class="bar"><i style="width:0%"></i></div>
      <button class="btn ghost small" id="help" aria-pressed="false">${esc(t('scene.helpOff'))}</button>
    </div>
    <main class="run-body" id="body">
      <div class="scene-setting card tint-${u.hue === 'gold' ? 'gold' : u.hue === 'blue' ? 'blue' : u.hue === 'sage' ? 'sage' : 'rose'}">
        <span class="avatar hue-${u.hue}" style="background:var(--surface)">${esc(npc.name.replace(/^(Sig\.ra|Sig\.|Dott\.ssa)\s*/, '')[0])}</span>
        <div>
          <div class="eyebrow">${esc(t('path.scene'))} · ${itx(lesson.title.it)}</div>
          <p style="font-weight:800;margin-top:2px">${esc(P(tr(lesson.title, lang)))}</p>
          <p class="muted" style="margin-top:4px">${esc(P(tr(lesson.setting, lang)))}</p>
          <p class="faint" style="margin-top:6px">${esc(t('scene.with', { n: npc.name, r: P(tr(npc.role, lang)) }))}</p>
        </div>
      </div>
      <div class="chat" id="chat" aria-live="polite"></div>
      <div id="opts" style="margin-top:16px"></div>
    </main>
    <div class="run-foot" id="foot"><button class="btn block" id="go">${esc(t('start'))} ${icons.arrow(18)}</button></div>
  </div>`;

  const chat = root.querySelector('#chat');
  const optsEl = root.querySelector('#opts');
  const footEl = root.querySelector('#foot');
  const barEl = root.querySelector('.bar > i');
  const scrollEnd = () => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 30);

  root.querySelector('.runner').addEventListener('click', tick, true);
  root.querySelector('#quit').addEventListener('click', async () => {
    if (!turnIdx && !chat.children.length) return app.navigate('#/path');
    const ok = await app.confirm({ title: t('lesson.quit'), text: t('lesson.quitText'), yes: t('lesson.quitYes'), no: t('lesson.quitNo') });
    if (ok) { tick(); app.speech.stop(); app.navigate('#/path'); }
  });
  root.querySelector('#help').addEventListener('click', (e) => {
    help = !help;
    e.currentTarget.setAttribute('aria-pressed', String(help));
    e.currentTarget.textContent = help ? t('scene.helpOn') : t('scene.helpOff');
    root.querySelectorAll('.trans').forEach((el) => { el.hidden = !help; });
    root.querySelectorAll('.tr-btn').forEach((el) => { el.hidden = help; });
  });

  function bubble(kind, line, who = '') {
    const [it, fr, ar] = line;
    const trText = lang === 'ar' ? ar || fr : fr;
    const el = document.createElement('div');
    el.className = `bubble ${kind}`;
    el.innerHTML = `${who ? `<div class="who">${esc(who)}</div>` : ''}
      <div class="line">${itx(P(it))}${app.speech.available ? `<button class="play" data-say="${esc(it)}" aria-label="${esc(t('listen'))}">${icons.sound(16)}</button>` : ''}</div>
      <div class="trans" ${help ? '' : 'hidden'}>${sup(P(trText), lang)}</div>
      <button class="tr-btn" ${help ? 'hidden' : ''}>${esc(t('showTr'))}</button>`;
    el.querySelector('.tr-btn').addEventListener('click', (e) => { e.currentTarget.hidden = true; el.querySelector('.trans').hidden = false; });
    chat.appendChild(el);
    scrollEnd();
    return el;
  }
  function coach(html) {
    const el = document.createElement('div');
    el.className = 'bubble coach';
    el.innerHTML = `<div class="who">${icons.heart(14)} ${esc(t('scene.coach'))}</div><p>${html}</p>`;
    chat.appendChild(el); scrollEnd();
  }
  async function npcSays(line) {
    const typing = document.createElement('div');
    typing.className = 'bubble npc'; typing.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    chat.appendChild(typing); scrollEnd();
    await wait(650);
    typing.remove();
    bubble('npc', line, npc.name);
    if (autoplay) await app.speech.speak(P(line[0]), app.profile.rate || 0.9);
  }

  async function playTurn() {
    barEl.style.width = `${(turnIdx / lesson.turns.length) * 100}%`;
    const turn = lesson.turns[turnIdx];
    wrongThisTurn = 0;
    if (turn.npc) await npcSays(turn.npc);
    if (turn.prompt) coach(esc(P(tr(turn.prompt, lang))));
    showOptions(turn);
  }

  function showOptions(turn) {
    const options = shuffle(turn.options);
    optsEl.innerHTML = `<p class="prompt-label">${esc(t('scene.yourTurn'))}</p>
      <div class="scene-options options">${options.map((o, i) => `
        <button class="option" data-i="${turn.options.indexOf(o)}"><span class="k">${i + 1}</span>
          <span>${itx(P(o.t[0]))}<span class="trans" ${help ? '' : 'hidden'}>${sup(P(lang === 'ar' ? o.t[2] : o.t[1]), lang)}</span></span></button>`).join('')}</div>`;
    scrollEnd();
    optsEl.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => choose(turn, turn.options[Number(b.dataset.i)], b)));
  }

  async function choose(turn, opt, btn) {
    if (busy) return;
    if (!opt.ok) {
      wrongThisTurn++;
      btn.classList.add('wrong'); btn.disabled = true;
      coach(rich(P(opt.fb?.[lang] || opt.fb?.fr || '')));
      return;
    }
    busy = true;
    if (!wrongThisTurn) firstTry++;
    optsEl.innerHTML = '';
    bubble('me', opt.t, app.profile.name || '');
    if (autoplay) await app.speech.speak(P(opt.t[0]), app.profile.rate || 0.9);
    if (opt.reply) await npcSays(opt.reply);
    turnIdx++;
    busy = false;
    if (turnIdx < lesson.turns.length) playTurn();
    else ending();
  }

  async function ending() {
    await npcSays(lesson.end);
    barEl.style.width = '100%';
    footEl.innerHTML = `<button class="btn block good" id="fin">${esc(t('done'))} ${icons.check(18)}</button>`;
    footEl.hidden = false;
    footEl.querySelector('#fin').addEventListener('click', () => {
      tick();
      const info = onDone({ ok: firstTry, total: lesson.turns.length });
      const mins = Math.max(1, Math.round((Date.now() - start) / 60000));
      root.querySelector('.runner').innerHTML = `
        <main class="run-body end">${confetti()}
          <div class="medal">${icons.people(60)}</div>
          <h1>${esc(t('end.sceneTitle'))}</h1>
          <p style="font-family:var(--font-display);font-style:italic;color:var(--accent-deep);margin-top:4px">${itx(lesson.title.it)}</p>
          <div class="card tint-sage" style="text-align:start;margin-top:18px"><div class="eyebrow">${esc(t('end.canNow'))}</div><p style="font-weight:700;margin-top:4px">${esc(P(tr(lesson.goal, lang)))}</p></div>
          ${info?.unitNowDone ? `<div class="card tint-gold" style="margin-top:12px;text-align:start"><b>${esc(t('end.unitDone', { u: tr(info.unit.title, lang) }))}</b><p style="margin-top:4px">${esc(P(tr(info.unit.canDo, lang)))}</p></div>` : ''}
          ${info?.milestone ? `<div class="card tint-rose" style="margin-top:12px"><b>${esc(t('end.milestone', { m: tr(info.milestone.title, lang) }))}</b></div>` : ''}
          <div class="stats">
            <div>${icons.check(22)} ${esc(t('end.firstTry', { a: num(firstTry), b: num(lesson.turns.length) }))}</div>
            <div>${icons.today(22)} ${esc(t('end.time', { n: num(mins) }))}</div>
          </div>
        </main>
        <div class="run-foot"><a class="btn block" href="#/today">${esc(t('continue'))} ${icons.arrow(18)}</a></div>`;
    });
    scrollEnd();
  }

  root.querySelector('#go').addEventListener('click', () => { footEl.hidden = true; footEl.innerHTML = ''; playTurn(); });
}
