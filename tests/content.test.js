import { test } from 'node:test';
import assert from 'node:assert/strict';
import { UNITS, LESSONS, ITEMS, MILESTONES } from '../public/js/content/index.js';
import { lessonSteps, reviewSteps, distractors } from '../public/js/engine.js';
import { tokenize } from '../public/js/grade.js';

const AR = /[؀-ۿ]/;
const balanced = (s) => (String(s).match(/\*/g) || []).length % 2 === 0;

test('12 units across 4 milestones, one per month', () => {
  assert.equal(UNITS.length, 12);
  assert.deepEqual(UNITS.map((u) => u.month), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  for (const u of UNITS) assert.ok(MILESTONES.find((m) => m.id === u.milestone), u.id);
});

test('ids are unique', () => {
  const ids = LESSONS.map((l) => l.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(ITEMS.size, LESSONS.reduce((a, l) => a + l.items.length, 0));
});

test('every unit has lessons and ends with an interactive scene', () => {
  for (const u of UNITS) {
    assert.ok(u.lessons.length >= 4, u.id);
    assert.equal(u.lessons.at(-1).kind, 'scene', u.id);
    for (const k of ['it', 'fr', 'ar']) assert.ok(u.title[k], `${u.id} title.${k}`);
    assert.ok(u.canDo.fr && AR.test(u.canDo.ar), `${u.id} canDo`);
  }
});

test('items are complete, trilingual and correctly scripted', () => {
  for (const it of ITEMS.values()) {
    assert.ok(it.it && it.fr && it.ar, it.id);
    assert.ok(AR.test(it.ar), `${it.id} arabic`);
    assert.ok(!AR.test(it.fr) && !AR.test(it.it), `${it.id} latin`);
    assert.ok(!it.it.includes('*'), it.id);
  }
});

test('notes have French and Arabic, with balanced Italian markers', () => {
  for (const l of LESSONS.filter((x) => x.kind === 'lesson')) {
    assert.ok(l.note.fr.length && l.note.ar.length, l.id);
    [...l.note.fr, ...l.note.ar, l.compare?.fr, l.compare?.ar, l.culture?.fr, l.culture?.ar].filter(Boolean)
      .forEach((p) => assert.ok(balanced(p), `${l.id}: ${p}`));
    assert.ok(l.goal.fr && l.goal.ar, l.id);
    assert.ok(l.items.length >= 8, `${l.id} has enough material`);
  }
});

test('scenes: every turn has a correct option; wrong options explain why in both languages', () => {
  for (const l of LESSONS.filter((x) => x.kind === 'scene')) {
    assert.ok(l.turns.length >= 3, l.id);
    assert.equal(l.end.length, 3, `${l.id} end`);
    for (const turn of l.turns) {
      assert.ok(turn.npc || turn.prompt, l.id);
      if (turn.npc) assert.equal(turn.npc.length, 3, `${l.id} npc line`);
      assert.ok(turn.options.some((o) => o.ok), `${l.id} has a right answer`);
      for (const o of turn.options) {
        assert.equal(o.t.length, 3, `${l.id} option`);
        assert.ok(AR.test(o.t[2]), `${l.id} option arabic: ${o.t[0]}`);
        if (!o.ok) {
          assert.ok(o.fb?.fr && o.fb?.ar, `${l.id} feedback for ${o.t[0]}`);
          assert.ok(balanced(o.fb.fr) && balanced(o.fb.ar), `${l.id} markers: ${o.t[0]}`);
        }
        if (o.reply) assert.equal(o.reply.length, 3, `${l.id} reply`);
      }
    }
  }
});

test('engine builds sound exercises for every lesson (with and without audio)', () => {
  for (const audio of [true, false]) {
    for (const l of LESSONS.filter((x) => x.kind === 'lesson')) {
      const steps = lessonSteps(l, { audio });
      assert.ok(steps.length >= 10, `${l.id}: ${steps.length} steps`);
      for (const s of steps) {
        if (!audio) assert.ok(!['listen', 'listenBuild'].includes(s.type), 'no audio steps without voice');
        if (s.options) {
          assert.ok(s.options.length >= (s.type === 'minimal' ? 2 : 3), `${l.id} options`);
          assert.ok(s.options.some((o) => o.id === s.item.id));
          const fr = s.options.map((o) => o.fr);
          assert.equal(new Set(fr).size, fr.length, `${l.id} ambiguous options: ${fr}`);
          const it = s.options.map((o) => o.it.toLowerCase());
          assert.equal(new Set(it).size, it.length, `${l.id} duplicate italian options`);
        }
        if (s.tokens) {
          assert.deepEqual(s.tokens, tokenize(s.item.it));
          for (const tk of s.tokens) assert.ok(s.tiles.includes(tk));
        }
      }
    }
  }
});

test('distractors never repeat the answer meaning', () => {
  for (const item of ITEMS.values()) {
    for (const d of distractors(item, 3)) {
      assert.notEqual(d.fr, item.fr, `${item.id} vs ${d.id}`);
      assert.equal(d.kind, item.kind);
    }
  }
});

test('review steps adapt to strength', () => {
  const ids = [...ITEMS.keys()].slice(0, 20);
  const srs = Object.fromEntries(ids.map((id, i) => [id, { reps: i % 4, ivl: [0, 1, 5, 30][i % 4], ease: 2.4 }]));
  const steps = reviewSteps(ids, srs, { audio: false, max: 20 });
  assert.equal(steps.length, 20);
  assert.ok(steps.some((s) => s.type === 'type'));
});
