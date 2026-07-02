import type { Metadata } from 'next';
import SecurityPageContent from '../components/SecurityPageContent';

export const metadata: Metadata = {
    title: 'Security & Platform Operations | Mohamed Elkaza',
    description: 'Hands-on security and platform operations across private access, persistent host and Docker filtering, DNS protection, privacy-first analytics, observability, and secure self-hosted services.',
};

export default function SecurityPage() {
    return <SecurityPageContent />;
}
