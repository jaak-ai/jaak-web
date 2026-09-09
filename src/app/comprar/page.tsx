import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAutoservicioCatalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Comprar JAAK — Elige cómo contratar tus servicios",
  description:
    "Elige la forma de comprar que se ajusta a tu operación: autoservicio estándar, paquetes Enterprise de alto volumen con pago anual, o un plan a la medida con nuestro equipo de ventas.",
  alternates: { canonical: "/comprar" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/comprar",
    siteName: "JAAK",
    title: "Comprar JAAK — Elige cómo contratar tus servicios",
    description:
      "Autoservicio estándar, Enterprise de alto volumen o un plan a la medida. Elige el camino que se ajusta a tu operación.",
    images: [{ url: "/images/logos/jaak-logo-azul.png", width: 800, height: 400, alt: "Comprar JAAK" }],
  },
};

const BASE = "https://jaak.ai";
const NAVY = "#212A45";
const TEAL = "#2DB6C1";
const TEAL_DARK = "#25969f";
const GOLD = "#C9A227";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Comprar", item: `${BASE}/comprar` },
  ],
};

type Opcion = {
  id: string;
  eyebrow: string;
  titulo: string;
  descripcion: string;
  bullets: string[];
  ctaLabel: string;
  href: string;
  accent: string;
  destacado?: boolean;
  icon: React.ReactNode;
};

const IconRayo = (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z" />
);
const IconEstrella = (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 21l1.1-6.5L2.6 9.8l6.5-.9L12 3z" />
);
const IconEquipo = (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-1a4 4 0 00-4-4h-1m-6 5H2v-1a4 4 0 014-4h4a4 4 0 014 4v1zm-2-9a3 3 0 11-6 0 3 3 0 016 0zm8-1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
);

export default async function ComprarPage() {
  // Data-driven (AUTO-7/AUTO-9): la tarjeta de Enterprise self-service solo tiene
  // sentido si el catálogo ya expone SKUs `segment:"enterprise"`. Si no hay, ese
  // caso se pliega en "A la medida / ventas" y no se enruta a una página vacía.
  const { productos: enterprise } = await getAutoservicioCatalog("enterprise");
  const hayEnterprise = enterprise.length > 0;

  const opciones: Opcion[] = [
    {
      id: "autoservicio",
      eyebrow: "Self-service",
      titulo: "Autoservicio",
      descripcion:
        "Arma tu paquete de KYC, firma electrónica, validaciones y OCR. Paga en línea y actívalo al instante, sin vendedores.",
      bullets: ["Paquetes estándar", "Pago único por paquete", "Activación inmediata", "Sin contratos"],
      ctaLabel: "Explorar el catálogo",
      href: "/autoservicio",
      accent: TEAL,
      destacado: true,
      icon: IconRayo,
    },
    ...(hayEnterprise
      ? [
          {
            id: "enterprise",
            eyebrow: "Self-service · Alto volumen",
            titulo: "Enterprise",
            descripcion:
              "Los mismos productos, empaquetados para operaciones de alto volumen con pago anual y más consumo incluido.",
            bullets: ["Volumen alto incluido", "Pago anual", "Activación inmediata"],
            ctaLabel: "Ver paquetes Enterprise",
            href: "/autoservicio-enterprise",
            accent: GOLD,
            icon: IconEstrella,
          } as Opcion,
        ]
      : []),
    {
      id: "ventas",
      eyebrow: "Asistido",
      titulo: "A la medida",
      descripcion: hayEnterprise
        ? "Volúmenes especiales, esquemas de alianza o necesidades fuera del catálogo. Te acompaña un especialista."
        : "¿Alto volumen, Enterprise o un esquema de alianza? Nuestro equipo diseña un plan a la medida de tu operación.",
      bullets: ["Volumen a la medida", "Precio negociado", "Onboarding asistido"],
      ctaLabel: "Hablar con ventas",
      href: "/contacto",
      accent: NAVY,
      icon: IconEquipo,
    },
  ];

  const cols = opciones.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 lg:max-w-3xl lg:mx-auto";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* ─── Encabezado ───────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[150px] pb-12"
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
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
              style={{ background: "rgba(45,182,193,0.12)", border: "1px solid rgba(45,182,193,0.35)", color: "#7FE0E8" }}
            >
              Comprar JAAK
            </span>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl">
              Elige cómo quieres comprar
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              El mismo catálogo de identidad, firma y validaciones, con el empaque que se ajusta a tu operación.
              Elige tu camino y empieza en minutos.
            </p>
          </div>
        </section>

        {/* ─── Opciones ─────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${cols}`}>
              {opciones.map((o) => (
                <div
                  key={o.id}
                  className="relative flex h-full flex-col rounded-3xl border bg-white p-7 transition-shadow hover:shadow-[0_12px_40px_rgba(28,36,64,0.10)]"
                  style={{ borderColor: o.destacado ? o.accent : "#E6E8EF" }}
                >
                  {o.destacado && (
                    <span
                      className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold text-white"
                      style={{ background: o.accent }}
                    >
                      Más popular
                    </span>
                  )}
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `${o.accent}14`, color: o.accent }}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {o.icon}
                    </svg>
                  </span>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#94A3B8" }}>
                    {o.eyebrow}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    {o.titulo}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "#64748B" }}>
                    {o.descripcion}
                  </p>
                  <ul className="mt-5 grow space-y-2">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13.5px]" style={{ color: "#4A5568" }}>
                        <svg className="mt-[3px] h-3.5 w-3.5 flex-shrink-0" style={{ color: o.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={o.href}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold transition-colors"
                    style={o.destacado ? { background: o.accent, color: "#fff" } : { border: "1px solid #D8DCE6", color: NAVY }}
                  >
                    {o.ctaLabel}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* Nota de ayuda para dudas de elección */}
            <p className="mt-10 text-center text-[13.5px]" style={{ color: "#64748B" }}>
              ¿No sabes cuál elegir? Empieza por el{" "}
              <Link href="/autoservicio" className="font-semibold" style={{ color: TEAL_DARK }}>
                autoservicio
              </Link>{" "}
              o{" "}
              <Link href="/precios" className="font-semibold" style={{ color: TEAL_DARK }}>
                compara todas las modalidades
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
