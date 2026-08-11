import CvPageContent from "@/app/components/CvPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
    locale: "de",
    path: "/cv",
    title: "Lebenslauf | Mohamed Elkaza",
    description: "Lebenslauf von Mohamed Elkaza mit Application Engineering, Automatisierung, Infrastruktur, IT Operations, Netzwerken, Monitoring und IoT-Spezialisierung.",
});

export default function CvPage() {
    return <CvPageContent />;
}
