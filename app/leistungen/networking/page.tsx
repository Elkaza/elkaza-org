import { Network } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Infrastruktur & Zugänge Review - Elkaza",
  description: "Geplanter Review bestehender Topologie, administrativer Zugänge, Remote-Zugriff, Segmentierung, Firewall-Regeln und Dokumentation.",
  path: "/leistungen/networking",
});

export default function NetworkingPage() {
  return (
    <ServicePageTemplate
      locale="de"
      icon={Network}
      title="Infrastruktur & Zugänge Review"
      promise="Bestehende Zugangswege und Infrastruktur verständlich erfassen, Risiken priorisieren und Dokumentationslücken schließen."
      scopeNote="Der Review bewertet die bestehende Umgebung. Umbauten, Hardwarebeschaffung, Migrationen oder laufender Betrieb sind nicht enthalten und müssten separat geplant werden."
      ctaAction="Review besprechen"
      ctaHref="/kontakt"
      timeline="abhängig von Standorten und Umfang"
      deliverablesCount={5}
      forWhom={[
        "Kleine Unternehmen mit gewachsener oder wenig dokumentierter Infrastruktur",
        "Teams mit unklaren Remote- oder Administratorzugängen",
        "Betriebe, die Segmentierung und Firewall-Regeln strukturiert prüfen möchten",
      ]}
      outcomes={[
        "Nachvollziehbare bestehende Topologie",
        "Dokumentierte administrative und externe Zugangswege",
        "Priorisierte Risiken bei Segmentierung und Zugriffsregeln",
        "Konkrete Dokumentations- und Stabilisierungsschritte",
      ]}
      included={[
        "Review der bestehenden Netz- und Systemtopologie",
        "Remote-, externe und administrative Zugangswege",
        "Grundlagen der Segmentierung",
        "Review vorhandener Firewall- und Zugriffsregeln",
        "Infrastruktur-Dokumentation und betriebliche Abhängigkeiten",
        "Erkennbare Betriebsrisiken innerhalb des vereinbarten Umfangs",
      ]}
      deliverables={[
        "Aktualisierte Topologieübersicht",
        "Dokumentierte Zugangswege und Zuständigkeiten",
        "Priorisierte technische Feststellungen",
        "Übersicht relevanter Firewall- und Segmentierungsfragen",
        "Annahmen, Ausschlüsse und praktische nächste Schritte",
      ]}
      tools={[
        "Vorhandene Firewall-, Switch- und VPN-Konfigurationen",
        "Bestehende Netzwerkpläne und Systeminventare",
        "Gezielte technische Bestandsaufnahme",
      ]}
      process={[
        { step: "Sichten", desc: "Vorhandene Pläne, Konfigurationen und Zugangswege innerhalb des Umfangs erfassen.", time: "Bestandsaufnahme" },
        { step: "Prüfen", desc: "Topologie, Regeln, Segmentierung und Abhängigkeiten nachvollziehbar bewerten.", time: "Review" },
        { step: "Dokumentieren", desc: "Feststellungen, Risiken und mögliche nächste Schritte geordnet übergeben.", time: "Übergabe" },
      ]}
      faqs={[
        { q: "Werden Firewall oder Netzwerk direkt umgebaut?", a: "Nein. Der Review ist zunächst eine Bewertung. Änderungen würden separat geplant, getestet und freigegeben." },
        { q: "Ist eine bestimmte Herstellerplattform erforderlich?", a: "Nein. Ausgangspunkt ist die bestehende Umgebung. Produktnamen werden nicht als pauschale Lieferfähigkeit oder Zertifizierung verstanden." },
        { q: "Ist laufendes Monitoring enthalten?", a: "Nein. Laufendes Monitoring, Incident Response, Supportzeiten und SLA-ähnliche Leistungen sind nicht Teil dieses Startumfangs." },
      ]}
      trustNote="Es werden nur die zugänglichen Systeme und bereitgestellten Informationen bewertet. Der Review ist keine Garantie für Verfügbarkeit, Sicherheit oder vollständige Fehlerfreiheit."
      finalCtaText="Zugangswege und Abhängigkeiten zuerst nachvollziehbar machen."
    />
  );
}
