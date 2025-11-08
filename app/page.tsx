// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
          Welcome to <span className="text-blue-700">Elkaza.org</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Exploring the intersection of <strong>Digital Transformation</strong>,
          <strong> Enterprise Architecture</strong>, and
          <strong> Artificial Intelligence</strong> — bridging research and
          real-world innovation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Professional Focus</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          As a technology professional and researcher, I focus on developing
          sustainable IT systems and frameworks that enable organizations to
          adapt and thrive in the digital era.
        </p>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-700">
              Research & Innovation
            </h3>
            <p>
              Exploring AI, systems modeling, and enterprise coherence to align
              technology and strategy.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-700">
              Open Source Projects
            </h3>
            <p>
              Developing open, collaborative solutions in cloud architecture,
              data ecosystems, and modeling tools.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-700">
              Teaching & Mentorship
            </h3>
            <p>
              Sharing knowledge in enterprise architecture, project management,
              and innovation frameworks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
