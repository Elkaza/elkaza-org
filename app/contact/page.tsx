// app/contact/page.tsx
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let’s connect — whether for research collaborations, consulting opportunities, or academic exchange.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
        <div>
          <Mail className="mx-auto w-8 h-8 text-blue-700 mb-2" />
          <a
            href="mailto:contact@elkaza.org"
            className="text-blue-700 font-medium hover:underline"
          >
            contact@elkaza.org
          </a>
          <p className="text-gray-600">For professional inquiries</p>
        </div>

        <div>
          <Linkedin className="mx-auto w-8 h-8 text-blue-700 mb-2" />
          <a
            href="https://www.linkedin.com/in/elkaza"
            target="_blank"
            className="text-blue-700 font-medium hover:underline"
          >
            linkedin.com/in/elkaza
          </a>
          <p className="text-gray-600">Connect professionally</p>
        </div>

        <div>
          <MapPin className="mx-auto w-8 h-8 text-blue-700 mb-2" />
          <p className="font-medium text-gray-800">Vienna, Austria</p>
          <p className="text-gray-600">Available for on-site & remote projects</p>
        </div>
      </section>

      {/* OPTIONAL CONTACT FORM (non-functional example) */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
