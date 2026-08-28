import ContactPageContent from "@/app/components/ContactPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/kontakt",
  title: "Kontakt | Mohamed Elkaza",
  description: "Kontakt zu Mohamed Elkaza für technische Rollen und Kooperationen in Application Engineering, Infrastruktur und Automatisierung.",
});

export default function KontaktPage() {
  return <ContactPageContent />;
}
