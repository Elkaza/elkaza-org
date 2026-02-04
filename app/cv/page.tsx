
import { Metadata } from 'next';
import CvPageContent from "../components/CvPageContent";

export const metadata: Metadata = {
    title: "CV | Mohamed Elkaza",
    description: "Curriculum Vitae of Mohamed Elkaza - IT Infrastructure & Platform Engineer.",
};

export default function CvPage() {
    return <CvPageContent />;
}
