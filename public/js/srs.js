// Small, forgiving spaced-repetition scheduler (SM-2 inspired).
import { addDays, dayKey } from './util.js';

export function newCard(today = dayKey(), knewIt = true) {
  return knewIt
    ? { due: addDays(today, 1), ivl: 1, ease: 2.4, reps: 1, lapses: 0, seen: 1 }
    : { due: today, ivl: 0, ease: 2.2, reps: 0, lapses: 1, seen: 1 };
}

export function schedule(card, correct, today = dayKey()) {
  const c = { ...card, seen: (card.seen || 0) + 1 };
  if (correct) {
    c.reps = (c.reps || 0) + 1;
    if (c.reps === 1) c.ivl = 1;
    else if (c.reps === 2) c.ivl = 3;
    else c.ivl = Math.min(180, Math.round(Math.max(c.ivl, 1) * c.ease));
    c.ease = Math.min(2.8, (c.ease || 2.4) + 0.05);
  } else {
    c.lapses = (c.lapses || 0) + 1;
    c.reps = 0;
    c.ivl = 1; // come back tomorrow, never punished harder than that
    c.ease = Math.max(1.3, (c.ease || 2.4) - 0.2);
  }
  c.due = addDays(today, c.ivl);
  return c;
}

/** 0 = fragile … 4 = solid */
export function strength(card) {
  if (!card) return 0;
  if (card.reps === 0) return 0;
  if (card.ivl < 3) return 1;
  if (card.ivl < 8) return 2;
  if (card.ivl < 21) return 3;
  return 4;
}

export function dueIds(srs, today = dayKey()) {
  return Object.entries(srs)
    .filter(([, c]) => c.due <= today)
    .sort((a, b) => (a[1].due < b[1].due ? -1 : a[1].due > b[1].due ? 1 : a[1].ivl - b[1].ivl))
    .map(([id]) => id);
}

/** Items the learner finds harder (for “practise together” suggestions). */
export function trickyIds(srs, n = 6) {
  return Object.entries(srs)
    .filter(([, c]) => (c.lapses || 0) > 0)
    .sort((a, b) => (b[1].lapses - a[1].lapses) || (a[1].ivl - b[1].ivl))
    .slice(0, n)
    .map(([id]) => id);
}
