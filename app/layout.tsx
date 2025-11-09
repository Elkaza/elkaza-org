import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import SubNav from "./components/SubNav";
import LocaleProvider from "./LocaleProvider";

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
          <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
            (c) {new Date().getFullYear()} Elkaza. Built with Next.js & TailwindCSS.
          </footer>
        </LocaleProvider>
      </body>
    </html>
  );
}
