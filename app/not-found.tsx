import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800">Back to home</Link>
      </div>
    </main>
  );
}

