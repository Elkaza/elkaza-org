import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Portfolio von Mohamed Elkaza zu IT-Infrastruktur, Application Engineering, Security Operations, Automatisierung und sicherer IoT-Forschung.",
});

export default function HomePage() {
  return <HomeContent />;
}
