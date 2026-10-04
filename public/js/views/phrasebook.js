// Survival phrasebook: available from day one, offline, searchable,
// with a large "show this to the person" mode for pharmacies, offices and emergencies.
import { PHRASEBOOK } from '../content/phrasebook.js';
import { esc, itx, sup, tr } from '../util.js';
import { icons } from '../art.js';
import { stripAccents } from '../grade.js';

let query = '';
let open = 'understand';

export function renderPhrasebook(main, app) {
  const { t, lang } = app;
  const tx = (row) => (lang === 'ar' ? row[2] : row[1]);

  main.innerHTML = `
    <h1 style="margin-top:8px">${esc(t('pb.title'))}</h1>
    <p class="muted" style="margin-top:4px">${esc(t('pb.intro'))}</p>
    <div class="search">${icons.search(22)}<input type="search" id="pbq" placeholder="${esc(t('pb.search'))}" aria-label="${esc(t('pb.search'))}" value="${esc(query)}"></div>
    <div id="pb-list" class="stack"></div>`;

  const list = main.querySelector('#pb-list');
  const row = (r) => `
    <li>
      ${app.speech.available ? `<button class="play" data-say="${esc(r[0])}" aria-label="${esc(t('listen'))}">${icons.sound(18)}</button>` : ''}
      <span class="w">${itx(r[0])}${sup(tx(r), lang)}</span>
      <button class="icon-btn" data-show="${esc(r[0])}" data-tr="${esc(tx(r))}" aria-label="${esc(t('pb.show'))}" title="${esc(t('pb.show'))}">${icons.expand(20)}</button>
    </li>`;

  const paint = () => {
    const q = stripAccents(query.toLowerCase().trim());
    if (q) {
      const hits = PHRASEBOOK.flatMap((c) => c.items).filter((r) => stripAccents(r.join(' ').toLowerCase()).includes(q));
      list.innerHTML = hits.length ? `<ul class="word-list">${hits.map(row).join('')}</ul>` : `<p class="faint">${esc(t('words.noMatch'))}</p>`;
      return;
    }
    list.innerHTML = PHRASEBOOK.map((c) => `
      <section class="card unit-card">
        <button class="row pb-head" data-open="${c.id}" aria-expanded="${open === c.id}" style="width:100%;background:none;border:0;padding:0;cursor:pointer;text-align:start">
          <span class="unit-badge hue-${c.id === 'emergency' ? 'rose' : c.id === 'traps' ? 'gold' : 'sage'}">${icons[c.icon](22)}</span>
          <b class="spacer">${esc(tr(c.title, lang))}</b><span class="chip">${c.items.length}</span>
        </button>
        ${open === c.id ? `<ul class="word-list">${c.items.map(row).join('')}</ul>` : ''}
      </section>`).join('');
  };
  paint();

  main.querySelector('#pbq').addEventListener('input', (e) => { query = e.target.value; paint(); });
  list.addEventListener('click', (e) => {
    const head = e.target.closest('[data-open]');
    if (head) { open = open === head.dataset.open ? '' : head.dataset.open; paint(); return; }
    const show = e.target.closest('[data-show]');
    if (show) showBig(app, show.dataset.show, show.dataset.tr);
  });
}

/** Full-screen card to show to a pharmacist, a bus driver, an office clerk… */
function showBig(app, it, translation) {
  const { t, lang } = app;
  const el = document.createElement('div');
  el.className = 'show-big';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <button class="icon-btn close" aria-label="${esc(t('close'))}">${icons.close(28)}</button>
    <p class="big it" lang="it" dir="ltr">${esc(it)}</p>
    <p class="small" lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">${esc(translation)}</p>
    ${app.speech.available ? `<button class="btn" data-say="${esc(it)}">${icons.sound(20)} ${esc(t('listen'))}</button>` : ''}`;
  const close = () => { el.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  el.querySelector('.close').addEventListener('click', close);
  document.addEventListener('keydown', onKey);
  document.body.appendChild(el);
  el.querySelector('.close').focus();
}
