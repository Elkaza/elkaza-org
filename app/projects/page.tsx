import type { Metadata } from 'next';
import ProjectsPageContent from '../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Projects | Mohamed Elkaza',
  description: 'Timeline of technical projects including IoT, Cloud Infrastructure, and Web Development.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
