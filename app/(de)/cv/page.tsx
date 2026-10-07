import CvPageContent from "@/app/components/CvPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
    locale: "de",
    path: "/cv",
    title: "Lebenslauf | Mohamed Elkaza",
    description: "Lebenslauf von Mohamed Elkaza mit Application Engineering, Infrastruktur- und Security-Betrieb, Automatisierung, Netzwerken, Monitoring und sicherer IoT-Forschung.",
});

export default function CvPage() {
    return <CvPageContent />;
}
