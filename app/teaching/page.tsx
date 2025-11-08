// app/teaching/page.tsx
import Link from "next/link";
import { GraduationCap, Network, ShieldCheck, Lightbulb, Presentation } from "lucide-react";

export default function TeachingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Teaching & Knowledge Sharing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building digital, secure, and future-oriented knowledge — connecting academia, technology, and real-world innovation.
        </p>
      </section>

      {/* TEACHING CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <Presentation className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Enterprise Architecture & Modeling
            </h3>
            <p className="text-gray-700 mb-4">
              Teaching modern enterprise modeling languages and tools such as ArchiMate, UML, and BPMN,
              emphasizing alignment between business and IT using ADOIT and SparxSystems.
            </p>
            <Link
              href="https://www.boc-group.com/products/adoit/"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Learn more about ADOIT
            </Link>
          </div>

          {/* Course 2 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <Network className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Digital Transformation & Change Management
            </h3>
            <p className="text-gray-700 mb-4">
              Guiding students and professionals through frameworks like ADKAR and Kotter’s model,
              with real project examples from TU Wien and corporate consulting practice.
            </p>
            <Link
              href="/documents/thesis.pdf"
              className="text-blue-700 font-medium hover:underline"
            >
              View related research
            </Link>
          </div>

          {/* Course 3 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <GraduationCap className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Project Management (IPMA Level D)
            </h3>
            <p className="text-gray-700 mb-4">
              Teaching the principles of project governance, stakeholder management, and agile
              implementation in alignment with IPMA ICB4 standards and digital PM tools.
            </p>
            <Link
              href="https://www.ipma.world/"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Explore IPMA Standards
            </Link>
          </div>

          {/* Course 4 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <Lightbulb className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Innovation & Emerging Technologies
            </h3>
            <p className="text-gray-700 mb-4">
              Integrating AI (Gemini, LLMs) and Internet of Things (IoT) use cases into modern
              enterprise systems — linking data-driven innovation with sustainability and scalability.
            </p>
            <Link
              href="https://ai.google.dev"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Learn more about Gemini AI
            </Link>
          </div>

          {/* Course 5 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Information Security Fundamentals
            </h3>
            <p className="text-gray-700 mb-4">
              Introducing cybersecurity standards, network defense, and risk management principles —
              covering ISO 27001, OWASP Top 10, and secure system design practices.  
              *(New teaching module in development for 2026.)*
            </p>
            <Link
              href="https://www.iso.org/isoiec-27001-information-security.html"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Learn about ISO 27001
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-4">Collaborate on Education & Research</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Open for joint academic projects, workshops, and innovation labs in digital transformation,
          enterprise architecture, and information security education.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
