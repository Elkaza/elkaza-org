import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";
import { launchCtas } from "@/lib/launchCtas";
import { SITE_CONTROLS } from "@/lib/siteStatus";

const details = {
  de: {
    eyebrow: "Elkaza · Wien, Österreich",
    services: "Geplante Leistungen",
    scenarios: "Beispielszenarien",
    servicesHref: "/leistungen",
    scenariosHref: "/referenzen",
  },
  en: {
    eyebrow: "Elkaza · Vienna, Austria",
    services: "Planned services",
    scenarios: "Illustrative scenarios",
    servicesHref: "/en/services",
    scenariosHref: "/en/case-studies",
  },
} as const;

export default function HomeHero({ locale }: { locale: Locale }) {
  const hero = siteContent.hero[locale];
  const copy = details[locale];

  return (
    <section className="hero-gradient-enhanced py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{copy.eyebrow}</p>
          <h1 className="text-balance text-[2.25rem] font-bold leading-[1.08] tracking-[-0.025em] text-[var(--text)] sm:text-5xl lg:text-[3.5rem]">{hero.headline}</h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[var(--text-secondary)]">{hero.subheadline}</p>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3" aria-label={locale === "de" ? "Startseiten-Verweise" : "Homepage links"}>
            {(SITE_CONTROLS.commercialContent
              ? [
                  [launchCtas[locale].homepagePrimary.label, launchCtas[locale].homepagePrimary.href],
                  [launchCtas[locale].homepageSecondary.label, launchCtas[locale].homepageSecondary.href],
                ]
              : [[copy.services, copy.servicesHref], [copy.scenarios, copy.scenariosHref]]
            ).map(([label, href]) => (
              <Link key={href} href={href} className="inline-flex items-center gap-1.5 font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
                {label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
