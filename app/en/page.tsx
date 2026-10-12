import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Mohamed Elkaza – IT System Engineer (Vienna)",
  description: "IT infrastructure, application support, automation, security operations and secure IoT/edge projects by Mohamed Elkaza in Vienna.",
});

export default function EnglishHomePage() {
  return <HomeContent />;
}
