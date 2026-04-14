"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TurnstileWidget,
  getUtmParams,
} from "@/components/CloudflareTurnstile";

// ── Tipos ──────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  ciudad: string;
  interes: string;
  contacto: boolean;
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface BulletItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ComponentItem {
  name: string;
  tag: string;
}

interface UseCase {
  sector: string;
  description: string;
  color: string;
}

// ── Datos ──────────────────────────────────────────────────────────────────

const jaakBullets: BulletItem[] = [
  {
    title: "Identidad digital",
    description:
      "Verificamos quién dice ser la persona que realiza una operación. Sin intermediarios, sin papel, con evidencia biométrica desde el origen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: "Procesos verificables",
    description:
      "Cada acción queda registrada con evidencia criptográfica. Los procesos pueden auditarse en cualquier momento sin depender de la memoria de nadie.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Evidencia auditable",
    description:
      "Expedientes digitales que cumplen con CNBV, UIF y NOM-151. Listos para inspección regulatoria sin preparación adicional.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const kycComponents: ComponentItem[] = [
  { name: "Validación 1:1", tag: "Biometría" },
  { name: "Prueba de vida", tag: "Liveness" },
  { name: "Geolocalización", tag: "Contexto" },
  { name: "Listas nominales", tag: "RENAPO" },
  { name: "Listas negras", tag: "AML / PLD" },
  { name: "OCR documental", tag: "INE / Pasaporte" },
];

const firmaComponents: ComponentItem[] = [
  { name: "Formalización digital", tag: "Firma electrónica" },
  { name: "Evidencia integrada", tag: "NOM-151" },
  { name: "API / Web / SDK", tag: "Integración" },
];

const useCases: UseCase[] = [
  {
    sector: "Fintech",
    description:
      "Onboarding digital sin papel. Validación de identidad en tiempo real para apertura de cuentas y créditos.",
    color: "#1ECAD3",
  },
  {
    sector: "Banca",
    description:
      "Cumplimiento regulatorio ante CNBV y UIF. Infraestructura biométrica propia sin dependencia de terceros.",
    color: "#655DC6",
  },
  {
    sector: "Inmobiliario",
    description:
      "Contratos con firma electrónica avanzada. Expediente digital auditable para cada operación.",
    color: "#2AD796",
  },
  {
    sector: "Recursos humanos",
    description:
      "Alta de empleados 100% digital. Verificación de identidad y firma de contratos sin presencia física.",
    color: "#1ECAD3",
  },
  {
    sector: "Plataformas digitales",
    description:
      "KYC integrado en tu producto. APIs y SDKs listos para implementar en días, no meses.",
    color: "#655DC6",
  },
];

// ── SVG Components inline ──────────────────────────────────────────────────

function EfisysLogomark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Swoosh azul marino */}
      <path
        d="M30 6C30 6 38 13 30 20C22 27 14 21 8 28C4 33 8 40 14 40"
        stroke="#1A5FAF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Swoosh verde lima */}
      <path
        d="M22 2C22 2 40 8 36 22C32 32 22 30 16 36C11 41 16 46 22 43"
        stroke="#8DC63F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}

function EfisysMarketplaceLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <EfisysLogomark className="w-9 h-9 flex-shrink-0" />
      <div className="flex flex-col leading-tight">
        <span
          className="font-black text-xl tracking-tight"
          style={{ color: "#1A3A5C", fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          EFISYS
        </span>
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: "#1A3A5C", opacity: 0.7 }}
        >
          MARKETPLACE
        </span>
      </div>
    </div>
  );
}

function EfisysMarketplaceLogoLight({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <EfisysLogomark className="w-9 h-9 flex-shrink-0" />
      <div className="flex flex-col leading-tight">
        <span
          className="font-black text-xl tracking-tight text-white"
          style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          EFISYS
        </span>
        <span className="text-xs font-semibold tracking-widest text-white/60">
          MARKETPLACE
        </span>
      </div>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────

export default function EfisysLabConnectPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    ciudad: "",
    interes: "",
    contacto: false,
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setErrorMessage("Error de verificación de seguridad. Por favor, recarga la página.");
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileKey((k) => k + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Por favor, completa la verificación de seguridad.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const utmParams = getUtmParams();

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          empresa: formData.empresa,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: `Cargo: ${formData.cargo}. Ciudad: ${formData.ciudad}. Interés: ${formData.interes}. Acepta contacto JAAK: ${formData.contacto ? "Sí" : "No"}.`,
          source: "landing-efisys-lab-connect",
          turnstile_token: turnstileToken,
          ...utmParams,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          empresa: "",
          cargo: "",
          email: "",
          telefono: "",
          ciudad: "",
          interes: "",
          contacto: false,
        });
        resetTurnstile();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          (data as { error?: string }).error || "Error al enviar. Intenta de nuevo."
        );
        resetTurnstile();
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
      resetTurnstile();
    }
  };

  return (
    <>
      <Header />
      <main>

        {/* ── 1. HERO PRINCIPAL ─────────────────────────────────────────── */}
        <section className="pt-32 pb-20 bg-[#0E1133] relative overflow-hidden">
          {/* Luces de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#1ECAD3]/6 rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#655DC6]/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2AD796]/5 rounded-full blur-[80px]" />
            {/* Grid de nodos */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #1ECAD3 1px, transparent 0)`,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Columna izquierda */}
              <div>
                {/* Badge co-anfitrión */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#1ECAD3] rounded-full animate-pulse" />
                  <span className="text-[#1ECAD3] text-sm font-semibold tracking-wide">
                    JAAK · Co-anfitrión
                  </span>
                </div>

                {/* Título */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
                  EFISYS{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ECAD3] to-[#2AD796]">
                    Lab Connect
                  </span>
                </h1>
                <p className="text-lg text-white/50 italic mb-8">
                  Un espacio para innovar juntos.
                </p>

                {/* Meta-datos del evento */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: "📅", text: "07 · Mayo · 2026" },
                    { icon: "📍", text: "Oaxaca, Oax." },
                    { icon: "🏨", text: "Hotel Fortín Plaza" },
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm font-medium"
                    >
                      <span>{item.icon}</span>
                      {item.text}
                    </span>
                  ))}
                </div>

                <p className="text-white/65 text-lg mb-10 leading-relaxed max-w-xl">
                  El encuentro de colaboración del{" "}
                  <strong className="text-white font-bold">
                    sector tecnológico financiero
                  </strong>
                  . JAAK participa como co-anfitrión para conectar soluciones
                  de identidad digital y trazabilidad con los líderes del ecosistema.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#registro"
                    className="px-8 py-3.5 bg-[#1ECAD3] text-[#0E1133] font-bold rounded-lg hover:bg-[#17b5bd] transition-all text-base"
                  >
                    Registrarme
                  </a>
                  <a
                    href="#por-que-jaak"
                    className="px-8 py-3.5 bg-white/8 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/15 transition-all text-base"
                  >
                    Conocer más
                  </a>
                </div>
              </div>

              {/* Columna derecha — tarjeta del evento */}
              <div className="hidden lg:flex justify-center">
                <div className="glass-card p-8 max-w-sm w-full">
                  {/* Logos EFISYS + JAAK */}
                  <div className="flex items-center justify-between mb-8">
                    <EfisysMarketplaceLogoLight />
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        Co-anfitrión
                      </span>
                      <span className="text-white font-black text-lg tracking-tight">
                        JAAK
                      </span>
                    </div>
                  </div>

                  {/* Datos del evento */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Fecha", value: "07 de Mayo, 2026" },
                      { label: "Sede", value: "Oaxaca, Oax." },
                      { label: "Hotel", value: "Hotel Fortín Plaza" },
                      { label: "Costo", value: "Evento sin costo" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/6"
                      >
                        <span className="text-white/40 text-sm">{item.label}</span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: i % 2 === 0 ? "#1ECAD3" : "#2AD796" }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Nota de hospedaje */}
                  <div className="p-3 bg-[#1ECAD3]/8 border border-[#1ECAD3]/15 rounded-lg">
                    <p className="text-[#1ECAD3] text-xs text-center font-medium">
                      Precios especiales para hospedaje en hotel sede
                    </p>
                    <a
                      href="mailto:jjuarez@efisys.com.mx"
                      className="block text-white/40 text-xs text-center mt-1 hover:text-white/70 transition-colors"
                    >
                      jjuarez@efisys.com.mx
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. BLOQUE RÁPIDO DEL EVENTO ───────────────────────────────── */}
        <section className="py-16 bg-[#141a3a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Fecha", value: "07 de Mayo, 2026", sub: "Jueves",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Ubicación", value: "Oaxaca, Oax.", sub: "México",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  label: "Hotel sede", value: "Hotel Fortín Plaza", sub: "Precios especiales de hospedaje",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  ),
                  label: "Registro", value: "Evento sin costo", sub: "Cupo limitado",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/4 border border-white/8 rounded-2xl hover:border-[#1ECAD3]/30 transition-all">
                  <div className="w-11 h-11 bg-[#1ECAD3]/10 rounded-xl flex items-center justify-center text-[#1ECAD3] mb-4">
                    {item.icon}
                  </div>
                  <div className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white font-bold text-base leading-snug">{item.value}</div>
                  <div className="text-white/40 text-sm mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
            <div className="p-7 bg-white/3 border border-white/8 rounded-2xl text-center">
              <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
                JAAK participa como{" "}
                <strong className="text-[#1ECAD3]">co-anfitrión</strong> en este espacio
                de colaboración del sector tecnológico financiero. Un encuentro para
                compartir visión, tecnología y casos reales de operación digital con evidencia.
              </p>
              <p className="text-white/40 text-sm mt-4">
                Información y hospedaje:{" "}
                <a href="mailto:jjuarez@efisys.com.mx" className="text-[#1ECAD3] hover:underline">
                  jjuarez@efisys.com.mx
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. FORMULARIO DE REGISTRO ─────────────────────────────────── */}
        <section id="registro" className="py-20 bg-[#202945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Columna izquierda — copy + beneficios */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2AD796]/10 border border-[#2AD796]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#2AD796] rounded-full animate-pulse" />
                  <span className="text-[#2AD796] text-sm font-semibold">
                    Cupo limitado · Evento gratuito
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                  Asegura tu lugar en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ECAD3] to-[#2AD796]">
                    EFISYS Lab Connect
                  </span>
                </h2>

                <p className="text-white/65 text-lg mb-8 leading-relaxed">
                  Únete al encuentro que reúne a los líderes tecnológicos del sector
                  financiero en México. Comparte visión, descubre soluciones y genera
                  conexiones de valor.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Networking con líderes del sector tecnológico financiero",
                    "Casos reales de operación digital y verificación de identidad",
                    "Acceso a las soluciones de JAAK como co-anfitrión del evento",
                    "Precios especiales de hospedaje en Hotel Fortín Plaza",
                    "Sin costo de registro",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1ECAD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0E1133]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Logos organizadores */}
                <div className="p-5 bg-white/4 border border-white/8 rounded-2xl">
                  <p className="text-white/35 text-xs uppercase tracking-wider mb-4">
                    Organizado por
                  </p>
                  <div className="flex items-center gap-6">
                    <EfisysMarketplaceLogoLight />
                    <div className="w-px h-10 bg-white/15" />
                    <div className="flex flex-col">
                      <span className="text-white/45 text-xs mb-0.5">Co-anfitrión</span>
                      <span className="text-white font-black text-xl tracking-tight">JAAK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha — formulario */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#202945] mb-1">
                  Formulario de registro
                </h3>
                <p className="text-gray-500 text-sm mb-7">
                  El evento es gratuito. Completa tus datos para confirmar tu asistencia.
                </p>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#1ECAD3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#1ECAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#202945] mb-2">
                      ¡Registro recibido!
                    </h4>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                      Gracias por registrarte en EFISYS Lab Connect. Recibirás
                      confirmación a tu correo electrónico en breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Fila 1: Nombre + Empresa */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reg-name" className="block text-sm font-medium text-gray-800 mb-1.5">
                          Nombre completo *
                        </label>
                        <input
                          id="reg-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="reg-empresa" className="block text-sm font-medium text-gray-800 mb-1.5">
                          Empresa *
                        </label>
                        <input
                          id="reg-empresa"
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transition-all"
                          placeholder="Tu empresa u organización"
                        />
                      </div>
                    </div>

                    {/* Fila 2: Cargo + Ciudad */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reg-cargo" className="block text-sm font-medium text-gray-800 mb-1.5">
                          Cargo *
                        </label>
                        <input
                          id="reg-cargo"
                          type="text"
                          required
                          value={formData.cargo}
                          onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transition-all"
                          placeholder="Tu cargo o área"
                        />
                      </div>
                      <div>
                        <label htmlFor="reg-ciudad" className="block text-sm font-medium text-gray-800 mb-1.5">
                          Ciudad *
                        </label>
                        <input
                          id="reg-ciudad"
                          type="text"
                          required
                          value={formData.ciudad}
                          onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transition-all"
                          placeholder="Ciudad de origen"
                        />
                      </div>
                    </div>

                    {/* Fila 3: Correo + Teléfono */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reg-email" className="block text-sm font-medium text-gray-800 mb-1.5">
                          Correo electrónico *
                        </label>
                        <input
                          id="reg-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transition-all"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="reg-telefono" className="block text-sm font-medium text-gray-800 mb-1.5">
                          Teléfono *
                        </label>
                        <input
                          id="reg-telefono"
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transition-all"
                          placeholder="+52 55 0000 0000"
                        />
                      </div>
                    </div>

                    {/* Área de interés */}
                    <div>
                      <label htmlFor="reg-interes" className="block text-sm font-medium text-gray-800 mb-1.5">
                        Área de interés
                      </label>
                      <select
                        id="reg-interes"
                        value={formData.interes}
                        onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 text-sm transition-all"
                      >
                        <option value="">Selecciona un área</option>
                        <option value="kyc-identidad">KYC / Identidad digital</option>
                        <option value="firma-electronica">Firma electrónica</option>
                        <option value="cumplimiento">Cumplimiento regulatorio (PLD / AML)</option>
                        <option value="integracion-api">Integración de APIs</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    {/* Checkbox contacto */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.contacto}
                        onChange={(e) =>
                          setFormData({ ...formData, contacto: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded accent-[#1ECAD3] flex-shrink-0"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors leading-relaxed">
                        Acepto ser contactado por JAAK para conocer sus soluciones
                        de identidad digital y firma electrónica.
                      </span>
                    </label>

                    {/* Verificación anti-bot */}
                    <TurnstileWidget
                      key={turnstileKey}
                      onVerify={handleTurnstileVerify}
                      onExpire={handleTurnstileExpire}
                      onError={handleTurnstileError}
                    />

                    {/* Botón submit */}
                    <button
                      type="submit"
                      disabled={status === "loading" || !turnstileToken}
                      className="w-full px-6 py-4 bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base"
                    >
                      {status === "loading" ? "Enviando registro…" : "Enviar registro"}
                    </button>

                    {/* Error */}
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                        <p className="text-red-700 font-medium text-sm">{errorMessage}</p>
                      </div>
                    )}

                    {/* Privacidad */}
                    <p className="text-xs text-gray-400 text-center">
                      Al registrarte aceptas nuestra{" "}
                      <Link href="/privacidad" className="text-[#1ECAD3] hover:underline">
                        Política de Privacidad
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. ¿POR QUÉ JAAK PARTICIPA? ─────────────────────────────── */}
        <section id="por-que-jaak" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Texto editorial */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#202945]/6 border border-[#202945]/12 rounded-full mb-6">
                  <span className="text-[#202945] text-sm font-semibold">
                    JAAK · Co-anfitrión
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-[#202945] mb-6 leading-tight">
                  ¿Por qué JAAK participa en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ECAD3] to-[#2AD796]">
                    EFISYS Lab Connect?
                  </span>
                </h2>

                <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                  Porque el sector financiero de México necesita{" "}
                  <strong className="text-[#202945]">
                    operación digital con evidencia
                  </strong>
                  . No basta con digitalizar procesos; hay que hacerlos verificables,
                  trazables y auditables desde el origen.
                </p>

                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  JAAK construye la infraestructura que hace posible la{" "}
                  <strong className="text-[#202945]">validación de identidad</strong>,
                  la{" "}
                  <strong className="text-[#202945]">trazabilidad de operaciones</strong>{" "}
                  y la{" "}
                  <strong className="text-[#202945]">evidencia auditable</strong> que
                  exigen los reguladores y esperan los usuarios.
                </p>

                <a
                  href="#registro"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
                >
                  Registrarme al evento
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Bullets */}
              <div className="space-y-5">
                {jaakBullets.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#1ECAD3]/30 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-[#1ECAD3]/10 rounded-xl flex items-center justify-center text-[#1ECAD3] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#202945] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. SOLUCIONES JAAK ────────────────────────────────────────── */}
        <section className="py-20 bg-[#202945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Soluciones JAAK para el sector financiero
              </h2>
              <p className="text-white/60 text-xl max-w-2xl mx-auto">
                Infraestructura tecnológica que convierte operaciones digitales en
                procesos verificables.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* KYC / Identidad */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1ECAD3]/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#1ECAD3]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1ECAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">
                      KYC · Identidad Digital
                    </div>
                    <div className="text-[#1ECAD3] text-xs font-semibold tracking-wide mt-0.5">
                      Expediente digital auditable
                    </div>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Verifica la identidad de tus usuarios con biometría, documentos y
                  fuentes oficiales. Todo el flujo queda registrado como evidencia
                  digital lista para cumplimiento regulatorio.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {kycComponents.map((comp, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-white/4 rounded-lg border border-white/6"
                    >
                      <span className="text-white/80 text-sm font-medium">
                        {comp.name}
                      </span>
                      <span className="text-[#1ECAD3] text-xs bg-[#1ECAD3]/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {comp.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Firma Electrónica */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2AD796]/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#2AD796]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2AD796]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">
                      Firma Electrónica
                    </div>
                    <div className="text-[#2AD796] text-xs font-semibold tracking-wide mt-0.5">
                      Formalización con evidencia
                    </div>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Formaliza operaciones y contratos 100% digital. Cada firma incluye
                  biometría, geolocalización y sello de tiempo certificado. Cumple
                  NOM-151 con evidencia para cualquier inspección regulatoria.
                </p>

                <div className="space-y-3 mb-6">
                  {firmaComponents.map((comp, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-white/4 rounded-lg border border-white/6"
                    >
                      <span className="text-white/80 text-sm font-medium">
                        {comp.name}
                      </span>
                      <span className="text-[#2AD796] text-xs bg-[#2AD796]/10 px-2 py-0.5 rounded-full">
                        {comp.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/signa"
                  className="inline-flex items-center gap-2 text-[#2AD796] text-sm font-semibold hover:underline"
                >
                  Conocer Signa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. CASOS DE USO ──────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
                Sectores donde JAAK opera hoy
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                No se trata de digitalizar procesos,{" "}
                <strong className="text-[#202945]">sino de hacerlos verificables.</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#1ECAD3]/30 hover:shadow-lg transition-all"
                >
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide"
                    style={{
                      backgroundColor: `${uc.color}15`,
                      color: uc.color,
                    }}
                  >
                    {uc.sector}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-7 bg-[#202945]/4 border border-[#202945]/8 rounded-2xl text-center">
              <p className="text-[#202945] font-semibold text-lg">
                La identidad digital y la firma electrónica de JAAK se integran en
                cualquier flujo de negocio mediante API, Web o SDK.
              </p>
            </div>

          </div>
        </section>

        {/* ── 7. CTA FINAL ─────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0E1133] relative overflow-hidden">
          {/* Luz central */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1ECAD3]/8 rounded-full blur-[130px]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

            {/* Logos co-anfitriones */}
            <div className="flex items-center justify-center gap-8 mb-10">
              <EfisysMarketplaceLogoLight />
              <div className="w-px h-12 bg-white/15" />
              <div className="flex flex-col items-start">
                <span className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                  Co-anfitrión
                </span>
                <span className="text-white font-black text-2xl tracking-tight">
                  JAAK
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Sé parte de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ECAD3] to-[#2AD796]">
                EFISYS Lab Connect
              </span>
            </h2>

            <p className="text-white/55 text-xl mb-3">
              07 de Mayo de 2026 · Oaxaca, Oax.
            </p>
            <p className="text-white/40 text-base mb-12">
              Hotel Fortín Plaza · Evento sin costo · Cupo limitado
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="#registro"
                className="px-10 py-4 bg-[#1ECAD3] text-[#0E1133] font-bold rounded-lg hover:bg-[#17b5bd] transition-all text-lg"
              >
                Registrarme
              </a>
              <Link
                href="/"
                className="px-10 py-4 bg-white/8 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/15 transition-all text-lg"
              >
                Conocer JAAK
              </Link>
            </div>

            <p className="text-white/30 text-sm">
              Información y hospedaje:{" "}
              <a
                href="mailto:jjuarez@efisys.com.mx"
                className="text-white/50 hover:text-[#1ECAD3] transition-colors"
              >
                jjuarez@efisys.com.mx
              </a>
            </p>

          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
