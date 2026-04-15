import type { Metadata } from 'next';
import SecurityPageContent from '../components/SecurityPageContent';

export const metadata: Metadata = {
    title: 'Security & Platform Operations | Mohamed Elkaza',
    description: 'Hands-on security and platform operations work across private access, DNS filtering, reactive defense, observability, and secure self-hosted services.',
};

export default function SecurityPage() {
    return <SecurityPageContent />;
}
