# Elkaza.org

Professional portfolio and project website for Mohamed Elkaza, built with Next.js. The site presents infrastructure, platform operations, automation, security, IoT, research, and selected project work.

## Features

- German and English server-rendered routes
- Static generation for portfolio and project pages
- Localized SEO metadata, canonicals, hreflang links, sitemap, and robots.txt
- Project and case-study pages for infrastructure, automation, IoT, Edge AI, and data work
- Responsive design with light and dark themes
- Security headers through the Next.js request proxy
- Production verification for deployed revision, route pairs, redirects, sitemap, robots.txt, and internal links

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- Lucide React

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Elkaza/elkaza-org.git
cd elkaza-org
npm install
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open `http://localhost:3001`.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

### Production Verification

```bash
npm run verify:production
```

This checks the live portfolio pages, `robots.txt`, and `sitemap.xml` for expected public content. It also catches accidental returns of hidden sections such as the old start section or PDF download wording.

## Project Structure

```text
elkaza-org/
|-- app/
|   |-- (de)/             German canonical routes
|   |-- en/               English SSR routes
|   |-- api/              API endpoints
|   |-- components/       Shared UI and content components
|   |-- i18n/             Translation messages
|   `-- lib/              Profile, metadata, SEO, and localized-route helpers
|-- docs/                 Supporting documentation
|-- public/               Static project assets, images, icons, and diagrams
|-- scripts/              Production verification and utility scripts
`-- proxy.ts              Request handling and security headers
```

## Internationalization

- German is server-rendered on the canonical unprefixed routes.
- English is server-rendered under `/en`.
- The URL determines the SSR locale.
- German and English pages expose localized metadata, self-referencing canonicals, and reciprocal hreflang links.
- The language switcher navigates to the equivalent localized route.

## Notes

- Generated build caches such as `*.tsbuildinfo` are ignored.
- Favicon assets can be regenerated with `npm run generate-favicons`.

## License

Source available for portfolio review. All rights reserved.

## Contact

- Website: [elkaza.org](https://www.elkaza.org)
- Email: contact@elkaza.org
- GitHub: [@Elkaza](https://github.com/Elkaza)
- LinkedIn: [linkedin.com/in/elkaza](https://www.linkedin.com/in/elkaza)
