// Answer checking with friendly, specific explanations.
// Pure functions (no DOM) so they can be unit-tested with `node --test`.

export function normalize(s) {
  return String(s ?? '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.,!?¿¡;:«»"“”()…–—-]/g, ' ')
    .replace(/\s*'\s*/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}
export const stripAccents = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');

const ARTICLE = /^(il|lo|la|i|gli|le|un|uno|una|l'|un')\s*/;
export const stripArticle = (s) => s.replace(ARTICLE, '').trim();
const undouble = (s) => s.replace(/([bcdfglmnprstvz])\1/g, '$1');

export function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

// Typical spelling slips for French / Arabic speakers, with an explanation.
const SOUND_SLIPS = [
  { from: /ou/g, to: 'u', fr: 'En italien, le son « ou » s’écrit simplement *u* (*buono*, *uno*).', ar: 'صوت «و» بيتكتب *u* بس (*buono*، *uno*).' },
  { from: /ch(?=[aou])/g, to: 'c', fr: 'Devant *a*, *o*, *u*, le *c* est déjà dur : pas besoin de *h*.', ar: 'قبل *a, o, u* حرف *c* بيتنطق «ك» من غير *h*.' },
  { from: /k/g, to: 'c', fr: 'L’italien n’utilise presque jamais *k* : on écrit *c* ou *ch*.', ar: 'الإيطالي تقريباً مبيستعملش *k*: بنكتب *c* أو *ch*.' },
  { from: /sh/g, to: 'sc', fr: 'Le son « ch » français s’écrit *sc* devant *e* / *i* (*pesce*).', ar: 'صوت «ش» بيتكتب *sc* قبل *e* و *i* (*pesce*).' },
  { from: /tch/g, to: 'c', fr: 'Le son « tch » s’écrit *c* devant *e* / *i* (*ciao*).', ar: 'صوت «تش» بيتكتب *c* قبل *e* و *i* (*ciao*).' },
  { from: /dj/g, to: 'g', fr: 'Le son « dj » s’écrit *g* devant *e* / *i* (*gelato*, *giorno*).', ar: 'صوت «دج» بيتكتب *g* قبل *e* و *i* (*giorno*).' },
  { from: /ny/g, to: 'gn', fr: 'Le son « gn » de « montagne » s’écrit aussi *gn* en italien.', ar: 'صوت «نيـ» بيتكتب *gn*.' },
  { from: /ll(?=i[aeou])/g, to: 'gl', fr: 'Le son « lli » s’écrit *gli* (*famiglia*).', ar: 'صوت «لْيـ» بيتكتب *gli* (*famiglia*).' },
];

const msg = (fr, ar) => ({ fr, ar });

/**
 * @param {string} answer   learner input
 * @param {string|string[]} expected accepted answers (first one is the reference)
 * @param {object} opt { frenchMeaning?: string }
 * @returns {{ok:boolean, kind:string, note?:{fr,ar}}}
 */
export function check(answer, expected, opt = {}) {
  const list = Array.isArray(expected) ? expected : [expected];
  const a = normalize(answer);
  if (!a) return { ok: false, kind: 'empty', note: msg('Écris ta réponse, même si tu n’es pas sûre !', 'اكتبي إجابتك حتى لو مش متأكدة!') };

  const refs = list.map(normalize);
  if (refs.includes(a)) return { ok: true, kind: 'exact' };

  for (const ref of refs) {
    // 1 · accents only
    if (stripAccents(a) === stripAccents(ref)) {
      const meaningful = /(^|\s)e(\s|$)/.test(a) && /(^|\s)è(\s|$)/.test(ref);
      return {
        ok: true, kind: 'accent',
        note: meaningful
          ? msg('Juste ! Attention à l’accent : *è* (est) n’est pas *e* (et).', 'صح! خلي بالك من العلامة: *è* (يكون) غير *e* (و).')
          : msg('Juste ! Petit détail d’accent : *' + list[refs.indexOf(ref)] + '*. Astuce : appui long sur la lettre du clavier.', 'صح! بس فيه علامة ناقصة: *' + list[refs.indexOf(ref)] + '*. اضغطي ضغطة طويلة على الحرف في الكيبورد.'),
      };
    }
    // 2 · missing/extra article
    if (stripArticle(a) === stripArticle(ref) || stripAccents(stripArticle(a)) === stripAccents(stripArticle(ref))) {
      return { ok: true, kind: 'article', note: msg('Juste ! Apprends le mot avec son article : *' + list[refs.indexOf(ref)] + '*.', 'صح! احفظي الكلمة بالأداة بتاعتها: *' + list[refs.indexOf(ref)] + '*.') };
    }
  }

  // 2b · optional subject pronoun (io sono stanca = sono stanca)
  const PRON = /^(io|tu|lui|lei|noi|voi|loro)\s+/;
  for (const ref of refs) {
    if (stripAccents(a.replace(PRON, '')) === stripAccents(ref.replace(PRON, '')) && (PRON.test(a) || PRON.test(ref))) {
      return { ok: true, kind: 'pronoun', note: msg('Juste ! En italien, le pronom sujet est facultatif : *' + list[refs.indexOf(ref)] + '* suffit souvent.', 'صح! في الإيطالي الضمير مش لازم: *' + list[refs.indexOf(ref)] + '* كفاية غالباً.') };
    }
  }

  const ref = refs[0];
  const refShown = list[0];
  const A = stripAccents(a), R = stripAccents(ref);

  // 3 · double consonants
  if (undouble(A) === undouble(R)) {
    return { ok: false, kind: 'double', note: msg('Presque ! Attention aux consonnes doubles : *' + refShown + '*. Elles s’entendent : on les tient plus longtemps.', 'قربتي! خلي بالك من الحروف المتشددة: *' + refShown + '*. بتتنطق أطول، زي الشدة.') };
  }
  // 4 · silent h (ho, hai, ha, hanno)
  if (A.replace(/\bh(?=a|o)/g, '') === R.replace(/\bh(?=a|o)/g, '')) {
    return { ok: false, kind: 'h', note: msg('Presque ! *ho, hai, ha, hanno* (avoir) s’écrivent avec un *h* muet. Sans *h*, *o* = « ou », *a* = « à ».', 'قربتي! *ho, hai, ha, hanno* بتتكتب بـ *h* مبتتنطقش. من غيرها *o* = «أو» و *a* = «لـ».') };
  }
  // 5 · typical sound-spelling slips
  for (const s of SOUND_SLIPS) {
    if (A.replace(s.from, s.to) === R) return { ok: false, kind: 'sound', note: msg('Presque ! ' + s.fr + ' Réponse : *' + refShown + '*.', 'قربتي! ' + s.ar + ' الإجابة: *' + refShown + '*.') };
  }
  // 6 · French answer instead of Italian
  if (opt.frenchMeaning && stripAccents(normalize(opt.frenchMeaning)) === A) {
    return { ok: false, kind: 'french', note: msg('Ça, c’est la version française ! En italien : *' + refShown + '*.', 'ده بالفرنساوي! بالإيطالي: *' + refShown + '*.') };
  }
  // 7 · one small typo on a long enough answer → accepted
  const dist = levenshtein(A, R);
  if (R.length >= 6 && dist === 1) {
    return { ok: true, kind: 'typo', note: msg('Juste, avec une petite faute de frappe : *' + refShown + '*.', 'صح، بس فيه غلطة كتابة صغيرة: *' + refShown + '*.') };
  }

  // 8 · word-level analysis
  const aw = A.split(' '), rw = R.split(' ');
  if (aw.length > 1 && [...aw].sort().join(' ') === [...rw].sort().join(' ')) {
    return { ok: false, kind: 'order', note: msg('Les bons mots, mais pas dans le bon ordre : *' + refShown + '*.', 'الكلمات صح بس الترتيب لأ: *' + refShown + '*.') };
  }
  const missing = rw.filter((w) => !aw.includes(w));
  const extra = aw.filter((w) => !rw.includes(w));
  if (rw.length > 1 && missing.length === 1 && extra.length === 0) {
    return { ok: false, kind: 'missing', note: msg('Il manque un mot : *' + missing[0] + '*. Réponse : *' + refShown + '*.', 'فيه كلمة ناقصة: *' + missing[0] + '*. الإجابة: *' + refShown + '*.') };
  }
  if (rw.length > 1 && missing.length === 1 && extra.length === 1) {
    return { ok: false, kind: 'word', note: msg('Presque : *' + extra[0] + '* → *' + missing[0] + '*. Réponse : *' + refShown + '*.', 'قربتي: *' + extra[0] + '* ← *' + missing[0] + '*. الإجابة: *' + refShown + '*.') };
  }
  return { ok: false, kind: 'wrong', note: msg('La bonne réponse : *' + refShown + '*. Ce n’est pas grave — on la reverra bientôt.', 'الإجابة الصح: *' + refShown + '*. ولا يهمك — هنراجعها تاني قريب.') };
}

/** Compare token sequences for sentence-building exercises. */
export function checkTokens(chosen, expectedTokens) {
  const a = chosen.map((t) => stripAccents(normalize(t))).join(' ');
  const r = expectedTokens.map((t) => stripAccents(normalize(t))).join(' ');
  if (a === r) return { ok: true, kind: 'exact' };
  if ([...chosen].map(normalize).sort().join(' ') === [...expectedTokens].map(normalize).sort().join(' ')) {
    return { ok: false, kind: 'order', note: msg('Les bons mots, mais l’ordre change.', 'الكلمات صح بس الترتيب مختلف.') };
  }
  return { ok: false, kind: 'wrong', note: msg('Regarde bien la phrase correcte, puis on réessaie plus tard.', 'بصّي على الجملة الصح، وهنجرب تاني بعدين.') };
}

/** Split a phrase into word tiles (keeps elisions like d’acqua together). */
export function tokenize(phrase) {
  return String(phrase).replace(/[.,!?;:]/g, '').split(/\s+/).filter(Boolean);
}
