import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/research",
  title: "Current Academic Work | Mohamed Elkaza",
  description: "Proposed research direction for a TU Wien diploma thesis; topic and supervision are under clarification. FH Technikum Wien MIO-3 master's project on secure edge AI.",
});

export default function EnglishResearchPage() {
  return <ResearchPageContent />;
}
