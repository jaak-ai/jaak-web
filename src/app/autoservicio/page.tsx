import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import AutoservicioPricingGrid from "@/components/AutoservicioPricingGrid";

export const metadata: Metadata = {
  title: "JAAK Autoservicio | Verificación de Identidad y Firma Electrónica sin Perfil Técnico",
  description:
    "Configura tu flujo de verificación de identidad o firma electrónica desde una plataforma simple. Genera un link y compártelo por email, SMS o WhatsApp. Sin setup fee, sin integración obligatoria, activación inmediata.",
  keywords: [
    "autoservicio verificación identidad",
    "KYC sin integración",
    "firma electrónica autoservicio",
    "verificación identidad México",
    "onboarding digital sin código",
    "KYC por link",
    "verificación biométrica autoservicio",
    "JAAK autoservicio",
    "firma electrónica sin API",
    "validación identidad remota",
    "onboarding por WhatsApp",
    "KYC por email SMS",
  ],
  alternates: {
    canonical: "https://jaak.ai/autoservicio",
    languages: {
      "es-MX": "https://jaak.ai/autoservicio",
      es: "https://jaak.ai/autoservicio",
    },
  },
  openGraph: {
    title: "JAAK Autoservicio | Verificación y Firma sin Perfil Técnico",
    description:
      "Genera un link de verificación o firma y compártelo por email, SMS o WhatsApp. Sin setup fee, sin integración obligatoria.",
    type: "website",
    url: "https://jaak.ai/autoservicio",
    siteName: "JAAK",
    locale: "es_MX",
    images: [
      {
        url: "https://jaak.ai/og-autoservicio.jpg",
        width: 1200,
        height: 630,
        alt: "JAAK Autoservicio - Verificación de identidad y firma sin perfil técnico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAAK Autoservicio | Verificación y Firma sin Perfil Técnico",
    description:
      "Genera un link y compártelo por email, SMS o WhatsApp. Activación inmediata, sin setup fee.",
    images: ["https://jaak.ai/og-autoservicio.jpg"],
  },
};

export default function AutoservicioPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── SECCIÓN 1: Hero ────────────────────────────────────────────── */}
        <section className="pt-36 pb-24 bg-gradient-to-br from-[#212A45] via-[#0E1133] to-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2DB6C1]/10 border border-[#2DB6C1]/30 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#2DB6C1] rounded-full animate-pulse"></span>
                <span className="text-[#2DB6C1] text-sm font-semibold tracking-wide">
                  Activación inmediata · Sin setup fee
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Verificación de identidad y firma electrónica{" "}
                <span className="text-[#2DB6C1]">sin complejidad técnica</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Configura tu flujo desde una plataforma simple, genera un link y
                compártelo por{" "}
                <strong className="text-white">
                  email, SMS o WhatsApp
                </strong>
                . Sin setup fee, sin integración obligatoria y con activación
                inmediata.
              </p>

              {/* Bullets */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm">
                {[
                  "No requiere perfil técnico",
                  "Comparte sesiones por link",
                  "Opera desde web, sin plataformas complejas",
                  "Ideal para onboarding, validación y firma",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <svg
                      className="w-4 h-4 text-[#2AD796] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/autoservicio/prueba"
                  className="px-8 py-4 bg-[#2DB6C1] text-white font-bold rounded-xl hover:bg-[#25969f] transition-all shadow-lg shadow-[#2DB6C1]/20 text-lg"
                >
                  Probar autoservicio
                </Link>
                <Link
                  href="/precios"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-lg"
                >
                  Ver precios
                </Link>
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-transparent text-white/80 font-semibold rounded-xl hover:text-white transition-all text-lg"
                >
                  Solicitar demo →
                </Link>
              </div>

              {/* Flow animation visual */}
              <div className="mt-16 flex flex-wrap justify-center items-center gap-2 text-sm text-white/50">
                {[
                  { icon: "⚙️", label: "Configura módulos" },
                  { icon: "🔗", label: "Genera link" },
                  { icon: "📨", label: "Email / SMS / WhatsApp" },
                  { icon: "✅", label: "Cliente completa" },
                  { icon: "📋", label: "Recibes resultado" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                      <span>{step.icon}</span>
                      <span className="text-white/70">{step.label}</span>
                    </div>
                    {i < 4 && (
                      <svg
                        className="w-4 h-4 text-white/30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 2: Propuesta de valor ─────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                Empieza rápido,{" "}
                <span className="text-[#2DB6C1]">
                  sin depender de desarrollo
                </span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Pensado para equipos de cumplimiento, comercial, operaciones,
                legal, RH y fintech — no solo para developers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Configura sin código",
                  desc: "Selecciona el flujo que necesitas desde la plataforma web.",
                  color: "bg-[#2DB6C1]/10 text-[#2DB6C1]",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  ),
                  title: "Genera una sesión en minutos",
                  desc: "Crea un enlace listo para compartir con tu cliente.",
                  color: "bg-[#2AD796]/10 text-[#2AD796]",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  ),
                  title: "Comparte por tus canales",
                  desc: "Email, SMS o WhatsApp — los canales que ya usa tu equipo.",
                  color: "bg-[#0066ff]/10 text-[#0066ff]",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                  title: "Consulta resultados y evidencia",
                  desc: "Visualiza estatus, score y expediente digital al instante.",
                  color: "bg-[#212A45]/10 text-[#212A45]",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="card hover-lift flex flex-col gap-4"
                >
                  <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#212A45]">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 3: Cómo funciona ───────────────────────────────────── */}
        <section className="py-24 bg-[#F3F4F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                Así funciona{" "}
                <span className="text-[#2DB6C1]">JAAK Autoservicio</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                De la configuración al resultado en cuatro pasos. Sin esperas,
                sin equipo técnico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Configura tu flujo",
                  desc: "Selecciona qué necesitas: identidad, biometría, listas negras o firma electrónica.",
                  color: "text-[#2DB6C1]",
                  border: "border-[#2DB6C1]/20",
                  bg: "bg-[#2DB6C1]/5",
                },
                {
                  step: "02",
                  title: "Genera el link",
                  desc: "La plataforma crea una sesión lista para tu cliente, en minutos.",
                  color: "text-[#2AD796]",
                  border: "border-[#2AD796]/20",
                  bg: "bg-[#2AD796]/5",
                },
                {
                  step: "03",
                  title: "Compártelo",
                  desc: "Envía la sesión por email, SMS o WhatsApp directamente desde la plataforma.",
                  color: "text-[#0066ff]",
                  border: "border-[#0066ff]/20",
                  bg: "bg-[#0066ff]/5",
                },
                {
                  step: "04",
                  title: "Recibe resultados",
                  desc: "Consulta el resultado, score y descarga el expediente digital con evidencia.",
                  color: "text-[#212A45]",
                  border: "border-[#212A45]/20",
                  bg: "bg-[#212A45]/5",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`bg-white rounded-2xl p-8 border ${item.border} relative`}
                >
                  <div
                    className={`text-6xl font-black ${item.color} opacity-20 mb-4 leading-none`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#212A45] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 4: Qué puedes activar ─────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                Un autoservicio para{" "}
                <span className="text-[#2DB6C1]">más que KYC</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Activa solo los módulos que tu operación necesita. Sin pagar
                por lo que no usas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Verificación de identidad",
                  icon: "👤",
                  color: "bg-[#2DB6C1]",
                  items: [
                    "KYC Tradicional",
                    "KYC Simplificado",
                    "Validación con fuentes oficiales",
                  ],
                },
                {
                  category: "Biometría",
                  icon: "🔍",
                  color: "bg-[#2AD796]",
                  items: ["Liveness iBeta Level 1 (prueba de vida)", "OTO (comparación facial)"],
                },
                {
                  category: "Documentos",
                  icon: "📄",
                  color: "bg-[#0066ff]",
                  items: ["OCR de documentos oficiales", "Validación de vigencia"],
                },
                {
                  category: "Controles AML",
                  icon: "🛡️",
                  color: "bg-[#212A45]",
                  items: ["Listas Negras", "Listas Nominales", "PLD / LFPIORPI"],
                },
                {
                  category: "Firma electrónica",
                  icon: "✍️",
                  color: "bg-[#6366f1]",
                  items: [
                    "Firma Simple",
                    "Firma Avanzada (NOM-151)",
                    "Firma Avanzada + Biometría (NOM-151)",
                  ],
                },
                {
                  category: "Expediente digital",
                  icon: "📋",
                  color: "bg-[#f59e0b]",
                  items: [
                    "Gestión de evidencia",
                    "Trazabilidad completa",
                    "Descarga en cualquier formato",
                  ],
                },
              ].map((module) => (
                <div
                  key={module.category}
                  className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center text-lg`}
                    >
                      {module.icon}
                    </div>
                    <h3 className="font-bold text-[#212A45]">
                      {module.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-[#2DB6C1] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 5: Para quién está hecho ──────────────────────────── */}
        <section className="py-24 bg-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Pensado para equipos que{" "}
                <span className="text-[#2DB6C1]">necesitan operar rápido</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                No solo para desarrolladores. JAAK Autoservicio está diseñado
                para cualquier área que necesite verificar identidades o firmar
                documentos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  role: "Cumplimiento y PLD",
                  icon: "⚖️",
                  desc: "Valida identidad, consulta listas y genera evidencia regulatoria sin depender de sistemas internos.",
                },
                {
                  role: "Comercial y ventas",
                  icon: "💼",
                  desc: "Envía verificaciones o solicitudes de firma antes del cierre del trato, directamente por WhatsApp.",
                },
                {
                  role: "Legal",
                  icon: "📜",
                  desc: "Firma documentos con mayor certeza de identidad, trazabilidad completa y validez legal.",
                },
                {
                  role: "Operaciones",
                  icon: "⚙️",
                  desc: "Reduce carga manual, elimina papelería y acelera el onboarding de clientes y proveedores.",
                },
                {
                  role: "Recursos Humanos",
                  icon: "🧑‍🤝‍🧑",
                  desc: "Valida candidatos, integra expedientes y firma contratos de trabajo en minutos.",
                },
                {
                  role: "Fintech y empresas digitales",
                  icon: "🏦",
                  desc: "Onboarding remoto, prevención de fraude y validación documental desde cualquier dispositivo.",
                },
              ].map((item) => (
                <div
                  key={item.role}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.role}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 6: Casos de uso ────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                Casos de uso{" "}
                <span className="text-[#2DB6C1]">del autoservicio</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Más allá del cumplimiento regulatorio — cualquier operación
                que requiera validar identidad o firmar documentos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Alta de clientes",
                  desc: "Digitalize la apertura de cuentas con verificación de identidad y expediente automático.",
                  link: "/soluciones/onboarding-digital",
                },
                {
                  title: "Firma de contratos",
                  desc: "Firma simple o avanzada con validación de identidad integrada para mayor certeza jurídica.",
                  link: "/soluciones/firma-contratos",
                },
                {
                  title: "Onboarding digital",
                  desc: "Incorpore nuevos clientes o colaboradores de forma remota, en minutos.",
                  link: "/soluciones/onboarding-digital",
                },
                {
                  title: "Revisión de listas AML",
                  desc: "Consulta automática de listas negras y nominales antes de cualquier operación.",
                  link: "/cumplimiento/lfpiorpi",
                },
                {
                  title: "Validación de proveedores",
                  desc: "Verifique la identidad de socios y proveedores antes de celebrar contratos.",
                  link: "/soluciones/empresas-reguladas",
                },
                {
                  title: "Verificación de candidatos",
                  desc: "RH puede validar identidad y firmar contratos sin salir de sus herramientas habituales.",
                  link: "/plataforma/verificacion-identidad",
                },
                {
                  title: "Prevención de fraude",
                  desc: "Detecte suplantación de identidad antes del registro o apertura de cuenta.",
                  link: "/soluciones/prevencion-fraude",
                },
                {
                  title: "Actualización de expedientes",
                  desc: "Renueve documentos de clientes existentes con un simple link compartido.",
                  link: "/plataforma/gestion-evidencia",
                },
                {
                  title: "Validación preoperacional",
                  desc: "Confirme la identidad antes de una operación sensible o de alto valor.",
                  link: "/soluciones/operaciones-alto-riesgo",
                },
              ].map((useCase) => (
                <Link
                  key={useCase.title}
                  href={useCase.link}
                  className="group flex items-start gap-4 bg-[#FAFAFA] hover:bg-[#2DB6C1]/5 border border-[#EEEEEE] hover:border-[#2DB6C1]/30 rounded-xl p-5 transition-all"
                >
                  <div className="w-8 h-8 bg-[#2DB6C1]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#2DB6C1]/20 transition-colors">
                    <svg
                      className="w-4 h-4 text-[#2DB6C1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#212A45] group-hover:text-[#2DB6C1] transition-colors mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {useCase.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN: Tokens y Niveles de Seguridad (KYC) ──────────────── */}
        <section className="py-24 bg-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2DB6C1]/10 border border-[#2DB6C1]/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#2DB6C1] rounded-full"></span>
                <span className="text-[#2DB6C1] text-sm font-semibold">
                  KYC · Modelo de tokens · Sin NOM-151
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Tokens: la unidad que mide{" "}
                <span className="text-[#2DB6C1]">cada nivel de seguridad</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Cada verificación KYC consume un número fijo de tokens según
                el nivel de seguridad requerido. Usted elige el nivel que su
                operación y perfil de riesgo exigen.
              </p>
            </div>

            {/* Two KYC types */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              {/* KYC Tradicional */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-[#2DB6C1] rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xl leading-none">42</span>
                    <span className="text-white/70 text-[10px] uppercase tracking-wider">tokens</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">KYC Tradicional</div>
                    <div className="text-white/50 text-sm">Verificación biométrica completa</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {[
                    "Liveness iBeta Level 1 (prueba de vida antisuplantación)",
                    "OTO — comparación facial biométrica",
                    "OCR de documento oficial con validación de vigencia",
                    "Validación con fuentes oficiales",
                    "Consulta de listas negras (módulo opcional)",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <svg
                        className="w-4 h-4 text-[#2AD796] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white/50">
                  Válido para operaciones reguladas: CNBV, UIF, LFPIORPI.{" "}
                  <strong className="text-white/70">No requiere NOM-151.</strong>
                </div>
              </div>

              {/* KYC Simplificado */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-[#2DB6C1]/20 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[#2DB6C1] font-black text-xl leading-none">30</span>
                    <span className="text-[#2DB6C1]/70 text-[10px] uppercase tracking-wider">tokens</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">KYC Simplificado</div>
                    <div className="text-white/50 text-sm">Validación documental básica</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {[
                    "OCR de documento oficial",
                    "Validación de vigencia del documento",
                    "Validación básica con fuentes oficiales",
                    "Sin verificación biométrica (liveness)",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <svg
                        className="w-4 h-4 text-[#2DB6C1] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white/50">
                  Para procesos de bajo riesgo.{" "}
                  <strong className="text-white/70">
                    No disponible en programa de Alianzas. No requiere NOM-151.
                  </strong>
                </div>
              </div>
            </div>

            {/* Risk / security levels */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-8 text-center">
                ¿Qué nivel de seguridad necesita su operación?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    level: "Riesgo Bajo",
                    dot: "bg-[#2AD796]",
                    color: "text-[#2AD796]",
                    border: "border-[#2AD796]/30",
                    bg: "bg-[#2AD796]/5",
                    desc: "Validación documental sin biometría",
                    token: "KYC Simplificado · 30 tokens",
                    examples: "RH, proveedores internos, validación básica",
                  },
                  {
                    level: "Riesgo Medio",
                    dot: "bg-[#f59e0b]",
                    color: "text-[#f59e0b]",
                    border: "border-[#f59e0b]/30",
                    bg: "bg-[#f59e0b]/5",
                    desc: "Identidad verificada + prueba de vida",
                    token: "KYC Tradicional · 42 tokens",
                    examples: "Apertura de cuenta, onboarding de clientes",
                  },
                  {
                    level: "Riesgo Alto / Regulado",
                    dot: "bg-[#ef4444]",
                    color: "text-[#ef4444]",
                    border: "border-[#ef4444]/30",
                    bg: "bg-[#ef4444]/5",
                    desc: "Biometría + AML + fuentes oficiales",
                    token: "KYC Tradicional + AML · 42+ tokens",
                    examples: "Actividades vulnerables LFPIORPI, CNBV, UIF",
                  },
                ].map((r) => (
                  <div
                    key={r.level}
                    className={`rounded-xl p-5 ${r.bg} border ${r.border}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${r.dot}`}></span>
                      <span className={`text-sm font-bold ${r.color}`}>{r.level}</span>
                    </div>
                    <div className="text-white font-semibold text-sm mb-2">{r.desc}</div>
                    <div
                      className={`text-xs font-mono ${r.color} mb-3 bg-black/20 rounded px-2 py-1 inline-block`}
                    >
                      {r.token}
                    </div>
                    <div className="text-white/40 text-xs">{r.examples}</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs text-white/40 border-t border-white/10 pt-6">
                El KYC en JAAK Autoservicio valida identidad pero{" "}
                <strong className="text-white/60">no sustituye ni requiere NOM-151</strong>.
                La NOM-151 aplica únicamente con{" "}
                <strong className="text-white/60">
                  Firma Electrónica Avanzada + Biometría
                </strong>
                .
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 7: Bloque regulatorio + calculadora ───────────────── */}
        <section className="py-24 bg-[#F3F4F8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-[#EEEEEE] p-10 md:p-14 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#212A45]/10 border border-[#212A45]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#212A45] rounded-full"></span>
                <span className="text-[#212A45] text-sm font-semibold">
                  Actividades Vulnerables · LFPIORPI
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-6">
                ¿Tu actividad está obligada a identificar clientes?
              </h2>
              <p className="text-lg text-gray-500 mb-4 max-w-2xl mx-auto leading-relaxed">
                Si tu empresa realiza actividades vulnerables o procesos
                regulados, JAAK puede ayudarte a digitalizar la identificación
                de clientes, la consulta de listas y la generación de evidencia.
              </p>
              <p className="text-sm text-gray-400 mb-10 max-w-xl mx-auto">
                Descubre si tu operación requiere controles de identificación y
                qué nivel de validación podrías necesitar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/cumplimiento/actividades-vulnerables"
                  className="px-8 py-4 bg-[#212A45] text-white font-bold rounded-xl hover:bg-[#0E1133] transition-all text-lg"
                >
                  Ir a la calculadora de actividades vulnerables →
                </Link>
                <Link
                  href="/cumplimiento/lfpiorpi"
                  className="px-8 py-4 bg-transparent text-[#212A45] font-semibold rounded-xl border-2 border-[#212A45]/20 hover:border-[#212A45] transition-all text-lg"
                >
                  Conocer más sobre LFPIORPI
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 8: Capacitación ────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2AD796]/10 border border-[#2AD796]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#2AD796] rounded-full"></span>
                  <span className="text-[#2AD796] text-sm font-semibold">
                    Acompañamiento incluido
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-6">
                  Capacitación para adoptar el autoservicio{" "}
                  <span className="text-[#2DB6C1]">más rápido</span>
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  JAAK ofrece acompañamiento práctico para que su equipo
                  aprenda a configurar flujos, revisar resultados y descargar
                  expedientes. Esto acelera la adopción interna y permite
                  aprovechar mejor la plataforma desde el inicio.
                </p>
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-[#2DB6C1] text-white font-bold rounded-xl hover:bg-[#25969f] transition-all inline-block"
                >
                  Solicitar capacitación
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    n: "01",
                    title: "Introducción a la plataforma",
                    desc: "Recorrido general por módulos disponibles y flujos de trabajo.",
                  },
                  {
                    n: "02",
                    title: "Configuración de flujos",
                    desc: "Cómo crear y personalizar sesiones de verificación o firma.",
                  },
                  {
                    n: "03",
                    title: "Revisión de resultados",
                    desc: "Interpretación de scores, estatus y alertas del sistema.",
                  },
                  {
                    n: "04",
                    title: "Descarga de expedientes",
                    desc: "Generación y resguardo de evidencia digital conforme a regulación.",
                  },
                  {
                    n: "05",
                    title: "Buenas prácticas operativas",
                    desc: "Lineamientos para equipos de cumplimiento, comercial y operaciones.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex items-start gap-4 bg-[#FAFAFA] border border-[#EEEEEE] rounded-xl p-4"
                  >
                    <span className="text-[#2DB6C1] font-black text-sm w-6 flex-shrink-0">
                      {item.n}
                    </span>
                    <div>
                      <p className="font-semibold text-[#212A45] text-sm">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN: Precios del Autoservicio ──────────────────────────── */}
        <section className="py-24" style={{ background: "linear-gradient(135deg, #212A45 0%, #0E1133 50%, #212A45 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Precios del autoservicio.{" "}
                <span className="text-[#2DB6C1]">Sin contrato mínimo.</span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Compre paquetes de verificaciones o firmas y úselos a su ritmo.
              </p>
            </div>

            <AutoservicioPricingGrid />





            {/* Conditions / Notes */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mt-8">
              <h3 className="font-bold text-white mb-6 text-lg">
                Condiciones del autoservicio
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "👥",
                    title: "Límite de firmantes",
                    desc: "Firma Simple y NOM-151: hasta 4 firmantes por sesión. Firma + Biometría: hasta 2 firmantes por sesión.",
                  },
                  {
                    icon: "⚖️",
                    title: "NOM-151 y validez legal",
                    desc: "El KYC no aplica NOM-151. La NOM-151 aplica únicamente con Firma Electrónica Avanzada + Biometría.",
                  },
                  {
                    icon: "📊",
                    title: "SLA por nivel de plan",
                    desc: "El SLA de soporte varía según el plan. Para SLA contractual de disponibilidad, contrate la modalidad Enterprise.",
                  },
                  {
                    icon: "💳",
                    title: "Sin contrato mínimo",
                    desc: "Pago 100% prepago (tarjeta). Sin setup fee ni contrato. Paquetes caducan a 12 meses desde la compra.",
                  },
                  {
                    icon: "🔐",
                    title: "Liveness iBeta Level 1",
                    desc: "El módulo de prueba de vida cuenta con certificación iBeta Liveness Level 1 (antisuplantación).",
                  },
                  {
                    icon: "🔄",
                    title: "Overages",
                    desc: "Planes Bronce–Platino pueden adquirir paquetes adicionales al 120% del precio unitario. Plan Cobre se bloquea al alcanzar el límite.",
                  },
                ].map((note) => (
                  <div key={note.title} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{note.icon}</span>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">
                        {note.title}
                      </div>
                      <div className="text-white/50 text-xs leading-relaxed">
                        {note.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <Link
                  href="/precios"
                  className="text-[#2DB6C1] font-semibold hover:underline text-sm"
                >
                  Ver tabla completa de precios y planes →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 9: Comparativo ─────────────────────────────────────── */}
        <section className="py-24 bg-[#F3F4F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#212A45] mb-4">
                Autoservicio para empezar rápido.{" "}
                <span className="text-[#2DB6C1]">
                  Enterprise y Alianzas para integrar a profundidad.
                </span>
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Autoservicio está diseñado para operar desde plataforma sin
                depender de integración técnica. Enterprise y Alianzas
                requieren implementación y setup fee por el nivel de
                personalización e integración.
              </p>
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden">
              <div className="grid grid-cols-4 gap-0">
                {/* Header row */}
                <div className="p-5 bg-[#F3F4F8] border-b border-[#EEEEEE]">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Característica
                  </span>
                </div>
                {[
                  { name: "Autoservicio", highlight: true, badge: "Empezar aquí" },
                  { name: "Enterprise", highlight: false, badge: null },
                  { name: "Alianzas", highlight: false, badge: null },
                ].map((col) => (
                  <div
                    key={col.name}
                    className={`p-5 border-b border-[#EEEEEE] text-center ${
                      col.highlight
                        ? "bg-[#2DB6C1]/5 border-[#2DB6C1]/20"
                        : "bg-[#F3F4F8]"
                    }`}
                  >
                    <div className="font-bold text-[#212A45]">{col.name}</div>
                    {col.badge && (
                      <div className="mt-1 inline-block text-xs bg-[#2DB6C1] text-white px-2 py-0.5 rounded-full font-semibold">
                        {col.badge}
                      </div>
                    )}
                  </div>
                ))}

                {/* Data rows */}
                {[
                  {
                    feature: "Activación",
                    self: "Inmediata",
                    ent: "Por implementación",
                    ali: "Por implementación",
                  },
                  {
                    feature: "Perfil técnico requerido",
                    self: "No",
                    ent: "Sí",
                    ali: "Sí",
                  },
                  {
                    feature: "Integración técnica",
                    self: "No obligatoria",
                    ent: "Sí",
                    ali: "Sí",
                  },
                  {
                    feature: "Setup fee",
                    self: "No",
                    ent: "Sí",
                    ali: "Sí",
                  },
                  {
                    feature: "Compartir por link",
                    self: "Sí",
                    ent: "Sí",
                    ali: "Sí",
                  },
                  {
                    feature: "Personalización avanzada",
                    self: "Limitada",
                    ent: "Alta",
                    ali: "Alta",
                  },
                  {
                    feature: "Ideal para",
                    self: "Operación ágil",
                    ent: "Alto volumen",
                    ali: "Partners",
                  },
                ].map((row, i) => (
                  <React.Fragment key={row.feature}>
                    <div
                      className={`p-4 border-b border-[#EEEEEE] text-sm font-medium text-gray-600 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                      }`}
                    >
                      {row.feature}
                    </div>
                    <div
                      className={`p-4 border-b border-[#EEEEEE] text-center text-sm font-semibold border-l-2 border-l-[#2DB6C1]/20 ${
                        i % 2 === 0 ? "bg-[#2DB6C1]/5" : "bg-[#2DB6C1]/[0.03]"
                      } ${
                        row.self === "No" || row.self === "No obligatoria"
                          ? "text-[#2AD796]"
                          : row.self === "Sí"
                          ? "text-[#2DB6C1]"
                          : "text-[#212A45]"
                      }`}
                    >
                      {row.self === "No" || row.self === "No obligatoria" ? (
                        <span className="flex items-center justify-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {row.self}
                        </span>
                      ) : (
                        row.self
                      )}
                    </div>
                    <div
                      className={`p-4 border-b border-[#EEEEEE] text-center text-sm text-gray-500 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                      }`}
                    >
                      {row.ent}
                    </div>
                    <div
                      className={`p-4 border-b border-[#EEEEEE] text-center text-sm text-gray-500 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                      }`}
                    >
                      {row.ali}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contacto"
                className="text-[#2DB6C1] font-semibold hover:underline text-sm"
              >
                ¿Necesita Enterprise o Alianzas? Hable con nuestro equipo →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SECCIÓN 10: CTA Final ──────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-br from-[#212A45] via-[#0E1133] to-[#212A45]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Empieza hoy con una forma más simple de{" "}
              <span className="text-[#2DB6C1]">verificar y firmar</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Active su cuenta, configure su flujo y comparta sesiones en
              minutos. Sin setup fee, sin integración obligatoria.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/autoservicio/prueba"
                className="px-10 py-4 bg-[#2DB6C1] text-white font-bold rounded-xl hover:bg-[#25969f] transition-all shadow-lg shadow-[#2DB6C1]/20 text-lg"
              >
                Probar autoservicio
              </Link>
              <Link
                href="/precios"
                className="px-10 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-lg"
              >
                Ver precios
              </Link>
              <Link
                href="/contacto"
                className="px-10 py-4 bg-transparent text-white/80 font-semibold rounded-xl hover:text-white transition-all text-lg"
              >
                Hablar con el equipo →
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              {[
                "Sin setup fee",
                "Activación inmediata",
                "ISO 27001",
                "NOM-151 (Firma Biométrica)",
                "Soporte en español",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-[#2AD796]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
