import type { Metadata } from 'next';
import ProjectsPageContent from '../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Projects | Mohamed Elkaza',
  description: 'Case studies across infrastructure, networking, security, self-hosted platforms, and current IoT and edge work.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
