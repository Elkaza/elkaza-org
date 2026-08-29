/**
 * Shared bilingual content for the pre-launch site.
 */
export const siteContent = {
  brand: {
    name: "Elkaza",
    tagline: {
      de: "Networking · Security · Automation",
      en: "Networking · Security · Automation",
    },
  },

  trust: {
    de: [
      "Standort: Wien",
      "Geplanter Fokus: KMU",
      "Assessment vor Umsetzung",
      "Konzeptphase",
      "Noch keine Auftragsannahme",
    ],
    en: [
      "Location: Vienna",
      "Planned focus: SMEs",
      "Assessment before implementation",
      "Concept stage",
      "Not accepting orders yet",
    ],
  },

  process: {
    de: [
      { step: 1, title: "Ist-Stand", desc: "Systeme, Zugänge, Backups und Dokumentation strukturiert erfassen." },
      { step: 2, title: "Priorisierung", desc: "Risiken, Lücken und Abhängigkeiten nachvollziehbar einordnen." },
      { step: 3, title: "Roadmap", desc: "Einen realistischen, klar begrenzten Maßnahmenplan dokumentieren." },
    ],
    en: [
      { step: 1, title: "Current state", desc: "Capture systems, access, backups, and documentation in a structured review." },
      { step: 2, title: "Priorities", desc: "Classify risks, gaps, and dependencies in a way stakeholders can follow." },
      { step: 3, title: "Roadmap", desc: "Document a realistic and clearly bounded action plan." },
    ],
  },

  hero: {
    de: {
      headline: "Ein klarer Ausgangspunkt für verlässlichere IT in kleinen Unternehmen.",
      subheadline:
        "Elkaza wird als mögliches künftiges Angebot für IT- und Security-Assessments, Infrastruktur und dokumentierte Automatisierung entwickelt.",
      primaryCta: "Projektstatus ansehen",
      primaryCtaHref: "/kontakt",
      secondaryCta: "Baseline Assessment ansehen",
      secondaryCtaHref: "/leistungen/security-baseline",
    },
    en: {
      headline: "A clear starting point for more reliable IT in small businesses.",
      subheadline:
        "Elkaza is being developed as a possible future offering for IT and security assessments, infrastructure, and documented automation.",
      primaryCta: "View project status",
      primaryCtaHref: "/en/contact",
      secondaryCta: "View Baseline Assessment",
      secondaryCtaHref: "/en/services/security-baseline",
    },
  },

  services: {
    de: {
      overview: {
        title: "Drei geplante Leistungsbereiche",
        subtitle: "Assessieren, stabilisieren und anschließend gezielt dokumentieren oder automatisieren.",
      },
      items: [
        {
          slug: "security-baseline",
          title: "IT & Security Baseline Assessment",
          shortDescription:
            "Strukturierter Ist-Stand zu Zugängen, MFA, Backups, Updates, Abhängigkeiten und Dokumentationslücken.",
        },
        {
          slug: "networking",
          title: "Infrastruktur & Zugänge Review",
          shortDescription:
            "Bestehende Topologie, administrative Zugangswege, Segmentierung und Firewall-Regeln nachvollziehbar prüfen.",
        },
        {
          slug: "automation",
          title: "Automatisierung & Dokumentation Sprint",
          shortDescription:
            "Kleine wiederkehrende Abläufe mit Linux, Ansible, Docker oder Skripten dokumentieren und gezielt vereinfachen.",
        },
      ],
    },
    en: {
      overview: {
        title: "Three planned service areas",
        subtitle: "Assess, stabilize, then document or automate a clearly defined workflow.",
      },
      items: [
        {
          slug: "security-baseline",
          title: "IT & Security Baseline Assessment",
          shortDescription:
            "A structured current-state review of access, MFA, backups, updates, dependencies, and documentation gaps.",
        },
        {
          slug: "networking",
          title: "Infrastructure & Access Review",
          shortDescription:
            "Review existing topology, administrative access paths, segmentation, and firewall rules in a traceable way.",
        },
        {
          slug: "automation",
          title: "Automation & Documentation Sprint",
          shortDescription:
            "Document and simplify a small recurring workflow with Linux, Ansible, Docker, or focused scripting.",
        },
      ],
    },
  },

  caseStudies: {
    de: {
      title: "Beispielszenarien",
      subtitle: "Fiktive Situationen, mögliche Ansätze und Zielbilder; keine Kundenreferenzen.",
      items: [
        {
          slug: "netzwerk-modernisierung-handelsunternehmen",
          title: "Netzwerk-Modernisierung für Handelsunternehmen",
          tag: "Infrastruktur",
          context: "Illustratives Handelsunternehmen mit mehreren Standorten.",
          problem: "Instabile Remote-Zugänge, uneinheitliches WLAN und eine nicht ausreichend dokumentierte Netzstruktur.",
          approach: "Möglich wären Bestandsaufnahme, Segmentierungskonzept, Review der Firewall-Regeln und aktualisierte Netzwerkdokumentation.",
          result: "Mögliches Zielbild: nachvollziehbare Segmentierung, dokumentierte Zugangswege und priorisierte Verbesserungen.",
        },
        {
          slug: "security-baseline-dienstleister",
          title: "Security Baseline für einen Dienstleistungsbetrieb",
          tag: "Baseline",
          context: "Illustrativer kleiner Dienstleistungsbetrieb ohne eigene Security-Rolle.",
          problem: "Uneinheitliche MFA-Nutzung, gemeinsam verwendete Admin-Zugänge und nicht dokumentierte Restore-Prüfungen.",
          approach: "Möglich wären ein Zugriffs- und MFA-Review, die Prüfung von Patch-Abläufen sowie ein dokumentierter Backup-Restore-Test.",
          result: "Mögliches Zielbild: priorisierte Grundlagen, geklärte Zugänge, Restore-Nachweise und praktische nächste Schritte.",
        },
        {
          slug: "zero-trust-finanzberatung",
          title: "Zugriffskonzept für hybrides Arbeiten",
          tag: "Zugänge",
          context: "Illustratives KMU mit hybriden Arbeitsplätzen und externen Zugängen.",
          problem: "Uneinheitliche Zugriffsregeln und zu weit gefasste Berechtigungen erschweren die Kontrolle.",
          approach: "Möglich wären ein Identitäts-Review, grundlegende Rollenbereinigung und dokumentierte Regeln für externe Zugriffe.",
          result: "Mögliches Zielbild: nachvollziehbare Rollen, administrative Konten und externe Zugangswege.",
        },
        {
          slug: "ransomware-resilience-produktion",
          title: "Backup- und Restore-Bereitschaft",
          tag: "Baseline",
          context: "Illustratives KMU mit geschäftskritischen Daten.",
          problem: "Wenig Backup-Redundanz, ungetestete Wiederherstellung und unklare Zuständigkeiten.",
          approach: "Möglich wären ein Architektur-Review, getrennte Sicherungskopien, ein geplanter Restore-Test und ein einfaches Runbook.",
          result: "Mögliches Zielbild: dokumentierte Sicherung, Wiederherstellung, Annahmen und Zuständigkeiten.",
        },
        {
          slug: "m365-sicherheit-compliance",
          title: "M365-Zugriffe und Freigaben",
          tag: "Zugänge",
          context: "Illustratives KMU mit Microsoft 365 und externem Datenaustausch.",
          problem: "Uneinheitliche Freigaben, zu breite Administratorrollen und unklare Verantwortlichkeiten.",
          approach: "Möglich wären ein Review der Freigaben, MFA, Rollen und vorhandenen Protokollierung sowie priorisierte Konfigurationshinweise.",
          result: "Mögliches Zielbild: nachvollziehbare interne und externe Freigaben mit klaren Verantwortlichkeiten.",
        },
      ],
    },
    en: {
      title: "Illustrative scenarios",
      subtitle: "Fictional situations, possible approaches, and target states; not customer references.",
      items: [
        {
          slug: "network-modernization-retail",
          title: "Network Modernization for a Retail Business",
          tag: "Infrastructure",
          context: "Illustrative retail business with several locations.",
          problem: "Unstable remote access, inconsistent Wi-Fi, and insufficient network documentation.",
          approach: "A possible approach would combine an inventory, segmentation concept, firewall-rule review, and updated network documentation.",
          result: "Possible target state: traceable segmentation, documented access paths, and prioritized improvements.",
        },
        {
          slug: "security-baseline-it-service",
          title: "Security Baseline for a Service Business",
          tag: "Baseline",
          context: "Illustrative small service business without a dedicated security role.",
          problem: "Inconsistent MFA use, shared administrative access, and no documented restore verification.",
          approach: "A possible approach would review access and MFA, examine patch routines, and document a backup-restore test.",
          result: "Possible target state: prioritized fundamentals, clarified access, restore evidence, and practical next steps.",
        },
        {
          slug: "zero-trust-fintech",
          title: "Access Model for Hybrid Work",
          tag: "Access",
          context: "Illustrative SME with hybrid work and external access.",
          problem: "Inconsistent access rules and overly broad permissions make control difficult.",
          approach: "A possible approach would review identities, clean up basic roles, and document rules for external access.",
          result: "Possible target state: traceable roles, administrative accounts, and external access paths.",
        },
        {
          slug: "ransomware-recovery-manufacturing",
          title: "Backup and Restore Readiness",
          tag: "Baseline",
          context: "Illustrative SME with business-critical data.",
          problem: "Limited backup redundancy, untested recovery, and unclear ownership.",
          approach: "A possible approach would review the architecture, separate backup copies, plan a restore test, and prepare a simple runbook.",
          result: "Possible target state: documented backup, recovery, assumptions, and ownership.",
        },
        {
          slug: "m365-security-audit",
          title: "M365 Access and Sharing",
          tag: "Access",
          context: "Illustrative SME using Microsoft 365 for external data exchange.",
          problem: "Inconsistent sharing, overly broad administrative roles, and unclear ownership.",
          approach: "A possible approach would review sharing, MFA, roles, and available logging, then prioritize configuration guidance.",
          result: "Possible target state: traceable internal and external sharing with clear ownership.",
        },
      ],
    },
  },

  faqs: {
    de: {
      title: "Häufig gestellte Fragen",
      items: [
        { q: "Wie könnte ein späteres erstes Projekt ablaufen?", a: "Geplant ist ein klar begrenztes Baseline Assessment mit Bestandsaufnahme, priorisierten Erkenntnissen und dokumentierter Roadmap." },
        { q: "Ist die Umsetzung im Assessment enthalten?", a: "Nein. Das Assessment dokumentiert den Ist-Stand und nächste Schritte. Eine Umsetzung würde nur separat und mit eigenem Umfang vereinbart." },
        { q: "Sind die Leistungen bereits buchbar?", a: "Nein. Die dargestellten Leistungen dokumentieren den aktuellen Planungsstand und sind noch keine Angebote." },
        { q: "Garantiert Elkaza Sicherheit oder Compliance?", a: "Nein. Ein Assessment kann technische Risiken und Nachweise sichtbar machen, aber weder vollständige Sicherheit noch rechtliche Compliance garantieren." },
      ],
    },
    en: {
      title: "Frequently asked questions",
      items: [
        { q: "How could a future first engagement work?", a: "The planned starting point is a bounded Baseline Assessment covering current state, prioritized findings, and a documented roadmap." },
        { q: "Is implementation included in the assessment?", a: "No. The assessment documents the current state and next steps. Any implementation would require a separate, explicit scope." },
        { q: "Can these services be ordered already?", a: "No. The services shown document the current planning stage and are not yet offers." },
        { q: "Does Elkaza guarantee security or compliance?", a: "No. An assessment can identify technical risks and evidence gaps, but it cannot guarantee complete security or legal compliance." },
      ],
    },
  },
};

export type Locale = "de" | "en";
