import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Firma Electrónica Simple en México | Sin Fricción y Legal | JAAK",
  description:
    "Firma electrónica simple para acuerdos internos, NDAs y documentos de bajo riesgo. Implementación inmediata, sin instalación, con trazabilidad básica. Válida legalmente en México.",
  keywords:
    "firma electrónica simple México, firma digital simple, firmar documentos online rápido, firma electrónica sin verificación, firma digital para acuerdos internos",
  openGraph: {
    title: "Firma Electrónica Simple | JAAK",
    description:
      "La forma más rápida de obtener consentimiento digital. Sin verificación de identidad, sin fricción, con trazabilidad básica.",
    url: "https://jaak.ai/firma-electronica-simple",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica-simple",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/plataforma/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Firma Simple", item: "https://jaak.ai/firma-electronica-simple" },
  ],
};

export default function FirmaSimplePage() {
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
          className="pt-32 pb-20"
          style={{ background: "linear-gradient(135deg, #071020 0%, #0A1628 100%)" }}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Navegación">
              <Link href="/plataforma/firma-electronica" className="hover:text-[#1ECAD3] transition-colors">
                Firma Electrónica
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-gray-400">Firma Simple</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(100,116,139,0.1)",
                border: "1px solid rgba(100,116,139,0.25)",
                color: "#94A3B8",
              }}
            >
              Nivel básico
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma electrónica simple{" "}
              <span className="text-gray-400">para documentos de bajo riesgo</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              La forma más rápida de obtener consentimiento digital. Sin verificación de identidad,
              sin instalación, implementación en minutos. Ideal para NDAs, acuerdos internos y documentos
              donde la relación entre las partes ya está establecida.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#1ECAD3" }}
              >
                Empezar gratis
              </Link>
              <Link
                href="/plataforma/firma-electronica"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-gray-400 transition-all hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                ← Ver todos los tipos
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20" style={{ background: "#070E1A" }} aria-labelledby="features-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="features-heading" className="text-2xl font-black text-white mb-8 text-center">
              ¿Qué incluye la Firma Simple?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "⚡",
                  title: "Firma en 1 clic",
                  desc: "El firmante abre el enlace y firma desde cualquier dispositivo en segundos. Sin cuenta ni contraseña.",
                },
                {
                  icon: "📧",
                  title: "Notificaciones automáticas",
                  desc: "El firmante recibe el documento por email y tú recibes confirmación cuando firma.",
                },
                {
                  icon: "📋",
                  title: "Trazabilidad básica",
                  desc: "Log con IP, fecha y hora de la firma. Suficiente para documentos internos de bajo riesgo.",
                },
                {
                  icon: "📱",
                  title: "100% móvil",
                  desc: "Diseño optimizado para smartphones. No se necesita instalar nada.",
                },
                {
                  icon: "🔗",
                  title: "Múltiples firmantes",
                  desc: "Envía a varios firmantes en orden o en paralelo. Gestiona todo desde tu panel.",
                },
                {
                  icon: "📂",
                  title: "Descarga del expediente",
                  desc: "Descarga el PDF firmado con el log de firma incluido al finalizar.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-2xl mb-3 block" aria-hidden="true">{feature.icon}</span>
                  <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to use */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="when-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id="when-heading" className="text-2xl font-black text-white mb-6">
                  ¿Cuándo usar la Firma Simple?
                </h2>
                <ul className="space-y-3">
                  {[
                    "NDAs y acuerdos de confidencialidad internos",
                    "Aprobación de propuestas comerciales",
                    "Confirmación de recibo de documentos",
                    "Aceptación de políticas internas",
                    "Acuerdos entre socios de negocio conocidos",
                    "Cualquier documento de bajo riesgo",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#1ECAD3" }} aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
              >
                <h3 className="text-base font-bold text-red-400 mb-3">⚠ Cuándo NO usar Firma Simple</h3>
                <ul className="space-y-2">
                  {[
                    "Contratos financieros regulados",
                    "Documentos que requieren cumplimiento CNBV",
                    "Procesos de onboarding de clientes",
                    "Pagarés y documentos con valor crediticio",
                    "Cualquier documento donde identidad importa",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-red-300/70">
                      <span aria-hidden="true">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  Para estos casos, considera{" "}
                  <Link href="/firma-electronica-nom-151" className="text-[#1ECAD3] hover:underline">
                    Firma NOM-151
                  </Link>{" "}
                  o{" "}
                  <Link href="/firma-electronica-kyc" className="text-[#1ECAD3] hover:underline">
                    Firma + KYC
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links + CTA */}
        <section className="py-16" style={{ background: "#070E1A" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm mb-6">
              ¿Necesitas más validez legal? Explora otras soluciones:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { href: "/firma-electronica-nom-151", label: "Firma NOM-151" },
                { href: "/firma-electronica-biometrica", label: "Firma Biométrica" },
                { href: "/firma-electronica-kyc", label: "Firma + KYC Completo" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "#1ECAD3", boxShadow: "0 0 30px rgba(30,202,211,0.3)" }}
            >
              Probar Firma Simple gratis →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
