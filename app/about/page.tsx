import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed El-Kaza',
  description: 'Profeissional profile, experience, and core skills of Mohamed El-Kaza - IT Infrastructure & Platform Engineer.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
