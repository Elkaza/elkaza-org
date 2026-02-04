import type { Metadata } from 'next';
import SecurityPageContent from '../components/SecurityPageContent';

export const metadata: Metadata = {
    title: 'Security & Networking | Mohamed Elkaza',
    description: 'Cybersecurity portfolio showcasing home lab experiments, network segmentation, and secure infrastructure projects.',
};

export default function SecurityPage() {
    return <SecurityPageContent />;
}
