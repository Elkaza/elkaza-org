import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Network, ShieldCheck, Workflow } from "lucide-react";
import FAQ from "@/app/components/FAQ";
import HomeHero from "@/app/components/HomeHero";
import { CurrentResearch } from "@/app/components/ThesisResearch";
import { siteContent, type Locale } from "@/lib/siteContent";
import { launchCtas } from "@/lib/launchCtas";
import { SITE_CONTROLS } from "@/lib/siteStatus";

const copy = {
  de: {
    problemsTitle: "Drei typische Ausgangslagen in kleinen Unternehmen",
    problems: [
      ["Unklare Zugänge", "Administrationsrechte, MFA und externe Zugänge sind nicht einheitlich dokumentiert."],
      ["Ungeprüfte Wiederherstellung", "Backups bestehen, aber Restore-Abläufe und Zuständigkeiten sind unklar."],
      ["Gewachsene Abläufe", "Wiederkehrende Aufgaben und Systemänderungen hängen von Einzelwissen ab."],
    ],
    areasTitle: "Drei geplante Leistungsbereiche",
    areasLead: "Der geplante Einstieg ist das Baseline Assessment: zuerst assessieren, dann gezielt stabilisieren, dokumentieren oder automatisieren. Ein Angebot besteht noch nicht.",
    areas: [
      ["IT & Security Baseline Assessment", "Ist-Stand, MFA und Zugänge, Backup-/Restore-Bereitschaft, Updates, Abhängigkeiten, Roadmap und Dokumentation.", ShieldCheck, "/leistungen/security-baseline"],
      ["Infrastruktur & Zugänge Review", "Bestehende Topologie, Remote- und Admin-Zugänge, Segmentierung, Firewall-Regeln und Dokumentation.", Network, "/leistungen/networking"],
      ["Automatisierung & Dokumentation Sprint", "Ein begrenzter Workflow mit Ansible, Linux, Docker oder kleinen Python-/Bash-Skripten und einem klaren Runbook.", Workflow, "/leistungen/automation"],
    ],
    areaLink: "Konzept ansehen",
    processEyebrow: "Geplanter Ablauf",
    processTitle: "So könnte ein Assessment später ablaufen",
    finalStepTitle: "Spätere Umsetzung",
    finalStepText: "Umsetzung erst nach kommerzieller Aktivierung und auf Basis eines klaren Umfangs.",
    founderTitle: "Mohamed Elkaza",
    founderRole: "Founder / Technical Lead",
    founderText: "Mohamed Elkaza entwickelt Elkaza in Wien. Sein technischer Schwerpunkt liegt auf IT-Infrastruktur, Netzwerken und Automatisierung.",
    location: "Wien, Österreich",
    portfolio: "Technisches Portfolio",
    scenariosEyebrow: "Keine Kundenreferenzen",
    scenariosTitle: "Beispielszenarien",
    scenariosLead: "Fiktive Situationen, mögliche Ansätze und Zielbilder. Keine Kundenreferenzen.",
    labels: ["Situation", "Möglicher Ansatz", "Zielbild"],
    allScenarios: "Alle Beispielszenarien",
    statusTitle: "Projekt in Vorbereitung",
    statusText: "Elkaza nimmt derzeit keine Anfragen oder Aufträge an. Ein geschäftlicher Kontaktkanal wird erst vor einer möglichen kommerziellen Aktivierung eingerichtet.",
    statusLink: "Projektstatus ansehen",
  },
  en: {
    problemsTitle: "Three common starting points in small businesses",
    problems: [
      ["Unclear access", "Administrative privileges, MFA, and external access are not documented consistently."],
      ["Unverified recovery", "Backups exist, but restore procedures and ownership are unclear."],
      ["Processes built around individuals", "Recurring tasks and system changes depend on knowledge held by one person."],
    ],
    areasTitle: "Three planned service areas",
    areasLead: "The planned starting point is the Baseline Assessment: assess first, then stabilize, document, or automate a defined scope. No offer is currently available.",
    areas: [
      ["IT & Security Baseline Assessment", "Current state, MFA and access, backup/restore readiness, updates, dependencies, roadmap, and documentation.", ShieldCheck, "/en/services/security-baseline"],
      ["Infrastructure & Access Review", "Existing topology, remote and administrative access, segmentation, firewall rules, and documentation.", Network, "/en/services/networking"],
      ["Automation & Documentation Sprint", "One bounded workflow using Ansible, Linux, Docker, or small Python/Bash scripts with a clear runbook.", Workflow, "/en/services/automation"],
    ],
    areaLink: "View concept",
    processEyebrow: "Planned workflow",
    processTitle: "How a future assessment could work",
    finalStepTitle: "Later implementation",
    finalStepText: "Implementation only after commercial activation and with a clearly defined scope.",
    founderTitle: "Mohamed Elkaza",
    founderRole: "Founder / Technical Lead",
    founderText: "Mohamed Elkaza is developing Elkaza in Vienna, with a technical focus on IT infrastructure, networking, and automation.",
    location: "Vienna, Austria",
    portfolio: "Technical portfolio",
    scenariosEyebrow: "Not customer references",
    scenariosTitle: "Illustrative scenarios",
    scenariosLead: "Fictional situations, possible approaches, and target states. Not customer references.",
    labels: ["Situation", "Possible approach", "Target state"],
    allScenarios: "All illustrative scenarios",
    statusTitle: "Project in preparation",
    statusText: "Elkaza is not currently accepting inquiries or orders. A business contact channel will only be activated before a possible commercial launch.",
    statusLink: "View project status",
  },
} as const;

export default function ProfessionalHome({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const process = siteContent.process[locale];
  const scenarios = siteContent.caseStudies[locale].items.slice(0, 2);
  const base = locale === "de" ? "/referenzen" : "/en/case-studies";
  const statusHref = locale === "de" ? "/kontakt" : "/en/contact";

  return (
    <main>
      <HomeHero locale={locale} />

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--text)]">{c.problemsTitle}</h2>
          <div className="mt-9 grid border-t border-[var(--border)] md:grid-cols-3">
            {c.problems.map(([title, text], index) => (
              <article key={title} className={`py-6 md:px-7 ${index > 0 ? "border-t border-[var(--border)] md:border-l md:border-t-0" : "md:pl-0"}`}>
                <p className="text-xs font-semibold tabular-nums text-[var(--primary)]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{title}</h3>
                <p className="mt-2 max-w-[38ch] leading-relaxed text-[var(--text-secondary)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16 md:py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">{c.areasTitle}</h2>
          <p className="mt-4 max-w-[65ch] text-[var(--text-secondary)]">{c.areasLead}</p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {c.areas.map(([title, text, Icon, href]) => (
              <Link key={title} href={href} className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]">
                <Icon className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold leading-snug text-[var(--text)]">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--text-secondary)]">{text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">{c.areaLink}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CurrentResearch locale={locale} />

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{c.processEyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)]">{c.processTitle}</h2>
          <ol className="mt-10 grid border-t border-[var(--border)] md:grid-cols-4">
            {process.map((step, index) => (
              <li key={step.step} className={`relative py-6 md:px-6 ${index > 0 ? "border-t border-[var(--border)] md:border-l md:border-t-0" : "md:pl-0"}`}>
                <span className="text-sm font-semibold tabular-nums text-[var(--primary)]">0{step.step}</span>
                <h3 className="mt-3 font-semibold text-[var(--text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.desc}</p>
              </li>
            ))}
            <li className="border-t border-[var(--border)] py-6 md:border-l md:border-t-0 md:px-6">
              <span className="text-sm font-semibold tabular-nums text-[var(--primary)]">04</span>
              <h3 className="mt-3 font-semibold text-[var(--text)]">{c.finalStepTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{c.finalStepText}</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-16 md:py-24">
        <div className="mx-auto grid max-w-[960px] gap-8 px-6 sm:grid-cols-[180px_1fr] sm:items-center md:gap-12">
          <Image src="/images/mohamed-elkaza.jpg" alt="Mohamed Elkaza" width={768} height={1024} priority sizes="(max-width: 639px) 160px, 180px" className="aspect-[3/4] w-40 rounded-xl object-cover object-top sm:w-[180px]" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">{c.founderTitle}</h2>
            <p className="mt-1 font-medium text-[var(--text-secondary)]">{c.founderRole}</p>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-[var(--text-secondary)]">{c.founderText}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPin className="h-4 w-4" aria-hidden="true" />{c.location}</p>
            <a className="mt-4 inline-flex items-center gap-1.5 font-semibold text-[var(--primary)]" href="https://elkaza.org">{c.portfolio}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{c.scenariosEyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)]">{c.scenariosTitle}</h2>
          <p className="mt-3 text-[var(--text-secondary)]">{c.scenariosLead}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {scenarios.map((item) => (
              <Link key={item.slug} href={`${base}/${item.slug}`} className="group rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-colors hover:border-[var(--border-hover)]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{locale === "de" ? "Beispielszenario" : "Illustrative scenario"}</p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                {[[c.labels[0], item.problem], [c.labels[1], item.approach], [c.labels[2], item.result]].map(([label, text]) => (
                  <div key={label} className="mt-4 grid gap-1 text-sm leading-relaxed sm:grid-cols-[120px_1fr]">
                    <strong className="text-[var(--text)]">{label}</strong><span className="text-[var(--text-secondary)]">{text}</span>
                  </div>
                ))}
              </Link>
            ))}
          </div>
          <Link href={base} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[var(--primary)]">{c.allScenarios}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      {SITE_CONTROLS.showPrelaunchUi ? <section className="border-y border-[var(--status-border)] bg-[var(--status-bg)] py-12">
        <div className="mx-auto flex max-w-[960px] flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" /><h2 className="text-xl font-semibold text-[var(--status-text)]">{c.statusTitle}</h2></div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--status-muted)]">{c.statusText}</p>
          </div>
          <Link href={statusHref} className="shrink-0 font-semibold text-[var(--primary)]">{c.statusLink} →</Link>
        </div>
      </section> : <section className="border-y border-[var(--border)] bg-[var(--surface)] py-12">
        <div className="mx-auto flex max-w-[960px] flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-[var(--text)]">{launchCtas[locale].homepagePrimary.label}</h2>
          </div>
          <Link href={launchCtas[locale].homepagePrimary.href} className="shrink-0 font-semibold text-[var(--primary)]">
            {launchCtas[locale].navigation.label} →
          </Link>
        </div>
      </section>}

      <FAQ items={siteContent.faqs[locale].items.slice(0, 4)} locale={locale} />
    </main>
  );
}
