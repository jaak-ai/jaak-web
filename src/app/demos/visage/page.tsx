import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Demo Visage | JAAK",
  description:
    "Prueba en vivo el web component @jaak.ai/visage: detección facial biométrica y captura de video en el navegador.",
};

async function getLatestVersion(): Promise<string | null> {
  try {
    const res = await fetch("https://registry.npmjs.org/@jaak.ai/visage", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { "dist-tags"?: { latest?: string } };
    return data["dist-tags"]?.latest ?? null;
  } catch {
    return null;
  }
}

export default async function VisageDemoPage() {
  const version = await getLatestVersion();
  const iframeSrc = version
    ? `/demos/visage/index.html?version=${version}`
    : "/demos/visage/index.html";

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <nav className="text-sm text-gray-500">
              <Link href="/demos" className="hover:text-[#0066ff]">
                Probar
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Visage</span>
            </nav>
            <div className="text-xs font-mono text-gray-400">
              @jaak.ai/visage{version ? `@${version}` : ""}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src={iframeSrc}
              title="Demo Jaak Visage"
              className="w-full block"
              style={{ height: "calc(100vh - 180px)", minHeight: 720 }}
              allow="camera; microphone; fullscreen"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
