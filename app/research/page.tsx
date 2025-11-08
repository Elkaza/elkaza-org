// app/research/page.tsx
import Link from "next/link";
import { BookOpen, FileText, Network, Brain, Shield } from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Research & Publications</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bridging enterprise transformation, digital coherence, and intelligent systems — connecting 
          academic research with applied innovation.
        </p>
      </section>

      {/* MASTER THESIS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="flex-shrink-0">
            <BookOpen className="text-blue-600 w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">
              Master’s Thesis – TU Wien
            </h2>
            <h3 className="text-xl font-medium mb-2">
              <em>Digitale Transformation und Change Management</em>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This research explores how organizations can systematically manage digital transformation
              through a structured approach to change management.  
              It maps methods and practices used in Austrian enterprises, integrating insights from
              <strong> Enterprise Architecture Management (EAM)</strong>, 
              <strong> Change Management Frameworks (ADKAR, Kotter)</strong>, 
              and <strong> Generic Enterprise Architecture (GEA)</strong> concepts.  
              The thesis develops a **metamodel for enterprise coherence** to align strategy, process, and IT.
            </p>
            <Link
              href="/documents/thesis.pdf"
              className="inline-block mt-2 text-blue-700 font-medium hover:underline"
            >
              📄 Download Thesis (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* CURRENT & FUTURE RESEARCH */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8">Current & Future Research Directions</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
              <Network className="text-blue-600 mb-3 w-8 h-8" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Enterprise Architecture</h3>
              <p className="text-gray-700">
                Studying the evolution of architecture frameworks and model integration methods 
                (ArchiMate, TOGAF, GEA) to ensure organizational agility and coherence.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
              <Brain className="text-blue-600 mb-3 w-8 h-8" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">AI & Digital Transformation</h3>
              <p className="text-gray-700">
                Exploring how AI models (e.g., Gemini, LLMs) can enhance decision-making,
                process automation, and change impact assessment within enterprises.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
              <Shield className="text-blue-600 mb-3 w-8 h-8" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Cybersecurity & Governance</h3>
              <p className="text-gray-700">
                Integrating cybersecurity standards (ISO 27001, NIST, OWASP) into enterprise 
                architecture governance models — enabling resilience and trust by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS & COLLABORATION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Academic Output & Collaboration</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Open for collaboration on interdisciplinary research that links enterprise modeling,
          AI, and digital transformation practices.  
          Projects under the scope of TU Wien and FH Technikum Wien are aimed at 
          developing frameworks for sustainable, human-centered digitalization.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Contact for Research Collaboration
          </Link>
        </div>
      </section>
    </main>
  );
}
