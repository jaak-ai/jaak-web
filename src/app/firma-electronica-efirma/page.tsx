import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "e.firma (SAT) en México | JAAK",
  description:
    "Firma documentos electrónicos usando la e.firma SAT vigente del firmante dentro de un flujo auditable con evidencia, trazabilidad y expediente digital.",
  keywords:
    "firma con e.firma SAT, e.firma vigente firma electrónica, FIEL firma de documentos, firma electrónica avanzada México, no repudio firma digital, representante legal firma electrónica",
  openGraph: {
    title: "e.firma (SAT) en México | JAAK",
    description:
      "Permite que representantes legales y firmantes autorizados usen su e.firma vigente dentro de un flujo de firma auditable.",
    url: "https://jaak.ai/firma-electronica-efirma",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica-efirma",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿JAAK emite la e.firma del SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. JAAK permite integrar la firma con e.firma vigente del firmante dentro de un flujo digital auditable. La emisión, renovación y administración de la e.firma corresponde al firmante ante el SAT.",
      },
    },
    {
      "@type": "Question",
      name: "¿La e.firma sustituye al KYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. La e.firma puede reforzar la autoría de la firma, pero si necesitas validar identidad documental, biometría, listas o riesgo del cliente, conviene usar KYC.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo combinar e.firma con NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Para documentos de mayor valor o riesgo, puedes combinar e.firma con NOM-151 dentro del mismo flujo para reforzar autoría, integridad, trazabilidad y conservación.",
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
    { "@type": "ListItem", position: 3, name: "e.firma (SAT)", item: "https://jaak.ai/firma-electronica-efirma" },
  ],
};

export default function FirmaEfirmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section
          id="efirma"
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
              <span className="text-gray-400">e.firma (SAT)</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#60A5FA" }}
            >
              Nueva capacidad · Certificado digital del firmante
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #2DB6C1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                e.firma SAT
              </span>{" "}
              dentro del flujo JAAK
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              Permite que representantes legales, empresas y firmantes autorizados usen su{" "}
              <strong className="text-gray-200">e.firma vigente</strong> para firmar documentos electrónicos con
              mayor certeza de autoría, trazabilidad y no repudio.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#3B82F6", boxShadow: "0 0 25px rgba(59,130,246,0.3)" }}
              >
                Probar autoservicio
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

        {/* Qué es la e.firma */}
        <section className="py-20" style={{ background: "#070E1A" }} aria-labelledby="que-es-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="que-es-heading" className="text-2xl font-black text-white mb-4">
                  ¿Qué es la e.firma?
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  La <strong className="text-gray-200">e.firma</strong> (antes FIEL) es una firma electrónica
                  avanzada emitida por el SAT, basada en un certificado digital único que identifica a cada persona
                  física o moral ante la autoridad fiscal mexicana.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  No es solo una aceptación digital: al firmar con e.firma, el firmante utiliza su certificado y
                  llave privada vigentes, lo que aporta un nivel adicional de certeza sobre quién firmó.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Importante:</strong> JAAK no emite ni administra la e.firma. El
                  firmante la obtiene y renueva directamente ante el SAT; JAAK permite integrarla dentro de un flujo
                  de firma digital auditable.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-4">Cuándo usarla</h2>
                <div className="space-y-3">
                  {[
                    { icon: "🏢", title: "Representantes legales", desc: "Contratos y autorizaciones firmadas a nombre de una empresa." },
                    { icon: "🤝", title: "Contratos B2B de alto valor", desc: "Operaciones donde el no repudio de la firma es crítico." },
                    { icon: "📋", title: "Autorizaciones corporativas", desc: "Documentos donde se requiere certeza sobre la autoría." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-xl" style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)" }}>
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
          </div>
        </section>

        {/* Cómo funciona + diferencias */}
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="funciona-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="funciona-heading" className="text-2xl font-black text-white mb-4 text-center">
              Cómo funciona dentro de JAAK
            </h2>
            <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-10">
              La e.firma no es solo una aceptación digital. Es una firma electrónica avanzada basada en el
              certificado digital del firmante. En JAAK puede integrarse dentro de un flujo auditable para firmar
              documentos, generar evidencia y complementar capas como NOM-151, biometría o KYC cuando el caso lo
              requiere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14">
              {[
                { step: "1", title: "Sube el documento", desc: "Carga el contrato o documento que requiere firma." },
                { step: "2", title: "El firmante usa su e.firma", desc: "Aplica su certificado digital vigente para firmar." },
                { step: "3", title: "Se registra la evidencia", desc: "Fecha, hora e identificación del certificado usado." },
                { step: "4", title: "Expediente auditable", desc: "Se genera el expediente con el documento firmado." },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-3" style={{ background: "#3B82F6" }}>{item.step}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-white mb-6 text-center">
              Diferencia entre e.firma, NOM-151, biometría y KYC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: "e.firma", desc: "El firmante usa su certificado digital vigente del SAT como mecanismo de firma.", color: "#3B82F6" },
                { name: "NOM-151", desc: "Fortalece la conservación e integridad del documento firmado en el tiempo.", color: "#2DB6C1" },
                { name: "Biometría", desc: "Comprueba que la persona presente corresponde con su identidad facial.", color: "#8B5CF6" },
                { name: "KYC", desc: "Verifica identidad documental, listas de riesgo y perfil del cliente.", color: "#10B981" },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl p-5" style={{ background: item.color + "0D", border: `1px solid ${item.color}33` }}>
                  <h3 className="text-sm font-bold mb-2" style={{ color: item.color }}>{item.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidencia + casos de uso */}
        <section className="py-20" style={{ background: "#070E1A" }} aria-labelledby="usecases-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="usecases-heading" className="text-2xl font-black text-white mb-8 text-center">
              Evidencia generada y casos de uso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "🪪", title: "Certificado del firmante", desc: "Identificación del certificado digital usado para firmar." },
                { icon: "⏱", title: "Fecha y hora", desc: "Momento exacto en que se aplicó la firma con e.firma." },
                { icon: "📄", title: "Documento firmado", desc: "Archivo final con la firma del certificado incorporada." },
                { icon: "🗂️", title: "Expediente auditable", desc: "Concentra documento, evidencia y metadatos del proceso." },
                { icon: "🏛️", title: "Contratos B2B", desc: "Autorizaciones y contratos entre empresas de alto valor." },
                { icon: "⚖️", title: "Representación legal", desc: "Documentos firmados por apoderados o representantes." },
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
        <section className="py-20" style={{ background: "#0A1628" }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-2xl font-black text-white mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "¿JAAK emite la e.firma del SAT?",
                  a: "No. JAAK permite integrar la firma con e.firma vigente del firmante dentro de un flujo digital auditable. La emisión, renovación y administración de la e.firma corresponde al firmante ante el SAT.",
                },
                {
                  q: "¿La e.firma sustituye al KYC?",
                  a: "No necesariamente. La e.firma puede reforzar la autoría de la firma, pero si necesitas validar identidad documental, biometría, listas o riesgo del cliente, conviene usar KYC.",
                },
                {
                  q: "¿Puedo combinar e.firma con NOM-151?",
                  a: "Sí. Para documentos de mayor valor o riesgo, puedes combinar e.firma con NOM-151 dentro del mismo flujo para reforzar autoría, integridad, trazabilidad y conservación.",
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
        <section className="py-16" style={{ background: "#070E1A" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm mb-6">¿Necesitas otra capa de evidencia? Explora:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { href: "/firma-electronica-nom-151", label: "Firma Digital NOM-151" },
                { href: "/firma-certificada-sello-tiempo", label: "Sellos de Tiempo" },
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
              style={{ background: "#3B82F6", boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
            >
              Probar firma con e.firma →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
