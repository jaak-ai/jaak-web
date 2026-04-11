import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

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
  const features = [
    {
      title: "Prueba de vida pasiva",
      description: "Detectamos automáticamente si el usuario es una persona real sin fricciones adicionales.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Verificación de documentos",
      description: "Validamos INE, pasaporte y otros documentos oficiales con OCR avanzado y detección de alteraciones.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Comparación facial",
      description: "Comparamos el rostro del usuario con la foto del documento usando algoritmos certificados por NIST.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Validación con fuentes oficiales",
      description: "Consultamos bases de datos oficiales como INE, SAT y RENAPO para confirmar la identidad.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const steps = [
    { step: "01", title: "Captura de documento", description: "El usuario toma foto de su identificación oficial" },
    { step: "02", title: "Selfie con prueba de vida", description: "Captura facial con detección de vida pasiva" },
    { step: "03", title: "Verificación automática", description: "IA valida documento, rostro y consulta fuentes oficiales" },
    { step: "04", title: "Resultado en segundos", description: "Respuesta inmediata con score de confianza y evidencia" },
  ];

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

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Verificación completa en un solo flujo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combina múltiples capas de verificación para garantizar que cada usuario es quien dice ser.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Cómo funciona
              </h2>
              <p className="text-xl text-gray-600">
                Un proceso simple para el usuario, robusto para tu compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-black text-[#0066ff]/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Certificaciones que respaldan
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/ibeta.png" alt="iBeta" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">iBeta</div>
                  <div className="text-sm text-gray-600">Prueba de vida certificada</div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/nist.png" alt="NIST" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">NIST FRVT</div>
                  <div className="text-sm text-gray-600">Reconocimiento facial evaluado</div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/iso-27001.png" alt="ISO 27001" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">ISO 27001</div>
                  <div className="text-sm text-gray-600">Seguridad de información</div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/iso-9001.png" alt="ISO 9001" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">ISO 9001</div>
                  <div className="text-sm text-gray-600">Gestión de calidad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para verificar identidades con confianza?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Agenda una demo y descubre cómo JAAK puede proteger tu onboarding.
            </p>
            <Link
              href="/contacto"
              className="inline-flex px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
            >
              Solicitar demo gratuita
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
