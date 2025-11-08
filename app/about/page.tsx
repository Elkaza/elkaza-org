// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’m passionate about bridging academic research, enterprise systems,
          and digital innovation. Elkaza.org reflects my journey at the
          intersection of <strong>technology, transformation, and teaching</strong>.
        </p>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Academic & Professional Background
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              With a foundation in <strong>Business Informatics</strong> and
              extensive experience in <strong>Enterprise Architecture</strong>,
              IT Consulting, and <strong>Digital Transformation</strong>,
              I work on aligning organizations’ strategy, structure, and
              technology for lasting impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My work spans academic research, enterprise modeling, and
              innovation-driven consulting — bringing together structure,
              agility, and clarity to complex IT landscapes.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile-photo.jpg"
              alt="Elkaza Portrait"
              className="rounded-2xl shadow-md w-64 h-64 object-cover border"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Mission & Vision</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          My mission is to drive forward digital transformation through
          research, education, and enterprise innovation.  
          I believe in sustainable, human-centered technology and the power of
          system thinking to create coherence across people, processes, and IT.
        </p>
      </section>
    </main>
  );
}
