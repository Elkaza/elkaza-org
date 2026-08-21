import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/research",
  title: "Aktuelle akademische Arbeit | Mohamed Elkaza",
  description: "Vorgeschlagene Forschungsrichtung für eine TU-Wien-Diplomarbeit; Themen- und Betreuungsabstimmung läuft. MIO-3-Masterprojekt zu Secure Edge AI an der FH Technikum Wien.",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
