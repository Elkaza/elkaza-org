import type { Metadata } from 'next';
import SecurityPageContent from '../components/SecurityPageContent';

export const metadata: Metadata = {
    title: 'Security & Networking | Mohamed Elkaza',
    description: 'Hands-on security, networking, and homelab infrastructure work: segmentation, VPN, DNS filtering, Linux hardening, and secure services.',
};

export default function SecurityPage() {
    return <SecurityPageContent />;
}
