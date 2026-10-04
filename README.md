# Ciao, Udine!

A warm, mobile-first Italian course for a French- and Egyptian-Arabic-speaking beginner who is moving to Udine in about a year. Every lesson prepares her for a real situation she'll meet there: the neighbour on the stairs, the café in Piazza della Libertà, the train to Trieste, the landlord, the pharmacy, the town hall, dinner with friends.

- **12 stages over 12 months**, grouped into 4 milestones (A1− → towards A2). The plan spreads itself up to her move date and adjusts gently if she goes slower. There is no streak pressure.
- **51 sessions**: 39 short lessons and 12 interactive dialogue scenes, with about 630 words and phrases in Italian, French and Egyptian Arabic, plus a survival phrasebook.
- **Varied practice**: discovery with audio, multiple choice, listening, matching, sentence building and typed recall. Wrong answers come back at the end of the lesson.
- **Friendly corrections** that explain the specific slip: accents (*è* vs *e*), missing article, double consonants, the silent *h* in *ho*, French-speaker spellings like *ou → u*, word order and missing words.
- **Spaced repetition**: a review queue that brings words back just as they start to fade.
- **Dialogue scenes** with branching replies and a coach that explains why an answer doesn't fit. Translations are hidden until she asks for them.
- **French or Egyptian Arabic support**, with full right-to-left layout. Italian always stays left-to-right, even inside Arabic text.
- **Partner view**: a calm summary she chooses to share, with no answers, location or timestamps.
- **Works offline** and can be installed as a PWA.

## Built from what users dislike in other apps

[`docs/user-research.md`](docs/user-research.md) collects the most common complaints about Duolingo, Babbel, Busuu, Memrise, Anki and others, and maps each one to a fix:

- **No guilt:** no streaks, energy or ads; a warm *Bentornata* after a break; an optional calendar reminder at the time she chooses.
- **No review piles:** a daily review cap (her daily goal × 2), and the backlog waits without penalty. The app suggests "review first" when the pile is big.
- **Fair grading:** accents, articles, typos and optional subject pronouns are accepted. An **"I was right"** button lets her overrule the app, and a **Report** button flags any doubtful sentence for her partner.
- **Speaking:** private shadowing in every lesson (listen → record → compare); the recording stays on the phone. There's a "natural speed" voice and the best available Italian voices.
- **Real life:** a **survival phrasebook** from day 1 with a big "show this to the person" mode, and a **real-life mission** for each stage.
- **Her languages:** a *Sons difficiles* lesson with minimal pairs (p/b, v/f, double consonants) and a *Faux amis* lesson for French speakers.
- **Trust:** interrupted lessons resume where she left them; an iPhone "add to home screen" warning (Safari can wipe a website's data after 7 days without use); backups shared in one tap.

## WhatsApp with her partner

She can contact her partner from the app in one tap, using official `wa.me` links. There's no API, no server and no key; WhatsApp opens with the message already written, and she only presses *Send*:

- **Celebrate** at the end of every lesson or scene, with a stronger message for a completed stage or milestone.
- **Ask a question** from any correction ("Demander à…"), with the word and her answer filled in, or from the word list.
- **Share her progress** from the ♡ page.
- **Tell him** when she reaches her daily goal.

Messages are written in simple Italian, so each one is a little practice.

**The partner's number is never in the code** (the repository is public). She can type it in during onboarding or in Settings, or the partner can send her an **invite link**:

```
https://yihab778.github.io/Ciao-Udine/#/invite?name=Youssef&wa=%2B39XXXXXXXXXX
```

(`%2B` is the `+`; put the full number with country code.) Opening the link saves the name and number on her phone only.

## Start it

Requirements: [Node.js](https://nodejs.org) 18 or newer. There are no packages to install.

```bash
cd ciao-udine
npm start            # or: node server.js
```

On Windows you can also double-click **`start.cmd`**.

Then open **http://localhost:5173/**. The terminal also prints a `http://192.168.x.x:5173/` address that you can open on a phone on the same Wi-Fi.

Run the checks (they validate the content, the exercise generator, the answer checker and the scheduler):

```bash
npm test
```

## Publishing with GitHub Pages

The repo includes `.github/workflows/pages.yml`, which runs the tests and publishes `public/` on every push to `main`.

1. Create a repository on GitHub and push this folder to it.
2. In the repo, open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the action runs, the app is live at `https://<user>.github.io/<repo>/`.

## Using it on her phone (recommended setup)

The app is a static PWA in `public/` plus a small optional server. Two good options:

1. **Static hosting (simplest, free).** Upload the `public/` folder to Netlify Drop, Cloudflare Pages or GitHub Pages. Open the URL on her phone and choose *Add to Home Screen*. Everything works, and sharing uses snapshot links (see below).
2. **Node hosting (adds live sharing).** Deploy the whole folder (`server.js` + `public/`) to any Node host with a small persistent disk, such as Render, Railway, Fly.io or a home server. Set `DATA_DIR` to the persistent volume. HTTPS from the host is required for installation and service workers.

Progress is stored in the browser on her device (`localStorage`). *Settings → Export* makes a JSON backup, and *Import* restores it on a new phone.

## Sharing progress with her partner

Sharing is **off by default**, and she turns it on in the ♡ menu, where she sees a live preview of exactly what will be shared.

- **Shared:** lessons and milestones completed, minutes per day (no clock times), the number of words learned and, optionally, practise-together ideas (the current dialogue scene and the words she finds tricky).
- **Never shared:** answers, detailed mistakes, location, exact study times.

Two modes, chosen automatically:

| Mode | When | How it works |
|---|---|---|
| **Snapshot link** | Any hosting, no server | “Send an update” creates a link whose `#fragment` contains the summary. She sends it by WhatsApp. The data never touches a server, because URL fragments are not sent over the network. |
| **Live sync** | App served by `server.js` | She taps “Enable live sync”. Her device gets a random 256-bit write token, and he gets a permanent read-only link that always shows the latest summary. He can also send short encouragements that appear on her *Today* screen. Turning sharing off deletes the server copy. |

The live-sync server stores only summaries, in `data/shares.json`. It keeps only a SHA-256 hash of each write token, validates and size-limits every payload, rate-limits public endpoints and sends strict security headers (CSP, no referrer). **There are no secrets in the client code.** To use proper accounts later (for example Supabase or Firebase), replace the small `live` object in `public/js/share.js`; the rest of the app does not change.

Environment variables: `PORT` (5173), `HOST` (0.0.0.0), `SHARING` (`on`/`off`), `DATA_DIR` (`./data`).

The partner view with clearly labelled demo data is at `#/demo-partner`.

## Audio

Italian audio uses the browser's built-in speech synthesis, so there is no API key and no cost. Most phones include an Italian voice. If a device has none, the app says so and swaps listening exercises for reading ones. On Android, *Settings → Text-to-speech* lets you install the Italian voice.

## Customising

- **App name:** `public/js/config.js` (`APP.name`), `public/manifest.webmanifest` and `<title>` in `public/index.html`.
- **Default partner name:** `freshState()` in `public/js/store.js`. She can also change it during onboarding or in Settings.
- **Content:** `public/js/content/units-a.js`, `units-b.js` and `units-c.js`. Each lesson is plain data: `words` and `phrases` as `[italian, french, arabic, pronunciationHint?]`, short `note` paragraphs (`*word*` marks an Italian example), optional `compare` and `culture` asides. Scenes are `turns` with options `{ t: [it, fr, ar], ok, fb, reply }`. `{name}` and `{partner}` are filled in from the profile. Exercises are generated from this data, and `npm test` checks every lesson after you edit.
- **Colours and type:** the tokens at the top of `public/css/app.css` (inspired by the striped Loggia del Lionello, Tiepolo's ochre and blue, the Friulian hills).

## Project structure

```
server.js              zero-dependency static server + optional sharing API
public/
  index.html, sw.js, manifest.webmanifest, icons/
  css/app.css          design system (light + dark)
  js/main.js           shell, router, app context
  js/content/          the 12-month curriculum (IT / FR / AR)
  js/engine.js         builds exercises from lesson data
  js/grade.js          answer checking + friendly explanations
  js/srs.js            spaced repetition
  js/plan.js           adjustable 12-month plan
  js/share.js          privacy-preserving summary + live sync client
  js/views/            onboarding, today, path, lesson runner, scenes, review, words, progress, share, partner, settings
tests/                 node:test suites
```

## Notes and limits

- Fonts (Fraunces, Nunito, Cairo) load from Google Fonts. Offline, or before the first load, the app falls back to system fonts.
- Arabic is complete for the interface, every word and phrase, the notes, the dialogue choices and the coach feedback.
- The content is written to be accurate and natural, but a quick read-through by a native Italian speaker (and an Egyptian one for the Arabic) is always worthwhile.
