import type { Metadata } from 'next';
import ProjectsPageContent from '../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Projects | Mohamed Elkaza',
  description: 'Case studies across IT infrastructure, application engineering, software automation, cybersecurity-minded operations, technical delivery, business analysis, and current IoT and edge work.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
