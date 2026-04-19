import "./globals.css";
import Script from "next/script";
import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import LocaleProvider from "@/app/LocaleProvider";
import BackToTop from "@/app/components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SubNav from "./components/SubNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "elkaza.org";
const plausibleScriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC ?? "https://analytics.elkaza.at/js/script.js";
const enablePlausible = process.env.NEXT_PUBLIC_ENABLE_PLAUSIBLE !== "false";

export const metadata = {
  metadataBase: new URL("https://elkaza.org"),
  title: "Mohamed Elkaza | IT Infrastructure, Application & Automation Engineer",
  description: "Portfolio of Mohamed Elkaza covering IT operations, systems administration, application engineering, software automation, cybersecurity-minded infrastructure, technical delivery, business analysis, and IoT systems work.",
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
              jobTitle: "IT Infrastructure, Application & Automation Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vienna",
                addressCountry: "Austria"
              },
              knowsAbout: [
                "IT Operations",
                "System Administration",
                "Network Engineering",
                "Windows Server",
                "Linux",
                "Hybrid Cloud",
                "Systems Administration",
                "Application Engineering",
                "Business Analysis",
                "Technical Project Delivery",
                "Owner-Controlled Infrastructure",
                "Privacy-First Analytics",
                "Zero-Trust Networking",
                "Tailscale",
                "Proxmox VE",
                "Docker",
                "Nginx Proxy Manager",
                "Plausible Analytics",
                "CI/CD",
                "Automation",
                "ITSM",
                "Project Management",
                "IoT Systems"
              ]
            }),
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
