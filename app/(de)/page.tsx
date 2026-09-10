import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Portfolio von Mohamed Elkaza mit Fokus auf IT-Infrastruktur, Application Engineering und Automatisierung in Linux-, Windows-Server- und Docker-Umgebungen.",
});

export default function HomePage() {
  return <HomeContent />;
}
