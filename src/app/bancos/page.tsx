import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustryLeadForm from "@/components/IndustryLeadForm";
import { IBETA, STATS } from "@/lib/trust";

export const metadata: Metadata = {
  title: "Biometría bancaria 100% propia",
  description:
    "Liveness Detection, Facial Search, KYC y Bus Biométrico. Infraestructura biométrica bancaria diseñada y operada en México, sin dependencia de proveedores externos.",
  alternates: { canonical: "/bancos" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/bancos",
    siteName: "JAAK",
    title: "Biometría bancaria 100% propia | JAAK",
    description:
      "Liveness, Facial Search, KYC y Bus Biométrico para bancos, cajas de ahorro y Afores. Infraestructura biométrica operada en México.",
  },
};

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Dependencia de proveedores internacionales",
    description:
      "Tu biometría depende de terceros en EE.UU. o Europa. Cualquier falla o cambio de precios te afecta sin que puedas hacer nada.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Costos crecientes de Liveness y búsqueda facial",
    description:
      "Cada consulta biométrica tiene costo. Con millones de operaciones al año, los precios de proveedores externos se vuelven insostenibles.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Tiempo de respuesta crítico en operaciones",
    description:
      "Latencia en la verificación biométrica frena operaciones en tiempo real. Con JAAK, la verificación biométrica responde en menos de 5 segundos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Bus Biométrico propio",
    description: "Infraestructura biométrica on-premise o en nube privada. Sin dependencia de terceros externos.",
  },
  {
    number: "02",
    title: "Liveness + Facial Search nativo",
    description: "Motor biométrico 100% propio. Detección de ataques de presentación y búsqueda facial en tiempo real.",
  },
  {
    number: "03",
    title: "KYC completo con evidencia regulatoria",
    description: "Onboarding digital que cumple CNBV, UIF, CONSAR. Evidencia auditable para inspecciones.",
  },
];

const products = [
  {
    name: "Liveness Detection",
    description: `Prueba de vida certificada ${IBETA}. Detecta deepfakes y ataques de presentación en tiempo real.`,
    color: "#2DB6C1",
    tag: "Certificado iBeta",
  },
  {
    name: "Facial Search",
    description: "Búsqueda biométrica de alto rendimiento. Infraestructura propia.",
    color: "#212A45",
    tag: "Alta performance",
  },
  {
    name: "KYC Digital",
    description: "Verificación de identidad con INE, CURP y biometría facial. Cumplimiento regulatorio completo.",
    color: "#2DB6C1",
    tag: "Cumplimiento CNBV",
  },
  {
    name: "Bus Biométrico",
    description: "Hub central de operaciones biométricas. Reemplaza dependencias de proveedores externos de biometría.",
    color: "#212A45",
    tag: "On-premise / Nube privada",
  },
];

const stats = [
  { value: "100%", label: "Infraestructura propia" },
  { value: STATS.verificacionBiometrica, label: "Verificación biométrica" },
  { value: IBETA, label: "Certificación Liveness" },
  { value: STATS.disponibilidad, label: "Disponibilidad" },
];

export default function BancosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#212A45] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2DB6C1]/8 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2DB6C1]/15 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DB6C1]/10 border border-[#2DB6C1]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#2DB6C1] rounded-full animate-pulse"></span>
                  <span className="text-[#2DB6C1] text-sm font-medium">Para bancos, cajas de ahorro y Afores</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Biometría bancaria{" "}
                  <span className="text-[#2DB6C1]">
                    100% propia.
                  </span>{" "}
                  Sin dependencia de terceros.
                </h1>

                <p className="text-xl text-white/70 mb-8">
                  Liveness Detection + Facial Search + KYC + Bus Biométrico.
                  Infraestructura biométrica bancaria diseñada y operada en México.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#contacto"
                    className="px-6 py-3 bg-[#2DB6C1] text-[#212A45] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
                  >
                    Agenda una demo técnica
                  </a>
                  <a
                    href="mailto:hello@jaak.ai"
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Contactar directo
                  </a>
                </div>

                {/* Stats preview */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-2xl font-black text-[#2DB6C1]">{stat.value}</div>
                      <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: architecture diagram */}
              <div className="hidden lg:flex justify-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full backdrop-blur-sm">
                  <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-6">Arquitectura JAAK</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Bus Biométrico", color: "#2DB6C1", icon: "🏗️" },
                      { label: "Liveness Engine", color: "#2DB6C1", icon: "👁️" },
                      { label: "Facial Search", color: "#2DB6C1", icon: "🔍" },
                      { label: "KYC Core", color: "#2DB6C1", icon: "✅" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border"
                        style={{ borderColor: `${item.color}30` }}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-white/80 text-sm font-medium">{item.label}</span>
                        <div className="ml-auto w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-3 bg-[#2DB6C1]/10 rounded-lg">
                    <p className="text-[#2DB6C1] text-xs text-center font-medium">
                      ↑ Todo operado por JAAK en México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                El costo oculto de depender de terceros
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cada contrato con un proveedor externo de biometría es un riesgo operativo,
                regulatorio y financiero que paga tu institución.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#2DB6C1]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-[#212A45]/5 rounded-xl flex items-center justify-center text-[#212A45] mb-5">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#212A45] mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Infraestructura biométrica propia
              </h2>
              <p className="text-xl text-white/60">
                Deja de pagar por cada transacción. Controla tu propia biometría.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2DB6C1]/40 transition-all">
                  <div className="text-5xl font-black text-[#2DB6C1]/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                Suite biométrica bancaria completa
              </h2>
              <p className="text-xl text-gray-600">
                Cuatro productos diseñados para instituciones bancarias que no pueden darse el lujo de fallar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${product.color}15`,
                        color: product.color,
                      }}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#212A45] mb-3">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section id="contacto" className="py-20 bg-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Agenda una demo técnica
                </h2>
                <p className="text-xl text-white/70 mb-10">
                  Habla directamente con nuestro equipo de arquitectura. Te mostramos
                  la infraestructura, los benchmarks de rendimiento y el plan de migración.
                </p>

                <div className="space-y-5">
                  {[
                    "Demo técnica con arquitectos de solución JAAK",
                    "Benchmarks de rendimiento de Liveness y Facial Search",
                    "Plan de migración desde proveedores actuales",
                    "Análisis de costos vs. proveedor actual",
                    "Propuesta de arquitectura personalizada para tu institución",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2DB6C1] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#212A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-[#2DB6C1]/10 border border-[#2DB6C1]/20 rounded-xl">
                  <p className="text-[#2DB6C1] font-bold text-lg mb-1">Agenda directo</p>
                  <a
                    href="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline"
                  >
                    Reserva tu demo técnica en nuestro calendario →
                  </a>
                </div>
              </div>

              {/* Form */}
              <IndustryLeadForm
                source="landing-bancos"
                theme="teal"
                heading="Agenda tu demo técnica"
                subheading="Un arquitecto de soluciones te contacta en menos de 24 horas."
                empresaLabel="Institución *"
                empresaRequired
                empresaPlaceholder="Banco / Caja de Ahorro / Afore"
                emailPlaceholder="tu@banco.com"
                mensajeLabel="¿Qué solución te interesa evaluar?"
                mensajePlaceholder="Ej: Queremos reemplazar a nuestro proveedor externo de Liveness. Tenemos 500k verificaciones/mes..."
                submitLabel="Agendar demo técnica"
                successMessage="✓ Solicitud enviada. Un arquitecto de soluciones te contacta pronto."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
