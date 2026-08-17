import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/research",
  title: "Forschung | Mohamed Elkaza",
  description: "Laufende TU-Wien-Diplomarbeit zu Methodenintegration und Enterprise Coherence Governance bei Unternehmenstransformationen in Österreich.",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
