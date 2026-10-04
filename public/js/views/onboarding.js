import { APP, DAILY_GOALS } from '../config.js';
import { esc, dayKey } from '../util.js';
import { skyline, logo, icons } from '../art.js';
import { setLang, fmtMonth } from '../i18n.js';

let ob = null;
const STEPS = 5;

export function renderOnboarding(root, app) {
  const { t, store } = app;
  if (!ob) ob = { step: 0, d: { ...store.state.profile } };
  const d = ob.d;
  setLang(d.lang);
  document.documentElement.lang = d.lang;
  document.documentElement.dir = d.lang === 'ar' ? 'rtl' : 'ltr';

  const dots = `<div class="dots-nav" aria-label="${esc(t('ob.step', { a: ob.step + 1, b: STEPS }))}">${Array.from({ length: STEPS }, (_, i) => `<i class="${i === ob.step ? 'on' : ''}"></i>`).join('')}</div>`;
  let body = '', foot = '';

  if (ob.step === 0) {
    body = `
      <div class="hero" style="margin:0 -20px">${skyline({ height: 190 })}</div>
      <div class="row">${logo(44)}<h1>${esc(APP.name)}</h1></div>
      <h2 style="font-size:1.6rem">${esc(t('ob.welcome'))}</h2>
      <p class="muted">${esc(t('ob.welcomeText'))}</p>
      <div class="field"><span class="lbl">${esc(t('ob.lang'))}</span>
        <div class="lang-pick">
          <button data-lang="fr" aria-pressed="${d.lang === 'fr'}"><span class="flagless">Fr</span><span>Français</span></button>
          <button data-lang="ar" aria-pressed="${d.lang === 'ar'}"><span class="flagless" lang="ar">ع</span><span lang="ar">العربي المصري</span></button>
        </div>
      </div>`;
  } else if (ob.step === 1) {
    body = `
      <h2>${esc(t('ob.name'))}</h2>
      <div class="field"><input class="input" id="ob-name" autocomplete="given-name" maxlength="30" placeholder="${esc(t('ob.namePh'))}" value="${esc(d.name)}"></div>
      <p class="faint">${esc(t('ob.nameHint'))}</p>
      <h2 style="margin-top:12px">${esc(t('ob.partner'))}</h2>
      <div class="field"><input class="input" id="ob-partner" maxlength="30" value="${esc(d.partnerName)}"></div>`;
  } else if (ob.step === 2) {
    const min = dayKey().slice(0, 7);
    body = `
      <h2>${esc(t('ob.move'))}</h2>
      <div class="field"><input class="input" type="month" id="ob-move" min="${min}" value="${esc(d.moveDate)}"></div>
      <p class="muted" id="ob-move-label" style="font-weight:800">${esc(fmtMonth(d.moveDate, d.lang))}</p>
      <p class="faint">${esc(t('ob.moveHint'))}</p>`;
  } else if (ob.step === 3) {
    const labels = { 10: t('ob.goal10'), 15: t('ob.goal15'), 20: t('ob.goal20') };
    body = `
      <h2>${esc(t('ob.goal'))}</h2>
      <div class="seg" role="group">${DAILY_GOALS.map((g) => `<button data-goal="${g}" aria-pressed="${d.goal === g}">${esc(t('set.min', { n: g }))}<small>${esc(labels[g])}</small></button>`).join('')}</div>
      <p class="faint">${esc(t('ob.goalHint'))}</p>`;
  } else {
    body = `
      <h2>${esc(t('ob.ready'))}</h2>
      <div class="card tint-blue stack">
        <div class="eyebrow">${esc(t('ob.audio'))}</div>
        <button class="btn secondary block" data-say="Ciao! Benvenuta a Udine!">${icons.sound(20)} <span>${esc(t('ob.audioBtn'))}</span></button>
        <p class="faint" id="ob-audio" data-audio-status="${app.speech.status}"></p>
      </div>
      <p>${esc(t('ob.readyText'))}</p>
      <div class="row" style="align-items:flex-start">${icons.shield(22)}<p class="faint">${esc(t('ob.privacy'))}</p></div>`;
  }

  if (ob.step < STEPS - 1) {
    foot = `<button class="btn block" id="ob-next">${esc(t('continue'))} ${icons.arrow(18)}</button>
      ${ob.step > 0 ? `<button class="btn ghost" id="ob-back">${esc(t('back'))}</button>` : ''}`;
  } else {
    foot = `<button class="btn block" id="ob-go">${esc(t('ob.go'))} ${icons.arrow(18)}</button>
      <button class="btn ghost" id="ob-back">${esc(t('back'))}</button>`;
  }

  root.innerHTML = `<div class="ob">${dots}<div class="ob-body">${body}</div><div class="ob-foot">${foot}</div></div>`;

  const sync = () => {
    const n = root.querySelector('#ob-name'); if (n) d.name = n.value.trim();
    const p = root.querySelector('#ob-partner'); if (p) d.partnerName = p.value.trim();
    const m = root.querySelector('#ob-move'); if (m && m.value) d.moveDate = m.value;
  };

  root.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => { d.lang = b.dataset.lang; renderOnboarding(root, app); }));
  root.querySelectorAll('[data-goal]').forEach((b) => b.addEventListener('click', () => { d.goal = Number(b.dataset.goal); renderOnboarding(root, app); }));
  root.querySelector('#ob-move')?.addEventListener('input', (e) => {
    if (e.target.value) { d.moveDate = e.target.value; root.querySelector('#ob-move-label').textContent = fmtMonth(d.moveDate, d.lang); }
  });
  root.querySelector('#ob-next')?.addEventListener('click', () => { sync(); ob.step++; renderOnboarding(root, app); });
  root.querySelector('#ob-back')?.addEventListener('click', () => { sync(); ob.step--; renderOnboarding(root, app); });
  root.querySelector('#ob-name')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') root.querySelector('#ob-partner').focus(); });

  const audio = root.querySelector('#ob-audio');
  if (audio) {
    const paint = () => {
      const s = app.speech.status;
      audio.textContent = s === 'ok' ? t('audio.ok', { v: app.speech.voiceName }) : s === 'checking' ? t('audio.checking') : t('audio.none');
    };
    paint();
    audio.addEventListener('audiostatus', paint);
  }

  root.querySelector('#ob-go')?.addEventListener('click', () => {
    sync();
    store.update((s) => { s.profile = { ...s.profile, ...d, onboarded: true, startDate: s.profile.startDate || dayKey() }; });
    ob = null;
    app.navigate('#/lesson/u1l1');
  });
  root.querySelector('.ob-body input')?.focus();
}
