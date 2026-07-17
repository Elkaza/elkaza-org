import { Metadata } from 'next';
import CvPageContent from "../components/CvPageContent";

export const metadata: Metadata = {
    title: "CV | Mohamed Elkaza",
    description: "CV of Mohamed Elkaza covering application engineering, automation, infrastructure, IT operations, networking, monitoring, and IoT specialization.",
    openGraph: {
        title: "CV | Mohamed Elkaza",
        description: "Application engineering, automation, infrastructure, IT operations, monitoring, and IoT profile.",
    },
};

export default function CvPage() {
    return <CvPageContent />;
}
