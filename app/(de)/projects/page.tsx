import ProjectsPageContent from "@/app/components/ProjectsPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/projects",
  title: "Technische Fallstudien | Mohamed Elkaza",
  description: "Projekte aus Mohamed Elkazas Infrastrukturlabor, Studium und Embedded-Entwicklung mit Details zur Umsetzung und Verifikation.",
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
