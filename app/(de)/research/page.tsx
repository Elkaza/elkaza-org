import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/research",
  title: "Aktuelle akademische Arbeit | Mohamed Elkaza",
  description: "Laufende TU-Wien-Diplomarbeit zu Enterprise Coherence Governance und MIO-3-Masterprojekt zu Secure Edge AI an der FH Technikum Wien.",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
