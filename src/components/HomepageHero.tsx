"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navPills = [
  { label: "KYC & Biometría", href: "/plataforma/kyc-kyb" },
  { label: "Firma Electrónica NOM-151", href: "/signa" },
  { label: "Cumplimiento PLD/AML", href: "/cumplimiento/pld-aml" },
  { label: "Precios", href: "/precios" },
];

const kycSteps = [
  { label: "Prueba de vida pasiva", icon: "👁️" },
  { label: "Biometría 1:1", icon: "🤳" },
  { label: "OCR documental", icon: "📄" },
  { label: "Geolocalización", icon: "📍" },
  { label: "Listas nominales", icon: "🗂️" },
  { label: "Listas negras", icon: "🚫" },
];

export default function HomepageHero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((p) => (p + 1) % kycSteps.length), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="min-h-screen pt-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A1628 0%, #0E1133 45%, #0A1628 100%)" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.08)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(42,215,150,0.06)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">

        {/* Nav pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {navPills.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:text-white hover:border-white/20"
              style={{
                color: "rgba(255,255,255,0.50)",
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
              }}
            >
              {p.label}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left copy ── */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(30,202,211,0.10)",
                border: "1px solid rgba(30,202,211,0.20)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#1ECAD3" }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1ECAD3" }}>
                Plataforma para entornos regulados
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.06] mb-6 tracking-tight">
              Verifica identidad.{" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Genera evidencia legal.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl mb-5 leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              KYC biométrico y firma electrónica NOM-151 con expediente auditable,
              diseñados para cumplir con CNBV, UIF y LFPIORPI.
            </p>

            {/* Urgency line */}
            <p
              className="text-sm font-medium mb-10 max-w-lg flex items-start gap-2"
              style={{ color: "rgba(255,160,80,0.90)" }}
            >
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Verificar no basta. En una auditoría te van a pedir evidencia, no capturas de pantalla.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center px-7 py-4 text-white font-bold text-base rounded-xl transition-all duration-200 group"
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #17a8b0)",
                  boxShadow: "0 8px 28px rgba(30,202,211,0.28)",
                }}
              >
                Comenzar ahora
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-4 font-semibold text-base rounded-xl transition-all duration-200"
                style={{
                  color: "rgba(255,255,255,0.80)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                Solicitar demo
              </Link>
            </div>

            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Para financieras, fintechs, inmobiliarias y organizaciones sujetas a cumplimiento regulatorio.
            </p>
          </div>

          {/* ── Right: verification card ── */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind card */}
            <div
              className="absolute inset-0 blur-3xl rounded-full scale-75 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(30,202,211,0.14), rgba(42,215,150,0.06), transparent 70%)",
              }}
            />

            <div className="relative z-10 w-full max-w-sm">
              {/* Main card */}
              <div
                className="rounded-3xl p-6"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.07)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                        boxShadow: "0 4px 16px rgba(30,202,211,0.35)",
                      }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Proceso KYC activo</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Evidencia siendo generada
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2AD796" }} />
                    <span className="text-xs font-semibold" style={{ color: "#2AD796" }}>En vivo</span>
                  </div>
                </div>

                {/* KYC steps list */}
                <div className="space-y-2.5 mb-5">
                  {kycSteps.map((s, i) => {
                    const done = i < step;
                    const active = i === step;
                    return (
                      <div
                        key={s.label}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-500"
                        style={{
                          background: done
                            ? "linear-gradient(90deg, rgba(30,202,211,0.12), rgba(42,215,150,0.06))"
                            : active
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.02)",
                          border: done
                            ? "1px solid rgba(42,215,150,0.18)"
                            : active
                            ? "1px solid rgba(255,255,255,0.12)"
                            : "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{s.icon}</span>
                          <span
                            className="text-xs font-medium"
                            style={{
                              color: done
                                ? "rgba(255,255,255,0.80)"
                                : active
                                ? "rgba(255,255,255,0.65)"
                                : "rgba(255,255,255,0.28)",
                            }}
                          >
                            {s.label}
                          </span>
                        </div>
                        {done ? (
                          <svg
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: "#2AD796" }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : active ? (
                          <div
                            className="w-4 h-4 rounded-full border-2 animate-spin flex-shrink-0"
                            style={{
                              borderColor: "rgba(255,255,255,0.10)",
                              borderTopColor: "#1ECAD3",
                            }}
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div
                  className="pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1ECAD3" }} />
                    <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                      exp_0x9f2a…b37c
                    </span>
                  </div>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>NOM-151 ✓</span>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #17a8b0)",
                  boxShadow: "0 4px 16px rgba(30,202,211,0.40)",
                }}
              >
                ISO 27001
              </div>
              <div
                className="absolute -bottom-4 -left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #0E1133, #1ECAD3)",
                  boxShadow: "0 4px 16px rgba(14,17,51,0.50)",
                }}
              >
                iBeta PAD
              </div>

              {/* Side stat */}
              <div
                className="absolute -right-10 top-1/3 hidden xl:flex flex-col items-center px-4 py-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  99%
                </div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Precisión
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {[
            { value: "+50", label: "Empresas reguladas" },
            { value: "99%", label: "Precisión biométrica" },
            { value: "5", label: "Certificaciones activas" },
            { value: "< 5 s", label: "Tiempo de verificación" },
          ].map((s, i) => (
            <div
              key={i}
              className="px-6 py-5 text-center"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
            >
              <div
                className="text-2xl md:text-3xl font-black"
                style={{
                  background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-xs mt-1 font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
