import LeistungenClient from "./LeistungenClient";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Geplante IT-Assessments und Sprints für KMU | Elkaza",
  description: "Drei geplante Bereiche: IT & Security Baseline Assessment, Infrastruktur & Zugänge Review sowie Automatisierung & Dokumentation Sprint.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return <LeistungenClient />;
}
