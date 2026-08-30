import Script from "next/script";
import { Inter, Merriweather } from "next/font/google";
import LocaleProvider from "@/app/LocaleProvider";
import BackToTop from "@/app/components/BackToTop";
import SiteFooter from "@/app/components/SiteFooter";
import SubNav from "@/app/components/SubNav";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { generatePersonSchema, generateWebSiteSchema } from "@/app/lib/metadata";
import { MESSAGES } from "@/app/i18n/messages";
import type { ActiveLocale } from "@/app/lib/localizedRoutes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "elkaza.org";
const plausibleScriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC ?? "https://analytics.elkaza.at/js/script.js";
const enablePlausible = process.env.NEXT_PUBLIC_ENABLE_PLAUSIBLE !== "false";

export default function RootDocument({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: ActiveLocale;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
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
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-white text-blue-700 dark:bg-gray-900 dark:text-blue-400 border border-blue-300 rounded px-3 py-1">{MESSAGES[locale].a11y_skip_to_content}</a>
          <LocaleProvider initialLocale={locale}>
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
