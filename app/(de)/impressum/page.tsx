import type { Metadata } from "next";

import ImpressumPageContent from "@/app/components/ImpressumPageContent";
import { absoluteUrl } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: "Impressum | Mohamed Elkaza",
  description: "Legal Notice / Impressum.",
  alternates: {
    canonical: absoluteUrl("/impressum"),
  },
};

export default function ImpressumPage() {
  return <ImpressumPageContent />;
}
