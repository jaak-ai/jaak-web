"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";

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
    jaakApoya: ["KYC biométrico", "Validación documental", "Fuentes oficiales"],
  },
  {
    etiqueta: "Beneficiario Controlador",
    titulo: "Identificar quién ejerce el control",
    texto: "Procesos para identificar y documentar a la persona física que finalmente ejerce control cuando corresponda.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakApoya: ["KYC", "AML Screening", "Firma Digital", "Evidencia"],
    disclaimer: "JAAK no determina automáticamente al Beneficiario Controlador: apoya la identificación y documentación del proceso.",
  },
  {
    etiqueta: "Riesgo",
    titulo: "Clasificación del Cliente",
    texto: "Evaluación y clasificación de Clientes o Usuarios conforme a niveles de riesgo, con controles diferenciados según el resultado.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakLabel: "Señales que pueden integrarse:",
    jaakApoya: ["Identidad", "PEP", "Listas de riesgo", "Fuentes", "Geografía"],
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
    jaakLabel: "JAAK puede automatizar capas de:",
    jaakApoya: ["Identidad", "Screening", "Firma", "Evidencia"],
    microcopy: "Otros componentes, como perfil transaccional o modelos internos de riesgo, pueden integrarse dentro de la arquitectura de cumplimiento de cada organización.",
  },
  {
    etiqueta: "Evidencia",
    titulo: "Poder demostrar",
    texto: "Conservar información, históricos y evidencia que permita sustentar los procesos y controles realizados.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
    jaakApoya: ["Trazabilidad", "Registro de validaciones", "Firma", "Evidencia digital"],
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
 * Sección 05: Qué puede automatizar JAAK
 * ───────────────────────────────────────────────────────────────────────── */
const JAAK_MODULES: Array<{
  num: string;
  titulo: string;
  texto: string;
  href?: string;
  eventName?: string;
}> = [
  { num: "01", titulo: "KYC Biométrico", texto: "Documento + prueba de vida pasiva + comparación facial.", href: "/plataforma/verificacion-identidad", eventName: "product_kyc_click" },
  { num: "02", titulo: "Fuentes Oficiales", texto: "Validaciones relacionadas con identidad y documentos." },
  { num: "03", titulo: "AML Screening", texto: "PEP y listas de riesgo.", href: "/listas-de-riesgo-pld-aml", eventName: "product_aml_click" },
  { num: "04", titulo: "Firma Digital", texto: "Consentimientos, declaraciones y documentos.", href: "/plataforma/firma-electronica" },
  { num: "05", titulo: "Evidencia y Trazabilidad", texto: "Trazabilidad estructurada de las validaciones realizadas.", href: "/plataforma/gestion-evidencia" },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 06: Checklist inteligente
 * ───────────────────────────────────────────────────────────────────────── */
type Capa = "identidad" | "screening" | "firma" | "evidencia" | "riesgo";

const CAPA_ORDER: Capa[] = ["identidad", "screening", "firma", "evidencia", "riesgo"];

const CAPA_INFO: Record<Capa, { label: string; texto: string; producto: string; needEvent?: string }> = {
  identidad: { label: "Identidad", texto: "Esta capa puede automatizarse con JAAK KYC.", producto: "JAAK KYC", needEvent: "need_kyc_selected" },
  screening: { label: "Screening", texto: "Puedes integrar AML Screening dentro del onboarding.", producto: "AML Screening", needEvent: "need_aml_selected" },
  firma: { label: "Firma", texto: "JAAK puede digitalizar declaraciones y documentos.", producto: "Firma Digital JAAK", needEvent: "need_signature_selected" },
  evidencia: { label: "Evidencia", texto: "Puedes conservar trazabilidad de las validaciones realizadas.", producto: "JAAK Evidence", needEvent: "need_evidence_selected" },
  riesgo: {
    label: "Gestión de riesgo",
    texto: "Estas funciones deben integrarse a la arquitectura de cumplimiento de tu organización. JAAK puede aportar señales de identidad y screening.",
    producto: "Señales JAAK (KYC + Screening)",
  },
};

// Nota: el prompt no incluye una pregunta que dispare la capa "firma" dentro
// de las 8 originales, aunque la lógica de resultados sí la contempla — se
// agrega esta novena pregunta para que ese resultado sea alcanzable.
const CHECKLIST_ITEMS: Array<{ text: string; capa: Capa }> = [
  { text: "¿Integras un expediente único por Cliente?", capa: "identidad" },
  { text: "¿Validas digitalmente la identidad?", capa: "identidad" },
  { text: "¿Identificas Beneficiario Controlador cuando corresponde?", capa: "identidad" },
  { text: "¿Consultas PEP y listas de riesgo?", capa: "screening" },
  { text: "¿Formalizas contratos o declaraciones con firma electrónica?", capa: "firma" },
  { text: "¿Clasificas Clientes conforme a su riesgo?", capa: "riesgo" },
  { text: "¿Conservas históricos?", capa: "riesgo" },
  { text: "¿Cuentas con mecanismos automatizados?", capa: "riesgo" },
  { text: "¿Puedes demostrar qué validaciones fueron realizadas?", capa: "evidencia" },
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
        <Link href="/" aria-label="Ir a jaak.ai" className="flex-shrink-0 rounded-lg bg-white px-2.5 py-1.5 inline-flex items-center">
          <Image src="/images/logos/jaak-logo-azul.png" alt="JAAK" width={90} height={36} className="h-5 sm:h-6 w-auto" priority />
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
  const orderedGroups = useMemo(() => {
    if (!campaignGroup) return SECTOR_GROUPS;
    const match = SECTOR_GROUPS.find((g) => g.id === campaignGroup);
    if (!match) return SECTOR_GROUPS;
    return [match, ...SECTOR_GROUPS.filter((g) => g.id !== campaignGroup)];
  }, [campaignGroup]);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {orderedGroups.map((group) => {
          const isCampaignMatch = group.id === campaignGroup;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => {
                gtmEvent("sector_card_click", { group: group.id, page: PAGE });
                onSelectGroup(group.id);
                scrollToId("aplicacion-industria");
              }}
              className="text-left rounded-2xl p-6 bg-white transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: `1px solid ${isCampaignMatch ? TEAL : "#E2E8EF"}`, outlineColor: NAVY }}
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

  const handleReviewClick = () => {
    gtmEvent("cta_after_checklist", { capas: activeCapas, page: PAGE });
    scrollToId("hablemos");
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
        <div className="rounded-2xl p-6 mb-8 animate-fade-in-up" style={{ background: WHITE, border: "1px solid #E2E8EF" }}>
          <p className="uppercase font-black text-[15px] mb-4" style={{ color: NAVY }}>
            Identificamos {activeCapas.length} {activeCapas.length === 1 ? "capa" : "capas"} que podrías revisar
          </p>

          <div className="space-y-3 mb-5">
            {activeCapas.map((capa) => (
              <div key={capa} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: GRAY_LIGHT }}>
                <span className="text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded-full flex-shrink-0" style={{ background: `${TEAL}1A`, color: "#0E7C82" }}>
                  {CAPA_INFO[capa].label}
                </span>
                <span className="text-[13.5px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                  {CAPA_INFO[capa].texto}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] mb-2" style={{ color: TEXT_MUTED }}>
            {activeCapas.map((capa) => (
              <span key={capa}>
                {CAPA_INFO[capa].label} → <strong style={{ color: NAVY }}>{CAPA_INFO[capa].producto}</strong>
              </span>
            ))}
          </div>

          <p className="text-[12px] leading-relaxed mt-4" style={{ color: TEXT_MUTED }}>
            Este ejercicio es orientativo y no constituye una determinación sobre el cumplimiento de tu organización.
          </p>
        </div>
      )}

      <div className="text-center">
        <button
          type="button"
          onClick={handleReviewClick}
          className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ background: NAVY, outlineColor: NAVY }}
        >
          {touched ? "Quiero revisar estas capas" : "Revisar mi operación"}
        </button>
      </div>
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
        style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
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
        style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
      >
        <h3 className="text-xl sm:text-2xl font-black mb-6" style={{ color: NAVY }}>
          {SECTOR_GROUP_LABEL[selectedGroup]}
        </h3>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {detail.blocks.map((block) => (
            <div key={block.titulo || "default"} className="rounded-xl p-5 bg-white" style={{ border: "1px solid #E2E8EF" }}>
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
 * Página principal
 * ───────────────────────────────────────────────────────────────────────── */
export default function Lfpiorpi2027LandingClient() {
  const [selectedGroup, setSelectedGroup] = useState<SectorGroupId>("inmobiliario");
  const [campaignParam, setCampaignParam] = useState<string | null>(null);
  const [checklistChecked, setChecklistChecked] = useState<boolean[]>(() => Array(CHECKLIST_ITEMS.length).fill(false));

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

  const needFlags = useMemo(() => {
    const active = new Set<Capa>();
    CHECKLIST_ITEMS.forEach((item, i) => {
      if (checklistChecked[i]) active.add(item.capa);
    });
    return {
      need_kyc: active.has("identidad"),
      need_aml: active.has("screening"),
      need_signature: active.has("firma"),
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
      if (next[index] && CAPA_INFO[item.capa].needEvent) {
        gtmEvent(CAPA_INFO[item.capa].needEvent as string, { page: PAGE });
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
      <main>
        {/* ── 01. Hero ─────────────────────────────────────────────────── */}
        <section
          className="pt-28 pb-20 relative overflow-hidden"
          style={{ background: `linear-gradient(155deg, ${NAVY} 0%, ${NAVY_SOFT} 70%, #122544 100%)` }}
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-[130px]"
            style={{ background: "rgba(30,202,211,0.10)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionEyebrow dark>Nuevas Reglas LFPIORPI · 2026–2027</SectionEyebrow>

                <h1 id="hero-heading" className="uppercase text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  <span className="block">El cumplimiento evoluciona.</span>
                  <span
                    className="block mt-2"
                    style={{ backgroundImage: `linear-gradient(90deg, ${TEAL}, #7FE8EC)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    ¿Tu operación está preparada?
                  </span>
                </h1>

                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                  Las nuevas disposiciones fortalecen el enfoque basado en riesgo, el conocimiento del Cliente o
                  Usuario, el Beneficiario Controlador y el uso de mecanismos automatizados para quienes realizan
                  Actividades Vulnerables.
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 text-[12.5px] font-semibold uppercase tracking-wide text-white/55">
                  <span>Identidad</span>
                  <span aria-hidden="true" style={{ color: TEAL }}>·</span>
                  <span>AML Screening</span>
                  <span aria-hidden="true" style={{ color: TEAL }}>·</span>
                  <span>Firma Digital</span>
                  <span aria-hidden="true" style={{ color: TEAL }}>·</span>
                  <span>Evidencia</span>
                </div>
                <p className="text-[13.5px] text-white/50 mb-8 leading-relaxed max-w-md">
                  JAAK automatiza capas críticas de identidad, screening y evidencia dentro de procesos digitales de
                  cumplimiento.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      gtmEvent("cta_review_process", { location: "hero", page: PAGE });
                      scrollToId("mi-actividad");
                    }}
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    Revisar qué cambia para mi operación
                  </button>
                  <SourceLink
                    href={DOF_URL}
                    kind="dof"
                    label="Consultar DOF"
                    context="hero"
                    className="inline-flex items-center justify-center text-[13px] font-semibold text-white/55 hover:text-white/85 transition-colors"
                  />
                </div>

                <p className="text-[12.5px] text-white/40">DOF · Acuerdo 115/2026 · 7 de agosto de 2026</p>
              </div>

              <div className="relative rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
                <Image
                  src="/images/lfpiorpi-2027/hero-compliance.jpg"
                  alt="Profesional revisando su identidad y expediente digital desde el celular"
                  width={1600}
                  height={900}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
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

            <ActivityGroups campaignGroup={campaignGroup} onSelectGroup={setSelectedGroup} />
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {ENFOQUE_CARDS.map((card) => (
                <div key={card.titulo} className="rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow flex flex-col" style={{ border: "1px solid #E2E8EF" }}>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4 self-start" style={{ background: `${TEAL}14`, color: "#0E7C82" }}>
                    {card.etiqueta}
                  </span>
                  <h3 className="text-[16px] font-bold mb-2" style={{ color: NAVY }}>
                    {card.titulo}
                  </h3>
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                    {card.texto}
                  </p>

                  <div className="mt-auto pt-4" style={{ borderTop: "1px solid #EEF2F5" }}>
                    <p className="text-[10.5px] font-bold uppercase tracking-wide mb-2" style={{ color: TEXT_MUTED }}>
                      {card.jaakLabel || "JAAK puede apoyar con:"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {card.jaakApoya.map((item) => (
                        <span key={item} className="text-[11.5px] px-2 py-1 rounded-full" style={{ background: GRAY_LIGHT, color: NAVY }}>
                          {item}
                        </span>
                      ))}
                    </div>
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
                    <SourceLink
                      href={DOF_URL}
                      kind="dof"
                      label={card.fuenteLabel}
                      context={`enfoque_${card.etiqueta}`}
                      className="text-[12px] font-semibold"
                      style={{ color: "#0E7C82" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  gtmEvent("cta_review_process", { location: "que_cambio", page: PAGE });
                  scrollToId("autoevaluacion");
                }}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: NAVY, border: "1px solid #E2E8EF" }}
              >
                Identificar qué puedo automatizar →
              </button>
            </div>
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

            <div className="grid gap-5 md:grid-cols-3 mb-6">
              {TIMELINE_PRIMARY.map((hito) => (
                <ImpressionTracker
                  key={hito.id}
                  eventName="timeline_interaction"
                  payload={{ milestone: hito.id, page: PAGE }}
                  className="text-left rounded-2xl p-6 transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
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

            <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto mb-10">
              {TIMELINE_SECONDARY.map((hito) => (
                <ImpressionTracker
                  key={hito.id}
                  eventName="timeline_interaction"
                  payload={{ milestone: hito.id, page: PAGE }}
                  className="text-left rounded-2xl p-5 transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
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

            <p className="text-[13px] text-white/45 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
              La adaptación puede requerir cambios tecnológicos, operativos y documentales.
            </p>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  gtmEvent("cta_review_process", { location: "timeline", page: PAGE });
                  scrollToId("autoevaluacion");
                }}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Revisar mi operación
              </button>
            </div>
          </div>
        </section>

        {/* ── 05. Qué puede automatizar JAAK ────────────────────────────── */}
        <section id="que-automatiza-jaak" className="py-20 bg-white scroll-mt-20" aria-labelledby="jaak-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Infraestructura de confianza</SectionEyebrow>
              <h2 id="jaak-heading" className="uppercase text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Automatiza capas de identidad, riesgo y evidencia
              </h2>
              <p className="text-[16px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                JAAK conecta capacidades de identidad, screening, firma y evidencia dentro de procesos digitales.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-4 max-w-4xl mx-auto" style={{ border: "1px solid #E2E8EF", background: OFF_WHITE }}>
              <Image
                src="/images/lfpiorpi-2027/flujo-identidad-riesgo-evidencia.png"
                alt="Flujo: Cliente → KYC Biométrico → Fuentes Oficiales → AML Screening → Firma Digital → Evidencia y Trazabilidad → Proceso de cumplimiento"
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-[12px] mb-12" style={{ color: TEXT_MUTED }}>
              Cliente → KYC Biométrico → Fuentes Oficiales → AML Screening → Firma Digital → Evidencia y Trazabilidad → Tu proceso de cumplimiento
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
              {JAAK_MODULES.map((mod) => (
                <div key={mod.num} className="rounded-2xl p-6 h-full flex flex-col" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
                  <div className="text-3xl font-black mb-3" style={{ color: "rgba(2,19,45,0.15)" }}>
                    {mod.num}
                  </div>
                  <h3 className="text-[14.5px] font-bold mb-2" style={{ color: NAVY }}>
                    {mod.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed flex-1" style={{ color: TEXT_MUTED }}>
                    {mod.texto}
                  </p>
                  {mod.href && (
                    <Link
                      href={mod.href}
                      onClick={() => mod.eventName && gtmEvent(mod.eventName, { page: PAGE, module: mod.titulo })}
                      className="inline-flex items-center gap-1 mt-4 text-[12px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "#0E7C82" }}
                    >
                      Conocer más →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[13px] leading-relaxed max-w-3xl mx-auto text-center p-5 rounded-xl mb-10" style={{ color: TEXT_MUTED, background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
              JAAK automatiza componentes tecnológicos dentro de procesos de cumplimiento. La determinación de
              obligaciones y controles aplicables corresponde a cada organización.
            </p>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  gtmEvent("cta_review_process", { location: "que_automatiza_jaak", page: PAGE });
                  scrollToId("autoevaluacion");
                }}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ background: NAVY, outlineColor: NAVY }}
              >
                Conocer qué capas puedo integrar
              </button>
            </div>
          </div>
        </section>

        {/* ── 06. Autoevaluación / checklist inteligente ───────────────── */}
        <section id="autoevaluacion" className="py-20 scroll-mt-20" style={{ background: OFF_WHITE }} aria-labelledby="autoeval-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionEyebrow>Revisa tu operación</SectionEyebrow>
              <h2 id="autoeval-heading" className="uppercase text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                ¿Qué parte de tu proceso sigue siendo manual?
              </h2>
            </div>
            <SmartChecklist checked={checklistChecked} onToggle={handleChecklistToggle} />
          </div>
        </section>

        {/* ── 07. Mecanismos automatizados (Art. 41) ───────────────────── */}
        <section id="mecanismos-automatizados" className="py-20 scroll-mt-20" style={{ background: NAVY }} aria-labelledby="automatizacion-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                Requerimiento regulatorio
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {AUTOMATION_NODES.map((node, i) => (
                <div key={node.titulo} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black mb-4" style={{ background: TEAL, color: NAVY }}>
                    {i + 1}
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">{node.titulo}</h3>
                  <p className="text-[13.5px] text-white/60 leading-relaxed">{node.texto}</p>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-center max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
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
        <section id="aplicacion-industria" className="py-20 bg-white scroll-mt-20" aria-labelledby="sectores-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow>Aplicación por industria</SectionEyebrow>
              <h2 id="sectores-heading" className="uppercase text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                ¿Cómo se traduce en tu operación?
              </h2>
            </div>
            <IndustryGroups
              selectedGroup={selectedGroup}
              onSelectGroup={setSelectedGroup}
              campaignGroup={campaignGroup}
              campaignCtaLabel={campaignInfo?.ctaLabel ?? null}
            />
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

        {/* ── 10. CTA final ─────────────────────────────────────────────── */}
        <section id="hablemos" className="py-20 scroll-mt-20" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }} aria-labelledby="cta-final-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-2xl overflow-hidden min-h-[320px]" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                <Image
                  src="/images/lfpiorpi-2027/cierre-trazabilidad.jpg"
                  alt="Profesional revisando un expediente digital ya documentado"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(2,19,45,0.92) 10%, rgba(2,19,45,0.55) 60%, rgba(2,19,45,0.25) 100%)" }} />
                <div className="relative z-10 h-full flex flex-col justify-end p-7">
                  <h2 id="cta-final-heading" className="uppercase text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">
                    Identifica qué puedes automatizar antes de 2027
                  </h2>
                  <p className="text-[14.5px] text-white/70 mb-6 leading-relaxed">
                    Cuéntanos tu sector y revisamos contigo qué capas de identidad, screening, firma y evidencia
                    puedes integrar a tu operación.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-white/10 self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    Conocer JAAK
                  </Link>
                </div>
              </div>

              <ContactFormMini defaultSector={campaignInfo?.formOption ?? ""} needFlags={needFlags} />
            </div>
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
