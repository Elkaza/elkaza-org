import CertificationsPageContent from "@/app/components/CertificationsPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
    locale: "en",
    path: "/zertifikate",
    title: "Certifications | Mohamed Elkaza",
    description: "Professional certifications and continuous learning milestones.",
});

export default function CertificationsPage() {
    return <CertificationsPageContent />;
}
