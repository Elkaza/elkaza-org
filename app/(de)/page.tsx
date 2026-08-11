import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Portfolio von Mohamed Elkaza mit ausgewählten Projekten aus IT-Infrastruktur, Application Engineering, Automatisierung, IoT, Edge AI, Monitoring und nachvollziehbarer technischer Umsetzung.",
});

export default function HomePage() {
  return <HomeContent />;
}
