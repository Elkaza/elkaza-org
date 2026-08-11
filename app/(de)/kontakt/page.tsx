import ContactPageContent from "@/app/components/ContactPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/kontakt",
  title: "Kontakt | Mohamed Elkaza",
  description:
    "Kontakt zu Mohamed Elkaza für Praktikum, Masterarbeitskooperation, Junior Technical Roles, Datenautomatisierung, IoT, Edge AI, Infrastruktur, Monitoring und Application Engineering.",
});

export default function KontaktPage() {
  return <ContactPageContent />;
}
