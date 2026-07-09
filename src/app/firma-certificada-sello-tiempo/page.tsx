import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceFlow from "@/components/EvidenceFlow";

export const metadata: Metadata = {
  title: "Firma certificada con sello de tiempo y NOM-151 | JAAK",
  description:
    "Agrega sello digital de tiempo, hash, NOM-151 y expediente auditable a tus documentos firmados digitalmente con JAAK.",
  keywords:
    "sello de tiempo firma electrónica, firma certificada México, timestamp documento digital, hash SHA-256 firma, NOM-151 sello de tiempo, expediente auditable firma electrónica",
  openGraph: {
    title: "Firma certificada con sello de tiempo y NOM-151 | JAAK",
    description:
      "Convierte cada firma en evidencia verificable: fecha, hora, integridad, trazabilidad y conservación del documento.",
    url: "https://jaak.ai/firma-certificada-sello-tiempo",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-certificada-sello-tiempo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre sello de tiempo y NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sello de tiempo registra una fecha y hora confiable asociada a un documento o evento. NOM-151 agrega una capa de conservación e integridad del mensaje de datos conforme al marco mexicano.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué recibo en el expediente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un expediente auditable con documento firmado, hash, fecha, hora, bitácora, metadatos y las evidencias configuradas según el flujo.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Firma Certificada con Sellos de Tiempo", item: "https://jaak.ai/firma-certificada-sello-tiempo" },
  ],
};

export default function FirmaSelloTiempoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section
          id="sello-tiempo"
          className="pt-32 pb-20"
          style={{ background: "linear-gradient(135deg, #071426 0%, #0A1628 100%)" }}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Navegación">
              <Link href="/firma-electronica" className="hover:text-[#2DB6C1] transition-colors">
                Firma Electrónica
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-gray-400">Firma Certificada con Sellos de Tiempo</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#212A45" }}
            >
              Nivel certificado · Evidencia temporal
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma certificada con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #212A45, #2DB6C1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sello de tiempo
              </span>{" "}
              y expediente auditable
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              Convierte cada firma en evidencia verificable: fecha, hora, integridad, trazabilidad y conservación del
              documento en un solo expediente digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#212A45", boxShadow: "0 0 25px rgba(245,158,11,0.3)" }}
              >
                Activar sello de tiempo
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

        {/* Qué es sello de tiempo / NOM-151 */}
        <section className="py-20" style={{ background: "#0E1133" }} aria-labelledby="que-es-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="que-es-heading" className="text-2xl font-black text-white mb-4">
                  ¿Qué es un sello digital de tiempo?
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Un <strong className="text-gray-200">sello de tiempo</strong> asocia una fecha y hora confiable a un
                  documento o evento. Ayuda a probar cuándo existía un documento o cuándo ocurrió un evento de firma,
                  sin depender del reloj interno de un sistema.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Es el primer nivel de evidencia temporal: útil cuando necesitas fecha cierta, pero no
                  necesariamente el nivel de conservación e integridad más alto disponible.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-4">¿Qué es una constancia NOM-151?</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  La <strong className="text-gray-200">NOM-151-SCFI-2016</strong> refuerza la conservación e
                  integridad del mensaje de datos conforme al marco mexicano. Vincula el hash del documento a un
                  sello de tiempo y lo respalda como evidencia frente a auditorías o disputas.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Diferencia clave:</strong> el sello de tiempo registra cuándo
                  ocurrió algo; NOM-151 fortalece además que el documento no cambió después de firmado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flujo visual */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="flujo-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="flujo-heading" className="text-2xl font-black text-white mb-4 text-center">
              Cómo funciona en JAAK
            </h2>
            <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-10">
              Un sello de tiempo ayuda a probar cuándo existía un documento o cuándo ocurrió un evento de firma.
              NOM-151 refuerza la conservación e integridad del mensaje de datos conforme al marco mexicano. En JAAK
              puedes integrar estas capas dentro de un expediente auditable.
            </p>
            <EvidenceFlow />
          </div>
        </section>

        {/* Qué contiene el expediente */}
        <section className="py-20" style={{ background: "#0E1133" }} aria-labelledby="expediente-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="expediente-heading" className="text-2xl font-black text-white mb-8 text-center">
              Qué contiene el expediente
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Documento firmado",
                "Hash del documento",
                "Fecha y hora de eventos",
                "Sello digital de tiempo",
                "Constancia NOM-151, cuando aplique",
                "Datos del firmante",
                "IP, dispositivo y metadatos",
                "Bitácora de eventos y expediente descargable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#212A45" }} aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de uso */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="usecases-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="usecases-heading" className="text-2xl font-black text-white mb-8 text-center">
              Casos de uso ideales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "✅", title: "Aprobaciones sensibles", desc: "Consentimientos y órdenes de servicio con fecha cierta." },
                { icon: "📝", title: "Consentimientos", desc: "Evidencia de aceptación con fecha y hora confiables." },
                { icon: "🚚", title: "Órdenes de servicio", desc: "Documentos operativos que requieren fecha cierta." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-2xl mb-3 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: "#0E1133" }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-2xl font-black text-white mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "¿Qué diferencia hay entre sello de tiempo y NOM-151?",
                  a: "El sello de tiempo registra una fecha y hora confiable asociada a un documento o evento. NOM-151 agrega una capa de conservación e integridad del mensaje de datos conforme al marco mexicano.",
                },
                {
                  q: "¿Qué recibo en el expediente?",
                  a: "Un expediente auditable con documento firmado, hash, fecha, hora, bitácora, metadatos y las evidencias configuradas según el flujo: NOM-151, biometría, KYC o e.firma, cuando aplique.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <h3 className="text-sm font-bold text-white mb-2">{item.q}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links + CTA */}
        <section className="py-16" style={{ background: "#0A1628" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm mb-6">¿Necesitas también identidad o e.firma? Explora:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { href: "/firma-electronica-nom-151", label: "Firma Digital NOM-151" },
                { href: "/firma-electronica-efirma", label: "e.firma SAT" },
                { href: "/firma-electronica-biometrica", label: "Firma Digital NOM-151 + Biometría" },
                { href: "/firma-electronica-kyc", label: "Firma Digital NOM-151 + KYC" },
                { href: "/firma-electronica", label: "← Hub principal" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#2DB6C1" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/autoservicio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
              style={{ background: "#212A45", boxShadow: "0 0 30px rgba(245,158,11,0.3)" }}
            >
              Activar Firma Certificada →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
