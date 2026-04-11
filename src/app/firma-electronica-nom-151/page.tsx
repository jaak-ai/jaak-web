import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Firma Electrónica NOM-151 | Sello de Tiempo Certificado México | JAAK",
  description:
    "Firma electrónica con sello de tiempo certificado NOM-151-SCFI-2016. Integridad del documento garantizada, válida ante CNBV, SAT y tribunales. Para contratos financieros y comerciales en México.",
  keywords:
    "firma electrónica NOM 151, NOM-151-SCFI-2016, sello de tiempo certificado México, firma digital con timestamp, firma electrónica válida CNBV, firma electrónica SAT México",
  openGraph: {
    title: "Firma Electrónica NOM-151 | JAAK",
    description:
      "Sello de tiempo certificado bajo NOM-151-SCFI-2016. Integridad criptográfica, válida ante CNBV, SAT y juzgados.",
    url: "https://jaak.ai/firma-electronica-nom-151",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica-nom-151",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/plataforma/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Firma NOM-151", item: "https://jaak.ai/firma-electronica-nom-151" },
  ],
};

export default function FirmaNom151Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section
          id="nom151"
          className="pt-32 pb-20"
          style={{ background: "linear-gradient(135deg, #071020 0%, #071A28 100%)" }}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Navegación">
              <Link href="/plataforma/firma-electronica" className="hover:text-[#1ECAD3] transition-colors">
                Firma Electrónica
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-gray-400">Firma NOM-151</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(30,202,211,0.1)",
                border: "1px solid rgba(30,202,211,0.25)",
                color: "#1ECAD3",
              }}
            >
              Nivel certificado · NOM-151-SCFI-2016
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma electrónica con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sello de tiempo NOM-151
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              Cada documento firmado recibe un sello de tiempo certificado por una{" "}
              <strong className="text-gray-200">Entidad Autorizada (PSC)</strong> bajo la norma NOM-151-SCFI-2016.
              Garantiza integridad criptográfica y fecha exacta. Válida ante CNBV, SAT y tribunales.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#1ECAD3", boxShadow: "0 0 25px rgba(30,202,211,0.3)" }}
              >
                Activar NOM-151
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-gray-400 transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Hablar con un experto
              </Link>
            </div>
          </div>
        </section>

        {/* What is NOM-151 */}
        <section className="py-20" style={{ background: "#070E1A" }} aria-labelledby="nom-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="nom-heading" className="text-2xl font-black text-white mb-4">
                  ¿Qué es la NOM-151?
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  La <strong className="text-gray-200">NOM-151-SCFI-2016</strong> (Norma Oficial Mexicana) establece los
                  requisitos técnicos y legales para la conservación de mensajes de datos y la digitalización de documentos
                  en México. Es emitida por la Secretaría de Economía.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Cuando una firma incluye certificación NOM-151, un{" "}
                  <strong className="text-gray-200">Prestador de Servicios de Certificación (PSC)</strong> autorizado emite
                  un sello de tiempo que: registra la fecha y hora exacta, vincula el hash SHA-256 del documento, y lo
                  almacena en una cadena verificable.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cualquier modificación posterior al documento invalida el hash y es inmediatamente detectable. Esto hace
                  que la firma sea prácticamente irrefutable en un proceso legal.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: "🔐",
                    title: "Hash SHA-256 del documento",
                    desc: "Huella criptográfica única. Cualquier modificación mínima invalida el hash.",
                  },
                  {
                    icon: "⏱",
                    title: "Timestamp certificado por PSC",
                    desc: "La fecha y hora están avaladas por una Entidad Autorizada, no por el sistema interno.",
                  },
                  {
                    icon: "⛓",
                    title: "Cadena de custodia verificable",
                    desc: "El sello está registrado en los sistemas de la SE, verificable en cualquier momento.",
                  },
                  {
                    icon: "📜",
                    title: "Validez ante autoridades",
                    desc: "Aceptada por CNBV, SAT, juzgados civiles y mercantiles en México.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(30,202,211,0.04)", border: "1px solid rgba(30,202,211,0.12)" }}
                  >
                    <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="usecases-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="usecases-heading" className="text-2xl font-black text-white mb-8 text-center">
              Casos de uso ideales para Firma NOM-151
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏦",
                  title: "Contratos financieros",
                  desc: "Créditos, pagarés, contratos de apertura de cuenta. Evidencia sólida para cumplimiento bancario.",
                },
                {
                  icon: "🏠",
                  title: "Contratos inmobiliarios",
                  desc: "Arrendamientos, promesas de compraventa, poderes notariales. Validez ante registros públicos.",
                },
                {
                  icon: "⚖️",
                  title: "Documentos legales",
                  desc: "Contratos mercantiles, acuerdos de accionistas, mandatos. Reconocimiento ante juzgados.",
                },
                {
                  icon: "📊",
                  title: "Contratos de servicios",
                  desc: "SLAs, contratos con proveedores, acuerdos de nivel de servicio. Fecha exacta garantizada.",
                },
                {
                  icon: "🚗",
                  title: "Contratos automotrices",
                  desc: "Leasing, arrendamiento puro, contratos de mantenimiento. Reducción del ciclo de cierre.",
                },
                {
                  icon: "📡",
                  title: "Contratos de telecom",
                  desc: "Alta de servicios, renovaciones, modificaciones de plan. Cumplimiento regulatorio IFT.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-2xl mb-3 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links + CTA */}
        <section className="py-16" style={{ background: "#070E1A" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm mb-6">
              ¿Necesitas también verificación de identidad? Explora:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { href: "/firma-electronica-biometrica", label: "Firma Biométrica" },
                { href: "/firma-electronica-kyc", label: "Firma + KYC" },
                { href: "/firma-electronica-simple", label: "Firma Simple" },
                { href: "/plataforma/firma-electronica", label: "← Hub principal" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#1ECAD3",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/autoservicio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
              style={{ background: "#1ECAD3", boxShadow: "0 0 30px rgba(30,202,211,0.3)" }}
            >
              Activar Firma NOM-151 →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
