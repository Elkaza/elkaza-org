import type { Metadata } from "next";

import DatenschutzPageContent from "@/app/components/DatenschutzPageContent";
import { absoluteUrl } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: "Datenschutz | Mohamed Elkaza",
  description: "Privacy Policy / Datenschutzerklaerung.",
  alternates: {
    canonical: absoluteUrl("/datenschutz"),
  },
};

export default function DatenschutzPage() {
  return <DatenschutzPageContent />;
}
