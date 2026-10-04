// Italian audio through the browser's built-in speech synthesis.
// Gracefully degrades: if no Italian voice exists, the app hides audio-only
// exercises and shows text instead.

// Natural / neural / premium voices first: robotic TTS is a top complaint about language apps.
const PREFERRED = [/natural|neural/i, /premium|enhanced/i, /google.*italiano/i, /alice/i, /federica/i, /elsa/i, /isabella/i, /paola/i, /luca/i, /diego/i, /cosimo/i];

let voice = null;
let status = 'checking'; // 'checking' | 'ok' | 'fallback' | 'none'
const subs = new Set();

function choose() {
  const synth = window.speechSynthesis;
  if (!synth) { status = 'none'; return; }
  const voices = synth.getVoices() || [];
  const it = voices.filter((v) => /^it([-_]|$)/i.test(v.lang));
  if (it.length) {
    voice = PREFERRED.map((r) => it.find((v) => r.test(v.name))).find(Boolean) || it.find((v) => v.localService) || it[0];
    status = 'ok';
  } else if (voices.length) {
    voice = null; status = 'none';
  }
  subs.forEach((f) => f(status));
}

export const speech = {
  init() {
    if (!('speechSynthesis' in window)) { status = 'none'; return; }
    choose();
    window.speechSynthesis.addEventListener?.('voiceschanged', choose);
    // Some browsers never fire voiceschanged: decide after a short wait.
    setTimeout(() => { if (status === 'checking') { choose(); if (status === 'checking') { status = 'none'; subs.forEach((f) => f(status)); } } }, 2500);
  },
  get status() { return status; },
  get available() { return status === 'ok'; },
  get voiceName() { return voice?.name || null; },
  onChange(f) { subs.add(f); return () => subs.delete(f); },
  speak(text, rate = 0.9) {
    return new Promise((resolve) => {
      if (!this.available) return resolve(false);
      try {
        const synth = window.speechSynthesis;
        synth.cancel();
        const u = new SpeechSynthesisUtterance(String(text).replace(/[*]/g, ''));
        u.lang = voice?.lang || 'it-IT';
        if (voice) u.voice = voice;
        u.rate = rate;
        u.onend = () => resolve(true);
        u.onerror = () => resolve(false);
        synth.speak(u);
        setTimeout(() => resolve(true), 12000);
      } catch { resolve(false); }
    });
  },
  stop() { try { window.speechSynthesis?.cancel(); } catch { /* noop */ } },
};
