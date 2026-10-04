import { ITEMS } from '../content/index.js';
import { esc, itx, sup, meaning } from '../util.js';
import { icons } from '../art.js';
import { num } from '../i18n.js';
import { dueIds, strength } from '../srs.js';
import { reviewSteps } from '../engine.js';
import { runSession } from './runner.js';

export function renderReviewHome(main, app) {
  const { t, store, lang } = app;
  const s = store.state;
  const due = dueIds(s.srs);
  const total = Object.keys(s.srs).length;

  if (!total) {
    main.innerHTML = `<h1 style="margin-top:8px">${esc(t('review.title'))}</h1>
      <div class="empty"><div class="art hue-blue">${icons.review(40)}</div>
      <h2>${esc(t('review.noWords'))}</h2>
      <p style="margin-top:18px"><a class="btn" href="#/today">${esc(t('nav.today'))}</a></p></div>`;
    return;
  }

  const preview = due.slice(0, 6).map((id) => ITEMS.get(id)).filter(Boolean);
  const weakest = Object.entries(s.srs).sort((a, b) => a[1].ivl - b[1].ivl).slice(0, 15).map(([id]) => id);

  main.innerHTML = `<h1 style="margin-top:8px">${esc(t('review.title'))}</h1>
    ${due.length ? `
      <section class="card tint-blue" style="margin-top:14px">
        <h2>${esc(t('today.reviewCount', { n: num(due.length) }))}</h2>
        <ul class="word-list">${preview.map((it) => `<li><span class="w">${itx(app.P(it.it))}${sup(app.P(meaning(it, lang)), lang)}</span></li>`).join('')}</ul>
        <a class="btn block" style="margin-top:16px" href="#/review/go">${esc(t('review.start', { n: num(Math.min(15, due.length)) }))} ${icons.arrow(18)}</a>
      </section>`
    : `<div class="empty"><div class="art hue-sage">${icons.check(40)}</div>
        <h2>${esc(t('review.empty'))}</h2><p class="muted" style="margin-top:8px">${esc(t('review.emptyText'))}</p>
        <button class="btn secondary" style="margin-top:18px" id="extra">${esc(t('review.extra', { n: num(weakest.length) }))}</button></div>`}`;

  main.querySelector('#extra')?.addEventListener('click', () => {
    const steps = reviewSteps(weakest, s.srs, { audio: app.speech.available });
    runSession(document.getElementById('app'), app, { mode: 'review', steps });
  });
}

export function startReview(root, app) {
  const s = app.store.state;
  const ids = dueIds(s.srs);
  if (!ids.length) { app.navigate('#/review'); return; }
  const steps = reviewSteps(ids, s.srs, { audio: app.speech.available });
  runSession(root, app, { mode: 'review', steps });
}

export { strength };
