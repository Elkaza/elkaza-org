import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import SubNav from "./components/SubNav";
import LocaleProvider from "./LocaleProvider";
import Search from "./components/Search";

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
      <body className={`${inter.variable} ${serif.variable} bg-white`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-white text-blue-700 dark:bg-gray-900 dark:text-blue-400 border border-blue-300 rounded px-3 py-1">Skip to content</a>
        <LocaleProvider>
          <header className="sticky top-0 z-50 bg-white">
            <SubNav />
          </header>
          <main id="main">{children}</main>
          <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-10 text-center">
              <div className="flex justify-center">
                <Search variant="cta" />
              </div>
              <div className="mt-6 text-xs text-gray-500">
                (c) {new Date().getFullYear()} Elkaza. Built with Next.js & TailwindCSS.
              </div>
            </div>
          </footer>
        </LocaleProvider>
      </body>
    </html>
  );
}
