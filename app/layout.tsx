// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar"; // ✅ import your navbar
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elkaza | Digital Transformation & Research",
  description:
    "Official portfolio and research site of Elkaza – Digital Transformation, Enterprise Architecture, and IT Consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Footer */}
        <footer className="text-center py-6 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} Elkaza. Built with Next.js & TailwindCSS.
        </footer>
      </body>
    </html>
  );
}
