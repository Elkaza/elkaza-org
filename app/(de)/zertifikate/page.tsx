import CertificationsPageContent from "@/app/components/CertificationsPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
    locale: "de",
    path: "/zertifikate",
    title: "Zertifikate | Mohamed Elkaza",
    description: "Zertifizierungen und Weiterbildungen.",
});

export default function ZertifikatePage() {
    return <CertificationsPageContent />;
}
