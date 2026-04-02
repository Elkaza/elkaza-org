import type { Metadata } from "next";
import ResearchPageContent from "../components/ResearchPageContent";

export const metadata: Metadata = {
  title: "Academic Work | Mohamed Elkaza",
  description: "Master's thesis and academic focus areas that support Mohamed Elkaza's professional profile in IT, systems, and digital transformation.",
};

export default function ResearchPage() {
  return <ResearchPageContent />;
}
