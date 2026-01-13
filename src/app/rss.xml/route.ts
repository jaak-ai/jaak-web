import { blogPosts } from "@/lib/blog";

const SITE_URL = "https://jaak.ai";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateRssXml(): string {
  const items = blogPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog JAAK</title>
    <link>${SITE_URL}/blog</link>
    <description>Artículos sobre KYC, verificación de identidad, cumplimiento regulatorio y las últimas tendencias en seguridad biométrica para el sector financiero mexicano.</description>
    <language>es-MX</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/images/logos/jaak-logo-azul.png</url>
      <title>Blog JAAK</title>
      <link>${SITE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>`;
}

export async function GET() {
  const xml = generateRssXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
