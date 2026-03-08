"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- Scroll Reveal Hook ---
function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// --- Types ---
type ProductTab = "biometria" | "kyc-simplificado" | "firma-simple" | "firma-avanzada" | "firma-bio";

interface AutoservicioPlan {
  name: string;
  subtitle: string;
  quantity: number;
  unit: string;
  price: string;
  priceNote: string;
  unitPrice: string;
  overage: string;
  recommended?: boolean;
  ctaUrl?: string;
  description?: string;
  checks?: string[];
  support?: string;
}

// --- Constants ---
const AUTOSERVICIO_URL = "https://platform.jaak.ai/#/onboarding/plans";
const CONTACTO_URL = "/contacto";

const pricingData: Record<ProductTab, AutoservicioPlan[]> = {
  biometria: [
    {
      name: "Cobre",
      subtitle: "Prueba el servicio con 5 verificaciones de identidad.",
      quantity: 5,
      unit: "verificaciones",
      price: "$99",
      priceNote: "MXN / año",
      unitPrice: "$19.80/verif",
      overage: "Sin overages, se bloquea",
      ctaUrl: "https://platform.jaak.ai/#/onboarding/user-info",
      support: "Sin asignado",
      description: "Quieres conocer cómo funciona JAAK antes de comprometerte con un volumen mayor.",
      checks: [
        "5 verificaciones de identidad",
        "Soporte vía Chat",
        "Documentación de uso incluida",
        "Sin contrato ni Setup Fee",
        "100% desde la web — sin desarrollador",
      ],
    },
    {
      name: "Bronce",
      subtitle: "Plan de entrada para verificación anual básica.",
      quantity: 50,
      unit: "verificaciones",
      price: "$1,500",
      priceNote: "MXN / año",
      unitPrice: "$30.00/verif",
      overage: "$36.00/paq adicional",
      support: "Junior",
      description: "Verificas identidades de forma ocasional y buscas una solución simple sin trámites.",
      checks: [
        "50 verificaciones de identidad",
        "Soporte Chat o Email",
        "Documentación de uso incluida",
        "Sin contrato ni Setup Fee",
        "100% desde la web — sin desarrollador",
      ],
    },
    {
      name: "Plata",
      subtitle: "Plan profesional para verificación regular.",
      quantity: 100,
      unit: "verificaciones",
      price: "$2,800",
      priceNote: "MXN / año",
      unitPrice: "$28.00/verif",
      overage: "$33.60/paq adicional",
      recommended: true,
      support: "Junior/Mid",
      description: "Tu empresa tiene un flujo de onboarding digital y necesitas verificar hasta 100 identidades al año.",
      checks: [
        "100 verificaciones de identidad",
        "Soporte Chat o Email",
        "Documentación de uso incluida",
        "Sin contrato ni Setup Fee",
        "100% desde la web — sin desarrollador",
      ],
    },
    {
      name: "Oro",
      subtitle: "Plan empresarial para mayor volumen.",
      quantity: 250,
      unit: "verificaciones",
      price: "$6,625",
      priceNote: "MXN / año",
      unitPrice: "$26.50/verif",
      overage: "$31.80/paq adicional",
      support: "Mid",
      description: "Tu operación requiere verificaciones frecuentes y soporte disponible todos los días.",
      checks: [
        "250 verificaciones de identidad",
        "Soporte Chat o Email 12×7",
        "Documentación de uso incluida",
        "Sin contrato ni Setup Fee",
        "100% desde la web — sin desarrollador",
      ],
    },
    {
      name: "Platino",
      subtitle: "Mayor plan de autoservicio para alto volumen.",
      quantity: 500,
      unit: "verificaciones",
      price: "$12,500",
      priceNote: "MXN / año",
      unitPrice: "$25.00/verif",
      overage: "$30.00/paq adicional",
      support: "Mid",
      description: "Verificas identidades de forma constante y buscas el mejor precio por verificación.",
      checks: [
        "500 verificaciones de identidad",
        "Soporte Chat o Email 12×7",
        "Documentación de uso incluida",
        "Sin contrato ni Setup Fee",
        "100% desde la web — sin desarrollador",
      ],
    },
  ],
  "kyc-simplificado": [
    {
      name: "Cobre",
      subtitle: "Prueba el servicio con 5 verificaciones.",
      quantity: 5,
      unit: "verificaciones",
      price: "$99",
      priceNote: "MXN / año",
      unitPrice: "$19.80/verif",
      overage: "Sin overages, se bloquea",
      support: "Sin asignado",
    },
    {
      name: "Bronce",
      subtitle: "Plan de entrada para verificación básica.",
      quantity: 50,
      unit: "verificaciones",
      price: "$1,500",
      priceNote: "MXN / año",
      unitPrice: "$30.00/verif",
      overage: "$36.00/paq adicional",
      support: "Junior",
    },
    {
      name: "Plata",
      subtitle: "Plan profesional para verificación regular.",
      quantity: 100,
      unit: "verificaciones",
      price: "$2,800",
      priceNote: "MXN / año",
      unitPrice: "$28.00/verif",
      overage: "$33.60/paq adicional",
      recommended: true,
      support: "Junior/Mid",
    },
    {
      name: "Oro",
      subtitle: "Plan empresarial para mayor volumen.",
      quantity: 250,
      unit: "verificaciones",
      price: "$6,625",
      priceNote: "MXN / año",
      unitPrice: "$26.50/verif",
      overage: "$31.80/paq adicional",
      support: "Mid",
    },
    {
      name: "Platino",
      subtitle: "Mayor plan de autoservicio.",
      quantity: 500,
      unit: "verificaciones",
      price: "$12,500",
      priceNote: "MXN / año",
      unitPrice: "$25.00/verif",
      overage: "$30.00/paq adicional",
      support: "Mid",
    },
  ],
  "firma-simple": [
    {
      name: "Cobre",
      subtitle: "Trial con 10 firmas.",
      quantity: 10,
      unit: "firmas",
      price: "$49",
      priceNote: "MXN / año",
      unitPrice: "$4.90/firma",
      overage: "Sin overages, se bloquea",
      support: "Sin asignado",
    },
    {
      name: "Bronce",
      subtitle: "Plan básico de firma.",
      quantity: 50,
      unit: "firmas",
      price: "$400",
      priceNote: "MXN / año",
      unitPrice: "$8.00/firma",
      overage: "$9.60/paq adicional",
      support: "Junior",
    },
    {
      name: "Plata",
      subtitle: "Plan profesional de firma.",
      quantity: 100,
      unit: "firmas",
      price: "$700",
      priceNote: "MXN / año",
      unitPrice: "$7.00/firma",
      overage: "$8.40/paq adicional",
      recommended: true,
      support: "Junior/Mid",
    },
    {
      name: "Oro",
      subtitle: "Plan empresarial de firma.",
      quantity: 250,
      unit: "firmas",
      price: "$1,500",
      priceNote: "MXN / año",
      unitPrice: "$6.00/firma",
      overage: "$7.20/paq adicional",
      support: "Mid",
    },
    {
      name: "Platino",
      subtitle: "Mayor plan de firma.",
      quantity: 500,
      unit: "firmas",
      price: "$2,500",
      priceNote: "MXN / año",
      unitPrice: "$5.00/firma",
      overage: "$6.00/paq adicional",
      support: "Mid",
    },
  ],
  "firma-avanzada": [
    {
      name: "Cobre",
      subtitle: "Trial con 5 firmas NOM-151.",
      quantity: 5,
      unit: "firmas",
      price: "$99",
      priceNote: "MXN / año",
      unitPrice: "$19.80/firma",
      overage: "Sin overages, se bloquea",
      support: "Sin asignado",
    },
    {
      name: "Bronce",
      subtitle: "Plan básico NOM-151.",
      quantity: 50,
      unit: "firmas",
      price: "$750",
      priceNote: "MXN / año",
      unitPrice: "$15.00/firma",
      overage: "$18.00/paq adicional",
      support: "Junior",
    },
    {
      name: "Plata",
      subtitle: "Plan profesional NOM-151.",
      quantity: 100,
      unit: "firmas",
      price: "$1,400",
      priceNote: "MXN / año",
      unitPrice: "$14.00/firma",
      overage: "$16.80/paq adicional",
      recommended: true,
      support: "Junior/Mid",
    },
    {
      name: "Oro",
      subtitle: "Plan empresarial NOM-151.",
      quantity: 250,
      unit: "firmas",
      price: "$3,250",
      priceNote: "MXN / año",
      unitPrice: "$13.00/firma",
      overage: "$15.60/paq adicional",
      support: "Mid",
    },
    {
      name: "Platino",
      subtitle: "Mayor plan NOM-151.",
      quantity: 500,
      unit: "firmas",
      price: "$6,000",
      priceNote: "MXN / año",
      unitPrice: "$12.00/firma",
      overage: "$14.40/paq adicional",
      support: "Mid",
    },
  ],
  "firma-bio": [
    {
      name: "Cobre",
      subtitle: "Trial con 5 firmas NOM-151 + Bio.",
      quantity: 5,
      unit: "firmas",
      price: "$99",
      priceNote: "MXN / año",
      unitPrice: "$19.80/firma",
      overage: "Sin overages, se bloquea",
      support: "Sin asignado",
    },
    {
      name: "Bronce",
      subtitle: "Plan básico NOM-151 + Bio.",
      quantity: 50,
      unit: "firmas",
      price: "$1,500",
      priceNote: "MXN / año",
      unitPrice: "$30.00/firma",
      overage: "$36.00/paq adicional",
      support: "Junior",
    },
    {
      name: "Plata",
      subtitle: "Plan profesional NOM-151 + Bio.",
      quantity: 100,
      unit: "firmas",
      price: "$2,700",
      priceNote: "MXN / año",
      unitPrice: "$27.00/firma",
      overage: "$33.60/paq adicional",
      recommended: true,
      support: "Junior/Mid",
    },
    {
      name: "Oro",
      subtitle: "Plan empresarial NOM-151 + Bio.",
      quantity: 250,
      unit: "firmas",
      price: "$6,625",
      priceNote: "MXN / año",
      unitPrice: "$26.50/firma",
      overage: "$31.80/paq adicional",
      support: "Mid",
    },
    {
      name: "Platino",
      subtitle: "Mayor plan NOM-151 + Bio.",
      quantity: 500,
      unit: "firmas",
      price: "$12,500",
      priceNote: "MXN / año",
      unitPrice: "$25.00/firma",
      overage: "$30.00/paq adicional",
      support: "Mid",
    },
  ],
};

const tabLabels: Record<ProductTab, string> = {
  biometria: "KYC Tradicional",
  "kyc-simplificado": "KYC Simplificado",
  "firma-simple": "Firma Simple",
  "firma-avanzada": "Firma NOM-151",
  "firma-bio": "Firma NOM-151 + Bio",
};

const tabDescriptions: Record<ProductTab, string> = {
  biometria: "KYC Tradicional (42 tokens) con validez legal para regulados (CNBV, UIF, LFPIORPI).",
  "kyc-simplificado": "KYC Simplificado (30 tokens). Sin validez legal. No disponible en programa de Alianzas.",
  "firma-simple": "Firma electrónica simple para documentos que no requieren certificación avanzada.",
  "firma-avanzada": "Firma electrónica avanzada con cumplimiento NOM-151 y PSC certificado.",
  "firma-bio": "Firma electrónica avanzada NOM-151 con verificación biométrica integrada.",
};

const enterpriseTiers = [
  { range: "E1–E5", volume: "1,001–9,999 verif/mes", sla: "99.5%" },
  { range: "E6–E10", volume: "10,000–44,999 verif/mes", sla: "99.9%" },
  { range: "E11–E15", volume: "45,000–99,999 verif/mes", sla: "99.9%" },
  { range: "E16", volume: "100,000–249,999 verif/mes", sla: "99.99%" },
  { range: "E17", volume: "250,000–499,999 verif/mes", sla: "99.99%" },
];

const enterpriseConditions = [
  "Setup Fee único no reembolsable (monto en cotización)",
  "Facturación mensual esquema 80/20 · Neto 30 días",
  "Descuento pronto pago 15% si se paga días 1–10 del mes",
  "Cobro mínimo anual = tier inicial contratado",
  "Soporte 12×7 en español incluido en todos los tiers",
  "Tokens caducan a 12 meses",
];

const enterpriseAddons = [
  { name: "Priority 12×7", desc: "Cola prioritaria, P1 <30 min, P2 <4h" },
  { name: "Soporte 24×7 P1 on-call", desc: "Guardia crítica" },
  { name: "Canal dedicado", desc: "Slack/Teams exclusivo" },
  { name: "TAM/CSM técnico", desc: "QBR mensual, health checks" },
];

const allianceTiers = [
  { tier: "A1", name: "Base", volume: "500,000 – 749,999 verif" },
  { tier: "A2", name: "Nacional", volume: "750,000 – 999,999 verif" },
  { tier: "A3", name: "Corporativo", volume: "1,000,000 – 1,249,999 verif" },
  { tier: "A4", name: "Corporativo+", volume: "1,250,000 – 1,499,999 verif" },
  { tier: "A5", name: "Estratégico", volume: "≥ 1,500,000 verif · Sin límite" },
];

const allianceRequirements = [
  "Integración de JAAK dentro de un producto o plataforma propia",
  "Modelo activo de reventa o redistribución a terceros",
  "Volumen anual estimado ≥ 500,000 verificaciones",
  "Compromiso anual mínimo firmado (obligatorio)",
  "KYC Simplificado NO disponible en Alianzas",
  "Sin compromiso firmado → reclasificación automática a Enterprise",
];

const firmantesRules = [
  { modalidad: "Firma Simple", incluidos: "Hasta 4/documento", extra: "+$2.00 MXN/firmante" },
  { modalidad: "Firma NOM-151 + PSC", incluidos: "Hasta 4/documento", extra: "+$5.00 MXN/firmante" },
  { modalidad: "Firma NOM-151 + Biometría", incluidos: "Hasta 2/documento", extra: "+$12.00 MXN/firmante" },
];

const comparisonRows = [
  { feature: "Precio público", auto: "Desde $49 MXN", enterprise: "Cotización", alliance: "Cotización" },
  { feature: "Volumen mínimo", auto: "5 verif/año", enterprise: "≥ 1,001/mes", alliance: "≥ 500K/año" },
  { feature: "Contrato", auto: "No", enterprise: "Sí", alliance: "Sí + mínimo anual" },
  { feature: "Setup Fee", auto: "Sin setup fee", enterprise: "Único (cotización)", alliance: "Único (cotización)" },
  { feature: "SLA garantizado", auto: "No", enterprise: "99.5%–99.99%", alliance: "99.5%–99.99%" },
  { feature: "Soporte", auto: "Chat/Email", enterprise: "12×7 incluido", alliance: "24×7 prioritario" },
  { feature: "Facturación", auto: "100% prepago", enterprise: "Mensual 80/20", alliance: "Mensual 80/20" },
  { feature: "Descuento pronto pago", auto: "No aplica", enterprise: "15% días 1–10", alliance: "15% días 1–10" },
  { feature: "Comisionable (comercial)", auto: "No", enterprise: "Sí", alliance: "Sí" },
  { feature: "KYC Simplificado", auto: "Sí", enterprise: "Sí", alliance: "No" },
];

const faqItems = [
  {
    question: "¿Cuánto cuesta el KYC biométrico en México?",
    answer: "Autoservicio desde $99 MXN/año (5 verif, plan Cobre), sin setup fee. Precio unitario de $19.80 (Cobre) a $25.00 (Platino). Para más de 1,000 verif/mes: Enterprise con cotización personalizada.",
  },
  {
    question: "¿Cuánto cuesta la Firma Electrónica NOM-151?",
    answer: "Firma Simple desde $49 MXN/año (10 firmas). Firma NOM-151 desde $99 MXN/año (5 firmas, $19.80/firma) hasta $6,000 MXN (500 firmas, $12.00/firma). Firma NOM-151+Bio desde $99 MXN (5 firmas) hasta $12,500 MXN (500 firmas). Sin setup fee en Autoservicio.",
  },
  {
    question: "¿Qué pasa si supero mi volumen en Autoservicio?",
    answer: "Bronce a Platino pueden comprar paquetes adicionales al 120% del precio unitario. Cobre se bloquea al superar el límite. Si superas 1,000 verif/mes consistentemente, la migración a Enterprise es obligatoria.",
  },
  {
    question: "¿Los paquetes caducan o son reembolsables?",
    answer: "Vencen a 12 meses desde la compra. No son reembolsables. Setup Fees tampoco son reembolsables.",
  },
  {
    question: "¿JAAK cumple con LFPIORPI, CNBV y UIF?",
    answer: "Sí. LFPIORPI Art. 17, identificación remota CNBV, evidencia para UIF, NOM-151 con PSC certificado. Certificaciones: ISO 27001, ISO 9001, iBeta Liveness Nivel 2.",
  },
  {
    question: "¿Diferencia entre KYC Tradicional y KYC Simplificado?",
    answer: "Tradicional (42 tokens) tiene validez legal para regulados (CNBV, UIF, LFPIORPI). Simplificado (30 tokens) sin validez legal, no disponible en Alianzas.",
  },
  {
    question: "¿Cómo funciona la facturación Enterprise 80/20?",
    answer: "Mensual: 80% del estimado del mes actual + 20% real del mes anterior. Neto 30 días. Descuento 15% si se paga días 1–10. Cobro mínimo = tier inicial contratado aunque el consumo sea menor.",
  },
];

const trustBadges = [
  "ISO 27001",
  "ISO 9001",
  "iBeta Liveness Nivel 2",
  "NOM-151 + PSC",
  "CNBV / LFPIORPI / UIF",
  "NIST FRVT",
];

const autoservicioRules = [
  "Sin Setup Fee · Sin contrato · Pago 100% prepago (tarjeta)",
  "Paquetes caducan a 12 meses desde la compra · No reembolsables",
  "Overages: paquetes adicionales al 120% del precio unitario del plan",
  "Cobre: sin overages, se bloquea al superar límite · 1 cuenta por empresa/RFC",
  "Si superas 1,000 verif/mes consistentemente → migración a Enterprise obligatoria",
];

// --- Check icon reusable ---
function CheckIcon({ className = "w-4 h-4 text-[#1ecad3]" }: { className?: string }) {
  return (
    <svg className={`${className} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// --- Component ---
export default function PreciosClient() {
  const [activeTab, setActiveTab] = useState<ProductTab>("biometria");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll reveal refs
  const heroReveal = useScrollReveal<HTMLElement>(0.1);
  const profileReveal = useScrollReveal<HTMLElement>(0.1);
  const tabsReveal = useScrollReveal<HTMLElement>(0.1);
  const firmantesReveal = useScrollReveal<HTMLElement>(0.1);
  const enterpriseReveal = useScrollReveal<HTMLElement>(0.1);
  const allianceReveal = useScrollReveal<HTMLElement>(0.1);
  const comparisonReveal = useScrollReveal<HTMLElement>(0.1);
  const faqReveal = useScrollReveal<HTMLElement>(0.1);
  const ctaReveal = useScrollReveal<HTMLElement>(0.1);

  const currentPlans = pricingData[activeTab];

  const revealClass = (visible: boolean) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <>
      {/* ===== SECTION 1 · HERO ===== */}
      <section
        ref={heroReveal.ref}
        className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #212A45 0%, #0E1133 50%, #212A45 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${revealClass(heroReveal.isVisible)}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Identidad digital para cada escala de operación
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Desde startups que integran hoy hasta instituciones financieras con regulación crítica.
            </p>

            {/* Anchor prices */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { label: "KYC", price: "desde $99 MXN/año" },
                { label: "Firma Simple", price: "desde $49 MXN/año" },
                { label: "Firma NOM-151", price: "desde $99 MXN/año" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-xs text-white/60 uppercase tracking-wide font-semibold">{item.label}</p>
                  <p className="text-base font-bold text-white">{item.price}</p>
                  <p className="text-[10px] text-white/40">IVA no incluido</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="#autoservicio"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2DB6C1] text-white font-bold text-base rounded-lg hover:bg-[#25969f] transition-all hover:-translate-y-0.5"
              >
                Ver planes Autoservicio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href={CONTACTO_URL}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-base rounded-lg hover:bg-white/10 transition-all"
              >
                Hablar con un especialista
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/50">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#2DB6C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 · PROFILE SELECTOR ===== */}
      <section ref={profileReveal.ref} className="py-12 md:py-16 bg-[#F3F4F8]">
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(profileReveal.isVisible)}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#autoservicio"
              className="group bg-white rounded-2xl p-6 border-2 border-[#EEEEEE] hover:border-[#2DB6C1] hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="text-lg font-bold text-[#212A45]">Autoservicio</h3>
              </div>
              <p className="text-sm text-[#4A5568] mb-3">Sin contrato, activa hoy</p>
              <p className="text-xs text-[#64748B] mb-2">Hasta 500 verif/año</p>
              <p className="text-sm font-bold text-[#2DB6C1]">Precios visibles</p>
            </a>
            <a
              href="#enterprise"
              className="group bg-white rounded-2xl p-6 border-2 border-[#EEEEEE] hover:border-[#212A45] hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-lg font-bold text-[#212A45]">Enterprise</h3>
              </div>
              <p className="text-sm text-[#4A5568] mb-3">Operación regulada, SLA formal</p>
              <p className="text-xs text-[#64748B] mb-2">≥ 1,000 verif/mes</p>
              <p className="text-sm font-bold text-[#212A45]">Cotización</p>
            </a>
            <a
              href="#alianzas"
              className="group bg-white rounded-2xl p-6 border-2 border-[#EEEEEE] hover:border-[#212A45] hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤝</span>
                <h3 className="text-lg font-bold text-[#212A45]">Alianzas</h3>
              </div>
              <p className="text-sm text-[#4A5568] mb-3">Redistribuye JAAK en tu producto</p>
              <p className="text-xs text-[#64748B] mb-2">≥ 500,000 verif/año</p>
              <p className="text-sm font-bold text-[#212A45]">Cotización</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 · AUTOSERVICIO ===== */}
      <section id="autoservicio" ref={tabsReveal.ref} className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(tabsReveal.isVisible)}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Autoservicio web – Activa en minutos
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mx-auto">
              Ideal para startups, pruebas de concepto y operación de bajo volumen.
            </p>
          </div>

          {/* Global rules */}
          <div className="bg-[#F3F4F8] rounded-xl p-5 mb-10 max-w-4xl mx-auto">
            <h3 className="text-sm font-bold text-[#212A45] mb-3">Condiciones generales de Autoservicio</h3>
            <ul className="space-y-1.5">
              {autoservicioRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2 text-xs text-[#4A5568]">
                  <span className="text-[#2DB6C1] mt-0.5">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Tabs */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 bg-[#F3F4F8] rounded-xl p-1.5 w-full max-w-3xl">
              {(Object.keys(tabLabels) as ProductTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setExpandedCard(null); }}
                  className={`px-3 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all text-center ${
                    activeTab === tab
                      ? "bg-[#2DB6C1] text-white shadow-sm"
                      : "text-[#4A5568] hover:text-[#212A45] hover:bg-white/60"
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>

          {/* Tab description */}
          <p className="text-center text-sm text-[#64748B] mb-8 max-w-xl mx-auto">
            {tabDescriptions[activeTab]}
          </p>

          {/* KYC Simplificado warning */}
          {activeTab === "kyc-simplificado" && (
            <div className="max-w-2xl mx-auto mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-sm text-amber-800 font-semibold">Sin validez legal · No disponible en programa de Alianzas</p>
            </div>
          )}

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {currentPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-5 border-2 transition-all ${
                  plan.recommended
                    ? "border-[#2DB6C1] shadow-lg shadow-[#2DB6C1]/10"
                    : "border-[#EEEEEE] hover:border-[#2DB6C1]/30"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-3 py-1 bg-[#2DB6C1] text-white text-[10px] font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                      Más popular
                    </span>
                  </div>
                )}
                <div className="pt-2">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-[#212A45] uppercase tracking-wide mb-0.5">{plan.name}</h3>
                    <p className="text-xs text-[#64748B] mb-3">{plan.subtitle}</p>
                    <div className="mb-2">
                      <span className="text-2xl lg:text-[1.65rem] font-black text-[#212A45]">{plan.price}</span>
                      <span className="text-xs text-[#64748B] ml-1">{plan.priceNote}</span>
                      <p className="text-[10px] text-[#94A3B8] mt-1">IVA no incluido</p>
                    </div>
                    {/* Unit price & overage */}
                    <div className="bg-[#F3F4F8] rounded-lg p-2 mb-4 space-y-1">
                      <p className="text-[11px] text-[#4A5568]">
                        <strong>{plan.quantity}</strong> {plan.unit} · {plan.unitPrice}
                      </p>
                      <p className="text-[10px] text-[#64748B]">{plan.overage}</p>
                    </div>
                  </div>

                  {/* Expandable details */}
                  {(plan.description || plan.checks) && (
                    <>
                      <button
                        onClick={() => setExpandedCard(expandedCard === plan.name ? null : plan.name)}
                        className="flex items-center justify-center gap-1.5 w-full text-xs font-medium text-[#2DB6C1] hover:text-[#25969f] transition-colors mb-4"
                      >
                        {expandedCard === plan.name ? "Ocultar detalles" : "Ver detalles"}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${expandedCard === plan.name ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {expandedCard === plan.name && (
                        <div className="animate-fade-in-up">
                          {plan.description && (
                            <div className="mb-3 bg-[#F3F4F8] rounded-lg p-3">
                              <p className="text-[11px] font-semibold text-[#2DB6C1] mb-1">Este plan es para ti si...</p>
                              <p className="text-xs text-[#4A5568] leading-relaxed">{plan.description}</p>
                            </div>
                          )}
                          {plan.checks && (
                            <div className="space-y-2 mb-3 text-left">
                              {plan.checks.map((check) => (
                                <div key={check} className="flex items-start gap-2 text-xs text-[#4A5568]">
                                  <CheckIcon className="w-3.5 h-3.5 text-[#1ecad3] mt-0.5" />
                                  <span>{check}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {plan.support && (
                            <p className="text-[10px] text-[#64748B] mb-3">Soporte asignado: {plan.support}</p>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <Link
                    href={plan.ctaUrl || AUTOSERVICIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-2.5 rounded-lg font-semibold text-sm transition-all text-center ${
                      plan.recommended
                        ? "bg-[#2DB6C1] text-white hover:bg-[#25969f]"
                        : "bg-[#F3F4F8] text-[#212A45] hover:bg-[#E5E7EB]"
                    }`}
                  >
                    Iniciar Autoservicio
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SSR-rendered hidden content for SEO — all tabs as HTML */}
          <div className="sr-only" aria-hidden="false">
            {(Object.keys(pricingData) as ProductTab[]).map((tab) => (
              <div key={tab}>
                <h3>{tabLabels[tab]}</h3>
                <p>{tabDescriptions[tab]}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Plan</th><th>Precio anual</th><th>Volumen</th><th>Precio unitario</th><th>Overage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData[tab].map((plan) => (
                      <tr key={plan.name}>
                        <td>{plan.name}</td>
                        <td>{plan.price} {plan.priceNote}</td>
                        <td>{plan.quantity} {plan.unit}</td>
                        <td>{plan.unitPrice}</td>
                        <td>{plan.overage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#64748B]">
            Todos los precios en MXN + IVA. Sin Setup Fee. Sin comisión comercial.
          </p>
        </div>
      </section>

      {/* ===== SECTION 4 · FIRMANTES ===== */}
      <section ref={firmantesReveal.ref} className="py-12 md:py-16 bg-[#F3F4F8]">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(firmantesReveal.isVisible)}`}>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#212A45] mb-2">
              Firmantes por documento
            </h2>
            <p className="text-sm text-[#4A5568]">
              Aplica a todas las modalidades de firma. El &quot;volumen&quot; de cualquier plan = documentos firmados, no número de firmantes.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#212A45] text-white text-sm font-semibold">
              <div className="px-6 py-3">Modalidad</div>
              <div className="px-6 py-3 text-center">Firmantes incluidos</div>
              <div className="px-6 py-3 text-center">Firmante adicional</div>
            </div>
            {firmantesRules.map((row, idx) => (
              <div key={row.modalidad} className={`grid grid-cols-3 ${idx !== firmantesRules.length - 1 ? "border-b border-[#EEEEEE]" : ""}`}>
                <div className="px-6 py-3 text-sm font-medium text-[#212A45]">{row.modalidad}</div>
                <div className="px-6 py-3 text-center text-sm text-[#4A5568]">{row.incluidos}</div>
                <div className="px-6 py-3 text-center text-sm text-[#4A5568]">{row.extra}</div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-3">
            {firmantesRules.map((row) => (
              <div key={row.modalidad} className="bg-white rounded-xl border border-[#EEEEEE] p-4">
                <p className="font-semibold text-sm text-[#212A45] mb-2">{row.modalidad}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[#64748B]">Incluidos</p>
                    <p className="font-medium text-[#212A45]">{row.incluidos}</p>
                  </div>
                  <div>
                    <p className="text-[#64748B]">Adicional</p>
                    <p className="font-medium text-[#212A45]">{row.extra}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-[#94A3B8] mt-4">Precios + IVA no incluido</p>
        </div>
      </section>

      {/* ===== SECTION 5 · ENTERPRISE ===== */}
      <section id="enterprise" ref={enterpriseReveal.ref} className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(enterpriseReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Para operación crítica y regulada
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mx-auto">
              Precios por volumen desde E1 hasta E17. Cotización en menos de 24 horas hábiles.
            </p>
          </div>

          {/* Tier table */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="hidden md:block bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#212A45] text-white text-sm font-semibold">
                <div className="px-6 py-3">Tier</div>
                <div className="px-6 py-3 text-center">Volumen</div>
                <div className="px-6 py-3 text-center">SLA</div>
              </div>
              {enterpriseTiers.map((t, idx) => (
                <div key={t.range} className={`grid grid-cols-3 ${idx !== enterpriseTiers.length - 1 ? "border-b border-[#EEEEEE]" : ""}`}>
                  <div className="px-6 py-3 text-sm font-bold text-[#212A45]">{t.range}</div>
                  <div className="px-6 py-3 text-center text-sm text-[#4A5568]">{t.volume}</div>
                  <div className="px-6 py-3 text-center text-sm font-semibold text-[#2DB6C1]">{t.sla}</div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-3">
              {enterpriseTiers.map((t) => (
                <div key={t.range} className="bg-white rounded-xl border border-[#EEEEEE] p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm text-[#212A45]">{t.range}</p>
                    <p className="text-xs text-[#4A5568]">{t.volume}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#2DB6C1]">SLA {t.sla}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products available */}
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="text-sm font-bold text-[#212A45] mb-3 text-center">Productos disponibles en Enterprise</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["KYC Tradicional", "KYC Simplificado", "Firma Simple", "Firma NOM-151", "Firma NOM-151 + Biometría"].map((p) => (
                <span key={p} className="px-3 py-1.5 bg-[#F3F4F8] rounded-full text-xs font-medium text-[#4A5568]">{p}</span>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-[#F3F4F8] rounded-xl p-6">
              <h3 className="text-sm font-bold text-[#212A45] mb-3">Condiciones</h3>
              <ul className="space-y-2">
                {enterpriseConditions.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-[#4A5568]">
                    <CheckIcon className="w-3.5 h-3.5 text-[#1ecad3] mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F3F4F8] rounded-xl p-6">
              <h3 className="text-sm font-bold text-[#212A45] mb-3">Add-ons de soporte</h3>
              <ul className="space-y-3">
                {enterpriseAddons.map((a) => (
                  <li key={a.name} className="text-xs text-[#4A5568]">
                    <span className="font-semibold text-[#212A45]">{a.name}</span>
                    <span className="ml-1">— {a.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
                <p className="text-[10px] text-[#64748B]">SLA 99.9% requiere Priority 12×7</p>
                <p className="text-[10px] text-[#64748B]">SLA 99.99% requiere 24×7 + canal dedicado</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={CONTACTO_URL}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#212A45] text-white font-bold text-base rounded-lg hover:bg-[#0E1133] transition-all hover:-translate-y-0.5"
            >
              Solicitar cotización
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 · ALIANZAS ===== */}
      <section
        id="alianzas"
        ref={allianceReveal.ref}
        className="py-16 md:py-24 scroll-mt-32"
        style={{ background: "linear-gradient(135deg, #212A45 0%, #0E1133 50%, #212A45 100%)" }}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(allianceReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Integra JAAK en tu producto. Tú escalas, nosotros potenciamos.
            </h2>
          </div>

          {/* Alliance tier table */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-3 bg-white/10 text-white text-sm font-semibold">
                <div className="px-6 py-3">Tier</div>
                <div className="px-6 py-3 text-center">Nombre</div>
                <div className="px-6 py-3 text-center">Volumen anual</div>
              </div>
              {allianceTiers.map((t, idx) => (
                <div key={t.tier} className={`grid grid-cols-3 ${idx !== allianceTiers.length - 1 ? "border-b border-white/10" : ""}`}>
                  <div className="px-6 py-3 text-sm font-bold text-white">{t.tier}</div>
                  <div className="px-6 py-3 text-center text-sm text-white/80">{t.name}</div>
                  <div className="px-6 py-3 text-center text-sm text-white/60">{t.volume}</div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-3">
              {allianceTiers.map((t) => (
                <div key={t.tier} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{t.tier}</span>
                    <span className="text-sm font-semibold text-white/80">{t.name}</span>
                  </div>
                  <p className="text-xs text-white/50">{t.volume}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="max-w-2xl mx-auto mb-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-sm font-bold text-white mb-3">Requisitos del programa</h3>
            <ul className="space-y-2">
              {allianceRequirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="text-[#2DB6C1] mt-0.5">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              href={CONTACTO_URL}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/20 text-white font-bold text-base rounded-lg hover:bg-white/20 transition-all"
            >
              Aplicar como Partner
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 · COMPARATIVA ===== */}
      <section ref={comparisonReveal.ref} className="py-16 md:py-24 bg-white">
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(comparisonReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              ¿Qué modalidad es adecuada para ti?
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:block bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden">
            <div className="grid grid-cols-4 bg-[#212A45] text-white text-sm font-semibold">
              <div className="px-6 py-4">Característica</div>
              <div className="px-6 py-4 text-center">Autoservicio</div>
              <div className="px-6 py-4 text-center">Enterprise</div>
              <div className="px-6 py-4 text-center">Alianzas</div>
            </div>
            {comparisonRows.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 ${idx !== comparisonRows.length - 1 ? "border-b border-[#EEEEEE]" : ""}`}
              >
                <div className="px-6 py-4 font-medium text-[#212A45] text-sm">{row.feature}</div>
                <div className="px-6 py-4 text-center text-sm text-[#4A5568]">{row.auto}</div>
                <div className="px-6 py-4 text-center text-sm text-[#4A5568]">{row.enterprise}</div>
                <div className="px-6 py-4 text-center text-sm text-[#4A5568]">{row.alliance}</div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="bg-white rounded-xl border border-[#EEEEEE] p-4">
                <p className="font-semibold text-[#212A45] text-sm mb-3">{row.feature}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <p className="text-[#64748B] mb-1">Autoservicio</p>
                    <p className="font-medium text-[#212A45]">{row.auto}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#64748B] mb-1">Enterprise</p>
                    <p className="font-medium text-[#212A45]">{row.enterprise}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#64748B] mb-1">Alianzas</p>
                    <p className="font-medium text-[#212A45]">{row.alliance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 · FAQ ===== */}
      <section ref={faqReveal.ref} className="py-16 md:py-24 bg-[#F3F4F8]">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(faqReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#EEEEEE] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#212A45] pr-4">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#4A5568] leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        ref={ctaReveal.ref}
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #212A45 0%, #0E1133 50%, #212A45 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center ${revealClass(ctaReveal.isVisible)}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">
              Diseña tu infraestructura de identidad digital con responsabilidad
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={AUTOSERVICIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2DB6C1] text-white font-bold text-base rounded-lg hover:bg-[#25969f] transition-all hover:-translate-y-0.5"
              >
                Iniciar Autoservicio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={CONTACTO_URL}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-base rounded-lg hover:bg-white/10 transition-all"
              >
                Hablar con un especialista
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
