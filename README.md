# Elkaza.org

Professional portfolio and project website for Mohamed Elkaza, built with Next.js. The site presents infrastructure, platform operations, automation, security, IoT, research, and selected project work.

## Features

- Multilingual content for German, English, and Arabic
- Responsive design with light and dark themes
- Project, CV, blog, research, security, and contact pages
- Security headers through the Next.js request proxy
- SEO metadata, sitemap, robots.txt, Open Graph image, and structured data

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- Lucide React
- Google Generative AI integration

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

## Project Structure

```text
elkaza-org/
|-- app/
|   |-- components/       Reusable React components
|   |-- i18n/             Translation messages
|   |-- about/            About page
|   |-- projects/         Project showcase
|   |-- blog/             Blog posts
|   |-- research/         Research and publications
|   |-- teaching/         Teaching and courses
|   |-- contact/          Contact page
|   `-- archives/         Archive page
|-- public/               Static assets
|-- scripts/              Utility scripts
`-- proxy.ts              Security headers and request proxy
```

## Internationalization

Translations are managed in `app/i18n/messages.ts`. The selected language is stored client-side and applied through `LocaleProvider`.

## Notes

- Generated build caches such as `*.tsbuildinfo` are ignored.
- Favicon assets can be regenerated with `npm run generate-favicons`.

## License

Private project. All rights reserved.

## Contact

- Website: [elkaza.org](https://elkaza.org)
- Email: contact@elkaza.org
- GitHub: [@Elkaza](https://github.com/Elkaza)
- LinkedIn: [linkedin.com/in/elkaza](https://linkedin.com/in/elkaza)
