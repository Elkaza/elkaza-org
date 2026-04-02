import { Metadata } from 'next';
import CvPageContent from "../components/CvPageContent";

export const metadata: Metadata = {
    title: "CV | Mohamed Elkaza",
    description: "Curriculum Vitae of Mohamed Elkaza covering IT operations, systems administration, networking, automation, and ongoing IoT specialization.",
};

export default function CvPage() {
    return <CvPageContent />;
}
