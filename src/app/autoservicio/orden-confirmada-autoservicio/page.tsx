"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

interface TrainingForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  orderRef: string;
  topics: string[];
  comments: string;
  slot: string;
}

type FormErrors = Partial<Record<keyof TrainingForm, string>>;

// ─── Constants ────────────────────────────────────────────────────────────────

const TIME_SLOTS = [
  {
    id: "martes",
    day: "Martes",
    time: "10:00 – 11:00 AM",
    detail: "Disponible semanalmente",
    duration: "60 min",
  },
  {
    id: "jueves",
    day: "Jueves",
    time: "4:00 – 5:00 PM",
    detail: "Disponible semanalmente",
    duration: "60 min",
  },
];

const SESSION_TOPICS = [
  { id: "acceso", label: "Acceso a plataforma" },
  { id: "configuracion", label: "Configuración inicial" },
  { id: "documentos", label: "Carga de documentos" },
  { id: "kyc", label: "Validaciones / KYC" },
  { id: "firma", label: "Firma electrónica" },
  { id: "dudas", label: "Dudas generales" },
];

const NEXT_STEPS = [
  {
    num: "01",
    color: "#2AD796",
    bg: "rgba(42,215,150,0.15)",
    title: "Compra confirmada",
    desc: "Tu pago fue procesado y tu acceso está activo inmediatamente.",
    done: true,
  },
  {
    num: "02",
    color: "#2DB6C1",
    bg: "rgba(45,182,193,0.15)",
    title: "Accede a tu espacio",
    desc: "Ingresa a JAAK Autoservicio con tus credenciales de registro.",
    done: false,
  },
  {
    num: "03",
    color: "#212A45",
    bg: "rgba(33,42,69,0.15)",
    title: "Crea tu primer flujo",
    desc: "Configura un proceso de verificación en minutos.",
    done: false,
  },
];

const CAPABILITIES = [
  {
    title: "KYC y validación de identidad",
    desc: "Verifica usuarios con precisión documental y biométrica",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="2" />
        <path d="M5 17c0-2 1.5-3 3.5-3s3.5 1 3.5 3" />
        <line x1="14" y1="9" x2="18" y2="9" />
        <line x1="14" y1="13" x2="16" y2="13" />
      </svg>
    ),
  },
  {
    title: "Biometría y prueba de vida",
    desc: "Detección de vivacidad en tiempo real con IA avanzada",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3a2 2 0 00-2 2v2M17 3a2 2 0 012 2v2M5 19a2 2 0 01-2-2v-2M17 19a2 2 0 002-2v-2" />
        <circle cx="11" cy="11" r="3" />
        <path d="M11 6v1M11 15v1M6 11H5M17 11h-1" />
      </svg>
    ),
  },
  {
    title: "Firma electrónica",
    desc: "Documentos firmados con validez legal y trazabilidad total",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 19h9" />
        <path d="M15 3.5a2 2 0 012.8 2.8L7 17l-4 1 1-4L15 3.5z" />
      </svg>
    ),
  },
  {
    title: "Listas AML",
    desc: "Consultas en listas negras, nominales y PLD en tiempo real",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10z" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Expediente digital",
    desc: "Evidencia trazable con respaldo jurídico comprobable",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="13,2 13,8 19,8" />
        <line x1="8" y1="13" x2="14" y2="13" />
        <line x1="8" y1="17" x2="11" y2="17" />
      </svg>
    ),
  },
  {
    title: "KYB Empresarial",
    desc: "Valida personas morales y sus representantes legales",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h18M4 20V8l7-5 7 5v12" />
        <path d="M9 20v-8h4v8" />
      </svg>
    ),
  },
];

const EXPLORE_CARDS = [
  {
    title: "KYC Biométrico",
    desc: "Verifica identidades con biometría facial avanzada",
    href: "/plataforma/verificacion-identidad",
    cta: "Explorar",
    accent: "#2DB6C1",
  },
  {
    title: "KYB Empresarial",
    desc: "Valida personas morales y sus representantes",
    href: "/plataforma/verificacion-empresarial",
    cta: "Explorar",
    accent: "#212A45",
  },
  {
    title: "Firma Electrónica",
    desc: "Firma y valida documentos con trazabilidad total",
    href: "/plataforma/firma-electronica",
    cta: "Explorar",
    accent: "#2AD796",
  },
  {
    title: "Evidencia Digital",
    desc: "Genera expedientes con validez jurídica comprobable",
    href: "/plataforma/gestion-evidencia",
    cta: "Explorar",
    accent: "#2DB6C1",
  },
  {
    title: "Planes y Precios",
    desc: "Opciones flexibles diseñadas para escalar",
    href: "/precios",
    cta: "Ver planes",
    accent: "#212A45",
  },
  {
    title: "Hablar con ventas",
    desc: "Un especialista puede acompañarte en tu proceso",
    href: "/contacto",
    cta: "Contactar",
    accent: "#2AD796",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GraciasPage() {
  const [form, setForm] = useState<TrainingForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    orderRef: "",
    topics: [],
    comments: "",
    slot: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const setField = (field: keyof TrainingForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleTopic = (id: string) => {
    setForm((prev) => ({
      ...prev,
      topics: prev.topics.includes(id)
        ? prev.topics.filter((t) => t !== id)
        : [...prev.topics, id],
    }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Ingresa tu nombre completo";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Ingresa un correo electrónico válido";
    if (!form.phone.trim()) e.phone = "Ingresa tu teléfono o WhatsApp";
    if (!form.slot) e.slot = "Selecciona un horario disponible";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setFormState("loading");
    try {
      const res = await fetch("/api/capacitacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      <style>{`
        @keyframes checkDraw {
          from { stroke-dashoffset: 42; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ringPulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerLine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .g-fade { animation: fadeInUp 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .g-fade-1 { animation-delay: 0.05s; }
        .g-fade-2 { animation-delay: 0.18s; }
        .g-fade-3 { animation-delay: 0.32s; }
        .g-fade-4 { animation-delay: 0.46s; }

        .ring-a { animation: ringPulse 2.4s ease-out infinite; }
        .ring-b { animation: ringPulse 2.4s ease-out infinite 0.6s; }
        .ring-c { animation: ringPulse 2.4s ease-out infinite 1.2s; }

        .g-slot {
          cursor: pointer;
          border: 2px solid #E5E7EB;
          border-radius: 14px;
          padding: 18px;
          transition: all 0.18s ease;
          background: white;
          text-align: left;
          width: 100%;
        }
        .g-slot:hover { border-color: #2DB6C1; box-shadow: 0 0 0 3px rgba(45,182,193,0.1); }
        .g-slot.active {
          border-color: #2DB6C1;
          background: linear-gradient(135deg, rgba(45,182,193,0.07), rgba(42,215,150,0.04));
          box-shadow: 0 0 0 3px rgba(45,182,193,0.14);
        }

        .g-pill {
          cursor: pointer;
          border: 1.5px solid #E5E7EB;
          border-radius: 100px;
          padding: 5px 13px;
          font-size: 0.8125rem;
          transition: all 0.15s ease;
          background: white;
          color: #4A5568;
          white-space: nowrap;
        }
        .g-pill:hover { border-color: #2DB6C1; color: #2DB6C1; }
        .g-pill.active { border-color: #2DB6C1; background: rgba(45,182,193,0.09); color: #2DB6C1; font-weight: 600; }

        .g-input {
          width: 100%;
          border: 1.5px solid #E5E7EB;
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 0.9375rem;
          color: #212A45;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          background: white;
          font-family: inherit;
        }
        .g-input::placeholder { color: #9CA3AF; }
        .g-input:focus { border-color: #2DB6C1; box-shadow: 0 0 0 3px rgba(45,182,193,0.11); }
        .g-input.err { border-color: #EF4444; }
        .g-input.err:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.09); }

        .g-explore {
          border: 1.5px solid #EEEEEE;
          border-radius: 16px;
          padding: 22px;
          background: white;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          gap: 6px;
        }
        .g-explore:hover {
          border-color: #2DB6C1;
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(33,42,69,0.09);
        }

        .g-cap {
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 22px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          transition: all 0.18s ease;
        }
        .g-cap:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(45,182,193,0.35);
          transform: translateY(-2px);
        }

        .g-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .g-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9375rem;
          border: 1.5px solid rgba(255,255,255,0.22);
          color: rgba(255,255,255,0.88);
          background: rgba(255,255,255,0.05);
          cursor: pointer;
          transition: all 0.18s ease;
          backdrop-filter: blur(8px);
          font-family: inherit;
        }
        .g-btn-ghost:hover {
          background: rgba(255,255,255,0.11);
          border-color: rgba(255,255,255,0.38);
        }
      `}</style>

      <main className="min-h-screen bg-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(140deg, #070b1a 0%, #0E1133 35%, #182050 65%, #0a0f28 100%)",
            minHeight: "100dvh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Grid + glow */}
          <div className="absolute inset-0 g-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-100px", right: "-100px",
              width: 560, height: 560,
              background: "radial-gradient(circle, rgba(45,182,193,0.18) 0%, transparent 62%)",
              borderRadius: "50%",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-140px", left: "-80px",
              width: 480, height: 480,
              background: "radial-gradient(circle, rgba(42,215,150,0.12) 0%, transparent 62%)",
              borderRadius: "50%",
            }}
          />

          <div className="relative w-full max-w-4xl mx-auto px-6 py-28 text-center">
            {/* Animated success icon */}
            <div className="g-fade g-fade-1 flex justify-center mb-8">
              <div className="relative flex items-center justify-center">
                <div
                  className="ring-a absolute rounded-full"
                  style={{ width: 92, height: 92, border: "2px solid rgba(45,182,193,0.28)" }}
                />
                <div
                  className="ring-b absolute rounded-full"
                  style={{ width: 92, height: 92, border: "2px solid rgba(45,182,193,0.18)" }}
                />
                <div
                  className="ring-c absolute rounded-full"
                  style={{ width: 92, height: 92, border: "2px solid rgba(45,182,193,0.10)" }}
                />
                <div
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 80, height: 80,
                    background: "linear-gradient(135deg, #2DB6C1 0%, #2AD796 100%)",
                    boxShadow: "0 0 52px rgba(45,182,193,0.48), 0 8px 28px rgba(45,182,193,0.28)",
                  }}
                >
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                      d="M9 19L16 26L29 12"
                      stroke="white"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 42,
                        strokeDashoffset: 42,
                        animation: "checkDraw 0.8s cubic-bezier(0.22,1,0.36,1) forwards 0.3s",
                      }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Status pill */}
            <div className="g-fade g-fade-1 flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{
                  background: "rgba(42,215,150,0.11)",
                  border: "1px solid rgba(42,215,150,0.28)",
                  color: "#2AD796",
                }}
              >
                <span
                  style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "#2AD796", display: "inline-block",
                    boxShadow: "0 0 6px #2AD796",
                  }}
                />
                Pago procesado exitosamente
              </span>
            </div>

            <h1
              className="g-fade g-fade-2 font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)", marginBottom: "1.5rem" }}
            >
              ¡Gracias por{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2DB6C1 20%, #2AD796 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                tu compra!
              </span>
            </h1>

            <p
              className="g-fade g-fade-3 leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: "rgba(255,255,255,0.68)",
                maxWidth: 560,
                margin: "0 auto 2.5rem",
              }}
            >
              Tu pago fue procesado correctamente. Ya puedes comenzar con tu experiencia en{" "}
              <strong className="text-white font-semibold">JAAK Autoservicio</strong>{" "}
              y operar de forma más segura, simple y rápida.
            </p>

            <div className="g-fade g-fade-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://autoservicio.jaak.ai"
                className="btn-cyan"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  textDecoration: "none",
                }}
              >
                Entrar a la plataforma
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7.5h9M9 4l4 3.5L9 11" />
                </svg>
              </a>
              <button onClick={scrollToForm} className="g-btn-ghost">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1.5" y="2.5" width="12" height="10.5" rx="1.5" />
                  <path d="M10.5 1v3M4.5 1v3M1.5 7h12" />
                </svg>
                Agenda tu capacitación
              </button>
            </div>

            {/* Scroll cue */}
            <div className="mt-16 flex justify-center">
              <div
                style={{
                  width: 1, height: 36,
                  background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 2. WHAT'S NEXT ────────────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: "#F3F4F8" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p
                className="text-sm font-bold uppercase tracking-widest mb-3"
                style={{ color: "#2DB6C1", letterSpacing: "0.12em" }}
              >
                Próximos pasos
              </p>
              <h2
                className="font-bold leading-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#212A45" }}
              >
                ¿Qué sigue ahora?
              </h2>
              <p className="mt-3 text-lg" style={{ color: "#4A5568" }}>
                Tres pasos simples para comenzar a operar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {NEXT_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="card hover-lift text-center"
                  style={{ position: "relative" }}
                >
                  {/* Connector arrow */}
                  {i < NEXT_STEPS.length - 1 && (
                    <div
                      className="hidden md:flex items-center justify-center absolute"
                      style={{
                        top: 28, right: -18, zIndex: 10,
                        width: 36, height: 36,
                        background: "white",
                        borderRadius: "50%",
                        border: "1.5px solid #EEEEEE",
                        boxShadow: "0 2px 8px rgba(33,42,69,0.08)",
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#2DB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6.5h9M8 3l3.5 3.5L8 10" />
                      </svg>
                    </div>
                  )}
                  <div
                    className="flex items-center justify-center mx-auto mb-5 font-bold text-sm rounded-2xl"
                    style={{
                      width: 52, height: 52,
                      background: step.color,
                      color: "white",
                      boxShadow: `0 6px 18px ${step.color}55`,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#212A45" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#4A5568", lineHeight: 1.65 }}>{step.desc}</p>
                  {step.done && (
                    <div className="mt-4 flex justify-center">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: "rgba(42,215,150,0.1)", color: "#2AD796" }}
                      >
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.5L3 5.5L8 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Completado
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. TRAINING FORM ──────────────────────────────────────────────── */}
        <section ref={formRef} id="capacitacion" className="section-padding bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-start">

              {/* Left: Value proposition */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6"
                  style={{
                    background: "rgba(45,182,193,0.07)",
                    border: "1px solid rgba(45,182,193,0.18)",
                    color: "#2DB6C1",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="2" width="12" height="11" rx="1" />
                    <path d="M10 1v3M4 1v3M1 6.5h12" />
                  </svg>
                  Sesión de bienvenida incluida
                </div>

                <h2
                  className="font-bold leading-tight mb-4"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", color: "#212A45" }}
                >
                  ¿Quieres una sesión{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    de capacitación?
                  </span>
                </h2>

                <p className="text-lg mb-8 leading-relaxed" style={{ color: "#4A5568" }}>
                  Si deseas acompañamiento para comenzar, déjanos tus datos y elige el horario
                  disponible que mejor te funcione. Nuestro equipo te guiará en tus primeros pasos.
                </p>

                <div className="space-y-3.5">
                  {[
                    "Sesión personalizada de 60 minutos",
                    "Guía paso a paso de la plataforma",
                    "Resolución de dudas en tiempo real",
                    "Sin costo adicional para tu empresa",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: 22, height: 22,
                          background: "linear-gradient(135deg, #2DB6C1, #2AD796)",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{ color: "#4A5568" }}>{b}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 p-4 rounded-2xl flex items-start gap-3"
                  style={{ background: "#F3F4F8", border: "1px solid #EEEEEE" }}
                >
                  <div className="flex-shrink-0 mt-0.5" style={{ color: "#2DB6C1" }}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8.5" cy="8.5" r="7.5" />
                      <path d="M8.5 5.5v4M8.5 12h.01" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    Nuestro equipo confirmará tu sesión por correo dentro de las próximas
                    24 horas hábiles.
                  </p>
                </div>
              </div>

              {/* Right: Form card */}
              <div>
                {formState === "success" ? (
                  <div
                    className="text-center px-8 py-14 rounded-2xl"
                    style={{
                      border: "1.5px solid #EEEEEE", background: "white",
                      boxShadow: "0 10px 40px rgba(33,42,69,0.07)",
                    }}
                  >
                    <div
                      className="mx-auto mb-5 flex items-center justify-center rounded-full"
                      style={{
                        width: 66, height: 66,
                        background: "linear-gradient(135deg, #2DB6C1, #2AD796)",
                        boxShadow: "0 8px 26px rgba(45,182,193,0.38)",
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14L11 19L22 8" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#212A45" }}>
                      ¡Solicitud enviada!
                    </h3>
                    <p className="leading-relaxed mb-6" style={{ color: "#4A5568" }}>
                      Hemos recibido tu solicitud. Nuestro equipo dará seguimiento para confirmar
                      tu sesión de capacitación en las próximas 24 horas hábiles.
                    </p>
                    <a
                      href="https://autoservicio.jaak.ai"
                      className="btn-cyan"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
                    >
                      Entrar a la plataforma
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                      </svg>
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    style={{
                      border: "1.5px solid #EEEEEE",
                      borderRadius: 20,
                      padding: "32px",
                      background: "white",
                      boxShadow: "0 10px 44px rgba(33,42,69,0.07)",
                    }}
                  >
                    <h3 className="font-bold text-xl mb-6" style={{ color: "#212A45" }}>
                      Solicitar capacitación
                    </h3>

                    {/* Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#212A45" }}>
                        Nombre completo <span style={{ color: "#EF4444" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`g-input${errors.name ? " err" : ""}`}
                        placeholder="Tu nombre completo"
                        value={form.name}
                        onChange={(e) => setField("name", e.target.value)}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.name}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#212A45" }}>
                        Empresa{" "}
                        <span className="font-normal text-xs" style={{ color: "#9CA3AF" }}>(opcional)</span>
                      </label>
                      <input
                        type="text"
                        className="g-input"
                        placeholder="Nombre de tu empresa"
                        value={form.company}
                        onChange={(e) => setField("company", e.target.value)}
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "#212A45" }}>
                          Correo <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="email"
                          className={`g-input${errors.email ? " err" : ""}`}
                          placeholder="correo@empresa.com"
                          value={form.email}
                          onChange={(e) => setField("email", e.target.value)}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "#212A45" }}>
                          WhatsApp <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          className={`g-input${errors.phone ? " err" : ""}`}
                          placeholder="+52 55 0000 0000"
                          value={form.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Order ref */}
                    <div className="mb-5">
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#212A45" }}>
                        Número de compra{" "}
                        <span className="font-normal text-xs" style={{ color: "#9CA3AF" }}>(opcional)</span>
                      </label>
                      <input
                        type="text"
                        className="g-input"
                        placeholder="Ej: ORD-12345"
                        value={form.orderRef}
                        onChange={(e) => setField("orderRef", e.target.value)}
                      />
                    </div>

                    {/* Topics */}
                    <div className="mb-5">
                      <label className="block text-sm font-semibold mb-2.5" style={{ color: "#212A45" }}>
                        ¿Qué te gustaría revisar?{" "}
                        <span className="font-normal text-xs" style={{ color: "#9CA3AF" }}>(elige los que apliquen)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SESSION_TOPICS.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            className={`g-pill${form.topics.includes(t.id) ? " active" : ""}`}
                            onClick={() => toggleTopic(t.id)}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Horario */}
                    <div className="mb-5">
                      <label className="block text-sm font-semibold mb-2.5" style={{ color: "#212A45" }}>
                        Elige tu horario disponible{" "}
                        <span style={{ color: "#EF4444" }}>*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {TIME_SLOTS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            className={`g-slot${form.slot === s.id ? " active" : ""}`}
                            onClick={() => {
                              setField("slot", s.id);
                              if (errors.slot)
                                setErrors((prev) => ({ ...prev, slot: undefined }));
                            }}
                          >
                            <div className="flex items-center justify-between mb-2.5">
                              <div
                                className="flex items-center justify-center rounded-lg"
                                style={{
                                  width: 30, height: 30,
                                  background: form.slot === s.id
                                    ? "linear-gradient(135deg, #2DB6C1, #2AD796)"
                                    : "#F3F4F8",
                                  transition: "background 0.18s ease",
                                }}
                              >
                                <svg
                                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                                  stroke={form.slot === s.id ? "white" : "#9CA3AF"}
                                  strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                                >
                                  <rect x="1" y="1.5" width="12" height="11" rx="1.5" />
                                  <path d="M10 0.5v2.5M4 0.5v2.5M1 5.5h12" />
                                </svg>
                              </div>
                              {form.slot === s.id && (
                                <div
                                  className="flex items-center justify-center rounded-full"
                                  style={{ width: 18, height: 18, background: "#2AD796" }}
                                >
                                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                                    <path d="M1 3.5L2.8 5.3L7 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <p className="font-bold text-sm" style={{ color: "#212A45" }}>{s.day}</p>
                            <p className="font-semibold text-sm" style={{ color: "#2DB6C1" }}>{s.time}</p>
                            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>
                              {s.detail} · {s.duration}
                            </p>
                          </button>
                        ))}
                      </div>
                      {errors.slot && (
                        <p className="mt-1.5 text-xs" style={{ color: "#EF4444" }}>{errors.slot}</p>
                      )}
                    </div>

                    {/* Comments */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#212A45" }}>
                        Comentarios adicionales{" "}
                        <span className="font-normal text-xs" style={{ color: "#9CA3AF" }}>(opcional)</span>
                      </label>
                      <textarea
                        className="g-input"
                        rows={3}
                        placeholder="¿Hay algo específico que quieras revisar?"
                        value={form.comments}
                        onChange={(e) => setField("comments", e.target.value)}
                        style={{ resize: "vertical" }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        borderRadius: 10,
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        fontFamily: "inherit",
                        background:
                          formState === "loading"
                            ? "rgba(45,182,193,0.55)"
                            : "linear-gradient(135deg, #2DB6C1 0%, #2AD796 100%)",
                        color: "white",
                        border: "none",
                        cursor: formState === "loading" ? "not-allowed" : "pointer",
                        boxShadow: "0 4px 18px rgba(45,182,193,0.32)",
                        transition: "all 0.18s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      {formState === "loading" ? (
                        <>
                          <svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                            stroke="white" strokeWidth="2"
                            style={{ animation: "spin 0.8s linear infinite" }}
                          >
                            <style>{"@keyframes spin { to { transform: rotate(360deg); } }"}</style>
                            <circle cx="8" cy="8" r="6" strokeOpacity="0.25" />
                            <path d="M8 2a6 6 0 016 6" />
                          </svg>
                          Enviando solicitud…
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2L9 8.5M2 5.5l12-3.5L10.5 14 9 8.5 2 5.5z" />
                          </svg>
                          Solicitar capacitación
                        </>
                      )}
                    </button>

                    {formState === "error" && (
                      <div
                        className="mt-3 px-4 py-3 rounded-lg text-sm text-center"
                        style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)", color: "#DC2626" }}
                      >
                        Ocurrió un error. Por favor intenta de nuevo o escríbenos a{" "}
                        <a href="mailto:soporte@jaak.ai" style={{ fontWeight: 600 }}>soporte@jaak.ai</a>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHAT IS JAAK ───────────────────────────────────────────────── */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: "linear-gradient(140deg, #070b1a 0%, #0E1133 40%, #1a2048 70%, #0E1133 100%)" }}
        >
          <div className="absolute inset-0 g-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%", right: "-8%", transform: "translateY(-50%)",
              width: 420, height: 420,
              background: "radial-gradient(circle, rgba(45,182,193,0.14) 0%, transparent 62%)",
              borderRadius: "50%",
            }}
          />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p
                className="text-sm font-bold uppercase tracking-widest mb-3"
                style={{ color: "#2DB6C1", letterSpacing: "0.12em" }}
              >
                El ecosistema JAAK
              </p>
              <h2
                className="font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Más que una plataforma,{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  un ecosistema de confianza
                </span>
              </h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
                JAAK ayuda a empresas a verificar identidades, firmar documentos y generar
                evidencia digital de forma ágil, segura y confiable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CAPABILITIES.map((cap) => (
                <div key={cap.title} className="g-cap">
                  <div
                    className="flex items-center justify-center rounded-xl mb-4"
                    style={{
                      width: 44, height: 44,
                      background: "rgba(45,182,193,0.14)",
                      color: "#2DB6C1",
                    }}
                  >
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{cap.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. EXPLORE MORE ───────────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: "#F3F4F8" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p
                className="text-sm font-bold uppercase tracking-widest mb-3"
                style={{ color: "#2DB6C1", letterSpacing: "0.12em" }}
              >
                Explora más
              </p>
              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#212A45" }}
              >
                Conoce más soluciones de JAAK
              </h2>
              <p className="text-lg" style={{ color: "#4A5568" }}>
                Herramientas diseñadas para simplificar la validación, firma y trazabilidad
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EXPLORE_CARDS.map((card) => (
                <Link key={card.title} href={card.href} className="g-explore">
                  <div
                    style={{ width: 8, height: 8, borderRadius: "50%", background: card.accent }}
                  />
                  <h3 className="font-bold" style={{ color: "#212A45" }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#4A5568" }}>
                    {card.desc}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-sm font-bold mt-2"
                    style={{ color: card.accent }}
                  >
                    {card.cta}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ──────────────────────────────────────────────────── */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: "linear-gradient(140deg, #070b1a 0%, #0E1133 40%, #1a2048 70%, #0E1133 100%)" }}
        >
          <div className="absolute inset-0 g-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: 640, height: 320,
              background: "radial-gradient(ellipse, rgba(45,182,193,0.07) 0%, transparent 68%)",
            }}
          />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="flex justify-center mb-7">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 20, height: 20,
                    background: "linear-gradient(135deg, #2DB6C1, #2AD796)",
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">JAAK Autoservicio</span>
              </div>
            </div>

            <h2
              className="font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Todo listo para{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                comenzar
              </span>
            </h2>

            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.62)" }}>
              Accede directamente a la plataforma o solicita acompañamiento para comenzar
              con confianza y sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://autoservicio.jaak.ai"
                className="btn-cyan"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7.5h9M9 4l4 3.5L9 11" />
                </svg>
                Entrar a la plataforma
              </a>
              <button onClick={scrollToForm} className="g-btn-ghost">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1.5" y="2.5" width="12" height="10.5" rx="1.5" />
                  <path d="M10.5 1v3M4.5 1v3M1.5 7h12" />
                </svg>
                Solicitar capacitación
              </button>
            </div>

            {/* Trust badges */}
            <div
              className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {["ISO 27001", "ISO 9001", "NOM-151", "LFPIORPI"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: "rgba(255,255,255,0.32)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M5.5 1L6.8 3.8l3 .4-2.2 2.1.5 3L5.5 7.8 3 9.3l.5-3L1.3 4.2l3-.4z" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Minimal footer ──────────────────────────────────────────────── */}
        <footer
          className="py-8 text-center text-sm"
          style={{ borderTop: "1px solid #EEEEEE", color: "#9CA3AF" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span>© {new Date().getFullYear()} JAAK. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <div className="flex items-center gap-5">
              <Link href="/privacidad" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                Privacidad
              </Link>
              <Link href="/terminos" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                Términos
              </Link>
              <Link href="/contacto" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                Contacto
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
