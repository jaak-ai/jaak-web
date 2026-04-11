import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Firma Electrónica Biométrica | Verificación Facial en México | JAAK",
  description:
    "Firma electrónica con reconocimiento facial biométrico y detección de vida (liveness). Verifica la identidad del firmante en tiempo real. NOM-151 incluida. Para onboarding digital, créditos y seguros en México.",
  keywords:
    "firma electrónica biométrica México, firma digital con reconocimiento facial, firma con verificación biométrica, firma electrónica con liveness, firma digital con identidad verificada México",
  openGraph: {
    title: "Firma Electrónica Biométrica | JAAK",
    description:
      "Reconocimiento facial con detección de vida + NOM-151. La identidad del firmante verificada en tiempo real.",
    url: "https://jaak.ai/firma-electronica-biometrica",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica-biometrica",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Firma Biométrica", item: "https://jaak.ai/firma-electronica-biometrica" },
  ],
};

export default function FirmaBiometricaPage() {
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
          id="biometria"
          className="pt-32 pb-20"
          style={{ background: "linear-gradient(135deg, #071020 0%, #130D2A 100%)" }}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Navegación">
              <Link href="/firma-electronica" className="hover:text-[#1ECAD3] transition-colors">
                Firma Electrónica
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-gray-400">Firma Biométrica</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "#A78BFA",
              }}
            >
              Nivel verificado · Biometría + NOM-151
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma electrónica con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                verificación biométrica
              </span>{" "}
              facial
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              El firmante verifica su identidad con{" "}
              <strong className="text-gray-200">reconocimiento facial en tiempo real</strong> y detección de vida antes de
              firmar. La evidencia biométrica queda registrada en el expediente junto con el sello NOM-151.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#8B5CF6", boxShadow: "0 0 25px rgba(139,92,246,0.3)" }}
              >
                Explorar solución
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-gray-400 transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Ver demo
              </Link>
            </div>
          </div>
        </section>

        {/* How biometrics work */}
        <section className="py-20" style={{ background: "#070E1A" }} aria-labelledby="biometria-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="biometria-heading" className="text-2xl font-black text-white mb-4 text-center">
              Cómo funciona la biometría en JAAK
            </h2>
            <p className="text-gray-500 text-center text-sm mb-10 max-w-2xl mx-auto">
              Todo el proceso ocurre en el navegador del firmante, sin instalar aplicaciones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: "📷",
                  title: "Captura de selfie en vivo",
                  desc: "El firmante abre la cámara del dispositivo. El sistema captura múltiples fotogramas para análisis.",
                  color: "#8B5CF6",
                },
                {
                  step: "02",
                  icon: "🧬",
                  title: "Análisis de liveness",
                  desc: "Detecta que la persona es real (parpadeo, movimiento ocular, profundidad 3D). Previene fraudes con fotos o videos.",
                  color: "#A78BFA",
                },
                {
                  step: "03",
                  icon: "🔗",
                  title: "Vinculación a la firma",
                  desc: "El vector biométrico se vincula al documento y se almacena cifrado en el expediente digital.",
                  color: "#1ECAD3",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${item.color}22`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-black px-2 py-1 rounded-full"
                      style={{ background: item.color + "22", color: item.color }}
                    >
                      {item.step}
                    </span>
                    <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="benefits-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="benefits-heading" className="text-2xl font-black text-white mb-8 text-center">
              ¿Qué incluye la Firma Biométrica?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: "🔒",
                  title: "Anti-spoofing avanzado",
                  desc: "Detección de intentos de fraude con fotografías, videos, pantallas y máscaras 3D impresas.",
                },
                {
                  icon: "⏱",
                  title: "NOM-151 incluida",
                  desc: "Cada firma incluye sello de tiempo certificado. No hay costo adicional por la certificación.",
                },
                {
                  icon: "📂",
                  title: "Expediente con evidencia",
                  desc: "El expediente incluye la foto frontal, frames del análisis de liveness y el log biométrico.",
                },
                {
                  icon: "📱",
                  title: "Flujo móvil optimizado",
                  desc: "El firmante solo necesita el navegador de su teléfono. El proceso toma menos de 2 minutos.",
                },
                {
                  icon: "⚖️",
                  title: "Validez probatoria reforzada",
                  desc: "La biometría hace prácticamente imposible alegar que alguien más firmó en nombre del titular.",
                },
                {
                  icon: "🔐",
                  title: "Datos cifrados y seguros",
                  desc: "El vector biométrico se almacena cifrado. Nunca se expone en texto claro ni se comparte.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
                    style={{ background: "rgba(139,92,246,0.1)" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links + CTA */}
        <section className="py-16" style={{ background: "#070E1A" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm mb-6">
              ¿Necesitas también validación de documentos de identidad y listas? Explora:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { href: "/firma-electronica-kyc", label: "Firma + KYC Completo" },
                { href: "/firma-electronica-nom-151", label: "Firma NOM-151" },
                { href: "/firma-electronica-simple", label: "Firma Simple" },
                { href: "/firma-electronica", label: "← Hub principal" },
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
              style={{ background: "#8B5CF6", boxShadow: "0 0 30px rgba(139,92,246,0.3)" }}
            >
              Explorar Firma Biométrica →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
