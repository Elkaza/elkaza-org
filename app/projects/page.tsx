import type { Metadata } from 'next';
import ProjectsPageContent from '../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Engineering Case Studies | Mohamed Elkaza',
  description: 'Implemented case studies across application engineering, automation, IoT, Edge AI, TinyML, infrastructure, monitoring, dashboards, and technical implementation.',
  openGraph: {
    title: 'Engineering Case Studies | Mohamed Elkaza',
    description: 'Implemented systems with deployment, documentation, monitoring, and technical results.',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
