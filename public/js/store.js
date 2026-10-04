import { APP, defaultMoveDate } from './config.js';
import { dayKey } from './util.js';

const listeners = new Set();
let saveError = null;

export function freshState() {
  return {
    v: 1,
    profile: {
      name: '',
      partnerName: 'Youssef',
      lang: 'fr',            // support language: 'fr' | 'ar'
      goal: 15,              // minutes per day
      moveDate: defaultMoveDate(),
      startDate: dayKey(),
      onboarded: false,
      rate: 0.9,             // speech rate
      autoplay: true,
    },
    lessons: {},             // id -> { doneAt, firstTry, total, runs }
    srs: {},                 // itemId -> { due, ivl, ease, reps, lapses, seen }
    days: {},                // 'YYYY-MM-DD' -> { sec, lessons, reviews }
    share: {
      enabled: false,
      includeFocus: true,
      live: null,            // { server, id, token } when a sync server is used
      lastSharedAt: null,
    },
    cheers: [],
  };
}

function load() {
  try {
    const raw = localStorage.getItem(APP.storageKey);
    if (!raw) return freshState();
    const parsed = JSON.parse(raw);
    const base = freshState();
    return {
      ...base, ...parsed,
      profile: { ...base.profile, ...parsed.profile },
      share: { ...base.share, ...parsed.share },
    };
  } catch (e) {
    console.warn('Could not read saved progress', e);
    saveError = 'read';
    return freshState();
  }
}

export const store = {
  state: load(),
  get error() { return saveError; },
  save() {
    try {
      localStorage.setItem(APP.storageKey, JSON.stringify(this.state));
      saveError = null;
    } catch (e) {
      console.warn('Could not save progress', e);
      saveError = 'write';
    }
  },
  update(fn) {
    fn(this.state);
    this.save();
    listeners.forEach((l) => l(this.state));
  },
  subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  replace(next) {
    const base = freshState();
    this.state = { ...base, ...next, profile: { ...base.profile, ...next.profile }, share: { ...base.share, ...next.share } };
    this.save();
    listeners.forEach((l) => l(this.state));
  },
  reset() { this.replace(freshState()); },
  /** Add active study time to today (capped per call so idle time is never counted). */
  addTime(seconds) {
    const s = Math.max(0, Math.min(90, Math.round(seconds)));
    if (!s) return;
    const k = dayKey();
    const d = (this.state.days[k] ||= { sec: 0, lessons: 0, reviews: 0 });
    d.sec += s;
    this.save();
  },
  bumpDay(field) {
    const k = dayKey();
    const d = (this.state.days[k] ||= { sec: 0, lessons: 0, reviews: 0 });
    d[field] = (d[field] || 0) + 1;
  },
};

/** Request persistent storage so the browser does not evict progress. */
export async function requestPersistence() {
  try { if (navigator.storage?.persist) await navigator.storage.persist(); } catch { /* optional */ }
}
