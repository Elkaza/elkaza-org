import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Portfolio of Mohamed Elkaza across IT infrastructure, application engineering, security operations, automation, and secure IoT research.",
});

export default function EnglishHomePage() {
  return <HomeContent />;
}
