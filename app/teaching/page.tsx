// app/teaching/page.tsx
import Link from "next/link";
import { BookOpen, GraduationCap, Presentation, Lightbulb } from "lucide-react";

export default function TeachingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Teaching & Learning</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sharing knowledge in digital transformation, enterprise systems, and applied AI —
          helping students and professionals build the future.
        </p>
      </section>

      {/* TEACHING CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <BookOpen className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Pharmacotherapy I (Clinical Pharmacy)</h3>
            <p className="text-gray-700 mb-4">
              Developed detailed lecture content on hypertension, ischemic heart disease, and renal disorders,
              using evidence-based ACC/AHA & ASHP guidelines.
            </p>
            <Link
              href="/documents/pharmacotherapy-outline.pdf"
              className="text-blue-700 font-medium hover:underline"
            >
              View Course Outline
            </Link>
          </div>

          {/* Course 2 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <Presentation className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Enterprise Architecture Workshop</h3>
            <p className="text-gray-700 mb-4">
              Conducted training on modeling languages (ArchiMate, UML) and EAM tools (ADOIT, SparxSystems)
              for IT students and consultants.
            </p>
            <Link
              href="https://www.adoit-community.com"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Workshop Resources
            </Link>
          </div>

          {/* Course 3 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <GraduationCap className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Project Management (IPMA Level D)</h3>
            <p className="text-gray-700 mb-4">
              Applied IPMA Standards in teaching structured project planning, stakeholder management,
              and digital transformation case studies from University of Graz.
            </p>
            <Link
              href="/documents/projectmanagement-course.pdf"
              className="text-blue-700 font-medium hover:underline"
            >
              Download Materials
            </Link>
          </div>

          {/* Course 4 */}
          <div className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <Lightbulb className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovation & AI Education</h3>
            <p className="text-gray-700 mb-4">
              Integrated Gemini and AI-driven tools into learning modules for innovation management
              and digital skills development in Austrian universities.
            </p>
            <Link
              href="https://ai.google.dev"
              target="_blank"
              className="text-blue-700 font-medium hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-4">Interested in Educational Collaboration?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          I collaborate with universities and institutions to develop curricula on digital transformation, AI ethics, and enterprise innovation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Contact for Collaboration
        </Link>
      </section>
    </main>
  );
}
