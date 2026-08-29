import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoservicioVariantes from "@/components/autoservicio/AutoservicioVariantes";
import ComoFuncionaBanner from "@/components/autoservicio/ComoFuncionaBanner";
import { getAutoservicioCatalog } from "@/lib/catalog";
import {
  enterpriseBreadcrumbSchema,
  enterpriseFaqSchema,
  buildEnterpriseProductsSchema,
  ENTERPRISE_FAQ,
} from "./schema";

export const metadata: Metadata = {
  title: "Autoservicio Enterprise — Alto volumen con pago anual | JAAK",
  description:
    "Paquetes Enterprise de KYC, firma electrónica NOM-151, validaciones y OCR para operaciones de alto volumen. Pago anual, activación inmediata y compra en línea sin vendedores.",
  alternates: { canonical: "/autoservicio-enterprise" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/autoservicio-enterprise",
    siteName: "JAAK",
    title: "Autoservicio Enterprise JAAK — Alto volumen con pago anual",
    description:
      "Paquetes Enterprise de KYC, firma electrónica, validaciones y OCR para alto volumen. Pago anual, activación inmediata.",
    images: [{ url: "/images/logos/jaak-logo-azul.png", width: 800, height: 400, alt: "Autoservicio Enterprise JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoservicio Enterprise JAAK — Alto volumen con pago anual",
    description: "Paquetes Enterprise de KYC, firma electrónica, validaciones y OCR para alto volumen. Pago anual.",
    images: ["/images/logos/jaak-logo-azul.png"],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
};

const NAVY = "#212A45";
const TEAL = "#2DB6C1";
const GOLD = "#C9A227";

export default async function AutoservicioEnterprisePage() {
  // Catálogo data-driven filtrado al segmento enterprise (AUTO-7/AUTO-8). Sin
  // SKUs enterprise cargados (AUTO-6 pendiente), `productos` viene vacío y la
  // página muestra su estado "próximamente" — nunca el catálogo autoservicio.
  const { productos, categorias, pricingIndex, productKeys, annualDiscountRate, hasMonthly } = await getAutoservicioCatalog("enterprise");
  const hayProductos = productos.length > 0;
  // AUTO-10: el descuento anual viene del catálogo (fuente única), NO hardcodeado.
  // Los precios de las tarjetas ya lo tienen aplicado; aquí solo lo comunicamos.
  const annualDiscountPct = annualDiscountRate > 0 ? Math.round(annualDiscountRate * 1000) / 10 : 0;

  return (
    <>
      {/* Structured Data (JSON-LD) — Breadcrumb + FAQ + catálogo (solo si hay) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              enterpriseBreadcrumbSchema,
              enterpriseFaqSchema,
              hayProductos ? buildEnterpriseProductsSchema(productos, categorias) : null,
            ].filter(Boolean)
          ),
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
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.4)", color: "#E7C65A" }}
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l2.5 5L13 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L5 3z" /></svg>
                Autoservicio Enterprise
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl">
                Alto volumen,{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(90deg, #E7C65A, #C9A227)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  precio anual
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Los mismos productos JAAK que ya conoces —KYC, firma electrónica, validaciones y OCR— empaquetados
                para operaciones de alto volumen: más consumo incluido, pago anual y activación inmediata.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {["Volumen alto incluido", "Pago anual", "Activación inmediata", "Pago seguro con Stripe"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg className="h-4 w-4" style={{ color: GOLD }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </li>
                ))}
              </ul>

              {/* Toggle anual/mensual del hero (presentacional). El toggle FUNCIONAL
                  que recalcula precios vive con el catálogo (AutoservicioVariantes),
                  que solo se renderiza cuando hay SKUs. Aquí comunicamos el esquema:
                  si algún SKU permite mensual (AUTO-14) invitamos a elegir abajo; si
                  no, "Mensual — Próximamente". Sin catálogo cargado, sigue anual. */}
              <div className="mt-9 inline-flex items-center gap-1 rounded-xl p-1" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="rounded-lg px-4 py-2 text-[13px] font-semibold text-white" style={{ background: GOLD, color: "#1A1400" }}>
                  Anual
                </span>
                {hasMonthly ? (
                  <span className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.72)" }}>
                    Mensual
                    <span className="rounded-full px-1.5 py-0.5 text-[10px] font-bold" style={{ background: "rgba(45,182,193,0.22)", color: "#8FE3EA" }}>Disponible</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Mensual
                    <span className="rounded-full px-1.5 py-0.5 text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>Próximamente</span>
                  </span>
                )}
              </div>
              {hasMonthly && (
                <p className="mt-2 text-[12.5px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Elige Anual o Mensual en el catálogo — los precios se ajustan a la cadencia.
                </p>
              )}

              {/* AUTO-10: descuento anual (del catálogo, no hardcodeado). Los precios
                  mostrados ya lo incluyen. */}
              {annualDiscountPct > 0 && (
                <p className="mt-3 flex items-center gap-2 text-[13px] font-semibold" style={{ color: "#E7C65A" }}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Precios con {annualDiscountPct}% de descuento por pago anual ya incluido
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ─── Cómo funciona: banner + modal con el detalle completo ───── */}
        <ComoFuncionaBanner />

        {/* ─── Experiencia (catálogo enterprise) o estado "próximamente" ── */}
        {hayProductos ? (
          <AutoservicioVariantes productos={productos} categorias={categorias} pricingIndex={pricingIndex} productKeys={productKeys} />
        ) : (
          <section className="bg-white">
            <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "rgba(201,162,39,0.1)", color: GOLD }}>
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 3l2.5 5L13 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L5 3z" /></svg>
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight lg:text-3xl" style={{ color: NAVY }}>
                Paquetes Enterprise en camino
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed" style={{ color: "#64748B" }}>
                Estamos afinando los paquetes de alto volumen con pago anual. Mientras tanto, arma tu compra en el
                autoservicio estándar o escríbenos y diseñamos un plan a la medida de tu operación.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/autoservicio"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-colors"
                  style={{ background: TEAL }}
                >
                  Ir al autoservicio estándar
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-[15px] font-semibold transition-colors"
                  style={{ borderColor: "#D8DCE6", color: NAVY }}
                >
                  Hablar con ventas
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ─── FAQ ──────────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl" style={{ color: NAVY }}>
              Preguntas frecuentes
            </h2>
            <div className="mt-6 divide-y rounded-2xl border" style={{ borderColor: "#E6E8EF" }}>
              {ENTERPRISE_FAQ.map((f) => (
                <details key={f.q} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold" style={{ color: NAVY }}>
                    {f.q}
                    <svg className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: "#94A3B8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#64748B" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cierre: volumen a la medida → ventas ─────────────────────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div
              className="flex flex-col items-start justify-between gap-6 rounded-3xl border p-8 lg:flex-row lg:items-center lg:p-10"
              style={{ background: "#FAFBFC", borderColor: "#E6E8EF" }}
            >
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold tracking-tight lg:text-2xl" style={{ color: NAVY }}>
                  ¿Necesitas un volumen aún mayor?
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#64748B" }}>
                  Para consumos fuera de los paquetes publicados o esquemas de alianza, nuestro equipo diseña un plan
                  a la medida de tu operación.
                </p>
              </div>
              <Link
                href="/contacto"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-colors"
                style={{ background: NAVY }}
              >
                Hablar con ventas
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
