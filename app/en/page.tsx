import HomeContent from "@/app/components/home/HomeContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Mohamed Elkaza | IT Infrastructure & Application Engineer",
  description: "Vienna-based IT infrastructure and application engineer with professional experience in application support, automation and networking, plus hands-on security operations and secure IoT research.",
});

export default function EnglishHomePage() {
  return <HomeContent />;
}
