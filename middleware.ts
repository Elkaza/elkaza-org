import { NextResponse, type NextRequest } from "next/server";

function nonce(size = 16) {
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Buffer.from(bytes).toString("base64");
}

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  const n = nonce();
  res.headers.set("x-nonce", n);

  // Baseline CSP with nonce; keeps 'unsafe-inline' for compatibility during iteration.
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: https:",
    `style-src 'self' 'unsafe-inline' 'nonce-${n}'`,
    `script-src 'self' 'unsafe-inline' 'nonce-${n}' 'strict-dynamic'`,
    "connect-src 'self' https://generativelanguage.googleapis.com",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
