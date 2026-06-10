import type { Metadata } from 'next';
import ProjectsPageContent from '../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Projects | Mohamed Elkaza',
  description: 'Project case studies across data automation, IoT, Edge AI, TinyML, infrastructure, monitoring, dashboards, application engineering, and business informatics delivery.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
