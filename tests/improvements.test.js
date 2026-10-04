// Tests for the fixes that came out of the user-research round (docs/user-research.md).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { UNITS, LESSONS } from '../public/js/content/index.js';
import { PHRASEBOOK } from '../public/js/content/phrasebook.js';
import { lessonSteps } from '../public/js/engine.js';
import { check } from '../public/js/grade.js';
import { todayReview, reviewCap } from '../public/js/srs.js';

const AR = /[؀-ۿ]/;

test('optional subject pronoun is accepted (no pedantic grading)', () => {
  const r = check('io sono stanca', 'sono stanca');
  assert.equal(r.ok, true); assert.equal(r.kind, 'pronoun');
  assert.equal(check('sono stanca', 'io sono stanca').ok, true);
  assert.equal(check('tu sei stanca', 'sono stanca').ok, false);
});

test('learner-approved answers are accepted next time', () => {
  assert.equal(check('mi chiamo nour', ['sono Nour', 'mi chiamo Nour']).ok, true);
});

test('review queue is capped: a backlog never becomes a wall', () => {
  const srs = Object.fromEntries(Array.from({ length: 120 }, (_, i) => [`x${i}`, { due: '2026-01-01', ivl: 1, ease: 2.4, reps: 1 }]));
  const state = { srs, profile: { goal: 10 }, days: {} };
  const r = todayReview(state, '2026-10-04');
  assert.equal(r.cap, reviewCap(10));
  assert.equal(r.ids.length, 20);
  assert.equal(r.backlog, true);
  const afterSome = todayReview({ ...state, days: { '2026-10-04': { reviewed: 15 } } }, '2026-10-04');
  assert.equal(afterSome.ids.length, 5);
  const done = todayReview({ ...state, days: { '2026-10-04': { reviewed: 40 } } }, '2026-10-04');
  assert.equal(done.ids.length, 0);
});

test('every stage has a real-life mission in French and Arabic', () => {
  for (const u of UNITS) {
    assert.ok(u.mission?.fr && AR.test(u.mission.ar), u.id);
  }
});

test('survival phrasebook is complete and trilingual', () => {
  assert.ok(PHRASEBOOK.length >= 6);
  const ids = PHRASEBOOK.map((c) => c.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const c of PHRASEBOOK) {
    assert.ok(c.title.fr && AR.test(c.title.ar), c.id);
    for (const r of c.items) {
      assert.equal(r.length, 3, `${c.id}: ${r[0]}`);
      assert.ok(r[0] && r[1] && AR.test(r[2]), `${c.id}: ${r[0]}`);
    }
  }
  assert.ok(PHRASEBOOK.find((c) => c.id === 'emergency').items.some((r) => r[0].includes('112')));
});

test('sounds lesson has real minimal pairs and builds pair drills', () => {
  const l = LESSONS.find((x) => x.id === 'u1l5');
  assert.ok(l.pairs.length >= 5);
  for (const [a, b] of l.pairs) {
    assert.ok(l.items.find((i) => i.it === a), a);
    assert.ok(l.items.find((i) => i.it === b), b);
  }
  for (const audio of [true, false]) {
    const steps = lessonSteps(l, { audio });
    const pairs = steps.filter((s) => s.type === 'minimal');
    assert.equal(pairs.length, l.pairs.length);
    for (const p of pairs) assert.equal(p.options.length, 2);
  }
});

test('false-friends lesson exists early (month 2)', () => {
  const l = LESSONS.find((x) => x.id === 'u2l4');
  assert.ok(l && l.items.some((i) => i.it === 'la camera'));
});

test('every lesson with phrases includes a speaking (shadowing) step', () => {
  for (const l of LESSONS.filter((x) => x.kind === 'lesson' && x.items.some((i) => i.kind === 'p'))) {
    const steps = lessonSteps(l, { audio: true });
    assert.equal(steps.filter((s) => s.type === 'speak').length, 1, l.id);
  }
});
