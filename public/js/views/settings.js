import { APP, DAILY_GOALS } from '../config.js';
import { esc, dayKey } from '../util.js';
import { icons } from '../art.js';
import { fmtMonth } from '../i18n.js';

export function renderSettings(main, app) {
  const { t, store, speech } = app;
  const p = store.state.profile;
  const audioMsg = speech.status === 'ok' ? t('audio.ok', { v: speech.voiceName }) : speech.status === 'checking' ? t('audio.checking') : t('audio.none');

  main.innerHTML = `
    <h1 style="margin-top:8px">${esc(t('set.title'))}</h1>
    <section class="card settings-group" style="margin-top:14px">
      <div class="field"><label for="s-name">${esc(t('set.name'))}</label><input class="input" id="s-name" maxlength="30" value="${esc(p.name)}"></div>
      <div class="field"><label for="s-partner">${esc(t('set.partner'))}</label><input class="input" id="s-partner" maxlength="30" value="${esc(p.partnerName)}"></div>
      <div class="field"><span class="lbl">${esc(t('set.lang'))}</span>
        <div class="seg" role="group"><button data-lang="fr" aria-pressed="${p.lang === 'fr'}">Français</button><button data-lang="ar" aria-pressed="${p.lang === 'ar'}" lang="ar">العربي المصري</button></div></div>
      <div class="field"><span class="lbl">${esc(t('set.goal'))}</span>
        <div class="seg" role="group">${DAILY_GOALS.map((g) => `<button data-goal="${g}" aria-pressed="${p.goal === g}">${esc(t('set.min', { n: g }))}</button>`).join('')}</div></div>
      <div class="field"><label for="s-move">${esc(t('set.move'))}</label><input class="input" type="month" id="s-move" value="${esc(p.moveDate)}">
        <span class="faint" id="s-move-l">${esc(fmtMonth(p.moveDate))}</span></div>
    </section>

    <section class="card settings-group" style="margin-top:14px">
      <h3>${esc(t('set.audio'))}</h3>
      <p class="faint">${esc(audioMsg)}</p>
      ${speech.available ? `
        <button class="btn secondary" data-say="Buongiorno! Come stai? Benvenuta a Udine.">${icons.sound(20)} ${esc(t('set.test'))}</button>
        <div class="field"><span class="lbl">${esc(t('set.rate'))}</span>
          <div class="seg" role="group"><button data-rate="0.75" aria-pressed="${p.rate <= 0.8}">${esc(t('set.rateSlow'))}</button><button data-rate="0.9" aria-pressed="${p.rate > 0.8}">${esc(t('set.rateNormal'))}</button></div></div>
        <label class="switch"><input type="checkbox" id="s-auto" ${p.autoplay !== false ? 'checked' : ''}><span>${esc(t('set.autoplay'))}</span></label>` : ''}
    </section>

    <section class="card settings-group" style="margin-top:14px">
      <h3>${esc(t('set.data'))}</h3>
      <p class="faint">${esc(t('set.storage'))}</p>
      <div class="row wrap">
        <button class="btn secondary small" id="exp">${icons.download(18)} ${esc(t('set.export'))}</button>
        <label class="btn secondary small" for="imp" style="cursor:pointer">${icons.upload(18)} ${esc(t('set.import'))}</label>
        <input type="file" id="imp" accept="application/json,.json" hidden>
      </div>
      <button class="btn ghost small" id="reset" style="color:var(--bad);justify-self:start">${esc(t('set.reset'))}</button>
    </section>

    <section class="card" style="margin-top:14px">
      <h3>${esc(t('set.about'))}</h3>
      <p class="faint" style="margin-top:6px">${esc(APP.name)} · v${esc(APP.version)}</p>
      <p class="faint">${esc(t('ob.privacy'))}</p>
      <p style="margin-top:8px"><a href="#/demo-partner">${esc(t('pv.demo'))} — ${esc(t('partner'))}</a></p>
    </section>`;

  const save = (fn, rerender = false) => {
    store.update((s) => fn(s.profile));
    app.toast(t('set.saved'), 1200);
    if (rerender) app.rerender();
  };

  main.querySelector('#s-name').addEventListener('change', (e) => save((pr) => { pr.name = e.target.value.trim(); }));
  main.querySelector('#s-partner').addEventListener('change', (e) => save((pr) => { pr.partnerName = e.target.value.trim(); }));
  main.querySelector('#s-move').addEventListener('change', (e) => { if (e.target.value) save((pr) => { pr.moveDate = e.target.value; }, true); });
  main.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.lang = b.dataset.lang; }, true)));
  main.querySelectorAll('[data-goal]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.goal = Number(b.dataset.goal); }, true)));
  main.querySelectorAll('[data-rate]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.rate = Number(b.dataset.rate); }, true)));
  main.querySelector('#s-auto')?.addEventListener('change', (e) => save((pr) => { pr.autoplay = e.target.checked; }));

  main.querySelector('#exp').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(store.state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `ciao-udine-backup-${dayKey()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
  main.querySelector('#imp').addEventListener('change', async (e) => {
    const f = e.target.files?.[0]; if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      if (!data || data.v !== 1 || !data.profile || typeof data.srs !== 'object') throw new Error('invalid');
      store.replace(data);
      app.toast(t('set.imported'));
      app.rerender();
    } catch { app.toast(t('set.importError'), 3500); }
  });
  main.querySelector('#reset').addEventListener('click', async () => {
    const ok = await app.confirm({ title: t('set.reset'), text: t('set.resetConfirm'), yes: t('set.reset'), no: t('cancel'), danger: true });
    if (ok) { store.reset(); app.navigate('#/welcome'); }
  });
}
