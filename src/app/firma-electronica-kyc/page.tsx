import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Firma Electrónica con KYC | Verificación de Identidad Completa México | JAAK",
  description:
    "Firma electrónica con KYC completo: OCR de INE/pasaporte, CURP en Renapo, biometría facial, listas PLD/OFAC/SAT y expediente digital auditable. Cumplimiento CNBV y LFPIORPI para instituciones financieras en México.",
  keywords:
    "firma electrónica KYC México, firma digital verificación identidad, firma con KYC biométrico, firma electrónica CNBV, firma digital LFPIORPI, firma con validación INE CURP México, firma electrónica cumplimiento PLD",
  openGraph: {
    title: "Firma Electrónica con KYC Completo | JAAK",
    description:
      "Firma + KYC: validación de INE/pasaporte, CURP, biometría, listas PLD/OFAC y expediente auditable. Full compliance para entidades financieras.",
    url: "https://jaak.ai/firma-electronica-kyc",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica-kyc",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/plataforma/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Firma + KYC", item: "https://jaak.ai/firma-electronica-kyc" },
  ],
};

export default function FirmaKYCPage() {
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
          id="kyc"
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #071020 0%, #071A14 100%)" }}
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "#10B981" }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Navegación">
              <Link href="/plataforma/firma-electronica" className="hover:text-[#1ECAD3] transition-colors">
                Firma Electrónica
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-gray-400">Firma + KYC Completo</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#34D399",
              }}
            >
              Full Compliance · CNBV · LFPIORPI · PLD
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma electrónica con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #10B981, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KYC completo
              </span>
              {" "}para entidades reguladas
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              La solución más robusta: verificación de identidad completa —{" "}
              <strong className="text-gray-200">INE/pasaporte, CURP, biometría, listas PLD/OFAC/SAT</strong> — integrada
              con la firma electrónica y NOM-151 en un solo expediente digital auditable.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#10B981", boxShadow: "0 0 25px rgba(16,185,129,0.3)" }}
              >
                Ver solución KYC
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-gray-400 transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Hablar con ventas
              </Link>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-3">
              {["CNBV", "LFPIORPI", "NOM-151", "PLD/FT", "OFAC", "SAT 69-B"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    color: "#34D399",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* KYC Flow */}
        <section className="py-20" style={{ background: "#070E1A" }} aria-labelledby="flow-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="flow-heading" className="text-2xl font-black text-white mb-4 text-center">
              El flujo completo de Firma + KYC
            </h2>
            <p className="text-gray-500 text-center text-sm mb-10 max-w-2xl mx-auto">
              Todo en un solo flujo para el firmante, menos de 5 minutos desde el inicio hasta el expediente generado.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "OCR del documento de identidad",
                  desc: "El firmante captura su INE o pasaporte. El motor OCR extrae y valida automáticamente: nombre, CURP, fecha de nacimiento, vigencia y número de documento.",
                  icon: "🪪",
                  color: "#10B981",
                },
                {
                  step: "02",
                  title: "Consulta en Renapo (CURP)",
                  desc: "Se valida el CURP extraído directamente contra la base de datos de Renapo en tiempo real. Confirma que la persona existe y sus datos coinciden.",
                  icon: "🏛",
                  color: "#1ECAD3",
                },
                {
                  step: "03",
                  title: "Biometría facial con liveness",
                  desc: "Reconocimiento facial del firmante comparado con la foto del documento de identidad. Incluye detección de vida para prevenir fraudes.",
                  icon: "🧬",
                  color: "#8B5CF6",
                },
                {
                  step: "04",
                  title: "Verificación en listas de control",
                  desc: "Consulta automática en listas PLD (LFPIORPI), OFAC, SAT 69-B y otras listas negras internacionales. Alertas configurables por umbral de riesgo.",
                  icon: "🔍",
                  color: "#F59E0B",
                },
                {
                  step: "05",
                  title: "Firma electrónica + NOM-151",
                  desc: "El firmante verifica y firma el documento. Se genera automáticamente el sello de tiempo NOM-151 certificado por un PSC autorizado.",
                  icon: "✍️",
                  color: "#10B981",
                },
                {
                  step: "06",
                  title: "Expediente digital auditable",
                  desc: "Se genera el expediente completo: documento firmado, evidencias de identidad, biometría, resultados de listas, sello NOM-151, log de actividad y metadata.",
                  icon: "📋",
                  color: "#34D399",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-5 p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                      style={{ background: item.color }}
                    >
                      {item.step}
                    </div>
                    {index < 5 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ background: `${item.color}33`, minHeight: "20px" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg" aria-hidden="true">{item.icon}</span>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory compliance */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="compliance-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="compliance-heading" className="text-2xl font-black text-white mb-8 text-center">
              Cumplimiento regulatorio incluido
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏛",
                  title: "CNBV",
                  desc: "Cumple con las Disposiciones de Carácter General en materia de PLD/FT para bancos y entidades financieras reguladas.",
                },
                {
                  icon: "📜",
                  title: "LFPIORPI",
                  desc: "Generamos el Expediente de Identificación del Cliente (EIC) requerido para Actividades Vulnerables bajo la ley.",
                },
                {
                  icon: "🔍",
                  title: "PLD y OFAC",
                  desc: "Verificación automática en listas de personas políticamente expuestas (PEPs), PLD nacional e internacional OFAC.",
                },
                {
                  icon: "📊",
                  title: "SAT 69-B",
                  desc: "Consulta en la lista del SAT de contribuyentes con operaciones inexistentes para prevenir fraude fiscal.",
                },
                {
                  icon: "⏱",
                  title: "NOM-151",
                  desc: "Sello de tiempo certificado incluido en cada firma. La integridad del expediente es verificable en cualquier momento.",
                },
                {
                  icon: "🛡️",
                  title: "ISO 27001 compatible",
                  desc: "Arquitectura de seguridad compatible con los requisitos de ISO 27001 y las mejores prácticas del sector financiero.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(16,185,129,0.04)",
                    border: "1px solid rgba(16,185,129,0.12)",
                  }}
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
              Explora otras opciones de firma electrónica:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { href: "/firma-electronica-biometrica", label: "Firma Biométrica" },
                { href: "/firma-electronica-nom-151", label: "Firma NOM-151" },
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                style={{ background: "#10B981", boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}
              >
                Ver solución KYC →
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#E2E8F0",
                }}
              >
                Hablar con ventas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
