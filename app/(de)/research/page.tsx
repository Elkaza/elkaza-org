import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/research",
  title: "Research & Thesis Interests | Mohamed Elkaza",
  description: "Research, thesis, internship, and cooperation interests across business informatics, IoT, data automation, edge AI, Industry 4.0, monitoring, and secure infrastructure.",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
