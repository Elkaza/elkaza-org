// app/contact/page.tsx
import { Mail, Github, Linkedin, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether for academic collaboration, professional consulting, or technology partnerships —
          let’s connect and create meaningful digital solutions.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-10">
        {/* Academic / Research */}
        <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Academic & Research
          </h2>
          <p className="text-gray-700 mb-4">
            For collaborations, publications, or thesis-related discussions in
            <strong> digital transformation, enterprise architecture, and IoT systems</strong>.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <a
                href="mailto:contact@elkaza.org"
                className="hover:underline"
              >
                contact@elkaza.org
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-blue-600 w-5 h-5" />
              <a
                href="https://elkaza.org"
                target="_blank"
                className="hover:underline"
              >
                elkaza.org
              </a>
            </li>
          </ul>
        </div>

        {/* Consulting / Services */}
        <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Consulting & Digital Services
          </h2>
          <p className="text-gray-700 mb-4">
            For enterprise architecture, IT strategy, and secure digital transformation
            consulting via <strong>Elkaza.at</strong>.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <a
                href="mailto:office@elkaza.at"
                className="hover:underline"
              >
                office@elkaza.at
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-blue-600 w-5 h-5" />
              <a
                href="https://elkaza.at"
                target="_blank"
                className="hover:underline"
              >
                elkaza.at
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="text-center py-12 bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Connect on Professional Networks
        </h3>
        <div className="flex justify-center gap-8 text-gray-700">
          <a
            href="https://github.com/Elkaza"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/elkaza"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Elkaza. All rights reserved.
      </footer>
    </main>
  );
}
