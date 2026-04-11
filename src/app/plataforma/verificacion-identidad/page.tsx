import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0E1133 0%, #141a3a 60%, #0E1133 100%)" }}
        >
          {/* Ambient glows */}
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(45,182,193,0.10)" }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "rgba(42,215,150,0.07)" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left — copy */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-7"
                  style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.25)", background: "rgba(45,182,193,0.09)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1] animate-pulse" />
                  Certificado iBeta Level 2 · Tecnología 100% propia
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-tight mb-6">
                  Verifica identidades en segundos.{" "}
                  <span style={{
                    background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Con evidencia legal que resiste cualquier auditoría.
                  </span>
                </h1>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.56)" }}>
                  KYC biométrico con prueba de vida certificada iBeta. Cumple LFPIORPI, CNBV
                  y regulación antilavado desde el primer usuario verificado.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-xl transition-all duration-200"
                    style={{ background: "linear-gradient(135deg, #2DB6C1, #25969f)", boxShadow: "0 6px 24px rgba(45,182,193,0.28)" }}
                  >
                    Solicitar demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.80)", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    Ver documentación
                  </Link>
                </div>
              </div>

              {/* Right — verification flow panel */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="w-full max-w-sm rounded-3xl p-6"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(45,182,193,0.18)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Panel header */}
                  <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(45,182,193,0.15)" }}>
                      <svg className="w-5 h-5" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Verificación KYC</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>proceso activo</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(42,215,150,0.12)", color: "#2AD796", border: "1px solid rgba(42,215,150,0.20)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2AD796] animate-pulse" />
                      En vivo
                    </div>
                  </div>

                  {/* Steps */}
                  {[
                    { label: "Documento capturado", sub: "INE · vigente · sin alteraciones", done: true },
                    { label: "Biometría facial", sub: "Coincidencia 98.4% con NIST FRVT", done: true },
                    { label: "Prueba de vida", sub: "iBeta Level 2 · anti-spoofing activo", done: true },
                    { label: "Evidencia generada", sub: "Constancia auditable lista", done: true },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)" }}
                      >
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{s.label}</div>
                        <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>{s.sub}</div>
                      </div>
                    </div>
                  ))}

                  {/* Result badge */}
                  <div
                    className="mt-5 rounded-xl p-3 flex items-center gap-3"
                    style={{ background: "rgba(42,215,150,0.08)", border: "1px solid rgba(42,215,150,0.18)" }}
                  >
                    <span className="text-xl">✅</span>
                    <div>
                      <div className="text-sm font-bold" style={{ color: "#2AD796" }}>Identidad verificada</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>Tiempo total: 24 seg. · Expediente #JK-2026-00471</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STATS BAR ── */}
        <section className="py-10 bg-white" style={{ borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-100">
              {[
                { value: "70M+", label: "identidades verificadas" },
                { value: "1,000+", label: "empresas activas" },
                { value: "iBeta L2", label: "prueba de vida certificada" },
                { value: "< 30 seg.", label: "por verificación" },
              ].map((m, i) => (
                <div key={i} className="text-center md:px-8">
                  <div
                    className="text-2xl md:text-3xl font-black mb-1"
                    style={{
                      background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#64748B" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. PROBLEMA REGULATORIO ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
          <div
            className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(220,38,38,0.06)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="max-w-2xl mb-14">
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
        <section id="solución" className="py-24 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-2xl mb-14">
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
                  badge: "iBeta Level 2",
                  title: "Prueba de vida pasiva",
                  body: "Detecta en tiempo real si el usuario es una persona real. Sin retos activos, sin fricción. iBeta Level 2 es el estándar más exigente del mercado para liveness detection.",
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
                  body: "Consulta en tiempo real INE/RENAPO, SAT (RFC) y listas de sancionados AML/PLD. La evidencia de cada consulta queda registrada en el expediente del usuario.",
                  tag: "RENAPO · SAT · Listas AML",
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
        <section className="py-24 relative overflow-hidden" style={{ background: "#141a3a" }}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "rgba(45,182,193,0.07)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
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
            <div className="relative grid md:grid-cols-4 gap-6">
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
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative z-10"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                      border: "1px solid rgba(45,182,193,0.22)",
                    }}
                  >
                    <span
                      className="text-2xl font-black"
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
              className="mt-14 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ background: "rgba(42,215,150,0.07)", border: "1px solid rgba(42,215,150,0.16)" }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">✅</span>
                <div>
                  <div className="font-bold text-white">Identidad verificada y expediente cerrado</div>
                  <div className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Resultado con score de confianza · Evidencia lista para auditoría · API webhook enviado
                  </div>
                </div>
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl whitespace-nowrap transition-all"
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
        <section className="py-24" style={{ background: "#fff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
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
                  label: "iBeta Level 2",
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
        <section className="py-24" style={{ background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
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

        {/* ── 8. INTEGRACIÓN TÉCNICA ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "rgba(42,215,150,0.06)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left — timeline */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-7"
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
                      POST /v2/kyc/verify → 200 OK
                    </span>
                  </div>
                  {/* Code body */}
                  <pre
                    className="text-xs leading-relaxed overflow-x-auto p-6 font-mono"
                    style={{ background: "#070d1a", color: "rgba(255,255,255,0.75)" }}
                  >{`{
  "verification_id": "jk-2026-00471",
  "status": "approved",
  "identity": {
    "name": "María García López",
    "document": "INE · vigente",
    "liveness": {
      "result": "pass",
      "score": 0.99,
      "standard": "iBeta Level 2"
    },
    "face_match": {
      "score": 0.984,
      "evaluated_by": "NIST FRVT"
    },
    "official_sources": [
      { "source": "RENAPO", "match": true },
      { "source": "INE",    "match": true },
      { "source": "AML",    "match": false }
    ]
  },
  "evidence_url": "https://vault.jaak.ai/...",
  "timestamp": "2026-04-11T14:32:08Z"
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CTA FINAL ── */}
        <section
          className="py-24 relative overflow-hidden"
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
              className="max-w-3xl mx-auto rounded-3xl p-10 md:p-14 text-center"
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

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                Tu próxima auditoría puede encontrar evidencia — o encontrar vacíos.
              </h2>

              <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
                En 15 minutos te decimos si JAAK cubre lo que tu regulación exige. Sin compromiso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-lg rounded-xl transition-all duration-200 group"
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
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-200"
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
                className="mt-10 pt-8 flex flex-wrap justify-center gap-6 text-xs"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.28)" }}
              >
                {["Sin compromiso de contratación", "ISO 27001 · iBeta Level 2", "70M+ identidades verificadas", "Tecnología 100% propia"].map((t) => (
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
