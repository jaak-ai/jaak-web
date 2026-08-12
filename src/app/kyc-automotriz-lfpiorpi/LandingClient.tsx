"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { automotiveLfpiorpi2026, formatMxn, formatUma } from "@/lib/automotiveLfpiorpi";

/* ─────────────────────────────────────────────────────────────────────────
 * Marca e identidad visual — mismos tokens que /lfpiorpi-2027, más un
 * acento cálido "sectorial" (ignición/cromo) reservado para esta landing:
 * señala contenido regulatorio y las acciones de mayor intención, sin
 * reemplazar el teal como color de marca en el resto del sitio.
 * ───────────────────────────────────────────────────────────────────────── */
const NAVY = "#02132D";
const NAVY_SOFT = "#0B1E3C";
const TEAL = "#1ECAD3";
const OFF_WHITE = "#F5F5F3";
const GRAY_LIGHT = "#EEF2F5";
const TEXT_MUTED = "#5B6472";

const AUTO_ORANGE = "#FF6B35";
const AUTO_AMBER = "#FFB020";
const AUTO_GRADIENT = `linear-gradient(135deg, ${AUTO_ORANGE} 0%, ${AUTO_AMBER} 100%)`;
const BRAND_AUTO_GRADIENT = `linear-gradient(90deg, ${TEAL} 0%, ${AUTO_ORANGE} 100%)`;
const ROAD_LINE = `repeating-linear-gradient(90deg, ${AUTO_ORANGE} 0px, ${AUTO_ORANGE} 26px, transparent 26px, transparent 54px)`;

const gradientTextStyle: CSSProperties = {
  backgroundImage: AUTO_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const PAGE = "kyc-automotriz-lfpiorpi";

/* ─────────────────────────────────────────────────────────────────────────
 * Rutas ya existentes en jaak.ai — nunca se inventan rutas nuevas
 * ───────────────────────────────────────────────────────────────────────── */
const KYC_DEMO_URL = "/kyc-demo-autoservicio";
const FIRMA_DEMO_URL = "/firma-nom151-demo-autoservicio";
const VERIFICACION_IDENTIDAD_URL = "/plataforma/verificacion-identidad";
const GESTION_EVIDENCIA_URL = "/plataforma/gestion-evidencia";
const LISTAS_RIESGO_URL = "/listas-de-riesgo-pld-aml";
const CONSULTAS_OFICIALES_URL = "/consultas-oficiales";
const CONTACTO_URL = "/contacto";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_MESSAGE =
  "Hola JAAK, quiero revisar cómo integrar la identificación de clientes y expediente LFPIORPI en mi operación automotriz.";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─────────────────────────────────────────────────────────────────────────
 * Fuentes oficiales
 * ───────────────────────────────────────────────────────────────────────── */
const LFPIORPI_URL = "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf";
// Historial de reformas de la LFPIORPI en la Cámara de Diputados — documenta
// el decreto DOF del 16 de julio de 2025. Se enlaza aquí (dominio verificado)
// en vez de a una URL específica de dof.gob.mx que no fue posible verificar.
const REFORMA_2025_URL = "https://www.diputados.gob.mx/LeyesBiblio/ref/lfpiorpi.htm";
const SAT_ACTIVIDADES_URL = "https://www.sat.gob.mx/minisitio/ActividadesVulnerables/index.html";
const SAT_MARCO_URL = "https://sppld.sat.gob.mx/pld/interiores/marco.html";
const SAT_EFECTIVO_URL = "https://sppld.sat.gob.mx/pld/interiores/activos.html";
const INEGI_UMA_URL = "https://www.inegi.org.mx/temas/uma/";

type SourceKind = "lfpiorpi" | "dof" | "sat" | "inegi";
const SOURCE_EVENTS: Record<SourceKind, string> = {
  lfpiorpi: "automotive_lfpiorpi_sources_click",
  dof: "automotive_lfpiorpi_sources_click",
  sat: "automotive_lfpiorpi_sources_click",
  inegi: "automotive_lfpiorpi_sources_click",
};

const FUENTES_OFICIALES: Array<{
  eyebrow: string;
  titulo: string;
  descripcion: string;
  url: string;
  kind: SourceKind;
  ctaLabel: string;
}> = [
  {
    eyebrow: "Cámara de Diputados",
    titulo: "LFPIORPI — texto vigente",
    descripcion: "Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.",
    url: LFPIORPI_URL,
    kind: "lfpiorpi",
    ctaLabel: "Consultar ley",
  },
  {
    eyebrow: "Cámara de Diputados",
    titulo: "Reforma LFPIORPI 2025",
    descripcion: "Historial de reformas de la LFPIORPI, incluido el decreto publicado en el DOF el 16 de julio de 2025 por el que se reforman y adicionan diversas disposiciones de la ley.",
    url: REFORMA_2025_URL,
    kind: "lfpiorpi",
    ctaLabel: "Ver historial de reformas",
  },
  {
    eyebrow: "SAT / Portal PLD",
    titulo: "Reglamento LFPIORPI y actualizaciones",
    descripcion: "Marco normativo del Portal de Prevención de Lavado de Dinero del SAT, que referencia el Reglamento de la LFPIORPI y sus reformas publicadas en el Diario Oficial de la Federación.",
    url: SAT_MARCO_URL,
    kind: "sat",
    ctaLabel: "Ver marco normativo",
  },
  {
    eyebrow: "SAT",
    titulo: "Actividades Vulnerables — Fracción VIII",
    descripcion: "Minisitio de Actividades Vulnerables del Servicio de Administración Tributaria.",
    url: SAT_ACTIVIDADES_URL,
    kind: "sat",
    ctaLabel: "Ver minisitio",
  },
  {
    eyebrow: "SAT / Portal PLD",
    titulo: "Umbrales de identificación y aviso",
    descripcion: "Portal de Prevención de Lavado de Dinero — umbrales aplicables por actividad vulnerable.",
    url: SAT_ACTIVIDADES_URL,
    kind: "sat",
    ctaLabel: "Ver umbrales",
  },
  {
    eyebrow: "SAT / Portal PLD",
    titulo: "Restricción de uso de efectivo y metales",
    descripcion: "Límites aplicables al pago en efectivo conforme al Artículo 32 de la LFPIORPI.",
    url: SAT_EFECTIVO_URL,
    kind: "sat",
    ctaLabel: "Ver restricción",
  },
  {
    eyebrow: "SAT",
    titulo: "Identificación de clientes y expedientes únicos",
    descripcion: "Portal de Prevención de Lavado de Dinero del SAT — lineamientos sobre integración del expediente de identificación del cliente o usuario.",
    url: SAT_MARCO_URL,
    kind: "sat",
    ctaLabel: "Ver lineamientos",
  },
  {
    eyebrow: "INEGI / DOF",
    titulo: "UMA 2026",
    descripcion: "Valor diario de la Unidad de Medida y Actualización vigente desde el 1 de febrero de 2026.",
    url: INEGI_UMA_URL,
    kind: "inegi",
    ctaLabel: "Ver valor UMA",
  },
];

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

function CheckIcon({ style }: { style?: CSSProperties }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={style}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DotIcon({ style }: { style?: CSSProperties }) {
  return <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={style} aria-hidden="true" />;
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
 * Encabezado de sección reutilizable — el tono distingue de un vistazo el
 * texto de la ley ("reg", acento ámbar/ignición) del producto JAAK
 * ("product", teal de marca). Es señal funcional, no solo decoración.
 * ───────────────────────────────────────────────────────────────────────── */
function SectionEyebrow({
  children,
  dark,
  tone = "product",
}: {
  children: ReactNode;
  dark?: boolean;
  tone?: "reg" | "product";
}) {
  const accent = tone === "reg" ? AUTO_ORANGE : TEAL;
  const textColor = tone === "reg" ? (dark ? "#FFC98A" : "#B45309") : dark ? "#7FE8EC" : "#0E7C82";
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
      style={{ background: dark ? `${accent}1A` : `${accent}14`, border: `1px solid ${accent}55` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
      <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: textColor }}>
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * WhatsApp flotante
 * ───────────────────────────────────────────────────────────────────────── */
function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => gtmEvent("automotive_lfpiorpi_whatsapp", { location: "floating_button", page: PAGE })}
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center justify-center h-14 w-14 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      style={{ background: "#25D366" }}
    >
      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
      </svg>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * RevealOnScroll — anima entrada (fade + slide) la primera vez que el
 * bloque entra en viewport. Siempre visible por defecto (SSR/no-JS friendly)
 * y respeta prefers-reduced-motion vía la variante motion-safe de Tailwind.
 * ───────────────────────────────────────────────────────────────────────── */
function RevealOnScroll({
  children,
  className,
  style,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setArmed(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !armed) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armed]);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        armed && !visible ? "motion-safe:opacity-0 motion-safe:translate-y-4" : "opacity-100 translate-y-0"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Datos de contenido
 * ───────────────────────────────────────────────────────────────────────── */

const IDENTIFICACION_ITEMS = [
  "Que la identificación estaba vigente",
  "Que los datos correspondían con fuentes oficiales",
  "Que la persona era quien decía ser",
  "Que el documento no pertenecía a un tercero",
  "Qué verificaciones se realizaron y cuándo",
  "Qué resultado arrojó cada verificación",
  "Qué documento terminó firmándose",
];

const TRADITIONAL_FLOW = ["Cliente", "Fotocopia / fotografía de INE", "Captura manual", "Expediente"];
const TRADITIONAL_PROBLEMS = [
  "Documento de otra persona",
  "Documento manipulado",
  "Errores de captura",
  "Falta de evidencia del proceso",
  "Dificultad de reconstrucción",
];

const DIGITAL_FLOW = [
  "Cliente",
  "Documento oficial",
  "OCR",
  "Validación documental",
  "Prueba de vida",
  "Comparación facial",
  "Consultas de identidad",
  "Expediente",
];

const IDENTITY_COMPONENTS = [
  "OCR de identificación",
  "Vigencia documental",
  "Comparación facial",
  "Prueba de vida",
  "CURP",
  "Consulta RENAPO",
  "Consulta/validación de INE cuando corresponda al servicio disponible",
];

const RISK_COMPONENTS = [
  "Personas Políticamente Expuestas",
  "Listas oficiales comunicadas por autoridades",
  "Listas internacionales",
  "Screening AML/PLD",
  "Otras fuentes de riesgo configuradas en JAAK",
];

const EXPEDIENTE_GROUPS: Array<{ titulo: string; items: string[] }> = [
  { titulo: "Identidad", items: ["Datos personales", "Documento capturado", "OCR", "Vigencia"] },
  { titulo: "Biometría", items: ["Prueba de vida", "Comparación facial"] },
  { titulo: "Fuentes oficiales", items: ["CURP / RENAPO", "INE cuando aplique"] },
  { titulo: "Screening", items: ["Resultado PEP", "Listas consultadas", "Fecha de consulta"] },
  { titulo: "Operación", items: ["Datos relacionados con la operación", "Fecha", "Trazabilidad"] },
  { titulo: "Documentos", items: ["Consentimientos", "Contrato", "Firma digital"] },
  { titulo: "Evidencia", items: ["Sellos de tiempo cuando correspondan", "Registros del proceso", "Integridad documental", "Expediente exportable"] },
];

const JAAK_PUEDE_AYUDAR = [
  "Digitalizar la captura de identidad",
  "Realizar validaciones documentales",
  "Incorporar biometría y prueba de vida",
  "Consultar fuentes de identidad disponibles",
  "Realizar screening configurable",
  "Organizar resultados",
  "Conservar evidencia digital",
  "Incorporar firma digital",
  "Generar un expediente auditable según los módulos contratados",
];

const RESPONSABILIDAD_ORGANIZACION = [
  "Determinar si realiza una Actividad Vulnerable",
  "Darse de alta cuando corresponda",
  "Establecer políticas internas",
  "Determinar cuándo una operación es identificable",
  "Realizar seguimiento y acumulación cuando corresponda",
  "Determinar cuándo debe presentar un Aviso",
  "Presentar Avisos ante la autoridad",
  "Cumplir restricciones de efectivo",
  "Identificar Beneficiario Controlador cuando aplique",
  "Evaluar riesgos",
  "Atender requerimientos de autoridad",
  "Definir el tratamiento jurídico/regulatorio de cada operación",
];

const TIMELINE_ITEMS: Array<{ id: string; fecha: string; titulo: string; texto: string; color: string; destacados?: string[] }> = [
  {
    id: "2012",
    fecha: "2012–2013",
    titulo: "LFPIORPI + Reglamento + Reglas de Carácter General",
    texto: "Entra en vigor el marco original: la ley, su reglamento y las reglas que hoy siguen rigiendo el padrón de Actividades Vulnerables.",
    color: "#94A3B8",
  },
  {
    id: "2025",
    fecha: "Julio 2025",
    titulo: "Reforma de la LFPIORPI",
    texto: "Fortalece identificación y conocimiento del cliente, incorpora al Beneficiario Controlador, refuerza la conservación de evidencia, el enfoque basado en riesgo, la capacitación, los mecanismos automatizados y la auditoría.",
    color: TEAL,
    destacados: [
      "Fortalecimiento de identificación y conocimiento del cliente",
      "Beneficiario Controlador",
      "Conservación de evidencia",
      "Enfoque basado en riesgo",
      "Capacitación",
      "Mecanismos automatizados",
      "Auditoría",
    ],
  },
  {
    id: "2026",
    fecha: "Marzo 2026",
    titulo: "Reforma al Reglamento de la LFPIORPI",
    texto: "Precisa reglas para la determinación de montos, la acumulación de operaciones, Personas Políticamente Expuestas y la armonización con la reforma legal y los procedimientos de Actividades Vulnerables.",
    color: AUTO_ORANGE,
    destacados: [
      "Reglas para determinación de montos",
      "Acumulación",
      "Personas Políticamente Expuestas",
      "Armonización con la reforma legal",
      "Procedimientos relacionados con Actividades Vulnerables",
    ],
  },
];

const PROFILE_CARDS: Array<{ id: string; titulo: string; texto: string; items: string[] }> = [
  {
    id: "pf",
    titulo: "Persona física",
    texto: "El caso base: validación documental, identidad, biometría, consultas de identidad y expediente.",
    items: ["Validación documental", "Verificación de identidad", "Biometría y prueba de vida", "Consultas de identidad", "Expediente integrado"],
  },
  {
    id: "pm",
    titulo: "Persona moral",
    texto: "El expediente puede requerir información adicional que complemente la identificación de quien representa a la empresa.",
    items: ["Datos del representante", "Actividad de la empresa", "Estructura societaria", "Beneficiario Controlador cuando aplique"],
  },
  {
    id: "riesgo",
    titulo: "Cliente de mayor riesgo",
    texto: "Cuando el perfil o la operación lo justifican, el proceso puede reforzarse con capas adicionales.",
    items: ["Screening ampliado", "Consulta PEP", "Fuentes adicionales", "Revisión reforzada"],
  },
];

const FORM_OPTIONS = [
  "Identificación de clientes",
  "Expediente LFPIORPI",
  "KYC y biometría",
  "Listas de riesgo",
  "Firma digital",
  "Integración API / SDK",
  "Otro",
];

const FAQ_ITEMS = [
  {
    q: "¿La venta de vehículos es una Actividad Vulnerable?",
    a: "Sí. El Artículo 17, fracción VIII de la LFPIORPI considera Actividad Vulnerable la comercialización o distribución habitual o profesional de vehículos nuevos o usados, ya sean aéreos, marítimos o terrestres. Esta página se concentra en vehículos terrestres y el sector automotriz.",
  },
  {
    q: "¿Cuál es el umbral de identificación en 2026?",
    a: `${formatUma(automotiveLfpiorpi2026.identificationUma)} / ${formatMxn(automotiveLfpiorpi2026.identificationMxn)}, calculados con la UMA 2026 de ${formatMxn(automotiveLfpiorpi2026.umaDaily)}. A partir de este supuesto surge la obligación de identificar al cliente conforme a la LFPIORPI.`,
  },
  {
    q: "¿Cuál es el umbral de aviso en 2026?",
    a: `${formatUma(automotiveLfpiorpi2026.noticeUma)} / ${formatMxn(automotiveLfpiorpi2026.noticeMxn)}. El Aviso corresponde presentarlo al sujeto obligado que realiza la Actividad Vulnerable.`,
  },
  {
    q: "¿Quién presenta el Aviso?",
    a: "El sujeto obligado que realiza la Actividad Vulnerable — es decir, la agencia, grupo, distribuidor o comercializador de vehículos.",
  },
  {
    q: "¿JAAK presenta el Aviso por mi empresa?",
    a: "No se presenta como funcionalidad de JAAK. JAAK ayuda a obtener, estructurar y conservar información y evidencia del cliente que puede alimentar los procesos internos de cumplimiento de tu organización.",
  },
  {
    q: "¿La LFPIORPI obliga a utilizar biometría?",
    a: "No existe una obligación textual de usar biometría en la LFPIORPI. La biometría, la comparación facial y la prueba de vida son herramientas tecnológicas que pueden fortalecer la verificación de identidad del cliente.",
  },
  {
    q: "¿INE y RENAPO son listas de riesgo?",
    a: "No. INE y RENAPO pertenecen al frente de validación de identidad y datos. Las listas de riesgo (PEP, sanciones, listas oficiales e internacionales) son un frente distinto: el análisis de riesgo del cliente.",
  },
  {
    q: "¿Qué pasa si un cliente realiza varias operaciones?",
    a: "El Reglamento contempla la acumulación de actos u operaciones realizados con un mismo cliente durante un periodo de hasta seis meses para determinar el supuesto de presentación de Avisos, conforme a las reglas aplicables.",
  },
  {
    q: "¿Cuánto tiempo debe conservarse la información?",
    a: "La LFPIORPI contempla la conservación de la información y documentación soporte por 10 años para las operaciones realizadas bajo el régimen correspondiente.",
  },
  {
    q: "¿Puedo integrar firma digital?",
    a: "Sí, como componente adicional de evidencia y contratación dentro del mismo flujo de identificación. No sustituye las obligaciones de identificación, aviso o restricción de efectivo de la LFPIORPI.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * FAQAccordion
 * ───────────────────────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid #E2E8EF" }}>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <details key={item.q} open={isOpen} style={{ borderBottom: i === FAQ_ITEMS.length - 1 ? "none" : "1px solid #EEF2F5" }}>
            <summary
              className="w-full text-left px-5 sm:px-6 py-5 flex items-start gap-4 cursor-pointer list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: TEAL }}
              onClick={(e) => {
                e.preventDefault();
                setOpen(isOpen ? null : i);
              }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-sm font-bold transition-transform"
                style={{
                  background: isOpen ? TEAL : "#EEF2F5",
                  color: isOpen ? NAVY : "#64748B",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                +
              </span>
              <span className="flex-1 font-semibold text-[15px] leading-snug" style={{ color: NAVY }}>
                {item.q}
              </span>
            </summary>
            <p className="px-5 sm:px-6 pb-6 pl-16 text-[14px] leading-relaxed" style={{ color: "#6B7686" }}>
              {item.a}
            </p>
          </details>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ThresholdBars — comparación visual animada de los tres montos, con
 * degradado de marca a acento sectorial. Se anima una sola vez al entrar
 * en viewport (misma mecánica que RevealOnScroll, sin duplicar lógica).
 * ───────────────────────────────────────────────────────────────────────── */
function ThresholdBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const max = automotiveLfpiorpi2026.noticeMxn;
  const bars = [
    { label: "Identificación", value: automotiveLfpiorpi2026.identificationMxn, gradient: `linear-gradient(90deg, ${TEAL}, ${TEAL})` },
    { label: "Aviso", value: automotiveLfpiorpi2026.noticeMxn, gradient: BRAND_AUTO_GRADIENT },
    { label: "Restricción de efectivo", value: automotiveLfpiorpi2026.cashRestrictionMxn, gradient: AUTO_GRADIENT },
  ];

  return (
    <div ref={ref} className="space-y-5">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-[12.5px] font-semibold" style={{ color: NAVY }}>
              {bar.label}
            </span>
            <span className="text-[12.5px] font-bold" style={{ color: TEXT_MUTED }}>
              {formatMxn(bar.value)}
            </span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: GRAY_LIGHT }}>
            <div
              className="h-full rounded-full motion-safe:transition-[width] motion-safe:duration-1000 motion-safe:ease-out"
              style={{ width: visible ? `${Math.max((bar.value / max) * 100, 4)}%` : "0%", background: bar.gradient }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Simulador de umbrales — nunca dice CUMPLE/NO CUMPLE
 * ───────────────────────────────────────────────────────────────────────── */
const SIMULATOR_PRESETS = [250000, 500000, 800000];

function ThresholdSimulator() {
  const [rawValue, setRawValue] = useState("");
  const trackedRef = useRef(false);

  const amount = useMemo(() => {
    const parsed = Number(rawValue.replace(/[^0-9.]/g, ""));
    return Number.isFinite(parsed) ? parsed : 0;
  }, [rawValue]);

  const track = () => {
    if (!trackedRef.current) {
      trackedRef.current = true;
      gtmEvent("automotive_lfpiorpi_threshold_use", { page: PAGE });
    }
  };

  const handleChange = (value: string) => {
    setRawValue(value);
    if (value.trim() !== "") track();
  };

  const handlePreset = (value: number) => {
    setRawValue(String(value));
    track();
  };

  const hasValue = rawValue.trim() !== "" && amount > 0;
  const meetsIdentification = amount >= automotiveLfpiorpi2026.identificationMxn;
  const meetsNotice = amount >= automotiveLfpiorpi2026.noticeMxn;

  let resultText = "";
  if (hasValue) {
    if (meetsNotice) {
      resultText = "Supera el umbral de identificación y el umbral de aviso de la Fracción VIII.";
    } else if (meetsIdentification) {
      resultText = "Supera el umbral de identificación de la Fracción VIII.";
    } else {
      resultText =
        "Por monto individual, se encuentra por debajo del umbral de identificación de la Fracción VIII. Revisa acumulación y demás supuestos aplicables.";
    }
  }

  const gaugeMax = automotiveLfpiorpi2026.noticeMxn * 1.25;
  const gaugePct = Math.min((amount / gaugeMax) * 100, 100);
  const identificationPct = (automotiveLfpiorpi2026.identificationMxn / gaugeMax) * 100;
  const noticePct = (automotiveLfpiorpi2026.noticeMxn / gaugeMax) * 100;
  const gaugeColor = meetsNotice ? AUTO_GRADIENT : meetsIdentification ? BRAND_AUTO_GRADIENT : `linear-gradient(90deg, ${TEAL}, ${TEAL})`;

  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-white" style={{ border: "1px solid #E2E8EF" }}>
      <label htmlFor="sim-monto" className="block text-[13px] font-semibold mb-2" style={{ color: NAVY }}>
        Valor de la operación (MXN)
      </label>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg font-bold" style={{ color: TEXT_MUTED }}>
          $
        </span>
        <input
          id="sim-monto"
          type="text"
          inputMode="decimal"
          value={rawValue}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="500,000"
          className="w-full px-4 py-3 rounded-lg text-[16px] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ border: "1px solid #CBD5E1", color: NAVY, outlineColor: AUTO_ORANGE }}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {SIMULATOR_PRESETS.map((preset) => {
          const isActive = amount === preset;
          return (
            <button
              key={preset}
              type="button"
              onClick={() => handlePreset(preset)}
              className="rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={
                isActive
                  ? { background: AUTO_GRADIENT, color: "white", outlineColor: AUTO_ORANGE }
                  : { background: GRAY_LIGHT, color: NAVY, outlineColor: AUTO_ORANGE }
              }
            >
              {formatMxn(preset).replace(".00", "")}
            </button>
          );
        })}
      </div>

      {/* Gauge visual — posiciona el monto frente a los dos umbrales */}
      <div className="mb-6">
        <div className="relative h-3 rounded-full overflow-hidden" style={{ background: GRAY_LIGHT }}>
          <div
            className="h-full rounded-full motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out"
            style={{ width: `${gaugePct}%`, background: gaugeColor }}
          />
          <div className="absolute top-0 bottom-0 w-px" style={{ left: `${identificationPct}%`, background: NAVY }} aria-hidden="true" />
          <div className="absolute top-0 bottom-0 w-px" style={{ left: `${noticePct}%`, background: NAVY }} aria-hidden="true" />
        </div>
        <div className="relative h-4 mt-1 text-[10.5px] font-semibold" style={{ color: TEXT_MUTED }}>
          <span className="absolute -translate-x-1/2" style={{ left: `${identificationPct}%` }}>
            Identificación
          </span>
          <span className="absolute -translate-x-1/2" style={{ left: `${noticePct}%` }}>
            Aviso
          </span>
        </div>
      </div>

      {hasValue && (
        <div className="rounded-xl p-5 mb-4" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
          <p className="text-[14.5px] leading-relaxed font-medium" style={{ color: NAVY }}>
            {resultText}
          </p>
          <p className="text-[13px] leading-relaxed mt-2" style={{ color: TEXT_MUTED }}>
            Si la operación pretende liquidarse mediante efectivo, consulta la restricción aplicable del Artículo 32.
          </p>
        </div>
      )}

      <p className="text-[12px] leading-relaxed" style={{ color: TEXT_MUTED }}>
        Resultado orientativo. No constituye asesoría jurídica o fiscal. La determinación debe considerar
        características específicas de la operación, acumulación, forma de pago, contribuciones y regulación
        vigente.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Formulario corto — envía a /api/landing igual que el resto de landings
 * ───────────────────────────────────────────────────────────────────────── */
function AutomotrizContactForm() {
  const [formData, setFormData] = useState({ name: "", empresa: "", email: "", telefono: "", cargo: "", interes: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedRef = useRef(false);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    gtmEvent("automotive_lfpiorpi_form_start", { page: PAGE });
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
          telefono: formData.telefono,
          cargo: formData.cargo,
          mensaje: `Interés: ${formData.interes || "No especificado"}`,
          source: "landing-automotriz-lfpiorpi",
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        gtmEvent("automotive_lfpiorpi_form_submit", { page: PAGE, interes: formData.interes });
        setFormData({ name: "", empresa: "", email: "", telefono: "", cargo: "", interes: "" });
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
        <p className="text-white/70 text-[15px]">Un especialista de JAAK revisará contigo qué información necesita tu expediente.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={markStarted} className="space-y-4 rounded-2xl p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="auto-name" className="block text-[13px] font-medium text-white/80 mb-1.5">
            Nombre *
          </label>
          <input
            id="auto-name"
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
          <label htmlFor="auto-empresa" className="block text-[13px] font-medium text-white/80 mb-1.5">
            Empresa *
          </label>
          <input
            id="auto-empresa"
            type="text"
            required
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/35 outline-none"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
            placeholder="Nombre de tu agencia o grupo"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="auto-email" className="block text-[13px] font-medium text-white/80 mb-1.5">
            Correo corporativo *
          </label>
          <input
            id="auto-email"
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
          <label htmlFor="auto-telefono" className="block text-[13px] font-medium text-white/80 mb-1.5">
            Teléfono *
          </label>
          <input
            id="auto-telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/35 outline-none"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
            placeholder="55 0000 0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="auto-cargo" className="block text-[13px] font-medium text-white/80 mb-1.5">
          Cargo / área *
        </label>
        <input
          id="auto-cargo"
          type="text"
          required
          value={formData.cargo}
          onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/35 outline-none"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
          placeholder="Cumplimiento, jurídico, operaciones..."
        />
      </div>

      <div>
        <label htmlFor="auto-interes" className="block text-[13px] font-medium text-white/80 mb-1.5">
          ¿Qué quieres revisar? *
        </label>
        <select
          id="auto-interes"
          required
          value={formData.interes}
          onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-white outline-none"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <option value="" disabled style={{ color: NAVY }}>
            Selecciona una opción
          </option>
          {FORM_OPTIONS.map((opt) => (
            <option key={opt} value={opt} style={{ color: NAVY }}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl px-6 py-4 text-[15px] font-bold text-white transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,107,53,0.35)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ background: AUTO_GRADIENT }}
      >
        {status === "loading" ? "Enviando..." : "Revisar mi proceso"}
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
 * Página principal
 * ───────────────────────────────────────────────────────────────────────── */
export default function KycAutomotrizLfpiorpiLandingClient() {
  useEffect(() => {
    gtmEvent("view_kyc_automotriz_lfpiorpi_landing", { page: PAGE });
  }, []);

  return (
    <>
      <Header />
      <WhatsAppFloatingButton />
      <main>
        {/* ── 02. Hero ────────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: `linear-gradient(150deg, ${NAVY} 0%, ${NAVY_SOFT} 65%, #122544 100%)` }}
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[120px]"
            style={{ background: "rgba(30,202,211,0.1)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-[130px]"
            style={{ background: "rgba(255,107,53,0.12)" }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
              style={{ background: `${AUTO_ORANGE}1A`, border: `1px solid ${AUTO_ORANGE}55` }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: AUTO_ORANGE }} />
              <span className="text-[12px] sm:text-sm font-medium" style={{ color: "#FFC98A" }}>
                LFPIORPI · Art. 17 Fracción VIII · Sector automotriz
              </span>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-[3.2rem] font-black text-white mb-6 leading-tight">
              Vender un vehículo también implica{" "}
              <span style={gradientTextStyle}>saber quién lo compra.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 mb-4 max-w-2xl mx-auto leading-relaxed">
              La LFPIORPI establece obligaciones de identificación para quienes comercializan vehículos. Digitaliza la
              verificación del cliente y conserva la evidencia en un expediente integrado.
            </p>
            <p className="text-[14.5px] text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed">
              JAAK permite incorporar verificación documental, biometría, consultas de identidad, screening y firma
              digital dentro de un mismo proceso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <button
                type="button"
                onClick={() => {
                  gtmEvent("automotive_lfpiorpi_hero_demo", { location: "hero", page: PAGE });
                  scrollToId("expediente-integrado");
                }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,107,53,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: AUTO_GRADIENT }}
              >
                Conoce cómo integrar tu expediente
              </button>
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("automotive_lfpiorpi_kyc_cta", { location: "hero", page: PAGE })}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center text-white transition-all hover:-translate-y-0.5 hover:border-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Hablar con un especialista
              </a>
            </div>

            <p className="text-[12.5px] text-white/40 max-w-xl mx-auto leading-relaxed">
              JAAK facilita tecnología e información para tus procesos de identificación. La determinación y
              cumplimiento de las obligaciones regulatorias corresponde al sujeto obligado.
            </p>
          </div>

          <div
            className="relative z-10 mt-14 h-[3px] w-full opacity-70"
            style={{ backgroundImage: ROAD_LINE, backgroundSize: "54px 3px" }}
            aria-hidden="true"
          />
        </section>

        {/* ── 03. Por qué aplica al sector (Fracción VIII) ──────────────────── */}
        <section className="py-20 bg-white scroll-mt-20" id="fraccion-viii" aria-labelledby="fraccion-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <SectionEyebrow tone="reg">Artículo 17, fracción VIII</SectionEyebrow>
              <h2 id="fraccion-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                ¿Por qué una agencia automotriz debe conocer la LFPIORPI?
              </h2>
            </div>
            <div className="rounded-2xl p-6 sm:p-8 mb-6" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
              <p className="text-[16px] leading-relaxed" style={{ color: NAVY }}>
                La comercialización o distribución habitual o profesional de vehículos nuevos o usados, ya sean
                aéreos, marítimos o terrestres, corresponde al{" "}
                <strong>Artículo 17, fracción VIII de la LFPIORPI</strong>. Esta página se concentra en vehículos
                terrestres y el sector automotriz.
              </p>
            </div>
            <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
              Cuando una actividad se considera vulnerable, la ley establece obligaciones de identificación del
              cliente, conservación de evidencia y, en ciertos supuestos, presentación de avisos ante la autoridad.
              Las siguientes secciones explican cada uno de estos conceptos por separado.
            </p>
          </div>
        </section>

        {/* ── 04. Tres umbrales ──────────────────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="umbrales" style={{ background: OFF_WHITE }} aria-labelledby="umbrales-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow tone="reg">Montos 2026</SectionEyebrow>
              <h2 id="umbrales-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Tres conceptos distintos, tres umbrales distintos
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                Identificación, aviso y restricción de efectivo no son lo mismo. Confundirlos es el error más común
                al hablar de LFPIORPI.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              <div
                className="rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: `1px solid ${TEAL}55` }}
              >
                <div className="h-1.5" style={{ background: TEAL }} aria-hidden="true" />
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color: "#0E7C82" }}>
                    Identificación
                  </p>
                  <p className="text-2xl font-black mb-1" style={{ color: NAVY }}>
                    {formatUma(automotiveLfpiorpi2026.identificationUma)}
                  </p>
                  <p className="text-lg font-bold mb-3" style={{ color: TEAL }}>
                    {formatMxn(automotiveLfpiorpi2026.identificationMxn)}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                    A partir de este supuesto surge la obligación de identificar al cliente conforme a la LFPIORPI.
                  </p>
                </div>
              </div>
              <div
                className="rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: "1px solid #E2E8EF" }}
              >
                <div className="h-1.5" style={{ background: BRAND_AUTO_GRADIENT }} aria-hidden="true" />
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color: TEXT_MUTED }}>
                    Aviso
                  </p>
                  <p className="text-2xl font-black mb-1" style={{ color: NAVY }}>
                    {formatUma(automotiveLfpiorpi2026.noticeUma)}
                  </p>
                  <p className="text-lg font-bold mb-3" style={{ color: NAVY }}>
                    {formatMxn(automotiveLfpiorpi2026.noticeMxn)}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                    El aviso corresponde presentarlo al sujeto obligado. JAAK no presenta el aviso; ayuda a organizar
                    la información que lo respalda.
                  </p>
                </div>
              </div>
              <div
                className="rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: `1px solid ${AUTO_ORANGE}55` }}
              >
                <div className="h-1.5" style={{ background: AUTO_GRADIENT }} aria-hidden="true" />
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color: "#B45309" }}>
                    Restricción de efectivo
                  </p>
                  <p className="text-2xl font-black mb-1" style={{ color: NAVY }}>
                    {formatUma(automotiveLfpiorpi2026.cashRestrictionUma)}
                  </p>
                  <p className="text-lg font-bold mb-3" style={{ color: AUTO_ORANGE }}>
                    {formatMxn(automotiveLfpiorpi2026.cashRestrictionMxn)}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                    Concepto distinto del umbral de identificación, aplicable al pago en efectivo (Art. 32).
                  </p>
                </div>
              </div>
            </div>

            <RevealOnScroll
              className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 mb-8 bg-white"
              style={{ border: "1px solid #E2E8EF" }}
              delayMs={150}
            >
              <p className="text-[11px] font-bold uppercase tracking-wide mb-4" style={{ color: TEXT_MUTED }}>
                Comparación a escala
              </p>
              <ThresholdBars />
            </RevealOnScroll>

            <p className="text-[12.5px] text-center leading-relaxed" style={{ color: TEXT_MUTED }}>
              Valores calculados con la UMA 2026 de {formatMxn(automotiveLfpiorpi2026.umaDaily)} diarios, vigente
              desde el 1 de febrero de 2026. Consulta siempre los valores vigentes para el ejercicio correspondiente.
            </p>
          </div>
        </section>

        {/* ── 05. Cálculo + contribuciones ──────────────────────────────────── */}
        <section className="py-16 bg-white" aria-labelledby="calculo-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="calculo-heading" className="text-2xl md:text-3xl font-black mb-5 text-center" style={{ color: NAVY }}>
              Un detalle que puede cambiar el cálculo
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div className="rounded-2xl p-6" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
                <p className="text-[12px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0E7C82" }}>
                  Umbrales del artículo 17
                </p>
                <p className="text-[14px] leading-relaxed" style={{ color: NAVY }}>
                  Para determinar los montos de identificación y aviso, el Reglamento establece que no deben
                  considerarse las contribuciones y demás accesorios del acto u operación.
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
                <p className="text-[12px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0E7C82" }}>
                  Restricción del artículo 32
                </p>
                <p className="text-[14px] leading-relaxed" style={{ color: NAVY }}>
                  Para determinar el límite aplicable al uso de efectivo sí deben considerarse contribuciones y
                  accesorios.
                </p>
              </div>
            </div>
            <p className="text-[13.5px] text-center leading-relaxed" style={{ color: TEXT_MUTED }}>
              Consulta a tu responsable de cumplimiento o asesor jurídico para determinar el tratamiento aplicable a
              cada operación.
            </p>
          </div>
        </section>

        {/* ── 06. Acumulación de operaciones ────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="acumulacion" style={{ background: OFF_WHITE }} aria-labelledby="acumulacion-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow tone="reg">Acumulación</SectionEyebrow>
            <h2 id="acumulacion-heading" className="text-3xl md:text-4xl font-black mb-6" style={{ color: NAVY }}>
              No siempre se trata de una sola operación
            </h2>
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: TEXT_MUTED }}>
              El Reglamento contempla la acumulación de actos u operaciones realizados con un mismo cliente durante
              un periodo de hasta seis meses para determinar el supuesto de presentación de Avisos conforme a las
              reglas aplicables.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mb-8">
              <div className="rounded-xl px-5 py-3 bg-white font-bold text-[14px]" style={{ border: "1px solid #E2E8EF", color: NAVY }}>
                Cliente
              </div>
              {["Operación 1", "Operación 2", "Operación 3"].map((op) => (
                <div key={op} className="flex items-center gap-2 sm:gap-2">
                  <span className="hidden sm:inline text-xl" style={{ color: TEAL }} aria-hidden="true">→</span>
                  <span className="sm:hidden text-xl" style={{ color: TEAL }} aria-hidden="true">↓</span>
                  <div
                    className="rounded-xl px-4 py-2.5 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    style={{ background: GRAY_LIGHT, color: TEXT_MUTED, border: "1px solid #E2E8EF" }}
                  >
                    {op}
                  </div>
                </div>
              ))}
              <span className="hidden sm:inline text-xl" style={{ color: AUTO_ORANGE }} aria-hidden="true">→</span>
              <span className="sm:hidden text-xl" style={{ color: AUTO_ORANGE }} aria-hidden="true">↓</span>
              <div
                className="rounded-xl px-4 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: AUTO_GRADIENT }}
              >
                Acumulación
              </div>
              <span className="hidden sm:inline text-xl" style={{ color: AUTO_ORANGE }} aria-hidden="true">→</span>
              <span className="sm:hidden text-xl" style={{ color: AUTO_ORANGE }} aria-hidden="true">↓</span>
              <div className="rounded-xl px-4 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: NAVY }}>
                Umbral de aviso
              </div>
            </div>

            <p className="text-[13px] leading-relaxed max-w-xl mx-auto" style={{ color: TEXT_MUTED }}>
              Esta sección es contenido educativo sobre el marco regulatorio. La acumulación de operaciones para
              efectos de aviso es responsabilidad del sujeto obligado.
            </p>
          </div>
        </section>

        {/* ── 07. Timeline regulatorio ───────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY }} aria-labelledby="timeline-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow dark tone="reg">De dónde vienen los cambios</SectionEyebrow>
              <h2 id="timeline-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
                La regulación antilavado está evolucionando. El expediente también.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {TIMELINE_ITEMS.map((hito, i) => (
                <RevealOnScroll
                  key={hito.id}
                  delayMs={i * 120}
                  className="text-left pt-5 rounded-b-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderTop: `3px solid ${hito.color}` }}
                >
                  <p className="text-xl font-black mb-3" style={{ color: hito.color }}>
                    {hito.fecha}
                  </p>
                  <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{hito.titulo}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-3">{hito.texto}</p>
                  {hito.destacados && (
                    <ul className="space-y-1.5">
                      {hito.destacados.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-[12.5px] text-white/55">
                          <DotIcon style={{ background: hito.color }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-12 max-w-2xl mx-auto rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="text-[13px] leading-relaxed text-white/70">
                Las obligaciones de las fracciones VII a XI del Artículo 18 cuentan con un régimen transitorio sujeto
                a los plazos establecidos en las Reglas de Carácter General. La reforma también incorpora nuevas
                obligaciones relacionadas con gestión de riesgos, monitoreo, capacitación, mecanismos automatizados y
                auditoría, cuyo alcance y entrada en vigor debe analizarse junto con la regulación secundaria
                aplicable.
              </p>
              <p className="text-[11.5px] text-white/40 mt-4">
                Contenido revisado con base en fuentes oficiales disponibles. La regulación puede actualizarse.
              </p>
            </div>
          </div>
        </section>

        {/* ── 08. Qué significa identificar (el problema) ───────────────────── */}
        <section className="py-20 bg-white scroll-mt-20" id="que-significa-identificar" aria-labelledby="problema-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>El problema</SectionEyebrow>
              <h2 id="problema-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Una copia de la INE no necesariamente demuestra quién estuvo frente a ti.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
              >
                <p className="text-[12px] font-bold uppercase tracking-wide mb-4" style={{ color: TEXT_MUTED }}>
                  Una agencia recibe
                </p>
                <ul className="space-y-2.5">
                  {["Identificación", "Comprobante", "Datos personales", "Contrato firmado"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14.5px]" style={{ color: NAVY }}>
                      <CheckIcon style={{ color: TEAL }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: NAVY, border: `1px solid ${AUTO_ORANGE}40` }}
              >
                <p className="text-[12px] font-bold uppercase tracking-wide mb-4" style={{ color: "#FFC98A" }}>
                  Pero posteriormente necesita demostrar
                </p>
                <ul className="space-y-2.5">
                  {IDENTIFICACION_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13.5px] text-white/80">
                      <DotIcon style={{ background: AUTO_ORANGE }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-[17px] font-bold mt-12 max-w-2xl mx-auto leading-relaxed" style={{ color: NAVY }}>
              Ahí aparece la diferencia entre capturar documentos e identificar realmente al cliente.
            </p>
          </div>
        </section>

        {/* ── 09. Suplantación de identidad ─────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="suplantacion" style={{ background: OFF_WHITE }} aria-labelledby="suplantacion-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Identidad y prevención de fraude</SectionEyebrow>
              <h2 id="suplantacion-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Cumplimiento y prevención de fraude empiezan en el mismo lugar: la identidad.
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                La LFPIORPI establece la obligación de identificar y verificar al cliente. La tecnología puede
                fortalecer ese proceso frente a intentos de suplantación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="rounded-2xl p-6 sm:p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: "1px solid #E2E8EF" }}
              >
                <p className="text-[12px] font-bold uppercase tracking-wide mb-5" style={{ color: TEXT_MUTED }}>
                  Proceso tradicional
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {TRADITIONAL_FLOW.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="text-[13.5px] font-semibold" style={{ color: NAVY }}>
                        {step}
                      </span>
                      {i < TRADITIONAL_FLOW.length - 1 && (
                        <span className="text-sm" style={{ color: "#94A3B8" }} aria-hidden="true">↓</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color: "#B45309" }}>
                  Problemas potenciales
                </p>
                <ul className="space-y-2">
                  {TRADITIONAL_PROBLEMS.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: TEXT_MUTED }}>
                      <DotIcon style={{ background: "#F59E0B" }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: NAVY, border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="text-[12px] font-bold uppercase tracking-wide mb-5" style={{ color: "#7FE8EC" }}>
                  Proceso digital
                </p>
                <div className="flex flex-col gap-2">
                  {DIGITAL_FLOW.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="text-[13.5px] font-semibold text-white">{step}</span>
                      {i < DIGITAL_FLOW.length - 1 && (
                        <span className="text-sm" style={{ color: TEAL }} aria-hidden="true">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[12.5px] leading-relaxed max-w-2xl mx-auto text-center mt-8" style={{ color: TEXT_MUTED }}>
              La biometría y la prueba de vida son herramientas tecnológicas para fortalecer la verificación de
              identidad; su utilización específica no debe presentarse como una obligación textual de la LFPIORPI.
            </p>
          </div>
        </section>

        {/* ── 10. Proceso KYC de JAAK ────────────────────────────────────────── */}
        <section className="py-20 bg-white scroll-mt-20" id="proceso-kyc" aria-labelledby="proceso-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Proceso KYC JAAK</SectionEyebrow>
              <h2 id="proceso-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Un flujo digital para identificar al comprador
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                Captura, validación, consultas y expediente, integrados en el mismo proceso.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              {[
                { num: "01", title: "Captura", desc: "El cliente sube su identificación oficial y toma una selfie con prueba de vida." },
                { num: "02", title: "Validación", desc: "OCR y biometría facial comparan documento y rostro, y evalúan vigencia documental." },
                { num: "03", title: "Consultas", desc: "Consulta de fuentes de identidad disponibles y screening de listas de riesgo configurado." },
                { num: "04", title: "Expediente", desc: "Los resultados se organizan y conservan en un expediente digital auditable." },
              ].map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
                >
                  <div className="text-3xl font-black mb-3" style={gradientTextStyle}>{step.num}</div>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: NAVY }}>{step.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: TEXT_MUTED }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={VERIFICACION_IDENTIDAD_URL}
                onClick={() => gtmEvent("automotive_lfpiorpi_kyc_cta", { location: "proceso_kyc", page: PAGE })}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ background: NAVY, color: "white" }}
              >
                Ver cómo funciona un KYC automotriz
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. Identidad vs Screening ─────────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="identidad-vs-screening" style={{ background: OFF_WHITE }} aria-labelledby="identidad-screening-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Dos frentes distintos</SectionEyebrow>
              <h2 id="identidad-screening-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Verificar identidad y analizar riesgo no son lo mismo
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="rounded-2xl p-6 sm:p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: `2px solid ${TEAL}` }}
              >
                <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0E7C82" }}>
                  01 · Identidad
                </p>
                <h3 className="text-lg font-bold mb-1" style={{ color: NAVY }}>
                  Objetivo: confirmar quién es la persona
                </h3>
                <p className="text-[13px] leading-relaxed mb-5" style={{ color: TEXT_MUTED }}>
                  Posibles componentes JAAK:
                </p>
                <ul className="space-y-2 mb-5">
                  {IDENTITY_COMPONENTS.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[13.5px]" style={{ color: NAVY }}>
                      <CheckIcon style={{ color: TEAL }} />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] leading-relaxed italic" style={{ color: TEXT_MUTED }}>
                  Los datos del documento dejan de ser solamente información capturada y pueden contrastarse contra
                  fuentes oficiales disponibles.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 sm:p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: "1px solid #E2E8EF" }}
              >
                <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: TEXT_MUTED }}>
                  02 · Riesgo
                </p>
                <h3 className="text-lg font-bold mb-1" style={{ color: NAVY }}>
                  Objetivo: conocer si existen elementos que requieren revisión
                </h3>
                <p className="text-[13px] leading-relaxed mb-5" style={{ color: TEXT_MUTED }}>
                  Componentes:
                </p>
                <ul className="space-y-2">
                  {RISK_COMPONENTS.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[13.5px]" style={{ color: NAVY }}>
                      <CheckIcon style={{ color: "#655DC6" }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[13px] text-center leading-relaxed max-w-2xl mx-auto mt-8" style={{ color: TEXT_MUTED }}>
              INE y RENAPO pertenecen al frente de validación de identidad/datos — no son listas de riesgo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <Link href={CONSULTAS_OFICIALES_URL} className="text-[13px] font-semibold" style={{ color: NAVY }}>
                Consultas oficiales de identidad →
              </Link>
              <Link href={LISTAS_RIESGO_URL} className="text-[13px] font-semibold" style={{ color: NAVY }}>
                Listas de riesgo PLD/AML →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 12. Expediente integrado ────────────────────────────────────────── */}
        <section className="py-20 bg-white scroll-mt-20" id="expediente-integrado" aria-labelledby="expediente-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Expediente integrado</SectionEyebrow>
              <h2 id="expediente-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Del comprador al expediente, sin separar la evidencia.
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                Cada validación genera información. El valor está en conservarla de forma estructurada y relacionada
                con la operación.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10" style={{ border: "1px solid #E2E8EF" }}>
              <div className="px-6 py-4" style={{ background: NAVY }}>
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/50">Expediente</p>
                <p className="text-white font-bold text-[15px]">Cliente #AUT-2026-01872</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#E2E8EF" }}>
                {EXPEDIENTE_GROUPS.map((group) => (
                  <div key={group.titulo} className="bg-white p-5 transition-colors duration-300 hover:bg-[#FFF6F0]">
                    <p className="text-[12px] font-bold uppercase tracking-wide mb-3" style={{ color: "#0E7C82" }}>
                      {group.titulo}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[12.5px]" style={{ color: NAVY }}>
                          <CheckIcon style={{ color: TEAL }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: NAVY }}>
              <p className="text-[15px] text-white/60 mb-1">La pregunta no es únicamente:</p>
              <p className="text-lg sm:text-xl font-bold text-white mb-4">&ldquo;¿Pediste una identificación?&rdquo;</p>
              <p className="text-[15px] text-white/60 mb-1">La pregunta es:</p>
              <p className="text-xl sm:text-2xl font-black mb-8" style={{ color: TEAL }}>
                &ldquo;¿Puedes demostrar cómo identificaste a ese cliente?&rdquo;
              </p>
              <Link
                href={KYC_DEMO_URL}
                onClick={() => gtmEvent("automotive_lfpiorpi_kyc_cta", { location: "expediente", page: PAGE })}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,107,53,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: AUTO_GRADIENT }}
              >
                Ver un ejemplo de expediente
              </Link>
            </div>
          </div>
        </section>

        {/* ── 13. Conservación / trazabilidad ────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="conservacion" style={{ background: OFF_WHITE }} aria-labelledby="conservacion-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow tone="reg">Conservación</SectionEyebrow>
            <h2 id="conservacion-heading" className="text-3xl md:text-4xl font-black mb-6" style={{ color: NAVY }}>
              Evidencia que debe seguir disponible años después
            </h2>
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: TEXT_MUTED }}>
              La LFPIORPI contempla la conservación de información y documentación soporte por 10 años para
              operaciones realizadas bajo el régimen correspondiente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              {["Hoy · Identificación", "+1 año", "+5 años", "+10 años", "Auditoría / requerimiento"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className="rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      background: i === arr.length - 1 ? AUTO_GRADIENT : "white",
                      color: i === arr.length - 1 ? "white" : NAVY,
                      border: i === arr.length - 1 ? "none" : "1px solid #E2E8EF",
                    }}
                  >
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <>
                      <span className="hidden sm:inline text-xl" style={{ color: TEAL }} aria-hidden="true">→</span>
                      <span className="sm:hidden text-xl" style={{ color: TEAL }} aria-hidden="true">↓</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[16px] font-bold mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: NAVY }}>
              El reto no es solamente verificar hoy. Es poder reconstruir el proceso cuando sea necesario.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] font-medium" style={{ color: TEXT_MUTED }}>
              <span>Expediente digital</span>
              <span aria-hidden="true">·</span>
              <span>Trazabilidad</span>
              <span aria-hidden="true">·</span>
              <span>Búsqueda</span>
              <span aria-hidden="true">·</span>
              <span>Integridad</span>
              <span aria-hidden="true">·</span>
              <span>Evidencia descargable</span>
            </div>
            <div className="mt-6">
              <Link href={GESTION_EVIDENCIA_URL} className="text-[13px] font-semibold" style={{ color: NAVY }}>
                Conocer gestión de evidencia JAAK →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. Responsabilidades JAAK vs sujeto obligado ──────────────────── */}
        <section className="py-20 bg-white scroll-mt-20" id="responsabilidades" aria-labelledby="responsabilidades-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Responsabilidades</SectionEyebrow>
              <h2 id="responsabilidades-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Qué automatiza JAAK y qué sigue siendo tuyo
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ background: NAVY }}>
                <h3 className="text-[15px] font-bold text-white mb-5">JAAK puede ayudarte a</h3>
                <ul className="space-y-3">
                  {JAAK_PUEDE_AYUDAR.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-white/85">
                      <CheckIcon style={{ color: TEAL }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}
              >
                <h3 className="text-[15px] font-bold mb-5" style={{ color: NAVY }}>
                  La organización sigue siendo responsable de
                </h3>
                <ul className="space-y-3">
                  {RESPONSABILIDAD_ORGANIZACION.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px]" style={{ color: NAVY }}>
                      <DotIcon style={{ background: "#655DC6", marginTop: "0.4rem" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. Firma digital ───────────────────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="firma-digital" style={{ background: OFF_WHITE }} aria-labelledby="firma-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow>Firma digital</SectionEyebrow>
            <h2 id="firma-heading" className="text-3xl md:text-4xl font-black mb-6" style={{ color: NAVY }}>
              Identifica al cliente. Después vincula esa identidad al documento que firma.
            </h2>
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: TEXT_MUTED }}>
              Después del KYC, el flujo puede continuar hacia la firma de contratos de compraventa, autorizaciones,
              consentimientos, documentos de entrega, financiamiento cuando corresponda y anexos contractuales, con
              Firma Digital NOM-151 y sello de tiempo.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {["Identidad", "Validación", "Contrato", "Firma", "Evidencia", "Expediente"].map((step, i, arr) => {
                const isPayoff = step === "Firma" || step === "Evidencia";
                return (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className="rounded-xl px-4 py-2.5 text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      style={
                        isPayoff
                          ? { background: AUTO_GRADIENT, color: "white" }
                          : { background: "white", border: "1px solid #E2E8EF", color: NAVY }
                      }
                    >
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-lg" style={{ color: TEAL }} aria-hidden="true">→</span>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-[12.5px] leading-relaxed max-w-xl mx-auto mb-8" style={{ color: TEXT_MUTED }}>
              La firma digital no sustituye el Aviso LFPIORPI ni, por sí sola, satisface las obligaciones de
              identificación.
            </p>

            <Link
              href={FIRMA_DEMO_URL}
              onClick={() => gtmEvent("automotive_lfpiorpi_signature_cta", { location: "firma_digital", page: PAGE })}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: NAVY, color: "white" }}
            >
              Ver demo de Firma NOM-151
            </Link>
          </div>
        </section>

        {/* ── 16. Simulador de umbrales ───────────────────────────────────────── */}
        <section className="py-20 bg-white scroll-mt-20" id="simulador" aria-labelledby="simulador-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <SectionEyebrow tone="reg">Simulador</SectionEyebrow>
              <h2 id="simulador-heading" className="text-3xl md:text-4xl font-black mb-4" style={{ color: NAVY }}>
                ¿Qué obligación puede activarse según el monto?
              </h2>
            </div>
            <ThresholdSimulator />
          </div>
        </section>

        {/* ── 17. Casos por perfil de cliente ────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="perfiles" style={{ background: OFF_WHITE }} aria-labelledby="perfiles-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Según el perfil del cliente</SectionEyebrow>
              <h2 id="perfiles-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                El proceso se ajusta a quién compra
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PROFILE_CARDS.map((card) => {
                const isRisk = card.id === "riesgo";
                return (
                  <div
                    key={card.id}
                    className="rounded-2xl p-6 sm:p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ border: isRisk ? `1px solid ${AUTO_ORANGE}55` : "1px solid #E2E8EF" }}
                  >
                    <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>
                      {card.titulo}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: TEXT_MUTED }}>
                      {card.texto}
                    </p>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: NAVY }}>
                          <CheckIcon style={{ color: isRisk ? AUTO_ORANGE : TEAL }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 18. CTA de conversión ───────────────────────────────────────────── */}
        <section className="py-20 scroll-mt-20" id="hablemos" style={{ background: NAVY }} aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow dark>Siguiente paso</SectionEyebrow>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Elige cómo quieres avanzar
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed">
                Revisa qué capas de identidad, screening, firma y evidencia puedes integrar a tu operación.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    gtmEvent("automotive_lfpiorpi_kyc_cta", { location: "cta_paths_low", page: PAGE });
                    scrollToId("expediente-integrado");
                  }}
                  className="w-full text-left rounded-2xl p-5 transition-all hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: "#7FE8EC" }}>
                    Intención baja
                  </p>
                  <p className="text-white font-semibold text-[15px]">Entender qué información necesita mi expediente</p>
                </button>

                <Link
                  href={KYC_DEMO_URL}
                  onClick={() => gtmEvent("automotive_lfpiorpi_kyc_cta", { location: "cta_paths_medium", page: PAGE })}
                  className="block rounded-2xl p-5 transition-all hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: "#7FE8EC" }}>
                    Intención media
                  </p>
                  <p className="text-white font-semibold text-[15px]">Ver cómo funciona un KYC automotriz</p>
                </Link>

                <a
                  href={SCHEDULE_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtmEvent("automotive_lfpiorpi_kyc_cta", { location: "cta_paths_high", page: PAGE })}
                  className="block rounded-2xl p-5 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,107,53,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ background: AUTO_GRADIENT }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-wide mb-1 text-white/80">
                    Intención alta
                  </p>
                  <p className="font-bold text-[15px]">Hablar con un especialista</p>
                </a>

                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtmEvent("automotive_lfpiorpi_whatsapp", { location: "cta_paths", page: PAGE })}
                  className="flex items-center justify-center gap-2 rounded-2xl p-4 text-white font-semibold text-[14px] transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ background: "#25D366" }}
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
                  </svg>
                  Escríbenos por WhatsApp
                </a>
              </div>

              <AutomotrizContactForm />
            </div>
          </div>
        </section>

        {/* ── 19. FAQ ─────────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#F5F7FA" }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-center mb-10" style={{ color: NAVY }}>
              Preguntas frecuentes
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── 20. Fuentes oficiales ───────────────────────────────────────────── */}
        <section className="py-20" style={{ background: GRAY_LIGHT }} aria-labelledby="fuentes-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <SectionEyebrow tone="reg">Fuentes oficiales</SectionEyebrow>
              <h2 id="fuentes-heading" className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Fuentes oficiales consultadas
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                La información presentada en esta página es un resumen ejecutivo y orientativo. Consulta siempre las
                disposiciones oficiales para conocer su texto completo, alcance, excepciones y aplicación
                específica.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FUENTES_OFICIALES.map((f) => (
                <div
                  key={f.titulo}
                  className="rounded-2xl p-6 bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: "1px solid #E2E8EF" }}
                >
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

        {/* ── 21. Disclaimer ──────────────────────────────────────────────────── */}
        <section className="py-10 bg-white" aria-label="Aviso legal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl p-5" style={{ background: GRAY_LIGHT, border: "1px solid #E2E8EF" }}>
              <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: TEXT_MUTED }}>
                Aviso
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: TEXT_MUTED }}>
                Información preparada con fines informativos con base en fuentes oficiales disponibles al{" "}
                {new Date(automotiveLfpiorpi2026.legalReviewDate + "T00:00:00").toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                . No constituye asesoría jurídica, fiscal o de cumplimiento. Las obligaciones aplicables dependen de
                las características de cada operación y pueden modificarse por cambios normativos. Consulta siempre
                a tu responsable de cumplimiento o asesor jurídico.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center pb-4">
          <Link href={CONTACTO_URL} className="text-[13px] font-semibold" style={{ color: TEXT_MUTED }}>
            ¿Prefieres el formulario general de contacto? →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
