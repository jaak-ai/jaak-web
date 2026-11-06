#!/usr/bin/env node
// AUD-SEO-01: inventario SEO de URLs (status, canonical, robots, title, description, JSON-LD, sitemap).
// Uso: BASE=http://localhost:3100 node scripts/seo-audit.mjs [salida.json]
import fs from "node:fs";

const BASE = process.env.BASE || "http://localhost:3100";
const SITE = "https://jaak.ai";
const manifest = JSON.parse(fs.readFileSync(".next/server/app-paths-manifest.json", "utf8"));
const staticRoutes = Object.keys(manifest)
  .filter((k) => k.endsWith("/page") && !k.includes("["))
  .map((k) => k.replace(/\/page$/, "") || "/");

const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
const sitemapPaths = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, "") || "/");
const sitemapSet = new Set(sitemapPaths);
const paths = [...new Set(["/", ...staticRoutes, ...sitemapPaths])].sort();

const pick = (re, html) => (html.match(re) || [])[1]?.trim() ?? "";
const rows = [];
for (const p of paths) {
  const res = await fetch(BASE + p, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : "";
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => {
    try {
      const j = JSON.parse(m[1]);
      return (Array.isArray(j) ? j : j["@graph"] || [j]).map((n) => n["@type"]).flat();
    } catch { return ["JSON-INVALIDO"]; }
  });
  rows.push({
    path: p,
    status: res.status,
    location: res.headers.get("location") || "",
    canonical: canonicals.join(" | "),
    robots: pick(/<meta name="robots" content="([^"]+)"/, html),
    title: pick(/<title>([^<]*)<\/title>/, html),
    description: pick(/<meta name="description" content="([^"]*)"/, html),
    h1: (html.match(/<h1/g) || []).length,
    jsonld: [...new Set(ld)].join(","),
    inSitemap: sitemapSet.has(p),
  });
}
fs.writeFileSync(process.argv[2] || "seo-audit.json", JSON.stringify(rows, null, 1));
const selfCanon = (r) => r.canonical === SITE + (r.path === "/" ? "" : r.path) || r.canonical === SITE + r.path + "/" ;
const bad = rows.filter((r) => r.status === 200 && !r.robots.includes("noindex") && !selfCanon(r));
console.log(`URLs: ${rows.length} | 200: ${rows.filter((r) => r.status === 200).length} | canonical no autorreferenciado (indexables): ${bad.length}`);
