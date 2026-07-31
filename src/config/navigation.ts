/**
 * Fuente única de verdad de la navegación global (header desktop + móvil).
 *
 * Fase 1A: este archivo reproduce fielmente el contenido y los destinos que
 * ya existen en producción — no reorganiza categorías todavía. Los campos
 * `status` y `relatedTo` quedan preparados para la Fase 1B (ver PENDING
 * CATEGORIES abajo), pero no alteran lo que se renderiza hoy.
 *
 * `visibility.desktop` / `visibility.mobile` reproducen intencionalmente
 * algunas asimetrías que ya existían entre el mega menú de escritorio y el
 * acordeón móvil (ver notas inline). No se "corrigieron" esas asimetrías en
 * Fase 1A para no introducir cambios visibles no solicitados.
 */

export type NavStatus = "active" | "pending";

export interface NavVisibility {
  desktop: boolean;
  mobile: boolean;
}

export interface NavLink {
  id: string;
  label: string;
  href: string | null;
  description?: string;
  /** Atributo `d` de un <path> SVG, viewBox 0 0 24 24, strokeWidth 1.5. */
  icon?: string;
  status: NavStatus;
  visibility: NavVisibility;
  /** IDs de otros NavLink con los que este ítem está relacionado (Fase 1B). */
  relatedTo?: string[];
}

export interface NavColumnLinks {
  type: "links";
  id: string;
  heading?: string;
  items: NavLink[];
}

export interface NavColumnBadges {
  type: "badges";
  id: string;
  heading: string;
  items: { name: string; caption: string }[];
}

export interface NavColumnChecklist {
  type: "checklist";
  id: string;
  heading: string;
  items: string[];
}

/** Columna vacía usada solo para conservar el conteo de grid-cols original. */
export interface NavColumnSpacer {
  type: "spacer";
  id: string;
}

export type NavColumn = NavColumnLinks | NavColumnBadges | NavColumnChecklist | NavColumnSpacer;

export interface MegaMenuCTA {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export type MegaMenuId = "platform" | "solutions" | "compliance" | "resources";

export interface MegaMenuConfig {
  id: MegaMenuId;
  triggerLabel: string;
  status: NavStatus;
  columns: NavColumn[];
  /** Solo se renderiza en el panel de escritorio (MegaMenu.tsx). */
  cta?: MegaMenuCTA;
}

export interface SimpleNavLink {
  id: string;
  label: string;
  href: string;
  visibility: NavVisibility;
}

export interface GlobalCTA {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  variant: "primary" | "secondary" | "text";
  visibility: NavVisibility;
}

export function isPublished(entry: { status: NavStatus }): boolean {
  return entry.status === "active";
}

/* ────────────────────────────────────────────────────────────────────── */
/* Mega menús                                                             */
/* ────────────────────────────────────────────────────────────────────── */

export const megaMenus: MegaMenuConfig[] = [
  {
    id: "platform",
    triggerLabel: "Plataforma",
    status: "active",
    columns: [
      {
        type: "links",
        id: "platform-identidad",
        heading: "Identidad",
        items: [
          {
            id: "platform-verificacion-identidad",
            label: "Verificación de identidad",
            href: "/plataforma/verificacion-identidad",
            description: "KYC biométrico con prueba de vida",
            icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-kyc-demo",
            label: "Demo KYC + prueba $99",
            href: "/kyc-demo-autoservicio",
            description: "Mira el flujo y actívalo en autoservicio",
            icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      {
        type: "links",
        // Columna sin heading visible en el original (usa un "&nbsp;" como spacer).
        id: "platform-firma",
        items: [
          {
            id: "platform-firma-electronica",
            label: "Firma electrónica",
            href: "/plataforma/firma-electronica",
            description: "Firma con validez legal completa",
            icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-firma-simple",
            label: "Firma Simple",
            href: "/firma-electronica-simple",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-firma-nom151",
            label: "Firma Digital NOM-151",
            href: "/firma-electronica-nom-151",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-firma-efirma",
            label: "e.firma (SAT)",
            href: "/firma-electronica-efirma",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-firma-sello-tiempo",
            label: "Sello de Tiempo",
            href: "/firma-certificada-sello-tiempo",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-firma-biometrica",
            label: "Firma Digital NOM-151 + Biometría",
            href: "/firma-electronica-biometrica",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-firma-kyc",
            label: "Firma Digital NOM-151 + KYC",
            href: "/firma-electronica-kyc",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-signa-calculadora",
            label: "Calculadora de precios (Signa)",
            href: "/signa/calculadora",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-signa-comparacion",
            label: "Comparación de planes (Signa)",
            href: "/signa/comparacion",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "platform-gestion-evidencia",
            label: "Gestión de evidencia",
            href: "/plataforma/gestion-evidencia",
            description: "Auditoría y trazabilidad completa",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      {
        type: "badges",
        id: "platform-certificaciones",
        heading: "Certificaciones",
        items: [
          { name: "ISO 27001", caption: "Seguridad de información" },
          { name: "ISO 9001", caption: "Gestión de calidad" },
          { name: "iBeta", caption: "Prueba de vida certificada" },
        ],
      },
    ],
    cta: {
      heading: "¿Necesitas una evaluación?",
      description: "En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.",
      ctaLabel: "Solicitar revisión regulatoria",
      ctaHref: "/contacto",
    },
  },
  {
    id: "solutions",
    triggerLabel: "Soluciones",
    status: "active",
    columns: [
      {
        type: "links",
        id: "solutions-industria",
        heading: "Por industria",
        items: [
          {
            id: "sol-instituciones-financieras",
            label: "Instituciones financieras",
            href: "/soluciones/instituciones-financieras",
            description: "Onboarding conforme a regulación",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "sol-empresas-reguladas",
            label: "Empresas reguladas",
            href: "/soluciones/empresas-reguladas",
            description: "Control de identidad en procesos críticos",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "sol-operaciones-alto-riesgo",
            label: "Operaciones de alto riesgo",
            href: "/soluciones/operaciones-alto-riesgo",
            description: "Eliminación de procesos manuales",
            icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "sol-salud",
            label: "Sector salud",
            href: "/salud",
            description: "Firma y evidencia para hospitales y clínicas",
            icon: "M12 4.5c-2-2.5-6-2.5-8 0-2.5 3-1.5 7 2 10l6 5.5 6-5.5c3.5-3 4.5-7 2-10-2-2.5-6-2.5-8 0z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      {
        type: "links",
        id: "solutions-mas-sectores",
        heading: "Más sectores",
        items: [
          {
            id: "sol-bancos",
            label: "Bancos",
            href: "/bancos",
            description: "Biometría bancaria propia",
            icon: "M3 21h18M4 21V8l8-5 8 5v13M9 21v-6h6v6",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "sol-financieras",
            label: "Financieras",
            href: "/financieras",
            description: "SOFOMES, fintechs y fondos",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "sol-inmobiliarias",
            label: "Inmobiliarias",
            href: "/inmobiliarias",
            description: "Verificación en 30 segundos",
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      {
        type: "links",
        id: "solutions-casos-de-uso",
        heading: "Casos de uso",
        items: [
          {
            id: "sol-onboarding-digital",
            label: "Onboarding digital",
            href: "/soluciones/onboarding-digital",
            description: "Alta de clientes 100% remoto",
            icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
            status: "active",
            // Gap preexistente: el acordeón móvil actual no incluye este enlace
            // (sí está en Footer). Se conserva tal cual para no introducir un
            // cambio visible en Fase 1A. Candidato a corregir en Fase 1B.
            visibility: { desktop: true, mobile: false },
          },
          {
            id: "sol-firma-contratos",
            label: "Firma de contratos",
            href: "/soluciones/firma-contratos",
            description: "Contratos con validez legal",
            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
            status: "active",
            visibility: { desktop: true, mobile: false }, // ver nota arriba
          },
          {
            id: "sol-prevencion-fraude",
            label: "Prevención de fraude",
            href: "/soluciones/prevencion-fraude",
            description: "Detección en tiempo real",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            status: "active",
            visibility: { desktop: true, mobile: false }, // ver nota arriba
          },
        ],
      },
      {
        type: "checklist",
        id: "solutions-resultados",
        heading: "Resultados",
        items: [
          "Menor exposición a sanciones",
          "Menos retrabajo en auditorías",
          "Procesos repetibles y defendibles",
          "Escalabilidad sin riesgo",
        ],
      },
    ],
    cta: {
      heading: "¿Tu proceso resistiría una auditoría?",
      description: "Diseñado para organizaciones sujetas a supervisión regulatoria.",
      ctaLabel: "Solicitar revisión regulatoria",
      ctaHref: "/contacto",
    },
  },
  {
    id: "compliance",
    triggerLabel: "Cumplimiento",
    status: "active",
    columns: [
      {
        type: "links",
        id: "compliance-regulaciones",
        heading: "Regulaciones",
        items: [
          {
            id: "comp-lfpiorpi",
            label: "LFPIORPI",
            href: "/cumplimiento/lfpiorpi",
            description: "Actividades vulnerables Art. 17",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "comp-pld-aml",
            label: "PLD / AML",
            href: "/cumplimiento/actividades-vulnerables",
            description: "Umbrales y simulador 2026",
            icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "comp-cnbv",
            label: "CNBV",
            href: "/cumplimiento/cnbv",
            description: "Identificación remota no presencial",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "comp-listas-riesgo",
            label: "Listas de riesgo PLD/AML",
            href: "/listas-de-riesgo-pld-aml",
            description: "Screening AML: OFAC, PEP y SAT 69-B",
            icon: "M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z",
            status: "active",
            visibility: { desktop: true, mobile: true },
            // Fase 1B: este mismo ítem (mismo id, mismo href) se referenciará
            // también desde una futura categoría "Productos → Listas de
            // riesgo PLD/AML". No se duplica contenido: ambos accesos deben
            // apuntar a este único NavLink / a /listas-de-riesgo-pld-aml.
            relatedTo: ["pending:productos-listas-riesgo"],
          },
        ],
      },
      {
        type: "links",
        // Columna sin heading visible en el original (usa un "&nbsp;" como spacer).
        id: "compliance-mas-regulaciones",
        items: [
          {
            id: "comp-uif",
            label: "UIF",
            href: "/cumplimiento/uif",
            description: "Evidencia para requerimientos",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "comp-nom151",
            label: "NOM-151",
            href: "/cumplimiento/nom-151",
            description: "Firma electrónica con validez legal",
            icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      {
        type: "links",
        id: "compliance-informacion",
        heading: "Información",
        items: [
          {
            id: "comp-ver-todo",
            label: "Ver todo",
            href: "/cumplimiento",
            description: "Todas las regulaciones y certificaciones",
            icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "comp-seguridad",
            label: "Seguridad",
            href: "/seguridad",
            description: "ISO 27001 y protección de datos",
            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            status: "active",
            // Gap preexistente: no está en el acordeón móvil actual (sí en
            // Footer). Conservado tal cual en Fase 1A — ver nota de arriba.
            visibility: { desktop: true, mobile: false },
          },
        ],
      },
    ],
    cta: {
      heading: "¿Necesitas cumplir regulación?",
      description: "En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.",
      ctaLabel: "Solicitar revisión regulatoria",
      ctaHref: "/contacto",
    },
  },
  {
    id: "resources",
    triggerLabel: "Recursos",
    status: "active",
    columns: [
      {
        type: "links",
        id: "resources-aprende",
        heading: "Aprende",
        items: [
          {
            id: "res-centro-educativo",
            label: "Centro educativo",
            href: "/recursos",
            description: "Guías sobre cumplimiento digital",
            icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "res-docs",
            label: "Documentación",
            href: "/docs",
            description: "Guías técnicas y referencia API",
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
          {
            id: "res-blog",
            label: "Blog",
            href: "/blog",
            description: "Artículos sobre compliance e identidad",
            icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      {
        type: "links",
        id: "resources-empresa",
        heading: "Empresa",
        items: [
          {
            id: "res-nosotros",
            label: "Sobre nosotros",
            href: "/nosotros",
            description: "Nuestra misión y equipo",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            status: "active",
            // Gap preexistente: no está en el acordeón móvil actual (sí en
            // Footer). Conservado tal cual en Fase 1A.
            visibility: { desktop: true, mobile: false },
          },
          {
            id: "res-contacto",
            label: "Contacto",
            href: "/contacto",
            description: "Habla con nuestro equipo",
            icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            status: "active",
            visibility: { desktop: true, mobile: true },
          },
        ],
      },
      { type: "spacer", id: "resources-spacer" },
    ],
    cta: {
      heading: "¿Tienes preguntas?",
      description: "Nuestro equipo está listo para ayudarte con tu proyecto de identidad.",
      ctaLabel: "Contactar equipo",
      ctaHref: "/contacto",
    },
  },
];

/* ────────────────────────────────────────────────────────────────────── */
/* Enlace simple (sin dropdown)                                           */
/* ────────────────────────────────────────────────────────────────────── */

export const simpleNavLinks: SimpleNavLink[] = [
  {
    id: "precios",
    label: "Precios",
    href: "/precios",
    visibility: { desktop: true, mobile: true },
  },
];

/* ────────────────────────────────────────────────────────────────────── */
/* CTA globales del header (fuera de los mega menús)                      */
/* ────────────────────────────────────────────────────────────────────── */
/*
 * "Agendar demo" NO vive aquí: sigue siendo responsabilidad exclusiva de
 * UrgentBanner.tsx (banner fijo superior). El botón compacto "Demo" que
 * duplicaba ese CTA en Header.tsx se eliminó en Fase 1A.
 *
 * "Solicitar revisión regulatoria" tampoco se agrega como CTA global de
 * este cluster por instrucción explícita: no debe convertirse en un cuarto
 * CTA global. Sigue existiendo dentro de los mega menús y en el panel
 * móvil exactamente como antes — ver docs/fase-1a-report.md para el
 * inventario completo de dónde aparece.
 */
export const globalCTAs: GlobalCTA[] = [
  {
    id: "iniciar-sesion",
    label: "Iniciar sesión",
    href: "https://platform.jaak.ai",
    external: true,
    variant: "text",
    visibility: { desktop: true, mobile: true },
  },
  {
    id: "comprar",
    label: "Comprar",
    href: "/autoservicio",
    variant: "primary",
    visibility: { desktop: true, mobile: true },
  },
];

/* ────────────────────────────────────────────────────────────────────── */
/* Categorías pendientes (Fase 1B) — NO se renderizan en Fase 1A           */
/* ────────────────────────────────────────────────────────────────────── */
/*
 * Preparado internamente para que la Fase 1B pueda reorganizar "Plataforma"
 * en las 4 categorías comerciales del brief sin rediseñar el esquema de
 * datos. `status: "pending"` + `href: null` garantizan que ningún
 * componente de Fase 1A renderice esto como enlace público, cumpliendo la
 * instrucción de no publicar enlaces vacíos, "#", ni "próximamente".
 */
export const pendingCategories: MegaMenuConfig[] = [
  {
    id: "platform", // ocupará una columna dentro de "Productos" en Fase 1B
    triggerLabel: "Consultas oficiales",
    status: "pending",
    columns: [
      {
        type: "links",
        id: "pending-consultas-oficiales",
        items: [
          {
            id: "pending:consultas-oficiales",
            label: "Consultas oficiales",
            href: null,
            description: "INE, RENAPO/CURP — landing en preparación",
            status: "pending",
            visibility: { desktop: false, mobile: false },
          },
        ],
      },
    ],
  },
];
