import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed Elkaza',
  description: 'Professional profile, experience, and core skills of Mohamed Elkaza - IT Infrastructure & Platform Engineer.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
