import { Workflow } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Automatisierung & Dokumentation Sprint - Elkaza",
  description: "Geplanter Sprint für kleine wiederkehrende IT-Abläufe, Ansible, Linux, Docker, Python, Bash und nachvollziehbare Dokumentation.",
  path: "/leistungen/automation",
});

export default function AutomationPage() {
  return (
    <ServicePageTemplate
      locale="de"
      icon={Workflow}
      title="Automatisierung & Dokumentation Sprint"
      promise="Einen klar begrenzten operativen Ablauf dokumentieren, vereinfachen und soweit sinnvoll wiederholbar machen."
      scopeNote="Der Sprint konzentriert sich auf einen kleinen, abgegrenzten Workflow. Enterprise Platform Engineering, Kubernetes-Betrieb und umfassende Infrastrukturtransformationen sind nicht Teil des Startumfangs."
      ctaAction="Sprint besprechen"
      ctaHref="/kontakt"
      timeline="abhängig vom ausgewählten Workflow"
      deliverablesCount={5}
      forWhom={[
        "Kleine Teams mit wiederkehrenden manuellen IT-Aufgaben",
        "Linux- oder Docker-Umgebungen mit personenabhängigen Abläufen",
        "Betriebe, die Konfigurationen und Betriebswissen nachvollziehbar festhalten möchten",
      ]}
      outcomes={[
        "Dokumentierter Ausgangsprozess und klare Abgrenzung",
        "Wiederholbarer Ablauf mit überprüfbaren Schritten",
        "Nachvollziehbare Konfiguration und Fehlerbehandlung",
        "Runbook für Betrieb, Übergabe und manuelle Rückfalloption",
      ]}
      included={[
        "Auswahl eines klar begrenzten wiederkehrenden Workflows",
        "Ansible für passende Konfigurationsaufgaben",
        "Linux- und Docker-Abläufe, wo sie bereits zur Umgebung passen",
        "Kleine Automatisierungen mit Python oder Bash",
        "SQL für gezielte Datenabfragen, wenn fachlich erforderlich",
        "Konfigurations-, Ablauf- und Übergabedokumentation",
      ]}
      deliverables={[
        "Dokumentierter Ausgangs- und Zielprozess",
        "Versionierte Playbooks oder Skripte",
        "Konfigurations- und Abhängigkeitsübersicht",
        "Runbook mit Prüfung und Rückfalloption",
        "Annahmen, Grenzen und offene nächste Schritte",
      ]}
      tools={["Ansible", "Linux", "Docker", "Python", "Bash", "SQL, wo relevant"]}
      evidence={{
        href: "https://elkaza.org/projects/enterprise-self-hosted-infrastructure",
        label: "Technischer Projektbericht",
        description: "Persönliches Infrastrukturprojekt mit Linux-, Container- und Automatisierungsbezug. Kein Kundenprojekt und keine Kundenreferenz.",
      }}
      process={[
        { step: "Abgrenzen", desc: "Einen geeigneten Workflow, Schnittstellen und eine manuelle Rückfalloption festhalten.", time: "Scope" },
        { step: "Umsetzen", desc: "Kleine, prüfbare Automatisierung entwickeln und in einer kontrollierten Umgebung testen.", time: "Build & Test" },
        { step: "Übergeben", desc: "Code, Konfiguration, Runbook, Grenzen und Wartungshinweise dokumentieren.", time: "Handover" },
      ]}
      faqs={[
        { q: "Ist das eine vollständige Plattform-Modernisierung?", a: "Nein. Der geplante Startumfang ist ein kleiner Sprint für einen klar abgegrenzten Workflow." },
        { q: "Ist Terraform oder Kubernetes Teil des Angebots?", a: "Nicht im primären Startumfang. Im Mittelpunkt stehen nachweisbare kleine Automatisierungen mit Ansible, Linux, Docker und Skripten." },
        { q: "Was passiert, wenn die Automatisierung fehlschlägt?", a: "Prüfschritte, Logging und eine dokumentierte manuelle Rückfalloption gehören zur technischen Abgrenzung. Fehlerfreiheit kann nicht garantiert werden." },
      ]}
      trustNote="Automatisierung wird nur innerhalb des vereinbarten Umfangs und mit dokumentierten Berechtigungen betrachtet. Zugangsdaten gehören nicht in Skripte oder Repositories."
      finalCtaText="Einen kleinen Ablauf nachvollziehbar und wiederholbar machen."
    />
  );
}
