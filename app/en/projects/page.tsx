import ProjectsPageContent from "@/app/components/ProjectsPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/projects",
  title: "Engineering Case Studies | Mohamed Elkaza",
  description: "Implemented case studies across application engineering, automation, IoT, Edge AI, TinyML, infrastructure, monitoring, dashboards, and technical implementation.",
});

export default function EnglishProjectsPage() {
  return <ProjectsPageContent />;
}
