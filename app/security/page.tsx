import type { Metadata } from 'next';
import SecurityPageContent from '../components/SecurityPageContent';

export const metadata: Metadata = {
    title: 'Security & Platform Operations | Mohamed Elkaza',
    description: 'Practical platform hardening across private administration, reduced public exposure, persistent host and Docker filtering, DNS protection, monitoring, backups, and self-hosted operations.',
};

export default function SecurityPage() {
    return <SecurityPageContent />;
}
