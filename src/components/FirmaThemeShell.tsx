"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FirmaComparisonTable from "@/components/FirmaComparisonTable";
import FirmaProductCards from "@/components/FirmaProductCards";
import FirmaHowItWorks from "@/components/FirmaHowItWorks";
import FirmaDifferentiation from "@/components/FirmaDifferentiation";
import FirmaRiskChecklist from "@/components/FirmaRiskChecklist";
import FirmaUseCases from "@/components/FirmaUseCases";
import FirmaFAQ from "@/components/FirmaFAQ";
import FirmaSEMHandler from "@/components/FirmaSEMHandler";

export default function FirmaThemeShell() {
  const [isDark, setIsDark] = useState(true);

  const t = {
    bgA: isDark ? "#070E1A" : "#FFFFFF",
    bgB: isDark ? "#0A1628" : "#F8FAFC",
    heading: isDark ? "#FFFFFF" : "#0F172A",
    body: isDark ? "#94A3B8" : "#475569",
    tr: "background-color 0.4s ease, color 0.4s ease",
  };

  return (
    <>
      <main>
        {/* ── HERO (always dark for brand consistency) ────────────── */}
        <section
          id="hero"
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #071020 0%, #0A1628 45%, #0D1F3C 100%)" }}
          aria-label="Firma electrónica en México"
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: "linear-gradient(#1ECAD3 1px, transparent 1px), linear-gradient(90deg, #1ECAD3 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#1ECAD3" }} />
          <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#8B5CF6" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 text-xs font-semibold"
                  style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.25)", color: "#1ECAD3" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1ECAD3] animate-pulse" aria-hidden="true" />
                  NOM-151 · Biometría · KYC · White-label
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                  Firma electrónica en{" "}
                  <span style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    México
                  </span>{" "}
                  con validez legal y biometría
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                  No solo firmas. Generas{" "}
                  <strong className="text-gray-200">evidencia legal irrebatible</strong>. Sello de tiempo NOM-151, verificación biométrica y expediente auditable en segundos.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: "⚡", text: "Firma en menos de 3 min" },
                    { icon: "⚖️", text: "Válida ante CNBV y SAT" },
                    { icon: "🔒", text: "Expediente auditable" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-gray-400">
                      <span aria-hidden="true">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/autoservicio"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #1ECAD3, #17A8B0)", boxShadow: "0 0 30px rgba(30,202,211,0.35)" }}
                  >
                    Probar autoservicio
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:bg-white/10"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#E2E8F0" }}
                  >
                    Ver demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: Flow illustration */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/images/firma-electronica-flujo.jpg"
                    alt="Flujo de firma electrónica: validación de INE, firma biométrica y expediente auditable"
                    width={720}
                    height={480}
                    className="w-full h-auto rounded-2xl"
                    style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,202,211,0.12)" }}
                    priority
                  />
                  <div className="absolute -bottom-8 inset-x-16 h-16 blur-2xl opacity-25 rounded-full pointer-events-none" aria-hidden="true" style={{ background: "#1ECAD3" }} />
                  {/* Branding callout */}
                  <div
                    className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.2)" }}
                      aria-hidden="true"
                    >
                      🎨
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">
                        Personalizable con tu logo y marca
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Tus clientes ven tu identidad, no la nuestra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 NIVELES DE FIRMA ──────────────────────────────────── */}
        <section
          id="soluciones"
          className="py-20"
          style={{ background: t.bgB, transition: t.tr }}
          aria-labelledby="soluciones-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Soluciones
              </div>
              <h2 id="soluciones-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                4 niveles de firma para cada necesidad
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                Desde la firma más simple hasta el cumplimiento regulatorio más completo. Haz clic para expandir cada solución.
              </p>
            </div>
            <FirmaProductCards />
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ───────────────────────────────────────── */}
        <section
          id="como-funciona"
          className="py-20"
          style={{ background: t.bgA, transition: t.tr }}
          aria-labelledby="flujo-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Flujo de firma
              </div>
              <h2 id="flujo-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                Cómo funciona
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                5 pasos desde que subes el documento hasta tener el expediente digital completo y auditable.
              </p>
            </div>
            <FirmaHowItWorks />
          </div>
        </section>

        {/* ── COMPARATIVA ─────────────────────────────────────────── */}
        <section
          id="comparacion"
          className="py-20"
          style={{ background: t.bgB, transition: t.tr }}
          aria-labelledby="comparacion-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Comparativa
              </div>
              <h2 id="comparacion-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                ¿Cuál es la firma que necesitas?
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                Haz clic en cualquier fila para ver los detalles, beneficios y el caso de uso exacto de cada tipo.
              </p>
            </div>
            <FirmaComparisonTable />
          </div>
        </section>

        {/* ── DIFERENCIACIÓN ──────────────────────────────────────── */}
        <section
          id="diferenciacion"
          className="py-20"
          style={{ background: t.bgB, transition: t.tr }}
          aria-labelledby="diferenciacion-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Diferenciación
              </div>
              <h2 id="diferenciacion-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                No solo firmas.{" "}
                <span style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Generas evidencia legal.
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                Haz clic en cada punto para explorar el detalle. Pasa el cursor sobre los términos subrayados para ver definiciones.
              </p>
            </div>
            <FirmaDifferentiation />
          </div>
        </section>

        {/* ── RIESGO ──────────────────────────────────────────────── */}
        <section
          id="riesgo"
          className="py-20"
          style={{ background: t.bgA, transition: t.tr }}
          aria-labelledby="riesgo-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#FCA5A5" }}>
                Evaluación de riesgo
              </div>
              <h2 id="riesgo-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                ¿Tu firma es defendible{" "}
                <span style={{ color: "#FCA5A5" }}>en auditoría</span>?
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                Selecciona las situaciones que aplican a tu empresa para evaluar la solidez legal de tu proceso actual.
              </p>
            </div>
            <FirmaRiskChecklist />
          </div>
        </section>

        {/* ── CASOS DE USO ────────────────────────────────────────── */}
        <section
          id="casos-uso"
          className="py-20"
          style={{ background: t.bgB, transition: t.tr }}
          aria-labelledby="casos-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Casos de uso
              </div>
              <h2 id="casos-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                Firma en cada industria
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                Selecciona tu industria para ver los casos de uso más relevantes y el tipo de firma recomendado.
              </p>
            </div>
            <FirmaUseCases />
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section
          id="faq"
          className="py-20"
          style={{ background: t.bgA, transition: t.tr }}
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Preguntas frecuentes
              </div>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: t.heading, transition: t.tr }}>
                Todo sobre firma electrónica en México
              </h2>
              <p className="max-w-2xl mx-auto text-base" style={{ color: t.body, transition: t.tr }}>
                Resuelve tus dudas sobre validez legal, NOM-151, biometría y cumplimiento regulatorio.
              </p>
            </div>
            <FirmaFAQ />
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { href: "/firma-electronica-simple", label: "Firma Simple →" },
                { href: "/firma-electronica-nom-151", label: "Firma NOM-151 →" },
                { href: "/firma-electronica-biometrica", label: "Firma Biométrica →" },
                { href: "/firma-electronica-kyc", label: "Firma + KYC →" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold px-4 py-3 rounded-xl text-center transition-all"
                  style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.15)", color: "#1ECAD3" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL (inner card always dark) ──────────────────── */}
        <section
          id="contacto"
          className="py-20"
          style={{ background: t.bgB, transition: t.tr }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-8 md:p-12 overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #0D1F3C, #071020)", border: "1px solid rgba(30,202,211,0.15)", boxShadow: "0 0 80px rgba(30,202,211,0.07)" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#1ECAD3" }} />
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4 text-center">
                Empieza hoy mismo
              </h2>
              <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
                Elige cómo quieres comenzar con JAAK Firma Electrónica.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.2)" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1ECAD3" }}>Autoservicio</div>
                    <h3 className="text-xl font-black text-white mb-2">Empieza en minutos</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Crea tu cuenta, sube tu primer documento y obtén una firma con NOM-151 sin hablar con nadie.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {["Sin contrato ni permanencia", "Pago por uso", "Soporte por chat"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#1ECAD3" }} aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/autoservicio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105" style={{ background: "#1ECAD3" }}>
                    Probar gratis
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8B5CF6" }}>Enterprise</div>
                    <h3 className="text-xl font-black text-white mb-2">Solución a la medida</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Integración a tu plataforma, onboarding técnico y soporte dedicado. Para volumen alto y cumplimiento regulatorio total.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {["Integración a tu plataforma en días", "Soporte técnico dedicado", "SLA garantizado"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#8B5CF6" }} aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:bg-white/10" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#E2E8F0" }}>
                    Hablar con ventas
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FirmaSEMHandler />

      {/* ── THEME TOGGLE ────────────────────────────────────────── */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          background: isDark ? "rgba(15,23,42,0.85)" : "#0A1628",
          border: `1px solid ${isDark ? "rgba(30,202,211,0.35)" : "rgba(30,202,211,0.5)"}`,
          color: "#1ECAD3",
          backdropFilter: "blur(16px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
        aria-label={isDark ? "Cambiar a vista clara" : "Cambiar a vista oscura"}
      >
        <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
        {isDark ? "Vista clara" : "Vista oscura"}
      </button>
    </>
  );
}
