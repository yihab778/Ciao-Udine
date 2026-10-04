// ─────────────────────────────────────────────────────────────
//  App identity — change the name here (and in manifest.webmanifest
//  + <title> in index.html) to rebrand the whole app.
// ─────────────────────────────────────────────────────────────
export const APP = {
  name: 'Ciao, Udine!',
  shortName: 'Ciao Udine',
  city: 'Udine',
  version: '1.0.0',
  storageKey: 'ciao-udine:v1',
};

export const DAILY_GOALS = [10, 15, 20];

// Default move date: one year from first launch (editable in onboarding / settings)
export function defaultMoveDate(now = new Date()) {
  const d = new Date(now.getFullYear() + 1, now.getMonth(), 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}
