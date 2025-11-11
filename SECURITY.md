# Security Guidelines

- Never commit secrets. Keep API keys in server environment variables (e.g., `.env.local`, host secrets). Do not use `NEXT_PUBLIC_*` for secrets.
- Gemini keys:
  - Server reads from `GOOGLE_API_KEY` or `GEMINI_API_KEY` only in server code (`app/api/gemini/*`).
  - Client bundles must not import server helpers.
- Headers:
  - Security headers are set in `next.config.ts`; a baseline Content Security Policy with a per-request nonce is set in `middleware.ts`.
  - When the UI stabilizes, tighten CSP (remove `'unsafe-inline'`) and rely on nonces only.
- Reporting:
  - If you find a vulnerability, please report it privately before public disclosure.

