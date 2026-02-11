"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

type ProductTab = "biometria" | "firma" | "firma-bio";

interface AutoservicioPlan {
  name: string;
  verifications: string;
  price: string;
  priceNote: string;
  support: string;
  ideal: string;
  recommended?: boolean;
}

const pricingData: Record<ProductTab, AutoservicioPlan[]> = {
  biometria: [
    { name: "Cobre", verifications: "5", price: "$99", priceNote: "/ año", support: "Chat", ideal: "Pruebas" },
    { name: "Bronce", verifications: "50", price: "$1,500", priceNote: "/ año", support: "Chat / Email", ideal: "Microempresas" },
    { name: "Plata", verifications: "100", price: "$2,700", priceNote: "/ año", support: "Chat / Email", ideal: "PyMEs", recommended: true },
    { name: "Oro", verifications: "500", price: "$12,500", priceNote: "/ año", support: "Chat / Email", ideal: "Operación recurrente" },
  ],
  firma: [
    { name: "Cobre", verifications: "5", price: "$99", priceNote: "/ año", support: "Chat", ideal: "Pruebas" },
    { name: "Bronce", verifications: "50", price: "$1,200", priceNote: "/ año", support: "Chat / Email", ideal: "Microempresas" },
    { name: "Plata", verifications: "100", price: "$2,200", priceNote: "/ año", support: "Chat / Email", ideal: "PyMEs", recommended: true },
    { name: "Oro", verifications: "500", price: "$10,000", priceNote: "/ año", support: "Chat / Email", ideal: "Operación recurrente" },
  ],
  "firma-bio": [
    { name: "Cobre", verifications: "5", price: "$149", priceNote: "/ año", support: "Chat", ideal: "Pruebas" },
    { name: "Bronce", verifications: "50", price: "$2,500", priceNote: "/ año", support: "Chat / Email", ideal: "Microempresas" },
    { name: "Plata", verifications: "100", price: "$4,500", priceNote: "/ año", support: "Chat / Email", ideal: "PyMEs", recommended: true },
    { name: "Oro", verifications: "500", price: "$20,000", priceNote: "/ año", support: "Chat / Email", ideal: "Operación recurrente" },
  ],
};

const tabLabels: Record<ProductTab, string> = {
  biometria: "Biometría (KYC)",
  firma: "Firma Electrónica",
  "firma-bio": "Firma Avanzada + Biometría",
};

const enterprisePlans = [
  { name: "Inicial", volume: "5,000 – 8,000", setup: "$10,000", sla: "99.5%" },
  { name: "Crecimiento", volume: "8,001 – 40,000", setup: "$15,000", sla: "99.9%" },
  { name: "Profesional", volume: "40,001 – 80,000", setup: "$25,000", sla: "99.9%" },
  { name: "Empresarial", volume: "80,001 – 500,000", setup: "$40,000", sla: "99.99%" },
];

const allianceLevels = [
  { name: "Base", volume: "500k – 999k", setup: "$50,000" },
  { name: "Nacional", volume: "1M – 2.4M", setup: "$100,000" },
  { name: "Corporativo", volume: "2.5M – 4.9M", setup: "$200,000" },
  { name: "Estratégico", volume: "5M+", setup: "Cotización" },
];

const comparisonRows = [
  { feature: "Volumen", auto: "Bajo", enterprise: "Medio / Alto", alliance: "Muy alto" },
  { feature: "Contrato", auto: "No", enterprise: "Sí", alliance: "Sí" },
  { feature: "SLA", auto: "No garantizado", enterprise: "Hasta 99.99%", alliance: "Hasta 99.99%" },
  { feature: "Soporte", auto: "Chat", enterprise: "12×7", alliance: "24×7" },
  { feature: "Setup", auto: "No", enterprise: "Sí", alliance: "Sí" },
  { feature: "Modelo de facturación", auto: "Prepago anual", enterprise: "Mensual", alliance: "Mensual" },
];

const faqItems = [
  {
    question: "¿Qué pasa si supero mi volumen contratado?",
    answer: "En autoservicio, puedes hacer un upgrade inmediato al siguiente plan. En Enterprise y Alianzas, los excedentes se facturan al precio unitario acordado en tu contrato.",
  },
  {
    question: "¿Los tokens o verificaciones caducan?",
    answer: "Las verificaciones de autoservicio tienen vigencia de 12 meses desde la fecha de compra. En planes Enterprise y Alianzas, la vigencia se establece en el contrato.",
  },
  {
    question: "¿Hay descuentos por volumen?",
    answer: "Sí. En Enterprise y Alianzas, el precio por verificación disminuye conforme aumenta el volumen. También ofrecemos hasta 15% de descuento por pronto pago.",
  },
  {
    question: "¿Qué incluye el setup en Enterprise?",
    answer: "Incluye configuración de ambiente, integración técnica asistida, capacitación del equipo, definición de SLA y asignación de seniority de soporte dedicado.",
  },
  {
    question: "¿Cómo funciona el SLA?",
    answer: "El SLA define el nivel de disponibilidad garantizada de la plataforma. Si no se cumple, se aplican créditos según lo establecido en el contrato de servicio.",
  },
  {
    question: "¿Puedo cambiar de modalidad?",
    answer: "Sí. Puedes iniciar en autoservicio y migrar a Enterprise cuando tu operación lo requiera. Tu historial y configuración se mantienen.",
  },
  {
    question: "¿Puedo iniciar en autoservicio y migrar a Enterprise?",
    answer: "Por supuesto. Muchos de nuestros clientes Enterprise comenzaron en autoservicio. La migración es asistida por nuestro equipo sin interrupción del servicio.",
  },
];

// --- Simulator types and pricing engine ---
type SimProduct = "biometria" | "firma" | "firma-bio";

interface SimulatorResult {
  modalidad: string;
  plan: string;
  costoMensual: string;
  costoAnual: string;
  setup: string;
  precioUnitario: string;
  nota: string;
}

const SIM_PRODUCT_LABELS: Record<SimProduct, string> = {
  biometria: "Biometría (KYC)",
  firma: "Firma Electrónica",
  "firma-bio": "Firma Avanzada + Biometría",
};

function calculateEstimate(
  monthlyVolume: number,
  product: SimProduct,
  soporte247: boolean
): SimulatorResult | null {
  if (monthlyVolume <= 0) return null;

  const annualVolume = monthlyVolume * 12;

  // Base unit prices per product (MXN per verification)
  const unitPrices: Record<SimProduct, { auto: number; enterprise: number; alliance: number }> = {
    biometria:   { auto: 27, enterprise: 3.5, alliance: 1.8 },
    firma:       { auto: 22, enterprise: 2.8, alliance: 1.4 },
    "firma-bio": { auto: 45, enterprise: 5.0, alliance: 2.5 },
  };

  const prices = unitPrices[product];

  // --- AUTOSERVICIO (≤ 500 verif/año = ~42/mes) ---
  if (annualVolume <= 500) {
    let plan = "";
    let costoAnual = 0;
    let unitario = 0;

    // Map to actual plan pricing
    const autoPlans = pricingData[product];

    if (annualVolume <= 5) {
      plan = autoPlans[0].name; // Cobre
      costoAnual = parseFloat(autoPlans[0].price.replace(/[$,]/g, ""));
      unitario = costoAnual / 5;
    } else if (annualVolume <= 50) {
      plan = autoPlans[1].name; // Bronce
      costoAnual = parseFloat(autoPlans[1].price.replace(/[$,]/g, ""));
      unitario = costoAnual / 50;
    } else if (annualVolume <= 100) {
      plan = autoPlans[2].name; // Plata
      costoAnual = parseFloat(autoPlans[2].price.replace(/[$,]/g, ""));
      unitario = costoAnual / 100;
    } else {
      plan = autoPlans[3].name; // Oro
      costoAnual = parseFloat(autoPlans[3].price.replace(/[$,]/g, ""));
      unitario = costoAnual / 500;
    }

    const costoMensual = Math.round(costoAnual / 12);

    return {
      modalidad: "Autoservicio",
      plan: `${plan} – ${SIM_PRODUCT_LABELS[product]}`,
      costoMensual: `$${costoMensual.toLocaleString("es-MX")}`,
      costoAnual: `$${costoAnual.toLocaleString("es-MX")}`,
      setup: "Sin costo",
      precioUnitario: `~$${Math.round(unitario).toLocaleString("es-MX")}`,
      nota: "Pago anual anticipado. Sin contrato obligatorio.",
    };
  }

  // --- ENTERPRISE (501 – 500,000 verif/año) ---
  if (annualVolume <= 500_000) {
    let plan = "";
    let setupCost = 0;
    let sla = "";
    let unitario = prices.enterprise;

    if (annualVolume <= 8_000) {
      plan = "Inicial";
      setupCost = 10_000;
      sla = "99.5%";
      unitario = prices.enterprise * 1.15;
    } else if (annualVolume <= 40_000) {
      plan = "Crecimiento";
      setupCost = 15_000;
      sla = "99.9%";
      unitario = prices.enterprise;
    } else if (annualVolume <= 80_000) {
      plan = "Profesional";
      setupCost = 25_000;
      sla = "99.9%";
      unitario = prices.enterprise * 0.9;
    } else {
      plan = "Empresarial";
      setupCost = 40_000;
      sla = "99.99%";
      unitario = prices.enterprise * 0.78;
    }

    if (soporte247) unitario *= 1.15;

    const costoMensual = Math.round(monthlyVolume * unitario);
    const costoAnual = costoMensual * 12;

    return {
      modalidad: "Enterprise",
      plan: `${plan} – SLA ${sla}`,
      costoMensual: `$${costoMensual.toLocaleString("es-MX")}`,
      costoAnual: `$${costoAnual.toLocaleString("es-MX")}`,
      setup: `$${setupCost.toLocaleString("es-MX")} MXN (único)`,
      precioUnitario: `~$${unitario.toFixed(2)}`,
      nota: soporte247
        ? "Facturación mensual. Incluye soporte 24×7."
        : "Facturación mensual. Soporte 12×7 incluido. Add-on 24×7 disponible.",
    };
  }

  // --- ALIANZA (500k+) ---
  let nivel = "";
  let setupCost = 0;
  let unitario = prices.alliance;

  if (annualVolume <= 999_999) {
    nivel = "Base";
    setupCost = 50_000;
  } else if (annualVolume <= 2_400_000) {
    nivel = "Nacional";
    setupCost = 100_000;
    unitario *= 0.9;
  } else if (annualVolume <= 4_900_000) {
    nivel = "Corporativo";
    setupCost = 200_000;
    unitario *= 0.78;
  } else {
    nivel = "Estratégico";
    setupCost = 0;
    unitario *= 0.65;
  }

  const costoMensual = Math.round(monthlyVolume * unitario);
  const costoAnual = costoMensual * 12;

  return {
    modalidad: "Programa de Alianzas",
    plan: `Nivel ${nivel}`,
    costoMensual: `$${costoMensual.toLocaleString("es-MX")}`,
    costoAnual: `$${costoAnual.toLocaleString("es-MX")}`,
    setup: setupCost > 0 ? `$${setupCost.toLocaleString("es-MX")} MXN (único)` : "Cotización personalizada",
    precioUnitario: `~$${unitario.toFixed(2)}`,
    nota: "Soporte 24×7 incluido. Compromiso anual mínimo. Capacitación incluida.",
  };
}

export default function PreciosClient() {
  const [activeTab, setActiveTab] = useState<ProductTab>("biometria");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulator state
  const [simVolume, setSimVolume] = useState("");
  const [simProduct, setSimProduct] = useState<SimProduct>("biometria");
  const [simSoporte, setSimSoporte] = useState(false);
  const [simResult, setSimResult] = useState<SimulatorResult | null>(null);
  const [simError, setSimError] = useState("");

  // Scroll reveal refs
  const heroReveal = useScrollReveal<HTMLElement>(0.1);
  const tabsReveal = useScrollReveal<HTMLElement>(0.1);
  const enterpriseReveal = useScrollReveal<HTMLElement>(0.1);
  const allianceReveal = useScrollReveal<HTMLElement>(0.1);
  const comparisonReveal = useScrollReveal<HTMLElement>(0.1);
  const diffReveal = useScrollReveal<HTMLElement>(0.1);
  const simulatorReveal = useScrollReveal<HTMLElement>(0.1);
  const faqReveal = useScrollReveal<HTMLElement>(0.1);
  const ctaReveal = useScrollReveal<HTMLElement>(0.1);

  const currentPlans = pricingData[activeTab];

  const handleSimulate = useCallback(() => {
    const vol = parseInt(simVolume) || 0;
    if (vol <= 0) {
      setSimError("Ingresa un número mayor a 0.");
      setSimResult(null);
      return;
    }
    setSimError("");
    const result = calculateEstimate(vol, simProduct, simSoporte);
    setSimResult(result);
  }, [simVolume, simProduct, simSoporte]);

  // Reveal CSS helper
  const revealClass = (visible: boolean, delay = 0) =>
    `transition-all duration-700 ease-out ${delay ? `delay-[${delay}ms]` : ""} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <>
      {/* HERO SECTION */}
      <section ref={heroReveal.ref} className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #202945 0%, #141929 60%, #202945 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${revealClass(heroReveal.isVisible)}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Precios diseñados según tu nivel de operación y cumplimiento
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto">
              Desde autoservicio inmediato hasta infraestructura Enterprise con SLA formal y soporte especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                href="https://platform.dev.jaak.ai/#/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1ecad3] text-white font-bold text-base rounded-lg hover:bg-[#19b3bb] transition-all"
              >
                Iniciar Autoservicio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-base rounded-lg hover:bg-white/10 transition-all"
              >
                Hablar con un asesor
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                SLA hasta 99.99%
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Cumplimiento regulatorio
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Soporte especializado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SELECTOR TABS */}
      <section ref={tabsReveal.ref} className="py-16 md:py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(tabsReveal.isVisible)}`}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#f4f6f8] rounded-lg p-1.5">
              {(Object.keys(tabLabels) as ProductTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 rounded-md text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#1ecad3] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>

          {/* AUTOSERVICIO SECTION */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202945] mb-3">
              Autoservicio web – Activa en minutos
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Ideal para startups, pruebas de concepto y operación de bajo volumen.
            </p>
          </div>

          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all ${
                  plan.recommended
                    ? "border-[#1ecad3] shadow-lg shadow-[#1ecad3]/10"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-[#1ecad3] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Recomendado
                    </span>
                  </div>
                )}
                <div className="text-center pt-2">
                  <h3 className="text-lg font-bold text-[#202945] uppercase tracking-wide mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.ideal}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-[#202945]">{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-1">{plan.priceNote}</span>
                  </div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#1ecad3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{plan.verifications}</strong> verificaciones / año</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#1ecad3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>Soporte {plan.support}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#1ecad3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>Documentación técnica</span>
                    </div>
                  </div>
                  <Link
                    href="https://platform.dev.jaak.ai/#/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-lg font-semibold text-sm transition-all text-center ${
                      plan.recommended
                        ? "bg-[#1ecad3] text-white hover:bg-[#19b3bb]"
                        : "bg-[#f4f6f8] text-[#202945] hover:bg-gray-200"
                    }`}
                  >
                    Crear cuenta
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Autoservicio notes */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Pago 100% anticipado
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Sin contrato obligatorio
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Upgrade inmediato
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Documentación técnica incluida
            </span>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SECTION */}
      <section ref={enterpriseReveal.ref} className="py-16 md:py-24 bg-[#f4f6f8]">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(enterpriseReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202945] mb-3">
              Enterprise – Infraestructura regulada y escalable
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Diseñado para empresas con alto volumen, exigencias regulatorias y operación crítica.
            </p>
          </div>

          {/* Enterprise table */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-4 bg-[#202945] text-white text-sm font-semibold">
              <div className="px-6 py-4">Plan</div>
              <div className="px-6 py-4">Volumen anual</div>
              <div className="px-6 py-4">Setup</div>
              <div className="px-6 py-4">SLA disponible</div>
            </div>
            {/* Table rows */}
            {enterprisePlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`grid grid-cols-1 md:grid-cols-4 ${idx !== enterprisePlans.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="px-6 py-5">
                  <span className="md:hidden text-xs font-semibold text-gray-400 uppercase">Plan: </span>
                  <span className="font-bold text-[#202945]">{plan.name}</span>
                </div>
                <div className="px-6 py-5 md:py-5">
                  <span className="md:hidden text-xs font-semibold text-gray-400 uppercase">Volumen: </span>
                  <span className="text-gray-600">{plan.volume}</span>
                </div>
                <div className="px-6 py-5 md:py-5">
                  <span className="md:hidden text-xs font-semibold text-gray-400 uppercase">Setup: </span>
                  <span className="font-semibold text-[#202945]">{plan.setup} MXN</span>
                </div>
                <div className="px-6 py-5 md:py-5">
                  <span className="md:hidden text-xs font-semibold text-gray-400 uppercase">SLA: </span>
                  <span className="inline-block px-3 py-1 bg-[#1ecad3]/10 text-[#1ecad3] text-sm font-semibold rounded-full">{plan.sla}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Facturación mensual estructurada" },
              { icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z", label: "Tokens para señales adicionales" },
              { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "Soporte 12×7 incluido" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Add-ons 24×7 disponibles" },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Descuento por pronto pago hasta 15%" },
            ].map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#202945]/5 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#202945]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">{feature.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#202945] text-white font-bold text-base rounded-lg hover:bg-[#141929] transition-all"
            >
              Solicitar propuesta Enterprise
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMA DE ALIANZAS */}
      <section ref={allianceReveal.ref} className="py-16 md:py-24" style={{ background: "linear-gradient(135deg, #202945 0%, #141929 60%, #202945 100%)" }}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(allianceReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Programa de Alianzas – Escalabilidad masiva
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Para plataformas que integran JAAK en su propio producto y redistribuyen servicios de identidad digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {allianceLevels.map((level) => (
              <div key={level.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2">{level.name}</h3>
                <p className="text-sm text-white/50 mb-6">Volumen anual</p>
                <p className="text-2xl font-black text-[#1ecad3] mb-1">{level.volume}</p>
                <p className="text-sm text-white/40 mb-6">verificaciones</p>
                <div className="border-t border-white/10 pt-4 mb-6">
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Setup</p>
                  <p className="text-lg font-bold text-white">{level.setup} {level.setup !== "Cotización" && "MXN"}</p>
                </div>
                <Link
                  href="/contacto"
                  className="block w-full py-3 rounded-lg font-semibold text-sm bg-white/10 text-white hover:bg-white/20 transition-all text-center border border-white/20"
                >
                  Aplicar como partner
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Soporte 24×7
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              SLA según nivel
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Compromiso anual mínimo
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Capacitación incluida
            </span>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section ref={comparisonReveal.ref} className="py-16 md:py-24 bg-white">
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(comparisonReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202945] mb-3">
              ¿Qué modalidad es adecuada para ti?
            </h2>
          </div>

          {/* Desktop comparison */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-4 bg-[#202945] text-white text-sm font-semibold">
              <div className="px-6 py-4">Característica</div>
              <div className="px-6 py-4 text-center">Autoservicio</div>
              <div className="px-6 py-4 text-center">Enterprise</div>
              <div className="px-6 py-4 text-center">Alianza</div>
            </div>
            {comparisonRows.map((row, idx) => (
              <div key={row.feature} className={`grid grid-cols-4 ${idx !== comparisonRows.length - 1 ? "border-b border-gray-100" : ""}`}>
                <div className="px-6 py-4 font-medium text-[#202945] text-sm">{row.feature}</div>
                <div className="px-6 py-4 text-center text-sm text-gray-600">{row.auto}</div>
                <div className="px-6 py-4 text-center text-sm text-gray-600">{row.enterprise}</div>
                <div className="px-6 py-4 text-center text-sm text-gray-600">{row.alliance}</div>
              </div>
            ))}
          </div>

          {/* Mobile comparison */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="bg-white rounded-xl border border-gray-100 p-4">
                <p className="font-semibold text-[#202945] text-sm mb-3">{row.feature}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <p className="text-gray-400 mb-1">Autoservicio</p>
                    <p className="font-medium text-gray-700">{row.auto}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 mb-1">Enterprise</p>
                    <p className="font-medium text-gray-700">{row.enterprise}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 mb-1">Alianza</p>
                    <p className="font-medium text-gray-700">{row.alliance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR BLOCK */}
      <section ref={diffReveal.ref} className="py-16 md:py-24 bg-[#f4f6f8]">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(diffReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202945] mb-3">
              Más que precios: infraestructura de confianza
            </h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto">
              En JAAK no solo adquieres verificaciones o firmas electrónicas. Obtienes una arquitectura diseñada para sectores regulados, con trazabilidad, cumplimiento y gobierno tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Cumplimiento regulatorio" },
              { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", label: "SLA formal" },
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Seniority asignado" },
              { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "Soporte especializado" },
              { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: "Escalabilidad real" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#1ecad3]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#1ecad3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#202945]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST SIMULATOR */}
      <section ref={simulatorReveal.ref} className="py-16 md:py-24 bg-white">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(simulatorReveal.isVisible)}`}>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202945] mb-3">
              Simulador de costos
            </h2>
            <p className="text-gray-500 text-base">
              Configura tu escenario y obtén una estimación detallada al instante.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm">
            <div className="space-y-6">
              {/* Volume input */}
              <div>
                <label htmlFor="sim-volume" className="block text-sm font-semibold text-[#202945] mb-2">
                  ¿Cuántas verificaciones mensuales necesitas?
                </label>
                <input
                  id="sim-volume"
                  type="number"
                  min="1"
                  value={simVolume}
                  onChange={(e) => { setSimVolume(e.target.value); setSimError(""); }}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSimulate(); }}
                  placeholder="Ej. 1500"
                  className="w-full px-4 py-3 bg-[#f4f6f8] border border-gray-200 rounded-lg text-[#202945] focus:ring-2 focus:ring-[#1ecad3] focus:border-transparent outline-none transition-all"
                />
                {simError && <p className="mt-2 text-sm text-red-500">{simError}</p>}
              </div>

              {/* Product selector */}
              <div>
                <label className="block text-sm font-semibold text-[#202945] mb-3">
                  ¿Qué producto necesitas?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(Object.keys(SIM_PRODUCT_LABELS) as SimProduct[]).map((prod) => (
                    <button
                      key={prod}
                      type="button"
                      onClick={() => setSimProduct(prod)}
                      className={`p-4 rounded-lg text-sm font-medium transition-all border text-center ${
                        simProduct === prod
                          ? "bg-[#202945] text-white border-[#202945]"
                          : "bg-[#f4f6f8] text-[#202945] border-transparent hover:border-gray-200"
                      }`}
                    >
                      {SIM_PRODUCT_LABELS[prod]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Soporte 24x7 toggle */}
              <label className="flex items-center gap-3 p-4 bg-[#f4f6f8] rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-all">
                <input
                  type="checkbox"
                  checked={simSoporte}
                  onChange={(e) => setSimSoporte(e.target.checked)}
                  className="w-5 h-5 accent-[#1ecad3] rounded"
                />
                <div>
                  <span className="text-sm font-medium text-[#202945]">Soporte 24×7</span>
                  <span className="text-xs text-gray-400 ml-2">(aplica solo en Enterprise)</span>
                </div>
              </label>

              {/* Calculate button */}
              <button
                onClick={handleSimulate}
                className="w-full py-4 bg-[#202945] text-white font-bold rounded-lg hover:bg-[#141929] transition-all"
              >
                Calcular estimado
              </button>

              {/* Result */}
              {simResult && (
                <div className="mt-6 rounded-xl border border-gray-100 overflow-hidden">
                  {/* Result header */}
                  <div className="bg-[#202945] px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wide font-semibold">Modalidad recomendada</p>
                        <p className="text-lg font-bold text-white">{simResult.modalidad}</p>
                      </div>
                      <span className="inline-block px-4 py-1.5 bg-[#1ecad3]/20 text-[#1ecad3] text-sm font-bold rounded-full">
                        {simResult.plan}
                      </span>
                    </div>
                  </div>

                  {/* Result body */}
                  <div className="bg-[#f4f6f8] p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Costo mensual</p>
                        <p className="text-xl font-black text-[#1ecad3]">{simResult.costoMensual}</p>
                        <p className="text-xs text-gray-400">MXN</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Costo anual</p>
                        <p className="text-xl font-bold text-[#202945]">{simResult.costoAnual}</p>
                        <p className="text-xs text-gray-400">MXN</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Precio unitario</p>
                        <p className="text-xl font-bold text-[#202945]">{simResult.precioUnitario}</p>
                        <p className="text-xs text-gray-400">MXN / verif.</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Setup</p>
                        <p className="text-xl font-bold text-[#202945]">{simResult.setup === "Sin costo" ? "$0" : simResult.setup.split(" ")[0]}</p>
                        <p className="text-xs text-gray-400">{simResult.setup === "Sin costo" ? "Sin costo" : "Único"}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">{simResult.nota}</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {simResult.modalidad === "Autoservicio" ? (
                        <Link
                          href="https://platform.dev.jaak.ai/#/signup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-[#1ecad3] text-white font-semibold rounded-lg hover:bg-[#19b3bb] transition-all text-sm"
                        >
                          Crear cuenta ahora
                        </Link>
                      ) : (
                        <Link
                          href="/contacto"
                          className="flex-1 text-center py-3 bg-[#202945] text-white font-semibold rounded-lg hover:bg-[#141929] transition-all text-sm"
                        >
                          {simResult.modalidad === "Programa de Alianzas" ? "Aplicar como partner" : "Solicitar propuesta"}
                        </Link>
                      )}
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                      * Estimación orientativa. El costo final depende de la configuración específica de tu proyecto y negociación comercial.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section ref={faqReveal.ref} className="py-16 md:py-24 bg-[#f4f6f8]">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(faqReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202945] mb-3">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#202945] pr-4">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={ctaReveal.ref} className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #202945 0%, #141929 60%, #202945 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center ${revealClass(ctaReveal.isVisible)}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">
              Diseña tu infraestructura de identidad digital con responsabilidad
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://platform.dev.jaak.ai/#/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1ecad3] text-white font-bold text-base rounded-lg hover:bg-[#19b3bb] transition-all"
              >
                Iniciar Autoservicio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contacto"
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
