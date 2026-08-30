# Security Guidelines

- Never commit secrets. Keep API keys in server environment variables (e.g., `.env.local`, host secrets). Do not use `NEXT_PUBLIC_…` for secrets.
- Headers:
  - Security headers and a baseline Content Security Policy are configured in `next.config.ts`.
  - When the UI stabilizes, consider tightening CSP (remove `'unsafe-inline'`) and add nonces if needed.
- Reporting:
  - If you find a vulnerability, please report it privately before public disclosure.

