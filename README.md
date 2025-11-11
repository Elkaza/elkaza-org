Elkaza.org — Digital Transformation & Research

Overview
- Next.js (App Router) site for Mohamed Elkaza’s research, projects, and teaching.
- Focus: enterprise architecture, digital innovation, IoT, and AI-driven tooling.
- Tech: Next.js 16, React 19, Tailwind CSS v4, lucide-react icons.

Getting Started
- Install deps: `npm install`
- Dev server: `npm run dev` (default port 3001)
- Build: `npm run build`
- Start (prod): `npm run start` (port 3001)

Internationalization
- Lightweight client i18n with `LocaleProvider` and `app/i18n/messages.ts`.
- Languages: DE, EN, AR (RTL toggled via `dir=rtl`).
- Switch via header language buttons; preference saved to `localStorage`.

Search & Navigation
- Archives: `/archives` provides quick filtering by year and tags.
- Keyboard shortcut: `/` or `Ctrl/Cmd + K` opens Archives.
- Mobile: hamburger menu shows primary nav links.

AI (Gemini) Integration
- Endpoint: `POST /api/gemini` (rate-limited, in-memory per-IP).
- Server config reads `GOOGLE_API_KEY` or `GEMINI_API_KEY` from env.
- Sample env file: `.env.example`. For local dev, create `.env.local` and set `GOOGLE_API_KEY=...`.

Security
- HTTP headers in `next.config.ts` (frame/ct options, HSTS, referrer policy).
- CSP with per-request nonce set in `middleware.ts`.
- Do not expose secrets to the client. Never commit real keys.

Deploy
- Standard Next.js deployment (e.g., Vercel). Ensure environment variables are configured in the host.
- If running serverless, consider a durable rate limit store for `/api/gemini`.

Project Structure
- `app/` — routes and UI
  - `components/` — shared UI (navigation, search, etc.)
  - `api/gemini/` — server helpers for Gemini
  - `i18n/` — translations
- `public/` — static assets

Contributing
- Run `npm run lint` before PRs.
- Please open issues for bugs or suggestions.

