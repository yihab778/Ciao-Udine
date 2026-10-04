import { unitsA } from './units-a.js';
import { unitsB } from './units-b.js';
import { unitsC } from './units-c.js';

export const MILESTONES = [
  {
    id: 'm1', months: [1, 2], level: '\u2066A1 −\u2069',
    title: { it: 'Primi passi', fr: 'Premiers pas', ar: 'أول خطوات' },
    canDo: { fr: 'Je salue, je me présente, je commande au café.', ar: 'بسلّم، بعرّف نفسي، وبطلب في الكافيه.' },
  },
  {
    id: 'm2', months: [3, 4, 5], level: '\u2066A1\u2069',
    title: { it: 'Le basi', fr: 'Les bases', ar: 'الأساسيات' },
    canDo: { fr: 'Je parle de ma famille, je fais mes courses, je prends le train.', ar: 'بتكلم عن عيلتي، بشتري طلباتي، وبركب القطر.' },
  },
  {
    id: 'm3', months: [6, 7, 8, 9], level: '\u2066A1 +\u2069',
    title: { it: 'Vita quotidiana', fr: 'La vie quotidienne', ar: 'الحياة اليومية' },
    canDo: { fr: 'Je me repère en ville, je gère la maison, les rendez-vous et la pharmacie.', ar: 'بعرف أتحرك في المدينة، وأتعامل مع البيت والمواعيد والصيدلية.' },
  },
  {
    id: 'm4', months: [10, 11, 12], level: '\u2066A1 → A2\u2069',
    title: { it: 'Conversazioni', fr: 'Conversations', ar: 'محادثات' },
    canDo: { fr: 'Je fais mes démarches, je raconte ma semaine, je discute entre amis.', ar: 'بخلّص مشاويري، بحكي عن أسبوعي، وبدردش مع الصحاب.' },
  },
];

export const UNITS = [...unitsA, ...unitsB, ...unitsC];

const toItem = (kind, lessonId, unitId, i) => (t) => ({
  id: `${lessonId}:${kind}${i}`, kind, lessonId, unitId,
  it: t[0], fr: t[1], ar: t[2], hint: t[3] || null,
});

// Flattened lookups built once
export const LESSONS = [];
export const ITEMS = new Map();
for (const u of UNITS) {
  u.lessons.forEach((l, idx) => {
    l.unitId = u.id;
    l.kind = l.kind || 'lesson';
    l.index = idx;
    l.items = [];
    (l.words || []).forEach((w, i) => { const it = toItem('w', l.id, u.id, i)(w); l.items.push(it); ITEMS.set(it.id, it); });
    (l.phrases || []).forEach((p, i) => { const it = toItem('p', l.id, u.id, i)(p); l.items.push(it); ITEMS.set(it.id, it); });
    LESSONS.push(l);
  });
}

export const lessonById = (id) => LESSONS.find((l) => l.id === id);
export const unitById = (id) => UNITS.find((u) => u.id === id);
export const milestoneById = (id) => MILESTONES.find((m) => m.id === id);
export const nextLesson = (completed) => LESSONS.find((l) => !completed[l.id]) || null;

export const MONTHS = {
  it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};
