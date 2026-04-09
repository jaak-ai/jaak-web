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
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// --- Constants ---
const CONTACTO_URL = "/contacto";

const PLANS = [
  {
    id: "autoservicio",
    name: "Autoservicio",
    badge: "Empieza en minutos",
    badgeColor: "#1ecad3",
    price: "Desde $10 MXN",
    priceSub: "por uso · sin suscripción",
    desc: "Activa productos de identidad y firma sin integración técnica. Compra por uso, sin contratos ni volumen mínimo.",
    features: [
      "Firma electrónica (Simple y NOM-151)",
      "KYC con biometría",
      "Expediente digital auditable",
      "Acceso inmediato sin equipo de ventas",
    ],
    forWhom: ["Equipos pequeños", "Operaciones manuales", "Sin integración API"],
    support: "Onboarding grupal + soporte base",
    cta: "Empezar ahora",
    ctaLink: "/autoservicio",
    ctaExternal: false,
    color: "#1ecad3",
    popular: true,
  },
  {
    id: "crecimiento",
    name: "Crecimiento",
    badge: "Para operación continua",
    badgeColor: "#2a60d4",
    price: "Desde $18 MXN",
    priceSub: "por verificación · escala progresiva",
    desc: "Optimiza costos conforme aumentas tu volumen de operación. Modelo por volumen mensual con descuentos progresivos.",
    features: [
      "Todos los módulos de KYC",
      "Firma electrónica incluida",
      "Integración API o panel web",
      "Gestión de expedientes centralizada",
    ],
    forWhom: ["Flujo constante de onboarding", "Fintech · Inmobiliarias · Automotriz", "Operaciones recurrentes"],
    support: "Onboarding guiado",
    cta: "Ver opciones",
    ctaLink: CONTACTO_URL,
    ctaExternal: false,
    color: "#2a60d4",
    popular: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Infraestructura crítica",
    badgeColor: "#655dc6",
    price: "Personalizado",
    priceSub: "contrato anual · volumen desde 5k/mes",
    desc: "Diseñado para operaciones reguladas con alto volumen y requerimientos específicos de cumplimiento.",
    features: [
      "Integración API / SDK / Whitelabel",
      "Infraestructura dedicada",
      "Cumplimiento avanzado (CNBV, UIF)",
      "Personalización completa de flujos",
    ],
    forWhom: ["Bancos · Fintech reguladas", "Telco · Grandes corporativos", "Volumen ≥ 5,000 verif/mes"],
    support: "Equipo dedicado + SLA garantizado",
    cta: "Hablar con ventas",
    ctaLink: CONTACTO_URL,
    ctaExternal: false,
    color: "#655dc6",
    popular: false,
  },
  {
    id: "alianzas",
    name: "Alianzas",
    badge: "Para partners",
    badgeColor: "#d97706",
    price: "Revenue share",
    priceSub: "pricing especial por volumen",
    desc: "Integra JAAK como parte de tu oferta y genera ingresos adicionales. Esquema comercial adaptado a tu modelo.",
    features: [
      "Acceso a toda la plataforma",
      "Marca compartida / white-label",
      "Modelo de distribución flexible",
      "Soporte comercial dedicado",
    ],
    forWhom: ["Brokers · Consultoras", "Integradores tecnológicos", "Volumen ≥ 500K verif/año"],
    support: "Equipo comercial + soporte 24×7",
    cta: "Convertirme en partner",
    ctaLink: CONTACTO_URL,
    ctaExternal: false,
    color: "#d97706",
    popular: false,
  },
];

const COMPARISON = [
  { feature: "Firma electrónica",          auto: "✔️", growth: "✔️", enterprise: "✔️", alliance: "✔️" },
  { feature: "KYC biométrico",             auto: "✔️", growth: "✔️", enterprise: "✔️", alliance: "✔️" },
  { feature: "Expediente auditable NOM-151",auto: "✔️", growth: "✔️", enterprise: "✔️", alliance: "✔️" },
  { feature: "API / SDK",                  auto: "❌",  growth: "✔️", enterprise: "✔️", alliance: "✔️" },
  { feature: "Whitelabel",                 auto: "❌",  growth: "Opcional", enterprise: "✔️", alliance: "✔️" },
  { feature: "Volumen mensual",            auto: "Bajo", growth: "Medio", enterprise: "Alto", alliance: "Variable" },
  { feature: "Soporte",                    auto: "Base", growth: "Guiado", enterprise: "Dedicado", alliance: "Comercial" },
];

const faqItems = [
  {
    question: "¿Cuánto cuesta el KYC biométrico en México?",
    answer: "Autoservicio desde $99 MXN (5 verificaciones, plan Cobre), sin setup fee. Precio unitario de $19.80 (Cobre) a $25.00 (Platino). Para más de 1,000 verif/mes: Enterprise con cotización personalizada.",
  },
  {
    question: "¿Cuánto cuesta la Firma Electrónica NOM-151?",
    answer: "Firma Simple desde $49 MXN (10 firmas). Firma NOM-151 desde $99 MXN (5 firmas) hasta $6,000 MXN (500 firmas). Firma NOM-151+Bio desde $99 MXN hasta $12,500 MXN (500 firmas). Sin setup fee en Autoservicio.",
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
    question: "¿Cómo funciona la facturación Enterprise?",
    answer: "Mensual: 80% del estimado del mes actual + 20% real del mes anterior. Neto 30 días. Descuento 15% si se paga días 1–10. Cobro mínimo = tier inicial contratado aunque el consumo sea menor.",
  },
];

const trustBadges = ["ISO 27001", "ISO 9001", "iBeta Liveness Nivel 2", "NOM-151 + PSC", "CNBV / LFPIORPI / UIF", "NIST FRVT"];

// --- Component ---
export default function PreciosClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroReveal = useScrollReveal<HTMLElement>(0.1);
  const plansReveal = useScrollReveal<HTMLElement>(0.1);
  const compReveal = useScrollReveal<HTMLElement>(0.1);
  const diffReveal = useScrollReveal<HTMLElement>(0.1);
  const decisionReveal = useScrollReveal<HTMLElement>(0.1);
  const faqReveal = useScrollReveal<HTMLElement>(0.1);
  const ctaReveal = useScrollReveal<HTMLElement>(0.1);

  const reveal = (v: boolean) =>
    `transition-all duration-700 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section
        ref={heroReveal.ref}
        className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1833 0%, #0E1133 55%, #12183F 100%)" }}
      >
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-drift-1 absolute rounded-full opacity-20" style={{ width: 500, height: 500, top: "-10%", right: "-6%", background: "radial-gradient(circle,#1ecad3 0%,transparent 70%)", filter: "blur(60px)" }} />
          <div className="orb-drift-2 absolute rounded-full opacity-15" style={{ width: 420, height: 420, bottom: "-15%", left: "-8%", background: "radial-gradient(circle,#655dc6 0%,transparent 70%)", filter: "blur(60px)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${reveal(heroReveal.isVisible)}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Planes diseñados para{" "}
              <span style={{ backgroundImage: "linear-gradient(90deg,#1ecad3,#655dc6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                escalar con tu operación
              </span>
            </h1>
            <p className="text-xl text-white/75 mb-10 max-w-3xl mx-auto leading-relaxed">
              Desde autoservicio hasta integración enterprise. Elige el modelo que se adapta a tu volumen y nivel de operación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/autoservicio"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-base text-white rounded-xl transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#1ecad3,#655dc6)", boxShadow: "0 8px 32px rgba(30,202,211,0.3)" }}
              >
                Empezar con autoservicio →
              </Link>
              <Link href={CONTACTO_URL}
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-base rounded-xl transition-all hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                Hablar con un especialista
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {trustBadges.map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <span style={{ color: "#1ecad3" }}>✓</span>{b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · PLAN CARDS ===== */}
      <section
        ref={plansReveal.ref}
        className="py-20 relative"
        style={{ background: "linear-gradient(135deg,#212A45 0%,#0E1133 50%,#212A45 100%)" }}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${reveal(plansReveal.isVisible)}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ background: "rgba(30,202,211,0.1)", color: "#1ecad3", border: "1px solid rgba(30,202,211,0.25)" }}>
              Modalidades
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Elige tu modelo</h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg">Sin compromiso de inicio. Escala en cualquier momento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className="relative flex flex-col rounded-2xl p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1"
                style={plan.popular ? {
                  background: `linear-gradient(145deg,${plan.color}1e 0%,rgba(255,255,255,0.07) 100%)`,
                  border: `1.5px solid ${plan.color}60`,
                  boxShadow: `0 0 40px ${plan.color}30, 0 12px 40px rgba(0,0,0,0.4)`,
                } : {
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap text-white"
                    style={{ background: `linear-gradient(90deg,${plan.color},#00d4aa)`, boxShadow: `0 4px 16px ${plan.color}60` }}>
                    ⭐ Más popular
                  </div>
                )}

                {/* Badge */}
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit"
                  style={{ background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}35` }}>
                  {plan.badge}
                </span>

                {/* Name + Price */}
                <h3 className="text-xl font-extrabold text-white mb-1">{plan.name}</h3>
                <p className="text-2xl font-black mb-0.5" style={{ color: plan.color }}>{plan.price}</p>
                <p className="text-white/40 text-xs mb-4">{plan.priceSub}</p>

                <p className="text-white/65 text-sm leading-relaxed mb-5">{plan.desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* For whom */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {plan.forWhom.map((w) => (
                    <span key={w} className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      {w}
                    </span>
                  ))}
                </div>

                {/* Support */}
                <p className="text-xs text-white/35 mb-5 flex items-center gap-1.5">
                  <span style={{ color: plan.color }}>●</span> {plan.support}
                </p>

                {/* CTA */}
                <Link
                  href={plan.ctaLink}
                  className="block w-full text-center font-bold text-base py-3 rounded-xl transition-all duration-150 hover:opacity-90 active:scale-95"
                  style={plan.popular ? {
                    background: `linear-gradient(90deg,${plan.color},#00d4aa)`,
                    color: "#fff",
                    boxShadow: `0 4px 20px ${plan.color}50`,
                  } : {
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  {plan.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3 · TABLA COMPARATIVA ===== */}
      <section ref={compReveal.ref} className="py-20" style={{ background: "#f8fafc" }}>
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${reveal(compReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ background: "#f0fffe", color: "#0e7490", border: "1px solid #a7f3f0" }}>
              Comparativa
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">¿Qué modalidad es adecuada para ti?</h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:block rounded-2xl overflow-hidden shadow-sm" style={{ border: "1.5px solid #e5e7eb" }}>
            <div className="grid grid-cols-5 text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#212A45,#0E1133)" }}>
              <div className="px-6 py-4">Característica</div>
              {["Autoservicio", "Crecimiento", "Enterprise", "Alianzas"].map((h) => (
                <div key={h} className="px-4 py-4 text-center">{h}</div>
              ))}
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-5 ${i < COMPARISON.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <div className="px-6 py-4 font-semibold text-gray-800 text-sm">{row.feature}</div>
                {[row.auto, row.growth, row.enterprise, row.alliance].map((val, j) => (
                  <div key={j} className="px-4 py-4 text-center text-sm" style={{ color: val === "✔️" ? "#1ecad3" : val === "❌" ? "#ef4444" : "#374151" }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {COMPARISON.map((row) => (
              <div key={row.feature} className="bg-white rounded-xl p-4" style={{ border: "1.5px solid #e5e7eb" }}>
                <p className="font-bold text-gray-900 mb-3">{row.feature}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[{l:"Autoservicio",v:row.auto},{l:"Crecimiento",v:row.growth},{l:"Enterprise",v:row.enterprise},{l:"Alianzas",v:row.alliance}].map(({l,v}) => (
                    <div key={l}>
                      <p className="text-gray-400 text-xs mb-0.5">{l}</p>
                      <p style={{ color: v === "✔️" ? "#1ecad3" : v === "❌" ? "#ef4444" : "#374151" }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4 · DIFERENCIACIÓN ===== */}
      <section
        ref={diffReveal.ref}
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0D1833 0%,#12183F 60%,#1a1150 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-drift-3 absolute rounded-full opacity-15" style={{ width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle,#655dc6 0%,transparent 70%)", filter: "blur(50px)" }} />
        </div>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${reveal(diffReveal.isVisible)}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            No es solo validar identidad.{" "}
            <span style={{ backgroundImage: "linear-gradient(90deg,#1ecad3,#655dc6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Es poder demostrarlo.
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-left max-w-2xl mx-auto">
            {[
              { icon: "📋", text: "Evidencia auditable lista para regulador" },
              { icon: "🔒", text: "Cumplimiento NOM-151 integrado" },
              { icon: "🧬", text: "Validación biométrica real, no declarativa" },
              { icon: "🏛️", text: "Infraestructura diseñada para compliance" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-xl px-5 py-4 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-white/85 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5 · BLOQUE DE DECISIÓN ===== */}
      <section ref={decisionReveal.ref} className="py-20" style={{ background: "#fff" }}>
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${reveal(decisionReveal.isVisible)}`}>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">¿No sabes qué plan elegir?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Empieza con autoservicio y escala conforme crece tu operación. Sin contratos ni compromisos de inicio.
          </p>
          <Link href="/autoservicio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#1ecad3,#655dc6)", boxShadow: "0 8px 24px rgba(30,202,211,0.3)" }}
          >
            Empezar ahora →
          </Link>
        </div>
      </section>

      {/* ===== 6 · FAQ ===== */}
      <section ref={faqReveal.ref} className="py-20" style={{ background: "#f8fafc" }}>
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${reveal(faqReveal.isVisible)}`}>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ background: "#f0fffe", color: "#0e7490", border: "1px solid #a7f3f0" }}>
              FAQ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden" style={{ border: "1.5px solid #e5e7eb" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7 · CTA FINAL ===== */}
      <section
        ref={ctaReveal.ref}
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0D1833 0%,#12183F 60%,#1a1150 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-drift-1 absolute rounded-full opacity-20" style={{ width: 500, height: 500, top: "-20%", right: "-10%", background: "radial-gradient(circle,#1ecad3 0%,transparent 70%)", filter: "blur(60px)" }} />
          <div className="orb-drift-2 absolute rounded-full opacity-15" style={{ width: 400, height: 400, bottom: "-20%", left: "-10%", background: "radial-gradient(circle,#655dc6 0%,transparent 70%)", filter: "blur(60px)" }} />
        </div>
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${reveal(ctaReveal.isVisible)}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Activa tu operación{" "}
            <span style={{ backgroundImage: "linear-gradient(90deg,#1ecad3,#655dc6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              en minutos
            </span>
          </h2>
          <p className="text-white/75 text-lg mb-10">
            Sin integración si no la necesitas. Con toda la infraestructura si la requieres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/autoservicio"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-base text-white rounded-xl transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#1ecad3,#655dc6)", boxShadow: "0 8px 32px rgba(30,202,211,0.3)" }}
            >
              Empezar con autoservicio →
            </Link>
            <Link href={CONTACTO_URL}
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-base rounded-xl transition-all hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
            >
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
