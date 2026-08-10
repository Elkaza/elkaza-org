import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/",
  title: "Mohamed Elkaza | Software, Automation & Infrastructure Engineer",
  description: "Portfolio of Mohamed Elkaza: application engineering, automation, infrastructure, IoT, Edge AI, monitoring, dashboards, and reproducible technical implementation.",
});

export default function HomePage() {
  return <HomeContent />;
}
