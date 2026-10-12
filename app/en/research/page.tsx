import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/research",
  title: "Current Academic Work | Mohamed Elkaza",
  description: "An active TU Wien master's thesis on energy-aware AI inference placement and a planned FH thesis direction on sensor-data integrity at an edge gateway.",
});

export default function EnglishResearchPage() {
  return <ResearchPageContent />;
}
