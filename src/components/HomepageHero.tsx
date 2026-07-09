"use client";

import Link from "next/link";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { STATS, NUM_CERTIFICACIONES } from "@/lib/trust";

const navPills = [
  { label: "Autoservicio", href: "/autoservicio" },
  { label: "Firma Digital NOM-151", href: "/signa" },
  { label: "Cumplimiento PLD/AML", href: "/cumplimiento/pld-aml" },
  { label: "Ver precios", href: "/precios" },
];

const kycSteps = [
  { label: "Prueba de vida anti-spoofing", icon: "eye" },
  { label: "Biometría facial 1:1", icon: "biometric" },
  { label: "OCR documental", icon: "document" },
  { label: "Geolocalización", icon: "location" },
  { label: "Listas nominales (INE/RENAPO)", icon: "list" },
  { label: "Listas negras (OFAC/SAT)", icon: "ban" },
];

const stepIcons: Record<string, ReactNode> = {
  eye: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  biometric: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
    </svg>
  ),
  document: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  list: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  ban: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
};

type KYCPhase = "scanning" | "processing" | "done";

export default function HomepageHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<KYCPhase>("scanning");
  const [step, setStep] = useState(-1);
  const [inView, setInView] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!reduceMotion) return;
    setPhase("done");
    setStep(kycSteps.length - 1);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    if (phase === "scanning") {
      const t = setTimeout(() => { setPhase("processing"); setStep(0); }, 2800);
      return () => clearTimeout(t);
    } else if (phase === "processing") {
      if (step < kycSteps.length - 1) {
        const t = setTimeout(() => setStep((s) => s + 1), 820);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("done"), 700);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(() => { setPhase("scanning"); setStep(-1); }, 2200);
      return () => clearTimeout(t);
    }
  }, [phase, step, inView, reduceMotion]);

  return (
    <section ref={sectionRef} className="hp-section min-h-screen pt-28 relative overflow-hidden" style={{ background: "#F3F4F8" }}>
      {/* Ambient glows */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(45,182,193,0.04)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(42,215,150,0.03)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">

        {/* Nav pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16" data-sr>
          {navPills.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200"
              style={{
                color: "var(--hp-neutral-pill-text)",
                border: "1px solid var(--hp-neutral-pill-border)",
                background: "var(--hp-neutral-pill-bg)",
                backdropFilter: "blur(12px)",
              }}
            >
              {p.label}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left copy ── */}
          <div data-sr="left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(45,182,193,0.10)",
                border: "1px solid rgba(45,182,193,0.20)",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2DB6C1" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#2DB6C1" }}>
                Plataforma para entornos regulados
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-black text-[#212A45] leading-[1.06] mb-6 tracking-tight">
              Verifica identidad.{" "}
              <br className="hidden sm:block" />
              <span style={{ color: "#212A45" }}>
                Genera evidencia legal.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl mb-5 leading-relaxed max-w-lg" style={{ color: "#64748B" }}>
              KYC biométrico y Firma Digital con Validez NOM-151, con expediente
              auditable. Diseñado para cumplir CNBV, UIF y LFPIORPI.
            </p>

            {/* Marca blanca callout */}
            <div
              className="flex items-center gap-2.5 mb-5 px-4 py-2.5 rounded-xl max-w-lg"
              style={{
                background: "rgba(42,215,150,0.08)",
                border: "1px solid rgba(42,215,150,0.18)",
              }}
            >
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-xs font-medium" style={{ color: "#2AD796" }}>
                Disponible en <strong>marca blanca</strong> — tu logo, tus colores y mensajes personalizados.
              </p>
            </div>

            {/* Urgency */}
            <p className="text-sm font-medium mb-10 max-w-lg flex items-start gap-2" style={{ color: "#EA8C30" }}>
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Verificar no basta. En una auditoría te van a pedir evidencia, no capturas de pantalla.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center px-7 py-4 text-white font-bold text-base rounded-xl transition-all will-change-transform duration-200 group"
                style={{
                  background: "linear-gradient(135deg, #2DB6C1, #25969f)",
                  boxShadow: "0 8px 28px rgba(45,182,193,0.28)",
                }}
              >
                Comenzar ahora
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-4 font-semibold text-base rounded-xl transition-colors duration-200"
                style={{
                  color: "#212A45",
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(33,42,69,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                Solicitar demo
              </Link>
            </div>

            <p className="text-xs" style={{ color: "#94A3B8" }}>
              Para financieras, fintechs, inmobiliarias y organizaciones sujetas a cumplimiento regulatorio.
            </p>
          </div>

          {/* ── Right: animated KYC card ── */}
          <div className="relative flex items-center justify-center" data-sr="right">
            <div
              className="absolute inset-0 blur-3xl rounded-full scale-75 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(45,182,193,0.14), rgba(42,215,150,0.06), transparent 70%)" }}
            />

            <div className="relative z-10 w-full max-w-sm">
              {/* Main card */}
              <div
                className="rounded-3xl p-6"
                style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)" }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)", boxShadow: "0 4px 16px rgba(45,182,193,0.35)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: "#212A45" }}>Proceso KYC activo</div>
                      <div className="text-xs" style={{ color: "#94A3B8" }}>Evidencia siendo generada</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2AD796" }} />
                    <span className="text-xs font-semibold" style={{ color: "#2AD796" }}>En vivo</span>
                  </div>
                </div>

                {/* ── Animated area (fixed height to avoid layout shifts) ── */}
                <div className="relative mb-5" style={{ minHeight: "232px" }}>

                  {/* SCAN phase */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: phase === "scanning" ? 1 : 0, pointerEvents: phase === "scanning" ? "auto" : "none" }}
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        height: "232px",
                        background: "linear-gradient(160deg, rgba(8,20,40,0.96) 0%, rgba(14,30,52,0.96) 100%)",
                        border: "1px solid rgba(45,182,193,0.35)",
                        boxShadow: "inset 0 0 40px rgba(45,182,193,0.06)",
                      }}
                    >
                      {/* Horizontal scan lines (subtle grid) */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(45,182,193,0.04) 12px, rgba(45,182,193,0.04) 13px)",
                        }}
                      />

                      {/* Corner brackets */}
                      <div className="absolute top-4 left-4 w-7 h-7" style={{ borderTop: "2px solid #2DB6C1", borderLeft: "2px solid #2DB6C1", boxShadow: "0 0 8px rgba(45,182,193,0.6)" }} />
                      <div className="absolute top-4 right-4 w-7 h-7" style={{ borderTop: "2px solid #2DB6C1", borderRight: "2px solid #2DB6C1", boxShadow: "0 0 8px rgba(45,182,193,0.6)" }} />
                      <div className="absolute bottom-10 left-4 w-7 h-7" style={{ borderBottom: "2px solid #2DB6C1", borderLeft: "2px solid #2DB6C1", boxShadow: "0 0 8px rgba(45,182,193,0.6)" }} />
                      <div className="absolute bottom-10 right-4 w-7 h-7" style={{ borderBottom: "2px solid #2DB6C1", borderRight: "2px solid #2DB6C1", boxShadow: "0 0 8px rgba(45,182,193,0.6)" }} />

                      {/* Face outline */}
                      <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "32px" }}>
                        <svg width="90" height="100" viewBox="0 0 80 90" fill="none" style={{ opacity: 0.55 }}>
                          <ellipse cx="40" cy="34" rx="24" ry="30" stroke="#2DB6C1" strokeWidth="1.5"/>
                          <path d="M18 72 Q40 62 62 72" stroke="#2DB6C1" strokeWidth="1.5" fill="none"/>
                          <circle cx="30" cy="29" r="4" stroke="#2DB6C1" strokeWidth="1.5"/>
                          <circle cx="50" cy="29" r="4" stroke="#2DB6C1" strokeWidth="1.5"/>
                          <path d="M33 44 Q40 48 47 44" stroke="#2DB6C1" strokeWidth="1.5" fill="none"/>
                          <circle cx="30" cy="29" r="1.5" fill="#2DB6C1" opacity="0.8"/>
                          <circle cx="50" cy="29" r="1.5" fill="#2DB6C1" opacity="0.8"/>
                          {/* Nose bridge */}
                          <path d="M40 36 L38 42 L42 42" stroke="#2DB6C1" strokeWidth="1" fill="none" opacity="0.6"/>
                        </svg>
                      </div>

                      {/* Scan beam — vivid green-cyan line */}
                      <div
                        className="hp-scan-beam"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(45,182,193,0.4) 20%, rgba(45,182,193,1) 50%, rgba(45,182,193,0.4) 80%, transparent 100%)",
                          boxShadow: "0 0 18px rgba(45,182,193,0.90), 0 0 6px rgba(42,215,150,0.70), 0 2px 24px rgba(45,182,193,0.50)",
                        }}
                      />

                      {/* Status bar */}
                      <div
                        className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center gap-2"
                        style={{ background: "rgba(45,182,193,0.12)", borderTop: "1px solid rgba(45,182,193,0.25)" }}
                      >
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2DB6C1" }} />
                        <span className="text-xs font-semibold" style={{ color: "#2DB6C1" }}>
                          Escaneando biometría facial…
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PROCESSING + DONE phase */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: phase !== "scanning" ? 1 : 0, pointerEvents: phase !== "scanning" ? "auto" : "none" }}
                  >
                    <div className="space-y-1.5">
                      {kycSteps.map((s, i) => {
                        const done = phase === "done" || i < step;
                        const active = phase === "processing" && i === step;
                        return (
                          <div
                            key={s.label}
                            className="flex items-center justify-between px-3.5 py-2 rounded-xl transition-colors duration-500"
                            style={{
                              background: done
                                ? "linear-gradient(90deg, rgba(45,182,193,0.12), rgba(42,215,150,0.06))"
                                : active
                                ? "var(--hp-step-active-bg)"
                                : "var(--hp-step-inactive-bg)",
                              border: done
                                ? "1px solid rgba(42,215,150,0.18)"
                                : active
                                ? "1px solid var(--hp-step-active-border)"
                                : "1px solid var(--hp-step-inactive-border)",
                            }}
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className="flex-shrink-0"
                                style={{
                                  color: done ? "var(--hp-text-hi)" : active ? "var(--hp-text-md)" : "var(--hp-text-faint)",
                                }}
                              >
                                {stepIcons[s.icon]}
                              </span>
                              <span
                                className="text-xs font-medium"
                                style={{
                                  color: done ? "var(--hp-text-hi)" : active ? "var(--hp-text-md)" : "var(--hp-text-faint)",
                                }}
                              >
                                {s.label}
                              </span>
                            </div>
                            {done ? (
                              <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : active ? (
                              <div
                                className="w-3.5 h-3.5 rounded-full border-2 animate-spin flex-shrink-0"
                                style={{ borderColor: "var(--hp-spinner-track)", borderTopColor: "#2DB6C1" }}
                              />
                            ) : null}
                          </div>
                        );
                      })}

                      {/* Done banner */}
                      {phase === "done" && (
                        <div
                          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl mt-2"
                          style={{
                            background: "linear-gradient(90deg, rgba(42,215,150,0.14), rgba(45,182,193,0.07))",
                            border: "1px solid rgba(42,215,150,0.28)",
                          }}
                        >
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-semibold" style={{ color: "#2AD796" }}>
                            Expediente generado — listo para auditoría
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(33,42,69,0.08)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2DB6C1" }} />
                    <span className="text-xs font-mono" style={{ color: "#94A3B8" }}>Ejemplo ilustrativo</span>
                  </div>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>NOM-151 ✓</span>
                </div>
              </div>

              {/* Floating badges — keep white text with inline style (colored bg, always dark) */}
              <div
                className="absolute -top-4 -right-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                style={{ background: "linear-gradient(135deg, #2DB6C1, #25969f)", boxShadow: "0 4px 16px rgba(45,182,193,0.40)", color: "white" }}
              >
                ISO 27001
              </div>
              <div
                className="absolute -bottom-4 -left-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                style={{ background: "linear-gradient(135deg, #0E1133, #2DB6C1)", boxShadow: "0 4px 16px rgba(14,17,51,0.50)", color: "white" }}
              >
                iBeta PAD
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(33,42,69,0.08)" }}
          data-sr-grid
        >
          {[
            { value: STATS.empresasReguladas, label: "Empresas reguladas" },
            { value: STATS.precisionBiometrica, label: "Precisión biométrica" },
            { value: String(NUM_CERTIFICACIONES), label: "Certificaciones activas" },
            { value: STATS.verificacionBiometrica, label: "Tiempo de verificación" },
          ].map((s, i) => (
            <div
              key={i}
              className="px-6 py-5 text-center"
              style={{ borderRight: i < 3 ? "1px solid rgba(33,42,69,0.08)" : "none" }}
            >
              <div
                className="text-2xl md:text-3xl font-black"
                style={{ color: "#2DB6C1" }}
              >
                {s.value}
              </div>
              <div className="text-xs mt-1 font-medium" style={{ color: "#94A3B8" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
