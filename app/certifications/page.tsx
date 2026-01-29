import CertificationsPageContent from "@/app/components/CertificationsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certifications | Mohamed Elkaza",
    description: "Professional certifications and continuous learning milestones.",
};

export default function CertificationsPage() {
    return <CertificationsPageContent />;
}
