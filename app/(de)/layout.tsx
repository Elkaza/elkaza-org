import "../globals.css";
import type { Metadata } from "next";
import RootDocument from "@/app/components/RootDocument";
import { getBuildCommit } from "@/app/lib/buildInfo";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.websiteUrl),
  title: `${profile.name} | ${profile.title.de}`,
  description: profile.introduction.de,
  openGraph: {
    title: `${profile.name} | ${profile.title.de}`,
    description: profile.introduction.de,
    url: profile.websiteUrl,
    siteName: "Mohamed Elkaza Portfolio",
    type: "website",
    locale: "de",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohamed Elkaza portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title.de}`,
    description: profile.introduction.de,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "x-build-commit": getBuildCommit(),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function GermanRootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="de">{children}</RootDocument>;
}
