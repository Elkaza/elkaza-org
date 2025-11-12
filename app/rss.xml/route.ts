import { NextResponse } from "next/server";

const site = "https://elkaza.org";

export async function GET() {
  const now = new Date().toUTCString();
  const items = [
    { url: `${site}/`, title: "Home" },
    { url: `${site}/about`, title: "About" },
    { url: `${site}/research`, title: "Research" },
    { url: `${site}/projects`, title: "Projects" },
    { url: `${site}/teaching`, title: "Teaching" },
    { url: `${site}/contact`, title: "Contact" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Elkaza.org</title>
    <link>${site}</link>
    <description>Digital Transformation & Research</description>
    <lastBuildDate>${now}</lastBuildDate>
    ${items
      .map(
        (i) => `
    <item>
      <title>${i.title}</title>
      <link>${i.url}</link>
      <guid>${i.url}</guid>
      <pubDate>${now}</pubDate>
    </item>`
      )
      .join("\n")}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

