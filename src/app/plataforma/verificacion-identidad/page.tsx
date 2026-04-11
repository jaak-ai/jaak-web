import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import KycBiometricAnimation from "@/components/KycBiometricAnimation";

export const metadata: Metadata = {
  title: "Verificación de Identidad (KYC) | JAAK",
  description: "KYC biométrico con prueba de vida certificada iBeta. Verifica identidad en segundos con IA. Cumple LFPIORPI, CNBV y regulación antilavado.",
  keywords: ["KYC", "verificación de identidad", "prueba de vida", "biometría facial", "iBeta", "LFPIORPI", "onboarding digital", "anti-spoofing"],
  openGraph: {
    title: "Verificación de Identidad (KYC) | JAAK",
    description: "KYC biométrico con prueba de vida certificada. Verifica identidad en segundos con IA.",
    type: "website",
  },
};

export default function VerificacionIdentidad() {

  return (
    <>
      <Header />
      <main>
        {/* ── 1. HERO ── */}
        <section
          className="pt-28 pb-14 md:pt-32 md:pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0E1133 0%, #141a3a 60%, #0E1133 100%)" }}
        >
          {/* Ambient glows */}
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(45,182,193,0.10)" }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "rgba(42,215,150,0.07)" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left — copy */}
              <div>
                {/* Product label */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.30)", background: "rgba(45,182,193,0.10)" }}
                  >
                    KYC · Know Your Customer
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ color: "rgba(255,255,255,0.50)", border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1] animate-pulse" />
                    iBeta Level 1 · Tecnología propia
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-white leading-tight mb-5">
                  Verifica la identidad de tus clientes.{" "}
                  <span style={{
                    background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Con evidencia legal lista para cualquier auditoría.
                  </span>
                </h1>

                <p className="text-lg leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.56)" }}>
                  KYC biométrico que automatiza el alta de clientes cumpliendo LFPIORPI, CNBV
                  y regulación antilavado — con evidencia auditable desde la primera verificación.
                </p>

                {/* Para qué sirve */}
                <div className="space-y-2.5 mb-8">
                  {[
                    "Alta de clientes 100% digital y remota",
                    "Cumplimiento regulatorio con evidencia auditable",
                    "Prevención de fraude e identidades falsas en onboarding",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)" }}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.72)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Sectores */}
                <div>
                  <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.30)" }}>
                    Sectores obligados
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Bancos y Sofomes", "Fintechs e IFPE", "Actividades Vulnerables", "Inmobiliarias", "Seguros", "Casinos"].map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.09)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <KycBiometricAnimation />
            </div>
          </div>
        </section>


        {/* ── 3. PROBLEMA REGULATORIO ── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
          <div
            className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(220,38,38,0.06)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="max-w-2xl mb-10 md:mb-14">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#fca5a5", border: "1px solid rgba(252,165,165,0.20)", background: "rgba(252,165,165,0.08)" }}
              >
                El riesgo real
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Si no verificas correctamente,{" "}
                <span style={{ color: "rgba(255,255,255,0.38)" }}>
                  tu empresa asume el riesgo.
                </span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                LFPIORPI te obliga. La CNBV audita. La UIF sanciona.
                Una verificación deficiente no es un error técnico — es un pasivo legal activo.
              </p>
            </div>

            {/* Pain cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: "💸",
                  title: "Multas por incumplimiento regulatorio",
                  body: "Sanciones de hasta $14.9 MDP bajo LFPIORPI por procesos de identificación deficientes o inexistentes en actividades vulnerables.",
                  accent: "rgba(239,68,68,0.15)",
                  border: "rgba(239,68,68,0.22)",
                  labelColor: "#fca5a5",
                },
                {
                  icon: "📋",
                  title: "Observaciones en auditorías CNBV",
                  body: "Sin evidencia documental de cada verificación no puedes demostrar cumplimiento ante inspectores regulatorios ni ante la UIF.",
                  accent: "rgba(245,158,11,0.12)",
                  border: "rgba(245,158,11,0.22)",
                  labelColor: "#fcd34d",
                },
                {
                  icon: "⚠️",
                  title: "Fraude en el onboarding",
                  body: "El 73% del fraude financiero digital en México ocurre en el momento de alta del cliente, cuando los controles son más débiles.",
                  accent: "rgba(239,68,68,0.10)",
                  border: "rgba(239,68,68,0.18)",
                  labelColor: "#fca5a5",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6"
                  style={{ background: c.accent, border: `1px solid ${c.border}`, backdropFilter: "blur(12px)" }}
                >
                  <div className="text-2xl mb-4">{c.icon}</div>
                  <h3 className="font-bold text-white text-base mb-3">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{c.body}</p>
                </div>
              ))}
            </div>

            {/* Anchor CTA */}
            <div className="text-center">
              <a
                href="#solución"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "#2DB6C1" }}
              >
                Conocer la solución
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. SOLUCIÓN / CAPACIDADES ── */}
        <section id="solución" className="py-16 md:py-24 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-2xl mb-10 md:mb-14">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)", background: "rgba(45,182,193,0.08)" }}
              >
                La solución JAAK
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5" style={{ color: "#0E1133" }}>
                Cada capa de verificación existe{" "}
                <span style={{ color: "#2DB6C1" }}>por una razón legal.</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                No es tecnología por tecnología — cada módulo genera evidencia que resiste auditorías de CNBV, UIF y CONDUSEF.
              </p>
            </div>

            {/* 4 capability cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "👁️",
                  badge: "iBeta Level 1",
                  title: "Prueba de vida pasiva",
                  body: "Detecta en tiempo real si el usuario es una persona real. Sin retos activos, sin fricción. iBeta Level 1 es el estándar más exigente del mercado para liveness detection.",
                  tag: "Anti-spoofing · Pasivo",
                },
                {
                  icon: "🪪",
                  badge: ">99% precisión OCR",
                  title: "Verificación de documento",
                  body: "OCR avanzado sobre INE, pasaporte y comprobantes. Detecta alteraciones, valida vigencia y extrae datos con precisión superior al 99% en condiciones de campo real.",
                  tag: "INE · Pasaporte · Comprobante",
                },
                {
                  icon: "🤳",
                  badge: "NIST FRVT evaluado",
                  title: "Comparación facial biométrica",
                  body: "Algoritmos evaluados por el Instituto Nacional de Estándares (NIST). Coteja el rostro en vivo contra la foto del documento con tasa de error facial < 0.1%.",
                  tag: "Biometría 1:1 · <0.1% error",
                },
                {
                  icon: "🏛️",
                  badge: "Tiempo real",
                  title: "Validación con fuentes oficiales",
                  body: "Consulta en tiempo real RENAPO (CURP), Lista Nominal INE y SAT. La evidencia de cada consulta queda registrada en el expediente del usuario — lista para cualquier auditoría.",
                  tag: "RENAPO · INE · SAT RFC",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 transition-shadow hover:shadow-md"
                  style={{ border: "1px solid #EEEEEE" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "rgba(45,182,193,0.10)" }}
                    >
                      {c.icon}
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: "rgba(45,182,193,0.10)", color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.18)" }}
                    >
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0E1133" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }}>{c.body}</p>
                  <div className="text-xs font-semibold" style={{ color: "#94A3B8" }}>{c.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CÓMO FUNCIONA ── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "#141a3a" }}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "rgba(45,182,193,0.07)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2AD796", border: "1px solid rgba(42,215,150,0.22)", background: "rgba(42,215,150,0.08)" }}
              >
                Flujo de verificación
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                De usuario desconocido a identidad verificada en{" "}
                <span style={{ color: "#2DB6C1" }}>30 segundos.</span>
              </h2>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.50)" }}>
                Un proceso simple para el usuario. Evidencia completa para tu área de compliance.
              </p>
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {/* Connector line — desktop only */}
              <div
                className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px pointer-events-none"
                style={{ background: "linear-gradient(to right, rgba(45,182,193,0.25), rgba(42,215,150,0.25))" }}
              />

              {[
                { num: "01", time: "0–5 seg.", title: "Captura de documento", body: "El usuario fotografía su INE o pasaporte. OCR extrae datos y valida vigencia al instante." },
                { num: "02", time: "5–12 seg.", title: "Selfie con prueba de vida", body: "Captura facial pasiva. Anti-spoofing detecta fotos, videos o máscaras sin pasos extra." },
                { num: "03", time: "12–22 seg.", title: "Verificación cruzada", body: "IA valida documento + rostro + fuentes oficiales en paralelo. Sin intervención humana." },
                { num: "04", time: "22–30 seg.", title: "Evidencia generada", body: "Expediente con foto, score de confianza, timestamp y referencias a fuentes consultadas." },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  {/* Step circle */}
                  <div
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-5 relative z-10"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                      border: "1px solid rgba(45,182,193,0.22)",
                    }}
                  >
                    <span
                      className="text-xl md:text-2xl font-black"
                      style={{
                        background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.num}
                    </span>
                  </div>
                  {/* Time badge */}
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: "rgba(45,182,193,0.12)", color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.18)" }}
                  >
                    {s.time}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.body}</p>
                </div>
              ))}
            </div>

            {/* Result row */}
            <div
              className="mt-10 md:mt-14 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ background: "rgba(42,215,150,0.07)", border: "1px solid rgba(42,215,150,0.16)" }}
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">✅</span>
                <div>
                  <div className="font-bold text-white text-sm md:text-base">Identidad verificada y expediente cerrado</div>
                  <div className="text-xs md:text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Score de confianza · Evidencia lista para auditoría · Webhook enviado
                  </div>
                </div>
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 font-bold text-sm rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #2DB6C1, #25969f)", color: "#fff", boxShadow: "0 4px 16px rgba(45,182,193,0.25)" }}
              >
                Ver demo en vivo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. CERTIFICACIONES ── */}
        <section className="py-16 md:py-24" style={{ background: "#fff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)", background: "rgba(45,182,193,0.08)" }}
              >
                Certificaciones internacionales
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5" style={{ color: "#0E1133" }}>
                No solo tecnología — estándares que reconocen tus reguladores.
              </h2>
              <p className="text-lg" style={{ color: "#64748B" }}>
                Cada certificación responde una pregunta que la CNBV, la UIF o un auditor externo te va a hacer.
              </p>
            </div>

            {/* Cert cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "iBeta Level 1",
                  question: "¿Tu prueba de vida resiste ataques de presentación?",
                  answer: "El único estándar internacional que certifica liveness detection. Obligatorio para acreditar biometría ante CNBV.",
                  reg: "Relevante para CNBV",
                  color: "#2DB6C1",
                },
                {
                  label: "NIST FRVT",
                  question: "¿Con qué precisión reconoces un rostro?",
                  answer: "Evaluación independiente del gobierno de EE.UU. Tasa de error facial < 0.1% en escenarios reales.",
                  reg: "Precisión de biometría",
                  color: "#2AD796",
                },
                {
                  label: "ISO 27001",
                  question: "¿Cómo proteges los datos biométricos de mis clientes?",
                  answer: "Gestión de seguridad de información certificada. Cierra el riesgo de responsabilidad bajo LFPDPPP.",
                  reg: "Relevante para LFPDPPP",
                  color: "#2DB6C1",
                },
                {
                  label: "ISO 9001",
                  question: "¿Los procesos son consistentes o dependen de una persona?",
                  answer: "Calidad operativa certificada. Cada verificación sigue el mismo protocolo — sin variaciones humanas.",
                  reg: "Auditorías UIF / CNBV",
                  color: "#2AD796",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ border: "1px solid #EEEEEE", borderLeft: `3px solid ${c.color}` }}
                >
                  <div
                    className="text-xs font-bold px-2.5 py-1 rounded-full self-start mb-4"
                    style={{ background: `rgba(45,182,193,0.08)`, color: c.color, border: `1px solid ${c.color}33` }}
                  >
                    {c.label}
                  </div>
                  <p className="text-sm font-semibold mb-3 leading-snug" style={{ color: "#64748B" }}>
                    &ldquo;{c.question}&rdquo;
                  </p>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#0E1133" }}>
                    {c.answer}
                  </p>
                  <div
                    className="text-xs font-semibold mt-auto pt-3"
                    style={{ color: c.color, borderTop: "1px solid #F1F5F9" }}
                  >
                    {c.reg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. SECTORES ── */}
        <section className="py-16 md:py-24" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 md:mb-14">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)", background: "rgba(45,182,193,0.08)" }}
              >
                Sectores obligados
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5" style={{ color: "#0E1133" }}>
                ¿Tu sector tiene obligación de verificar identidad?{" "}
                <span style={{ color: "#2DB6C1" }}>Probablemente sí.</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                LFPIORPI, CNBV y la UIF definen exactamente qué sectores deben implementar KYC
                — y con qué nivel de rigor.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏦",
                  sector: "Bancos y Sofomes",
                  regs: ["CNBV obligatorio", "Expediente digital por cliente"],
                  detail: "Verificación reforzada en operaciones que superan umbral de identificación.",
                },
                {
                  icon: "📱",
                  sector: "Fintechs e IFPE",
                  regs: ["Onboarding 100% remoto", "Cumplimiento CNBV"],
                  detail: "KYC desde el primer registro para crédito, pagos y servicios digitales.",
                },
                {
                  icon: "⚠️",
                  sector: "Actividades Vulnerables",
                  regs: ["LFPIORPI Art. 17", "Reporte UIF obligatorio"],
                  detail: "Identificación plena del cliente y reporte cuando supera umbrales PLD.",
                },
                {
                  icon: "🏠",
                  sector: "Inmobiliarias y Notarías",
                  regs: ["Operaciones >$164K MXN", "Expediente con evidencia"],
                  detail: "Identificación del comprador, vendedor y representantes en cada transacción.",
                },
                {
                  icon: "🛡️",
                  sector: "Seguros y Fianzas",
                  regs: ["Identificación de beneficiario", "AML obligatorio"],
                  detail: "Prevención de lavado en pólizas de vida y verificación de asegurados.",
                },
                {
                  icon: "🎰",
                  sector: "Casas de Empeño y Casinos",
                  regs: ["Alta actividad vulnerable", "Listas de sancionados"],
                  detail: "Identificación en cada operación y consulta a listas negras internacionales.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
                  style={{ border: "1px solid #EEEEEE" }}
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#0E1133" }}>{s.sector}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {s.regs.map((r) => (
                      <span
                        key={r}
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(45,182,193,0.08)", color: "#2DB6C1" }}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7b. LISTAS AML/PLD ── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "rgba(245,158,11,0.05)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(45,182,193,0.06)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="max-w-2xl mb-5">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#fcd34d", border: "1px solid rgba(252,211,77,0.22)", background: "rgba(252,211,77,0.08)" }}
              >
                Consulta de listas AML/PLD
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Un KYC sin consulta de listas{" "}
                <span style={{ color: "rgba(255,255,255,0.35)" }}>es un KYC con brechas.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.50)" }}>
                JAAK consulta automáticamente cinco fuentes en cada verificación: listas internacionales de sanciones,
                registros nominales mexicanos y el padrón de contribuyentes irregulares del SAT.
                Cada consulta queda registrada en el expediente como evidencia auditable.
              </p>
            </div>

            {/* Group labels */}
            <div className="mb-6 md:mb-10 flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239,68,68,0.7)" }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Listas internacionales de sanciones
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(45,182,193,0.7)" }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Fuentes nominales mexicanas
                </span>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">

              {/* OFAC */}
              <div
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: "rgba(239,68,68,0.07)",
                  border: "1px solid rgba(239,68,68,0.18)",
                  borderTop: "3px solid rgba(239,68,68,0.55)",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-base font-black text-white">Lista OFAC</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Office of Foreign Assets Control · EE.UU.</div>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: "rgba(239,68,68,0.15)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.25)" }}
                  >
                    Internacional
                  </span>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Sanciones del Tesoro de EE.UU. Su omisión en operaciones con alcance internacional expone
                  a sanciones extraterritoriales. Instituida bajo equivalencia GAFI para entidades con
                  exposición a dólares o corresponsalía extranjera.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#fca5a5" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>LFPIORPI Art. 3 y 17 · Equivalencia GAFI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#fca5a5" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>Riesgo: multas $20K–$500K USD por operación</span>
                  </div>
                </div>
              </div>

              {/* INTERPOL */}
              <div
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: "rgba(99,102,241,0.07)",
                  border: "1px solid rgba(99,102,241,0.18)",
                  borderTop: "3px solid rgba(99,102,241,0.55)",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-base font-black text-white">Listas INTERPOL</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Difusiones rojas · Personas buscadas</div>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.25)" }}
                  >
                    Mejores prácticas
                  </span>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  No obligatorio por ley, pero su ausencia genera observaciones en auditorías CNBV.
                  GAFI Recomendación 6 establece controles sobre personas políticamente expuestas
                  y buscados internacionales — brecha frecuente en inspecciones.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#a5b4fc" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>GAFI Recomendación 6 · Mejores prácticas CNBV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#a5b4fc" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>Riesgo: observaciones en auditoría regulatoria</span>
                  </div>
                </div>
              </div>

              {/* SAT 69-B */}
              <div
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.22)",
                  borderTop: "3px solid rgba(245,158,11,0.65)",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-base font-black text-white">Lista SAT 69-B</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>EFOS · Operaciones inexistentes</div>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: "rgba(245,158,11,0.15)", color: "#fcd34d", border: "1px solid rgba(245,158,11,0.25)" }}
                  >
                    ⚠ Crítico
                  </span>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Empresas o personas físicas que emiten facturas sin respaldo económico real (EFOS).
                  Incorporar un cliente en esta lista puede nulificar deducciones fiscales de tu empresa
                  y generar responsabilidad fiscal solidaria.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#fcd34d" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>LFPIORPI Art. 17 · CNBV Circular 12/2012</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#fcd34d" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>Riesgo: $100K–$5M MXN + responsabilidad penal</span>
                  </div>
                </div>
              </div>

              {/* Lista Nominal INE */}
              <div
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: "rgba(45,182,193,0.07)",
                  border: "1px solid rgba(45,182,193,0.18)",
                  borderTop: "3px solid rgba(45,182,193,0.55)",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-base font-black text-white">Lista Nominal INE</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Padrón electoral · Credenciales activas</div>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: "rgba(45,182,193,0.12)", color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)" }}
                  >
                    Obligatorio CNBV
                  </span>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Verifica que la INE presentada exista en el padrón electoral y esté activa. Detecta
                  credenciales falsificadas físicamente correctas que superan revisión visual
                  — incluso algunas que pasan por OCR sin esta consulta.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#2DB6C1" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>CNBV Circular 12/2012 · LFPIORPI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#2DB6C1" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>Riesgo: onboarding con identidad sintética</span>
                  </div>
                </div>
              </div>

              {/* RENAPO */}
              <div
                className="rounded-2xl p-6 flex flex-col sm:col-span-1 lg:col-span-2"
                style={{
                  background: "rgba(42,215,150,0.07)",
                  border: "1px solid rgba(42,215,150,0.18)",
                  borderTop: "3px solid rgba(42,215,150,0.55)",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-base font-black text-white">RENAPO / CURP</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Registro Nacional de Población · Fuente raíz de identidad en México</div>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: "rgba(42,215,150,0.12)", color: "#2AD796", border: "1px solid rgba(42,215,150,0.22)" }}
                  >
                    Fuente raíz
                  </span>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  La fuente de verdad definitiva para identidades en México. Valida CURP, nombre completo, fecha de nacimiento y vigencia de la clave de población.
                  Su consulta es obligatoria para generar el <strong className="text-white font-semibold">Expediente de Identidad del Cliente (EIC)</strong> que exige la CNBV —
                  sin ella, el expediente queda incompleto para efectos regulatorios.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#2AD796" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>CNBV obligatorio EIC · LFPIORPI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#2AD796" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>Riesgo: expediente incompleto en auditoría CNBV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#2AD796" }} />
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>Confirma que CURP + datos documentales + biometría coinciden</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom note */}
            <div
              className="rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-xl flex-shrink-0">📋</div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                JAAK consulta las cinco fuentes en paralelo durante el proceso de verificación y registra el resultado
                de cada consulta en el expediente del usuario. El área de compliance puede descargar evidencia
                individual por consulta para responder requerimientos de CNBV, UIF o auditorías internas.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. INTEGRACIÓN TÉCNICA ── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "rgba(42,215,150,0.06)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              {/* Left — timeline */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 md:mb-7"
                  style={{ color: "#2AD796", border: "1px solid rgba(42,215,150,0.22)", background: "rgba(42,215,150,0.08)" }}
                >
                  Integración técnica
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
                  Integración lista en{" "}
                  <span style={{ color: "#2AD796" }}>menos de una semana.</span>
                </h2>
                <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.50)" }}>
                  SDK para iOS, Android y Web. API REST documentada. Sandbox disponible desde el primer día.
                </p>

                {/* Timeline */}
                <div className="space-y-6">
                  {[
                    { days: "Día 1–2", title: "Acceso a sandbox", body: "Credenciales de prueba + entorno aislado listo para explorar." },
                    { days: "Día 3–4", title: "Integración SDK / API REST", body: "Documentación guiada paso a paso. Soporte técnico incluido." },
                    { days: "Día 5", title: "Pruebas con identidades reales", body: "Sandbox acepta documentos e identidades reales para validar flujos." },
                    { days: "Semana 2", title: "Activación en producción", body: "Firma contrato, activa credenciales de prod. Empieza a generar evidencia." },
                  ].map((t, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div
                        className="text-xs font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0"
                        style={{ background: "rgba(42,215,150,0.10)", color: "#2AD796", border: "1px solid rgba(42,215,150,0.18)" }}
                      >
                        {t.days}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">{t.title}</div>
                        <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{t.body}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 mt-10 text-sm font-semibold transition-colors"
                  style={{ color: "#2AD796" }}
                >
                  Ver documentación completa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Right — JSON response mockup */}
              <div>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(45,182,193,0.20)" }}
                >
                  {/* Terminal top bar */}
                  <div
                    className="flex items-center gap-2 px-5 py-3"
                    style={{ background: "rgba(45,182,193,0.08)", borderBottom: "1px solid rgba(45,182,193,0.14)" }}
                  >
                    <span className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.6)" }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: "rgba(245,158,11,0.6)" }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: "rgba(42,215,150,0.6)" }} />
                    <span className="ml-3 text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                      POST /identity/verify → 200 OK
                    </span>
                  </div>
                  {/* Code body */}
                  <div className="relative" style={{ background: "#070d1a" }}>
                    <pre
                      className="text-xs leading-relaxed overflow-x-auto p-6 font-mono"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        filter: "blur(3px)",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >{`{
  "id": "ver_a3f9b2c1e847d6",
  "status": "verified",
  "created_at": "2025-11-14T09:18:42Z",
  "person": {
    "full_name": "Ana Martínez Ruiz",
    "document_type": "INE",
    "document_status": "valid"
  },
  "checks": {
    "liveness":    { "result": "pass", "score": 0.99  },
    "face_match":  { "result": "pass", "score": 0.984 },
    "official_sources": {
      "renapo":     "match",
      "ine_nominal":"match",
      "sat_69b":    "clear",
      "ofac":       "clear",
      "interpol":   "clear"
    }
  },
  "evidence_package": "https://storage.example.com/evidence/..."
}`}</pre>
                    {/* Overlay: invite to docs */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
                    >
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(45,182,193,0.15)", color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.25)" }}>
                        Documentación disponible para clientes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CTA FINAL ── */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #141a3a 0%, #0E1133 60%, #141a3a 100%)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(45,182,193,0.12)" }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className="max-w-3xl mx-auto rounded-2xl md:rounded-3xl p-7 sm:p-10 md:p-14 text-center"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(45,182,193,0.04) 50%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(45,182,193,0.15)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.20)",
              }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(45,182,193,0.10)", border: "1px solid rgba(45,182,193,0.22)" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2DB6C1" }} />
                <span className="text-sm font-medium" style={{ color: "#2DB6C1" }}>
                  Revisión sin costo · 15 minutos
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 md:mb-6">
                Tu próxima auditoría puede encontrar evidencia — o encontrar vacíos.
              </h2>

              <p className="text-base md:text-xl mb-8 md:mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
                En 15 minutos te decimos si JAAK cubre lo que tu regulación exige. Sin compromiso.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-200 group"
                  style={{
                    background: "linear-gradient(135deg, #2DB6C1, #25969f)",
                    boxShadow: "0 8px 32px rgba(45,182,193,0.30)",
                  }}
                >
                  Solicitar revisión regulatoria
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/precios"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-base sm:text-lg rounded-xl transition-all duration-200"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  Ver precios
                </Link>
              </div>

              {/* Trust signals */}
              <div
                className="mt-8 md:mt-10 pt-6 md:pt-8 flex flex-wrap justify-center gap-3 md:gap-6 text-xs"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.28)" }}
              >
                {["Sin compromiso", "ISO 27001 · iBeta Level 1", "70M+ verificaciones", "Tecnología propia"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
