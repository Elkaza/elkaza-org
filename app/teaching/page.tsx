import { Metadata } from 'next';
import TeachingPageContent from "../components/TeachingPageContent";

export const metadata: Metadata = {
  title: 'Teaching | Mohamed El-Kaza',
  description: 'Courses, workshops, and knowledge sharing in Enterprise Architecture, PM, and IoT.',
};

export default function TeachingPage() {
  return <TeachingPageContent />;
}
