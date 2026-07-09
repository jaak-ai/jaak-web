import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoservicioVariantes from "@/components/autoservicio/AutoservicioVariantes";
import ComoFuncionaBanner from "@/components/autoservicio/ComoFuncionaBanner";
import { getPricingIndex } from "@/lib/pricing";
import { autoservicioBreadcrumbSchema, autoservicioProductsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Autoservicio — Compre y active servicios JAAK en minutos",
  description:
    "Compre KYC, firma electrónica NOM-151, validaciones INE/CURP y OCR en línea. Arme su paquete, pague seguro y active al instante. Sin vendedores, sin esperas.",
  alternates: { canonical: "/autoservicio" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/autoservicio",
    siteName: "JAAK",
    title: "Autoservicio JAAK — Compre y active sus servicios en minutos",
    description:
      "Arme su paquete de KYC, firma electrónica, validaciones y OCR. Pague en línea y actívelo al instante, sin vendedores ni esperas.",
    images: [{ url: "/images/logos/jaak-logo-azul.png", width: 800, height: 400, alt: "Autoservicio JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoservicio JAAK — Compre y active sus servicios en minutos",
    description: "Arme su paquete de KYC, firma electrónica, validaciones y OCR. Pague en línea y actívelo al instante.",
    images: ["/images/logos/jaak-logo-azul.png"],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
};

const TEAL = "#2DB6C1";

export default async function AutoservicioPage() {
  // IDs de pricing reales (por producto+tier) para hidratar el checkout.
  const pricingIndex = await getPricingIndex();

  return (
    <>
      {/* Structured Data (JSON-LD) — Breadcrumb + catálogo de productos (Product/Offer) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            autoservicioBreadcrumbSchema,
            autoservicioProductsSchema,
          ]),
        }}
      />

      <Header />
      <main>
        {/* ─── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[150px] pb-10 lg:pb-12"
          style={{ background: "linear-gradient(135deg, #0E1133 0%, #1A2142 55%, #212A45 100%)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                style={{ background: "rgba(45,182,193,0.12)", border: "1px solid rgba(45,182,193,0.35)", color: "#7FE0E8" }}
              >
                Autoservicio JAAK
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl">
                Compre y active sus servicios{" "}
                <span style={{ color: "#2DB6C1" }}>
                  en minutos
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Arme su paquete combinando KYC, firma electrónica, validaciones y OCR. Pague en línea con seguridad
                y empiece a operar de inmediato. Sin vendedores, sin esperas.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {["Activación inmediata", "Pago seguro con Stripe", "Selección múltiple", "Sin contratos"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg className="h-4 w-4" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Cómo funciona: banner + modal con el detalle completo ───── */}
        <ComoFuncionaBanner />

        {/* ─── Experiencia: agregar productos (Catálogo / Guía) ─────────── */}
        <AutoservicioVariantes pricingIndex={pricingIndex} />

        {/* ─── Cierre: ¿necesita más que autoservicio? → /precios ─────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              className="flex flex-col items-start justify-between gap-6 rounded-3xl border p-8 lg:flex-row lg:items-center lg:p-10"
              style={{ background: "#FAFBFC", borderColor: "#E6E8EF" }}
            >
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold tracking-tight lg:text-2xl" style={{ color: "#212A45" }}>
                  ¿Necesita más que el autoservicio?
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#64748B" }}>
                  Para volúmenes altos, planes Enterprise o esquemas de alianza, revise todas las modalidades y encuentre la que se ajusta a su operación.
                </p>
              </div>
              <Link
                href="/precios"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-colors"
                style={{ background: TEAL }}
              >
                Ver todas las modalidades
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
