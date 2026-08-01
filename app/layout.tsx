import "./globals.css";
import Script from "next/script";
import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import LocaleProvider from "@/app/LocaleProvider";
import BackToTop from "@/app/components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SubNav from "./components/SubNav";
import { generatePersonSchema, generateWebSiteSchema } from "@/app/lib/metadata";
import { profile } from "@/app/lib/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "elkaza.org";
const plausibleScriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC ?? "https://analytics.elkaza.at/js/script.js";
const enablePlausible = process.env.NEXT_PUBLIC_ENABLE_PLAUSIBLE !== "false";

export const metadata = {
  metadataBase: new URL(profile.websiteUrl),
  title: `${profile.name} | ${profile.title.en}`,
  description: profile.introduction.en,
  openGraph: {
    title: `${profile.name} | ${profile.title.en}`,
    description: profile.introduction.en,
    url: profile.websiteUrl,
    siteName: "Mohamed Elkaza Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohamed Elkaza portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title.en}`,
    description: profile.introduction.en,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${serif.variable} min-h-screen bg-page text-main transition-colors duration-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generatePersonSchema(),
              generateWebSiteSchema(),
            ]),
          }}
        />
        {process.env.NODE_ENV === "production" && enablePlausible && (
          <Script
            src={plausibleScriptSrc}
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        )}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-white text-blue-700 dark:bg-gray-900 dark:text-blue-400 border border-blue-300 rounded px-3 py-1">Skip to content</a>
          <LocaleProvider>
            <header className="sticky top-0 z-50">
              <SubNav />
            </header>
            <div id="main-content" tabIndex={-1} className="outline-none">{children}</div>
            <SiteFooter />
            <BackToTop />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
