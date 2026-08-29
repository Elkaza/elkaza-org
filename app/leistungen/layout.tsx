import type { Metadata } from "next";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = createLocalizedMetadata({
    title: "Leistungen - Elkaza",
    description: "Geplante, klar begrenzte Assessments für IT & Security, Infrastruktur und Zugänge sowie dokumentierte Automatisierung.",
    path: "/leistungen",
});

export default function LeistungenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
