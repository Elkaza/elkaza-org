import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/research",
  title: "Aktuelle akademische Arbeit | Mohamed Elkaza",
  description: "Laufende TU-Wien-Masterarbeit zur energiebezogenen Platzierung von AI-Inferenz sowie das geplante FH-Masterthema zur Sensordatenintegrität am Edge Gateway.",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
