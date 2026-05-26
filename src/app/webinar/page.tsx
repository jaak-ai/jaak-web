"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Static data ─────────────────────────────────────────────── */

const ariannaHighlights = [
  {
    title: "Fundadora de la empresa líder en KYC en México",
    content: (
      <>
        Escaló JAAK desde cero convirtiéndola en referencia mexicana en{" "}
        <strong>biometría facial, liveness detection y verificación de identidad digital</strong>{" "}
        para instituciones financieras y sectores regulados en México y LATAM.
      </>
    ),
  },
  {
    title: "Portafolio: biometría, firma NOM-151 y onboarding API",
    content: (
      <>
        Lideró la evolución del portafolio:{" "}
        <strong>biometría facial, liveness detection, firma electrónica NOM-151 y soluciones KYC</strong>{" "}
        para banca, fintech y neobancos. Expansión activa a Estados Unidos y Sudamérica.
      </>
    ),
  },
  {
    title: "Certificación ISO 9001 · Cumplimiento CNBV y Ley Fintech",
    content: (
      <>
        Implementó marcos de cumplimiento normativo:{" "}
        <strong>LFPIORPI, LFPDPPP, NOM-151 y regulaciones CNBV/Ley Fintech</strong>. Certificada
        como Implementadora Líder ISO 9001:2015. Antes en BBVA Next Technologies y GFT Group.
      </>
    ),
  },
];

const davidHighlights = [
  {
    title: "Doctor en Ciencias Fiscales · Postdoctorado en Estrategia Empresarial",
    content: (
      <>
        Abogado con maestría en impuestos, doctorado en ciencias fiscales y postdoctorado en Diseño
        de Estrategias de Crecimiento Empresarial. Certificado en{" "}
        <strong>PLD, protección de datos, compliance y regulación digital</strong>.
      </>
    ),
  },
  {
    title: "Consultor de CNBV, UIF, SAT, FGR y Congreso Federal",
    content: (
      <>
        Capacitador y consultor de las principales autoridades regulatorias de México. Entrenamiento
        especializado por{" "}
        <strong>ONU, GAFI, BID, FBI y el Departamento de Seguridad Nacional de EUA</strong>. Experto
        técnico del Panel de IA de la ONU.
      </>
    ),
  },
  {
    title: "Miembro del grupo de trabajo GAFI para México · Infonavit · ONU",
    content: (
      <>
        Comisionado de Transparencia del Infonavit. Miembro del grupo de trabajo para la{" "}
        <strong>quinta ronda de evaluación de México por GAFI</strong>. Presidente de la Academia
        Mexicana de Derecho Digital. Vocal del Consejo Nacional de Desarrollo Sostenible de la ONU
        en México.
      </>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Identificar al cliente",
    desc: "Verificación biométrica con prueba de vida, comparación facial y lectura inteligente de documentos con IA.",
    tags: ["KYC biométrico", "Liveness detection", "OCR con IA"],
  },
  {
    num: "02",
    title: "Integrar expediente digital",
    desc: "Documentos, consentimientos y firma electrónica en un expediente auditable desde el primer contacto.",
    tags: ["Firma NOM-151", "Consentimiento", "Expediente digital"],
  },
  {
    num: "03",
    title: "Conservar con integridad",
    desc: "Sello de tiempo, hash criptográfico y conservación bajo NOM-151 para evidencia defendible en cualquier auditoría.",
    tags: ["NOM-151", "Sello de tiempo", "Trazabilidad"],
  },
  {
    num: "04",
    title: "Operación defendible",
    desc: "Trazabilidad completa, reportes de auditoría y evidencia auditable ante CNBV y cualquier autoridad regulatoria.",
    tags: ["Evidencia auditable", "CNBV", "Reportes"],
  },
];

const products = [
  {
    name: "KYC Biométrico",
    desc: "Verificación de identidad con biometría facial, liveness detection y lectura inteligente de documentos oficiales con IA. Validación en fuentes oficiales.",
    tags: ["Biometría", "Liveness iBeta", "Listas AML"],
    icon: (
      <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
        <rect x="4" y="2" width="9" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="15" cy="15" r="5.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M13 15l1.5 1.5L17 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8h5M6 10.5h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    name: "Firma Electrónica",
    desc: "Firma electrónica simple y avanzada con plena validez legal en México. Sello de tiempo NOM-151, hash criptográfico y conservación de evidencia.",
    tags: ["NOM-151", "Sello de tiempo", "Validez legal"],
    icon: (
      <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
        <rect x="3" y="2" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 8h8M7 11h8M7 14h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity=".5" />
        <path d="M13 15.5c0 0 1-.8 1.5-1.5s.5-1.5 0-1.5-1.5 1-1 2.5c.5 1.5 2 1 2 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Expediente Digital",
    desc: "Integración automática de documentos, consentimientos y evidencias en un expediente digital auditable y conservado conforme a la regulación vigente.",
    tags: ["Auditable", "Conservación", "CNBV"],
    icon: (
      <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
        <path d="M4 5a2 2 0 0 1 2-2h7l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M13 3v5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
        <path d="M8 12h6M8 15h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    name: "Onboarding Digital",
    desc: "Flujo completo de alta de clientes 100% digital. Integrable vía API en días. Diseñado para reducir abandono y aumentar conversión sin sacrificar cumplimiento.",
    tags: ["API REST", "No-code flow", "Conversión"],
    icon: (
      <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
        <rect x="5" y="2" width="12" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="11" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M7 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
  },
  {
    name: "Prevención de Fraude",
    desc: "Tecnología biométrica certificada iBeta Level 1 & 2 para detección de deepfakes, identidad sintética y spoofing. Validación en listas negras, PEP y alertas AML.",
    tags: ["iBeta certificado", "Listas negras", "PEP / AML"],
    icon: (
      <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
        <path d="M11 2L19.5 6v6c0 4.5-3.8 7.8-8.5 8.5C6.3 19.8 2.5 16.5 2.5 12V6L11 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const heroTags = ["KYC / PLD-FT", "Firma electrónica", "Onboarding digital", "NOM-151", "Ley Fintech", "CNBV"];
const certs = ["ISO 27001", "ISO 9001", "iBeta Level 1 & 2", "NOM-151", "Fundada 2017"];

/* ── Accordion component ─────────────────────────────────────── */

function Accordion({
  highlights,
  open,
  onToggle,
}: {
  highlights: typeof ariannaHighlights;
  open: number | null;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="divide-y divide-[var(--hp-divider)]">
      {highlights.map((hl, i) => (
        <div key={i}>
          <button
            onClick={() => onToggle(i)}
            className="w-full flex items-center justify-between gap-3 py-3 text-left"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span
                className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(45,182,193,0.1)", border: "1px solid rgba(45,182,193,0.25)" }}
              >
                <svg viewBox="0 0 15 15" fill="none" className="w-3.5 h-3.5">
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="#2DB6C1" strokeWidth="1.2" />
                  <path d="M5 7.5l2 2 3.5-3.5" stroke="#2DB6C1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-xs font-bold leading-snug" style={{ color: "var(--hp-text-hi)" }}>
                {hl.title}
              </span>
            </div>
            <span
              className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: open === i ? "#2DB6C1" : "var(--hp-pill-bg)",
                transform: open === i ? "rotate(180deg)" : "none",
              }}
            >
              <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2">
                <path
                  d="M1 2.5l3 3 3-3"
                  stroke={open === i ? "#0E1133" : "currentColor"}
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? "200px" : "0px" }}
          >
            <p className="text-xs leading-relaxed pb-3 pl-10" style={{ color: "var(--hp-text-md)" }}>
              {hl.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Speaker avatar (photo with fallback) ────────────────────── */

function SpeakerAvatar({
  src,
  fallback,
  gradient,
}: {
  src: string;
  fallback: string;
  gradient: string;
}) {
  const [err, setErr] = useState(false);

  if (!err) {
    return (
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
        <Image
          src={src}
          alt={fallback}
          fill
          className="object-cover object-top"
          onError={() => setErr(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 text-xl font-black border-2 border-white/20"
      style={{ background: gradient }}
    >
      {fallback}
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────── */

export default function WebinarPage() {
  const [light, setLight] = useState(false);
  const [openA, setOpenA] = useState<number | null>(0);
  const [openD, setOpenD] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    tipo: "",
    necesidad: "",
    telefono: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.nombre} ${formData.apellido}`.trim(),
          email: formData.email,
          empresa: formData.empresa,
          telefono: formData.telefono,
          mensaje: `Tipo de institución: ${formData.tipo}. Necesidad: ${formData.necesidad}`,
          source: "webinar-tres-modelos-financieros",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-3.5 py-2.5 rounded-xl text-sm border-[1.5px] outline-none transition-all focus:ring-2 bg-white text-[#212A45] border-gray-200 focus:border-[#2DB6C1] focus:ring-[#2DB6C1]/10";

  return (
    <div data-hp-theme={light ? "light" : "dark"}>
      <Header />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="hp-section hp-bg-hero relative overflow-hidden flex items-center min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,182,193,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(45,182,193,.04) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Ambient orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]" style={{ background: "rgba(45,182,193,.08)" }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none blur-[100px]" style={{ background: "rgba(0,100,180,.06)" }} />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-14 items-start">
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-0.5 rounded-full bg-[#2DB6C1]" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2DB6C1]">
                Webinar · Sector Financiero · México · 2025
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-black leading-[1.0] tracking-tight mb-3"
              style={{
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                fontSize: "clamp(38px,4.5vw,58px)",
                color: "var(--hp-text-hi)",
                letterSpacing: "-1.5px",
              }}
            >
              Tres modelos
              <br />
              <span className="text-[#2DB6C1]">financieros.</span>
              <br />
              Un solo punto
              <br />
              de <span className="text-[#2DB6C1]">quiebre.</span>
            </h1>

            <div className="w-11 h-[3px] rounded-full bg-[#2DB6C1] my-5" />

            <p className="text-base leading-[1.75] max-w-[480px] mb-7" style={{ color: "var(--hp-text-md)" }}>
              Banca, fintech y neobancos convergen hacia el mismo estándar de identidad y
              cumplimiento.{" "}
              <strong style={{ color: "var(--hp-text-hi)", fontWeight: 600 }}>
                ¿Ya está tu empresa ahí?
              </strong>
            </p>

            {/* Speaker chips */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              {/* Arianna */}
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 pr-3.5"
                style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 relative">
                  <Image
                    src="/images/webinar/arianna-quezada.jpg"
                    alt="Arianna Quezada"
                    fill
                    className="object-cover object-top"
                    onError={() => {}}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-black"
                    style={{ background: "linear-gradient(135deg,#25969f,#2DB6C1)", color: "#0E1133" }}
                  >
                    AQ
                  </div>
                </div>
                <div>
                  <span className="block text-[11px] font-bold" style={{ color: "var(--hp-text-hi)", fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Arianna Quezada
                  </span>
                  <span className="block text-[10px]" style={{ color: "var(--hp-text-lo)" }}>
                    CEO &amp; Cofundadora · JAAK
                  </span>
                </div>
              </div>
              {/* David */}
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 pr-3.5"
                style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 relative">
                  <Image
                    src="/images/webinar/david-merino.jpg"
                    alt="Dr. David Merino"
                    fill
                    className="object-cover object-top"
                    onError={() => {}}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white"
                    style={{ background: "linear-gradient(135deg,#142654,#1E3A7A)" }}
                  >
                    DM
                  </div>
                </div>
                <div>
                  <span className="block text-[11px] font-bold" style={{ color: "var(--hp-text-hi)", fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Dr. David Merino
                  </span>
                  <span className="block text-[10px]" style={{ color: "var(--hp-text-lo)" }}>
                    Especialista en Compliance · GAFI · ONU
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium rounded px-2.5 py-1"
                  style={{
                    color: "rgba(45,182,193,.85)",
                    background: "rgba(45,182,193,.08)",
                    border: "1px solid rgba(45,182,193,.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div
            id="registro"
            className="bg-white rounded-2xl p-7 shadow-2xl"
            style={{ border: "1px solid rgba(45,182,193,.18)" }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4"
              style={{ background: "#FFF3E0", color: "#E65100" }}
            >
              <span className="text-base leading-none">🎬</span>
              <span
                className="text-[10px] font-bold tracking-wide uppercase"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                Acceso gratuito
              </span>
            </div>

            <h2
              className="text-lg font-black leading-snug mb-1.5 text-[#212A45]"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Accede a la grabación completa
            </h2>
            <p className="text-xs text-gray-500 leading-snug mb-5">
              Déjanos tus datos y recibe el webinar + guía de cumplimiento KYC para tu institución.
            </p>

            {/* ── Success state ── */}
            {status === "success" ? (
              <div className="text-center py-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#E6F8F6", border: "1.5px solid rgba(45,182,193,.3)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L19 7" stroke="#2DB6C1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-[#212A45] mb-2" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                  ¡Listo! Revisa tu correo
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  En breve un especialista de JAAK se pondrá en contacto contigo para orientarte
                  sobre KYC o firma electrónica.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Ana"
                      required
                      value={formData.nombre}
                      onChange={set("nombre")}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                      Apellido
                    </label>
                    <input
                      type="text"
                      placeholder="García"
                      required
                      value={formData.apellido}
                      onChange={set("apellido")}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Correo corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="ana@empresa.com"
                    required
                    value={formData.email}
                    onChange={set("email")}
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de tu institución"
                    required
                    value={formData.empresa}
                    onChange={set("empresa")}
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Tipo de institución
                  </label>
                  <select
                    required
                    value={formData.tipo}
                    onChange={set("tipo")}
                    className={inputBase}
                  >
                    <option value="" disabled>Selecciona</option>
                    <option>Banco / Institución bancaria</option>
                    <option>Fintech</option>
                    <option>Neobanco</option>
                    <option>SOFOM / SOFIPO</option>
                    <option>IFPE / ITF</option>
                    <option>Aseguradora / AFORE</option>
                    <option>Otro sector financiero</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    ¿Qué necesitas resolver?
                  </label>
                  <select
                    required
                    value={formData.necesidad}
                    onChange={set("necesidad")}
                    className={inputBase}
                  >
                    <option value="" disabled>Principal necesidad</option>
                    <option>KYC / Verificación de identidad</option>
                    <option>Firma electrónica avanzada</option>
                    <option>Onboarding digital completo</option>
                    <option>Cumplimiento PLD / FT</option>
                    <option>Todas las anteriores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+52 55 0000 0000"
                    value={formData.telefono}
                    onChange={set("telefono")}
                    className={inputBase}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    Ocurrió un error. Intenta de nuevo o escríbenos a{" "}
                    <a href="mailto:hello@jaak.ai" className="underline">hello@jaak.ai</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl font-black text-sm tracking-wide transition-all hover:-translate-y-px disabled:opacity-60"
                  style={{
                    background: "#2DB6C1",
                    color: "#0E1133",
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  }}
                >
                  {status === "loading" ? "Enviando…" : "Ver el webinar gratis →"}
                </button>

                <p className="text-[10.5px] text-gray-400 text-center leading-relaxed">
                  Sin spam · Datos protegidos conforme a LFPDPPP
                </p>

                {/* Social proof */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                  <div className="flex">
                    {["M", "R", "A"].map((l, i) => (
                      <span
                        key={l}
                        className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black -ml-1.5 first:ml-0"
                        style={{
                          background: i === 0 ? "#2DB6C1" : i === 1 ? "#5A9EDB" : "#7EC8C2",
                          color: i === 0 ? "#0E1133" : "#fff",
                          zIndex: 3 - i,
                        }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    <strong className="text-[#212A45]">+200 profesionales</strong> ya accedieron
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SPEAKERS ────────────────────────────────────────────── */}
      <section id="speakers" className="hp-section hp-bg-1 py-20 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid var(--hp-divider)", borderBottom: "1px solid var(--hp-divider)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-5 h-0.5 rounded-full bg-[#2DB6C1]" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2DB6C1]">
              Los expertos
            </span>
          </div>
          <h2
            className="font-black leading-tight tracking-tight mb-3"
            style={{
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              fontSize: "clamp(28px,3vw,40px)",
              color: "var(--hp-text-hi)",
              letterSpacing: "-1px",
            }}
          >
            Quiénes presentan este webinar
          </h2>
          <p className="text-base leading-[1.75] max-w-xl mb-12" style={{ color: "var(--hp-text-md)" }}>
            Dos especialistas con trayectorias complementarias: tecnología regulatoria y cumplimiento
            jurídico. Juntos cubren los dos flancos del problema que enfrenta el sector financiero hoy.
          </p>

          <div className="grid md:grid-cols-2 gap-7">
            {/* ── Arianna card ── */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--hp-card-border)" }}>
              {/* Header */}
              <div className="hp-bg-hero relative overflow-hidden p-6 pb-5">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(45,182,193,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(45,182,193,.05) 1px,transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative z-10 flex items-end gap-4 mb-4">
                  <SpeakerAvatar
                    src="/images/webinar/arianna-quezada.jpg"
                    fallback="AQ"
                    gradient="linear-gradient(135deg,#25969f,#2DB6C1)"
                  />
                  <div>
                    <div className="text-lg font-black leading-tight text-white mb-0.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                      Arianna Quezada
                    </div>
                    <div className="text-[12px] text-white/50">CEO &amp; Cofundadora · JAAK IT S.A.P.I. de C.V.</div>
                  </div>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: "rgba(45,182,193,.12)", border: "1px solid rgba(45,182,193,.25)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1]" />
                  <span className="text-[10px] font-bold text-[#2DB6C1] tracking-wide" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    8 años liderando JAAK
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="p-6" style={{ background: "var(--hp-card-bg)" }}>
                <Accordion
                  highlights={ariannaHighlights}
                  open={openA}
                  onToggle={(i) => setOpenA(openA === i ? null : i)}
                />
              </div>
            </div>

            {/* ── David card ── */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--hp-card-border)" }}>
              {/* Header */}
              <div className="hp-bg-hero relative overflow-hidden p-6 pb-5">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(45,182,193,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(45,182,193,.05) 1px,transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative z-10 flex items-end gap-4 mb-4">
                  <SpeakerAvatar
                    src="/images/webinar/david-merino.jpg"
                    fallback="DM"
                    gradient="linear-gradient(135deg,#142654,#1E3A7A)"
                  />
                  <div>
                    <div className="text-lg font-black leading-tight text-white mb-0.5" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                      Dr. David Merino
                    </div>
                    <div className="text-[12px] text-white/50">Especialista en Compliance · Contrainteligencia Empresarial</div>
                  </div>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: "rgba(45,182,193,.12)", border: "1px solid rgba(45,182,193,.25)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1]" />
                  <span className="text-[10px] font-bold text-[#2DB6C1] tracking-wide" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                    Entrenado por ONU · GAFI · FBI
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="p-6" style={{ background: "var(--hp-card-bg)" }}>
                <Accordion
                  highlights={davidHighlights}
                  open={openD}
                  onToggle={(i) => setOpenD(openD === i ? null : i)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT JAAK ──────────────────────────────────────────── */}
      <section id="jaak" className="hp-section hp-bg-2 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-5 h-0.5 rounded-full bg-[#2DB6C1]" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2DB6C1]">
                Sobre JAAK
              </span>
            </div>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                fontSize: "clamp(28px,3vw,40px)",
                color: "var(--hp-text-hi)",
                letterSpacing: "-1px",
              }}
            >
              JAAK conecta{" "}
              <span className="text-[#2DB6C1]">regulación</span>{" "}
              con operación.
            </h2>
            <p className="text-base leading-[1.75] mb-6" style={{ color: "var(--hp-text-md)" }}>
              Somos la infraestructura de confianza digital que permite a bancos, fintech y neobancos
              identificar, verificar, firmar, conservar y auditar — todo en un solo stack tecnológico.
            </p>

            {/* Quote */}
            <div
              className="rounded-r-xl p-4 mb-6"
              style={{
                borderLeft: "3px solid #2DB6C1",
                background: "rgba(45,182,193,.06)",
              }}
            >
              <p className="text-sm italic leading-[1.7]" style={{ color: "var(--hp-text-md)" }}>
                "El mismo problema existe en banca, fintech y actividades vulnerables: identificar,
                integrar evidencia y conservar trazabilidad. JAAK lo resuelve de extremo a extremo."
              </p>
              <cite className="block mt-2 text-[11px] font-semibold not-italic text-[#2DB6C1]">
                — Arianna Quezada, CEO de JAAK
              </cite>
            </div>

            {/* Certs */}
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-bold tracking-wide rounded-md px-3 py-1"
                  style={{
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                    color: "rgba(45,182,193,.75)",
                    background: "rgba(45,182,193,.07)",
                    border: "1px solid rgba(45,182,193,.18)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — steps */}
          <div className="divide-y" style={{ borderColor: "var(--hp-divider)" }}>
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4 py-5">
                <span
                  className="text-[11px] font-bold shrink-0 pt-0.5 w-6"
                  style={{
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                    color: "#2DB6C1",
                    letterSpacing: ".08em",
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <div
                    className="text-sm font-black mb-1"
                    style={{
                      fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                      color: "var(--hp-text-hi)",
                    }}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs leading-relaxed mb-2" style={{ color: "var(--hp-text-lo)" }}>
                    {step.desc}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {step.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9.5px] font-bold rounded px-2 py-0.5"
                        style={{
                          fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                          color: "rgba(45,182,193,.8)",
                          background: "rgba(45,182,193,.08)",
                          border: "1px solid rgba(45,182,193,.18)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────────── */}
      <section
        id="productos"
        className="hp-section hp-bg-1 py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid var(--hp-divider)", borderBottom: "1px solid var(--hp-divider)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-5 h-0.5 rounded-full bg-[#2DB6C1]" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2DB6C1]">
              Soluciones JAAK
            </span>
          </div>
          <h2
            className="font-black leading-tight tracking-tight mb-3"
            style={{
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              fontSize: "clamp(28px,3vw,40px)",
              color: "var(--hp-text-hi)",
              letterSpacing: "-1px",
            }}
          >
            Lo que puedes resolver <span className="text-[#2DB6C1]">hoy</span>
          </h2>
          <p className="text-base leading-[1.75] max-w-xl mb-12" style={{ color: "var(--hp-text-md)" }}>
            Cada producto de JAAK está diseñado para una necesidad específica del sector financiero.
            Todos integran vía API en días, no meses.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-6 transition-all duration-200 group cursor-pointer"
                style={{
                  border: "1.5px solid var(--hp-card-border)",
                  background: "var(--hp-card-bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,182,193,.4)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--hp-card-border)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-[#2DB6C1]"
                  style={{ background: "rgba(45,182,193,.1)", border: "1.5px solid rgba(45,182,193,.25)" }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-sm font-black mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                    color: "var(--hp-text-hi)",
                  }}
                >
                  {p.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--hp-text-md)" }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9.5px] font-semibold rounded px-2 py-0.5"
                      style={{
                        color: "#2DB6C1",
                        background: "rgba(45,182,193,.08)",
                        borderRadius: "3px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://jaak.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2DB6C1]"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  Ver en jaak.ai
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 transition-transform group-hover:translate-x-0.5">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://jaak.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white tracking-wide transition-all hover:-translate-y-0.5"
              style={{
                background: "#212A45",
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              }}
            >
              Ver todas las soluciones en{" "}
              <span className="text-[#2DB6C1]">jaak.ai</span>
              {" →"}
            </a>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "linear-gradient(135deg,#25969f 0%,#2DB6C1 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-[#0E1133] mb-4"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            ¿Listo para resolver tu KYC
            <br />o firma electrónica?
          </h2>
          <p className="text-lg leading-[1.7] text-[#0E1133]/65 mb-8">
            Habla con un especialista de JAAK y descubre cómo implementar la solución correcta para
            tu institución.
          </p>
          <a
            href="#registro"
            className="inline-block px-9 py-4 rounded-xl font-black text-sm text-[#2DB6C1] tracking-wide transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "#0E1133",
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            Registrarme y ver el webinar gratis →
          </a>
        </div>
      </section>

      <Footer />

      {/* ── Theme toggle ───────────────────────────────────────── */}
      <button
        onClick={() => setLight((v) => !v)}
        className="hp-theme-toggle"
        title={light ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
        aria-label={light ? "Activar modo oscuro" : "Activar modo claro"}
      >
        {light ? (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#0A1628" }}>
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" style={{ color: "rgba(255,255,255,0.85)" }}>
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
