import { APP } from './config.js';
import { store, requestPersistence } from './store.js';
import { t, setLang, getLang } from './i18n.js';
import { speech } from './speech.js';
import { personalize, esc } from './util.js';
import { icons, logo } from './art.js';
import { dueIds } from './srs.js';

import { renderOnboarding } from './views/onboarding.js';
import { renderToday } from './views/today.js';
import { renderPath } from './views/path.js';
import { renderReviewHome, startReview } from './views/review.js';
import { renderWords } from './views/words.js';
import { renderProgress } from './views/progress.js';
import { renderSettings } from './views/settings.js';
import { renderShare } from './views/share.js';
import { renderPartnerLink, renderPartnerLive, renderPartnerDemo } from './views/partner.js';
import { startLesson, startPractice } from './views/runner.js';

const root = document.getElementById('app');
let deferredInstall = null;

export const app = {
  store,
  t,
  speech,
  get lang() { return getLang(); },
  get profile() { return store.state.profile; },
  P: (text) => personalize(text, store.state.profile),
  navigate(hash) { if (location.hash === hash) route(); else location.hash = hash; },
  rerender() { route(); },
  get canInstall() { return !!deferredInstall; },
  async install() { if (!deferredInstall) return; deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall = null; route(); },

  async play(text, btn) {
    if (!speech.available) { app.toast(t('ex.noAudio')); return; }
    btn?.classList.add('playing');
    await speech.speak(app.P(text), store.state.profile.rate || 0.9);
    btn?.classList.remove('playing');
  },
  async playSlow(text, btn) {
    if (!speech.available) return;
    btn?.classList.add('playing');
    await speech.speak(app.P(text), 0.6);
    btn?.classList.remove('playing');
  },

  toast(msg, ms = 2400) {
    document.querySelector('.toast')?.remove();
    const el = document.createElement('div');
    el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), ms);
  },

  confirm({ title, text, yes, no, danger = false }) {
    return new Promise((resolve) => {
      const bg = document.createElement('div');
      bg.className = 'modal-bg';
      bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mdl-t">
        <h2 id="mdl-t">${esc(title)}</h2>${text ? `<p class="muted" style="margin-top:8px">${esc(text)}</p>` : ''}
        <div class="row"><button class="btn secondary block" data-r="0">${esc(no)}</button>
        <button class="btn block ${danger ? 'bad' : ''}" data-r="1">${esc(yes)}</button></div></div>`;
      const done = (v) => { bg.remove(); document.removeEventListener('keydown', onKey); resolve(v); };
      const onKey = (e) => { if (e.key === 'Escape') done(false); };
      bg.addEventListener('click', (e) => {
        if (e.target === bg) return done(false);
        const b = e.target.closest('[data-r]'); if (b) done(b.dataset.r === '1');
      });
      document.addEventListener('keydown', onKey);
      document.body.appendChild(bg);
      bg.querySelector('[data-r="1"]').focus();
    });
  },
};

function applyLang(lang) {
  setLang(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

const TABS = [
  ['today', 'nav.today', icons.today],
  ['path', 'nav.path', icons.path],
  ['review', 'nav.review', icons.review],
  ['words', 'nav.words', icons.words],
  ['progress', 'nav.progress', icons.progress],
];

function shell(active, inner) {
  const due = dueIds(store.state.srs).length;
  const banners = [];
  if (store.error) banners.push(`<div class="banner warn" role="alert">${esc(t('err.save'))}</div>`);
  if (!navigator.onLine) banners.push(`<div class="banner info">${esc(t('offline'))}</div>`);
  return `
  <header class="topbar">
    <a class="brand" href="#/today" aria-label="${esc(APP.name)}">${logo(34)}<b dir="ltr">${esc(APP.name)}</b></a>
    <span class="spacer"></span>
    <a class="icon-btn" href="#/share" aria-label="${esc(t('partner'))}" title="${esc(t('partner'))}">${icons.heart(22)}</a>
    <a class="icon-btn" href="#/settings" aria-label="${esc(t('settings'))}" title="${esc(t('settings'))}">${icons.settings(22)}</a>
  </header>
  ${banners.join('')}
  <main class="view" id="main" tabindex="-1">${inner}</main>
  <nav class="bottomnav" aria-label="Navigation">
    ${TABS.map(([id, key, ic]) => `<a href="#/${id}" ${active === id ? 'aria-current="page"' : ''}>${ic(24)}<span>${esc(t(key))}</span>${id === 'review' && due ? `<span class="badge">${due > 99 ? '99+' : due}</span>` : ''}</a>`).join('')}
  </nav>`;
}

function mountTab(active, renderFn) {
  root.innerHTML = shell(active, `<div class="skeleton" style="height:180px;margin-top:12px"></div>`);
  const main = root.querySelector('#main');
  renderFn(main, app);
}

function route() {
  const hash = location.hash || '#/';
  const [, a = '', b = ''] = hash.split('/');
  speech.stop();
  applyLang(store.state.profile.lang);
  window.scrollTo(0, 0);

  try {
    // Partner pages work without onboarding (opened on the partner's own device)
    if (a === 'p') return renderPartnerLink(root, app, b);
    if (a === 'live') return renderPartnerLive(root, app, b);
    if (a === 'demo-partner') return renderPartnerDemo(root, app);

    if (!store.state.profile.onboarded && a !== 'welcome') return app.navigate('#/welcome');

    switch (a) {
      case 'welcome': return renderOnboarding(root, app);
      case '': case 'today': return mountTab('today', renderToday);
      case 'path': return mountTab('path', renderPath);
      case 'review': return b === 'go' ? startReview(root, app) : mountTab('review', renderReviewHome);
      case 'words': return mountTab('words', renderWords);
      case 'progress': return mountTab('progress', renderProgress);
      case 'settings': return mountTab('', renderSettings);
      case 'share': return mountTab('', renderShare);
      case 'lesson': return startLesson(root, app, b);
      case 'practice': return startPractice(root, app, b);
      default:
        root.innerHTML = shell('', `<div class="empty"><h2>${esc(t('err.notFound'))}</h2><p style="margin-top:16px"><a class="btn" href="#/today">${esc(t('nav.today'))}</a></p></div>`);
    }
  } catch (err) {
    console.error(err);
    root.innerHTML = `<div class="empty" role="alert"><h2>${esc(t('err.generic'))}</h2><p class="faint" style="margin-top:8px">${esc(err.message)}</p>
      <p style="margin-top:16px"><a class="btn" href="#/today">${esc(t('nav.today'))}</a></p></div>`;
  }
}

// Speak any element carrying data-say (event delegation)
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-say]');
  if (!b) return;
  e.preventDefault(); e.stopPropagation();
  if (b.dataset.slow) app.playSlow(b.dataset.say, b); else app.play(b.dataset.say, b);
}, true);

window.addEventListener('hashchange', route);
window.addEventListener('online', route);
window.addEventListener('offline', route);
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; });
window.addEventListener('error', (e) => console.error('Uncaught', e.error || e.message));

applyLang(store.state.profile.lang);
document.title = APP.name;
speech.init();
speech.onChange(() => {
  if (/#\/settings/.test(location.hash)) route();
  document.querySelectorAll('[data-audio-status]').forEach((el) => { el.dataset.audioStatus = speech.status; el.dispatchEvent(new Event('audiostatus')); });
});
requestPersistence();
route();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
