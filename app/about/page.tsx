import { Metadata } from 'next';
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: 'About | Mohamed Elkaza',
  description: 'Professional profile, experience, and core skills across IT operations, infrastructure, networking, automation, and ongoing IoT work.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
