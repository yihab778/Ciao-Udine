// Consent-based progress sharing.
// Only an aggregate summary is ever shared — never answers, mistakes in detail,
// location, or timestamps finer than a day.
import { UNITS, LESSONS, MILESTONES, ITEMS } from './content/index.js';
import { dayKey, addDays, b64urlEncode, b64urlDecode } from './util.js';
import { trickyIds } from './srs.js';
import { currentUnit, unitProgress } from './plan.js';

export function buildSummary(state) {
  const today = dayKey();
  const last28 = [];
  for (let i = 27; i >= 0; i--) {
    const k = addDays(today, -i);
    last28.push(Math.ceil((state.days[k]?.sec || 0) / 60));
  }
  const unitsDone = UNITS.filter((u) => unitProgress(state, u).complete).map((u) => u.id);
  const milestonesDone = MILESTONES.filter((m) => UNITS.filter((u) => u.milestone === m.id).every((u) => unitsDone.includes(u.id))).map((m) => m.id);
  const cu = currentUnit(state);
  const scene = cu.lessons.find((l) => l.kind === 'scene');

  const summary = {
    v: 1,
    at: today,
    name: state.profile.name || '',
    partner: state.profile.partnerName || '',
    goal: state.profile.goal,
    move: state.profile.moveDate,
    lessonsDone: LESSONS.filter((l) => state.lessons[l.id]).length,
    lessonsTotal: LESSONS.length,
    words: Object.keys(state.srs).length,
    unitsDone,
    milestonesDone,
    current: cu.id,
    last28,
    recent: LESSONS.filter((l) => state.lessons[l.id])
      .sort((a, b) => (state.lessons[b.id].doneAt > state.lessons[a.id].doneAt ? 1 : -1))
      .slice(0, 4).map((l) => l.id),
  };
  if (state.share.includeFocus) {
    summary.focus = {
      scene: scene?.id || null,
      items: trickyIds(state.srs, 5).filter((id) => ITEMS.has(id)),
    };
  }
  return summary;
}

export const linkFor = (summary) => `${location.origin}${location.pathname}#/p/${b64urlEncode(summary)}`;

export function decodeSummary(code) {
  try {
    const s = b64urlDecode(code);
    if (!s || s.v !== 1 || !Array.isArray(s.last28)) return null;
    return s;
  } catch { return null; }
}

// ── Optional live sync (only when the app is served by server.js) ──────────
export const live = {
  async available() {
    try {
      const r = await fetch('api/health', { cache: 'no-store' });
      if (!r.ok) return false;
      const j = await r.json();
      return j.sharing === true;
    } catch { return false; }
  },
  async create() {
    const r = await fetch('api/shares', { method: 'POST' });
    if (!r.ok) throw new Error('create failed');
    return r.json(); // { id, token }
  },
  async push(cfg, summary) {
    const r = await fetch(`api/shares/${cfg.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cfg.token}` },
      body: JSON.stringify(summary),
    });
    if (!r.ok) throw new Error('push failed');
    return r.json();
  },
  async get(id) {
    const r = await fetch(`api/shares/${encodeURIComponent(id)}`, { cache: 'no-store' });
    if (r.status === 404) return null;
    if (!r.ok) throw new Error('fetch failed');
    return r.json(); // { summary, cheers }
  },
  async remove(cfg) {
    await fetch(`api/shares/${cfg.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${cfg.token}` } });
  },
  async cheer(id, text) {
    const r = await fetch(`api/shares/${encodeURIComponent(id)}/cheers`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }),
    });
    if (!r.ok) throw new Error('cheer failed');
  },
  liveLink: (id) => `${location.origin}${location.pathname}#/live/${id}`,
};
