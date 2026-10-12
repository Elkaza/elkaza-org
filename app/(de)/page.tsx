import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/",
  title: "Mohamed Elkaza – IT System Engineer (Vienna)",
  description: "IT-Infrastruktur, Application Support, Automatisierung, Security Operations und sichere IoT-/Edge-Projekte von Mohamed Elkaza in Wien.",
});

export default function HomePage() {
  return <HomeContent />;
}
