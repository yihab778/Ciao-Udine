// Partner view: a calm, encouraging summary — never a surveillance tool.
import { APP } from '../config.js';
import { UNITS, MILESTONES, ITEMS, lessonById, unitById } from '../content/index.js';
import { esc, itx, sup, tr, meaning, personalize, dayKey, addDays } from '../util.js';
import { icons, logo, skyline } from '../art.js';
import { t, num, fmtMonth, fmtDate, setLang } from '../i18n.js';
import { decodeSummary, live } from '../share.js';

const VKEY = `${APP.storageKey}:viewer-lang`;
const getViewerLang = (fallback = 'fr') => { try { return localStorage.getItem(VKEY) || fallback; } catch { return fallback; } };
const setViewerLang = (l) => { try { localStorage.setItem(VKEY, l); } catch { /* optional */ } };

/** Pure renderer used by the learner preview and by the partner's page. */
export function partnerDashboard(sm, lang, { preview = false } = {}) {
  const prof = { name: sm.name, partnerName: sm.partner, moveDate: sm.move };
  const P = (x) => personalize(x, prof);
  const name = sm.name || 'Nour';
  const partner = sm.partner || 'Youssef';
  const goal = sm.goal || 15;
  const active = sm.last28.filter((m) => m > 0).length;
  const cu = unitById(sm.current) || UNITS[0];
  const scene = sm.focus?.scene ? lessonById(sm.focus.scene) : null;
  const tricky = (sm.focus?.items || []).map((id) => ITEMS.get(id)).filter(Boolean);
  const ms = MILESTONES.filter((m) => sm.milestonesDone.includes(m.id));
  const level = (ms[ms.length - 1] || MILESTONES[0]).level;

  const rows = [0, 1, 2, 3].map((w) => sm.last28.slice(w * 7, w * 7 + 7).map((m, d) => {
    const lvl = m <= 0 ? '' : m < goal / 2 ? 'l1' : m < goal ? 'l2' : 'l3';
    return `<i class="${lvl}" title="${esc(fmtDate(addDays(sm.at, -(27 - (w * 7 + d))), lang))}"></i>`;
  }).join(''));

  return `
  <div class="stack">
    <div class="pv-head">
      <span class="pv-avatar">${esc(name[0] || 'N')}</span>
      <div><h1 style="font-size:1.5rem">${esc(t('pv.title', { n: name }, lang))}</h1>
        <p class="faint">${esc(t('pv.sub', { n: name, d: fmtDate(sm.at, lang) }, lang))}</p></div>
    </div>
    <div class="row wrap"><span class="chip blue">${icons.castle(14)} ${esc(fmtMonth(sm.move, lang))}</span><span class="chip gold">${esc(level)}</span></div>

    <div class="stats3">
      <div class="stat"><b>${num(sm.lessonsDone, lang)}</b><span>${esc(t('pv.lessons', {}, lang))}</span></div>
      <div class="stat"><b>${num(sm.words, lang)}</b><span>${esc(t('pv.words', {}, lang))}</span></div>
      <div class="stat"><b>${num(active, lang)}</b><span>${esc(t('pv.days', {}, lang))}</span></div>
    </div>

    ${sm.lessonsDone === 0 ? `<p class="card flat muted">${esc(t('pv.empty', {}, lang))}</p>` : ''}

    <section class="card">
      <h3>${esc(t('pv.rhythm', {}, lang))}</h3>
      <div style="display:grid;gap:4px;margin:10px auto 0;direction:ltr;max-width:300px">${rows.map((r) => `<div class="heat" style="grid-template-columns:repeat(7,1fr);margin:0">${r}</div>`).join('')}</div>
    </section>

    <section class="card tint-rose">
      <div class="eyebrow">${esc(t('pv.now', {}, lang))}</div>
      <div class="row" style="margin-top:8px"><span class="unit-badge hue-${cu.hue}" style="background:var(--surface)">${icons[cu.icon](24)}</span>
        <div><b>${esc(tr(cu.title, lang))}</b> <span class="faint">${itx(cu.title.it)}</span>
        <p class="muted" style="font-size:.95rem">${esc(P(tr(cu.canDo, lang)))}</p></div></div>
    </section>

    ${sm.missions ? `<p class="card flat row">${icons.flag(18)} <span>${esc(t('pv.missions', { n: num(sm.missions, lang) }, lang))}</span></p>` : ''}

    ${ms.length ? `<section class="card"><h3>${esc(t('pv.milestones', {}, lang))}</h3>
      <div class="row wrap" style="margin-top:10px">${ms.map((m) => `<span class="chip sage">${icons.check(14)} ${esc(tr(m.title, lang))}</span>`).join('')}</div></section>` : ''}

    ${(scene || tricky.length) ? `
    <section class="card tint-gold">
      <h3>${icons.heart(18)} ${esc(t('pv.together', {}, lang))}</h3>
      ${scene ? `<p style="margin-top:8px">${esc(t('pv.sceneIdea', { s: P(tr(scene.title, lang)), r: P(tr(scene.npc.role, lang)), n: name }, lang))}</p>` : ''}
      ${tricky.length ? `<p style="margin-top:10px">${esc(t('pv.wordsIdea', {}, lang))}</p>
        <div class="word-chips">${tricky.map((i) => `<span>${itx(P(i.it))} <span class="faint">${sup(P(meaning(i, lang)), lang)}</span></span>`).join('')}</div>` : ''}
      <ul class="list-plain" style="margin-top:12px">${t('pv.tips', {}, lang).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </section>` : ''}

    ${sm.recent?.length ? `<section class="card"><h3>${esc(t('pv.recent', {}, lang))}</h3>
      <ul class="cando-list">${sm.recent.map((id) => lessonById(id)).filter(Boolean).map((l) => `<li>${icons.check(18)}<span>${esc(P(tr(l.title, lang)))} <span class="faint">${itx(l.title.it)}</span></span></li>`).join('')}</ul></section>` : ''}

    <p class="faint row" style="align-items:flex-start">${icons.shield(18)} <span>${esc(t('pv.privacy', {}, lang))}</span></p>
    ${preview ? '' : `<p class="faint center">${esc(partner)} ♡ ${esc(name)}</p>`}
  </div>`;
}

function frame(root, lang, inner, { badge = '' } = {}) {
  setLang(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  root.innerHTML = `
    <header class="topbar"><span class="brand">${logo(32)}<b dir="ltr">${esc(APP.name)}</b></span><span class="spacer"></span>
      ${badge}
      <div class="row" role="group" aria-label="Langue / اللغة" style="gap:6px"><button class="btn small ${lang === 'fr' ? '' : 'secondary'}" data-vl="fr" aria-pressed="${lang === 'fr'}">FR</button><button class="btn small ${lang === 'ar' ? '' : 'secondary'}" data-vl="ar" lang="ar" aria-pressed="${lang === 'ar'}">ع</button></div>
    </header>
    <div class="hero" style="margin:0">${skyline({ height: 100, sun: false })}</div>
    <main class="view no-nav">${inner}</main>`;
}

function bindLang(root, rerender) {
  root.querySelectorAll('[data-vl]').forEach((b) => b.addEventListener('click', () => { setViewerLang(b.dataset.vl); rerender(); }));
}

export function renderPartnerLink(root, app, code) {
  const lang = getViewerLang(app.profile.onboarded ? app.profile.lang : 'fr');
  const sm = decodeSummary(code || '');
  if (!sm) {
    frame(root, lang, `<div class="empty"><div class="art hue-rose">${icons.heart(40)}</div><h2>${esc(t('pv.invalid', {}, lang))}</h2></div>`);
  } else {
    frame(root, lang, partnerDashboard(sm, lang));
  }
  bindLang(root, () => renderPartnerLink(root, app, code));
}

export async function renderPartnerLive(root, app, id) {
  const lang = getViewerLang('fr');
  frame(root, lang, `<div class="skeleton" style="height:90px;margin-top:16px"></div><div class="skeleton" style="height:200px;margin-top:14px"></div>`);
  bindLang(root, () => renderPartnerLive(root, app, id));
  let res;
  try { res = await live.get(id); } catch {
    frame(root, lang, `<div class="empty"><div class="art hue-blue">${icons.review(40)}</div><h2>${esc(t('share.error', {}, lang))}</h2>
      <button class="btn" style="margin-top:16px" id="retry">${esc(t('retry', {}, lang))}</button></div>`);
    bindLang(root, () => renderPartnerLive(root, app, id));
    root.querySelector('#retry').addEventListener('click', () => renderPartnerLive(root, app, id));
    return;
  }
  if (!res?.summary) {
    frame(root, lang, `<div class="empty"><div class="art hue-rose">${icons.heart(40)}</div><h2>${esc(t('pv.notFound', {}, lang))}</h2></div>`);
    bindLang(root, () => renderPartnerLive(root, app, id));
    return;
  }
  frame(root, lang, `${partnerDashboard(res.summary, lang)}
    <section class="card" style="margin-top:14px">
      <h3>${icons.heart(18)} ${esc(t('pv.cheer', {}, lang))}</h3>
      <form id="cheer" class="row" style="margin-top:10px">
        <input class="input" name="text" maxlength="140" dir="auto" placeholder="${esc(t('pv.cheerPh', {}, lang))}" required>
        <button class="btn small" type="submit">${icons.arrow(18)}</button>
      </form>
    </section>`);
  bindLang(root, () => renderPartnerLive(root, app, id));
  root.querySelector('#cheer').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = e.target.elements.text;
    try { await live.cheer(id, input.value.trim()); input.value = ''; app.toast(t('pv.cheerSent', {}, lang)); }
    catch { app.toast(t('share.error', {}, lang), 3500); }
  });
}

/** Clearly-labelled demo data so the partner view can be explored before any progress exists. */
export function demoSummary() {
  const today = dayKey();
  const last28 = [12, 15, 0, 18, 15, 22, 0, 10, 16, 15, 0, 0, 20, 15, 14, 15, 9, 0, 16, 25, 15, 0, 12, 15, 17, 0, 15, 11];
  return {
    v: 1, at: today, name: 'Nour', partner: 'Youssef', goal: 15, move: `${new Date().getFullYear() + 1}-09`,
    lessonsDone: 14, lessonsTotal: 49, words: 128, unitsDone: ['u1', 'u2'], milestonesDone: ['m1'], current: 'u3',
    last28, recent: ['u3l2', 'u3l1', 'u2s', 'u2l3'], focus: { scene: 'u3s', items: ['u2l3:w5', 'u2l3:w8', 'u3l2:w2', 'u2l2:w13'] },
  };
}

export function renderPartnerDemo(root, app) {
  const lang = getViewerLang(app.profile.lang || 'fr');
  frame(root, lang, `<div class="banner info" style="margin:12px 0">${esc(t('pv.demo', {}, lang))}</div>${partnerDashboard(demoSummary(), lang)}
    <p class="center" style="margin-top:16px"><a class="btn secondary" href="#/today">${esc(t('pv.openApp', {}, lang))}</a></p>`);
  bindLang(root, () => renderPartnerDemo(root, app));
}
