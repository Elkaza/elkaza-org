import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import SubNav from "./components/SubNav";
import LocaleProvider from "./LocaleProvider";
//
import SiteFooter from "./components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Merriweather({ subsets: ["latin"], weight: ["300","400","700"], variable: "--font-serif" });

export const metadata = {
  metadataBase: new URL("https://elkaza.org"),
  title: "Elkaza | Digital Transformation & Research",
  description: "Bridging enterprise architecture, digital innovation, and AI-driven transformation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved or preferred theme before paint to avoid flashes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem('theme');var mq=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)');var dark=(s==='dark')||(s==null&&mq&&mq.matches);if(dark){document.documentElement.classList.add('dark');document.body&&document.body.classList.add('dark');}}catch(e){}`,
          }}
        />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} ${serif.variable}`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-white text-blue-700 dark:bg-gray-900 dark:text-blue-400 border border-blue-300 rounded px-3 py-1">Skip to content</a>
        <LocaleProvider>
          <header className="sticky top-0 z-50 bg-[var(--bg)]">
            <SubNav />
          </header>
          <main id="main">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
