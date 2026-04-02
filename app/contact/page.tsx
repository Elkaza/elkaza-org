import type { Metadata } from 'next';
import ContactPageContent from '../components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact | Mohamed Elkaza',
  description: 'Get in touch about IT operations, infrastructure, networking, automation, and project opportunities.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
