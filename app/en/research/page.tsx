import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/research",
  title: "Research | Mohamed Elkaza",
  description: "Ongoing TU Wien thesis on method integration and enterprise coherence governance during organizational transformation in Austria.",
});

export default function EnglishResearchPage() {
  return <ResearchPageContent />;
}
