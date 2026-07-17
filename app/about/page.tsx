import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed Elkaza',
  description: 'Professional profile of Mohamed Elkaza across application engineering, automation, infrastructure, IoT, monitoring, technical documentation, and business informatics.',
  openGraph: {
    title: 'About | Mohamed Elkaza',
    description: 'Application engineering, automation, infrastructure, IoT, monitoring, and technical documentation profile.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
