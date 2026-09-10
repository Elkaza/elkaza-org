import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Portfolio of Mohamed Elkaza focused on IT infrastructure, application engineering, and automation across Linux, Windows Server, and Docker environments.",
});

export default function EnglishHomePage() {
  return <HomeContent />;
}
