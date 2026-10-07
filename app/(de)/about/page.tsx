import AboutPageContent from "@/app/components/AboutPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/about",
  title: "Über mich | Mohamed Elkaza",
  description: "Berufliches Profil von Mohamed Elkaza zu Application Engineering, Infrastruktur- und Security-Betrieb, Automatisierung und sicherer IoT-Forschung.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
