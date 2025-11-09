"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{error?.message || "Unexpected error"}</p>
          <div className="flex gap-3">
            <button onClick={reset} className="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800">Try again</button>
            <Link href="/" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Go home</Link>
          </div>
        </div>
      </body>
    </html>
  );
}

