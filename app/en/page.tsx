import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Portfolio of Mohamed Elkaza: application engineering, automation, infrastructure, IoT, Edge AI, monitoring, dashboards, and reproducible technical implementation.",
});

export default function EnglishHomePage() {
  return <HomeContent />;
}
