// Hand-made SVG illustrations and icons inspired by Udine:
// the striped Loggia del Lionello, the castle on its hill with the angel,
// the clock tower, and the Alps behind the city.

const S = (body, size = 24, extra = '') =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${body}</svg>`;

export const icons = {
  today: (s) => S('<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>', s),
  path: (s) => S('<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16"/>', s),
  review: (s) => S('<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3.5V8h4.5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 20.5V16h-4.5"/>', s),
  words: (s) => S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M9 8h7M9 11.5h5"/>', s),
  progress: (s) => S('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>', s),
  settings: (s) => S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>', s),
  heart: (s) => S('<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z"/>', s),
  sound: (s) => S('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>', s),
  turtle: (s) => S('<path d="M5 15c0-4 3-7 7-7s7 3 7 7z"/><path d="M19 15h2l-1-3M7 15l-1 3M17 15l1 3M9 8.5 12 15l3-6.5"/><circle cx="21" cy="11" r=".5"/>', s),
  close: (s) => S('<path d="M6 6l12 12M18 6 6 18"/>', s),
  check: (s) => S('<path d="m4.5 12.5 5 5L20 7"/>', s),
  lock: (s) => S('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>', s),
  arrow: (s) => S('<path d="M5 12h14M13 6l6 6-6 6"/>', s, 'class="flip-rtl"'),
  back: (s) => S('<path d="M19 12H5M11 6l-6 6 6 6"/>', s, 'class="flip-rtl"'),
  share: (s) => S('<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/>', s),
  copy: (s) => S('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>', s),
  search: (s) => S('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>', s),
  eye: (s) => S('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', s),
  shield: (s) => S('<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>', s),
  download: (s) => S('<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>', s),
  upload: (s) => S('<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>', s),
  // unit icons
  wave: (s) => S('<path d="M7 11.5V6.5a1.5 1.5 0 0 1 3 0V11"/><path d="M10 10V4.5a1.5 1.5 0 0 1 3 0V10"/><path d="M13 10V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M16 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6.5 6.5 0 0 1-5.3-2.7L3.5 14.6a1.5 1.5 0 0 1 2.3-2L7 14"/>', s),
  cup: (s) => S('<path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 2.5c-.8 1 .8 2 0 3M12 2.5c-.8 1 .8 2 0 3"/><path d="M3 22h14"/>', s),
  people: (s) => S('<circle cx="9" cy="7.5" r="3.5"/><path d="M2.5 21a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.6"/><path d="M15.8 14.2A5 5 0 0 1 21.5 19"/>', s),
  basket: (s) => S('<path d="M3 10h18l-2 10H5z"/><path d="m8 10 3-6M16 10l-3-6M9 14v3M12 14v3M15 14v3"/>', s),
  train: (s) => S('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M9 21l1.5-4M15 21l-1.5-4"/><circle cx="9" cy="13.5" r=".8"/><circle cx="15" cy="13.5" r=".8"/>', s),
  map: (s) => S('<path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>', s),
  key: (s) => S('<circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8.7-8.7M16.5 6.5l2.5 2.5M14 9l2 2"/>', s),
  calendar: (s) => S('<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M8 14h2M14 14h2M8 17.5h2"/>', s),
  cross: (s) => S('<path d="M9 3.5h6v5.5h5.5v6H15v5.5H9V15H3.5V9H9z"/>', s),
  stamp: (s) => S('<path d="M9.5 3.5h5l-1 7h-3z"/><path d="M5 14a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5z"/><path d="M4 20h16"/>', s),
  book: (s) => S('<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5c-3.5-.5-6.5 0-8.5 1.5z"/><path d="M12 6.5v13"/>', s),
  castle: (s) => S('<path d="M4 21V11h3V8h3v3h4V8h3v3h3v10z"/><path d="M12 8V3.5M12 3.5l2.5 1.2L12 6"/><path d="M10 21v-4a2 2 0 0 1 4 0v4"/>', s),
};

export const logo = (size = 36) => `
<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">
  <rect width="64" height="64" rx="18" fill="var(--accent)"/>
  <circle cx="44" cy="19" r="6" fill="var(--gold)"/>
  <path d="M14 52V34a18 18 0 0 1 36 0v18" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  <path d="M23 52V36a9 9 0 0 1 18 0v16" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-dasharray="4 4"/>
</svg>`;

/** The city: Alps, castle hill with angel, clock tower and the striped loggia. */
export function skyline({ height = 150, sun = true } = {}) {
  const stripes = Array.from({ length: 9 }, (_, i) =>
    `<rect x="${118 + i * 14}" y="96" width="7" height="40" fill="var(--rose-stripe)"/>`).join('');
  const arches = Array.from({ length: 5 }, (_, i) =>
    `<path d="M${124 + i * 24} 136v-16a8 8 0 0 1 16 0v16" fill="var(--sky-deep)" opacity=".85"/>`).join('');
  return `
<svg class="skyline" viewBox="0 0 360 150" height="${height}" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Udine">
  <defs>
    <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="var(--sky-top)"/><stop offset="1" stop-color="var(--sky-bottom)"/>
    </linearGradient>
  </defs>
  <rect width="360" height="150" fill="url(#sky)"/>
  ${sun ? '<circle class="sun" cx="300" cy="38" r="17" fill="var(--gold)"/>' : ''}
  <path d="M0 98 38 58l22 18 34-40 30 30 26-20 40 34 30-26 36 32 30-22 34 30 20-10v64H0z" fill="var(--mountain)" opacity=".55"/>
  <path d="M60 68l8 6M94 36l9 10M124 66l-6 5M210 54l7 6M276 62l7 6" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
  <path d="M0 118c40-6 70-38 120-40s80 28 120 30 80-10 120-6v48H0z" fill="var(--hill)"/>
  <g class="castle">
    <rect x="46" y="70" width="64" height="26" rx="2" fill="var(--castle)"/>
    <path d="M46 70h64l-6-8H52z" fill="var(--roof)"/>
    <rect x="72" y="44" width="12" height="26" fill="var(--castle)"/>
    <path d="M70 44h16l-8-10z" fill="var(--roof)"/>
    <path d="M78 34v-8M74.5 28.5 78 26l3.5 2.5" stroke="var(--gold)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    ${[52, 62, 92, 102].map((x) => `<rect x="${x}" y="78" width="4" height="7" rx="2" fill="var(--sky-deep)" opacity=".6"/>`).join('')}
  </g>
  <g class="tower">
    <rect x="252" y="66" width="22" height="70" fill="var(--castle)"/>
    <circle cx="263" cy="84" r="6.5" fill="var(--paper)" stroke="var(--sky-deep)" stroke-width="1.5"/>
    <path d="M263 80.5V84l2.5 1.5" stroke="var(--sky-deep)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <path d="M249 66h28l-14-12z" fill="var(--roof)"/>
    <circle cx="256" cy="51" r="2.2" fill="var(--ink-soft)"/><circle cx="270" cy="51" r="2.2" fill="var(--ink-soft)"/>
  </g>
  <g class="loggia">
    <rect x="112" y="92" width="134" height="44" fill="var(--loggia)"/>
    ${stripes}
    ${arches}
    <path d="M108 92h142l-8-9H116z" fill="var(--roof)"/>
  </g>
  <rect x="0" y="136" width="360" height="14" fill="var(--paper-deep)"/>
</svg>`;
}

/** Progress ring */
export function ring(pct, size = 64, stroke = 7, label = '') {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(1, pct));
  return `
<svg class="ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="${label}">
  <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--track)" stroke-width="${stroke}"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="${stroke}"
    stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
</svg>`;
}

/** Little confetti of Udine colours for celebrations */
export function confetti(n = 22) {
  const colors = ['var(--accent)', 'var(--gold)', 'var(--sage)', 'var(--blue)', 'var(--rose-stripe)'];
  return `<div class="confetti" aria-hidden="true">${Array.from({ length: n }, (_, i) =>
    `<i style="--x:${Math.round(Math.random() * 100)}%;--d:${(Math.random() * 0.8).toFixed(2)}s;--r:${Math.round(Math.random() * 360)}deg;background:${colors[i % colors.length]}"></i>`).join('')}</div>`;
}
