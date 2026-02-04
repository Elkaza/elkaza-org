import { Metadata } from 'next';
import DatenschutzPageContent from "../components/DatenschutzPageContent";

export const metadata: Metadata = {
    title: 'Datenschutz | Mohamed El-Kaza',
    description: 'Privacy Policy / Datenschutzerklärung.',
};

export default function DatenschutzPage() {
    return <DatenschutzPageContent />;
}
