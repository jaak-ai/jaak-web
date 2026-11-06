import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoservicioVariantes from "@/components/autoservicio/AutoservicioVariantes";
import ComoFuncionaBanner from "@/components/autoservicio/ComoFuncionaBanner";
import { getAutoservicioCatalog } from "@/lib/catalog";
import { AUTOSERVICIO_COPY } from "@/config/commercial-copy";
import WhiteLabelInfo from "@/components/WhiteLabelInfo";
import { buildAutoservicioMetadata } from "@/lib/autoservicioMetadata";
import { autoservicioBreadcrumbSchema, buildAutoservicioProductsSchema } from "./schema";

export const metadata = buildAutoservicioMetadata({
  title: "Autoservicio — Compra en línea y opera desde la plataforma web | JAAK",
  description:
    "Compra KYC, firma electrónica NOM-151, validaciones INE/CURP y OCR en línea y utilízalos desde la plataforma web de JAAK. Paquetes con vigencia de un año. Modalidad exclusivamente web: no incluye API ni SDK.",
  path: "/autoservicio",
  socialTitle: "Autoservicio JAAK — Compra en línea y opera desde la plataforma web",
  ogDescription:
    "Selecciona tus paquetes de KYC, firma electrónica, validaciones u OCR y utilízalos desde la plataforma web de JAAK, sin desarrollar una integración.",
  twitterDescription: "Compra paquetes de KYC, firma electrónica, validaciones y OCR y utilízalos desde la plataforma web de JAAK.",
  imageAlt: "Autoservicio JAAK",
});

const TEAL = "#2DB6C1";

export default async function AutoservicioPage() {
  // Catálogo data-driven (endpoint unificado): productos + categorías +
  // pricingIndex (IDs reales para el checkout) + productKeys, todo de una fuente.
  const { productos, categorias, pricingIndex, productKeys } = await getAutoservicioCatalog("autoservicio");

  return (
    <>
      {/* Structured Data (JSON-LD) — Breadcrumb + catálogo de productos (Product/Offer) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            autoservicioBreadcrumbSchema,
            buildAutoservicioProductsSchema(productos, categorias),
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
                JAAK Autoservicio: compra en línea y opera desde{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(90deg, #1ecad3, #655dc6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  nuestra plataforma web.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Selecciona tus paquetes de KYC, firma electrónica, validaciones u OCR y utiliza los servicios
                directamente desde JAAK, sin necesidad de desarrollar una integración. Los paquetes tienen una
                vigencia de un año.
              </p>
              <p
                className="mt-4 max-w-xl rounded-xl px-4 py-3 text-[13.5px] leading-relaxed"
                style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.28)", color: "rgba(255,255,255,0.82)" }}
              >
                <span className="font-semibold text-white">Nota: </span>
                {AUTOSERVICIO_COPY.notaCatalogo}{" "}
                <Link href="/contacto" className="font-semibold underline underline-offset-2" style={{ color: "#7FE0E8" }}>
                  Solicitar información de integración
                </Link>
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {["Uso desde la plataforma web", "Pago seguro con Stripe", "Selección múltiple", "Sin contratos"].map((t) => (
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

        {/* ─── White Label incluido (AUD-05): aviso corto; el detalle se abre en una ventana flotante ─── */}
        <WhiteLabelInfo variant="banner" />

        {/* ─── Experiencia: agregar productos (Catálogo / Guía) ─────────── */}
        <AutoservicioVariantes productos={productos} categorias={categorias} pricingIndex={pricingIndex} productKeys={productKeys} />

        {/* ─── Cierre: ¿necesitas más que autoservicio? → /precios ─────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              className="flex flex-col items-start justify-between gap-6 rounded-3xl border p-8 lg:flex-row lg:items-center lg:p-10"
              style={{ background: "#FAFBFC", borderColor: "#E6E8EF" }}
            >
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold tracking-tight lg:text-2xl" style={{ color: "#212A45" }}>
                  ¿Necesitas más que el autoservicio?
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#64748B" }}>
                  Para volúmenes altos, planes Enterprise o esquemas de alianza, revisa todas las modalidades y encuentra la que se ajusta a tu operación.
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
            <p className="mt-6 text-center text-sm lg:text-left" style={{ color: "#64748B" }}>
              ¿Ya eres cliente y necesitas ayuda?{" "}
              <Link href="/soporte/autoservicio" className="font-semibold underline underline-offset-4 hover:no-underline" style={{ color: "#212A45" }}>
                Visita el centro de soporte de Autoservicio
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
