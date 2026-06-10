import type { Metadata } from 'next';
import ContactPageContent from '../components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact | Mohamed Elkaza',
  description: 'Contact Mohamed Elkaza for internships, master thesis cooperation, junior technical roles, data automation, IoT, Edge AI, infrastructure, monitoring, and application engineering opportunities.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
