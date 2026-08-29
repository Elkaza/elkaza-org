"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CTA from "@/app/components/CTA";

export default function NotFoundContent() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const copy = isEnglish
    ? {
        title: "Page not found",
        description: "The page you are looking for does not exist or may have moved.",
        home: "Back to homepage",
        services: "View concepts",
        helpful: "Helpful links:",
        links: [["/en/contact", "Contact"], ["/en/case-studies", "Scenarios"], ["/en/about", "About"]],
      }
    : {
        title: "Seite nicht gefunden",
        description: "Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.",
        home: "Zur Startseite",
        services: "Konzepte ansehen",
        helpful: "Hilfreiche Links:",
        links: [["/kontakt", "Kontakt"], ["/referenzen", "Szenarien"], ["/ueber-uns", "Über uns"]],
      };

  return (
    <main>
      <section className="hero-gradient-enhanced flex min-h-[60vh] items-center py-20 md:py-28">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <div className="mb-6 text-7xl font-bold text-[var(--primary)] opacity-20 md:text-9xl" aria-hidden="true">404</div>
          <h1 className="mb-4 text-3xl font-bold text-[var(--text)] md:text-4xl">{copy.title}</h1>
          <p className="mx-auto mb-8 max-w-md text-lg text-[var(--text-secondary)]">{copy.description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTA href={isEnglish ? "/en" : "/"}>{copy.home}</CTA>
            <CTA href={isEnglish ? "/en/services" : "/leistungen"} variant="secondary">{copy.services}</CTA>
          </div>
          <div className="mt-12 border-t border-[var(--border)] pt-8">
            <p className="mb-4 text-sm text-[var(--muted)]">{copy.helpful}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {copy.links.map(([href, label]) => (
                <Link key={href} href={href} className="text-[var(--primary)] hover:underline">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
