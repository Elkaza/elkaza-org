import { NextResponse } from "next/server";

// In-memory rate limiter (per IP)
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQ = 20;
const hits = new Map<string, number[]>();

function allow(ip: string) {
  const now = Date.now();
  const arr = hits.get(ip) || [];
  const recent = arr.filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length <= MAX_REQ;
}

export async function POST(req: Request) {
  try {
    const API_KEY = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || "";
    if (!API_KEY) {
      return NextResponse.json({ error: "Missing GOOGLE_API_KEY (or GEMINI_API_KEY)" }, { status: 500 });
    }

    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "local";
    if (!allow(ip)) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    const body = await req.json().catch(() => ({} as any));
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
    if (!prompt) {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 10_000);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      signal: ac.signal,
    }).finally(() => clearTimeout(t));

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return NextResponse.json({ error: err?.error?.message || "Upstream error" }, { status: response.status });
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.error?.message ||
      "No response from Gemini.";

    return NextResponse.json({ reply: text });
  } catch (err: any) {
    const aborted = err?.name === "AbortError";
    console.error("Gemini API error:", err);
    return NextResponse.json({ error: aborted ? "Request timed out" : "Failed to call Gemini API" }, { status: 500 });
  }
}

