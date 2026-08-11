import AboutPageContent from "@/app/components/AboutPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/about",
  title: "Über mich | Mohamed Elkaza",
  description: "Berufliches Profil von Mohamed Elkaza mit Fokus auf Application Engineering, Automatisierung, Infrastruktur, IoT, Monitoring, technische Dokumentation und Wirtschaftsinformatik.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
