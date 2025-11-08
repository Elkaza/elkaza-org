// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-32 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-700">Elkaza.org</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Exploring the intersection of digital transformation, enterprise architecture,
          and artificial intelligence — bridging research and real-world innovation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
