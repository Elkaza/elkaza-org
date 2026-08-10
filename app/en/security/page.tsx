import SecurityPageContent from "@/app/components/SecurityPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/security",
  title: "Security & Platform Operations | Mohamed Elkaza",
  description: "Practical platform hardening across private administration, reduced public exposure, persistent host and Docker filtering, DNS protection, monitoring, backups, and self-hosted operations.",
});

export default function EnglishSecurityPage() {
  return <SecurityPageContent />;
}
