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
type ProductTab = "biometria" | "firma-simple" | "firma-avanzada" | "firma-bio";

interface AutoservicioPlan {
  name: string;
  subtitle: string;
  quantity: number;
  unit: string;
  price: string;
  priceNote: string;
  recommended?: boolean;
}

// --- Constants ---
const AUTOSERVICIO_URL = "https://platform.jaak.ai/#/onboarding/plans";

const pricingData: Record<ProductTab, AutoservicioPlan[]> = {
  biometria: [
    { name: "Cobre", subtitle: "Trial", quantity: 5, unit: "verificaciones", price: "$99", priceNote: "/ año" },
    { name: "Bronce", subtitle: "Básico", quantity: 50, unit: "verificaciones", price: "$1,500", priceNote: "/ año" },
    { name: "Plata", subtitle: "Recomendado", quantity: 100, unit: "verificaciones", price: "$2,700", priceNote: "/ año", recommended: true },
    { name: "Oro", subtitle: "Empresarial", quantity: 500, unit: "verificaciones", price: "$12,500", priceNote: "/ año" },
  ],
  "firma-simple": [
    { name: "Cobre", subtitle: "Trial", quantity: 5, unit: "firmas", price: "$99", priceNote: "/ año" },
    { name: "Bronce", subtitle: "Básico", quantity: 50, unit: "firmas", price: "$750", priceNote: "/ año" },
    { name: "Plata", subtitle: "Recomendado", quantity: 100, unit: "firmas", price: "$1,500", priceNote: "/ año", recommended: true },
    { name: "Oro", subtitle: "Empresarial", quantity: 500, unit: "firmas", price: "$7,500", priceNote: "/ año" },
  ],
  "firma-avanzada": [
    { name: "Cobre", subtitle: "Trial", quantity: 5, unit: "firmas", price: "$99", priceNote: "/ año" },
    { name: "Bronce", subtitle: "Básico", quantity: 50, unit: "firmas", price: "$2,250", priceNote: "/ año" },
    { name: "Plata", subtitle: "Recomendado", quantity: 100, unit: "firmas", price: "$4,500", priceNote: "/ año", recommended: true },
    { name: "Oro", subtitle: "Empresarial", quantity: 500, unit: "firmas", price: "$22,500", priceNote: "/ año" },
  ],
  "firma-bio": [
    { name: "Cobre", subtitle: "Trial", quantity: 5, unit: "firmas", price: "$99", priceNote: "/ año" },
    { name: "Bronce", subtitle: "Básico", quantity: 50, unit: "firmas", price: "$3,750", priceNote: "/ año" },
    { name: "Plata", subtitle: "Recomendado", quantity: 100, unit: "firmas", price: "$7,500", priceNote: "/ año", recommended: true },
    { name: "Oro", subtitle: "Empresarial", quantity: 500, unit: "firmas", price: "$37,500", priceNote: "/ año" },
  ],
};

const tabLabels: Record<ProductTab, string> = {
  biometria: "Biometría (KYC)",
  "firma-simple": "Firma Simple",
  "firma-avanzada": "Firma Avanzada",
  "firma-bio": "Firma + Biometría",
};

const tabDescriptions: Record<ProductTab, string> = {
  biometria: "KYC Tradicional, Simplificado y Passwordless para validación de identidad.",
  "firma-simple": "Firma electrónica simple para documentos que no requieren certificación avanzada.",
  "firma-avanzada": "Firma electrónica avanzada con cumplimiento NOM-151 y PSC certificado.",
  "firma-bio": "Firma avanzada con verificación biométrica integrada para máxima seguridad.",
};

const enterprisePlans = [
  {
    name: "Crecimiento",
    description: "Ideal para empresas en expansión con volumen creciente y necesidades de cumplimiento.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    name: "Profesional",
    description: "Para operación sostenida con exigencias regulatorias y soporte especializado.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "Empresarial",
    description: "Máxima disponibilidad y SLA formal para operación de misión crítica.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const enterpriseBenefits = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "SLA formal hasta 99.99%" },
  { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "Soporte 12×7 y 24×7 para incidentes críticos" },
  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Facturación mensual (80/20) con neto 30 días" },
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Descuento por pronto pago hasta 15%" },
];

const allianceLevels = [
  { name: "Base", description: "Primera integración como partner tecnológico." },
  { name: "Nacional", description: "Distribución a escala nacional con soporte dedicado." },
  { name: "Corporativo", description: "Operación multi-producto y multi-mercado." },
  { name: "Estratégico", description: "Alianza de máximo nivel con condiciones exclusivas." },
];

const allianceBenefits = [
  { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "Soporte 24×7 prioritario o dedicado" },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Capacitación técnica (Enablement) incluida" },
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: "Compromiso anual mínimo de volumen garantizado" },
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Infraestructura para reventa y escalabilidad" },
];

const comparisonRows = [
  { feature: "Volumen", auto: "Hasta 500/año", enterprise: ">1,000/mes", alliance: ">500,000/año" },
  { feature: "Contrato", auto: "No requerido", enterprise: "Sí", alliance: "Sí" },
  { feature: "SLA", auto: "No garantizado", enterprise: "Hasta 99.99%", alliance: "Hasta 99.99%" },
  { feature: "Soporte", auto: "Chat", enterprise: "12×7 / 24×7", alliance: "24×7 dedicado" },
  { feature: "Facturación", auto: "Prepago anual", enterprise: "Mensual (80/20)", alliance: "Mensual (80/20)" },
  { feature: "Ideal para", auto: "Startups y PoC", enterprise: "Empresas reguladas", alliance: "Plataformas y revendedores" },
];

const faqItems = [
  {
    question: "¿Qué pasa si supero mi volumen contratado en Autoservicio?",
    answer: "Puedes hacer un upgrade inmediato al siguiente plan desde tu panel de control. Tu historial y configuración se mantienen sin interrupción.",
  },
  {
    question: "¿Las verificaciones o firmas caducan?",
    answer: "Las verificaciones y firmas de Autoservicio tienen vigencia de 12 meses desde la fecha de compra. En planes Enterprise y Alianzas, la vigencia se establece en el contrato.",
  },
  {
    question: "¿Hay descuentos por volumen en Enterprise?",
    answer: "Sí. En Enterprise y Alianzas, el precio por verificación disminuye conforme aumenta el volumen contratado. También ofrecemos descuento por pronto pago. Contacta a nuestro equipo para una cotización personalizada.",
  },
  {
    question: "¿Cómo funciona el SLA en Enterprise?",
    answer: "El SLA define el nivel de disponibilidad garantizada de la plataforma. Si no se cumple, se aplican créditos según lo establecido en el contrato de servicio. Disponemos de SLAs de hasta 99.99%.",
  },
  {
    question: "¿Puedo iniciar en Autoservicio y migrar a Enterprise?",
    answer: "Por supuesto. Muchos de nuestros clientes Enterprise comenzaron en Autoservicio. La migración es asistida por nuestro equipo sin interrupción del servicio.",
  },
  {
    question: "¿Qué nivel de soporte recibo?",
    answer: "En Autoservicio recibes soporte vía chat y documentación técnica. En Enterprise, asignamos un nivel de seniority (Junior, Mid, Senior, Lead) según la complejidad de tu operación, con soporte 12×7 y disponibilidad 24×7 para incidentes críticos.",
  },
  {
    question: "¿JAAK cumple con regulaciones mexicanas?",
    answer: "Sí. Nuestra infraestructura cumple con NOM-151, y nuestros procesos están diseñados para CNBV, LFPIORPI, UIF y demás marcos regulatorios mexicanos. Toda operación cuenta con trazabilidad completa.",
  },
];

const complianceNotes = [
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Soporte",
    description: "El soporte base es 12×7 (Lunes a Domingo, 8am–8pm CDMX). Disponibilidad 24×7 para incidentes críticos en planes Enterprise y Alianzas.",
  },
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Seniority Asignado",
    description: "JAAK asigna el nivel de seniority (Junior, Mid, Senior, Lead) según la complejidad y criticidad de cada cliente.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Seguridad y Cumplimiento",
    description: "Infraestructura con trazabilidad completa, cumplimiento NOM-151 y gobierno tecnológico para sectores regulados.",
  },
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll reveal refs
  const heroReveal = useScrollReveal<HTMLElement>(0.1);
  const tabsReveal = useScrollReveal<HTMLElement>(0.1);
  const enterpriseReveal = useScrollReveal<HTMLElement>(0.1);
  const allianceReveal = useScrollReveal<HTMLElement>(0.1);
  const comparisonReveal = useScrollReveal<HTMLElement>(0.1);
  const complianceReveal = useScrollReveal<HTMLElement>(0.1);
  const faqReveal = useScrollReveal<HTMLElement>(0.1);
  const ctaReveal = useScrollReveal<HTMLElement>(0.1);

  const currentPlans = pricingData[activeTab];

  const revealClass = (visible: boolean) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <>
      {/* ===== HERO ===== */}
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
              Precios diseñados según tu nivel de operación y cumplimiento
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto">
              Desde autoservicio inmediato para startups hasta infraestructura robusta para corporativos con SLA formal y soporte especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
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
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-base rounded-lg hover:bg-white/10 transition-all"
              >
                Hablar con un asesor
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
              {["SLA hasta 99.99%", "Cumplimiento regulatorio", "Soporte especializado"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2DB6C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== AUTOSERVICIO ===== */}
      <section ref={tabsReveal.ref} className="py-16 md:py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(tabsReveal.isVisible)}`}>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Autoservicio web – Activa en minutos
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mx-auto">
              Ideal para startups, pruebas de concepto y operación de bajo volumen.
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex justify-center mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-[#F3F4F8] rounded-xl p-1.5 w-full max-w-2xl">
              {(Object.keys(tabLabels) as ProductTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all text-center ${
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all ${
                  plan.recommended
                    ? "border-[#2DB6C1] shadow-lg shadow-[#2DB6C1]/10"
                    : "border-[#EEEEEE] hover:border-[#2DB6C1]/30"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-[#2DB6C1] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Recomendado
                    </span>
                  </div>
                )}
                <div className="text-center pt-2">
                  <h3 className="text-lg font-bold text-[#212A45] uppercase tracking-wide mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-[#64748B] mb-6">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-[#212A45]">{plan.price}</span>
                    <span className="text-sm text-[#64748B] ml-1">{plan.priceNote}</span>
                  </div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                      <CheckIcon />
                      <span>
                        <strong>{plan.quantity}</strong> {plan.unit} / año
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                      <CheckIcon />
                      <span>Soporte vía chat</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                      <CheckIcon />
                      <span>Documentación técnica</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                      <CheckIcon />
                      <span>Vigencia 12 meses</span>
                    </div>
                  </div>
                  <Link
                    href={AUTOSERVICIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-lg font-semibold text-sm transition-all text-center ${
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

          {/* Autoservicio notes */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#64748B]">
            {["Pago 100% anticipado", "Sin contrato obligatorio", "Upgrade inmediato", "Documentación incluida"].map((note) => (
              <span key={note} className="flex items-center gap-2">
                <CheckIcon />
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENTERPRISE ===== */}
      <section ref={enterpriseReveal.ref} className="py-16 md:py-24 bg-[#F3F4F8]">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(enterpriseReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Enterprise – Infraestructura regulada y escalable
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mx-auto">
              Diseñado para empresas con alto volumen (&gt;1,000 verificaciones/mes), exigencias regulatorias y operación crítica.
            </p>
          </div>

          {/* Enterprise plan cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {enterprisePlans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl p-8 border border-[#EEEEEE] hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-[#212A45]/5 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#212A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={plan.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#212A45] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>

          {/* Enterprise benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {enterpriseBenefits.map((benefit) => (
              <div key={benefit.label} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#EEEEEE]">
                <div className="w-10 h-10 bg-[#2DB6C1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2DB6C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#212A45] leading-snug">{benefit.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#212A45] text-white font-bold text-base rounded-lg hover:bg-[#0E1133] transition-all hover:-translate-y-0.5"
            >
              Hablar con un asesor
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMA DE ALIANZAS ===== */}
      <section
        ref={allianceReveal.ref}
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #212A45 0%, #0E1133 50%, #212A45 100%)" }}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(allianceReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Programa de Alianzas – Escalabilidad masiva
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Para plataformas que integran JAAK en su propio producto y redistribuyen servicios de identidad digital.
            </p>
          </div>

          {/* Alliance level cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {allianceLevels.map((level) => (
              <div key={level.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">{level.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>

          {/* Alliance benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {allianceBenefits.map((benefit) => (
              <div key={benefit.label} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-9 h-9 bg-[#2DB6C1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2DB6C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-white/80 leading-snug">{benefit.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/20 text-white font-bold text-base rounded-lg hover:bg-white/20 transition-all"
            >
              Aplicar como partner
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
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
              <div className="px-6 py-4 text-center">Alianza</div>
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
                    <p className="text-[#64748B] mb-1">Alianza</p>
                    <p className="font-medium text-[#212A45]">{row.alliance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE & SUPPORT NOTES ===== */}
      <section ref={complianceReveal.ref} className="py-16 md:py-24 bg-[#F3F4F8]">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(complianceReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Más que precios: infraestructura de confianza
            </h2>
            <p className="text-[#4A5568] text-base max-w-3xl mx-auto">
              En JAAK no solo adquieres verificaciones o firmas electrónicas. Obtienes una arquitectura diseñada para sectores regulados, con trazabilidad, cumplimiento y gobierno tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceNotes.map((note) => (
              <div key={note.title} className="bg-white rounded-2xl p-8 border border-[#EEEEEE] hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#2DB6C1]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#2DB6C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={note.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#212A45] mb-2">{note.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section ref={faqReveal.ref} className="py-16 md:py-24 bg-white">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${revealClass(faqReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#212A45] mb-3">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-[#F3F4F8] rounded-xl border border-[#EEEEEE] overflow-hidden">
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
