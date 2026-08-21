"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import UseCaseSelector from "@/components/recursos-humanos/UseCaseSelector";
import BuyerPersonaSection from "@/components/recursos-humanos/BuyerPersonaSection";
import { useCases, firmaGroups, specializedModalities, DOCUMENTO_OPTIONS } from "@/components/recursos-humanos/data";

const NAVY = "#02132D";
const NAVY_SECONDARY = "#202945";
const TEAL = "#1ECAD3";
const OFF_WHITE = "#F5F5F3";
const LIGHT = "#EEF2F5";
const BORDER = "#E3E8EE";
const TEXT_BODY = "#4B5768";
const TEXT_MUTED = "#5C6B7A";
// Color característico del sector RH: cálido y humano, distinto del teal
// (identidad/evidencia) y del violeta (banca) ya usados en otras verticales.
// Se usa como acento secundario — el teal se mantiene en los CTA de
// conversión para no diluir el reconocimiento de marca de JAAK.
const RH_ACCENT = "#FF6B4A";
const RH_ACCENT_DARK = "#C2410C";

const VIDEO_ID = "q0Iliu1wK-g";
const MEETING_URL = "https://meetings.hubspot.com/jose-andres-yllescas-lira?uuid=996cf1ff-68fa-42ac-9bc6-c03c8aa7aee6";
const WHATSAPP_URL =
  "https://wa.me/525535091788?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20la%20firma%20digital%20de%20JAAK%20para%20contratos%20y%20documentaci%C3%B3n%20de%20Recursos%20Humanos.%20%C2%BFMe%20pueden%20compartir%20m%C3%A1s%20informaci%C3%B3n%3F";

function CheckIcon({ color = TEAL }: { color?: string }) {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke={color} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
    </svg>
  );
}

function trackWhatsApp(location: string) {
  gtmEvent("rh_whatsapp_click", { source: location, destination: "whatsapp", page_path: "/soluciones/recursos-humanos" });
}

function trackMeeting(location: string) {
  gtmEvent("rh_meeting_click", { source: location, destination: "meetings_hubspot", page_path: "/soluciones/recursos-humanos" });
}

/* ── HERO ──────────────────────────────────────────────────────────── */

function HeroTalkMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:bg-white/10 w-full sm:w-auto"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
      >
        Hablar con JAAK
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-64 rounded-xl overflow-hidden z-20"
          style={{ background: "#fff", border: `1px solid ${BORDER}`, boxShadow: "0 20px 50px rgba(2,19,45,0.25)" }}
        >
          <a
            href={MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => trackMeeting("hero_menu")}
            className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold hover:bg-gray-50 transition-colors"
            style={{ color: NAVY }}
          >
            Agendar reunión
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => trackWhatsApp("hero_menu")}
            className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold hover:bg-gray-50 transition-colors border-t"
            style={{ color: NAVY, borderColor: BORDER }}
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

// Documentos del expediente laboral de ejemplo. El progreso (3/4) se anima
// al entrar en viewport para reforzar que esto es "RH", no sólo firma.
const HERO_DOCS = [
  { label: "Contrato laboral", status: "Firmado" as const },
  { label: "Anexo salarial", status: "Firmado" as const },
  { label: "Política de seguridad", status: "Pendiente" as const },
  { label: "Equipo asignado", status: "Aceptado" as const },
];
const HERO_PROGRESS_TARGET = Math.round(
  (HERO_DOCS.filter((d) => d.status !== "Pendiente").length / HERO_DOCS.length) * 100
);

function HeroVisual() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(HERO_PROGRESS_TARGET), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute -top-8 -left-8 w-40 h-40 rounded-full -z-10 animate-float"
        style={{ background: RH_ACCENT, opacity: 0.18, filter: "blur(50px)" }}
        aria-hidden="true"
      />
      <div className="rounded-[28px] p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
        <div className="rounded-[20px] p-6" style={{ background: "#FFFFFF" }}>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-black"
              style={{ background: LIGHT, color: NAVY }}
              aria-hidden="true"
            >
              AG
            </span>
            <div>
              <p className="text-[14.5px] font-bold" style={{ color: NAVY }}>Ana García</p>
              <p className="text-xs" style={{ color: TEXT_MUTED }}>Coordinadora de Operaciones</p>
            </div>
          </div>

          <div className="space-y-2">
            {HERO_DOCS.map((doc) => {
              const isPending = doc.status === "Pendiente";
              return (
                <div
                  key={doc.label}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg"
                  style={{ background: isPending ? "rgba(255,107,74,0.06)" : LIGHT }}
                >
                  <span className="flex items-center gap-2 text-xs font-semibold" style={{ color: NAVY }}>
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: isPending ? "#fff" : TEAL, border: isPending ? `1.5px dashed ${RH_ACCENT}` : "none" }}
                    >
                      {!isPending && <CheckIcon color={NAVY} />}
                    </span>
                    {doc.label}
                  </span>
                  <span className="text-[11px] font-bold" style={{ color: isPending ? RH_ACCENT_DARK : "#0A6870" }}>
                    {doc.status}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>
                Expediente laboral
              </span>
              <span className="text-xs font-black" style={{ color: NAVY }}>{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: LIGHT }}>
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${RH_ACCENT}, ${TEAL})` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl -z-10" style={{ background: "rgba(30,202,211,0.14)" }} aria-hidden="true" />
      <p className="text-center text-[11px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
        Interfaz conceptual con datos ilustrativos.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #071B3A 45%, ${NAVY_SECONDARY} 100%)` }}
      aria-label="Firma digital para Recursos Humanos"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(#1ECAD3 1px, transparent 1px), linear-gradient(90deg, #1ECAD3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-10 right-[8%] w-72 h-72 rounded-full opacity-[0.16] blur-[110px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{ background: RH_ACCENT }}
      />
      <div
        className="absolute bottom-0 left-[4%] w-56 h-56 rounded-full opacity-[0.1] blur-[90px] pointer-events-none animate-float"
        aria-hidden="true"
        style={{ background: TEAL, animationDelay: "1.5s" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-sr>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6" style={{ background: "rgba(255,107,74,0.12)", border: `1px solid rgba(255,107,74,0.35)`, color: RH_ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: RH_ACCENT }} aria-hidden="true" />
              Firma digital para Recursos Humanos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Firma documentos laborales.
              <br className="hidden sm:block" /> Conserva{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${RH_ACCENT}, ${TEAL})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                la evidencia
              </span>
              .
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Contratos, anexos, políticas y documentación laboral en un flujo digital que permite saber quién
              firmó, qué firmó, cuándo lo hizo y qué evidencia quedó del proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#casos-de-uso"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: TEAL, color: NAVY, boxShadow: "0 0 30px rgba(30,202,211,0.3)" }}
              >
                Ver cómo funciona
                <ArrowIcon />
              </a>
              <HeroTalkMenu />
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Firma digital · Sellos de tiempo · Evidencia auditable · Identidad cuando el proceso lo requiere
            </p>
          </div>
          <div data-sr="right" className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEMA ──────────────────────────────────────────────────────── */

const BEFORE_STEPS = ["Documento", "Correo", "Imprimir", "Firmar", "Escanear", "Seguimiento", "Carpeta"];
const AFTER_STEPS = ["Documento", "Firma", "Evidencia", "Expediente digital"];

function ProcessComparison() {
  return (
    <section className="py-20 bg-white" aria-labelledby="problema-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="problema-heading" className="text-3xl sm:text-4xl font-black mb-5" style={{ color: NAVY }}>
            El contrato puede ser digital.
            <br className="hidden sm:block" /> El proceso también debería serlo.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: TEXT_BODY }}>
            Recursos Humanos no debería invertir tiempo persiguiendo firmas, validando versiones o buscando
            documentos que se firmaron meses atrás.
          </p>
        </div>

        <div data-sr-grid className="relative grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: TEXT_MUTED }}>Antes</p>
            <ol className="space-y-2.5">
              {BEFORE_STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0" style={{ background: "#E5E9EF", color: TEXT_MUTED }}>
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium" style={{ color: TEXT_BODY }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center animate-pulse"
            style={{ background: RH_ACCENT, boxShadow: `0 0 0 8px ${OFF_WHITE}, 0 8px 24px rgba(255,107,74,0.35)` }}
            aria-hidden="true"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#fff" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          <div className="rounded-2xl p-7" style={{ background: NAVY, border: `1px solid ${BORDER}` }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: RH_ACCENT }}>Con JAAK</p>
            <ol className="space-y-2.5">
              {AFTER_STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0" style={{ background: RH_ACCENT, color: "#fff" }}>
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-white">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TRUST BAR ─────────────────────────────────────────────────────── */

const TRUST_BAR_ITEMS = ["Firma electrónica", "NOM-151 cuando aplica", "Trazabilidad", "Sellos de tiempo", "ISO 27001"];

function TrustBar() {
  return (
    <section className="py-6" style={{ background: NAVY_SECONDARY }} aria-label="Respaldo técnico y regulatorio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_BAR_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
              {i > 0 && <span className="hidden sm:inline opacity-30">·</span>}
              <CheckIcon color={TEAL} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CASOS DE USO ──────────────────────────────────────────────────── */

function UseCaseGrid() {
  const featured = useCases.filter((u) => u.featured);
  const others = useCases.filter((u) => !u.featured);

  return (
    <section id="casos-de-uso" className="py-20 scroll-mt-20" style={{ background: LIGHT }} aria-labelledby="casos-uso-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="casos-uso-heading" className="text-3xl sm:text-4xl font-black mb-5" style={{ color: NAVY }}>
            Una firma para cada momento de la relación laboral
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((useCase) => (
            <div
              key={useCase.id}
              id={useCase.id}
              className="group rounded-2xl p-7 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-mt-24"
              style={{ border: `1px solid ${BORDER}` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${RH_ACCENT}55`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER)}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ background: "rgba(255,107,74,0.1)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke={RH_ACCENT} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={useCase.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2.5" style={{ color: NAVY }}>{useCase.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_BODY }}>{useCase.text}</p>
              {useCase.microflow && (
                <p className="text-xs font-semibold font-mono" style={{ color: "#0A6870" }}>{useCase.microflow}</p>
              )}
            </div>
          ))}
        </div>

        <div data-sr className="rounded-2xl p-6 sm:p-7 bg-white" style={{ border: `1px solid ${BORDER}` }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: TEXT_MUTED }}>
            + Otros casos de uso
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {others.map((useCase) => (
              <div key={useCase.id} id={useCase.id} className="flex items-start gap-3 scroll-mt-24">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,74,0.1)" }}>
                  <svg className="w-4 h-4" fill="none" stroke={RH_ACCENT} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={useCase.icon} />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold" style={{ color: NAVY }}>{useCase.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{useCase.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SELECTOR INTERACTIVO ──────────────────────────────────────────── */

function SelectorSection() {
  return (
    <section id="que-necesitas-firmar" className="py-20 scroll-mt-20 bg-white" aria-labelledby="selector-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-10">
          <h2 id="selector-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY }}>
            ¿Qué necesitas firmar?
          </h2>
          <p className="text-lg" style={{ color: TEXT_BODY }}>
            Selecciona un documento y te mostramos qué puede incorporar el flujo, según el nivel de evidencia
            requerido.
          </p>
        </div>
        <UseCaseSelector />
      </div>
    </section>
  );
}

/* ── NIVELES DE FIRMA ──────────────────────────────────────────────── */

function FirmaLevelsSection() {
  const [cotidianos, laboral] = firmaGroups;

  return (
    <section id="niveles-evidencia" className="py-20 scroll-mt-20" style={{ background: LIGHT }} aria-labelledby="niveles-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="niveles-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY }}>
            No todos los documentos necesitan el mismo tipo de firma.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: TEXT_BODY }}>
            JAAK permite adaptar el nivel de firma, evidencia e identidad al riesgo y naturaleza de cada documento.
          </p>
        </div>

        <div data-sr-grid className="grid md:grid-cols-5 gap-6 mb-6">
          {/* Firma simple */}
          <div className="md:col-span-2 rounded-2xl p-7 bg-white flex flex-col" style={{ border: `1px solid ${BORDER}` }}>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: TEXT_MUTED }}>{cotidianos.eyebrow}</p>
            <h3 className="text-xl font-black mb-2.5" style={{ color: NAVY }}>{cotidianos.name}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: TEXT_BODY }}>{cotidianos.text}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {cotidianos.examples.map((ex) => (
                <span key={ex} className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: LIGHT, color: TEXT_MUTED }}>{ex}</span>
              ))}
            </div>
            <Link
              href={cotidianos.href}
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold"
              style={{ color: "#0A6870" }}
            >
              Conocer Firma simple →
            </Link>
          </div>

          {/* Firma digital + NOM-151 — protagonista */}
          <div
            className="md:col-span-3 rounded-2xl p-7 sm:p-8 flex flex-col relative overflow-hidden"
            style={{ background: NAVY, border: `1px solid rgba(255,107,74,0.3)`, boxShadow: "0 20px 50px rgba(255,107,74,0.1)" }}
          >
            <span
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-4"
              style={{ background: RH_ACCENT, color: "#fff" }}
            >
              Producto protagonista para RH
            </span>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: RH_ACCENT }}>{laboral.eyebrow}</p>
            <h3 className="text-2xl font-black text-white mb-2.5">{laboral.name}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>{laboral.text}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {laboral.examples.map((ex) => (
                <span key={ex} className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)" }}>{ex}</span>
              ))}
            </div>
            {laboral.addOns && (
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {laboral.addOns.map((addOn) => (
                  <Link
                    key={addOn.name}
                    href={addOn.href}
                    className="rounded-xl p-3.5 transition-colors hover:bg-white/10"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <p className="text-sm font-bold text-white mb-0.5">{addOn.name}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{addOn.note}</p>
                  </Link>
                ))}
              </div>
            )}
            <Link
              href={laboral.href}
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold"
              style={{ color: RH_ACCENT }}
            >
              Conocer Firma digital + NOM-151 →
            </Link>
          </div>
        </div>

        {/* Modalidades especializadas */}
        <div data-sr className="rounded-2xl p-6 sm:p-7 bg-white" style={{ border: `1px dashed ${RH_ACCENT}` }}>
          <p className="text-[11px] font-bold uppercase tracking-wider mb-4" style={{ color: TEXT_MUTED }}>
            Para procesos que requieren un mecanismo reforzado
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {specializedModalities.map((modality) => (
              <Link
                key={modality.name}
                href={modality.href}
                className="flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-gray-50"
                style={{ border: `1px solid ${BORDER}` }}
              >
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: NAVY }}>{modality.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{modality.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── DIFERENCIADOR JAAK ────────────────────────────────────────────── */

const DIFFERENTIATOR_BLOCKS = [
  { label: "Quién", text: "Identificación del firmante" },
  { label: "Qué", text: "Documento asociado al evento" },
  { label: "Cuándo", text: "Registro temporal de la operación" },
  { label: "Evidencia", text: "Trazabilidad e integridad del proceso" },
];

function JaakDifferentiator() {
  return (
    <section className="py-20" style={{ background: NAVY }} aria-labelledby="diferenciador-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-sr className="mb-14">
          <h2 id="diferenciador-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
            Firmar es sólo una parte.
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Lo importante es la evidencia que queda después.
          </p>
        </div>
        <div data-sr-grid className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {DIFFERENTIATOR_BLOCKS.map((block) => (
            <div
              key={block.label}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${RH_ACCENT}66`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            >
              <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: RH_ACCENT }}>{block.label}</p>
              <p className="text-sm font-medium text-white">{block.text}</p>
            </div>
          ))}
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white max-w-2xl mx-auto">
          JAAK convierte una firma digital en un evento trazable.
        </p>
      </div>
    </section>
  );
}

/* ── EXPEDIENTE DIGITAL ────────────────────────────────────────────── */

const RECORD_ROWS = [
  { label: "Estado", value: "Firmado" },
  { label: "Firmante", value: "Ana García" },
  { label: "Fecha", value: "20 ago 2026" },
  { label: "Hora", value: "11:34" },
  { label: "Integridad", value: "Verificada" },
  { label: "Sello de tiempo", value: "Aplicado" },
  { label: "Evidencia", value: "Disponible" },
  { label: "Documento", value: "Disponible" },
];

function DigitalRecordPreview() {
  return (
    <section className="py-20" style={{ background: NAVY_SECONDARY }} aria-labelledby="expediente-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: RH_ACCENT }}>
              Al final no recibes sólo un PDF
            </p>
            <h2 id="expediente-heading" className="text-3xl sm:text-4xl font-black text-white mb-5">
              Lo importante no es sólo firmarlo.
              <br /> Es poder encontrarlo y demostrarlo después.
            </h2>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Cada documento firmado queda asociado a un expediente digital con la evidencia disponible para
              consultarla cuando se necesite.
            </p>
          </div>
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#fff", boxShadow: "0 30px 70px rgba(0,0,0,0.35)" }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold" style={{ color: NAVY }}>Contrato laboral</h3>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,107,74,0.14)", color: RH_ACCENT_DARK }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: RH_ACCENT }} aria-hidden="true" />
                Firmado
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-2 mb-6">
              {RECORD_ROWS.map((row) => (
                <div key={row.label} className="px-4 py-3 rounded-lg" style={{ background: LIGHT }}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: TEXT_MUTED }}>{row.label}</dt>
                  <dd className="flex items-center gap-1.5 text-xs font-bold" style={{ color: NAVY }}>
                    <CheckIcon color={TEAL} />
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col sm:flex-row gap-3">
              <span className="flex-1 text-center text-sm font-bold px-4 py-3 rounded-lg" style={{ background: NAVY, color: "#fff" }}>
                Ver evidencia
              </span>
              <span className="flex-1 text-center text-sm font-bold px-4 py-3 rounded-lg" style={{ border: `1px solid ${BORDER}`, color: NAVY }}>
                Consultar documento
              </span>
            </div>
            <p className="text-[11px] mt-4 text-center" style={{ color: TEXT_MUTED }}>
              Ejemplo ilustrativo. No refleja datos reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BUYER PERSONA ─────────────────────────────────────────────────── */

function BuyerPersonaBlock() {
  return (
    <section className="py-20" style={{ background: LIGHT }} aria-labelledby="buyer-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="buyer-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY }}>
            Una misma firma. Diferentes retos dentro de RH.
          </h2>
        </div>
        <BuyerPersonaSection />
      </div>
    </section>
  );
}

/* ── PERSONALIZACIÓN DE MARCA ──────────────────────────────────────── */

function BrandedExperience() {
  return (
    <section className="py-20" style={{ background: LIGHT }} aria-labelledby="marca-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="marca-heading" className="text-3xl sm:text-4xl font-black mb-5" style={{ color: NAVY }}>
              La experiencia puede sentirse como parte de tu empresa
            </h2>
            <p className="text-lg" style={{ color: TEXT_BODY }}>
              Personaliza la experiencia de firma para mantener la identidad visual de tu organización durante todo
              el proceso.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden mx-auto w-full max-w-sm" style={{ border: `1px solid ${BORDER}`, boxShadow: "0 20px 50px rgba(2,19,45,0.08)" }}>
            <div className="flex items-center gap-3 px-5 py-4" style={{ background: NAVY_SECONDARY }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0" style={{ background: TEAL, color: NAVY }}>
                RH
              </div>
              <span className="text-sm font-bold text-white">Tu Empresa (ejemplo)</span>
            </div>
            <div className="p-5 bg-white">
              <p className="text-sm mb-4" style={{ color: TEXT_BODY }}>
                Hola Ana, tienes un documento pendiente de firma.
              </p>
              <div className="rounded-lg p-4 mb-4" style={{ background: LIGHT }}>
                <p className="text-xs font-semibold" style={{ color: NAVY }}>Contrato laboral — Anexo de puesto</p>
              </div>
              <span className="block text-center text-sm font-bold px-4 py-3 rounded-lg mb-3" style={{ background: TEAL, color: NAVY }}>
                Revisar y firmar
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "#0A6870" }}>
                <CheckIcon color="#0A6870" /> Firma completada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── INTEGRACIÓN ───────────────────────────────────────────────────── */

const INTEGRATION_OPTIONS = [
  { title: "API", text: "Integra la firma directamente a tus sistemas mediante API." },
  { title: "Integración", text: "Conecta JAAK a los procesos y herramientas que ya utiliza tu organización." },
  { title: "Autoservicio", text: "Empieza a firmar desde una experiencia web, sin integración previa." },
  { title: "Flujo personalizado", text: "Configura el flujo de firma y evidencia según tu proceso de RH." },
];

const INTEGRATION_FLOW = ["HRIS", "JAAK", "Firma", "Evidencia", "Expediente"];

function IntegrationSection() {
  return (
    <section id="integracion-tecnica" className="py-20 scroll-mt-20" style={{ background: LIGHT }} aria-labelledby="integracion-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="integracion-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY }}>
            Firma donde ya ocurre tu proceso
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: TEXT_BODY }}>
            Utiliza JAAK desde una experiencia web o intégralo a los procesos que ya utiliza tu organización.
          </p>
        </div>
        <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INTEGRATION_OPTIONS.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderTop: `3px solid ${RH_ACCENT}`, borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
            >
              <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{option.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>{option.text}</p>
            </div>
          ))}
        </div>
        <div data-sr className="flex flex-wrap items-center justify-center gap-3">
          {INTEGRATION_FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white" style={{ border: `1px solid ${BORDER}`, color: NAVY }}>
                {step}
              </span>
              {i < INTEGRATION_FLOW.length - 1 && (
                <svg
                  className="w-4 h-4 flex-shrink-0 animate-pulse"
                  fill="none"
                  stroke={RH_ACCENT}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ animationDelay: `${i * 0.25}s` }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SUSTENTABILIDAD ───────────────────────────────────────────────── */

const SUSTAINABILITY_ITEMS = ["Menos impresiones", "Menos copias", "Menos archivo físico", "Menos traslados", "Menos reprocesos"];

function SustainabilitySection() {
  return (
    <section className="py-8 bg-white border-t border-b" style={{ borderColor: BORDER }} aria-label="Sustentabilidad">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <p className="text-sm font-semibold flex-shrink-0" style={{ color: TEXT_BODY }}>
          Digitalizar también significa dejar de imprimir — puede ayudar a reducir:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SUSTAINABILITY_ITEMS.map((item) => (
            <span key={item} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: LIGHT, color: TEXT_MUTED }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LEGAL / CONFIANZA ─────────────────────────────────────────────── */

const TRUST_CHIPS = ["Firma electrónica", "Evidencia digital", "Sellos de tiempo", "NOM-151 cuando corresponda"];

function TrustLegalSection() {
  return (
    <section className="py-20" style={{ background: LIGHT }} aria-labelledby="legal-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-sr>
          <h2 id="legal-heading" className="text-2xl sm:text-3xl font-black mb-5" style={{ color: NAVY }}>
            Tecnología para generar mejor evidencia
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: TEXT_BODY }}>
            La legislación laboral mexicana reconoce documentos electrónicos y firma electrónica dentro de su
            régimen probatorio. Dependiendo del documento y del proceso, pueden incorporarse capas adicionales de
            integridad, conservación y temporalidad.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {TRUST_CHIPS.map((chip) => (
              <span key={chip} className="px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.3)", color: "#0A6870" }}>
                {chip}
              </span>
            ))}
          </div>
          <p className="text-xs max-w-xl mx-auto" style={{ color: TEXT_MUTED }}>
            El nivel de firma y evidencia adecuado depende de la naturaleza del documento, el proceso y los
            criterios jurídicos de cada organización.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── VIDEO ─────────────────────────────────────────────────────────── */

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9", background: NAVY, border: "1px solid rgba(255,255,255,0.12)" }}>
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="Demo de firma digital JAAK para Recursos Humanos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            gtmEvent("rh_video_play", { page: "recursos-humanos", video: VIDEO_ID });
          }}
          aria-label="Reproducir video: del documento al expediente digital"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(2,19,45,0.55), rgba(2,19,45,0.75)), url(https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-transform hover:scale-105" style={{ background: RH_ACCENT, boxShadow: "0 0 0 10px rgba(255,107,74,0.18)" }}>
            <svg className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5" fill="#fff" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <p className="text-white font-bold text-base sm:text-lg">Ver el proceso completo</p>
        </button>
      )}
    </div>
  );
}

function VideoSection() {
  return (
    <section id="video" className="py-20 scroll-mt-20 bg-white" aria-labelledby="video-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-10">
          <h2 id="video-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY }}>
            Mira el proceso completo en minutos
          </h2>
          <p className="text-lg" style={{ color: TEXT_BODY }}>Del documento al expediente digital.</p>
        </div>
        <div data-sr>
          <VideoPlayer />
        </div>
        <div className="text-center mt-8">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
            style={{ background: NAVY, color: "#fff" }}
          >
            Quiero verlo aplicado a mi proceso
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── CALCULADORA DE VOLUMEN ────────────────────────────────────────── */

function VolumeCalculator() {
  const [colaboradores, setColaboradores] = useState("");
  const [documentosPorPersona, setDocumentosPorPersona] = useState("");

  const n1 = parseInt(colaboradores, 10);
  const n2 = parseInt(documentosPorPersona, 10);
  const total = Number.isFinite(n1) && Number.isFinite(n2) && n1 > 0 && n2 > 0 ? n1 * n2 : null;

  return (
    <section className="py-20 bg-white" aria-labelledby="calculadora-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-10">
          <h2 id="calculadora-heading" className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY }}>
            ¿Cuánto trabajo documental mueve tu RH?
          </h2>
          <p className="text-lg" style={{ color: TEXT_BODY }}>
            Una estimación simple a partir de tus propios números — no de promedios de industria.
          </p>
        </div>
        <div data-sr className="rounded-2xl p-6 sm:p-9" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
          <div className="grid sm:grid-cols-2 gap-6 mb-7">
            <div>
              <label htmlFor="rh-calc-colaboradores" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>
                Colaboradores
              </label>
              <input
                id="rh-calc-colaboradores"
                type="number"
                min={0}
                inputMode="numeric"
                value={colaboradores}
                onChange={(e) => setColaboradores(e.target.value)}
                placeholder="Ej. 1,000"
                className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-[15px]"
                style={{ borderColor: BORDER, color: NAVY }}
              />
            </div>
            <div>
              <label htmlFor="rh-calc-documentos" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>
                Documentos que requieren firma por persona/año
              </label>
              <input
                id="rh-calc-documentos"
                type="number"
                min={0}
                inputMode="numeric"
                value={documentosPorPersona}
                onChange={(e) => setDocumentosPorPersona(e.target.value)}
                placeholder="Ej. 4"
                className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-[15px]"
                style={{ borderColor: BORDER, color: NAVY }}
              />
            </div>
          </div>

          <div className="rounded-xl p-5 mb-7 flex items-center justify-between" style={{ background: "#fff", border: `1px dashed ${RH_ACCENT}` }}>
            <span className="text-sm font-semibold" style={{ color: TEXT_BODY }}>Total estimado de eventos de firma / año</span>
            <span className="text-2xl font-black" style={{ color: total !== null ? RH_ACCENT_DARK : TEXT_MUTED }}>
              {total !== null ? total.toLocaleString("es-MX") : "—"}
            </span>
          </div>

          <a
            href="#contacto-form"
            onClick={() => gtmEvent("rh_volume_calc_cta_click", { page: "recursos-humanos", colaboradores: n1 || null, documentos_por_persona: n2 || null })}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
            style={{ background: RH_ACCENT, color: "#fff" }}
          >
            Quiero revisar este volumen con JAAK
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FORMULARIO / CTA FINAL ────────────────────────────────────────── */

interface LeadForm {
  nombre: string;
  apellido: string;
  empresa: string;
  cargo: string;
  correo: string;
  telefono: string;
  colaboradores: string;
  documento: string;
  acepta: boolean;
}

const FORM_INITIAL: LeadForm = {
  nombre: "",
  apellido: "",
  empresa: "",
  cargo: "",
  correo: "",
  telefono: "",
  colaboradores: "",
  documento: "",
  acepta: false,
};

function LeadFormSection() {
  const [form, setForm] = useState<LeadForm>(FORM_INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [started, setStarted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (!started) {
      setStarted(true);
      gtmEvent("rh_form_start", { page: "recursos-humanos" });
    }
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nombre,
          apellido: form.apellido,
          empresa: form.empresa,
          cargo: form.cargo,
          email: form.correo,
          telefono: form.telefono,
          mensaje: [
            form.colaboradores && `Número aproximado de colaboradores: ${form.colaboradores}`,
            form.documento && `Documento/proceso a digitalizar: ${form.documento}`,
          ]
            .filter(Boolean)
            .join(" | "),
          source: "landing-recursos-humanos",
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        gtmEvent("rh_form_submit", { page: "recursos-humanos", documento: form.documento });
        setForm(FORM_INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-[15px]";

  return (
    <div className="rounded-2xl p-6 sm:p-9" style={{ background: "#fff", border: `1px solid ${BORDER}`, boxShadow: "0 20px 50px rgba(2,19,45,0.1)" }}>
      {status === "success" ? (
        <div className="py-6 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "rgba(30,202,211,0.14)" }}>
            <CheckIcon color="#0A6870" />
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Solicitud enviada</h3>
          <p style={{ color: TEXT_MUTED }}>Un especialista de JAAK te contacta en menos de 24 horas para revisar tu caso de uso.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulario de contacto para Firma Digital de Recursos Humanos">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="rh-nombre" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Nombre *</label>
              <input id="rh-nombre" required type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label htmlFor="rh-apellido" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Apellido *</label>
              <input id="rh-apellido" required type="text" name="apellido" value={form.apellido} onChange={handleChange} placeholder="Tu apellido" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="rh-empresa" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Empresa *</label>
              <input id="rh-empresa" required type="text" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de la empresa" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label htmlFor="rh-cargo" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Cargo *</label>
              <input id="rh-cargo" required type="text" name="cargo" value={form.cargo} onChange={handleChange} placeholder="Tu puesto en RH" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="rh-correo" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Correo corporativo *</label>
              <input id="rh-correo" required type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="tu@empresa.com" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label htmlFor="rh-telefono" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Teléfono</label>
              <input id="rh-telefono" type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+52 55 1234 5678" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="rh-colaboradores" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Número aproximado de colaboradores</label>
              <input id="rh-colaboradores" type="text" name="colaboradores" value={form.colaboradores} onChange={handleChange} placeholder="Ej. 200 - 500" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label htmlFor="rh-documento" className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Documento/proceso que desea digitalizar</label>
              <select id="rh-documento" name="documento" value={form.documento} onChange={handleChange} className={inputClass} style={{ borderColor: BORDER, color: NAVY }}>
                <option value="">Selecciona una opción</option>
                {DOCUMENTO_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm" style={{ color: TEXT_MUTED }}>
            <input required type="checkbox" name="acepta" checked={form.acepta} onChange={handleChange} className="mt-1" />
            <span>
              Acepto el{" "}
              <Link href="/privacidad" className="underline" style={{ color: "#0A6870" }}>
                Aviso de Privacidad
              </Link>{" "}
              de JAAK.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-4 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            style={{ background: TEAL, color: NAVY }}
          >
            {status === "loading" ? "Enviando..." : "Quiero revisar mi caso"}
          </button>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700 font-medium text-sm">{errorMessage}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="contacto" className="py-20 scroll-mt-20" style={{ background: NAVY_SECONDARY }} aria-labelledby="cta-final-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div data-sr>
            <h2 id="cta-final-heading" className="text-3xl sm:text-4xl font-black text-white mb-5">
              ¿Qué documentos sigue firmando manualmente tu equipo?
            </h2>
            <p className="text-lg mb-9" style={{ color: "rgba(255,255,255,0.7)" }}>
              Podemos revisar uno de tus flujos actuales —contratos, anexos, políticas o compensación— y mostrarte
              cómo podría convertirse en un proceso digital con evidencia.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6" data-cta-track data-cta-location="cta-final">
              <a
                href="#contacto-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                style={{ background: TEAL, color: NAVY }}
              >
                Revisar mi caso de uso
                <ArrowIcon />
              </a>
              <a
                href={MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMeeting("cta_final")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
              >
                Agendar 15 minutos
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("cta_final")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <WhatsAppIcon /> Hablar por WhatsApp
              </a>
            </div>
          </div>
          <div id="contacto-form" className="scroll-mt-24">
            <LeadFormSection />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PÁGINA ────────────────────────────────────────────────────────── */

export default function RecursosHumanosLandingClient() {
  useEffect(() => {
    gtmEvent("rh_landing_view", { page: "recursos-humanos", ...getUtmParams() });
  }, []);

  return (
    <>
      <ScrollReveal />
      <Header />
      <main style={{ background: OFF_WHITE }}>
        <Hero />
        <ProcessComparison />
        <TrustBar />
        <UseCaseGrid />
        <FirmaLevelsSection />
        <SelectorSection />
        <JaakDifferentiator />
        <DigitalRecordPreview />
        <BuyerPersonaBlock />
        <BrandedExperience />
        <IntegrationSection />
        <SustainabilitySection />
        <TrustLegalSection />
        <VideoSection />
        <VolumeCalculator />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
