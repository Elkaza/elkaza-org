// app/projects/page.tsx
import Link from "next/link";
import { Github, Globe, Code2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Projects & Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Selected academic and professional projects showcasing applied research,
          enterprise architecture, and cloud innovation.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-700">
                FLEX4RES – EU Research Project
              </h3>
              <Code2 className="text-blue-600" />
            </div>
            <p className="text-gray-700 mb-4">
              Contribution to Gaia-X and IDS federation prototypes, focusing on
              data-sharing governance and interoperability across energy domains.
            </p>
            <a
              href="https://github.com/flex4res"
              target="_blank"
              className="inline-flex items-center text-blue-700 hover:underline font-medium"
            >
              <Github className="w-4 h-4 mr-1" /> View Repository
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-700">
                Metadata Broker Integration
              </h3>
              <Globe className="text-blue-600" />
            </div>
            <p className="text-gray-700 mb-4">
              Deployment of IDS Metadata Broker and Omejdn-DAPS server on Linux.
              Configured security, certificates, and broker-DAPS trust federation.
            </p>
            <a
              href="https://github.com/flex4res/metadata-broker-open-core"
              target="_blank"
              className="inline-flex items-center text-blue-700 hover:underline font-medium"
            >
              <Github className="w-4 h-4 mr-1" /> View Repository
            </a>
          </div>

          {/* Project 3 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-700">
                Digital Transformation & Change Management
              </h3>
              <Code2 className="text-blue-600" />
            </div>
            <p className="text-gray-700 mb-4">
              Master’s thesis on mapping enterprise change management practices in Austria,
              creating a method engineering metamodel for enterprise coherence.
            </p>
            <Link
              href="/documents/thesis.pdf"
              className="inline-flex items-center text-blue-700 hover:underline font-medium"
            >
              <Globe className="w-4 h-4 mr-1" /> View Paper
            </Link>
          </div>

          {/* Project 4 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-700">
                Exoscale SDK Automation
              </h3>
              <Code2 className="text-blue-600" />
            </div>
            <p className="text-gray-700 mb-4">
              Contributed to Terraform provider updates, Redis configuration, and SDK release
              automation within Exoscale’s open-source infrastructure tooling.
            </p>
            <a
              href="https://github.com/exoscale"
              target="_blank"
              className="inline-flex items-center text-blue-700 hover:underline font-medium"
            >
              <Github className="w-4 h-4 mr-1" /> View Code
            </a>
          </div>

          {/* Project 5 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-700">Flex4Res AI Analyzer</h3>
              <Code2 className="text-blue-600" />
            </div>
            <p className="text-gray-700 mb-4">
              GitHub Action based Gemini AI analyzer classifies EU tenders using NLP,
              automating keyword clustering for Exoscale partners.
            </p>
            <a
              href="https://github.com/Elkaza/tender-opportunities-hunter"
              target="_blank"
              className="inline-flex items-center text-blue-700 hover:underline font-medium"
            >
              <Github className="w-4 h-4 mr-1" /> View Repo
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-4">Want to collaborate?</h2>
        <p className="text-gray-700 mb-6">
          I’m open to research collaborations, cloud engineering projects,
          and enterprise consulting opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
