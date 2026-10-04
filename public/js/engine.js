// Builds short, varied exercise sequences from authored lesson content.
import { LESSONS, ITEMS, unitById } from './content/index.js';
import { shuffle, sample } from './util.js';
import { tokenize } from './grade.js';
import { strength } from './srs.js';

const sameish = (a, b) => a.it.toLowerCase() === b.it.toLowerCase() || a.fr === b.fr || a.ar === b.ar;

/** Pick plausible wrong options of the same kind (word vs phrase), closest pools first. */
export function distractors(item, n = 3) {
  const lesson = LESSONS.find((l) => l.id === item.lessonId);
  const unit = unitById(item.unitId);
  const pools = [
    lesson.items,
    unit.lessons.flatMap((l) => l.items || []),
    [...ITEMS.values()],
  ];
  const picked = [];
  for (const pool of pools) {
    const cands = shuffle(pool.filter((x) => x.kind === item.kind && x.id !== item.id
      && !sameish(x, item) && !picked.some((p) => sameish(p, x))));
    for (const c of cands) { if (picked.length < n) picked.push(c); }
    if (picked.length >= n) break;
  }
  return picked;
}

const options = (item, n = 3) => shuffle([item, ...distractors(item, n)]);

function buildStep(item, listen = false) {
  const tokens = tokenize(item.it);
  const pool = distractors(item, 4).flatMap((d) => tokenize(d.it));
  const extra = sample(pool.filter((t) => !tokens.some((x) => x.toLowerCase() === t.toLowerCase())), tokens.length > 5 ? 2 : 1);
  return { type: listen ? 'listenBuild' : 'build', item, tokens, tiles: shuffle([...tokens, ...extra]) };
}

const wordCount = (s) => s.split(/\s+/).length;

export function exerciseFor(item, s, audio) {
  if (item.kind === 'w') {
    if (s <= 0) return audio && Math.random() < 0.5 ? { type: 'listen', item, options: options(item) } : { type: 'choose', item, options: options(item) };
    if (s === 1) return audio && Math.random() < 0.4 ? { type: 'listen', item, options: options(item) } : { type: 'reverse', item, options: options(item) };
    return wordCount(item.it) <= 3 ? { type: 'type', item } : { type: 'reverse', item, options: options(item) };
  }
  if (s <= 1) return buildStep(item, false);
  if (s === 2) return buildStep(item, audio);
  return wordCount(item.it) <= 4 ? { type: 'type', item } : buildStep(item, audio);
}

/** Full lesson: intro → note → [discover → practise → match] × chunks → phrases → recall. */
export function lessonSteps(lesson, { audio }) {
  const words = lesson.items.filter((i) => i.kind === 'w');
  const phrases = lesson.items.filter((i) => i.kind === 'p');
  const steps = [{ type: 'intro' }, { type: 'note' }];

  const chunks = [];
  for (let i = 0; i < words.length; i += 5) chunks.push(words.slice(i, i + 5));
  // avoid a lonely 1–2 word last chunk
  if (chunks.length > 1 && chunks[chunks.length - 1].length < 3) {
    const last = chunks.pop();
    chunks[chunks.length - 1].push(...last);
  }

  const wordKinds = audio ? ['choose', 'listen', 'reverse', 'choose', 'listen', 'reverse', 'choose'] : ['choose', 'reverse', 'choose', 'reverse', 'choose', 'reverse', 'choose'];
  for (const chunk of chunks) {
    steps.push({ type: 'discover', items: chunk });
    shuffle(chunk).forEach((w, i) => steps.push({ type: wordKinds[i % wordKinds.length], item: w, options: options(w) }));
    if (chunk.length >= 3) steps.push({ type: 'match', items: sample(chunk, Math.min(5, chunk.length)) });
  }

  // Minimal pairs (sounds that change meaning: p/b, v/f, double consonants)
  if (lesson.pairs?.length) {
    const byIt = (t) => words.find((w) => w.it === t);
    for (const [a, b] of shuffle(lesson.pairs)) {
      const A = byIt(a), B = byIt(b);
      if (!A || !B) continue;
      const [target, other] = Math.random() < 0.5 ? [A, B] : [B, A];
      steps.push({ type: 'minimal', item: target, options: shuffle([target, other]) });
    }
  }

  if (phrases.length) {
    steps.push({ type: 'discover', items: phrases, phrases: true });
    phrases.forEach((p, i) => {
      if (i % 3 === 2) steps.push({ type: 'reverse', item: p, options: options(p) });
      else steps.push(buildStep(p, audio && i % 3 === 1));
    });
  }

  // Speaking: listen, repeat aloud, compare with your own recording (private, on-device)
  const speakPhrase = phrases.find((p) => wordCount(p.it) <= 7) || phrases[0];
  if (speakPhrase) steps.push({ type: 'speak', item: speakPhrase });

  // Active recall to finish: two short words and one short phrase
  const typeWords = sample(words.filter((w) => wordCount(w.it) <= 3), 2);
  const typePhrase = phrases.filter((p) => wordCount(p.it) <= 4 && !p.it.includes('{'))[0];
  typeWords.forEach((w) => steps.push({ type: 'type', item: w }));
  if (typePhrase) steps.push({ type: 'type', item: typePhrase });
  return steps;
}

/** Review queue → steps adapted to how well each item is known. */
export function reviewSteps(ids, srs, { audio, max = 15 }) {
  return ids.slice(0, max)
    .map((id) => ITEMS.get(id)).filter(Boolean)
    .map((item) => exerciseFor(item, strength(srs[item.id]), audio));
}

/** Mixed practice for one stage (from lessons already completed). */
export function practiceSteps(unit, state, { audio, n = 10 }) {
  const items = unit.lessons.filter((l) => state.lessons[l.id]).flatMap((l) => l.items || []);
  const chosen = sample(items, n);
  const words = chosen.filter((i) => i.kind === 'w');
  const steps = chosen.map((item) => exerciseFor(item, Math.min(3, strength(state.srs[item.id]) + 1), audio));
  if (words.length >= 4) steps.splice(Math.min(3, steps.length), 0, { type: 'match', items: words.slice(0, 5) });
  return steps;
}
