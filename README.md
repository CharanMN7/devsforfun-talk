# devsforfun talk

Slide deck + speaker notes for the **AI Automation: From Hype to What You'll Actually Build** workshop.

## Run

```bash
pnpm install
pnpm dev
```

- `http://localhost:3000/` — present.
- `http://localhost:3000/notes` — speaker notes (open on your phone).

## Workshop-day setup

Find your laptop's local IP (`ipconfig getifaddr en0` on macOS) and open `http://<that-ip>:3000/notes` on your phone. Both devices must be on the same Wi-Fi.

## Editing content

Open `lib/slides.tsx`. Every slide's on-screen body, on-screen recap, and speaker notes live there. Both `/` and `/notes` read from the same array.

## Build

```bash
pnpm build
pnpm start
```
