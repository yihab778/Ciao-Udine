import { UNITS, MILESTONES, LESSONS } from '../content/index.js';
import { esc, itx, tr, dayKey, addDays } from '../util.js';
import { icons } from '../art.js';
import { num, fmtDate } from '../i18n.js';
import { unitProgress } from '../plan.js';

export function renderProgress(main, app) {
  const { t, store, lang } = app;
  const s = store.state;
  const today = dayKey();
  const goal = s.profile.goal;

  const lessonsDone = LESSONS.filter((l) => s.lessons[l.id]).length;
  const words = Object.keys(s.srs).length;
  const month = today.slice(0, 7);
  const monthMin = Math.round(Object.entries(s.days).filter(([k]) => k.startsWith(month)).reduce((a, [, d]) => a + d.sec, 0) / 60);

  // last 7 days bars
  const week = Array.from({ length: 7 }, (_, i) => {
    const k = addDays(today, i - 6);
    return { k, m: Math.round((s.days[k]?.sec || 0) / 60) };
  });
  const maxM = Math.max(goal, ...week.map((w) => w.m));

  // 12-week calendar (Monday-first columns)
  const dow = (new Date().getDay() + 6) % 7;
  const startKey = addDays(today, -dow - 7 * 11);
  const cols = Array.from({ length: 12 }, (_, w) => Array.from({ length: 7 }, (_, d) => {
    const k = addDays(startKey, w * 7 + d);
    if (k > today) return '<i class="future"></i>';
    const m = (s.days[k]?.sec || 0) / 60;
    const lvl = m <= 0 ? '' : m < goal / 2 ? 'l1' : m < goal ? 'l2' : 'l3';
    return `<i class="${lvl}" title="${esc(fmtDate(k, lang))} · ${Math.round(m)} min"></i>`;
  }).join(''));

  const doneUnits = UNITS.filter((u) => unitProgress(s, u).complete);

  main.innerHTML = `
    <h1 style="margin-top:8px">${esc(t('prog.title'))}</h1>
    <div class="stats3" style="margin-top:14px">
      <div class="stat"><b>${num(lessonsDone)}</b><span>${esc(t('prog.lessons'))}</span></div>
      <div class="stat"><b>${num(words)}</b><span>${esc(t('prog.words'))}</span></div>
      <div class="stat"><b>${num(monthMin)}</b><span>${esc(t('prog.minutes'))}</span></div>
    </div>

    <section class="card" style="margin-top:14px">
      <h3>${esc(t('prog.week'))}</h3>
      <div class="bars" role="img" aria-label="${esc(t('prog.week'))}">${week.map((w) => `
        <div class="b"><em>${w.m ? num(w.m) : ''}</em><i class="${w.m ? '' : 'zero'}" style="height:${Math.max(3, (w.m / maxM) * 100)}%"></i>
        <small>${esc(fmtDate(w.k, lang, { weekday: 'short' }))}</small></div>`).join('')}</div>
    </section>

    <section class="card" style="margin-top:14px">
      <h3>${esc(t('prog.calendar'))}</h3>
      <div class="heat" role="img" aria-label="${esc(t('prog.calendar'))}">${cols.map((c) => `<div class="col">${c}</div>`).join('')}</div>
    </section>

    <section class="card" style="margin-top:14px">
      <h3>${esc(t('prog.milestones'))}</h3>
      <div class="ms-list">${MILESTONES.map((m, i) => {
        const units = UNITS.filter((u) => u.milestone === m.id);
        const tot = units.reduce((a, u) => a + u.lessons.length, 0);
        const dn = units.reduce((a, u) => a + unitProgress(s, u).done, 0);
        return `<div class="ms"><span class="flag ${dn === tot ? 'done' : ''}" style="width:36px;height:36px;border-radius:12px">${dn === tot ? icons.check(18) : num(i + 1)}</span>
          <div class="spacer"><b>${esc(tr(m.title, lang))}</b> <span class="faint">${itx(m.title.it)} · ${esc(m.level)}</span>
          <div class="bar gold" style="margin-top:6px"><i style="width:${(dn / tot) * 100}%"></i></div></div></div>`;
      }).join('')}</div>
    </section>

    <section class="card" style="margin-top:14px">
      <h3>${esc(t('prog.cando'))}</h3>
      ${doneUnits.length
        ? `<ul class="cando-list">${doneUnits.map((u) => `<li>${icons.check(20)}<span>${esc(app.P(tr(u.canDo, lang)))}</span></li>`).join('')}</ul>`
        : `<p class="faint" style="margin-top:8px">${esc(t('prog.candoEmpty'))}</p>`}
    </section>

    <a class="btn secondary block" style="margin-top:16px" href="#/share">${icons.heart(20)} ${esc(t('prog.share', { p: s.profile.partnerName || 'Youssef' }))}</a>
    <p class="faint center" style="margin-top:12px">${esc(t('prog.honest'))}</p>`;
}
