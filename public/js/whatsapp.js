// WhatsApp shortcuts: celebrate, ask a question, share progress.
// Uses official wa.me links (no API, no server, no keys). The partner's number is
// stored only on the learner's phone, never in the code or the public repository.

/** Keep digits only, drop a leading 00 or +. Returns '' if it doesn't look like a phone number. */
export function cleanNumber(raw) {
  let d = String(raw || '').replace(/[^\d]/g, '');
  if (d.startsWith('00')) d = d.slice(2);
  return d.length >= 8 && d.length <= 15 ? d : '';
}

/** wa.me link: opens the chat with the message ready; without a number WhatsApp lets her pick the contact. */
export function waLink(number, text) {
  const n = cleanNumber(number);
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

/** Read an invite like #/invite?name=Youssef&wa=393331234567 */
export function parseInvite(query) {
  const q = new URLSearchParams(query || '');
  const name = (q.get('name') || '').trim().slice(0, 30);
  const wa = cleanNumber(q.get('wa'));
  return name || wa ? { name, wa } : null;
}

// Messages are written in simple Italian on purpose: every message is a little practice.
export const messages = {
  lesson: (p, lesson) => `Ciao ${p}! Ho appena finito la lezione "${lesson.title.it}" su Ciao, Udine! 🎉`,
  unit: (p, unit) => `🎉 ${p}, ho completato la tappa "${unit.title.it}" di Ciao, Udine! Un passo in più verso Udine.`,
  milestone: (p, ms) => `🏆 ${p}! Traguardo raggiunto su Ciao, Udine: "${ms.title.it}". Sono orgogliosa di me!`,
  goal: (p, minutes) => `Ciao ${p}! Oggi ho studiato italiano per ${minutes} minuti 💪`,
  question: (p, it, meaning, answer) =>
    `${p}, ho una domanda di italiano 🤔\n«${it}» (${meaning})${answer ? `\nIo avevo scritto: «${answer}»` : ''}\nMi aiuti?`,
  free: (p) => `${p}, ho una domanda di italiano 🤔\n`,
  progress: (p, link) => `Ciao ${p}! Ecco come va il mio italiano 📈\n${link}`,
};
