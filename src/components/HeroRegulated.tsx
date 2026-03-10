"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const features = [
  { label: "KYC & KYB", icon: "👤", href: "/plataforma/kyc-kyb" },
  { label: "Firma Electrónica", icon: "✍️", href: "/signa" },
  { label: "Cumplimiento", icon: "🛡️", href: "/cumplimiento/pld-aml" },
  { label: "Precios", icon: "💎", href: "/precios" },
];

export default function HeroRegulated() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  const verifications = [
    { label: "Identidad biométrica", done: true },
    { label: "Documento validado", done: true },
    { label: "Prueba de vida", done: active >= 1 },
    { label: "Firma electrónica", done: active >= 2 },
  ];

  return (
    <section className="min-h-screen bg-[#060610] pt-28 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#0066ff]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00d4aa]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-[#7c3aed]/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        {/* Quick-nav pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {features.map((f) => (
            <Link
              key={f.label}
              href={f.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/70 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <span>{f.icon}</span>
              {f.label}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse" />
              <span className="text-sm text-white/70">Diseñado para entornos regulados</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-6 tracking-tight">
              Identidad digital que{" "}
              <span className="bg-gradient-to-r from-[#0066ff] via-[#3d8bff] to-[#00d4aa] bg-clip-text text-transparent">
                resiste auditorías
              </span>
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl text-white/55 mb-6 leading-relaxed max-w-lg">
              KYC, KYB y firma electrónica con evidencia legal auditable,
              operando bajo los marcos regulatorios más exigentes de México y Latinoamérica.
            </p>

            {/* Tension */}
            <p className="text-base text-[#ff6b6b]/90 font-medium mb-10 flex items-start gap-2 max-w-lg">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              ¿Podrías demostrar hoy, con evidencia legal, cómo validaste cada identidad ante una auditoría?
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white font-bold text-base rounded-xl hover:from-[#0052cc] hover:to-[#003d99] transition-all duration-200 shadow-lg shadow-[#0066ff]/25 group"
              >
                Solicitar revisión regulatoria
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center px-7 py-4 bg-white/5 border border-white/15 text-white font-semibold text-base rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-md"
              >
                Ver soluciones
              </Link>
            </div>

            {/* Filter */}
            <p className="text-sm text-white/35">
              Para organizaciones sujetas a auditorías, supervisión regulatoria y cumplimiento normativo.
            </p>
          </div>

          {/* ── Right – Glass card ── */}
          <div className="relative flex items-center justify-center">
            {/* outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/20 to-[#00d4aa]/15 blur-3xl rounded-full scale-75" />

            <div className="relative z-10 w-full max-w-md">
              {/* Main glass card */}
              <div
                className="rounded-3xl border border-white/12 p-7 shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0066ff]/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Verificación completa</div>
                      <div className="text-white/45 text-xs">Evidencia auditable</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse" />
                    <span className="text-[#00d4aa] text-xs font-medium">En vivo</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-3 mb-6">
                  {verifications.map((v, i) => (
                    <div
                      key={v.label}
                      className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-500"
                      style={{
                        background: v.done
                          ? "linear-gradient(90deg, rgba(0,102,255,0.12), rgba(0,212,170,0.08))"
                          : "rgba(255,255,255,0.03)",
                        border: v.done
                          ? "1px solid rgba(0,212,170,0.2)"
                          : "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{
                            background: v.done ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.05)",
                          }}
                        >
                          <span className="text-sm">{["👤", "📄", "👁️", "✍️"][i]}</span>
                        </div>
                        <span className="text-white/75 text-sm">{v.label}</span>
                      </div>
                      {v.done ? (
                        <svg className="w-5 h-5 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0066ff] rounded-full" />
                    <span className="text-white/35 text-xs font-mono">Hash: 0x7f3a…9c2d</span>
                  </div>
                  <span className="text-white/35 text-xs">Blockchain ✓</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #00b892)",
                  color: "#000",
                  boxShadow: "0 4px 20px rgba(0,212,170,0.4)",
                }}>
                ISO 27001
              </div>
              <div className="absolute -bottom-4 -left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #0066ff, #0052cc)",
                  boxShadow: "0 4px 20px rgba(0,102,255,0.4)",
                }}>
                iBeta
              </div>

              {/* Mini stat card floating */}
              <div
                className="absolute -right-8 top-1/3 hidden xl:block px-4 py-3 rounded-2xl border border-white/10 text-center min-w-[90px]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="text-2xl font-black text-white">99%</div>
                <div className="text-white/45 text-xs">Precisión</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quick stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/8"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {[
            { value: "+50", label: "Empresas reguladas" },
            { value: "99%", label: "Precisión biométrica" },
            { value: "5", label: "Certificaciones activas" },
            { value: "< 5s", label: "Tiempo de verificación" },
          ].map((s, i) => (
            <div
              key={i}
              className="px-6 py-5 text-center"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-white/45 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
