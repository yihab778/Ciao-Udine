import { ITEMS, UNITS, lessonById } from '../content/index.js';
import { esc, itx, sup, tr, meaning } from '../util.js';
import { icons } from '../art.js';
import { num } from '../i18n.js';
import { strength } from '../srs.js';
import { stripAccents, stripArticle, normalize } from '../grade.js';

/** Find a phrase from the same lesson that uses this word, to show it in context. */
function exampleFor(item) {
  if (item.kind !== 'w') return null;
  const core = stripArticle(normalize(item.it)).replace(/[?…]/g, '').trim();
  if (core.length < 3) return null;
  const lesson = lessonById(item.lessonId);
  return lesson.items.find((p) => p.kind === 'p' && normalize(p.it).includes(core)) || null;
}

let filter = 'all';
let query = '';

export function renderWords(main, app) {
  const { t, store, lang } = app;
  const s = store.state;
  const items = Object.keys(s.srs).map((id) => ITEMS.get(id)).filter(Boolean);

  if (!items.length) {
    main.innerHTML = `<h1 style="margin-top:8px">${esc(t('words.title'))}</h1>
      <div class="empty"><div class="art hue-gold">${icons.words(40)}</div><h2>${esc(t('words.empty'))}</h2>
      <p class="muted" style="margin-top:8px">${esc(t('words.emptyText'))}</p>
      <p style="margin-top:18px"><a class="btn" href="#/today">${esc(t('start'))}</a></p></div>`;
    return;
  }

  const units = UNITS.filter((u) => items.some((i) => i.unitId === u.id));
  const labels = t('words.strength');

  main.innerHTML = `<h1 style="margin-top:8px">${esc(t('words.title'))}</h1>
    <p class="faint">${esc(t('words.count', { n: num(items.length) }))}</p>
    <div class="search">${icons.search(22)}<input type="search" id="q" placeholder="${esc(t('words.search'))}" aria-label="${esc(t('words.search'))}" value="${esc(query)}"></div>
    <div class="filters" role="group">
      <button data-f="all" aria-pressed="${filter === 'all'}">${esc(t('words.all'))}</button>
      ${units.map((u) => `<button data-f="${u.id}" aria-pressed="${filter === u.id}">${esc(tr(u.title, lang))}</button>`).join('')}
    </div>
    <ul class="word-list" id="list"></ul>`;

  const list = main.querySelector('#list');
  const paint = () => {
    const q = stripAccents(query.toLowerCase().trim());
    const shown = items.filter((i) => (filter === 'all' || i.unitId === filter)
      && (!q || stripAccents(`${app.P(i.it)} ${i.fr} ${i.ar}`.toLowerCase()).includes(q)));
    list.innerHTML = shown.length ? shown.map((i) => {
      const st = strength(s.srs[i.id]);
      return `<li>
        ${app.speech.available ? `<button class="play" data-say="${esc(i.it)}" aria-label="${esc(t('listen'))}">${icons.sound(18)}</button>` : ''}
        <span class="w">${itx(app.P(i.it))}${sup(app.P(meaning(i, lang)), lang)}${(() => { const ex = exampleFor(i); return ex ? `<span class="ex faint">${itx(app.P(ex.it))}</span>` : ''; })()}</span>
        <span class="dots" title="${esc(labels[st])}" aria-label="${esc(labels[st])}">${[0, 1, 2, 3].map((d) => `<i class="${d < st ? 'on' : ''}"></i>`).join('')}</span>
      </li>`;
    }).join('') : `<li class="faint">${esc(t('words.noMatch'))}</li>`;
  };
  paint();
  main.querySelector('#q').addEventListener('input', (e) => { query = e.target.value; paint(); });
  main.querySelectorAll('[data-f]').forEach((b) => b.addEventListener('click', () => {
    filter = b.dataset.f;
    main.querySelectorAll('[data-f]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    paint();
  }));
}
