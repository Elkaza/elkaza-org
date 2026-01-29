import CertificationsPageContent from "@/app/components/CertificationsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zertifikate | Mohamed Elkaza",
    description: "Zertifizierungen und Weiterbildungen.",
};

export default function ZertifikatePage() {
    return <CertificationsPageContent />;
}
