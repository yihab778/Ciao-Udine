import { UNITS, MILESTONES, nextLesson } from '../content/index.js';
import { esc, itx, tr } from '../util.js';
import { icons } from '../art.js';
import { num, fmtMonth, fmtDate } from '../i18n.js';
import { planInfo, unitProgress } from '../plan.js';

export function renderPath(main, app) {
  const { t, store, lang } = app;
  const s = store.state;
  const plan = planInfo(s);
  const next = nextLesson(s.lessons);
  const targets = Object.fromEntries(plan.unitTargets.map((x) => [x.unitId, x.date]));
  const months = Math.max(3, Math.round(plan.totalDays / 30.4));

  const paceText = plan.pace === 'behind'
    ? t('path.pace.behind', { n: num(Math.max(1, Math.ceil(plan.perWeek))) })
    : t(`path.pace.${plan.pace}`);

  const html = MILESTONES.map((m, mi) => {
    const units = UNITS.filter((u) => u.milestone === m.id);
    const mDone = units.every((u) => unitProgress(s, u).complete);
    return `
    <div class="milestone-head">
      <span class="flag ${mDone ? 'done' : ''}">${mDone ? icons.check(22) : num(mi + 1)}</span>
      <div><div class="eyebrow">${esc(t('path.milestone'))} · ${esc(t('path.level', { l: m.level }))}</div>
        <h2>${esc(tr(m.title, lang))} <span class="faint">${itx(m.title.it)}</span></h2></div>
    </div>
    <div class="trail">
      ${units.map((u) => {
        const pr = unitProgress(s, u);
        const isCurrent = !pr.complete && u.lessons.some((l) => l.id === next?.id);
        return `
        <div class="stop ${pr.complete ? 'done' : isCurrent ? 'current' : ''}">
          <span class="dot">${pr.complete ? icons.check(14) : ''}</span>
          <article class="card unit-card" id="${u.id}">
            <div class="head">
              <span class="unit-badge hue-${u.hue}">${icons[u.icon](26)}</span>
              <div class="spacer">
                <div class="faint">${esc(t('path.month', { n: num(u.month) }))} · ${esc(t('path.target', { d: fmtDate(targets[u.id], lang, { month: 'short', year: 'numeric' }) }))}</div>
                <h3>${esc(tr(u.title, lang))}</h3>
                <div class="it-title">${itx(u.title.it)}</div>
              </div>
              <span class="chip ${pr.complete ? 'sage' : ''}">${num(pr.done)}/${num(pr.total)}</span>
            </div>
            <div class="bar sage" style="margin-top:12px"><i style="width:${(pr.done / pr.total) * 100}%"></i></div>
            <p class="cando"><b>${esc(t('path.youCan'))} :</b> ${esc(app.P(tr(u.canDo, lang)))}</p>
            <ul class="lesson-list">
              ${u.lessons.map((l) => {
                const done = !!s.lessons[l.id];
                const isNext = l.id === next?.id;
                return `<li><a href="#/lesson/${l.id}" class="${done ? 'done' : ''} ${isNext ? 'next' : ''}">
                  <span class="st">${done ? icons.check(14) : l.kind === 'scene' ? icons.people(14) : num(l.index + 1)}</span>
                  <span class="t">${esc(app.P(tr(l.title, lang)))}<small>${itx(l.title.it)} · ${esc(l.kind === 'scene' ? t('path.scene') : t('path.lesson'))}</small></span>
                  ${isNext ? `<span class="chip rose">${esc(t('path.next'))}</span>` : ''}
                </a></li>`;
              }).join('')}
            </ul>
            ${pr.done > 0 ? `<a class="btn secondary small block" style="margin-top:12px" href="#/practice/${u.id}">${icons.review(18)} ${esc(t('path.practice'))}</a>` : ''}
          </article>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');

  main.innerHTML = `
    <h1 style="margin-top:8px">${esc(t('path.title'))}</h1>
    <section class="card plan-card tint-blue" style="margin-top:14px">
      <div class="row">${icons.calendar(24)}<div class="spacer">
        <b>${esc(t('path.plan', { n: num(months), d: fmtMonth(s.profile.moveDate, lang) }))}</b>
        <p style="margin-top:4px">${esc(paceText)}</p>
        <div class="bar" style="margin-top:10px"><i style="width:${(plan.done / plan.total) * 100}%"></i></div>
        <p class="faint" style="margin-top:6px">${num(plan.done)} / ${num(plan.total)}</p>
      </div></div>
      <a class="btn ghost small" href="#/settings" style="margin-top:6px">${esc(t('path.adjust'))}</a>
    </section>
    ${html}
    <div class="center faint" style="margin-top:20px">${icons.castle(40)}<p>${itx('Benvenuta a casa!')}</p></div>`;

  // Scroll the current stage into view
  const cur = main.querySelector('.stop.current');
  if (cur && s.lessons && Object.keys(s.lessons).length) setTimeout(() => cur.scrollIntoView({ block: 'center', behavior: 'smooth' }), 120);
}
