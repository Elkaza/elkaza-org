# Analytics Setup Guide

This guide explains how to add analytics tracking to the Elkaza website while respecting user privacy.

## Recommended Analytics Solutions

### 1. **Plausible Analytics** (Recommended)
Privacy-focused, GDPR-compliant, no cookies required.

```bash
# Add to .env.local
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=elkaza.org
```

Add to `app/layout.tsx` in the `<head>`:
```tsx
{process.env.NODE_ENV === 'production' && (
  <script
    defer
    data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
    src="https://plausible.io/js/script.js"
  />
)}
```

### 2. **Google Analytics 4**
Widely used, comprehensive features.

```bash
npm install @next/third-parties
```

```bash
# Add to .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// In the component
{process.env.NEXT_PUBLIC_GA_ID && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
)}
```

### 3. **Simple Analytics**
Another privacy-focused option, EU-hosted.

Similar setup to Plausible with their script tag.

## Privacy Considerations

- ✅ **No cookies required**: Plausible and Simple Analytics don't use cookies
- ✅ **GDPR compliant**: All recommended solutions are GDPR-compliant
- ✅ **Opt-out friendly**: Easy to implement opt-out mechanisms
- ✅ **Transparent**: Consider adding analytics info to your privacy policy

## Testing Analytics

After setup, test by:
1. Opening your site in an incognito/private window
2. Navigating between pages
3. Checking your analytics dashboard for events

## Environment Variables

Add to `.env.local` (never commit this file):
```bash
# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id-here
# OR
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=elkaza.org
```

Add placeholder to `.env.example`:
```bash
# Analytics (optional)
# NEXT_PUBLIC_GA_ID=
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

## Implementation Status

⏸️ Analytics implementation is **optional** and not included by default to respect user privacy. Enable when ready for production deployment.
