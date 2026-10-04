import { MONTHS } from './content/index.js';

export const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** Italian text, always isolated left-to-right (important inside Arabic UI). */
export const itx = (text, cls = '') => `<span class="it ${cls}" lang="it" dir="ltr">${esc(text)}</span>`;

/** Support-language text with correct direction. */
export const sup = (text, lang, cls = '') =>
  `<span class="sup ${cls}" lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">${esc(text)}</span>`;

/** Render a note string where *word* marks Italian examples. */
export function rich(text) {
  const parts = String(text ?? '').split(/\*([^*]+)\*/g);
  return parts.map((p, i) => (i % 2 ? itx(p, 'em') : esc(p))).join('');
}

/** Pick the support language version of a {fr, ar} object, falling back to French. */
export const tr = (obj, lang) => (obj ? (obj[lang] ?? obj.fr ?? '') : '');

/** Item translation for an item {fr, ar} */
export const meaning = (item, lang) => (lang === 'ar' ? item.ar || item.fr : item.fr);

/** Replace personal placeholders. */
export function personalize(text, profile = {}) {
  if (!text) return text;
  const [y, m] = String(profile.moveDate || '').split('-').map(Number);
  const mi = (m || 9) - 1;
  return String(text)
    .replaceAll('{name}', profile.name?.trim() || 'Nour')
    .replaceAll('{partner}', profile.partnerName?.trim() || 'Youssef')
    .replaceAll('{moveMonthIt}', MONTHS.it[mi])
    .replaceAll('{moveMonthFr}', MONTHS.fr[mi])
    .replaceAll('{moveMonthAr}', MONTHS.ar[mi])
    .replaceAll('{moveYear}', String(y || ''));
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export const sample = (arr, n) => shuffle(arr).slice(0, n);
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function dayKey(d = new Date()) {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
}
export function addDays(key, n) {
  const [y, m, d] = key.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
}
export function daysBetween(a, b) {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}

export function randomId(bytes = 16) {
  const a = new Uint8Array(bytes);
  crypto.getRandomValues(a);
  return Array.from(a, (b) => b.toString(16).padStart(2, '0')).join('');
}

export function b64urlEncode(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
export function b64urlDecode(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4);
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
