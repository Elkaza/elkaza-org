# Elkaza.org

A professional portfolio and research website built with Next.js, featuring multi-language support (English, German, Arabic), dark mode theming, and responsive design.

## Features

- 🌐 **Multi-language Support**: Fully internationalized with EN, DE, and AR translations
- 🌙 **Dark Mode**: Persistent theme toggle with smooth transitions
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- ⚡ **Modern Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- 🎨 **Professional UI**: Clean, accessible design with Lucide icons
- 🔍 **SEO Optimized**: Proper metadata, sitemap, robots.txt, and Open Graph images

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **AI Integration**: Google Generative AI

## Getting Started

### Prerequisites

- Node.js 20+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Elkaza/elkaza-org.git
cd elkaza-org

# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env.local
```

### Development

```bash
# Start the development server on port 3001
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the site in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
elkaza-org/
├── app/
│   ├── components/       # Reusable React components
│   ├── i18n/            # Internationalization messages
│   ├── about/           # About page
│   ├── projects/        # Projects showcase
│   ├── blog/            # Blog posts
│   ├── research/        # Research & publications
│   ├── teaching/        # Teaching & courses
│   ├── contact/         # Contact information
│   └── archives/        # Archive page
├── public/              # Static assets
└── middleware.ts        # Locale routing middleware
```

## Internationalization

The site supports three languages with automatic locale detection and routing:
- **English** (`/en`)
- **German** (`/de`)
- **Arabic** (`/ar`)

Translations are managed in `app/i18n/messages.ts`.

## Dark Mode

Theme preferences are persisted using `next-themes` and can be toggled via the navbar icon. The site supports:
- Light mode
- Dark mode
- System preference

## Documentation

- `BLOG_GUIDE.md` - Guide for adding blog posts
- `DESIGN_INSPIRATION.md` - Design principles and inspiration
- `ENHANCEMENT_SUMMARY.md` - Feature enhancement history
- `FAVICON_INSTRUCTIONS.md` - Instructions for favicon setup

## License

Private project - All rights reserved

## Contact

- Website: [elkaza.org](https://elkaza.org)
- Email: contact@elkaza.org
- GitHub: [@Elkaza](https://github.com/Elkaza)
- LinkedIn: [linkedin.com/in/elkaza](https://linkedin.com/in/elkaza)
