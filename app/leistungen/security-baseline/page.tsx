import { ShieldCheck } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "IT & Security Baseline Assessment - Elkaza",
  description: "Geplantes, klar begrenztes Assessment für Zugänge, MFA, Backups, Updates, Abhängigkeiten und IT-Dokumentation in KMU.",
  path: "/leistungen/security-baseline",
});

export default function SecurityBaselinePage() {
  return (
    <ServicePageTemplate
      locale="de"
      icon={ShieldCheck}
      title="IT & Security Baseline Assessment"
      promise="Ein strukturierter Ist-Stand mit priorisierten Erkenntnissen und einer praktischen Roadmap."
      scopeNote="Das Assessment prüft und dokumentiert. Technische Änderungen oder die Umsetzung einzelner Empfehlungen sind nicht automatisch enthalten und würden nur separat mit eigenem Umfang vereinbart."
      ctaAction="Assessment besprechen"
      ctaHref="/kontakt"
      timeline="abhängig vom vereinbarten Umfang"
      deliverablesCount={5}
      forWhom={[
        "Kleine Unternehmen ohne aktuelle, zusammenhängende IT-Dokumentation",
        "Wachsende Teams mit unklaren administrativen Zugängen",
        "Betriebe, die Backups, Updates und Abhängigkeiten strukturiert einordnen möchten",
      ]}
      outcomes={[
        "Nachvollziehbarer Ist-Stand der betrachteten Systeme",
        "Priorisierte technische und organisatorische Lücken",
        "Dokumentierte Zugänge, Abhängigkeiten und Annahmen",
        "Praktische Reihenfolge für mögliche nächste Schritte",
      ]}
      included={[
        "Konten, administrative Rollen und externe Zugangswege",
        "MFA- und Least-Privilege-Grundlagen",
        "Backup- und Restore-Bereitschaft auf Basis vorhandener Nachweise",
        "Patch- und Update-Praktiken",
        "Grundlegender Netzwerk- und Infrastrukturüberblick",
        "Betriebliche Abhängigkeiten und Dokumentationslücken",
      ]}
      deliverables={[
        "Zusammenfassung des aktuellen Stands",
        "Priorisierte Erkenntnisse mit nachvollziehbarer Begründung",
        "Praktische Remediation-Roadmap",
        "System-, Zugangs- und Abhängigkeitsdokumentation",
        "Annahmen, Ausschlüsse und Abgrenzung einer möglichen späteren Umsetzung",
      ]}
      tools={[
        "Vorhandene Identitäts- und Administrationsoberflächen",
        "Bestehende Backup-, Update- und Systemnachweise",
        "Strukturierte Interviews und technische Dokumentation",
      ]}
      evidence={{
        href: "https://elkaza.org/projects/enterprise-self-hosted-infrastructure",
        label: "Persönliches Infrastrukturprojekt",
        description: "Technischer Projektbericht zu einer selbst betriebenen Infrastruktur. Kein Kundenprojekt und keine Kundenreferenz.",
      }}
      process={[
        { step: "Erfassen", desc: "Systeme, Zugänge, Abläufe und vorhandene Nachweise innerhalb des vereinbarten Umfangs aufnehmen.", time: "Assessment" },
        { step: "Einordnen", desc: "Lücken und Abhängigkeiten nach praktischer Relevanz priorisieren.", time: "Priorisierung" },
        { step: "Dokumentieren", desc: "Ist-Stand, Roadmap, Annahmen und Ausschlüsse nachvollziehbar übergeben.", time: "Übergabe" },
      ]}
      faqs={[
        { q: "Werden erkannte Probleme direkt behoben?", a: "Nein. Das Assessment und eine spätere Umsetzung sind getrennte Umfänge. Eine Umsetzung würde erst nach einer eigenen technischen und kommerziellen Abgrenzung erfolgen." },
        { q: "Garantiert das Assessment Sicherheit oder Wiederherstellbarkeit?", a: "Nein. Es bewertet den sichtbaren Ist-Stand und vorhandene Nachweise. Es kann weder vollständige Sicherheit noch eine erfolgreiche Wiederherstellung garantieren." },
        { q: "Ist das eine Compliance- oder Rechtsberatung?", a: "Nein. Technische Kontrollen und vorhandene Nachweise können eingeordnet werden; rechtliche Bewertung, Zertifizierung und Compliance-Bestätigung sind ausgeschlossen." },
      ]}
      trustNote="Der Umfang, die verfügbaren Nachweise und technische Grenzen werden transparent dokumentiert. Aussagen beziehen sich nur auf die tatsächlich betrachteten Systeme und den vereinbarten Prüfzeitpunkt."
      finalCtaText="Zuerst verstehen, dann gezielt entscheiden."
    />
  );
}
