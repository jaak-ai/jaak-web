"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";
import { productos as CATALOG_PRODUCTS, IVA, formatMXN } from "@/data/autoservicio-catalogo";
import UmaCalculator from "./UmaCalculator";
import ScenarioSimulator from "./ScenarioSimulator";
import LayersExplorer from "./LayersExplorer";
import RoleSelector from "./RoleSelector";
import IntegrationTimeline from "./IntegrationTimeline";
import GuideLeadForm from "./GuideLeadForm";

const NAVY = "#02132D";
const NAVY_LIGHT = "#0B1D3A";
const TEAL = "#1ECAD3";
const GREEN = "#2AD796";
const OFFWHITE = "#F5F5F3";

const KYC_PRODUCT = CATALOG_PRODUCTS.find((p) => p.id === "kyc")!;
const KYC_CHECKOUT_URLS: Record<string, string> = {
  cobre: "https://platform.jaak.ai/#/onboarding/user-info?plan=cobre",
  bronce: "https://platform.jaak.ai/#/onboarding/plans/bronce",
  plata: "https://platform.jaak.ai/#/onboarding/plans/plata",
  oro: "https://platform.jaak.ai/#/onboarding/plans/oro",
  platino: "https://platform.jaak.ai/#/onboarding/plans/platino1",
};
const COBRE_PACKAGE = KYC_PRODUCT.paquetes.find((p) => p.id === "cobre")!;
const OTHER_PACKAGES = KYC_PRODUCT.paquetes.filter((p) => p.id !== "cobre");

/** Envoltura con degradado teal→verde JAAK detrás de una imagen enmarcada. */
function FramedImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
        style={{ background: `linear-gradient(135deg, ${TEAL}, ${GREEN})` }}
        aria-hidden="true"
      />
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(30,202,211,0.25)", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
      >
        <Image src={src} alt={alt} width={1600} height={900} className="w-full h-auto" priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </div>
  );
}

const PROBLEMS = [
  {
    title: "Identificación prestada",
    scenario: "Una persona presenta el documento de un familiar o de un tercero para crear la cuenta.",
    check: "Que el rostro frente a la cámara corresponde al titular del documento.",
  },
  {
    title: "Documento alterado o no vigente",
    scenario: "El documento parece correcto, pero contiene modificaciones, datos inconsistentes o ha perdido vigencia.",
    check: "Autenticidad, estructura, datos extraídos y vigencia documental.",
  },
  {
    title: "Persona no presente",
    scenario: "Se utilizan fotografías, pantallas, videos o materiales creados para engañar al sistema.",
    check: "Que existe una persona real frente al dispositivo durante la verificación.",
  },
  {
    title: "Datos que no coinciden",
    scenario: "Nombre, fecha de nacimiento, CURP o información documental no coinciden con fuentes oficiales.",
    check: "Consistencia entre documento, rostro, información declarada y registros consultados.",
  },
  {
    title: "Riesgo no identificado",
    scenario: "La identidad parece legítima, pero la persona aparece en una fuente de sanciones o riesgo.",
    check: "Resultado de las consultas nacionales e internacionales configuradas.",
  },
  {
    title: "Evidencia incompleta",
    scenario: "La cuenta fue autorizada, pero el operador no puede reconstruir qué controles se ejecutaron ni cuáles fueron sus resultados.",
    check: "Cada validación, fecha, resultado, fuente y señal asociada al expediente.",
  },
];

const FLOW_STEPS = [
  { num: "01", title: "El jugador inicia", desc: "El flujo comienza desde la plataforma del operador, mediante web, API, SDK o una experiencia de marca blanca." },
  { num: "02", title: "Captura su documento", desc: "JAAK recibe el documento, extrae la información y ejecuta las validaciones documentales configuradas." },
  { num: "03", title: "Realiza una captura facial", desc: "La prueba de vida pasiva confirma que se trata de una persona real." },
  { num: "04", title: "Se compara rostro e identidad", desc: "El motor biométrico coteja el rostro de la persona con la fotografía del documento." },
  { num: "05", title: "Se consultan fuentes y listas", desc: "Los datos se contrastan con las fuentes oficiales y listas de riesgo incluidas en el flujo contratado." },
  { num: "06", title: "Se genera el resultado", desc: "La plataforma del operador recibe el estatus, los resultados de cada control y la información necesaria para aplicar sus reglas de decisión." },
];

const EXPERIENCE_COLUMNS = [
  { title: "Para el jugador", items: ["Flujo digital y remoto", "Captura desde su dispositivo", "Prueba de vida pasiva", "Menos instrucciones innecesarias", "Experiencia visual con la identidad del operador"] },
  { title: "Para operaciones", items: ["Menos captura manual", "Datos estructurados", "Resultados centralizados", "Reglas claras para enviar excepciones a revisión", "Evidencia disponible por sesión"] },
  { title: "Para cumplimiento", items: ["Identidad vinculada con documento y biometría", "Fuentes consultadas visibles", "Resultado de listas registrado", "Información contextual de la sesión", "Expediente recuperable para revisiones internas"] },
  { title: "Para tecnología", items: ["API REST", "SDK para experiencias integradas", "Webhooks para recibir resultados", "Sandbox para pruebas", "Flujo web en marca blanca"] },
];

const USE_CASES = [
  { title: "Apuestas deportivas", desc: "Confirma que la cuenta se vincule con una identidad real antes de habilitar el recorrido definido por el operador." },
  { title: "Casinos en línea", desc: "Integra verificación documental, biometría y consultas dentro de una experiencia de registro remota." },
  { title: "Sorteos y concursos", desc: "Verifica participantes o ganadores cuando las políticas internas o los umbrales aplicables requieren una identificación reforzada." },
  { title: "Operadores multimarca", desc: "Configura la experiencia con el logotipo, colores y mensajes de cada marca sin sustituir la infraestructura de verificación." },
  { title: "Operaciones de alto valor", desc: "Aplica un flujo de identificación más completo cuando el perfil, la operación o las políticas internas lo requieran." },
  { title: "Mesas de control", desc: "Centraliza resultados para que el equipo intervenga principalmente en excepciones y casos que requieren análisis adicional." },
];

const COMPARISON_ROWS = [
  { basico: "Captura documento", jaak: "Analiza documento y vigencia" },
  { basico: "Recibe selfie", jaak: "Comprueba vida y coincidencia" },
  { basico: "Lee datos", jaak: "Contrasta con fuentes oficiales" },
  { basico: "Aprueba o rechaza", jaak: "Entrega resultado por control" },
  { basico: "Consulta limitada", jaak: "KYC más ampliación AML" },
  { basico: "Registro disperso", jaak: "Evidencia vinculada con la sesión" },
];

const DIFFERENCE_ITEMS = [
  { icon: "🇲🇽", title: "Diseñado para México", desc: "Documentos mexicanos, INE, RENAPO, fuentes fiscales y acompañamiento local." },
  { icon: "🧬", title: "Seis capas en un solo flujo", desc: "Biometría, documento, fuentes oficiales, listas y geolocalización sin construir seis integraciones separadas." },
  { icon: "🔬", title: "Tecnología biométrica propia", desc: "Mayor control sobre el procesamiento, evolución y operación de los componentes biométricos." },
  { icon: "📋", title: "Evidencia por validación", desc: "Cada control genera un resultado que puede consultarse y asociarse con la sesión del jugador." },
  { icon: "🧩", title: "Modular", desc: "Activa el flujo completo o configura los componentes que necesita tu operación." },
  { icon: "🎨", title: "Marca blanca", desc: "El jugador ve tu marca, tus colores y tus mensajes durante la experiencia." },
  { icon: "🗣️", title: "Soporte en español", desc: "Equipo técnico y comercial en México para acompañar integración, pruebas y salida a producción." },
];

const FAQ_ITEMS = [
  {
    q: "¿Qué valida JAAK durante el onboarding de un jugador?",
    a: "JAAK puede ejecutar prueba de vida pasiva, comparación facial 1:1, análisis y extracción de información documental, consultas a fuentes oficiales, revisión de listas de riesgo y geolocalización.",
  },
  {
    q: "¿JAAK ayuda a comprobar la mayoría de edad?",
    a: "El flujo permite extraer y validar la fecha de nacimiento contenida en el documento. El operador puede utilizar el resultado para aplicar su regla de mayoría de edad conforme a la jurisdicción y modalidad correspondiente.",
  },
  {
    q: "¿Qué documentos pueden utilizarse?",
    a: "La configuración puede contemplar documentos como INE y pasaporte. La cobertura final debe establecerse durante el diseño del flujo.",
  },
  {
    q: "¿Qué fuentes mexicanas consulta?",
    a: "Dependiendo del paquete contratado, el proceso puede incluir Lista Nominal INE, RENAPO y fuentes fiscales como SAT 69-B.",
  },
  {
    q: "¿Qué listas están incluidas en el KYC?",
    a: "El paquete descrito para KYC contempla OFAC, INTERPOL y SAT 69-B. Para un análisis más amplio se puede integrar el paquete AML con más de 40 listas de riesgo.",
  },
  {
    q: "¿La plataforma puede personalizarse?",
    a: "Sí. El flujo web puede configurarse en marca blanca con logotipo, colores y mensajes del operador.",
  },
  {
    q: "¿JAAK monitorea apuestas, depósitos y retiros?",
    a: "JAAK se concentra en la verificación de identidad y el onboarding. El monitoreo transaccional, la acumulación de montos y la presentación de Avisos deben resolverse mediante los sistemas y procedimientos del operador.",
  },
  {
    q: "¿JAAK elimina por sí solo el abuso de bonos o las multicuentas?",
    a: "La verificación de identidad reduce la posibilidad de operar con identidades falsas, prestadas o inconsistentes. La detección integral de multicuentas y abuso de bonos requiere señales y controles adicionales del operador.",
  },
  {
    q: "¿Cómo se integra?",
    a: "La solución puede consumirse mediante API, SDK o un flujo web de marca blanca. También existe un entorno sandbox para pruebas de integración.",
  },
];

export default function KycIgamingMexicoLandingClient() {
  useEffect(() => {
    gtmEvent("view_kyc_igaming_mexico_landing");
  }, []);

  return (
    <>
      <ScrollReveal />
      <Header />
      <main style={{ background: NAVY }}>
        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_LIGHT} 100%)` }}
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-[140px]"
            style={{ background: "rgba(30,202,211,0.12)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full opacity-[0.04] blur-[120px]"
            style={{ background: "#E8543C" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-sr className="text-center lg:text-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                  style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)", color: "#7FE8EC" }}
                >
                  KYC para Gaming e iGaming en México
                </div>

                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-[3.2rem] font-black text-white mb-6 leading-tight">
                  Detrás de cada jugada,{" "}
                  <span
                    style={{ backgroundImage: `linear-gradient(90deg, ${TEAL}, ${GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    debe haber una identidad real.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Verifica quién se registra en tu plataforma, confirma que su documento esté vigente y conecta rostro,
                  identidad, fuentes oficiales, ubicación y riesgo dentro de un solo flujo de onboarding.
                </p>

                <p className="text-sm text-white/50 mb-10">
                  Prueba de vida pasiva · Comparación facial 1:1 · Documento y vigencia · INE y RENAPO · Listas de riesgo · Geolocalización
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                  <Link
                    href="/contacto"
                    onClick={() => gtmEvent("click_diseñar_flujo_kyc", { location: "hero", page: "kyc-igaming-mexico" })}
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-px"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    Diseñar mi flujo KYC
                  </Link>
                  <Link
                    href="#flujo"
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    Ver cómo funciona
                  </Link>
                </div>

                <p className="text-sm text-white/40 max-w-2xl mx-auto lg:mx-0">
                  Para casinos en línea, apuestas deportivas, sorteos, plataformas de gaming y operadores que necesitan
                  conocer a sus jugadores sin convertir la verificación en una barrera.
                </p>
              </div>

              <div data-sr="right" className="hidden lg:block">
                <FramedImage
                  src="/images/kyc-igaming/hero.jpg"
                  alt="Verificación de identidad KYC durante el onboarding de un jugador en una plataforma de apuestas deportivas"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Franja de confianza ──────────────────────────────────────── */}
        <section className="py-8" style={{ background: NAVY_LIGHT, borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs sm:text-sm font-semibold text-white/50">
              <span>Tecnología de identidad desarrollada en México</span>
              <span style={{ color: TEAL }}>ISO 27001</span>
              <span style={{ color: TEAL }}>ISO 9001</span>
              <span>Prueba de vida certificada</span>
              <span>Reconocimiento facial evaluado</span>
              <span>API · SDK · Web · Marca blanca</span>
            </div>
          </div>
        </section>

        {/* ── 3. El problema ──────────────────────────────────────────────── */}
        <section id="problema" className="py-20" aria-labelledby="problema-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
              <div data-sr="left">
                <FramedImage
                  src="/images/kyc-igaming/riesgo-identificacion-prestada.jpg"
                  alt="Comparación facial que detecta que el rostro capturado no coincide con la fotografía del documento"
                />
              </div>
              <div data-sr className="text-center lg:text-left">
                <h2 id="problema-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  Un registro completo no siempre significa una identidad verificada.
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Un correo, un teléfono y una fotografía de una identificación pueden llenar un formulario. No
                  necesariamente demuestran quién está detrás de la cuenta. En gaming, una validación incompleta puede
                  permitir que el riesgo entre desde el primer punto de contacto.
                </p>
              </div>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROBLEMS.map((p) => (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{p.scenario}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: TEAL }}>Lo que debe comprobarse</p>
                  <p className="text-xs text-white/50 leading-relaxed">{p.check}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Simulador interactivo ─────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="simulador-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10 max-w-2xl mx-auto">
              <h2 id="simulador-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                ¿Qué está intentando pasar?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Elige un escenario y descubre qué capa de JAAK interviene y qué resultado esperar.
              </p>
            </div>
            <div data-sr>
              <ScenarioSimulator />
            </div>
          </div>
        </section>

        {/* ── 5. La solución: seis capas ───────────────────────────────────── */}
        <section id="solucion" className="py-20" aria-labelledby="solucion-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
              <div data-sr className="text-center lg:text-left order-2 lg:order-1">
                <h2 id="solucion-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  Seis capas para conocer a cada jugador.
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  JAAK conecta seis controles de identidad dentro de una misma experiencia. El jugador realiza un solo
                  recorrido. Tu operación recibe un resultado estructurado y la evidencia de cada validación.
                </p>
              </div>
              <div data-sr="right" className="order-1 lg:order-2">
                <FramedImage
                  src="/images/kyc-igaming/seis-capas.jpg"
                  alt="Documento oficial y rostro conectados a un flujo de validación de identidad, ubicación y fuentes oficiales"
                />
              </div>
            </div>
            <div data-sr>
              <LayersExplorer />
            </div>
          </div>
        </section>

        {/* ── 6. Flujo ─────────────────────────────────────────────────────── */}
        <section id="flujo" className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="flujo-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
              <div data-sr="left">
                <FramedImage
                  src="/images/kyc-igaming/expediente-evidencia.jpg"
                  alt="Panel con el resultado estructurado de las validaciones de identidad completadas durante el onboarding"
                />
              </div>
              <div data-sr className="text-center lg:text-left">
                <h2 id="flujo-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  Del registro a una identidad verificada.
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Un solo recorrido para el jugador. Un resultado estructurado, con evidencia de cada validación, para
                  tu operación.
                </p>
              </div>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {FLOW_STEPS.map((step) => (
                <div key={step.num} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-3xl font-black mb-3" style={{ color: "rgba(30,202,211,0.3)" }}>{step.num}</div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-white/40">
              Resultado estructurado · Evidencia por validación · Integración mediante API o webhook
            </p>
          </div>
        </section>

        {/* ── 7. Experiencia del jugador ───────────────────────────────────── */}
        <section className="py-20" aria-labelledby="experiencia-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="experiencia-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Más controles no deberían significar más pasos.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Las seis capas funcionan dentro de una sola experiencia para evitar que cada validación se convierta
                en un formulario, una revisión o un proveedor diferente.
              </p>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {EXPERIENCE_COLUMNS.map((col) => (
                <div key={col.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-sm font-bold mb-4" style={{ color: TEAL }}>{col.title}</h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs text-white/60 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Contenido por rol ─────────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="rol-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <h2 id="rol-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Un beneficio distinto según tu rol
              </h2>
            </div>
            <div data-sr>
              <RoleSelector />
            </div>
          </div>
        </section>

        {/* ── 9. Cumplimiento en México ─────────────────────────────────────── */}
        <section id="cumplimiento" className="py-20" aria-labelledby="cumplimiento-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
              <div data-sr className="text-center lg:text-left order-2 lg:order-1">
                <h2 id="cumplimiento-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  En gaming, el onboarding también es parte del control regulatorio.
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  La práctica de juegos con apuesta, concursos y sorteos se encuentra contemplada como Actividad
                  Vulnerable por la LFPIORPI. Para 2026, el portal oficial del SAT señala los siguientes umbrales:
                </p>
              </div>
              <div data-sr="right" className="order-1 lg:order-2">
                <FramedImage
                  src="/images/kyc-igaming/validacion-fuentes-oficiales.jpg"
                  alt="Especialista de cumplimiento revisando en su laptop el resultado de validaciones de identidad contra fuentes oficiales"
                />
              </div>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 gap-5 mb-10">
              <div className="rounded-2xl p-6" style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.25)" }}>
                <p className="text-3xl font-black" style={{ color: TEAL }}>325 UMA</p>
                <p className="text-lg font-bold text-white mt-1">$38,125.75 MXN</p>
                <p className="text-xs text-white/50 mt-2">Umbral asociado con la identificación en juegos con apuesta, concursos y sorteos.</p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.25)" }}>
                <p className="text-3xl font-black" style={{ color: "#F59E0B" }}>645 UMA</p>
                <p className="text-lg font-bold text-white mt-1">$75,664.95 MXN</p>
                <p className="text-xs text-white/50 mt-2">Umbral asociado con la presentación de Aviso.</p>
              </div>
            </div>

            <p className="text-xs text-white/40 text-center max-w-2xl mx-auto mb-12">
              Los valores deben actualizarse conforme cambie la UMA y deben analizarse de acuerdo con la modalidad de
              operación, acumulación y criterios aplicables. El SAT también establece obligaciones relacionadas con
              la integración de expedientes de identificación, la verificación de la identidad y la consulta de
              listas oficiales.
            </p>

            <div data-sr className="mb-12">
              <p className="text-center text-sm font-semibold text-white/70 mb-6">Calcula el umbral orientativo para tu operación</p>
              <UmaCalculator />
            </div>

            <div data-sr className="rounded-2xl p-6 text-center max-w-2xl mx-auto" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-sm text-white/70 leading-relaxed">
                JAAK aporta la capa de identidad, consulta y evidencia del onboarding. La definición del momento de
                verificación, el seguimiento de operaciones, la acumulación de montos, el monitoreo transaccional y
                la presentación de Avisos permanecen bajo responsabilidad del operador y de sus políticas de
                cumplimiento.
              </p>
              <Link
                href="/contacto"
                onClick={() => gtmEvent("click_revisar_flujo", { location: "cumplimiento", page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 mt-6 text-sm font-bold transition-all hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY }}
              >
                Revisar mi flujo de identificación
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. KYC y AML ─────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="kyc-aml-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="kyc-aml-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Identidad primero. Riesgo después. Evidencia siempre.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Un KYC responde: ¿esta persona es quien dice ser? Un análisis AML amplía la pregunta: ¿existe
                información que deba considerar antes de establecer o continuar la relación?
              </p>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="text-sm font-bold mb-4" style={{ color: TEAL }}>KYC para el onboarding</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>Prueba de vida</li>
                  <li>Comparación facial</li>
                  <li>Documento y vigencia</li>
                  <li>INE y RENAPO</li>
                  <li>OFAC, INTERPOL y SAT 69-B</li>
                  <li>Geolocalización</li>
                </ul>
              </div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="text-sm font-bold mb-4" style={{ color: GREEN }}>Ampliación AML</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>Más de 40 fuentes de riesgo</li>
                  <li>Sanciones nacionales e internacionales</li>
                  <li>Personas políticamente expuestas, según paquete</li>
                  <li>Fuentes fiscales y regulatorias</li>
                  <li>Resultados documentados para revisión</li>
                </ul>
              </div>
            </div>
            <div data-sr className="text-center">
              <Link
                href="/listas-de-riesgo-pld-aml"
                onClick={() => gtmEvent("click_conocer_aml", { page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:-translate-y-px"
                style={{ background: "rgba(42,215,150,0.1)", border: "1px solid rgba(42,215,150,0.3)", color: GREEN }}
              >
                Conocer el paquete AML
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. Escenarios de uso ─────────────────────────────────────────── */}
        <section className="py-20" aria-labelledby="escenarios-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="escenarios-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Un mismo motor. Diferentes operaciones de gaming.
              </h2>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map((uc) => (
                <div key={uc.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-base font-bold text-white mb-2">{uc.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. Comparador ────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="comparador-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12">
              <h2 id="comparador-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                KYC básico vs. KYC JAAK
              </h2>
            </div>
            <div data-sr className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-white/50">KYC básico</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide" style={{ color: TEAL }}>JAAK</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.basico} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      <td className="px-5 py-4 text-white/50">{row.basico}</td>
                      <td className="px-5 py-4 text-white font-medium">{row.jaak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 13. Diferencia JAAK ───────────────────────────────────────────── */}
        <section className="py-20" aria-labelledby="diferencia-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="diferencia-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                No solo recibas un documento. Conecta toda la identidad.
              </h2>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DIFFERENCE_ITEMS.map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-2xl mb-3 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 13.5. Prueba el KYC ──────────────────────────────────────────────── */}
        <section id="prueba" className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="prueba-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: TEAL }}>
                Prueba el KYC
              </span>
              <h2 id="prueba-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-4">
                Empieza con el plan Cobre antes de integrar a producción.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                El plan Cobre es el paquete de prueba de JAAK: {COBRE_PACKAGE.cantidad} {KYC_PRODUCT.unidad} con 40%
                de descuento de bienvenida, para validar el flujo completo antes de escalar tu operación de gaming.
              </p>
            </div>

            <div
              data-sr
              className="rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.3)" }}
            >
              <div className="text-center sm:text-left">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: TEAL, color: NAVY }}
                >
                  Plan Cobre · 40% de descuento
                </span>
                <p className="text-3xl font-black text-white">
                  {formatMXN(COBRE_PACKAGE.precio)} <span className="text-base font-semibold text-white/50">MXN + IVA</span>
                </p>
                <p className="text-sm text-white/60 mt-1">
                  {COBRE_PACKAGE.cantidad} {KYC_PRODUCT.unidad} para probar el flujo completo de onboarding
                </p>
              </div>
              <a
                href={KYC_CHECKOUT_URLS.cobre}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_comprar_cobre", { location: "prueba", page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold whitespace-nowrap transition-all hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY }}
              >
                Comprar Plan Cobre
              </a>
            </div>

            <p className="text-center text-xs font-semibold uppercase tracking-wide text-white/40 mb-5">
              ¿Necesitas más volumen? Elige tu paquete
            </p>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OTHER_PACKAGES.map((pkg) => (
                <a
                  key={pkg.id}
                  href={KYC_CHECKOUT_URLS[pkg.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtmEvent("click_comprar_paquete", { tier: pkg.id, location: "prueba", page: "kyc-igaming-mexico" })}
                  className="rounded-2xl p-5 text-center transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-sm font-bold text-white mb-1">{pkg.nombre}</p>
                  <p className="text-xs text-white/50 mb-3">{pkg.cantidad} {KYC_PRODUCT.unidad}</p>
                  <p className="text-lg font-black" style={{ color: TEAL }}>{formatMXN(pkg.precio)}</p>
                  <p className="text-[11px] text-white/40">MXN + IVA</p>
                </a>
              ))}
            </div>
            <p className="text-center text-[11px] text-white/40 mt-8 max-w-lg mx-auto">
              Precios en pesos mexicanos, sin IVA ({(IVA * 100).toFixed(0)}%). Los paquetes vencen a los 12 meses de
              la compra y no son reembolsables. Para más de 1,000 verificaciones al mes, contáctanos para una
              cotización Enterprise.
            </p>
          </div>
        </section>

        {/* ── 14. Integración ────────────────────────────────────────────────── */}
        <section id="integracion" className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="integracion-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
              <div data-sr="left">
                <FramedImage
                  src="/images/kyc-igaming/api-sdk.jpg"
                  alt="Desarrollador integrando el flujo de verificación de identidad JAAK mediante API"
                />
              </div>
              <div data-sr className="text-center lg:text-left">
                <h2 id="integracion-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  Conecta JAAK con la experiencia que ya tienes.
                </h2>
              </div>
            </div>
            <div data-sr>
              <IntegrationTimeline />
            </div>
            <div data-sr className="flex flex-col sm:flex-row gap-3 justify-center mt-12">
              <Link
                href="/contacto"
                onClick={() => gtmEvent("click_sandbox", { page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY }}
              >
                Solicitar acceso al sandbox
              </Link>
              <Link
                href="/docs"
                onClick={() => gtmEvent("click_docs", { page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Consultar documentación
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. Recurso descargable ───────────────────────────────────────── */}
        <section id="guia" className="py-20" aria-labelledby="guia-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div data-sr>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: TEAL }}>
                  Recurso descargable
                </span>
                <h2 id="guia-heading" className="text-2xl sm:text-3xl font-black text-white mt-3 mb-5">
                  Guía KYC para Gaming en México
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-6">Descarga una guía práctica sobre:</p>
                <ul className="space-y-2.5">
                  {[
                    "Identificación de jugadores",
                    "Riesgos del onboarding digital",
                    "Umbrales LFPIORPI 2026",
                    "Diferencia entre KYC y AML",
                    "Seis capas de verificación",
                    "Expedientes y evidencia",
                    "Preguntas para evaluar a un proveedor KYC",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-sr="right">
                <GuideLeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── 16. Cierre ────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ background: `linear-gradient(135deg, ${NAVY_LIGHT} 0%, ${NAVY} 100%)` }}>
          <div data-sr className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              La confianza no comienza cuando el jugador deposita.
            </h2>
            <p className="text-lg mb-8" style={{ color: TEAL }}>
              Comienza cuando puedes demostrar quién está detrás de la cuenta.
            </p>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Construye un onboarding que conecte experiencia, identidad, riesgo y evidencia desde el primer contacto.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Link
                href="/contacto"
                onClick={() => gtmEvent("click_diseñar_flujo_kyc", { location: "cta_final", page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY }}
              >
                Diseñar mi flujo KYC para gaming
              </Link>
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_agendar_demo", { location: "cta_final", page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Agendar una revisión de 15 minutos
              </a>
            </div>
            <a
              href={getWhatsAppUrl("footer")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtmEvent("whatsapp_click", { source: "cta_final", page_path: "/soluciones/kyc-igaming-mexico" })}
              className="text-sm underline underline-offset-2 text-white/50 hover:text-white transition-colors"
            >
              Resolver dudas por WhatsApp
            </a>
            <p className="text-xs text-white/40 mt-8">API · SDK · Marca blanca · Soporte en México</p>
          </div>
        </section>

        {/* ── 17. FAQ ────────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: OFFWHITE }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10" style={{ color: NAVY }}>
              Preguntas frecuentes
            </h2>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8EF" }}>
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  style={{ borderBottom: i === FAQ_ITEMS.length - 1 ? "none" : "1px solid #EEF2F5", background: "#fff" }}
                >
                  <summary className="w-full text-left px-6 py-5 flex items-start gap-4 cursor-pointer list-none">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-sm font-bold"
                      style={{ background: "#EEF2F5", color: "#64748B" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="flex-1 font-semibold text-[15px] leading-snug" style={{ color: NAVY }}>{item.q}</span>
                  </summary>
                  <p className="px-6 pb-6 pl-16 text-[14px] leading-relaxed" style={{ color: "#6B7686" }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
