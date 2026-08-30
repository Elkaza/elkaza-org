import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";
import NotFoundContent from "@/app/components/NotFoundContent";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import ThemeToggle from "@/app/components/ThemeToggle";
import { profile } from "@/app/lib/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.websiteUrl),
  title: "Page not found / Seite nicht gefunden | Mohamed Elkaza",
  description: "The requested page could not be found. Die angeforderte Seite wurde nicht gefunden.",
  robots: {
    index: false,
    follow: true,
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

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${serif.variable} min-h-screen bg-page text-main transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a
            href="#not-found-page"
            className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] rounded border border-blue-300 bg-white px-3 py-1 text-blue-700 dark:bg-gray-900 dark:text-blue-400"
          >
            Skip to content
          </a>
          <header className="border-b border-subtle bg-page">
            <nav aria-label="Site navigation" className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
              <Link href="/en" className="flex min-w-0 items-center gap-2 text-lg font-bold text-main sm:text-xl">
                <Image src="/logo.png" alt="ME Logo" width={36} height={36} className="h-9 w-9" priority />
                <span className="hidden min-w-0 truncate sm:inline">Mohamed Elkaza</span>
              </Link>
              <ThemeToggle />
            </nav>
          </header>
          <NotFoundContent />
          <footer className="border-t border-subtle bg-page py-6 text-center text-xs font-medium text-muted">
            &copy; 2025-{new Date().getFullYear()} Elkaza
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
