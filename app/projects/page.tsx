import type { Metadata } from 'next';
import ProjectsPageContent from '../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Projects | Mohamed El-Kaza',
  description: 'Timeline of technical projects including IoT, Cloud Infrastructure, and Web Development.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
