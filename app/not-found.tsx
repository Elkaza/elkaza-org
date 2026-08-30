import type { Metadata } from "next";

import NotFoundContent from "@/app/components/NotFoundContent";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.websiteUrl),
  title: "Page not found / Seite nicht gefunden | Mohamed Elkaza",
  description: "The requested page could not be found. Die angeforderte Seite wurde nicht gefunden.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}

