"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const features = [
  { label: "KYC & KYB",       icon: "👤", href: "/plataforma/kyc-kyb" },
  { label: "Firma Electrónica", icon: "✍️", href: "/signa" },
  { label: "Cumplimiento PLD", icon: "🛡️", href: "/cumplimiento/pld-aml" },
  { label: "Precios",          icon: "💎", href: "/precios" },
];

export default function HeroRegulated() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  const verifications = [
    { label: "Identidad biométrica", done: true },
    { label: "Documento validado",   done: true },
    { label: "Prueba de vida",       done: active >= 1 },
    { label: "Firma electrónica",    done: active >= 2 },
  ];

  return (
    <section
      className="min-h-screen pt-28 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* 3D depth — large soft ambient glows */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(45,182,193,0.13) 0%, transparent 65%)",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(42,215,150,0.10) 0%, transparent 65%)",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(45,182,193,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Fine dot grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2DB6C1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">

        {/* Quick-nav pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {features.map((f) => (
            <Link
              key={f.label}
              href={f.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: "#4A5568",
                border: "1px solid rgba(45,182,193,0.22)",
                background: "rgba(255,255,255,0.80)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 2px 8px rgba(45,182,193,0.08)",
              }}
            >
              <span>{f.icon}</span>
              {f.label}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div>
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(45,182,193,0.08)",
                border: "1px solid rgba(45,182,193,0.22)",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2DB6C1" }} />
              <span className="text-sm font-medium" style={{ color: "#2DB6C1" }}>
                Diseñado para entornos regulados
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight" style={{ color: "#0E1133" }}>
              Identidad digital que{" "}
              <span style={{
                background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                resiste auditorías
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-lg" style={{ color: "#4A5568" }}>
              KYC, KYB y firma electrónica con evidencia legal auditable,
              operando bajo los marcos regulatorios más exigentes de México y Latinoamérica.
            </p>

            {/* Tension */}
            <div
              className="flex items-start gap-3 p-4 rounded-2xl mb-10 max-w-lg"
              style={{
                background: "rgba(239,68,68,0.05)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#ef4444" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-medium leading-relaxed" style={{ color: "#b91c1c" }}>
                ¿Podrías demostrar hoy, con evidencia legal, cómo validaste cada identidad ante una auditoría?
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-4 text-white font-bold text-base rounded-xl transition-all duration-200 group hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #2DB6C1, #25969f)",
                  boxShadow: "0 8px 24px rgba(45,182,193,0.30), 0 2px 6px rgba(45,182,193,0.20)",
                }}
              >
                Solicitar revisión regulatoria
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center px-7 py-4 font-semibold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: "#0E1133",
                  background: "rgba(255,255,255,0.80)",
                  border: "1px solid rgba(14,17,51,0.12)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 2px 8px rgba(14,17,51,0.06)",
                }}
              >
                Ver soluciones
              </Link>
            </div>

            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Para organizaciones sujetas a auditorías, supervisión regulatoria y cumplimiento normativo.
            </p>
          </div>

          {/* ── Right – Glass verification card ── */}
          <div className="relative flex items-center justify-center">

            {/* Card glow backdrop */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(45,182,193,0.15) 0%, rgba(42,215,150,0.08) 40%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.1)",
              }}
            />

            {/* Extra right padding so floating chips are visible */}
            <div className="relative z-10 w-full max-w-md pr-0 xl:pr-16">

              {/* Main glass card */}
              <div
                className="rounded-3xl p-7"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "1px solid rgba(255,255,255,0.90)",
                  boxShadow: "0 32px 80px rgba(33,42,69,0.10), 0 4px 16px rgba(45,182,193,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #2DB6C1, #2AD796)",
                        boxShadow: "0 4px 16px rgba(45,182,193,0.35)",
                      }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#0E1133" }}>Verificación completa</div>
                      <div className="text-xs" style={{ color: "#94A3B8" }}>Evidencia auditable</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2AD796" }} />
                    <span className="text-xs font-medium" style={{ color: "#2AD796" }}>En vivo</span>
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
                          ? "linear-gradient(90deg, rgba(45,182,193,0.08), rgba(42,215,150,0.05))"
                          : "rgba(14,17,51,0.03)",
                        border: v.done
                          ? "1px solid rgba(42,215,150,0.22)"
                          : "1px solid rgba(14,17,51,0.06)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{
                            background: v.done ? "rgba(45,182,193,0.12)" : "rgba(14,17,51,0.04)",
                          }}
                        >
                          <span className="text-sm">{["👤", "📄", "👁️", "✍️"][i]}</span>
                        </div>
                        <span className="text-sm font-medium" style={{ color: v.done ? "#0E1133" : "#94A3B8" }}>
                          {v.label}
                        </span>
                      </div>
                      {v.done ? (
                        <svg className="w-5 h-5" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <div
                          className="w-5 h-5 rounded-full border-2 animate-spin"
                          style={{ borderColor: "rgba(14,17,51,0.10)", borderTopColor: "#2DB6C1" }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(14,17,51,0.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2DB6C1" }} />
                    <span className="text-xs font-mono" style={{ color: "#94A3B8" }}>Hash: 0x7f3a…9c2d</span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: "#2DB6C1" }}>Blockchain ✓</span>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-4 -right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2DB6C1, #25969f)",
                  boxShadow: "0 4px 16px rgba(45,182,193,0.40)",
                }}
              >
                ISO 27001
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #0E1133, #212A45)",
                  boxShadow: "0 4px 16px rgba(14,17,51,0.30)",
                }}
              >
                iBeta
              </div>

              {/* 99% stat chip — right side, inside pr-16 padding space */}
              <div
                className="absolute right-0 top-1/3 hidden xl:flex flex-col items-center justify-center w-20 h-20 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(45,182,193,0.20)",
                  boxShadow: "0 4px 20px rgba(45,182,193,0.12), 0 1px 4px rgba(14,17,51,0.06)",
                }}
              >
                <div
                  className="text-xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #2DB6C1, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  99%
                </div>
                <div className="text-xs font-medium mt-0.5" style={{ color: "#64748B" }}>Precisión</div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.70)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(45,182,193,0.14)",
            boxShadow: "0 4px 24px rgba(33,42,69,0.06)",
          }}
        >
          {[
            { value: "+50",  label: "Empresas reguladas" },
            { value: "99%",  label: "Precisión biométrica" },
            { value: "5",    label: "Certificaciones activas" },
            { value: "< 5s", label: "Tiempo de verificación" },
          ].map((s, i) => (
            <div
              key={i}
              className="px-6 py-5 text-center"
              style={{ borderRight: i < 3 ? "1px solid rgba(14,17,51,0.06)" : "none" }}
            >
              <div
                className="text-2xl md:text-3xl font-black"
                style={{
                  background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-sm mt-1 font-medium" style={{ color: "#64748B" }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
