import { Metadata } from 'next';
import ImpressumPageContent from "../components/ImpressumPageContent";

export const metadata: Metadata = {
    title: 'Impressum | Mohamed Elkaza',
    description: 'Legal Notice / Impressum.',
};

export default function ImpressumPage() {
    return <ImpressumPageContent />;
}
