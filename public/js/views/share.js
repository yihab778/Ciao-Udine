// Learner-controlled sharing settings, with a live preview of exactly what the partner sees.
import { esc, dayKey } from '../util.js';
import { icons } from '../art.js';
import { buildSummary, linkFor, live } from '../share.js';
import { partnerDashboard } from './partner.js';
import { fmtDate } from '../i18n.js';

export function renderShare(main, app) {
  const { t, store, lang } = app;
  const s = store.state;
  const partner = s.profile.partnerName || 'Youssef';
  const sh = s.share;
  const summary = buildSummary(s);

  main.innerHTML = `
    <h1 style="margin-top:8px">${esc(t('share.title'))}</h1>
    <p class="muted" style="margin-top:6px">${esc(t('share.intro', { p: partner }))}</p>

    <section class="card" style="margin-top:14px">
      <label class="switch"><input type="checkbox" id="sh-on" ${sh.enabled ? 'checked' : ''}><span>${esc(t('share.toggle', { p: partner }))}</span></label>
      <label class="switch" style="margin-top:6px"><input type="checkbox" id="sh-focus" ${sh.includeFocus ? 'checked' : ''}><span style="font-weight:600">${esc(t('share.focus'))}</span></label>
    </section>

    <div id="sh-actions"></div>

    <section class="card flat" style="margin-top:14px">
      <div class="row" style="align-items:flex-start;gap:18px;flex-wrap:wrap">
        <div style="flex:1;min-width:200px"><h3 style="color:var(--sage)">${icons.check(18)} ${esc(t('share.what'))}</h3>
          <ul class="list-plain">${t('share.whatList').map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div style="flex:1;min-width:200px"><h3 style="color:var(--bad)">${icons.lock(18)} ${esc(t('share.never'))}</h3>
          <ul class="list-plain">${t('share.neverList').map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
    </section>

    <div class="frame" style="margin-top:24px">
      <span class="chip">${icons.eye(14)} ${esc(t('share.preview', { p: partner }))}</span>
      <div style="margin-top:8px">${partnerDashboard(summary, lang, { preview: true })}</div>
    </div>`;

  main.querySelector('#sh-on').addEventListener('change', async (e) => {
    const on = e.target.checked;
    if (!on && sh.live?.id) { try { await live.remove(sh.live); } catch { /* server may be offline */ } }
    store.update((st) => { st.share.enabled = on; if (!on) { st.share.live = null; st.share.lastSharedAt = null; } });
    app.rerender();
  });
  main.querySelector('#sh-focus').addEventListener('change', (e) => {
    store.update((st) => { st.share.includeFocus = e.target.checked; });
    app.rerender();
  });

  const box = main.querySelector('#sh-actions');
  if (!sh.enabled) {
    box.innerHTML = `<p class="faint row" style="margin-top:12px">${icons.lock(18)} <span>${esc(t('share.disabled'))}</span></p>`;
    return;
  }

  // Sharing is on: decide between live sync (if served by server.js) or snapshot link.
  box.innerHTML = `<div class="skeleton" style="height:120px;margin-top:14px"></div>`;
  live.available().then((hasServer) => {
    if (hasServer && sh.live?.id) {
      const link = live.liveLink(sh.live.id);
      box.innerHTML = `<section class="card tint-sage" style="margin-top:14px">
        <p style="font-weight:700">${esc(t('share.liveOn', { p: partner }))}</p>
        <div class="field" style="margin-top:10px"><span class="lbl">${esc(t('share.liveLink', { p: partner }))}</span>
        <div class="linkbox"><input readonly value="${esc(link)}" aria-label="link"><button class="btn small" id="cp">${icons.copy(18)}</button></div></div>
        <div class="row wrap" style="margin-top:12px"><button class="btn secondary small" id="push">${icons.review(18)} ${esc(t('share.send'))}</button>
        <span class="faint">${sh.lastSharedAt ? `${esc(t('share.updated'))} · ${esc(fmtDate(sh.lastSharedAt, lang))}` : ''}</span></div>
      </section>`;
      box.querySelector('#cp').addEventListener('click', () => copy(link));
      box.querySelector('#push').addEventListener('click', async () => {
        try { await live.push(sh.live, buildSummary(store.state)); store.update((st) => { st.share.lastSharedAt = dayKey(); }); app.toast(t('share.updated')); app.rerender(); }
        catch { app.toast(t('share.error'), 3500); }
      });
      return;
    }
    const link = linkFor(buildSummary(store.state));
    box.innerHTML = `<section class="card tint-blue" style="margin-top:14px">
      <button class="btn block" id="send">${icons.share(20)} ${esc(t('share.send'))}</button>
      <div class="linkbox"><input readonly value="${esc(link)}" aria-label="link"><button class="btn small secondary" id="cp">${icons.copy(18)}</button></div>
      <p class="faint" style="margin-top:10px">${esc(t('share.linkNote', { p: partner }))}</p>
      ${hasServer ? `<button class="btn ghost small" id="golive">${esc(t('share.liveEnable'))}</button>` : `<p class="faint" style="margin-top:6px">${esc(t('share.liveOff'))}</p>`}
    </section>`;
    box.querySelector('#cp').addEventListener('click', () => copy(link));
    box.querySelector('#send').addEventListener('click', async () => {
      store.update((st) => { st.share.lastSharedAt = dayKey(); });
      if (navigator.share) {
        try { await navigator.share({ title: t('pv.title', { n: s.profile.name || 'Nour' }), url: link }); return; } catch { /* cancelled */ }
      }
      copy(link);
    });
    box.querySelector('#golive')?.addEventListener('click', async () => {
      try {
        const cfg = await live.create();
        await live.push(cfg, buildSummary(store.state));
        store.update((st) => { st.share.live = cfg; st.share.lastSharedAt = dayKey(); });
        app.rerender();
      } catch { app.toast(t('share.error'), 3500); }
    });
  });

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); app.toast(t('share.copied')); }
    catch {
      const inp = main.querySelector('.linkbox input'); inp.select();
      try { document.execCommand('copy'); app.toast(t('share.copied')); } catch { /* user can copy manually */ }
    }
  }
}
