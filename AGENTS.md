# devsforfun talk — workshop slide deck

A two-page Next.js 16 site for delivering a 90-minute AI-automation workshop:

- `/` — full-screen presentation deck (audience-facing, projector-friendly).
- `/notes` — long mobile-friendly speaker notes, opened separately on the speaker's phone.

## Editing slides

All slide content (on-screen body + speaker notes + on-screen text recap) lives in `lib/slides.tsx`. Both routes read from the same array. To add or rewrite a slide, edit that file — nothing else.

Each slide has:

- `number` — display number (1–N).
- `segment` — section heading shown in the deck top-line and the notes section break.
- `title` — used in the notes nav and on `/notes` cards.
- `onScreen` — JSX rendered at `/`.
- `onScreenText` — plain bullets used in the `On screen` recap on `/notes` (so the speaker can glance at what's behind them without flipping back to the projector).
- `notes` — paragraphs separated by blank lines.

## Deck controls

- `→` / `Space` / `PageDown`: next slide.
- `←` / `PageUp`: previous slide.
- `Home` / `End`: first / last slide.
- Number keys (e.g. `12`): jump to slide N (buffers digits for ~750ms).
- Click left third → previous; click right two-thirds → next.
- URL hash `#1`…`#33` mirrors the current slide; refresh keeps position.
- Bottom-right `Notes →` opens `/notes#slide-N` in a new tab.

## Next.js 16 reminders

This is Next 16 — read `node_modules/next/dist/docs/` before introducing new APIs. `cookies()` is async; middleware lives in `proxy.ts`. None of those apply here yet (purely static pages), but keep them in mind if this app grows.
