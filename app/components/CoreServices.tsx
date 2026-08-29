import Link from "next/link";
import { ArrowRight, Network, ShieldCheck, Workflow } from "lucide-react";
import type { Locale } from "@/lib/siteContent";

type ServiceItem = {
  slug: string;
  title: string;
  shortDescription?: string;
  [key: string]: unknown;
};

interface CoreServicesProps {
  locale: Locale;
  items: ServiceItem[];
  basePath?: string;
}

const CORE_SERVICES = ["security-baseline", "networking", "automation"];

const servicePresentation = {
  de: {
    "security-baseline": {
      title: "IT & Security Baseline Assessment",
      scopes: ["Ist-Stand und Prioritäten", "MFA und administrative Zugänge", "Backup-/Restore-Bereitschaft", "Abhängigkeiten und Dokumentation"],
      Icon: ShieldCheck,
    },
    networking: {
      title: "Infrastruktur & Zugänge Review",
      scopes: ["Bestehende Topologie", "Remote- und Admin-Zugänge", "Segmentierung und Firewall-Regeln", "Risiken und Dokumentation"],
      Icon: Network,
    },
    automation: {
      title: "Automatisierung & Dokumentation Sprint",
      scopes: ["Ein begrenzter Workflow", "Ansible, Linux und Docker", "Python, Bash und SQL, wo relevant", "Runbook und Übergabe"],
      Icon: Workflow,
    },
  },
  en: {
    "security-baseline": {
      title: "IT & Security Baseline Assessment",
      scopes: ["Current state and priorities", "MFA and administrative access", "Backup/restore readiness", "Dependencies and documentation"],
      Icon: ShieldCheck,
    },
    networking: {
      title: "Infrastructure & Access Review",
      scopes: ["Existing topology", "Remote and administrative access", "Segmentation and firewall rules", "Risks and documentation"],
      Icon: Network,
    },
    automation: {
      title: "Automation & Documentation Sprint",
      scopes: ["One bounded workflow", "Ansible, Linux, and Docker", "Python, Bash, and SQL where relevant", "Runbook and handover"],
      Icon: Workflow,
    },
  },
} as const;

export default function CoreServices({ locale, items, basePath }: CoreServicesProps) {
  const path = basePath || (locale === "de" ? "/leistungen" : "/en/services");
  const coreItems = items
    .filter((service) => CORE_SERVICES.includes(service.slug))
    .sort((a, b) => CORE_SERVICES.indexOf(a.slug) - CORE_SERVICES.indexOf(b.slug));

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {coreItems.map((service) => {
        const presentation = servicePresentation[locale][service.slug as keyof typeof servicePresentation.de];
        const Icon = presentation.Icon;
        return (
          <Link key={service.slug} href={`${path}/${service.slug}`} className="group flex min-w-0 flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]">
            <Icon className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-semibold leading-snug text-[var(--text)]">{presentation.title}</h3>
            {service.shortDescription && <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{service.shortDescription}</p>}
            <ul className="mt-5 flex-1 space-y-2 border-t border-[var(--border)] pt-5">
              {presentation.scopes.map((scope) => <li key={scope} className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"><span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" aria-hidden="true" />{scope}</li>)}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">{locale === "de" ? "Konzept ansehen" : "View concept"}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </Link>
        );
      })}
    </div>
  );
}
