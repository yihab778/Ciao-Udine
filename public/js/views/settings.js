import { APP, DAILY_GOALS } from '../config.js';
import { esc, itx, dayKey } from '../util.js';
import { icons } from '../art.js';
import { fmtMonth } from '../i18n.js';
import { cleanNumber } from '../whatsapp.js';

/** Back up progress: share the file (WhatsApp, e-mail, Drive…) when possible, else download it. */
export async function backupFile(app) {
  const { store, t } = app;
  const name = `ciao-udine-backup-${dayKey()}.json`;
  const blob = new Blob([JSON.stringify(store.state, null, 2)], { type: 'application/json' });
  const file = new File([blob], name, { type: 'application/json' });
  let done = false;
  if (navigator.canShare?.({ files: [file] })) {
    try { await navigator.share({ files: [file], title: name }); done = true; } catch (e) { if (e?.name === 'AbortError') return; }
  }
  if (!done) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  store.update((st) => { st.lastBackupAt = dayKey(); });
  app.toast(t('safe.backupDone'));
}

/** A daily calendar reminder (.ics) at her chosen time — no server, no guilt notifications. */
function reminderFile(app, time) {
  const [hh, mm] = (time || '19:00').split(':').map(Number);
  const start = new Date(); start.setHours(hh, mm, 0, 0);
  const end = new Date(start.getTime() + 15 * 60000);
  const pad = (n) => String(n).padStart(2, '0');
  const fmt = (x) => `${x.getFullYear()}${pad(x.getMonth() + 1)}${pad(x.getDate())}T${pad(x.getHours())}${pad(x.getMinutes())}00`;
  const d = dayKey().replace(/-/g, '');
  const url = location.href.split('#')[0] + '#/today';
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Ciao Udine//FR', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    `UID:ciao-udine-${d}-${pad(hh)}${pad(mm)}@ciao-udine`, `DTSTAMP:${d}T000000Z`,
    `DTSTART:${fmt(start)}`, `DTEND:${fmt(end)}`,
    'RRULE:FREQ=DAILY', `SUMMARY:${app.t('remind.event')}`, `DESCRIPTION:${url}`, `URL:${url}`,
    'BEGIN:VALARM', 'TRIGGER:PT0M', 'ACTION:DISPLAY', `DESCRIPTION:${app.t('remind.event')}`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'ciao-udine-promemoria.ics';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

export function renderSettings(main, app) {
  const { t, store, speech } = app;
  const p = store.state.profile;
  const audioMsg = speech.status === 'ok' ? t('audio.ok', { v: speech.voiceName }) : speech.status === 'checking' ? t('audio.checking') : t('audio.none');

  main.innerHTML = `
    <h1 style="margin-top:8px">${esc(t('set.title'))}</h1>
    <section class="card settings-group" style="margin-top:14px">
      <div class="field"><label for="s-name">${esc(t('set.name'))}</label><input class="input" id="s-name" maxlength="30" value="${esc(p.name)}"></div>
      <div class="field"><label for="s-partner">${esc(t('set.partner'))}</label><input class="input" id="s-partner" maxlength="30" value="${esc(p.partnerName)}"></div>
      <div class="field"><label for="s-wa">${esc(t('wa.number', { p: p.partnerName || 'Youssef' }))}</label>
        <input class="input" id="s-wa" type="tel" inputmode="tel" autocomplete="off" dir="ltr" placeholder="+39 333 123 4567" value="${esc(p.partnerWa ? '+' + p.partnerWa : '')}">
        <span class="faint">${esc(t('wa.numberHint'))}</span></div>
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
          <div class="seg" role="group"><button data-rate="0.75" aria-pressed="${p.rate <= 0.8}">${esc(t('set.rateSlow'))}</button><button data-rate="0.9" aria-pressed="${p.rate > 0.8 && p.rate < 1}">${esc(t('set.rateNormal'))}</button><button data-rate="1.05" aria-pressed="${p.rate >= 1}">${esc(t('set.rateNatural'))}</button></div>
          <p class="faint">${esc(t('set.rateHint'))}</p></div>
        <label class="switch"><input type="checkbox" id="s-auto" ${p.autoplay !== false ? 'checked' : ''}><span>${esc(t('set.autoplay'))}</span></label>` : ''}
    </section>

    <section class="card settings-group" style="margin-top:14px">
      <div class="field"><span class="lbl">${esc(t('set.text'))}</span>
        <div class="seg" role="group"><button data-scale="normal" aria-pressed="${p.textScale !== 'large'}">${esc(t('set.textNormal'))}</button><button data-scale="large" aria-pressed="${p.textScale === 'large'}" style="font-size:1.15em">${esc(t('set.textLarge'))}</button></div></div>
      <div class="field"><label for="s-remind">${esc(t('remind.title'))}</label>
        <div class="row"><input class="input" type="time" id="s-remind" value="${esc(p.remindAt || '19:00')}" style="max-width:150px">
        <button class="btn secondary small" id="remind">${icons.calendar(18)} ${esc(t('remind.add'))}</button></div>
        <p class="faint">${esc(t('remind.hint'))}</p></div>
    </section>

    ${store.state.reports.length ? `<section class="card settings-group" style="margin-top:14px">
      <h3>${icons.flag(18)} ${esc(t('report.list', { n: store.state.reports.length }))}</h3>
      <ul class="list-plain">${store.state.reports.slice(-5).map((r) => `<li>${itx(r.it)}${r.note ? ` — <span dir="auto">${esc(r.note)}</span>` : ''}</li>`).join('')}</ul>
      <div class="row wrap"><button class="btn small" id="rep-send">${icons.share(16)} ${esc(t('report.sendTo', { p: p.partnerName || 'Youssef' }))}</button>
      <button class="btn ghost small" id="rep-clear">${esc(t('report.clear'))}</button></div>
    </section>` : ''}

    <section class="card settings-group" style="margin-top:14px">
      <h3>${esc(t('set.data'))}</h3>
      <p class="faint">${esc(t('set.storage'))} ${store.state.lastBackupAt ? esc(t('safe.lastBackup', { d: store.state.lastBackupAt })) : ''}</p>
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
  main.querySelector('#s-wa').addEventListener('change', (e) => {
    const n = cleanNumber(e.target.value);
    if (e.target.value.trim() && !n) { app.toast(t('wa.numberBad'), 3500); return; }
    save((pr) => { pr.partnerWa = n; });
  });
  main.querySelector('#s-move').addEventListener('change', (e) => { if (e.target.value) save((pr) => { pr.moveDate = e.target.value; }, true); });
  main.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.lang = b.dataset.lang; }, true)));
  main.querySelectorAll('[data-goal]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.goal = Number(b.dataset.goal); }, true)));
  main.querySelectorAll('[data-rate]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.rate = Number(b.dataset.rate); }, true)));
  main.querySelector('#s-auto')?.addEventListener('change', (e) => save((pr) => { pr.autoplay = e.target.checked; }));

  main.querySelector('#exp').addEventListener('click', () => backupFile(app));
  main.querySelectorAll('[data-scale]').forEach((b) => b.addEventListener('click', () => save((pr) => { pr.textScale = b.dataset.scale; }, true)));
  main.querySelector('#s-remind').addEventListener('change', (e) => save((pr) => { pr.remindAt = e.target.value || '19:00'; }));
  main.querySelector('#remind').addEventListener('click', () => reminderFile(app, main.querySelector('#s-remind').value));
  main.querySelector('#rep-send')?.addEventListener('click', async () => {
    const text = `${APP.name} — ${t('report.subject')}\n\n` + store.state.reports.map((r) =>
      `• ${r.it}${r.answer ? ` | ${t('report.myAnswer')}: ${r.answer}` : ''}${r.note ? ` | ${r.note}` : ''} (${r.itemId})`).join('\n');
    if (navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e?.name === 'AbortError') return; } }
    try { await navigator.clipboard.writeText(text); app.toast(t('share.copied')); } catch { app.toast(text.slice(0, 120)); }
  });
  main.querySelector('#rep-clear')?.addEventListener('click', () => { store.update((s) => { s.reports = []; }); app.rerender(); });
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
