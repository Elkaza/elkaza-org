"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Server, Network, CheckCircle2, AlertTriangle, Lightbulb, Terminal } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";

const content = {
    en: {
        title: "Home Security Lab",
        subtitle: "Proxmox, Pi-hole, and WireGuard (planned) setup for a secure home network.",
        overview: "A self-hosted infrastructure project focused on network security fundamentals: DNS filtering, firewall hardening, and segmentation planning. Built on repurposed enterprise hardware running Proxmox virtualization.",
        contextTitle: "Context & Problem",
        context: [
            "Default ISP-provided router with limited security features (in my home lab baseline)",
            "IoT devices sharing the same network as personal devices",
            "No DNS-level ad/malware filtering",
            "Need for secure remote access without exposing ports"
        ],
        constraintsTitle: "Constraints",
        constraints: [
            "ISP router limitations (limited bridge mode support)",
            "Budget: repurposed hardware only",
            "Must not disrupt household internet usage",
            "Remote access needs for travel scenarios"
        ],
        architectureTitle: "Architecture",
        architectureIntro: "Logical network topology:",
        architecture: [
            "Internet → ISP Router → LAN Switch → Proxmox Host",
            "Proxmox VMs: Pi-hole (DNS), Nginx Proxy Manager, Uptime Kuma",
            "Guest/IoT SSID separation (current: separate SSID; VLAN: planned)",
            "WireGuard VPN for remote access (planned)"
        ],
        controlsTitle: "Security Controls",
        controlsImplemented: [
            "DNS filtering via Pi-hole (ad/malware blocking)",
            "UFW firewall (deny incoming by default, LAN-only SSH)",
            "No public port forwarding (Cloudflare Tunnel for external access)",
            "Automatic security updates enabled"
        ],
        controlsPlanned: [
            "WireGuard VPN for secure remote access",
            "VLAN-based IoT isolation",
            "Centralized logging (Wazuh evaluation)"
        ],
        builtTitle: "What I Built",
        built: [
            "Deployed ThinkCentre M710q with Proxmox VE",
            "Configured Debian VMs for Pi-hole and reverse proxy",
            "Set up UFW with restrictive inbound rules",
            "Implemented DNS-over-HTTPS upstream in Pi-hole",
            "Created monitoring dashboards with Uptime Kuma"
        ],
        resultsTitle: "Results & Outcome",
        results: [
            "Ad-free browsing across all devices (50%+ DNS queries blocked)",
            "Reduced attack surface with deny-by-default firewall posture",
            "Secure external access without exposed ports",
            "Foundation established for VPN and segmentation rollout"
        ],
        lessonsTitle: "Lessons Learned & Next Steps",
        lessons: [
            "ISP hardware limitations require creative workarounds",
            "Start simple: Pi-hole + UFW provides significant security uplift",
            "Documentation pays off when troubleshooting"
        ],
        nextSteps: [
            "WireGuard VPN rollout for secure remote access",
            "VLAN segmentation when router hardware supports it",
            "Wazuh/Zeek evaluation for advanced monitoring"
        ],
        labTitle: "Lab Excerpts",
        labNote: "Sanitized for public sharing (no secrets).",
        techTitle: "Tech Stack"
    },
    de: {
        title: "Home Security Lab",
        subtitle: "Proxmox, Pi-hole und WireGuard (geplant) Setup für ein sicheres Heimnetzwerk.",
        overview: "Ein Self-Hosted-Infrastrukturprojekt mit Fokus auf Netzwerksicherheits-Grundlagen: DNS-Filterung, Firewall-Härtung und Segmentierungsplanung. Aufgebaut auf umfunktionierter Enterprise-Hardware mit Proxmox-Virtualisierung.",
        contextTitle: "Kontext & Problem",
        context: [
            "Standard-ISP-Router mit eingeschränkten Sicherheitsfunktionen",
            "IoT-Geräte im selben Netzwerk wie persönliche Geräte",
            "Keine DNS-basierte Werbe-/Malware-Filterung",
            "Bedarf an sicherem Fernzugriff ohne offene Ports"
        ],
        constraintsTitle: "Einschränkungen",
        constraints: [
            "ISP-Router-Limitierungen (eingeschränkte Bridge-Modus-Unterstützung)",
            "Budget: nur wiederverwendete Hardware",
            "Darf die Internetnutzung im Haushalt nicht stören",
            "Fernzugriffsbedarf für Reiseszenarien"
        ],
        architectureTitle: "Architektur",
        architectureIntro: "Logische Netzwerktopologie:",
        architecture: [
            "Internet → ISP-Router → LAN-Switch → Proxmox-Host",
            "Proxmox-VMs: Pi-hole (DNS), Nginx Proxy Manager, Uptime Kuma",
            "Gast-/IoT-SSID-Trennung (aktuell: separate SSID; VLAN: geplant)",
            "WireGuard-VPN für Fernzugriff (geplant)"
        ],
        controlsTitle: "Sicherheitskontrollen",
        controlsImplemented: [
            "DNS-Filterung via Pi-hole (Werbe-/Malware-Blocking)",
            "UFW-Firewall (eingehend standardmäßig verweigern, SSH nur LAN)",
            "Kein öffentliches Port-Forwarding (Cloudflare Tunnel für externen Zugriff)",
            "Automatische Sicherheitsupdates aktiviert"
        ],
        controlsPlanned: [
            "WireGuard-VPN für sicheren Fernzugriff",
            "VLAN-basierte IoT-Isolation",
            "Zentralisiertes Logging (Wazuh-Evaluierung)"
        ],
        builtTitle: "Was ich gebaut habe",
        built: [
            "ThinkCentre M710q mit Proxmox VE bereitgestellt",
            "Debian-VMs für Pi-hole und Reverse Proxy konfiguriert",
            "UFW mit restriktiven Eingangsregeln eingerichtet",
            "DNS-over-HTTPS-Upstream in Pi-hole implementiert",
            "Monitoring-Dashboards mit Uptime Kuma erstellt"
        ],
        resultsTitle: "Ergebnisse & Outcome",
        results: [
            "Werbefreies Surfen auf allen Geräten (50%+ DNS-Anfragen blockiert)",
            "Reduzierte Angriffsfläche durch Deny-by-Default-Firewall",
            "Sicherer externer Zugriff ohne offene Ports",
            "Grundlage für VPN- und Segmentierungs-Rollout geschaffen"
        ],
        lessonsTitle: "Lessons Learned & Nächste Schritte",
        lessons: [
            "ISP-Hardware-Limitierungen erfordern kreative Workarounds",
            "Einfach starten: Pi-hole + UFW bieten erhebliche Sicherheitsverbesserung",
            "Dokumentation zahlt sich bei der Fehlersuche aus"
        ],
        nextSteps: [
            "WireGuard-VPN-Rollout für sicheren Fernzugriff",
            "VLAN-Segmentierung wenn Router-Hardware dies unterstützt",
            "Wazuh/Zeek-Evaluierung für erweitertes Monitoring"
        ],
        labTitle: "Lab-Ausschnitte",
        labNote: "Für die öffentliche Darstellung bereinigt (keine Geheimnisse).",
        techTitle: "Tech Stack"
    },
    ar: {
        title: "Home Security Lab",
        subtitle: "Proxmox، Pi-hole، وWireGuard (مخطط) لشبكة منزلية آمنة.",
        overview: "مشروع بنية تحتية مستضافة ذاتياً يركز على أساسيات أمن الشبكات.",
        contextTitle: "السياق والمشكلة",
        context: ["راوتر ISP افتراضي بميزات أمان محدودة"],
        constraintsTitle: "القيود",
        constraints: ["قيود راوتر ISP"],
        architectureTitle: "البنية",
        architectureIntro: "طوبولوجيا الشبكة:",
        architecture: ["Internet → ISP Router → LAN → Proxmox"],
        controlsTitle: "الضوابط الأمنية",
        controlsImplemented: ["فلترة DNS عبر Pi-hole"],
        controlsPlanned: ["WireGuard VPN (مخطط)"],
        builtTitle: "ما بنيته",
        built: ["نشر Proxmox VE"],
        resultsTitle: "النتائج",
        results: ["تصفح خالٍ من الإعلانات"],
        lessonsTitle: "الدروس المستفادة",
        lessons: ["ابدأ بسيطاً"],
        nextSteps: ["WireGuard VPN"],
        labTitle: "مقتطفات المختبر",
        labNote: "تم تنظيفه للمشاركة العامة.",
        techTitle: "التقنيات"
    }
};

const techStack = [
    { name: "Proxmox VE", status: "implemented" },
    { name: "Debian", status: "implemented" },
    { name: "Pi-hole", status: "implemented" },
    { name: "UFW", status: "implemented" },
    { name: "Nginx Proxy Manager", status: "implemented" },
    { name: "Uptime Kuma", status: "implemented" },
    { name: "WireGuard", status: "planned" },
    { name: "Wazuh", status: "exploring" },
];

export default function HomeSecurityLabCaseStudy() {
    const { locale, t } = useLocale();
    const c = content[locale] || content.en;

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300 py-12 px-6">
            <article className="max-w-3xl mx-auto space-y-10">

                {/* Navigation */}
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("nav_projects")}
                </Link>

                {/* Header */}
                <header className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <Shield className="w-4 h-4" />
                        <span>2025 • Security / Infrastructure</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-main">
                        {c.title}
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        {c.subtitle}
                    </p>
                </header>

                {/* Overview */}
                <section className="bg-card border border-subtle rounded-xl p-6 space-y-3">
                    <p className="text-main leading-relaxed">{c.overview}</p>
                </section>

                {/* Context & Problem */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        {c.contextTitle}
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-main">
                        {c.context.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </section>

                {/* Constraints */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">{c.constraintsTitle}</h2>
                    <ul className="list-disc ml-6 space-y-2 text-main">
                        {c.constraints.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </section>

                {/* Architecture */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        {c.architectureTitle}
                    </h2>
                    <p className="text-muted text-sm">{c.architectureIntro}</p>
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 font-mono text-sm space-y-1">
                        {c.architecture.map((line, i) => (
                            <div key={i} className="text-main">{line}</div>
                        ))}
                    </div>
                </section>

                {/* Security Controls */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                        {c.controlsTitle}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card border border-subtle rounded-lg p-4 space-y-3">
                            <h3 className="font-medium text-sm uppercase tracking-wider text-green-600 dark:text-green-400">
                                ✓ Implemented
                            </h3>
                            <ul className="space-y-2">
                                {c.controlsImplemented.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card border border-subtle rounded-lg p-4 space-y-3">
                            <h3 className="font-medium text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                ◐ Planned
                            </h3>
                            <ul className="space-y-2">
                                {c.controlsPlanned.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                        <span className="w-4 h-4 border-2 border-amber-500 rounded-full flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What I Built */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        {c.builtTitle}
                    </h2>
                    <ol className="list-decimal ml-6 space-y-2 text-main">
                        {c.built.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                </section>

                {/* Results */}
                <section className="bg-card border border-subtle rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                        {c.resultsTitle}
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-main">
                        {c.results.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </section>

                {/* Lessons & Next Steps */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                        {c.lessonsTitle}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium text-sm text-muted mb-2">Lessons</h3>
                            <ul className="list-disc ml-6 space-y-1 text-sm text-main">
                                {c.lessons.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm text-muted mb-2">Next Steps</h3>
                            <ul className="list-disc ml-6 space-y-1 text-sm text-main">
                                {c.nextSteps.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Lab Excerpts */}
                <section className="space-y-4 border-t border-subtle pt-8">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        {c.labTitle}
                    </h2>
                    <p className="text-sm text-muted italic">{c.labNote}</p>
                    <div className="bg-slate-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto space-y-4">
                        <div>
                            <div className="text-slate-500"># Firewall posture (UFW)</div>
                            <div className="text-slate-400">$ sudo ufw status verbose</div>
                            <pre className="text-green-300 mt-1">{`Status: active
Default: deny (incoming), allow (outgoing)

To                         Action      From
--                         ------      ----
<SSH_PORT>/tcp             LIMIT IN    <LAN_SUBNET>
<DNS_PORT>/udp             ALLOW IN    <LAN_SUBNET>`}</pre>
                        </div>
                        <div>
                            <div className="text-slate-500"># DNS filtering (Pi-hole)</div>
                            <div className="text-slate-400">$ pihole status</div>
                            <pre className="text-green-300 mt-1">{`  [✓] FTL is listening on port 53
  [✓] Pi-hole blocking is enabled
  [✓] DNS service is running`}</pre>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">{c.techTitle}</h2>
                    <p className="text-main font-mono text-sm">
                        Proxmox VE · Debian · Pi-hole · UFW · Nginx Proxy Manager · Uptime Kuma · WireGuard (planned) · Wazuh (exploring)
                    </p>
                </section>

            </article>
        </main>
    );
}
