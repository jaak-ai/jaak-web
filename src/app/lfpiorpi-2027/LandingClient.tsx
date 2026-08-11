"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────────────────────────────────
 * Marca e identidad visual
 * ───────────────────────────────────────────────────────────────────────── */
const NAVY = "#02132D";
const NAVY_SOFT = "#0B1E3C";
const TEAL = "#1ECAD3";
const OFF_WHITE = "#F5F5F3";
const GRAY_LIGHT = "#EEF2F5";
const WHITE = "#FFFFFF";
const TEXT_MUTED = "#5B6472";

const PAGE = "lfpiorpi-2027";

/* ─────────────────────────────────────────────────────────────────────────
 * Fuentes oficiales
 * ───────────────────────────────────────────────────────────────────────── */
const DOF_URL = "https://dof.gob.mx/nota_detalle.php?codigo=5795797&fecha=07/08/2026";
const LFPIORPI_URL = "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf";
const SAT_MARCO_URL = "https://sppld.sat.gob.mx/pld/interiores/marco.html";
const SAT_ACTIVIDADES_URL = "https://www.sat.gob.mx/minisitio/ActividadesVulnerables/index.html";
const SAT_INMUEBLES_URL = "https://sppld.sat.gob.mx/pld/interiores/inmuebles.html";
const SAT_ACTIVOS_URL = "https://sppld.sat.gob.mx/pld/interiores/activos.html";

type SourceKind = "dof" | "lfpiorpi" | "sat";
const SOURCE_EVENTS: Record<SourceKind, string> = {
  dof: "source_click_dof",
  lfpiorpi: "source_click_lfpiorpi",
  sat: "source_click_sat",
};

/* ─────────────────────────────────────────────────────────────────────────
 * Utilidad: scroll suave a una sección por id
 * ───────────────────────────────────────────────────────────────────────── */
function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─────────────────────────────────────────────────────────────────────────
 * Demos ya existentes en el sitio — nunca se inventan rutas nuevas
 * ───────────────────────────────────────────────────────────────────────── */
const KYC_DEMO_URL = "/kyc-demo-autoservicio";
const FIRMA_DEMO_URL = "/firma-nom151-demo-autoservicio";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ─────────────────────────────────────────────────────────────────────────
 * Iconografía lineal mínima
 * ───────────────────────────────────────────────────────────────────────── */
function ExternalIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`inline-block ${className} ml-1 -mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Enlace a fuente oficial — siempre nueva pestaña, ícono externo, tracking
 * ───────────────────────────────────────────────────────────────────────── */
function SourceLink({
  href,
  kind,
  label,
  context,
  className,
  style,
}: {
  href: string;
  kind: SourceKind;
  label: string;
  context: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre en una pestaña nueva)`}
      onClick={() => gtmEvent(SOURCE_EVENTS[kind], { context, page: PAGE, href })}
      className={className}
      style={style}
    >
      {label}
      <ExternalIcon />
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Rastreo de impresión — dispara un evento una sola vez cuando el elemento
 * entra en viewport. Nunca un <button>/<a>: evita anidar interactivos.
 * ───────────────────────────────────────────────────────────────────────── */
function ImpressionTracker({
  eventName,
  payload,
  threshold = 0.4,
  className,
  style,
  children,
}: {
  eventName: string;
  payload: Record<string, unknown>;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            gtmEvent(eventName, payload);
          }
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Diagrama de flujo nativo — nodos + línea teal, horizontal en desktop,
 * vertical en mobile. Reemplaza la ilustración rasterizada del flujo JAAK:
 * misma información, mayor velocidad y consistencia con la interfaz.
 * ───────────────────────────────────────────────────────────────────────── */
function ProcessFlow({ steps, background }: { steps: string[]; background: string }) {
  const endpoints = new Set([0, steps.length - 1]);
  return (
    <div className="max-w-4xl mx-auto mb-12">
      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 right-0 top-1.5 h-px" style={{ background: `${TEAL}55` }} aria-hidden="true" />
        <div className="relative flex items-start justify-between">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2.5 px-2" style={{ background }}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: endpoints.has(i) ? NAVY : TEAL, border: `2px solid ${TEAL}` }} />
              <span className="text-[11px] font-bold uppercase tracking-wide text-center whitespace-nowrap" style={{ color: endpoints.has(i) ? TEXT_MUTED : NAVY }}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden flex flex-col">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3 relative">
            {i < steps.length - 1 && (
              <div className="absolute left-[5px] top-4 bottom-0 w-px" style={{ background: `${TEAL}55` }} aria-hidden="true" />
            )}
            <span className="w-3 h-3 rounded-full flex-shrink-0 relative z-10" style={{ background: endpoints.has(i) ? NAVY : TEAL, border: `2px solid ${TEAL}` }} />
            <span className="text-[13px] font-bold uppercase tracking-wide py-2" style={{ color: endpoints.has(i) ? TEXT_MUTED : NAVY }}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Encabezado de sección reutilizable
 * ───────────────────────────────────────────────────────────────────────── */
function SectionEyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
      style={{ background: dark ? "rgba(30,202,211,0.1)" : `${TEAL}14`, border: `1px solid ${TEAL}55` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} />
      <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: dark ? "#7FE8EC" : "#0E7C82" }}>
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Taxonomía sectorial — 6 grupos (sección 02 y 08) + personalización UTM
 * ───────────────────────────────────────────────────────────────────────── */
type SectorGroupId =
  | "inmobiliario"
  | "credito-financiero"
  | "juegos-activos"
  | "bienes-alto-valor"
  | "servicios-profesionales"
  | "otras-actividades";

const SECTOR_GROUPS: Array<{
  id: SectorGroupId;
  num: string;
  titulo: string;
  subcategorias: string[];
  microcopy?: string;
}> = [
  {
    id: "inmobiliario",
    num: "01",
    titulo: "Inmobiliario",
    subcategorias: ["Construcción", "Desarrollo inmobiliario", "Intermediación", "Arrendamiento", "Operaciones relacionadas con inmuebles"],
  },
  {
    id: "credito-financiero",
    num: "02",
    titulo: "Crédito y servicios financieros no financieros",
    subcategorias: ["Préstamos", "Crédito", "Mutuo", "Tarjetas", "Instrumentos de valor"],
    microcopy: "La aplicabilidad depende del tipo de entidad y actividad realizada.",
  },
  {
    id: "juegos-activos",
    num: "03",
    titulo: "Juegos y activos digitales",
    subcategorias: ["Gaming", "Juegos con apuesta", "Concursos", "Sorteos", "Activos virtuales"],
  },
  {
    id: "bienes-alto-valor",
    num: "04",
    titulo: "Bienes de alto valor",
    subcategorias: ["Vehículos", "Joyería", "Relojes", "Metales preciosos", "Piedras preciosas", "Obras de arte"],
  },
  {
    id: "servicios-profesionales",
    num: "05",
    titulo: "Servicios profesionales",
    subcategorias: ["Legal", "Contable", "Corporativo", "Fe pública", "Operaciones por cuenta de clientes"],
  },
  {
    id: "otras-actividades",
    num: "06",
    titulo: "Otras actividades",
    subcategorias: ["Blindaje", "Traslado o custodia de valores", "Donativos", "Comercio exterior", "Otras actividades previstas por la LFPIORPI"],
  },
];

const SECTOR_GROUP_LABEL: Record<SectorGroupId, string> = Object.fromEntries(
  SECTOR_GROUPS.map((g) => [g.id, g.titulo])
) as Record<SectorGroupId, string>;

/** Guía corta + capacidades JAAK relevantes por grupo, mostradas al
 * seleccionar una tarjeta en "¿Tu actividad está contemplada?". */
const SECTOR_GROUP_GUIDANCE: Record<SectorGroupId, { texto: string; tags: string[] }> = {
  inmobiliario: {
    texto: "Para estas actividades, revisa especialmente tus procesos de identificación, Beneficiario Controlador, firma y expediente.",
    tags: ["KYC", "AML Screening", "Firma Digital", "Evidencia"],
  },
  "credito-financiero": {
    texto: "Para estas actividades, revisa especialmente tus procesos de identificación, Beneficiario Controlador y conservación de evidencia.",
    tags: ["KYC", "AML Screening", "Evidencia"],
  },
  "juegos-activos": {
    texto: "Para estas actividades, revisa especialmente tus procesos de identificación, screening y trazabilidad.",
    tags: ["KYC", "AML Screening", "Evidencia"],
  },
  "bienes-alto-valor": {
    texto: "Para estas actividades, revisa especialmente tus procesos de identificación, screening y conservación de evidencia.",
    tags: ["KYC", "AML Screening", "Evidencia"],
  },
  "servicios-profesionales": {
    texto: "Para estas actividades, revisa especialmente tus procesos de identificación, Beneficiario Controlador, declaraciones y evidencia.",
    tags: ["KYC", "AML Screening", "Firma Digital", "Evidencia"],
  },
  "otras-actividades": {
    texto: "Para estas actividades, revisa especialmente tus procesos de identificación, screening y conservación de evidencia.",
    tags: ["KYC", "AML Screening", "Evidencia"],
  },
};

/** ?sector= de campaña → grupo + copy de CTA personalizado. Incluye alias
 * heredados (fintech/gaming) para no romper enlaces de campañas ya enviadas. */
const CAMPAIGN_PARAM_MAP: Record<string, { group: SectorGroupId; ctaLabel: string; formOption: string }> = {
  inmobiliario: { group: "inmobiliario", ctaLabel: "Revisar mi expediente", formOption: "Inmobiliario" },
  "activos-virtuales": { group: "juegos-activos", ctaLabel: "Revisar identidad y riesgo", formOption: "Activos virtuales" },
  automotriz: { group: "bienes-alto-valor", ctaLabel: "Revisar mi proceso", formOption: "Automotriz" },
  joyeria: { group: "bienes-alto-valor", ctaLabel: "Revisar mi proceso", formOption: "Joyería" },
  "servicios-profesionales": { group: "servicios-profesionales", ctaLabel: "Revisar identidad y evidencia", formOption: "Servicios profesionales" },
  // Alias heredados de la versión anterior de la landing
  fintech: { group: "credito-financiero", ctaLabel: "Revisar mi onboarding", formOption: "Crédito / Lending" },
  gaming: { group: "juegos-activos", ctaLabel: "Revisar mi proceso KYC", formOption: "Gaming / Sorteos" },
};

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 03: Qué cambió — 6 tarjetas regulatorias + conexión a tecnología
 * ───────────────────────────────────────────────────────────────────────── */
const ENFOQUE_CARDS: Array<{
  etiqueta: string;
  titulo: string;
  texto: string;
  fuenteLabel: string;
  jaakLabel?: string;
  jaakApoya: string[];
  disclaimer?: string;
  microcopy?: string;
}> = [
  {
    etiqueta: "Identificación",
    titulo: "Expediente del Cliente o Usuario",
    texto: "Integración, conservación y actualización de la información utilizada para conocer al Cliente o Usuario.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakApoya: ["KYC", "Fuentes"],
  },
  {
    etiqueta: "Beneficiario Controlador",
    titulo: "Identificar quién ejerce el control",
    texto: "Procesos para identificar y documentar a la persona física que finalmente ejerce control cuando corresponda.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakApoya: ["Identidad", "Screening", "Evidencia"],
    disclaimer: "JAAK no determina automáticamente al Beneficiario Controlador: apoya la identificación y documentación del proceso.",
  },
  {
    etiqueta: "Riesgo",
    titulo: "Clasificación del Cliente",
    texto: "Evaluación y clasificación de Clientes o Usuarios conforme a niveles de riesgo, con controles diferenciados según el resultado.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakLabel: "Señales",
    jaakApoya: ["Identidad", "PEP", "Listas"],
    disclaimer: "JAAK no reemplaza el modelo interno de riesgo del sujeto obligado: aporta señales que pueden integrarse a él.",
  },
  {
    etiqueta: "PEP y señales de riesgo",
    titulo: "Conocer más que una identidad",
    texto: "Las nuevas Reglas incorporan controles relacionados con Personas Políticamente Expuestas, Clientes de alto riesgo y otros factores relevantes para la evaluación y monitoreo.",
    fuenteLabel: "Fuente: DOF · Arts. 23 Bis 3, 23 Bis 4, 23 Ter y 41",
    jaakApoya: ["AML Screening"],
  },
  {
    etiqueta: "Automatización",
    titulo: "Mecanismos automatizados",
    texto: "Herramientas capaces de apoyar la gestión de expedientes, consolidación de operaciones, clasificación de riesgo, monitoreo, históricos y sistemas de alertas.",
    fuenteLabel: "Fuente: DOF · Art. 41",
    jaakApoya: ["Identidad", "Screening", "Firma", "Evidencia"],
    microcopy: "Otros componentes, como perfil transaccional o modelos internos de riesgo, pueden integrarse dentro de la arquitectura de cumplimiento de cada organización.",
  },
  {
    etiqueta: "Evidencia",
    titulo: "Poder demostrar",
    texto: "Conservar información, históricos y evidencia que permita sustentar los procesos y controles realizados.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakApoya: ["Trazabilidad"],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 04: Timeline regulatorio
 * ───────────────────────────────────────────────────────────────────────── */
const TIMELINE_PRIMARY = [
  {
    id: "vigencia",
    dateTop: "30 NOV",
    dateBottom: "2026",
    titulo: "Entrada en vigor general",
    texto: "El Acuerdo entra en vigor el 30 de noviembre de 2026, salvo las excepciones previstas en sus disposiciones transitorias.",
    fuenteLabel: "Fuente: DOF · Transitorio Primero",
  },
  {
    id: "riesgo-kyc",
    dateTop: "01 MAR",
    dateBottom: "2027",
    titulo: "Enfoque basado en riesgo y conocimiento del cliente",
    texto: "A partir de esta fecha aplican diversas disposiciones relacionadas con la metodología basada en riesgo, clasificación del grado de riesgo, conocimiento del Cliente o Usuario y Beneficiario Controlador, conforme a los artículos transitorios aplicables.",
    fuenteLabel: "Fuente: DOF · Transitorios Segundo, Tercero y Cuarto",
  },
  {
    id: "automatizacion",
    dateTop: "01 JUN",
    dateBottom: "2027",
    titulo: "Fecha límite para mecanismos automatizados",
    texto: "Quienes realicen Actividades Vulnerables deberán contar con los mecanismos automatizados previstos en las nuevas Reglas a más tardar en esta fecha.",
    fuenteLabel: "Fuente: DOF · Transitorio Noveno",
  },
];

const TIMELINE_SECONDARY = [
  {
    id: "capacitacion",
    dateTop: "2027",
    titulo: "Primer periodo anual de capacitación",
    texto: "El primer periodo previsto por las nuevas Reglas comprende del 1 de enero al 31 de diciembre de 2027.",
    fuenteLabel: "Fuente: DOF · Transitorio Séptimo",
  },
  {
    id: "auditoria",
    dateTop: "2028",
    titulo: "Primer periodo de auditoría",
    texto: "El primer periodo de revisión de auditoría conforme a las nuevas disposiciones comprenderá del 1 de enero al 31 de diciembre de 2028.",
    fuenteLabel: "Fuente: DOF · Transitorio Octavo",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 05: Qué puede automatizar JAAK — 4 bloques (no 5 tarjetas)
 * ───────────────────────────────────────────────────────────────────────── */
const JAAK_MODULES: Array<{
  num: string;
  titulo: string;
  texto: string;
  href?: string;
  ctaLabel?: string;
  eventName?: string;
}> = [
  { num: "01", titulo: "Identidad", texto: "KYC biométrico + fuentes oficiales.", href: "/plataforma/verificacion-identidad", ctaLabel: "Ver KYC", eventName: "product_kyc_click" },
  { num: "02", titulo: "Riesgo", texto: "PEP + listas AML.", href: "/listas-de-riesgo-pld-aml", ctaLabel: "Conocer AML Screening", eventName: "product_aml_click" },
  { num: "03", titulo: "Formalización", texto: "Firma Digital.", href: "/plataforma/firma-electronica", ctaLabel: "Ver Firma Digital" },
  { num: "04", titulo: "Evidencia", texto: "Trazabilidad del proceso.", href: "/plataforma/gestion-evidencia", ctaLabel: "Conocer Evidencia" },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección intermedia — KYC continuo (statement visual, sin cards)
 * ───────────────────────────────────────────────────────────────────────── */
const KYC_FLOW = ["Identidad", "Riesgo", "Perfil", "Monitoreo", "Alertas", "Histórico"];
const JAAK_FLOW = ["Cliente", "Identidad", "Fuentes", "Screening", "Firma", "Evidencia", "Tu proceso"];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 06: Checklist inteligente
 * ───────────────────────────────────────────────────────────────────────── */
// Mismas 4 capas que la sección "Qué puede automatizar JAAK" (Identidad,
// Riesgo, Formalización, Evidencia) — antes eran 5 categorías con nombres
// distintos entre secciones, lo que generaba un modelo mental inconsistente.
type Capa = "identidad" | "riesgo" | "formalizacion" | "evidencia";

const CAPA_ORDER: Capa[] = ["identidad", "riesgo", "formalizacion", "evidencia"];

const CAPA_INFO: Record<Capa, { label: string; needEvent: string }> = {
  identidad: { label: "Identidad", needEvent: "need_kyc_selected" },
  riesgo: { label: "Riesgo", needEvent: "need_aml_selected" },
  formalizacion: { label: "Formalización", needEvent: "need_signature_selected" },
  evidencia: { label: "Evidencia", needEvent: "need_evidence_selected" },
};

// 5 preguntas (antes 9): para tráfico frío, cada obligación de clasificación,
// históricos y mecanismos automatizados ya queda explicada en Art. 41 — no
// hace falta convertir cada obligación regulatoria en un checkbox.
const CHECKLIST_ITEMS: Array<{ text: string; capa: Capa }> = [
  { text: "¿Validas digitalmente la identidad de tus clientes?", capa: "identidad" },
  { text: "¿Consultas PEP y listas de riesgo?", capa: "riesgo" },
  { text: "¿Tienes procesos para Beneficiario Controlador cuando aplica?", capa: "identidad" },
  { text: "¿Formalizas declaraciones o documentos digitalmente?", capa: "formalizacion" },
  { text: "¿Puedes demostrar posteriormente qué validaciones realizaste?", capa: "evidencia" },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 07: Mecanismos automatizados (Art. 41)
 * ───────────────────────────────────────────────────────────────────────── */
const AUTOMATION_NODES = [
  { titulo: "Expediente", texto: "Conservar y actualizar información del Cliente o Usuario." },
  { titulo: "Consolidación", texto: "Integrar información de operaciones realizadas con el mismo Cliente." },
  { titulo: "Perfil", texto: "Apoyar el seguimiento de comportamientos y desviaciones." },
  { titulo: "Riesgo", texto: "Ejecutar modelos de clasificación." },
  { titulo: "Histórico", texto: "Conservar modificaciones de riesgo y perfil." },
  { titulo: "Alertas", texto: "Generar señales relacionadas con Clientes de alto riesgo, PEP u otros supuestos definidos." },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 08: Aplicación por industria — detalle por grupo sectorial
 * ───────────────────────────────────────────────────────────────────────── */
type IndustryBlock = { titulo?: string; necesidades: string[]; jaak: string[] };
type IndustryDetail = { blocks: IndustryBlock[]; fuente: { kind: SourceKind; label: string; url: string } };

const INDUSTRY_DETAILS: Record<SectorGroupId, IndustryDetail> = {
  inmobiliario: {
    blocks: [{ necesidades: ["Identidad", "Beneficiario Controlador", "PEP/Listas", "Firma", "Expediente"], jaak: ["KYC", "AML Screening", "Firma Digital", "Evidencia"] }],
    fuente: { kind: "sat", label: "SAT · Inmuebles", url: SAT_INMUEBLES_URL },
  },
  "credito-financiero": {
    blocks: [{ necesidades: ["Identidad", "Beneficiario Controlador", "PEP/Listas", "Expediente", "Evidencia"], jaak: ["KYC", "AML Screening", "Evidencia"] }],
    fuente: { kind: "sat", label: "SAT · Actividades Vulnerables", url: SAT_ACTIVIDADES_URL },
  },
  "juegos-activos": {
    blocks: [
      { titulo: "Gaming / Sorteos", necesidades: ["Identidad", "Riesgo", "Trazabilidad"], jaak: ["KYC", "AML Screening", "Evidencia"] },
      { titulo: "Activos virtuales", necesidades: ["Identidad", "Screening", "Riesgo", "Trazabilidad"], jaak: ["KYC", "AML Screening", "Evidencia"] },
    ],
    fuente: { kind: "sat", label: "SAT · Activos Virtuales", url: SAT_ACTIVOS_URL },
  },
  "bienes-alto-valor": {
    blocks: [
      { titulo: "Automotriz", necesidades: ["Identidad", "PEP/Listas", "Evidencia", "Formalización"], jaak: ["KYC", "AML Screening", "Firma", "Evidencia"] },
      { titulo: "Joyería", necesidades: ["Identidad", "Riesgo", "Screening", "Evidencia"], jaak: ["KYC", "AML Screening", "Evidencia"] },
    ],
    fuente: { kind: "sat", label: "SAT · Actividades Vulnerables", url: SAT_ACTIVIDADES_URL },
  },
  "servicios-profesionales": {
    blocks: [{ necesidades: ["Identidad", "Beneficiario Controlador", "Declaraciones", "Firma", "Evidencia"], jaak: ["KYC", "AML Screening", "Firma Digital", "Evidencia"] }],
    fuente: { kind: "sat", label: "SAT · Actividades Vulnerables", url: SAT_ACTIVIDADES_URL },
  },
  "otras-actividades": {
    blocks: [{ necesidades: ["Identidad", "PEP/Listas", "Expediente", "Evidencia"], jaak: ["KYC", "AML Screening", "Evidencia"] }],
    fuente: { kind: "sat", label: "SAT · Actividades Vulnerables", url: SAT_ACTIVIDADES_URL },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 09: Fuentes oficiales
 * ───────────────────────────────────────────────────────────────────────── */
const FUENTES_OFICIALES: Array<{
  eyebrow: string;
  titulo: string;
  descripcion: string;
  ctaLabel: string;
  url: string;
  kind: SourceKind;
}> = [
  {
    eyebrow: "Diario Oficial de la Federación",
    titulo: "Nuevas Reglas de Carácter General",
    descripcion: "Acuerdo 115/2026 publicado el 7 de agosto de 2026.",
    ctaLabel: "Consultar publicación en DOF",
    url: DOF_URL,
    kind: "dof",
  },
  {
    eyebrow: "Cámara de Diputados",
    titulo: "LFPIORPI — Texto vigente",
    descripcion: "Consulta el texto vigente de la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.",
    ctaLabel: "Consultar ley",
    url: LFPIORPI_URL,
    kind: "lfpiorpi",
  },
  {
    eyebrow: "SAT / PLD",
    titulo: "Marco Jurídico PLD",
    descripcion: "Consulta Ley, Reglamento, Reglas de Carácter General y demás disposiciones relacionadas.",
    ctaLabel: "Consultar marco jurídico",
    url: SAT_MARCO_URL,
    kind: "sat",
  },
  {
    eyebrow: "SAT",
    titulo: "Actividades Vulnerables",
    descripcion: "Consulta información oficial sobre las actividades contempladas en la LFPIORPI.",
    ctaLabel: "Consultar actividades",
    url: SAT_ACTIVIDADES_URL,
    kind: "sat",
  },
];

/** Grupos con mapeo 1:1 claro hacia una opción del selector del formulario.
 * Los grupos que agrupan sub-industrias distintas (juegos/activos, bienes de
 * alto valor, otras actividades) se dejan sin precargar para no adivinar mal
 * y afectar la calidad del lead — el usuario elige explícitamente. */
const GROUP_TO_FORM_OPTION: Partial<Record<SectorGroupId, string>> = {
  inmobiliario: "Inmobiliario",
  "credito-financiero": "Crédito / Lending",
  "servicios-profesionales": "Servicios profesionales",
};

const SECTOR_SELECT_OPTIONS = [
  "Inmobiliario",
  "Activos virtuales",
  "Gaming / Sorteos",
  "Crédito / Lending",
  "Automotriz",
  "Joyería",
  "Servicios profesionales",
  "Donativos",
  "Blindaje / Valores",
  "Otro",
];

/* ─────────────────────────────────────────────────────────────────────────
 * Header de campaña — sin mega menú, dos acciones únicas
 * ───────────────────────────────────────────────────────────────────────── */
function CampaignHeader() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 flex items-center"
      style={{ background: "rgba(2,19,45,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link href="/" aria-label="Ir a jaak.ai" className="flex-shrink-0 inline-flex items-center gap-2 group">
          {/* Marca de nodos — mismo lenguaje visual que la red del hero, nunca se pixela */}
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="transition-transform group-hover:scale-105">
            <g stroke={TEAL} strokeWidth="1.3" strokeOpacity="0.9">
              <line x1="5" y1="16.5" x2="11" y2="5.5" />
              <line x1="11" y1="5.5" x2="17" y2="16.5" />
              <line x1="5" y1="16.5" x2="17" y2="16.5" />
            </g>
            <circle cx="11" cy="5.5" r="2.2" fill={TEAL} />
            <circle cx="5" cy="16.5" r="2.2" fill={NAVY} stroke={TEAL} strokeWidth="1.3" />
            <circle cx="17" cy="16.5" r="2.2" fill={NAVY} stroke={TEAL} strokeWidth="1.3" />
          </svg>
          <span className="text-white font-black text-[16px] tracking-[0.08em]">JAAK</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <SourceLink
            href={DOF_URL}
            kind="dof"
            label="Fuente oficial"
            context="campaign_header"
            className="hidden sm:inline-flex items-center text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
          />
          <button
            type="button"
            onClick={() => {
              gtmEvent("cta_review_process", { location: "campaign_header", page: PAGE });
              scrollToId("autoevaluacion");
            }}
            className="inline-flex items-center rounded-lg px-4 py-2 text-[13px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ background: TEAL, color: NAVY }}
          >
            Revisar mi operación
          </button>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 02 — ¿Tu actividad está contemplada?
 * ───────────────────────────────────────────────────────────────────────── */
function ActivityGroups({
  campaignGroup,
  onSelectGroup,
}: {
  campaignGroup: SectorGroupId | null;
  onSelectGroup: (id: SectorGroupId) => void;
}) {
  const [activeGroup, setActiveGroup] = useState<SectorGroupId | null>(campaignGroup);

  useEffect(() => {
    if (campaignGroup) setActiveGroup(campaignGroup);
  }, [campaignGroup]);

  const orderedGroups = useMemo(() => {
    if (!campaignGroup) return SECTOR_GROUPS;
    const match = SECTOR_GROUPS.find((g) => g.id === campaignGroup);
    if (!match) return SECTOR_GROUPS;
    return [match, ...SECTOR_GROUPS.filter((g) => g.id !== campaignGroup)];
  }, [campaignGroup]);

  const handleCardClick = (id: SectorGroupId) => {
    gtmEvent("sector_card_click", { group: id, page: PAGE });
    onSelectGroup(id);
    setActiveGroup((prev) => (prev === id ? null : id));
  };

  const active = activeGroup ? SECTOR_GROUPS.find((g) => g.id === activeGroup) : null;
  const guidance = activeGroup ? SECTOR_GROUP_GUIDANCE[activeGroup] : null;

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {orderedGroups.map((group) => {
          const isCampaignMatch = group.id === campaignGroup;
          const isActive = group.id === activeGroup;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => handleCardClick(group.id)}
              aria-pressed={isActive}
              className="text-left rounded-2xl p-6 bg-white transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: `1.5px solid ${isActive ? TEAL : "#E2E8EF"}`, outlineColor: NAVY, boxShadow: isActive ? `0 0 0 3px ${TEAL}22` : "none" }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[12px] font-black" style={{ color: "rgba(2,19,45,0.25)" }}>
                  {group.num}
                </span>
                {isCampaignMatch && (
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full" style={{ background: `${TEAL}1A`, color: "#0E7C82" }}>
                    Tu sector
                  </span>
                )}
              </div>
              <h3 className="text-[16px] font-bold mb-3" style={{ color: NAVY }}>
                {group.titulo}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {group.subcategorias.map((sub) => (
                  <span key={sub} className="text-[11.5px] px-2 py-1 rounded-full" style={{ background: GRAY_LIGHT, color: TEXT_MUTED }}>
                    {sub}
                  </span>
                ))}
              </div>
              {group.microcopy && (
                <p className="text-[12px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                  {group.microcopy}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {active && guidance && (
        <div className="max-w-2xl mx-auto rounded-2xl p-6 mb-8 animate-fade-in-up" style={{ background: WHITE, border: `1px solid ${TEAL}55` }}>
          <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0E7C82" }}>
            {active.titulo}
          </p>
          <p className="text-[14px] leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
            {guidance.texto}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {guidance.tags.map((tag) => (
              <span key={tag} className="text-[12px] font-semibold px-2.5 py-1 rounded-full" style={{ background: `${TEAL}14`, color: "#0E7C82" }}>
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              gtmEvent("cta_review_process", { location: "actividad_contemplada", group: activeGroup, page: PAGE });
              scrollToId("autoevaluacion");
            }}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: TEAL, color: NAVY, outlineColor: TEAL }}
          >
            Revisar estas capas →
          </button>
        </div>
      )}

      <div className="text-center">
        <SourceLink
          href={SAT_ACTIVIDADES_URL}
          kind="sat"
          label="Consultar clasificación oficial del SAT"
          context="actividad_contemplada"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: NAVY, border: "1px solid #E2E8EF" }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 03 — Fila editorial de "Qué cambió" (sin caja individual)
 * Primera lectura: número, etiqueta, título, línea JAAK. "Ver detalle +"
 * revela la explicación regulatoria completa (texto, disclaimer, microcopy).
 * ───────────────────────────────────────────────────────────────────────── */
function EnfoqueRow({ num, card }: { num: string; card: (typeof ENFOQUE_CARDS)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-6" style={{ borderBottom: "1px solid #E2E8EF" }}>
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-[12px] font-black flex-shrink-0" style={{ color: "rgba(2,19,45,0.25)" }}>
          {num}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "#0E7C82" }}>
          {card.etiqueta}
        </span>
      </div>
      <h3 className="text-[17px] font-bold mb-2 pl-7" style={{ color: NAVY }}>
        {card.titulo}
      </h3>
      <p className="text-[13.5px] font-semibold mb-3 pl-7" style={{ color: NAVY }}>
        {card.jaakLabel || "JAAK"} → {card.jaakApoya.join(" + ")}
      </p>

      {expanded && (
        <div className="pl-7 mb-3 animate-fade-in-up">
          <p className="text-[13px] leading-relaxed mb-2" style={{ color: TEXT_MUTED }}>
            {card.texto}
          </p>
          {card.disclaimer && (
            <p className="text-[11.5px] leading-relaxed italic mb-2" style={{ color: TEXT_MUTED }}>
              {card.disclaimer}
            </p>
          )}
          {card.microcopy && (
            <p className="text-[11.5px] leading-relaxed mb-2" style={{ color: TEXT_MUTED }}>
              {card.microcopy}
            </p>
          )}
        </div>
      )}

      <div className="pl-7 flex items-center gap-4">
        <SourceLink
          href={DOF_URL}
          kind="dof"
          label={card.fuenteLabel}
          context={`enfoque_${card.etiqueta}`}
          className="text-[12px] font-semibold"
          style={{ color: "#0E7C82" }}
        />
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-[12px] font-semibold flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: TEXT_MUTED }}
        >
          {expanded ? "Ver menos −" : "Ver detalle +"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 06 — Checklist inteligente
 * ───────────────────────────────────────────────────────────────────────── */
function SmartChecklist({
  checked,
  onToggle,
}: {
  checked: boolean[];
  onToggle: (index: number) => void;
}) {
  const activeCapas = useMemo(() => {
    const set = new Set<Capa>();
    CHECKLIST_ITEMS.forEach((item, i) => {
      if (checked[i]) set.add(item.capa);
    });
    return CAPA_ORDER.filter((c) => set.has(c));
  }, [checked]);

  const touched = checked.some(Boolean);

  const handleViewSolutions = () => {
    gtmEvent("cta_after_checklist", { capas: activeCapas, page: PAGE });
    scrollToId("que-automatiza-jaak");
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {CHECKLIST_ITEMS.map((item, i) => {
          const isChecked = checked[i];
          return (
            <button
              key={item.text}
              type="button"
              onClick={() => onToggle(i)}
              aria-pressed={isChecked}
              className="flex items-start gap-3 text-left rounded-xl p-4 bg-white transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: `1px solid ${isChecked ? TEAL : "#E2E8EF"}`, outlineColor: TEAL }}
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors"
                style={{ background: isChecked ? TEAL : "transparent", border: `1.5px solid ${isChecked ? TEAL : "#CBD5E1"}`, color: NAVY }}
                aria-hidden="true"
              >
                {isChecked && <CheckIcon />}
              </span>
              <span className="text-[14.5px] leading-relaxed" style={{ color: NAVY }}>
                {item.text}
              </span>
            </button>
          );
        })}
      </div>

      {touched && (
        <div className="max-w-sm mx-auto rounded-2xl p-6 sm:p-8 mb-8 animate-fade-in-up" style={{ background: OFF_WHITE, border: `1px solid ${TEAL}55` }}>
          <p className="text-[11px] font-bold uppercase tracking-wide mb-4" style={{ color: TEXT_MUTED }}>
            Tu revisión
          </p>
          <div className="mb-6">
            {CAPA_ORDER.map((capa) => {
              const active = activeCapas.includes(capa);
              return (
                <div key={capa} className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid #E2E8EF" }}>
                  <span className="text-[13.5px] font-bold uppercase tracking-wide" style={{ color: active ? NAVY : TEXT_MUTED }}>
                    {CAPA_INFO[capa].label}
                  </span>
                  <span className="text-[16px] font-black" style={{ color: active ? TEAL : "#CBD5E1" }} aria-hidden="true">
                    {active ? "✓" : "—"}
                  </span>
                  <span className="sr-only">{active ? "sí" : "no"}</span>
                </div>
              );
            })}
          </div>
          <p className="uppercase font-black text-xl mb-2" style={{ color: NAVY }}>
            {activeCapas.length} {activeCapas.length === 1 ? "capa que puedes revisar" : "capas que puedes revisar"}
          </p>
          <p className="text-[11.5px] leading-relaxed" style={{ color: TEXT_MUTED }}>
            Este ejercicio es orientativo y no constituye una determinación sobre el cumplimiento de tu organización.
          </p>
        </div>
      )}

      {touched && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            type="button"
            onClick={handleViewSolutions}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: NAVY, outlineColor: NAVY }}
          >
            Ver soluciones JAAK
          </button>
          <a
            href={SCHEDULE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("cta_agendar_demo", { location: "checklist_result", page: PAGE })}
            className="text-[13.5px] font-semibold transition-colors"
            style={{ color: TEXT_MUTED }}
          >
            Hablar con un especialista →
          </a>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 08 — Aplicación por industria
 * ───────────────────────────────────────────────────────────────────────── */
function IndustryGroups({
  selectedGroup,
  onSelectGroup,
  campaignGroup,
  campaignCtaLabel,
}: {
  selectedGroup: SectorGroupId;
  onSelectGroup: (id: SectorGroupId) => void;
  campaignGroup: SectorGroupId | null;
  campaignCtaLabel: string | null;
}) {
  const detail = INDUSTRY_DETAILS[selectedGroup];
  const isCampaignMatch = selectedGroup === campaignGroup;

  const handleCtaClick = () => {
    gtmEvent("cta_review_process", { location: "aplicacion_industria", group: selectedGroup, page: PAGE });
    scrollToId("autoevaluacion");
  };

  return (
    <ImpressionTracker eventName="product_mapping_view" payload={{ page: PAGE }}>
      <div
        className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl justify-center"
        style={{ background: WHITE, border: "1px solid #E2E8EF" }}
        role="tablist"
        aria-label="Seleccionar grupo sectorial"
      >
        {SECTOR_GROUPS.map((group) => {
          const isActive = group.id === selectedGroup;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => {
                onSelectGroup(group.id);
                gtmEvent("sector_selected", { group: group.id, source: "manual_click", page: PAGE });
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`industry-panel-${group.id}`}
              id={`industry-tab-${group.id}`}
              className="px-3.5 py-2.5 rounded-xl text-[12.5px] sm:text-[13px] font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: isActive ? NAVY : "transparent", color: isActive ? WHITE : TEXT_MUTED, outlineColor: NAVY }}
            >
              {group.titulo}
            </button>
          );
        })}
      </div>

      <div
        key={selectedGroup}
        id={`industry-panel-${selectedGroup}`}
        role="tabpanel"
        aria-labelledby={`industry-tab-${selectedGroup}`}
        className="max-w-4xl mx-auto rounded-2xl p-8 animate-fade-in-up"
        style={{ background: WHITE, border: "1px solid #E2E8EF" }}
      >
        <h3 className="text-xl sm:text-2xl font-black mb-6" style={{ color: NAVY }}>
          {SECTOR_GROUP_LABEL[selectedGroup]}
        </h3>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {detail.blocks.map((block) => (
            <div key={block.titulo || "default"} className="rounded-xl p-5" style={{ background: OFF_WHITE, border: "1px solid #E2E8EF" }}>
              {block.titulo && (
                <p className="text-[12px] font-bold uppercase tracking-wide mb-3" style={{ color: "#0E7C82" }}>
                  {block.titulo}
                </p>
              )}
              <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: TEXT_MUTED }}>
                Necesidades operativas
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {block.necesidades.map((n) => (
                  <span key={n} className="text-[12px] px-2.5 py-1 rounded-full" style={{ background: GRAY_LIGHT, color: NAVY }}>
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: TEXT_MUTED }}>
                Capacidades JAAK relevantes
              </p>
              <div className="flex flex-wrap gap-1.5">
                {block.jaak.map((n) => (
                  <span key={n} className="text-[12px] px-2.5 py-1 rounded-full" style={{ background: `${TEAL}14`, color: "#0E7C82" }}>
                    {n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] mb-6">
          <SourceLink
            href={detail.fuente.url}
            kind={detail.fuente.kind}
            label={`Fuente sectorial: ${detail.fuente.label}`}
            context={`industria_${selectedGroup}`}
            className="font-semibold underline underline-offset-2"
            style={{ color: NAVY }}
          />
        </p>

        <button
          type="button"
          onClick={handleCtaClick}
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ background: TEAL, color: NAVY, outlineColor: TEAL }}
        >
          {isCampaignMatch && campaignCtaLabel ? campaignCtaLabel : "Identificar qué puedo automatizar"}
        </button>
      </div>
    </ImpressionTracker>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Formulario final (sección 10)
 * ───────────────────────────────────────────────────────────────────────── */
function ContactFormMini({
  defaultSector,
  needFlags,
}: {
  defaultSector: string;
  needFlags: { need_kyc: boolean; need_aml: boolean; need_signature: boolean; need_evidence: boolean };
}) {
  const [formData, setFormData] = useState({ name: "", empresa: "", email: "", sector: defaultSector });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedRef = useRef(false);

  useEffect(() => {
    if (defaultSector) setFormData((prev) => (prev.sector ? prev : { ...prev, sector: defaultSector }));
  }, [defaultSector]);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    gtmEvent("form_started", { page: PAGE, form: "lfpiorpi_2027_contacto" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const needsSummary = `Necesidades: KYC=${needFlags.need_kyc}, AML=${needFlags.need_aml}, Firma=${needFlags.need_signature}, Evidencia=${needFlags.need_evidence}`;

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          empresa: formData.empresa,
          email: formData.email,
          mensaje: `Sector: ${formData.sector || "No especificado"} | ${needsSummary}`,
          source: "landing-lfpiorpi-2027",
          sector: formData.sector,
          ...needFlags,
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        gtmEvent("form_completed", { page: PAGE, form: "lfpiorpi_2027_contacto", sector: formData.sector, ...needFlags });
        setFormData({ name: "", empresa: "", email: "", sector: "" });
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

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${TEAL}55` }}>
        <p className="text-white font-bold text-lg mb-2">Gracias.</p>
        <p className="text-white/70 text-[15px]">Un especialista de JAAK revisará contigo las capacidades que pueden integrarse a tu proceso.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={markStarted} className="space-y-4 rounded-2xl p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lfp-name" className="block text-[13px] font-medium text-white/80 mb-1.5">
            Nombre *
          </label>
          <input
            id="lfp-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/35 outline-none"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="lfp-empresa" className="block text-[13px] font-medium text-white/80 mb-1.5">
            Empresa *
          </label>
          <input
            id="lfp-empresa"
            type="text"
            required
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/35 outline-none"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lfp-email" className="block text-[13px] font-medium text-white/80 mb-1.5">
          Correo corporativo *
        </label>
        <input
          id="lfp-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/35 outline-none"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
          placeholder="tu@empresa.com"
        />
      </div>

      <div>
        <label htmlFor="lfp-sector" className="block text-[13px] font-medium text-white/80 mb-1.5">
          ¿En qué sector operas? *
        </label>
        <select
          id="lfp-sector"
          required
          value={formData.sector}
          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-white outline-none"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <option value="" disabled style={{ color: NAVY }}>
            Selecciona tu sector
          </option>
          {SECTOR_SELECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt} style={{ color: NAVY }}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl px-6 py-4 text-[15px] font-bold transition-transform hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ background: TEAL, color: NAVY }}
      >
        {status === "loading" ? "Enviando..." : "Revisar mi operación"}
      </button>

      {status === "error" && (
        <div className="p-3 rounded-lg text-center text-[13.5px]" style={{ background: "rgba(239,68,68,0.15)", color: "#FCA5A5" }}>
          {errorMessage}
        </div>
      )}

      <p className="text-[12px] text-center text-white/40">
        Al enviar aceptas nuestra{" "}
        <Link href="/privacidad" className="underline" style={{ color: TEAL }}>
          Política de Privacidad
        </Link>
        .
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 10 — Tres rutas de conversión + una cuarta que revela el
 * formulario. El formulario deja de ser protagonista absoluto: es una
 * opción más entre agendar, ver demo o escribir por WhatsApp.
 * ───────────────────────────────────────────────────────────────────────── */
function FinalCtaPaths({
  defaultSector,
  needFlags,
  whatsappMessage,
}: {
  defaultSector: string;
  needFlags: { need_kyc: boolean; need_aml: boolean; need_signature: boolean; need_evidence: boolean };
  whatsappMessage: string;
}) {
  const [showForm, setShowForm] = useState(false);

  const paths: Array<{
    label: string;
    desc: string;
    action: "link" | "scroll" | "form";
    href?: string;
    target?: string;
    event: string;
  }> = [
    { label: "Agendar una demo", desc: "Revisa tu caso con un especialista.", action: "link", href: SCHEDULE_DEMO_URL, event: "cta_agendar_demo" },
    { label: "Ver una demo de producto", desc: "Conoce KYC y Firma Digital en operación.", action: "scroll", target: "ver-en-accion", event: "cta_ver_demo" },
    { label: "Escríbenos por WhatsApp", desc: "Resuelve una duda directamente con nuestro equipo.", action: "link", href: buildWhatsAppUrl(whatsappMessage), event: "cta_whatsapp_click" },
    { label: "Quiero que me contacten", desc: "Comparte tus datos y te buscamos nosotros.", action: "form", event: "cta_contact_form_open" },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
        {paths.map((p) => {
          const isForm = p.action === "form";
          const isActive = isForm && showForm;
          const className =
            "text-left rounded-xl p-5 transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
          const style: CSSProperties = {
            background: isActive ? TEAL : "rgba(255,255,255,0.06)",
            border: `1px solid ${isActive ? TEAL : "rgba(255,255,255,0.15)"}`,
          };
          const content = (
            <>
              <p className="font-bold text-[14.5px] mb-1" style={{ color: isActive ? NAVY : WHITE }}>
                {p.label}
              </p>
              <p className="text-[12.5px] leading-relaxed" style={{ color: isActive ? "rgba(2,19,45,0.7)" : "rgba(255,255,255,0.55)" }}>
                {p.desc}
              </p>
            </>
          );

          if (p.action === "link") {
            return (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent(p.event, { location: "cta_final", page: PAGE })}
                className={className}
                style={style}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                gtmEvent(p.event, { location: "cta_final", page: PAGE });
                if (p.action === "scroll" && p.target) scrollToId(p.target);
                if (isForm) setShowForm((v) => !v);
              }}
              aria-pressed={isForm ? showForm : undefined}
              className={className}
              style={style}
            >
              {content}
            </button>
          );
        })}
      </div>

      {showForm && (
        <div className="max-w-lg mx-auto animate-fade-in-up">
          <ContactFormMini defaultSector={defaultSector} needFlags={needFlags} />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Barra sticky discreta en mobile, tras el primer scroll
 * ───────────────────────────────────────────────────────────────────────── */
function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3" style={{ background: "rgba(2,19,45,0.95)", backdropFilter: "blur(8px)", borderTop: `1px solid ${TEAL}33` }}>
      <button
        type="button"
        onClick={() => {
          gtmEvent("cta_review_process", { location: "mobile_sticky", page: PAGE });
          scrollToId("autoevaluacion");
        }}
        className="w-full rounded-xl px-5 py-3 text-[14px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ background: TEAL, color: NAVY }}
      >
        Revisar mi operación
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Botón flotante discreto de WhatsApp — blanco/navy, no el globo verde
 * tradicional. Encima de la barra sticky en mobile, esquina inferior
 * derecha en desktop.
 * ───────────────────────────────────────────────────────────────────────── */
function WhatsAppFloatingButton({ message }: { message: string }) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => gtmEvent("cta_whatsapp_click", { location: "floating_button", page: PAGE })}
      aria-label="¿Tienes una duda? Escríbenos por WhatsApp (abre en una pestaña nueva)"
      className="fixed z-40 bottom-24 right-4 lg:bottom-6 lg:right-6 inline-flex items-center gap-2 rounded-full px-4 py-3 text-[13px] font-bold shadow-lg transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ background: WHITE, color: NAVY, border: "1px solid #E2E8EF" }}
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
      </svg>
      <span className="hidden sm:inline">¿Tienes una duda?</span> WhatsApp
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Página principal
 * ───────────────────────────────────────────────────────────────────────── */
export default function Lfpiorpi2027LandingClient() {
  const [selectedGroup, setSelectedGroup] = useState<SectorGroupId>("inmobiliario");
  const [manualSector, setManualSector] = useState<SectorGroupId | null>(null);
  const [campaignParam, setCampaignParam] = useState<string | null>(null);
  const [checklistChecked, setChecklistChecked] = useState<boolean[]>(() => Array(CHECKLIST_ITEMS.length).fill(false));

  const handleGroupSelect = (id: SectorGroupId) => {
    setSelectedGroup(id);
    setManualSector(id);
  };

  useEffect(() => {
    gtmEvent("landing_view", { page: PAGE });
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get("sector");
      const match = raw ? CAMPAIGN_PARAM_MAP[raw] : undefined;
      if (raw && match) {
        setCampaignParam(raw);
        setSelectedGroup(match.group);
        gtmEvent("sector_auto_selected", { sector: raw, group: match.group, page: PAGE });
      }
    } catch {
      // sessionStorage/URL inaccesibles: se pierde la personalización, no la página.
    }
  }, []);

  const campaignInfo = campaignParam ? CAMPAIGN_PARAM_MAP[campaignParam] : null;
  const campaignGroup = campaignInfo?.group ?? null;
  const defaultFormSector = campaignInfo?.formOption ?? (manualSector ? GROUP_TO_FORM_OPTION[manualSector] ?? "" : "");

  // Mensaje de WhatsApp dinámico: si ya identificamos un sector (por campaña
  // o por selección manual), lo incluye para que el equipo tenga contexto
  // desde el primer mensaje.
  const activeSectorGroup = campaignGroup ?? manualSector;
  const whatsappMessage = activeSectorGroup
    ? `Hola, vi la información sobre LFPIORPI para el sector ${SECTOR_GROUP_LABEL[activeSectorGroup]} y quiero revisar qué podemos automatizar.`
    : "Hola, vi la información sobre las nuevas Reglas LFPIORPI 2026–2027 y quiero revisar cómo JAAK puede ayudarme.";

  const needFlags = useMemo(() => {
    const active = new Set<Capa>();
    CHECKLIST_ITEMS.forEach((item, i) => {
      if (checklistChecked[i]) active.add(item.capa);
    });
    return {
      need_kyc: active.has("identidad"),
      need_aml: active.has("riesgo"),
      need_signature: active.has("formalizacion"),
      need_evidence: active.has("evidencia"),
    };
  }, [checklistChecked]);

  const resultGeneratedRef = useRef(false);
  const handleChecklistToggle = (index: number) => {
    setChecklistChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      const item = CHECKLIST_ITEMS[index];
      gtmEvent("checklist_interaction", { item_index: index, checked: next[index], capa: item.capa, page: PAGE });
      if (next[index]) {
        gtmEvent(CAPA_INFO[item.capa].needEvent, { page: PAGE });
      }
      if (!resultGeneratedRef.current && next.some(Boolean)) {
        resultGeneratedRef.current = true;
        gtmEvent("checklist_result_generated", { page: PAGE });
      }
      return next;
    });
  };

  return (
    <>
      <CampaignHeader />
      <MobileStickyCta />
      <WhatsAppFloatingButton message={whatsappMessage} />
      <main>
        {/* ── 01. Hero — 100% UI nativa, sin fotografía ──────────────────── */}
        <section
          className="relative overflow-hidden py-28 lg:py-36"
          style={{ background: `linear-gradient(155deg, ${NAVY} 0%, ${NAVY_SOFT} 70%, #122544 100%)` }}
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-[130px]"
            style={{ background: "rgba(30,202,211,0.10)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full blur-[130px]"
            style={{ background: "rgba(30,202,211,0.07)" }}
            aria-hidden="true"
          />

          {/* Red de nodos ambiental — vectorial, nunca se pixela, identidad JAAK */}
          <svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g stroke={TEAL} strokeOpacity="0.22" strokeWidth="1">
              <line x1="50" y1="80" x2="170" y2="145" />
              <line x1="170" y1="145" x2="130" y2="255" />
              <line x1="170" y1="145" x2="290" y2="110" />
              <line x1="130" y1="255" x2="70" y2="350" />
              <line x1="1150" y1="610" x2="1030" y2="545" />
              <line x1="1030" y1="545" x2="1065" y2="435" />
              <line x1="1030" y1="545" x2="905" y2="585" />
              <line x1="1065" y1="435" x2="1125" y2="335" />
            </g>
            <g fill={TEAL} fillOpacity="0.55">
              <circle cx="50" cy="80" r="3" />
              <circle cx="170" cy="145" r="4" />
              <circle cx="290" cy="110" r="3" />
              <circle cx="130" cy="255" r="3" />
              <circle cx="70" cy="350" r="3" />
              <circle cx="1150" cy="610" r="3" />
              <circle cx="1030" cy="545" r="4" />
              <circle cx="905" cy="585" r="3" />
              <circle cx="1065" cy="435" r="3" />
              <circle cx="1125" cy="335" r="3" />
            </g>
          </svg>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow dark>Nuevas Reglas LFPIORPI · 2026–2027</SectionEyebrow>

            <h1 id="hero-heading" className="uppercase text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
              <span className="block">El cumplimiento evoluciona.</span>
              <span
                className="block mt-2"
                style={{ backgroundImage: `linear-gradient(90deg, ${TEAL}, #7FE8EC)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                ¿Tu operación está preparada?
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
              Las nuevas disposiciones fortalecen el enfoque basado en riesgo, el conocimiento del Cliente o
              Usuario y los mecanismos automatizados para quienes realizan Actividades Vulnerables.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-4 text-[12.5px] font-semibold uppercase tracking-wide text-white/55">
              <span>KYC Biométrico</span>
              <span aria-hidden="true" style={{ color: TEAL }}>·</span>
              <span>AML Screening</span>
              <span aria-hidden="true" style={{ color: TEAL }}>·</span>
              <span>Firma Digital</span>
              <span aria-hidden="true" style={{ color: TEAL }}>·</span>
              <span>Evidencia</span>
            </div>

            <a
              href={SCHEDULE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtmEvent("cta_agendar_demo", { location: "hero", page: PAGE })}
              className="inline-block text-[13px] font-semibold mb-10 transition-colors"
              style={{ color: TEAL }}
            >
              ¿Ya sabes qué necesitas? Agenda una demo →
            </a>

            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-4">
              <button
                type="button"
                onClick={() => {
                  gtmEvent("cta_review_process", { location: "hero", page: PAGE });
                  scrollToId("mi-actividad");
                }}
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: TEAL, color: NAVY }}
              >
                Revisar qué cambió
              </button>
              <button
                type="button"
                onClick={() => {
                  gtmEvent("cta_ver_demo", { location: "hero", page: PAGE });
                  scrollToId("ver-en-accion");
                }}
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Ver JAAK en acción →
              </button>
            </div>

            <SourceLink
              href={DOF_URL}
              kind="dof"
              label="Consultar publicación oficial"
              context="hero"
              className="inline-flex items-center justify-center text-[13px] font-semibold text-white/55 hover:text-white/85 transition-colors mb-3"
            />

            <p className="text-[12.5px] text-white/40">DOF · Acuerdo 115/2026 · 7 de agosto de 2026</p>
          </div>
        </section>

        {/* ── 02. ¿Tu actividad está contemplada? ──────────────────────── */}
        <section id="mi-actividad" className="py-20 scroll-mt-20" style={{ background: OFF_WHITE }} aria-labelledby="actividad-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <SectionEyebrow>Actividades vulnerables</SectionEyebrow>
              <h2 id="actividad-heading" className="uppercase text-3xl md:text-4xl font-black mb-5 leading-snug" style={{ color: NAVY }}>
                ¿Estos cambios pueden aplicar a tu sector?
              </h2>
              <p className="text-[16px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                La LFPIORPI contempla distintas actividades económicas, profesionales y de servicios. Identifica tu
                sector y revisa qué capas de tu operación podrían requerir atención.
              </p>
            </div>

            <ActivityGroups campaignGroup={campaignGroup} onSelectGroup={handleGroupSelect} />
          </div>
        </section>

        {/* ── 03. Qué cambió ────────────────────────────────────────────── */}
        <section id="que-cambia" className="py-20 bg-white scroll-mt-20" aria-labelledby="enfoque-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <SectionEyebrow>Nuevo enfoque</SectionEyebrow>
              <h2 id="enfoque-heading" className="uppercase text-3xl md:text-4xl font-black mb-5 leading-snug" style={{ color: NAVY }}>
                De identificar al cliente a conocer y gestionar su riesgo
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10">
              {ENFOQUE_CARDS.map((card, i) => (
                <EnfoqueRow key={card.titulo} num={String(i + 1).padStart(2, "0")} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA comercial 1 — sin formulario, tráfico apenas a 1/3 de página ── */}
        <section className="py-14" style={{ background: NAVY }} aria-label="¿Necesitas automatizar estas validaciones?">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="uppercase text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">
              ¿Necesitas automatizar estas validaciones?
            </h2>
            <p className="text-[12.5px] font-semibold uppercase tracking-wide text-white/45 mb-8">
              KYC biométrico · PEP y listas · Firma Digital · Evidencia
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => {
                  gtmEvent("cta_ver_demo", { location: "post_que_cambio", page: PAGE });
                  scrollToId("ver-en-accion");
                }}
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: TEAL, color: NAVY }}
              >
                Ver JAAK en acción
              </button>
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("cta_agendar_demo", { location: "post_que_cambio", page: PAGE })}
                className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors"
              >
                Hablar con un especialista →
              </a>
            </div>
          </div>
        </section>

        {/* ── KYC continuo — pausa editorial, sin cards ni imagen ────────── */}
        <section id="conocimiento-continuo" className="py-24" style={{ background: NAVY }} aria-labelledby="kyc-continuo-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow dark>Conocimiento continuo</SectionEyebrow>
            <h2 id="kyc-continuo-heading" className="uppercase text-4xl md:text-5xl font-black text-white mb-12 leading-tight max-w-2xl mx-auto">
              El KYC no termina cuando el cliente entra
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 mb-10">
              {KYC_FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-[13px] sm:text-[15px] font-black uppercase tracking-wide whitespace-nowrap text-white">
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>{String(i + 1).padStart(2, "0")}</span> {step}
                  </span>
                  {i < KYC_FLOW.length - 1 && <span aria-hidden="true" className="w-6 sm:w-10 h-px flex-shrink-0" style={{ background: TEAL }} />}
                </div>
              ))}
            </div>

            <SourceLink
              href={DOF_URL}
              kind="dof"
              label="Fuente: DOF · Arts. 23 Ter a 23 Ter 5 y Art. 41"
              context="kyc_continuo"
              className="text-[13px] font-semibold"
              style={{ color: "#7FE8EC" }}
            />
          </div>
        </section>

        {/* ── 04. Fechas clave / Timeline ───────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY }} aria-labelledby="timeline-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow dark>Fechas clave</SectionEyebrow>
              <h2 id="timeline-heading" className="uppercase text-3xl md:text-4xl font-black text-white mb-5">
                2027 no empieza en 2027
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-10">
              {TIMELINE_PRIMARY.map((hito) => (
                <ImpressionTracker
                  key={hito.id}
                  eventName="timeline_interaction"
                  payload={{ milestone: hito.id, page: PAGE }}
                  className="text-left pt-5"
                  style={{ borderTop: `2px solid ${TEAL}` }}
                >
                  <p className="text-2xl font-black leading-none" style={{ color: TEAL }}>
                    {hito.dateTop}
                  </p>
                  <p className="text-xl font-black text-white mb-3">{hito.dateBottom}</p>
                  <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{hito.titulo}</h3>
                  <p className="text-[13px] text-white/55 leading-relaxed mb-4">{hito.texto}</p>
                  <SourceLink
                    href={DOF_URL}
                    kind="dof"
                    label={hito.fuenteLabel}
                    context={`timeline_${hito.id}`}
                    className="text-[11.5px] font-semibold"
                    style={{ color: "#7FE8EC" }}
                  />
                </ImpressionTracker>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto mb-10">
              {TIMELINE_SECONDARY.map((hito) => (
                <ImpressionTracker
                  key={hito.id}
                  eventName="timeline_interaction"
                  payload={{ milestone: hito.id, page: PAGE }}
                  className="text-left pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <p className="text-lg font-black mb-2" style={{ color: "rgba(30,202,211,0.6)" }}>
                    {hito.dateTop}
                  </p>
                  <h3 className="text-[14px] font-bold text-white mb-1.5 leading-snug">{hito.titulo}</h3>
                  <p className="text-[12.5px] text-white/50 leading-relaxed mb-3">{hito.texto}</p>
                  <SourceLink
                    href={DOF_URL}
                    kind="dof"
                    label={hito.fuenteLabel}
                    context={`timeline_${hito.id}`}
                    className="text-[11px] font-semibold"
                    style={{ color: "#7FE8EC" }}
                  />
                </ImpressionTracker>
              ))}
            </div>

            <p className="text-[13px] text-white/45 text-center max-w-2xl mx-auto leading-relaxed">
              La adaptación puede requerir cambios tecnológicos, operativos y documentales.
            </p>
          </div>
        </section>

        {/* ── CTA comercial 2 — el usuario ya sabe qué cambió, si le aplica y cuándo ── */}
        <section className="py-16" style={{ background: NAVY_SOFT }} aria-label="¿Ya estás preparando tu operación?">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="uppercase text-2xl sm:text-3xl font-black text-white mb-3 leading-snug">
              ¿Ya estás preparando tu operación?
            </h2>
            <p className="text-[14px] text-white/60 mb-8 leading-relaxed">
              Revisa en una sesión de 20 minutos cómo integrar identidad, screening, firma y evidencia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("cta_agendar_demo", { location: "post_timeline", page: PAGE })}
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: TEAL, color: NAVY }}
              >
                Agendar una demo
              </a>
              <a
                href={buildWhatsAppUrl(
                  "Hola, vi la información sobre las nuevas Reglas LFPIORPI 2026–2027 y quiero revisar cómo JAAK puede ayudarme."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("cta_whatsapp_click", { location: "post_timeline", page: PAGE })}
                className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors"
              >
                Prefiero escribir por WhatsApp →
              </a>
            </div>
          </div>
        </section>

        {/* ── 05. Qué puede automatizar JAAK ────────────────────────────── */}
        <section id="que-automatiza-jaak" className="py-20 scroll-mt-20" style={{ background: OFF_WHITE }} aria-labelledby="jaak-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Infraestructura de confianza</SectionEyebrow>
              <h2 id="jaak-heading" className="uppercase text-4xl md:text-5xl font-black mb-5" style={{ color: NAVY }}>
                De la identidad a la evidencia
              </h2>
              <p className="text-[16px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                Automatiza capas de identidad, screening, firma y trazabilidad dentro de tu proceso.
              </p>
            </div>

            <ProcessFlow steps={JAAK_FLOW} background={OFF_WHITE} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {JAAK_MODULES.map((mod) => (
                <div key={mod.num} className="flex flex-col">
                  <div className="text-2xl font-black mb-2" style={{ color: "rgba(2,19,45,0.2)" }}>
                    {mod.num}
                  </div>
                  <h3 className="text-[14.5px] font-bold mb-2" style={{ color: NAVY }}>
                    {mod.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed flex-1 mb-3" style={{ color: TEXT_MUTED }}>
                    {mod.texto}
                  </p>
                  {mod.href && (
                    <Link
                      href={mod.href}
                      onClick={() => mod.eventName && gtmEvent(mod.eventName, { page: PAGE, module: mod.titulo })}
                      className="inline-flex items-center gap-1 text-[12.5px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "#0E7C82" }}
                    >
                      {mod.ctaLabel} →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[13px] leading-relaxed max-w-3xl mx-auto text-center p-5 rounded-xl" style={{ color: TEXT_MUTED, background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
              JAAK automatiza componentes tecnológicos dentro de procesos de cumplimiento. La determinación de
              obligaciones y controles aplicables corresponde a cada organización.
            </p>
          </div>
        </section>

        {/* ── 06. Autoevaluación / checklist inteligente ───────────────── */}
        <section id="autoevaluacion" className="py-20 bg-white scroll-mt-20" aria-labelledby="autoeval-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionEyebrow>Evalúa tu operación</SectionEyebrow>
              <h2 id="autoeval-heading" className="uppercase text-3xl md:text-4xl font-black mb-3" style={{ color: NAVY }}>
                ¿Qué parte de tu proceso sigue siendo manual?
              </h2>
              <p className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: TEXT_MUTED }}>
                {CHECKLIST_ITEMS.length} preguntas · menos de 60 segundos
              </p>
            </div>
            <SmartChecklist checked={checklistChecked} onToggle={handleChecklistToggle} />
          </div>
        </section>

        {/* ── 07. Mecanismos automatizados (Art. 41) ───────────────────── */}
        <section id="mecanismos-automatizados" className="py-20 scroll-mt-20" style={{ background: NAVY }} aria-labelledby="automatizacion-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                Lo que contempla la regulación
              </span>
            </div>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="automatizacion-heading" className="uppercase text-3xl md:text-4xl font-black text-white mb-5">
                Del expediente al monitoreo
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed">
                Las nuevas Reglas contemplan mecanismos automatizados capaces de apoyar distintos elementos del
                proceso de cumplimiento.
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-10 mb-10">
              {AUTOMATION_NODES.map((node, i) => (
                <div key={node.titulo} className="flex items-start gap-4 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-[12px] font-black flex-shrink-0" style={{ color: TEAL }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-white mb-1">{node.titulo}</h3>
                    <p className="text-[13px] text-white/55 leading-relaxed">{node.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Separación visual deliberada: esto NO es "JAAK cubre el Art. 41" */}
            <div className="max-w-2xl mx-auto rounded-2xl p-6 mb-8" style={{ background: "rgba(30,202,211,0.06)", border: `1px solid ${TEAL}33` }}>
              <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color: "#7FE8EC" }}>
                Dónde participa JAAK
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["KYC", "Screening", "Firma", "Evidencia"].map((cap) => (
                  <span key={cap} className="text-[12px] font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(30,202,211,0.14)", color: "#7FE8EC" }}>
                    {cap}
                  </span>
                ))}
              </div>
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Estos mecanismos son un requerimiento regulatorio, distinto de las{" "}
                <button
                  type="button"
                  onClick={() => scrollToId("que-automatiza-jaak")}
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  capacidades JAAK
                </button>{" "}
                descritas arriba: no implican que JAAK cubra actualmente todas las funciones previstas en el
                Artículo 41.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[13px] mb-5">
                <SourceLink href={DOF_URL} kind="dof" label="Fuente: DOF · Artículo 41" context="automatizacion" className="font-semibold" style={{ color: "#7FE8EC" }} />
              </p>
              <SourceLink
                href={DOF_URL}
                kind="dof"
                label="Consultar artículo en DOF"
                context="automatizacion_cta"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              />
            </div>
          </div>
        </section>

        {/* ── 08. Aplicación por industria ──────────────────────────────── */}
        <section id="aplicacion-industria" className="py-20 scroll-mt-20" style={{ background: OFF_WHITE }} aria-labelledby="sectores-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow>Aplicación por industria</SectionEyebrow>
              <h2 id="sectores-heading" className="uppercase text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                ¿Cómo se traduce en tu operación?
              </h2>
            </div>
            <IndustryGroups
              selectedGroup={selectedGroup}
              onSelectGroup={handleGroupSelect}
              campaignGroup={campaignGroup}
              campaignCtaLabel={campaignInfo?.ctaLabel ?? null}
            />
          </div>
        </section>

        {/* ── ¿Prefieres verlo en operación? — demos ya existentes en el sitio ── */}
        <section id="ver-en-accion" className="py-20 bg-white scroll-mt-20" aria-labelledby="demo-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionEyebrow>Producto en operación</SectionEyebrow>
              <h2 id="demo-heading" className="uppercase text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                ¿Prefieres verlo en operación?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: NAVY }}>
                  KYC Biométrico
                </h3>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                  Identidad · Documento · Biometría · Fuentes · Screening
                </p>
                <Link
                  href={KYC_DEMO_URL}
                  onClick={() => gtmEvent("cta_ver_demo", { product: "kyc", location: "ver_en_accion", page: PAGE })}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: "#0E7C82" }}
                >
                  Ver demo KYC →
                </Link>
              </div>
              <div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: NAVY }}>
                  Firma Digital
                </h3>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                  Identidad · Firma · NOM-151 · Evidencia
                </p>
                <Link
                  href={FIRMA_DEMO_URL}
                  onClick={() => gtmEvent("cta_ver_demo", { product: "firma", location: "ver_en_accion", page: PAGE })}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: "#0E7C82" }}
                >
                  Ver demo Firma →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09. Fuentes oficiales ─────────────────────────────────────── */}
        <section className="py-20" style={{ background: GRAY_LIGHT }} aria-labelledby="fuentes-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow>Fuentes oficiales</SectionEyebrow>
              <h2 id="fuentes-heading" className="uppercase text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Verifica directamente la regulación
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                La información presentada en esta página es un resumen ejecutivo y orientativo. Consulta siempre las
                disposiciones oficiales para conocer su texto completo, alcance, excepciones y aplicación
                específica.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FUENTES_OFICIALES.map((f) => (
                <div key={f.titulo} className="rounded-2xl p-6 bg-white flex flex-col" style={{ border: "1px solid #E2E8EF" }}>
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color: "#0E7C82" }}>
                    {f.eyebrow}
                  </p>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: NAVY }}>
                    {f.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{ color: TEXT_MUTED }}>
                    {f.descripcion}
                  </p>
                  <SourceLink href={f.url} kind={f.kind} label={f.ctaLabel} context="fuentes_oficiales" className="text-[13px] font-bold" style={{ color: NAVY }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. CTA final — tres rutas de conversión, no un formulario único ── */}
        <section id="hablemos" className="py-20 scroll-mt-20" style={{ background: NAVY }} aria-labelledby="cta-final-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow dark>Próximos hitos · 2026–2027</SectionEyebrow>
            <h2 id="cta-final-heading" className="uppercase text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.05]">
              Elige cómo quieres avanzar
            </h2>
            <p className="text-[15px] text-white/65 mb-12 leading-relaxed max-w-md mx-auto">
              Revisa qué capas de identidad, screening, firma y evidencia puedes integrar a tu operación.
            </p>

            <FinalCtaPaths defaultSector={defaultFormSector} needFlags={needFlags} whatsappMessage={whatsappMessage} />

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 mt-10 text-[13.5px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Conocer JAAK
            </Link>
          </div>
        </section>

        {/* ── Disclaimer final ──────────────────────────────────────────── */}
        <section className="py-10 bg-white" aria-label="Aviso legal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl p-5" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
              <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: TEXT_MUTED }}>
                Aviso
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                El contenido de esta página tiene fines informativos y no constituye asesoría jurídica ni una
                determinación sobre las obligaciones específicas aplicables a una organización. Para conocer el
                alcance de las disposiciones consulta las fuentes oficiales y, cuando corresponda, a tus asesores
                jurídicos o de cumplimiento.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
