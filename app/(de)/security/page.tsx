import SecurityPageContent from "@/app/components/SecurityPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
    locale: "de",
    path: "/security",
    title: "Security & Plattformbetrieb | Mohamed Elkaza",
    description: "Praktische Plattformhärtung mit privatem Administrationspfad, reduzierter öffentlicher Angriffsfläche, persistentem Host- und Docker-Filtering, DNS-Schutz, Monitoring, Backups und Self-Hosting-Betrieb.",
});

export default function SecurityPage() {
    return <SecurityPageContent />;
}
