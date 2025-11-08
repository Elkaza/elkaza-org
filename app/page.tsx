// app/page.tsx
import Link from "next/link";
import { Brain, Code, Server, GraduationCap, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Digital Transformation. <br /> IT Expertise. Shaping the Future.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Exploring the intersection of <strong>enterprise architecture</strong>,
          <strong> digital innovation</strong>, and <strong>artificial intelligence</strong> — bridging
          research and real-world implementation.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* QUICK NAVIGATION CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link
          href="/research"
          className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <Brain className="text-blue-700 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Research</h2>
          <p className="text-gray-600">
            Academic work on digital transformation, enterprise architecture, and change management.
          </p>
        </Link>

        <Link
          href="/projects"
          className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <Code className="text-blue-700 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Projects</h2>
          <p className="text-gray-600">
            IoT systems, cloud infrastructure, and applied technology experiments hosted on elkaza.org.
          </p>
        </Link>

        <Link
          href="/teaching"
          className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <GraduationCap className="text-blue-700 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Teaching</h2>
          <p className="text-gray-600">
            Educational materials and lectures on software engineering, systems design, and IT management.
          </p>
        </Link>

        <Link
          href="/about"
          className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <Server className="text-blue-700 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">About</h2>
          <p className="text-gray-600">
            Learn more about my background, career path, and motivation to integrate business and IT.
          </p>
        </Link>

        <Link
          href="/contact"
          className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <Mail className="text-blue-700 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact</h2>
          <p className="text-gray-600">
            Reach out for research collaboration, consulting services, or academic engagement.
          </p>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} Elkaza. Built with Next.js & TailwindCSS.
      </footer>
    </main>
  );
}
