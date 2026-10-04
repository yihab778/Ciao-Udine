import { LESSONS, ITEMS, UNITS, unitById, nextLesson } from '../content/index.js';
import { getResume } from './runner.js';
import { backupFile } from './settings.js';
import { messages } from '../whatsapp.js';
import { esc, itx, sup, tr, meaning, dayKey, addDays, daysBetween } from '../util.js';
import { skyline, ring, icons } from '../art.js';
import { num, fmtDate } from '../i18n.js';
import { todayReview } from '../srs.js';
import { planInfo, unitProgress } from '../plan.js';
import { live } from '../share.js';

export function renderToday(main, app) {
  const { t, store, lang } = app;
  const s = store.state;
  const p = s.profile;
  const today = dayKey();
  const hour = new Date().getHours();
  const greet = hour < 12 ? t('greet.morning') : hour < 18 ? t('greet.afternoon') : t('greet.evening');
  const plan = planInfo(s);

  const minutes = Math.floor((s.days[today]?.sec || 0) / 60);
  const goalPct = minutes / p.goal;

  let countdown;
  if (plan.daysLeft <= 0) countdown = t('today.arrived');
  else if (plan.daysLeft > 75) countdown = t('today.countdownMonths', { n: num(plan.monthsLeft) });
  else countdown = t('today.countdown', { n: num(plan.daysLeft) });

  const next = nextLesson(s.lessons);
  const rv = todayReview(s, today);
  const due = rv.ids.length;
  const resume = getResume();

  // Welcome back after a break: warm, never guilt.
  const activeDays = Object.keys(s.days).filter((k) => k < today && (s.days[k].sec > 0 || s.days[k].lessons > 0)).sort();
  const lastActive = activeDays[activeDays.length - 1];
  const gap = lastActive ? daysBetween(lastActive, today) : 0;
  const welcomeBack = gap >= 4 && !(s.days[today]?.sec > 0);

  // Big review pile → suggest reviewing first (never blocks the lesson)
  const reviewFirst = due >= 20;

  // Real-life mission for the current stage (once she has started it)
  const latestUnit = [...UNITS].reverse().find((u) => unitProgress(s, u).done > 0);
  const mission = latestUnit && !s.missions[latestUnit.id] ? latestUnit : null;

  // Data safety: iPhone Safari can wipe website storage after 7 days unless installed
  const iosTip = app.iosNotInstalled && !s.dismissed.ios;
  const lessonsDone = Object.keys(s.lessons).length;
  const backupDue = lessonsDone >= 3 && (!s.lastBackupAt || daysBetween(s.lastBackupAt, today) >= 30) && !(s.dismissed.backup && daysBetween(s.dismissed.backup, today) < 14);

  // Phrase of the day: from learned phrases if any, else from the next lesson
  const learnedPhrases = Object.keys(s.srs).map((id) => ITEMS.get(id)).filter((i) => i && i.kind === 'p');
  const pool = learnedPhrases.length ? learnedPhrases : (next || LESSONS[0]).items.filter((i) => i.kind === 'p');
  const seed = daysBetween('2024-01-01', today);
  const phrase = pool.length ? pool[seed % pool.length] : null;

  // Week rhythm
  const week = [];
  for (let i = 6; i >= 0; i--) {
    const k = addDays(today, -i);
    const sec = s.days[k]?.sec || 0;
    week.push({ k, cls: sec >= p.goal * 60 ? 'on' : sec > 0 ? 'half' : '', today: k === today });
  }
  const active = week.filter((w) => w.cls).length;

  let nextCard;
  if (next) {
    const u = unitById(next.unitId);
    const isScene = next.kind === 'scene';
    const mins = isScene ? 5 : Math.max(6, Math.round(next.items.length * 0.6));
    const resuming = resume && resume.lessonId === next.id;
    nextCard = `
    <section class="card lesson-card" aria-labelledby="next-t">
      <span class="unit-icon">${icons[u.icon](130)}</span>
      <div class="row wrap"><span class="chip rose">${esc(isScene ? t('today.scene') : t('today.next'))}</span>
        <span class="chip">${esc(t('path.month', { n: num(u.month) }))} · ${esc(tr(u.title, lang))}</span></div>
      <h2 id="next-t">${esc(app.P(tr(next.title, lang)))}</h2>
      <div class="it-title">${itx(next.title.it)}</div>
      <p class="muted" style="margin:8px 0 16px">${esc(app.P(tr(next.goal, lang)))} <span class="faint">· ${esc(t('today.minutes', { n: num(mins) }))}</span></p>
      <a class="btn block ${reviewFirst ? 'secondary' : ''}" href="#/lesson/${next.id}">${esc(resuming ? t('today.resume') : t('start'))} ${icons.arrow(18)}</a>
    </section>`;
  } else {
    nextCard = `<section class="card tint-sage"><h2>Bravissima!</h2><p style="margin-top:8px">${esc(t('today.allDone'))}</p></section>`;
  }

  const cheer = s.cheers?.[0];

  const reviewCard = `
      <section class="card ${reviewFirst ? 'tint-blue' : ''}" aria-labelledby="rev-t">
        <div class="row"><span class="unit-badge hue-blue">${icons.review(24)}</span>
          <div class="spacer"><h3 id="rev-t">${esc(t('today.review'))}</h3>
          <p class="faint">${esc(due ? t('today.reviewCount', { n: num(due) }) : rv.due && !rv.left ? t('today.reviewCapDone') : t('today.reviewNone'))}</p></div>
          ${due ? `<a class="btn small" href="#/review/go">${esc(t('today.reviewStart'))}</a>` : ''}
        </div>
        ${reviewFirst ? `<p style="margin-top:10px;font-weight:700">${esc(t('today.reviewFirst'))}</p>` : ''}
        ${rv.backlog ? `<p class="faint" style="margin-top:8px">${esc(t('today.backlog', { n: num(rv.due - due) }))}</p>` : ''}
      </section>`;

  main.innerHTML = `
    <div class="hero">${skyline({ height: 150 })}</div>
    <div class="hero-text">
      <h1>${itx(`${greet}, ${p.name || 'Nour'}!`)}</h1>
      <div class="countdown">${icons.castle(18)} <span>${esc(countdown)}</span></div>
    </div>

    <div class="stack" style="margin-top:18px">
      <section class="card goal-card" aria-label="${esc(t('today.goal', { m: minutes, g: p.goal }))}">
        <div class="ring-wrap">${ring(goalPct, 72, 8)}<span>${num(minutes)}</span></div>
        <div>
          <div style="font-weight:800">${esc(goalPct >= 1 ? t('today.goalDone') : t('today.goal', { m: num(minutes), g: num(p.goal) }))}</div>
          ${goalPct >= 1 ? `<div style="margin-top:6px">${app.waButton(messages.goal(app.partner, minutes), t('wa.tell', { p: app.partner }), 'btn ghost small')}</div>` : ''}
          <div class="faint">${esc(fmtDate(today, lang, { weekday: 'long', day: 'numeric', month: 'long' }))}</div>
        </div>
      </section>

      ${welcomeBack ? `<section class="card tint-sage"><h3>${itx(`Bentornata, ${p.name || 'Nour'}!`)}</h3>
        <p style="margin-top:6px">${esc(t('today.welcomeBack', { n: num(gap) }))}</p></section>` : ''}

      ${iosTip ? `<section class="card tint-gold" id="ios-tip"><div class="row"><b class="spacer">${esc(t('safe.iosTitle'))}</b>
        <button class="icon-btn" data-dismiss="ios" aria-label="${esc(t('close'))}">${icons.close(18)}</button></div>
        <p style="margin-top:6px">${esc(t('safe.iosText'))}</p><p class="faint" style="margin-top:6px">${esc(t('safe.iosSteps'))}</p></section>` : ''}

      <div id="cheer-slot">${cheer ? cheerCard(cheer, app) : ''}</div>

      ${reviewFirst ? reviewCard + nextCard : nextCard + reviewCard}

      ${mission ? `<section class="card tint-rose">
        <div class="eyebrow">${icons.flag(14)} ${esc(t('mission.title'))}</div>
        <p style="margin-top:6px;font-weight:700">${esc(app.P(tr(mission.mission, lang)))}</p>
        <button class="btn small" style="margin-top:12px" id="mission-done" data-unit="${mission.id}">${icons.check(16)} ${esc(t('mission.done'))}</button>
      </section>` : ''}

      <a class="card row" href="#/phrasebook" style="text-decoration:none;color:inherit">
        <span class="unit-badge hue-sage">${icons.lifebuoy(24)}</span>
        <span class="spacer"><b>${esc(t('pb.title'))}</b><br><span class="faint">${esc(t('pb.teaser'))}</span></span>${icons.arrow(18)}
      </a>

      ${backupDue ? `<section class="card"><div class="row"><b class="spacer">${esc(t('safe.backupTitle'))}</b>
        <button class="icon-btn" data-dismiss="backup" aria-label="${esc(t('close'))}">${icons.close(18)}</button></div>
        <p class="faint" style="margin-top:6px">${esc(t('safe.backupText'))}</p>
        <button class="btn secondary small" style="margin-top:10px" id="backup-now">${icons.download(16)} ${esc(t('safe.backupBtn'))}</button></section>` : ''}

      ${phrase ? `
      <section class="card tint-gold phrase-card">
        <div class="eyebrow">${esc(t('today.phrase'))}</div>
        <div class="row" style="margin-top:8px">
          <button class="play" data-say="${esc(phrase.it)}" aria-label="${esc(t('listen'))}">${icons.sound(20)}</button>
          <div>${itx(app.P(phrase.it))}<div class="muted">${sup(app.P(meaning(phrase, lang)), lang)}</div></div>
        </div>
      </section>` : ''}

      <section class="card">
        <h3>${esc(t('today.week'))}</h3>
        <div class="week">${week.map((w) => `<div>${esc(fmtDate(w.k, lang, { weekday: 'narrow' }))}<i class="${w.cls} ${w.today ? 'today' : ''}"></i></div>`).join('')}</div>
        <p class="faint" style="margin-top:10px">${esc(t('today.weekNote', { n: num(active) }))}</p>
      </section>

      ${app.canInstall ? `<button class="btn secondary block" id="install">${icons.download(20)} ${esc(t('install'))}</button>` : ''}
    </div>`;

  main.querySelector('#install')?.addEventListener('click', () => app.install());
  main.querySelectorAll('[data-dismiss]').forEach((b) => b.addEventListener('click', () => {
    store.update((st) => { st.dismissed[b.dataset.dismiss] = today; }); app.rerender();
  }));
  main.querySelector('#mission-done')?.addEventListener('click', (e) => {
    store.update((st) => { st.missions[e.currentTarget.dataset.unit] = today; });
    app.toast(t('mission.bravo')); app.rerender();
  });
  main.querySelector('#backup-now')?.addEventListener('click', () => backupFile(app));

  // Fetch partner encouragements when live sharing is configured
  if (s.share.enabled && s.share.live?.id) {
    live.get(s.share.live.id).then((res) => {
      if (!res?.cheers?.length) return;
      store.update((st) => { st.cheers = res.cheers.slice(0, 10); });
      const slot = main.querySelector('#cheer-slot');
      if (slot) slot.innerHTML = cheerCard(res.cheers[0], app);
    }).catch(() => {});
  }
}

function cheerCard(c, app) {
  return `<section class="card cheer"><div class="eyebrow">${esc(app.t('today.cheers', { p: app.profile.partnerName || 'Youssef' }))}</div>
    <p style="margin-top:6px;font-size:1.1rem;font-weight:700" dir="auto">${esc(c.text)}</p></section>`;
}
