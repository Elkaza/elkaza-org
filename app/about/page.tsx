import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed Elkaza',
  description: 'Professional profile across IT infrastructure, platform operations, automation, hybrid cloud, zero-trust networking, and secure self-hosted systems.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
