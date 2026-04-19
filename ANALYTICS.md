# Analytics Setup

The site uses a privacy-first, self-hosted Plausible Analytics setup in production.

## Current Implementation

Production builds load the Plausible script from the owner-controlled analytics host:

```tsx
NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC=https://analytics.elkaza.at/js/script.js
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=elkaza.org
```

The loader is defined in `app/layout.tsx` and can be disabled with:

```bash
NEXT_PUBLIC_ENABLE_PLAUSIBLE=false
```

## Privacy Position

- Plausible is self-hosted rather than supplied by a third-party advertising tracker.
- The setup is cookie-free and intended for aggregate page-view measurement.
- The tracking script is served through an owner-controlled analytics endpoint.
- The privacy policy documents this analytics use transparently.

## Security Notes

The Content Security Policy allows the analytics script and event endpoint at:

```bash
https://analytics.elkaza.at
```

If the analytics host changes, update both `next.config.ts` and `proxy.ts`.
