// app/research/page.tsx
import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Research & Publications</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My academic work explores the intersection of <strong>Digital Transformation</strong>, 
          <strong> Enterprise Architecture</strong>, and <strong>Change Management</strong>.
        </p>
      </section>

      {/* RESEARCH SUMMARY */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">
          Current Research Focus
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          I investigate how organizations can achieve <strong>enterprise coherence</strong> —
          aligning strategy, structure, and IT systems — through integrated methods and digital governance frameworks.
          My work applies systems thinking and model-driven analysis to enhance organizational agility and innovation.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This research contributes to both academic understanding and practical frameworks 
          for managing complex enterprise transformations in dynamic environments.
        </p>
      </section>

      {/* PUBLICATIONS SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Selected Works</h2>

          <div className="space-y-8">
            {/* Example 1 */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold text-blue-700">
                Master’s Thesis: Digital Transformation & Change Management
              </h3>
              <p className="text-gray-700 mb-2">
                A study of methods and frameworks for organizational coherence in enterprise transformation.  
                Conducted at <strong>TU Wien</strong>, integrating qualitative interviews and method engineering.
              </p>
              <Link
                href="/documents/thesis.pdf"
                className="text-blue-700 font-medium hover:underline"
              >
                View Thesis
              </Link>
            </div>

            {/* Example 2 */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold text-blue-700">
                Conference Paper: Enterprise Coherence in Practice (2024)
              </h3>
              <p className="text-gray-700 mb-2">
                Presented a structured approach for integrating enterprise modeling and digital governance 
                practices in Austrian organizations.
              </p>
              <a
                href="https://doi.org/example"
                className="text-blue-700 font-medium hover:underline"
              >
                Read Abstract
              </a>
            </div>

            {/* Example 3 */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Ongoing Research: AI-Driven Transformation Models
              </h3>
              <p className="text-gray-700">
                Developing a framework for applying generative AI tools in enterprise architecture 
                and knowledge management to support adaptive organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Collaboration & Research Exchange</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          I’m always open to collaboration on topics related to enterprise transformation, 
          digital innovation, and applied AI in organizational contexts.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
