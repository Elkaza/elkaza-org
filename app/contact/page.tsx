import type { Metadata } from 'next';
import ContactPageContent from '../components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact | Mohamed Elkaza',
  description: 'Get in touch for cybersecurity, network engineering, or project management opportunities.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
