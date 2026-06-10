import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed Elkaza',
  description: 'Professional profile across data automation, IoT, Edge AI, application engineering, IT infrastructure, monitoring, technical consulting, and business informatics.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
