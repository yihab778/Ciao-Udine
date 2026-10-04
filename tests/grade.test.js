import { test } from 'node:test';
import assert from 'node:assert/strict';
import { check, checkTokens, tokenize, normalize } from '../public/js/grade.js';
import { newCard, schedule, strength, dueIds } from '../public/js/srs.js';

test('normalize ignores case, punctuation and apostrophe styles', () => {
  assert.equal(normalize('Un po’!'), "un po'");
  assert.equal(normalize('  Dov’è  la  STAZIONE? '), "dov'è la stazione");
});

test('exact, accent, article and typo answers are accepted with a note', () => {
  assert.equal(check('grazie', 'grazie').kind, 'exact');
  const acc = check('caffe', 'il caffè');
  assert.equal(acc.ok, true);
  const art = check('pane', 'il pane');
  assert.equal(art.ok, true); assert.equal(art.kind, 'article');
  const ae = check('lui e', 'lui è');
  assert.equal(ae.ok, true); assert.match(ae.note.fr, /è/);
  const typo = check('arrivederco', 'arrivederci');
  assert.equal(typo.ok, true); assert.equal(typo.kind, 'typo');
});

test('typical learner slips get a specific explanation', () => {
  assert.equal(check('nona', 'nonna').kind, 'double');
  assert.equal(check('o fame', 'ho fame').kind, 'h');
  assert.equal(check('bouongiorno', 'buongiorno').kind, 'sound');
  assert.equal(check('pesche', 'pesce').ok, false);
  assert.equal(check('bonjour', 'buongiorno', { frenchMeaning: 'bonjour' }).kind, 'french');
  assert.equal(check('bene sto', 'sto bene').kind, 'order');
  assert.equal(check('un caffè favore', 'un caffè per favore').kind, 'missing');
  assert.equal(check('', 'ciao').ok, false);
});

test('sentence building compares tokens', () => {
  const tk = tokenize('Vorrei un cappuccino e una brioche.');
  assert.deepEqual(tk, ['Vorrei', 'un', 'cappuccino', 'e', 'una', 'brioche']);
  assert.equal(checkTokens(tk, tk).ok, true);
  assert.equal(checkTokens([...tk].reverse(), tk).kind, 'order');
  assert.deepEqual(tokenize('Un bicchiere d’acqua, per favore.'), ['Un', 'bicchiere', 'd’acqua', 'per', 'favore']);
});

test('spaced repetition grows intervals and is gentle on mistakes', () => {
  const today = '2026-10-04';
  let c = newCard(today, true);
  assert.equal(c.due, '2026-10-05');
  c = schedule(c, true, '2026-10-05'); assert.equal(c.ivl, 3);
  c = schedule(c, true, '2026-10-08'); assert.ok(c.ivl >= 7);
  assert.ok(strength(c) >= 2);
  c = schedule(c, false, '2026-10-20'); assert.equal(c.ivl, 1); assert.equal(strength(c), 0);
  const hard = newCard(today, false);
  assert.deepEqual(dueIds({ a: hard, b: newCard(today, true) }, today), ['a']);
});
