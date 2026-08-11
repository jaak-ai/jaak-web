"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";
import Header from "@/components/Header";
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
 * Datos de contenido — Sección 02: Cambio de enfoque
 * ───────────────────────────────────────────────────────────────────────── */
const ENFOQUE_CARDS: Array<{
  etiqueta: string;
  titulo: string;
  texto: string;
  fuenteLabel: string;
}> = [
  {
    etiqueta: "Identificación",
    titulo: "Expediente del Cliente o Usuario",
    texto: "Integración, conservación y actualización de la información utilizada para conocer al Cliente o Usuario.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
  },
  {
    etiqueta: "Beneficiario Controlador",
    titulo: "Identificar quién ejerce el control",
    texto: "Procesos para identificar y documentar a la persona física que finalmente ejerce control cuando corresponda.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
  },
  {
    etiqueta: "Riesgo",
    titulo: "Clasificación del Cliente",
    texto: "Evaluación y clasificación de Clientes o Usuarios conforme a niveles de riesgo, con controles diferenciados según el resultado.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
  },
  {
    etiqueta: "PEP y señales de riesgo",
    titulo: "Conocer más que una identidad",
    texto: "Las nuevas Reglas incorporan controles relacionados con Personas Políticamente Expuestas, Clientes de alto riesgo y otros factores relevantes para la evaluación y monitoreo.",
    fuenteLabel: "Fuente: DOF · Arts. 23 Bis 3, 23 Bis 4, 23 Ter y 41",
  },
  {
    etiqueta: "Automatización",
    titulo: "Mecanismos automatizados",
    texto: "Herramientas capaces de apoyar la gestión de expedientes, consolidación de operaciones, clasificación de riesgo, monitoreo, históricos y sistemas de alertas.",
    fuenteLabel: "Fuente: DOF · Art. 41",
  },
  {
    etiqueta: "Evidencia",
    titulo: "Poder demostrar",
    texto: "Conservar información, históricos y evidencia que permita sustentar los procesos y controles realizados.",
    fuenteLabel: "Fuente: DOF · Reglas de Carácter General",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 03: Timeline regulatorio
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
    titulo: "Mecanismos automatizados",
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
 * Sección 04: Conocimiento continuo del cliente
 * ───────────────────────────────────────────────────────────────────────── */
const KYC_FLOW = ["Identificación", "Clasificación de riesgo", "Perfil transaccional", "Monitoreo", "Alertas", "Histórico"];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 05: Mecanismos automatizados
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
 * Sección 06: Autoevaluación
 * ───────────────────────────────────────────────────────────────────────── */
const CHECKLIST_ITEMS = [
  "¿Integras un expediente único por Cliente o Usuario?",
  "¿Validas digitalmente la identidad?",
  "¿Tienes un proceso para identificar Beneficiario Controlador cuando corresponde?",
  "¿Realizas screening de PEP y listas relevantes?",
  "¿Clasificas Clientes conforme a riesgo?",
  "¿Conservas históricos de cambios relevantes?",
  "¿Cuentas con mecanismos automatizados para apoyar controles?",
  "¿Puedes reconstruir posteriormente qué validaciones fueron realizadas?",
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 07: Módulos JAAK
 * ───────────────────────────────────────────────────────────────────────── */
const JAAK_MODULES: Array<{
  num: string;
  titulo: string;
  texto: string;
  href?: string;
  eventName?: string;
  microcopy?: string;
  fuente?: { kind: SourceKind; label: string; url: string };
}> = [
  {
    num: "01",
    titulo: "KYC Biométrico",
    texto: "Verificación documental, prueba de vida pasiva y comparación facial para fortalecer procesos de identificación remota.",
    href: "/plataforma/verificacion-identidad",
    eventName: "product_kyc_click",
  },
  {
    num: "02",
    titulo: "Fuentes Oficiales",
    texto: "Validaciones contra fuentes disponibles para corroborar información relacionada con identidad y documentos.",
  },
  {
    num: "03",
    titulo: "AML Screening",
    texto: "Consulta de Personas Políticamente Expuestas y listas relevantes de riesgo para fortalecer procesos de conocimiento del Cliente.",
    href: "/listas-de-riesgo-pld-aml",
    eventName: "product_aml_click",
  },
  {
    num: "04",
    titulo: "Firma Digital",
    texto: "Formalización de consentimientos, declaraciones, cuestionarios y documentos dentro de procesos digitales.",
    href: "/plataforma/firma-electronica",
    microcopy: "Las nuevas Reglas contemplan el uso de Firma Electrónica en determinados procesos y documentos digitales.",
    fuente: { kind: "dof", label: "Fuente: DOF · Reglas de Carácter General", url: DOF_URL },
  },
  {
    num: "05",
    titulo: "Evidencia y Trazabilidad",
    texto: "Conservación estructurada de información y evidencia generada durante las validaciones realizadas.",
    href: "/plataforma/gestion-evidencia",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Sección 08: Sectores
 * ───────────────────────────────────────────────────────────────────────── */
type SectorId = "inmobiliario" | "activos-virtuales" | "fintech" | "gaming";

const SECTOR_ORDER: SectorId[] = ["inmobiliario", "activos-virtuales", "fintech", "gaming"];

const SECTOR_TABS: Record<
  SectorId,
  {
    label: string;
    headline: string;
    texto: string;
    fuente?: { kind: SourceKind; label: string; url: string };
    notaLegal?: string;
    defaultCta: { label: string; kind: "internal" | "scroll" | "source"; href: string; sourceKind?: SourceKind };
    campaignCtaLabel: string;
  }
> = {
  inmobiliario: {
    label: "Inmobiliario",
    headline: "Identidad + Beneficiario Controlador + Riesgo + Expediente",
    texto: "Fortalece los procesos digitales relacionados con identificación, conocimiento del Cliente y conservación de evidencia en operaciones inmobiliarias.",
    fuente: { kind: "sat", label: "SAT · Inmuebles", url: SAT_INMUEBLES_URL },
    defaultCta: { label: "Conocer KYC para inmobiliario", kind: "internal", href: "/kyc-inmobiliario-lfpiorpi" },
    campaignCtaLabel: "Revisar mi expediente PLD",
  },
  "activos-virtuales": {
    label: "Activos virtuales",
    headline: "Identidad + Screening + Riesgo + Evidencia",
    texto: "Conecta la verificación de identidad con consultas de riesgo y conserva evidencia estructurada desde el onboarding.",
    fuente: { kind: "sat", label: "SAT · Activos Virtuales", url: SAT_ACTIVOS_URL },
    defaultCta: { label: "Revisar mi proceso", kind: "scroll", href: "#autoevaluacion" },
    campaignCtaLabel: "Revisar identidad y riesgo",
  },
  fintech: {
    label: "Fintech / Lending / Crédito digital",
    headline: "Identidad + Screening + Evidencia",
    texto: "Automatiza validaciones dentro del onboarding digital y conecta identidad, fuentes y riesgo sin añadir fricción innecesaria al usuario.",
    notaLegal: "El marco regulatorio aplicable depende del tipo de entidad, actividad y operación realizada. No todas las empresas Fintech o de crédito están sujetas a las mismas obligaciones de la LFPIORPI.",
    defaultCta: { label: "Consultar Actividades Vulnerables", kind: "source", href: SAT_ACTIVIDADES_URL, sourceKind: "sat" },
    campaignCtaLabel: "Revisar mi onboarding",
  },
  gaming: {
    label: "Gaming / Sorteos",
    headline: "Identidad + Riesgo + Trazabilidad",
    texto: "Fortalece procesos de identificación y screening en operaciones digitales de alto volumen.",
    fuente: { kind: "sat", label: "SAT · Actividades Vulnerables", url: SAT_ACTIVIDADES_URL },
    defaultCta: { label: "Revisar mi proceso", kind: "scroll", href: "#autoevaluacion" },
    campaignCtaLabel: "Revisar mi proceso KYC",
  },
};

const SECTOR_PARAM_TO_ID: Record<string, SectorId> = {
  inmobiliario: "inmobiliario",
  "activos-virtuales": "activos-virtuales",
  fintech: "fintech",
  gaming: "gaming",
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
  "Fintech / Lending",
  "Gaming / Sorteos",
  "Servicios profesionales",
  "Automotriz",
  "Joyería",
  "Otro",
];

/* ─────────────────────────────────────────────────────────────────────────
 * Utilidad: scroll suave a una sección por id
 * ───────────────────────────────────────────────────────────────────────── */
function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─────────────────────────────────────────────────────────────────────────
 * Tarjeta del timeline — nunca un <button>/<a> exterior (evita anidar
 * elementos interactivos sobre el SourceLink interno); el evento de
 * analítica se dispara al entrar en viewport, no al hacer click.
 * ───────────────────────────────────────────────────────────────────────── */
function TimelineCard({ id, className, style, children }: { id: string; className?: string; style?: CSSProperties; children: ReactNode }) {
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
            gtmEvent("timeline_interaction", { milestone: id, page: PAGE });
          }
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección de checklist interactivo
 * ───────────────────────────────────────────────────────────────────────── */
function AutoevaluacionChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => Array(CHECKLIST_ITEMS.length).fill(false));
  const [touched, setTouched] = useState(false);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      gtmEvent("checklist_interaction", { item_index: i, checked: next[i], page: PAGE });
      return next;
    });
    setTouched(true);
  };

  const checkedCount = checked.filter(Boolean).length;
  const allChecked = checkedCount === CHECKLIST_ITEMS.length;

  const handleReviewClick = () => {
    gtmEvent("cta_review_process", { location: "autoevaluacion", page: PAGE });
    scrollToId("hablemos");
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {CHECKLIST_ITEMS.map((item, i) => {
          const isChecked = checked[i];
          return (
            <button
              key={item}
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={isChecked}
              className="flex items-start gap-3 text-left rounded-xl p-4 bg-white transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: `1px solid ${isChecked ? TEAL : "#E2E8EF"}`, outlineColor: TEAL }}
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors"
                style={{
                  background: isChecked ? TEAL : "transparent",
                  border: `1.5px solid ${isChecked ? TEAL : "#CBD5E1"}`,
                  color: NAVY,
                }}
                aria-hidden="true"
              >
                {isChecked && <CheckIcon />}
              </span>
              <span className="text-[14.5px] leading-relaxed" style={{ color: NAVY }}>
                {item}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-semibold" style={{ color: TEXT_MUTED }}>
            {checkedCount} de {CHECKLIST_ITEMS.length} controles marcados
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#E2E8EF" }}>
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${(checkedCount / CHECKLIST_ITEMS.length) * 100}%`, background: TEAL }}
          />
        </div>
      </div>

      {touched && (
        <div
          className="rounded-2xl p-6 mb-8 animate-fade-in-up"
          style={{ background: `${TEAL}0F`, border: `1px solid ${TEAL}55` }}
        >
          <p className="font-semibold text-[15px] mb-1" style={{ color: NAVY }}>
            {allChecked
              ? "Tu proceso ya cubre los controles listados."
              : "Identificaste procesos que podrían beneficiarse de mayor automatización."}
          </p>
          <p className="text-[13.5px] leading-relaxed" style={{ color: TEXT_MUTED }}>
            Este ejercicio es orientativo y no constituye una determinación sobre el cumplimiento de tu
            organización. Un especialista puede ayudarte a revisar el detalle de tu operación.
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
          Revisar mi proceso
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sección de sectores (tabs, con soporte de ?sector= en la URL)
 * ───────────────────────────────────────────────────────────────────────── */
function SectorTabs() {
  const [activeId, setActiveId] = useState<SectorId>("inmobiliario");
  const [campaignSector, setCampaignSector] = useState<SectorId | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get("sector");
      const matched = raw ? SECTOR_PARAM_TO_ID[raw] : undefined;
      if (matched) {
        setActiveId(matched);
        setCampaignSector(matched);
        gtmEvent("sector_selected", { sector: matched, source: "url_param", page: PAGE });
      }
    } catch {
      // sessionStorage/URL inaccesibles: se pierde la personalización, no la página.
    }
  }, []);

  const handleTabClick = (id: SectorId) => {
    setActiveId(id);
    gtmEvent("sector_selected", { sector: id, source: "manual_click", page: PAGE });
  };

  const active = SECTOR_TABS[activeId];
  const isCampaignMatch = campaignSector === activeId;

  const handleCtaClick = () => {
    if (isCampaignMatch) {
      gtmEvent("cta_review_process", { location: "sector_tab_campaign", sector: activeId, page: PAGE });
      scrollToId("autoevaluacion");
      return;
    }
    if (active.defaultCta.kind === "scroll") {
      gtmEvent("cta_review_process", { location: "sector_tab", sector: activeId, page: PAGE });
      scrollToId(active.defaultCta.href.replace("#", ""));
    }
  };

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl justify-center"
        style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
        role="tablist"
        aria-label="Seleccionar sector"
      >
        {SECTOR_ORDER.map((id) => {
          const isActive = id === activeId;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleTabClick(id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`sector-panel-${id}`}
              id={`sector-tab-${id}`}
              className="px-4 py-2.5 rounded-xl text-[13px] sm:text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: isActive ? NAVY : "transparent",
                color: isActive ? WHITE : TEXT_MUTED,
                outlineColor: NAVY,
              }}
            >
              {SECTOR_TABS[id].label}
            </button>
          );
        })}
      </div>

      <div
        key={activeId}
        id={`sector-panel-${activeId}`}
        role="tabpanel"
        aria-labelledby={`sector-tab-${activeId}`}
        className="max-w-3xl mx-auto rounded-2xl p-8 animate-fade-in-up"
        style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
      >
        <h3 className="text-xl sm:text-2xl font-black mb-4" style={{ color: NAVY }}>
          {active.headline}
        </h3>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
          {active.texto}
        </p>

        {active.notaLegal && (
          <p className="text-[13px] leading-relaxed mb-6 p-4 rounded-xl" style={{ color: TEXT_MUTED, background: WHITE, border: "1px solid #E2E8EF" }}>
            {active.notaLegal}
          </p>
        )}

        {active.fuente && (
          <p className="text-[13px] mb-6">
            <SourceLink
              href={active.fuente.url}
              kind={active.fuente.kind}
              label={`Fuente sectorial: ${active.fuente.label}`}
              context={`sector_${activeId}`}
              className="font-semibold underline underline-offset-2"
              style={{ color: NAVY }}
            />
          </p>
        )}

        {isCampaignMatch ? (
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: TEAL, color: NAVY, outlineColor: TEAL }}
          >
            {active.campaignCtaLabel}
          </button>
        ) : active.defaultCta.kind === "internal" ? (
          <Link
            href={active.defaultCta.href}
            onClick={() => gtmEvent("cta_review_process", { location: "sector_tab", sector: activeId, page: PAGE })}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: TEAL, color: NAVY, outlineColor: TEAL }}
          >
            {active.defaultCta.label}
          </Link>
        ) : active.defaultCta.kind === "source" ? (
          <SourceLink
            href={active.defaultCta.href}
            kind={active.defaultCta.sourceKind || "sat"}
            label={active.defaultCta.label}
            context={`sector_tab_${activeId}`}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: TEAL, color: NAVY, outlineColor: TEAL }}
          />
        ) : (
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: TEAL, color: NAVY, outlineColor: TEAL }}
          >
            {active.defaultCta.label}
          </button>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Formulario mínimo de contacto (sección 10)
 * ───────────────────────────────────────────────────────────────────────── */
function ContactFormMini() {
  const [formData, setFormData] = useState({ name: "", empresa: "", email: "", sector: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedRef = useRef(false);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    gtmEvent("form_started", { page: PAGE, form: "lfpiorpi_2027_contacto" });
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
          name: formData.name,
          empresa: formData.empresa,
          email: formData.email,
          mensaje: formData.sector ? `Sector: ${formData.sector}` : undefined,
          source: "landing-lfpiorpi-2027",
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        gtmEvent("form_completed", { page: PAGE, form: "lfpiorpi_2027_contacto", sector: formData.sector });
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
        <p className="text-white/70 text-[15px]">
          Nuestro equipo revisará contigo qué capacidades pueden integrarse a tu proceso.
        </p>
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
          Sector *
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
        {status === "loading" ? "Enviando..." : "Revisar mi proceso con un especialista"}
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
          scrollToId("hablemos");
        }}
        className="w-full rounded-xl px-5 py-3 text-[14px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ background: TEAL, color: NAVY }}
      >
        Revisar mi proceso
      </button>
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
      style={{
        background: dark ? "rgba(30,202,211,0.1)" : `${TEAL}14`,
        border: `1px solid ${TEAL}55`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} />
      <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: dark ? "#7FE8EC" : "#0E7C82" }}>
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Página principal
 * ───────────────────────────────────────────────────────────────────────── */
export default function Lfpiorpi2027LandingClient() {
  useEffect(() => {
    gtmEvent("landing_view", { page: PAGE });
  }, []);

  return (
    <>
      <Header />
      <MobileStickyCta />
      <main>
        {/* ── 01. Hero ─────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-24 relative overflow-hidden"
          style={{ background: `linear-gradient(155deg, ${NAVY} 0%, ${NAVY_SOFT} 70%, #122544 100%)` }}
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-[130px]"
            style={{ background: "rgba(30,202,211,0.10)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0.5px, transparent 0.5px), radial-gradient(circle at 70% 65%, rgba(255,255,255,0.4) 0.5px, transparent 0.5px)",
              backgroundSize: "64px 64px, 88px 88px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow dark>Nuevas Reglas LFPIORPI · 2026–2027</SectionEyebrow>

            <h1 id="hero-heading" className="uppercase text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">El cumplimiento evoluciona.</span>
              <span
                className="block mt-2"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${TEAL}, #7FE8EC)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ¿Tu operación está preparada?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
              Nuevas disposiciones fortalecen el enfoque basado en riesgo, el conocimiento del Cliente o Usuario, la
              identificación del Beneficiario Controlador y los mecanismos automatizados para quienes realizan
              Actividades Vulnerables.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                type="button"
                onClick={() => scrollToId("que-cambia")}
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: TEAL, color: NAVY }}
              >
                Conoce qué cambia
              </button>
              <SourceLink
                href={DOF_URL}
                kind="dof"
                label="Consultar DOF"
                context="hero"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              />
            </div>

            <p className="text-[13px] text-white/45">DOF · Acuerdo 115/2026 · 7 de agosto de 2026</p>
          </div>
        </section>

        {/* ── 02. Cambio de enfoque ────────────────────────────────────── */}
        <section id="que-cambia" className="py-20" style={{ background: OFF_WHITE }} aria-labelledby="enfoque-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <SectionEyebrow>Nuevo enfoque</SectionEyebrow>
              <h2 id="enfoque-heading" className="uppercase text-3xl md:text-4xl font-black mb-5 leading-snug" style={{ color: NAVY }}>
                De identificar al cliente a conocer y gestionar su riesgo
              </h2>
              <p className="text-[16px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                Las nuevas Reglas fortalecen un modelo de cumplimiento que no se limita a integrar información
                inicial del Cliente o Usuario. Incorporan elementos relacionados con clasificación de riesgo,
                conocimiento continuo, Beneficiario Controlador, automatización, monitoreo y conservación de
                evidencia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ENFOQUE_CARDS.map((card) => (
                <div key={card.titulo} className="rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow" style={{ border: "1px solid #E2E8EF" }}>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4" style={{ background: `${TEAL}14`, color: "#0E7C82" }}>
                    {card.etiqueta}
                  </span>
                  <h3 className="text-[16px] font-bold mb-2" style={{ color: NAVY }}>
                    {card.titulo}
                  </h3>
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                    {card.texto}
                  </p>
                  <SourceLink
                    href={DOF_URL}
                    kind="dof"
                    label={card.fuenteLabel}
                    context={`enfoque_${card.etiqueta}`}
                    className="text-[12px] font-semibold"
                    style={{ color: "#0E7C82" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03. Timeline regulatorio ─────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY }} aria-labelledby="timeline-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow dark>Fechas clave</SectionEyebrow>
              <h2 id="timeline-heading" className="uppercase text-3xl md:text-4xl font-black text-white mb-5">
                2027 no empieza en 2027
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed">
                La preparación tecnológica, operativa y documental requiere tiempo. Estas son algunas de las fechas
                relevantes previstas en las disposiciones transitorias.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 mb-6">
              {TIMELINE_PRIMARY.map((hito) => (
                <TimelineCard
                  key={hito.id}
                  id={hito.id}
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
                </TimelineCard>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
              {TIMELINE_SECONDARY.map((hito) => (
                <TimelineCard
                  key={hito.id}
                  id={hito.id}
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
                </TimelineCard>
              ))}
            </div>

            <p className="text-[13px] text-white/45 text-center max-w-2xl mx-auto mt-10 mb-6 leading-relaxed">
              Las fechas y obligaciones aplicables dependen de la actividad, características y situación específica
              de cada sujeto obligado. Consulta siempre el texto oficial.
            </p>

            <div className="text-center">
              <SourceLink
                href={DOF_URL}
                kind="dof"
                label="Ver publicación oficial"
                context="timeline_cta"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              />
            </div>
          </div>
        </section>

        {/* ── 04. Conocimiento continuo del cliente ────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="kyc-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow>Conocer al cliente</SectionEyebrow>
            <h2 id="kyc-heading" className="uppercase text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
              El KYC no termina cuando el cliente entra
            </h2>
            <p className="text-[16px] leading-relaxed max-w-2xl mx-auto mb-14" style={{ color: TEXT_MUTED }}>
              Las nuevas disposiciones fortalecen procesos relacionados con el perfil del Cliente o Usuario, su
              clasificación de riesgo y el monitoreo de cambios relevantes durante la relación.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 mb-10">
              {KYC_FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className="px-4 py-2.5 rounded-full text-[13px] font-bold"
                    style={{ background: GRAY_LIGHT, color: NAVY, border: "1px solid #E2E8EF" }}
                  >
                    {step}
                  </span>
                  {i < KYC_FLOW.length - 1 && (
                    <span aria-hidden="true" className="text-lg" style={{ color: TEAL }}>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[14.5px] leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: TEXT_MUTED }}>
              El conocimiento del cliente evoluciona de una validación inicial hacia procesos continuos de
              seguimiento y evaluación conforme al nivel de riesgo.
            </p>
            <SourceLink
              href={DOF_URL}
              kind="dof"
              label="Fuente: DOF · Arts. 23 Ter a 23 Ter 5 y Art. 41"
              context="kyc_continuo"
              className="text-[13px] font-semibold"
              style={{ color: "#0E7C82" }}
            />
          </div>
        </section>

        {/* ── 05. Mecanismos automatizados ─────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY }} aria-labelledby="automatizacion-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow dark>Automatización</SectionEyebrow>
              <h2 id="automatizacion-heading" className="uppercase text-3xl md:text-4xl font-black text-white mb-5">
                Del expediente al monitoreo
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed">
                Las nuevas Reglas contemplan mecanismos automatizados capaces de apoyar distintos elementos del
                proceso de cumplimiento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {AUTOMATION_NODES.map((node, i) => (
                <div key={node.titulo} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black mb-4"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">{node.titulo}</h3>
                  <p className="text-[13.5px] text-white/60 leading-relaxed">{node.texto}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-[13px] text-white/45 mb-5">
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

        {/* ── 06. Autoevaluación ────────────────────────────────────────── */}
        <section id="autoevaluacion" className="py-20" style={{ background: OFF_WHITE }} aria-labelledby="autoeval-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionEyebrow>Revisa tu operación</SectionEyebrow>
              <h2 id="autoeval-heading" className="uppercase text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                ¿Qué parte de tu proceso sigue siendo manual?
              </h2>
            </div>
            <AutoevaluacionChecklist />
          </div>
        </section>

        {/* ── 07. JAAK ──────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY }} aria-labelledby="jaak-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow dark>Infraestructura de confianza</SectionEyebrow>
              <h2 id="jaak-heading" className="uppercase text-3xl md:text-4xl font-black text-white mb-5">
                Automatiza capas de identidad, riesgo y evidencia
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed">
                JAAK integra capacidades tecnológicas que pueden fortalecer distintas etapas de los procesos
                digitales de identificación y conocimiento del Cliente.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
              {JAAK_MODULES.map((mod) => (
                // Nunca envolver la tarjeta completa en un <Link>: el módulo de Firma
                // Digital también lleva un SourceLink interno y un <a> no puede anidar
                // otro <a> (rompe la hidratación). El enlace de exploración, cuando
                // existe, vive como elemento propio al pie de la tarjeta.
                <div
                  key={mod.num}
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-3xl font-black mb-3" style={{ color: "rgba(30,202,211,0.3)" }}>
                    {mod.num}
                  </div>
                  <h3 className="text-[14.5px] font-bold text-white mb-2">{mod.titulo}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed flex-1">{mod.texto}</p>
                  {mod.microcopy && (
                    <p className="text-[11.5px] text-white/45 leading-relaxed mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                      {mod.microcopy}
                    </p>
                  )}
                  {mod.fuente && (
                    <p className="mt-2">
                      <SourceLink
                        href={mod.fuente.url}
                        kind={mod.fuente.kind}
                        label={mod.fuente.label}
                        context={`jaak_modulo_${mod.num}`}
                        className="text-[11px] font-semibold"
                        style={{ color: "#7FE8EC" }}
                      />
                    </p>
                  )}
                  {mod.href && (
                    <Link
                      href={mod.href}
                      onClick={() => mod.eventName && gtmEvent(mod.eventName, { page: PAGE, module: mod.titulo })}
                      className="inline-flex items-center gap-1 mt-4 text-[12px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      style={{ color: TEAL }}
                    >
                      Conocer más →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[13px] leading-relaxed max-w-3xl mx-auto text-center p-5 rounded-xl" style={{ color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              Las soluciones tecnológicas de JAAK apoyan componentes de procesos de identificación, conocimiento del
              Cliente y gestión de evidencia. La determinación de las obligaciones aplicables y del cumplimiento
              regulatorio corresponde a cada organización conforme a su actividad y marco jurídico.
            </p>
          </div>
        </section>

        {/* ── 08. Sectores ──────────────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="sectores-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow>Aplicación por industria</SectionEyebrow>
              <h2 id="sectores-heading" className="uppercase text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Un mismo cambio. Distintos retos operativos
              </h2>
            </div>
            <SectorTabs />
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
                  <SourceLink
                    href={f.url}
                    kind={f.kind}
                    label={f.ctaLabel}
                    context="fuentes_oficiales"
                    className="text-[13px] font-bold"
                    style={{ color: NAVY }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. CTA final ─────────────────────────────────────────────── */}
        <section id="hablemos" className="py-20" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }} aria-labelledby="cta-final-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="cta-final-heading" className="uppercase text-3xl md:text-4xl font-black text-white mb-5 leading-snug">
                  Preparar tu operación empieza por saber qué necesitas cambiar
                </h2>
                <p className="text-[16px] text-white/65 mb-8 leading-relaxed">
                  Conoce cómo integrar identidad, screening y evidencia dentro de tus procesos digitales.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  Conocer JAAK
                </Link>
              </div>

              <ContactFormMini />
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
