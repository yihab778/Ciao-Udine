// The adjustable 12-month plan: spreads the 12 stages between the start date
// and the move date, and compares gently with real progress.
import { UNITS, LESSONS } from './content/index.js';
import { dayKey, daysBetween, addDays } from './util.js';

export function planInfo(state, today = dayKey()) {
  const start = state.profile.startDate || today;
  const [my, mm] = (state.profile.moveDate || '').split('-').map(Number);
  const move = my ? `${my}-${String(mm).padStart(2, '0')}-01` : today;
  const totalDays = Math.max(90, daysBetween(start, move)); // at least ~3 months
  const elapsed = Math.max(0, daysBetween(start, today));
  const daysLeft = Math.max(0, daysBetween(today, move));

  const done = LESSONS.filter((l) => state.lessons[l.id]).length;
  const total = LESSONS.length;
  const perUnit = totalDays / UNITS.length;

  const expectedLessons = Math.min(total, Math.round((elapsed / totalDays) * total));
  const diff = done - expectedLessons; // >0 ahead, <0 behind
  let pace = 'ontrack';
  if (diff >= 2) pace = 'ahead';
  else if (diff <= -3) pace = 'behind';

  const weeksLeft = Math.max(1, daysLeft / 7);
  const perWeek = Math.max(0, (total - done) / weeksLeft);

  const unitTargets = UNITS.map((u, i) => ({ unitId: u.id, date: addDays(start, Math.round(perUnit * (i + 1))) }));

  return { start, move, totalDays, elapsed, daysLeft, done, total, expectedLessons, pace, perWeek, unitTargets,
    monthsLeft: Math.max(0, Math.round(daysLeft / 30.4)) };
}

export function unitProgress(state, unit) {
  const done = unit.lessons.filter((l) => state.lessons[l.id]).length;
  return { done, total: unit.lessons.length, complete: done === unit.lessons.length };
}

export function currentUnit(state) {
  return UNITS.find((u) => u.lessons.some((l) => !state.lessons[l.id])) || UNITS[UNITS.length - 1];
}
