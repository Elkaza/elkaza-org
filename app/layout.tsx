import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
import SiteInteractivity from "@/app/components/SiteInteractivity";
import PrelaunchNotice from "@/app/components/PrelaunchNotice";
import SkipLink from "@/app/components/SkipLink";
import { robotsForRoute } from "@/lib/routePolicy";
import { SITE_CONTROLS } from "@/lib/siteStatus";

export function generateMetadata() {
  const base = "https://elkaza.at";
  return {
    metadataBase: new URL(base),
    title: "Elkaza - Networking, Security & Automation",
    description:
      "Stabile IT-Infrastruktur fuer wachsende Teams: Netzwerk, Security und Automatisierung aus einer Hand.",
    icons: {
      icon: [
        { url: "/favicon.svg?v=2", type: "image/svg+xml" },
        { url: "/favicon.ico?v=2", sizes: "any" },
      ],
      apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "Elkaza",
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      siteName: "Elkaza",
      locale: "de_AT",
      type: "website",
      images: [{ url: `${base}/opengraph-image.png`, width: 1200, height: 630, alt: "Elkaza" }],
    },
    twitter: { card: "summary_large_image", images: [`${base}/opengraph-image.png`] },
    robots: robotsForRoute("/"),
  } as const;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var path = window.location.pathname || "/";
                  var isEnglish = path === "/en" || path.indexOf("/en/") === 0;
                  document.documentElement.lang = isEnglish ? "en" : "de-AT";
                  document.documentElement.setAttribute("data-locale", isEnglish ? "en" : "de");
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://elkaza.at/#website",
              url: "https://elkaza.at",
              name: "Elkaza",
              inLanguage: ["de-AT", "en"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <SkipLink />
        <Header />
        {SITE_CONTROLS.showPrelaunchUi && <PrelaunchNotice />}

        <div id="content" className="flex-1">{children}</div>

        <Footer />
        <BackToTop />
        <SiteInteractivity />
      </body>
    </html>
  );
}
