import ProjectsPageContent from "@/app/components/ProjectsPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/projects",
  title: "Technische Fallstudien | Mohamed Elkaza",
  description: "Umgesetzte technische Fallstudien zu Application Engineering, Automatisierung, IoT, Edge AI, TinyML, Infrastruktur, Monitoring, Dashboards und nachvollziehbarer technischer Umsetzung.",
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
