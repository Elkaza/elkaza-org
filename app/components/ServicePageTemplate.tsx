import {
    Check,
    Clock,
    ExternalLink,
    FileText,
    HelpCircle,
    LucideIcon,
    Shield,
    Users,
    Wrench,
} from "lucide-react";
import CTA from "@/app/components/CTA";
import { SITE_CONTROLS } from "@/lib/siteStatus";

interface ServicePageTemplateProps {
    locale: "de" | "en";
    icon: LucideIcon;
    title: string;
    promise: string;
    scopeNote: string;
    ctaAction: string;
    ctaHref: string;
    timeline: string;
    deliverablesCount: number;
    forWhom: string[];
    outcomes: string[];
    included: string[];
    deliverables: string[];
    tools?: string[];
    evidence?: { href: string; label: string; description: string };
    process: { step: string; desc: string; time: string }[];
    faqs: { q: string; a: string }[];
    trustNote: string;
    finalCtaText: string;
}

const labels = {
    de: {
        forWhom: "Für wen?",
        whatYouGet: "Mögliches Zielbild",
        whatWeDo: "Vorgesehener Umfang",
        deliverables: "Mögliche Dokumentation",
        tools: "Mögliche Werkzeuge",
        boundary: "Abgrenzung",
        evidence: "Technischer Nachweis",
        process: "Möglicher Ablauf",
        faq: "Häufige Fragen",
        timeline: "Typische Dauer",
        deliverablesLabel: "Ergebnisse",
        prelaunch: "Geplantes Leistungskonzept - derzeit nicht verfügbar",
        statusCta: "Projektstatus ansehen",
    },
    en: {
        forWhom: "Who it's for",
        whatYouGet: "Possible target state",
        whatWeDo: "Intended scope",
        deliverables: "Possible documentation",
        tools: "Possible tools",
        boundary: "Scope boundary",
        evidence: "Technical evidence",
        process: "Possible process",
        faq: "FAQ",
        timeline: "Typical timeline",
        deliverablesLabel: "Deliverables",
        prelaunch: "Planned service concept - not currently available",
        statusCta: "View project status",
    },
};

function CheckList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function ServicePageTemplate({
    locale,
    icon: Icon,
    title,
    promise,
    scopeNote,
    ctaAction,
    ctaHref,
    timeline,
    deliverablesCount,
    forWhom,
    outcomes,
    included,
    deliverables,
    tools,
    evidence,
    process,
    faqs,
    trustNote,
    finalCtaText,
}: ServicePageTemplateProps) {
    const l = labels[locale];

    return (
        <main className="scroll-smooth">
            <section className="hero-gradient-enhanced py-12 md:py-18">
                <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                    <div>
                        {SITE_CONTROLS.showPrelaunchUi && (
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">{l.prelaunch}</p>
                        )}
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-light)] text-[var(--primary)]">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">{title}</h1>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                            {SITE_CONTROLS.showPrelaunchUi ? (locale === "de" ? "Möglicher künftiger Fokus: " : "Possible future focus: ") : ""}{promise}
                        </p>
                        {SITE_CONTROLS.commercialContent && <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)]">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                                <Clock className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
                                {l.timeline}: {timeline}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                                <FileText className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
                                {deliverablesCount} {l.deliverablesLabel}
                            </span>
                        </div>}
                        <div className="mt-7">
                            <CTA href={SITE_CONTROLS.showPrelaunchUi ? (locale === "de" ? "/kontakt" : "/en/contact") : ctaHref}>
                                {SITE_CONTROLS.showPrelaunchUi ? l.statusCta : ctaAction}
                            </CTA>
                        </div>
                        <div className="mt-6 max-w-2xl border-l-2 border-[var(--primary)] pl-4">
                            <p className="text-sm font-semibold text-[var(--text)]">{l.boundary}</p>
                            <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">{scopeNote}</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
                        <p className="mb-4 text-sm font-semibold text-[var(--text)]">{l.whatYouGet}</p>
                        <CheckList items={outcomes.slice(0, 4)} />
                    </div>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-12 md:py-16">
                <div className="mx-auto grid max-w-[1140px] gap-5 px-4 sm:px-6 md:grid-cols-3">
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-sm)]">
                        <div className="mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                            <h2 className="text-xl font-semibold text-[var(--text)]">{l.forWhom}</h2>
                        </div>
                        <CheckList items={forWhom} />
                    </div>
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-sm)]">
                        <div className="mb-4 flex items-center gap-2">
                            <Check className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                            <h2 className="text-xl font-semibold text-[var(--text)]">{l.whatYouGet}</h2>
                        </div>
                        <CheckList items={outcomes} />
                    </div>
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-sm)]">
                        <div className="mb-4 flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                            <h2 className="text-xl font-semibold text-[var(--text)]">{l.whatWeDo}</h2>
                        </div>
                        <CheckList items={included} />
                    </div>
                </div>
            </section>

            {evidence && (
                <section className="bg-[var(--surface)] py-8">
                    <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{l.evidence}</p>
                        <a href={evidence.href} rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-semibold text-[var(--text)] hover:text-[var(--primary)]">
                            {evidence.label}<ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-[var(--text-secondary)]">{evidence.description}</p>
                    </div>
                </section>
            )}

            <section className="bg-[var(--bg)] py-12 md:py-16">
                <div className="mx-auto grid max-w-[1140px] gap-5 px-4 sm:px-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                        <div className="mb-6 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                            <h2 className="text-2xl font-semibold text-[var(--text)]">{l.deliverables}</h2>
                        </div>
                        <CheckList items={deliverables} />
                    </div>
                    {tools && tools.length > 0 && (
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                            <div className="mb-6 flex items-center gap-2">
                                <Wrench className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                                <h2 className="text-2xl font-semibold text-[var(--text)]">{l.tools}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((item, i) => (
                                    <span key={i} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--text-secondary)]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-[var(--bg)] py-12 md:py-16">
                <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
                    <h2 className="mb-8 text-center text-2xl font-semibold text-[var(--text)]">{l.process}</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {process.map((step, i) => (
                            <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
                                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">
                                    {i + 1}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{step.step}</h3>
                                <p className="mb-3 text-sm leading-relaxed text-[var(--text-secondary)]">{step.desc}</p>
                                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]">
                                    <Clock className="h-3 w-3" aria-hidden="true" /> {step.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-12 md:py-16">
                <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
                    <div className="mb-8 flex items-center justify-center gap-2">
                        <HelpCircle className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
                        <h2 className="text-2xl font-semibold text-[var(--text)]">{l.faq}</h2>
                    </div>
                    <div className="mx-auto max-w-3xl space-y-4">
                        {([...(SITE_CONTROLS.showPrelaunchUi ? [{
                            q: locale === "de" ? "Ist dieses Leistungskonzept bereits buchbar?" : "Can this service concept be ordered?",
                            a: locale === "de" ? "Nein. Die Seite beschreibt den geplanten Startumfang. Es werden derzeit keine Anfragen oder Aufträge angenommen." : "No. This page describes the intended initial scope. No inquiries or orders are currently accepted.",
                        }] : []), ...faqs]).map((faq, i) => (
                            <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                                <h3 className="mb-2 text-base font-semibold text-[var(--text)]">{faq.q}</h3>
                                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--bg)] py-8">
                <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
                    <div className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                        <p className="text-sm text-[var(--text-secondary)]">{trustNote}</p>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-12 md:py-16">
                <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6">
                    <h2 className="mb-6 text-2xl font-semibold text-[var(--text)]">{finalCtaText}</h2>
                    <CTA href={SITE_CONTROLS.showPrelaunchUi ? (locale === "de" ? "/kontakt" : "/en/contact") : ctaHref}>
                        {SITE_CONTROLS.showPrelaunchUi ? l.statusCta : ctaAction}
                    </CTA>
                </div>
            </section>
        </main>
    );
}
