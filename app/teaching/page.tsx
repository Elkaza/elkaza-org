import { Metadata } from 'next';
import TeachingPageContent from "../components/TeachingPageContent";

export const metadata: Metadata = {
  title: 'Learning Focus | Mohamed Elkaza',
  description: 'Current academic and technical learning focus across business informatics, project management, infrastructure, security, and IoT.',
};

export default function TeachingPage() {
  return <TeachingPageContent />;
}
