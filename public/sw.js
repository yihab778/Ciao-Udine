// Network-first service worker: always fresh when online, fully usable offline.
const CACHE = 'ciao-udine-v1';
const SHELL = [
  './', 'index.html', 'manifest.webmanifest', 'css/app.css', 'icons/icon.svg', 'icons/icon-192.png',
  'js/main.js', 'js/config.js', 'js/util.js', 'js/i18n.js', 'js/store.js', 'js/srs.js', 'js/grade.js', 'js/speech.js',
  'js/plan.js', 'js/share.js', 'js/art.js', 'js/engine.js',
  'js/content/index.js', 'js/content/units-a.js', 'js/content/units-b.js', 'js/content/units-c.js',
  'js/views/onboarding.js', 'js/views/today.js', 'js/views/path.js', 'js/views/runner.js', 'js/views/scene.js',
  'js/views/review.js', 'js/views/words.js', 'js/views/progress.js', 'js/views/settings.js', 'js/views/share.js', 'js/views/partner.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.includes('/api/')) return; // never cache shared progress
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok && (url.origin === location.origin || url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com'))) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then((m) => m || caches.match('index.html'))),
  );
});
