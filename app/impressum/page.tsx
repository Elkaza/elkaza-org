import { Metadata } from 'next';
import ImpressumPageContent from "../components/ImpressumPageContent";

export const metadata: Metadata = {
    title: 'Impressum | Mohamed El-Kaza',
    description: 'Legal Notice / Impressum.',
};

export default function ImpressumPage() {
    return <ImpressumPageContent />;
}
