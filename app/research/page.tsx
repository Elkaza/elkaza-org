import type { Metadata } from "next";
import ResearchPageContent from "../components/ResearchPageContent";

export const metadata: Metadata = {
  title: "Research & Thesis Interests | Mohamed Elkaza",
  description: "Research, thesis, internship, and cooperation interests across business informatics, IoT, data automation, edge AI, Industry 4.0, monitoring, and secure infrastructure.",
};

export default function ResearchPage() {
  return <ResearchPageContent />;
}
