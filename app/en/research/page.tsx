import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/research",
  title: "Current Academic Work | Mohamed Elkaza",
  description: "Current academic work at TU Wien and FH Technikum Wien, including a planned MIO-3 thesis direction on sensor-data integrity at an edge gateway.",
});

export default function EnglishResearchPage() {
  return <ResearchPageContent />;
}
