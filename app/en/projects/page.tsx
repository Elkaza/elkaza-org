import ProjectsPageContent from "@/app/components/ProjectsPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/projects",
  title: "Engineering Case Studies | Mohamed Elkaza",
  description: "Projects from Mohamed Elkaza's infrastructure lab, university work and embedded-systems development, with implementation details and verification evidence.",
});

export default function EnglishProjectsPage() {
  return <ProjectsPageContent />;
}
