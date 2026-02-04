import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import LocaleProvider from "@/app/LocaleProvider";
import BackToTop from "@/app/components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SubNav from "./components/SubNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });

export const metadata = {
  metadataBase: new URL("https://elkaza.org"),
  title: "Mohamed Elkaza | Digital Transformation & Research",
  description: "Bridging enterprise architecture, digital innovation, and AI-driven transformation.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${serif.variable} min-h-screen bg-page text-main transition-colors duration-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Elkaza",
              url: "https://elkaza.org",
              sameAs: [
                "https://www.linkedin.com/in/elkaza",
                "https://github.com/Elkaza"
              ],
              jobTitle: "IT Infrastructure & Platform Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vienna",
                addressCountry: "Austria"
              },
              knowsAbout: ["Cybersecurity", "Network Engineering", "Project Management", "IoT", "Digital Transformation"]
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-white text-blue-700 dark:bg-gray-900 dark:text-blue-400 border border-blue-300 rounded px-3 py-1">Skip to content</a>
          <LocaleProvider>
            <header className="sticky top-0 z-50">
              <SubNav />
            </header>
            <main id="main">{children}</main>
            <SiteFooter />
            <BackToTop />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
