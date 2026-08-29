import CoreServices from "@/app/components/CoreServices";
import { siteContent, type Locale } from "@/lib/siteContent";

const copy = {
  de: {
    title: "Drei geplante Leistungsbereiche",
    lead: "Der vorgesehene Einstieg ist ein klar begrenztes IT & Security Baseline Assessment. Darauf können ein Infrastruktur-Review oder ein kleiner Automatisierungs- und Dokumentations-Sprint folgen.",
    progression: "Assessieren → stabilisieren → dokumentieren oder automatisieren",
    primary: "Geplanter Startumfang",
    boundary: "Assessment und Umsetzung bleiben getrennt. Laufender Betrieb, Managed Support, rechtliche Compliance-Beratung und garantierte Reaktionszeiten gehören nicht zum Startumfang.",
    status: "Derzeit werden keine Dienstleistungen angeboten und keine Aufträge angenommen.",
  },
  en: {
    title: "Three planned service areas",
    lead: "The intended starting point is a clearly bounded IT & Security Baseline Assessment. An Infrastructure Review or a small Automation & Documentation Sprint may follow from its findings.",
    progression: "Assess → stabilize → document or automate",
    primary: "Planned initial scope",
    boundary: "Assessment and implementation remain separate. Ongoing operations, managed support, legal compliance advice, and guaranteed response times are outside the initial scope.",
    status: "No services are currently offered and no orders are accepted.",
  },
} as const;

export default function ServicesOverview({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <main>
      <section className="hero-gradient-enhanced py-16 md:py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <h1 className="max-w-3xl text-[2.125rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-[70ch] text-lg leading-relaxed text-[var(--text-secondary)]">{c.lead}</p>
          <p className="mt-5 font-semibold text-[var(--primary)]">{c.progression}</p>
          <div className="mt-6 flex items-start gap-2 text-sm text-[var(--status-text)]"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true"/><span>{c.status}</span></div>
        </div>
      </section>
      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">{c.primary}</h2>
          <p className="mb-9 mt-4 max-w-[75ch] text-[var(--text-secondary)]">{c.boundary}</p>
          <CoreServices locale={locale} items={siteContent.services[locale].items} />
        </div>
      </section>
    </main>
  );
}
