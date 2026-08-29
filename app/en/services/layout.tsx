import type { Metadata } from "next";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = createLocalizedMetadata({
    title: "Services - Elkaza",
    description: "Planned, bounded assessments for IT and security, infrastructure and access, plus documented automation.",
    path: "/en/services",
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
