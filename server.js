#!/usr/bin/env node
// Ciao, Udine! — tiny zero-dependency server.
//  • serves the PWA from ./public
//  • optional progress-sharing API (summaries only) stored in ./data/shares.json
//
//  PORT=5173 HOST=0.0.0.0 SHARING=on node server.js
import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(ROOT, 'public');
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data');
const DB_FILE = path.join(DATA_DIR, 'shares.json');
const PORT = Number(process.env.PORT || 5173);
const HOST = process.env.HOST || '0.0.0.0';
const SHARING = (process.env.SHARING || 'on').toLowerCase() !== 'off';

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
};

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'geolocation=(), camera=(), microphone=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self'; manifest-src 'self'; worker-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
};

// ── storage ───────────────────────────────────────────────────
let db = { shares: {} };
try { db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); } catch { /* first run */ }
let writing = Promise.resolve();
function persist() {
  writing = writing.then(async () => {
    await fsp.mkdir(DATA_DIR, { recursive: true });
    const tmp = `${DB_FILE}.${process.pid}.tmp`;
    await fsp.writeFile(tmp, JSON.stringify(db));
    await fsp.rename(tmp, DB_FILE);
  }).catch((e) => console.error('Could not save shares:', e.message));
  return writing;
}

const sha = (s) => crypto.createHash('sha256').update(String(s)).digest('hex');
const ID_RE = /^[a-f0-9]{32}$/;

function authorized(req, share) {
  const m = /^Bearer ([a-f0-9]{64})$/.exec(req.headers.authorization || '');
  if (!m || !share) return false;
  const a = Buffer.from(sha(m[1]), 'hex');
  const b = Buffer.from(share.tokenHash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function validSummary(s) {
  if (!s || typeof s !== 'object' || s.v !== 1) return false;
  if (!Array.isArray(s.last28) || s.last28.length !== 28 || !s.last28.every((n) => Number.isFinite(n) && n >= 0 && n < 1440)) return false;
  for (const k of ['lessonsDone', 'lessonsTotal', 'words', 'goal']) if (!Number.isFinite(s[k])) return false;
  for (const k of ['name', 'partner', 'move', 'current', 'at']) if (typeof s[k] !== 'string' || s[k].length > 40) return false;
  return true;
}

// naive rate limiter for public endpoints
const hits = new Map();
function limited(ip, key, max, windowMs) {
  const k = `${ip}:${key}`; const now = Date.now();
  const arr = (hits.get(k) || []).filter((t) => now - t < windowMs);
  arr.push(now); hits.set(k, arr);
  return arr.length > max;
}

function send(res, status, body, headers = {}) {
  const isObj = typeof body === 'object' && !Buffer.isBuffer(body);
  res.writeHead(status, { ...SECURITY_HEADERS, ...(isObj ? { 'Content-Type': MIME['.json'], 'Cache-Control': 'no-store' } : {}), ...headers });
  res.end(isObj ? JSON.stringify(body) : body);
}

function readJson(req, limit = 16 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', (c) => { size += c.length; if (size > limit) { reject(new Error('too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || 'null')); } catch { reject(new Error('bad json')); } });
    req.on('error', reject);
  });
}

async function api(req, res, parts) {
  const ip = req.socket.remoteAddress || '?';
  if (parts[0] === 'health') return send(res, 200, { ok: true, sharing: SHARING });
  if (!SHARING) return send(res, 404, { error: 'sharing disabled' });
  if (parts[0] !== 'shares') return send(res, 404, { error: 'not found' });

  const id = parts[1];
  if (!id) {
    if (req.method !== 'POST') return send(res, 405, { error: 'method' });
    if (limited(ip, 'create', 10, 3600_000)) return send(res, 429, { error: 'slow down' });
    const newId = crypto.randomBytes(16).toString('hex');
    const token = crypto.randomBytes(32).toString('hex');
    db.shares[newId] = { tokenHash: sha(token), summary: null, cheers: [], created: new Date().toISOString() };
    await persist();
    return send(res, 201, { id: newId, token });
  }
  if (!ID_RE.test(id)) return send(res, 404, { error: 'not found' });
  const share = db.shares[id];

  if (parts[2] === 'cheers') {
    if (req.method !== 'POST') return send(res, 405, { error: 'method' });
    if (!share?.summary) return send(res, 404, { error: 'not found' });
    if (limited(ip, `cheer:${id}`, 10, 3600_000)) return send(res, 429, { error: 'slow down' });
    let body; try { body = await readJson(req, 2048); } catch { return send(res, 400, { error: 'bad request' }); }
    const text = String(body?.text || '').trim().slice(0, 140);
    if (!text) return send(res, 400, { error: 'empty' });
    share.cheers = [{ text, at: new Date().toISOString().slice(0, 10) }, ...(share.cheers || [])].slice(0, 20);
    await persist();
    return send(res, 201, { ok: true });
  }

  switch (req.method) {
    case 'GET':
      if (!share?.summary) return send(res, 404, { error: 'not found' });
      return send(res, 200, { summary: share.summary, cheers: share.cheers || [] });
    case 'PUT': {
      if (!authorized(req, share)) return send(res, 401, { error: 'unauthorized' });
      let body; try { body = await readJson(req); } catch { return send(res, 400, { error: 'bad request' }); }
      if (!validSummary(body)) return send(res, 422, { error: 'invalid summary' });
      share.summary = body; share.updated = new Date().toISOString();
      await persist();
      return send(res, 200, { ok: true });
    }
    case 'DELETE':
      if (!authorized(req, share)) return send(res, 401, { error: 'unauthorized' });
      delete db.shares[id];
      await persist();
      return send(res, 204, '');
    default:
      return send(res, 405, { error: 'method' });
  }
}

async function serveStatic(req, res, urlPath) {
  let rel = decodeURIComponent(urlPath);
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.normalize(path.join(PUBLIC, rel));
  if (!file.startsWith(PUBLIC)) return send(res, 403, 'Forbidden');
  try {
    const st = await fsp.stat(file);
    if (!st.isFile()) throw new Error('not file');
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { ...SECURITY_HEADERS, 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'Content-Length': st.size });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  } catch {
    send(res, 404, 'Not found', { 'Content-Type': MIME['.txt'] });
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const parts = url.pathname.split('/').filter(Boolean);
    const apiAt = parts.indexOf('api');
    if (apiAt !== -1) return await api(req, res, parts.slice(apiAt + 1));
    if (!['GET', 'HEAD'].includes(req.method)) return send(res, 405, 'Method not allowed');
    return await serveStatic(req, res, url.pathname);
  } catch (e) {
    console.error(e);
    if (!res.headersSent) send(res, 500, { error: 'server error' });
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') console.error(`\n  Port ${PORT} is already in use: the app is probably already running → http://localhost:${PORT}/\n`);
  else console.error(e);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  const lan = Object.values(os.networkInterfaces()).flat().filter((i) => i && i.family === 'IPv4' && !i.internal).map((i) => i.address);
  console.log(`\n  Ciao, Udine! is running\n`);
  console.log(`  ➜ On this computer:   http://localhost:${PORT}/`);
  lan.forEach((ip) => console.log(`  ➜ On your phone (same Wi-Fi): http://${ip}:${PORT}/`));
  console.log(`  ➜ Progress sharing API: ${SHARING ? 'on' : 'off'} (data in ${path.relative(ROOT, DB_FILE) || DB_FILE})\n`);
  if (process.env.OPEN_BROWSER) {
    const url = `http://localhost:${PORT}/`;
    const [cmd, args] = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', url]]
      : process.platform === 'darwin' ? ['open', [url]] : ['xdg-open', [url]];
    try { spawn(cmd, args, { stdio: 'ignore', detached: true }).unref(); } catch { /* open it manually */ }
  }
});
