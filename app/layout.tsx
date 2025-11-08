// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elkaza.org – Research & Digital Innovation",
  description: "Exploring the intersection of digital transformation, AI, and enterprise architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
