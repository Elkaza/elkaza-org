import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "IT Infrastructure & Application Engineer in Wien mit Berufserfahrung in Application Support, Automatisierung und Netzwerken sowie praktischer Security-Operations- und sicherer IoT-Forschung.",
});

export default function HomePage() {
  return <HomeContent />;
}
