import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed Elkaza',
  description: 'Professional profile across IT operations, systems administration, application engineering, software automation, cybersecurity-minded infrastructure, technical delivery, and business analysis.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
