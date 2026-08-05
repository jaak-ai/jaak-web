"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { gtmEvent } from "@/components/GoogleTagManager";
import { productos as CATALOG_PRODUCTS, formatMXN } from "@/data/autoservicio-catalogo";
import UmaCalculator from "./UmaCalculator";
import ScenarioSimulator from "./ScenarioSimulator";
import LayersExplorer from "./LayersExplorer";
import VideoDemo from "./VideoDemo";
import GuideLeadForm from "./GuideLeadForm";

const NAVY = "#02132D";
const NAVY_LIGHT = "#0B1D3A";
const TEAL = "#1ECAD3";
const GREEN = "#2AD796";
const OFFWHITE = "#F5F5F3";

const COBRE_PACKAGE = CATALOG_PRODUCTS.find((p) => p.id === "kyc")!.paquetes.find((p) => p.id === "cobre")!;
const COBRE_CHECKOUT_URL = "https://platform.jaak.ai/#/onboarding/user-info?plan=cobre";

const WHATSAPP_URL_GAMING = `https://wa.me/525614390780?text=${encodeURIComponent(
  "Hola, vi la landing de KYC para Gaming e iGaming en México de JAAK. Quiero revisar cómo adaptar el flujo de verificación a nuestra operación. Referencia: Landing Gaming JAAK."
)}`;
const DEMO_ANDRES_URL = "https://meetings.hubspot.com/jose-andres-yllescas-lira?uuid=ddd51283-09f7-4350-a62f-b923e4fe5f2d";

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

/** Botón flotante de WhatsApp, propio de esta landing (número y mensaje de campaña). */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL_GAMING}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => gtmEvent("whatsapp_click", { source: "floating_button", page_path: "/soluciones/kyc-igaming-mexico" })}
      className="fixed bottom-5 right-5 z-40 hidden sm:inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:-translate-y-0.5"
      style={{ background: "#25D366" }}
      aria-label="Hablar por WhatsApp con un especialista de JAAK"
    >
      <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
      </svg>
      Hablar por WhatsApp
    </a>
  );
}

const PROBLEMS = [
  {
    title: "Identificación prestada",
    scenario: "Una persona intenta crear una cuenta con el documento de un tercero.",
    risk: "La cuenta queda asociada a una identidad que no corresponde al usuario frente al dispositivo.",
  },
  {
    title: "Documento alterado o vencido",
    scenario: "El documento contiene modificaciones, información inconsistente o ha perdido vigencia.",
    risk: "El alta se completa con información que no puede sostenerse durante una revisión.",
  },
  {
    title: "Persona no presente",
    scenario: "Se utilizan fotografías, pantallas o videos para intentar superar la captura facial.",
    risk: "La plataforma no puede demostrar que había una persona presente durante la verificación.",
  },
  {
    title: "Datos que no coinciden",
    scenario: "La información documental no coincide con el rostro, la CURP o las fuentes consultadas.",
    risk: "Se acumulan registros inconsistentes y revisiones manuales.",
  },
  {
    title: "Riesgo no detectado",
    scenario: "La identidad parece válida, pero la persona aparece en fuentes o listas configuradas.",
    risk: "El jugador avanza sin que el equipo haya recibido una señal para aplicar sus reglas internas.",
  },
];

const RECEIVES = [
  { title: "Resultado por control", desc: "Consulta el resultado de documento, vigencia, prueba de vida, comparación facial, fuentes y riesgo." },
  { title: "Evidencia del proceso", desc: "Conserva la trazabilidad de las validaciones ejecutadas dentro del expediente." },
  { title: "Excepciones identificables", desc: "Distingue qué control no pudo completarse, requiere un nuevo intento o debe revisarse." },
  { title: "Decisión dentro de tu operación", desc: "Utiliza el resultado para aprobar, detener o enviar el caso a revisión según tus políticas internas." },
];

const MOMENTS = [
  { title: "Registro de nuevos jugadores", desc: "Confirma identidad, documento y rostro antes de habilitar la cuenta." },
  { title: "Recuperación de cuenta", desc: "Vuelve a comparar la identidad cuando exista una solicitud sensible de acceso." },
  { title: "Operaciones de mayor riesgo", desc: "Ejecuta validaciones adicionales cuando una transacción o comportamiento requiera controles reforzados." },
  { title: "Retiros o entrega de premios", desc: "Confirma que la identidad corresponda al titular antes de completar el proceso definido por el operador." },
  { title: "Revalidación", desc: "Actualiza información cuando un documento pierda vigencia o las políticas internas requieran una nueva revisión." },
];

const TRUST_ITEMS = [
  { title: "ISO 27001", desc: "Gestión de seguridad de la información evaluada bajo un estándar internacional." },
  { title: "ISO 9001", desc: "Procesos de gestión de calidad evaluados bajo un estándar internacional." },
  { title: "Motor facial evaluado", desc: "Comparación facial evaluada frente a estándares de desempeño reconocidos en la industria." },
  { title: "Prueba de vida evaluada", desc: "Detección de intentos de presentación (fotos, pantallas, video) evaluada frente a estándares de la industria." },
  { title: "Tecnología desarrollada en México", desc: "Infraestructura y motores biométricos propios, operados desde México." },
];

const FAQ_ITEMS = [
  {
    q: "¿La prueba de vida requiere movimientos?",
    a: "No. El flujo utiliza prueba de vida pasiva para confirmar presencia sin pedir al usuario que gire la cabeza o realice gestos.",
  },
  {
    q: "¿Qué ocurre si una validación no se completa?",
    a: "La operación recibe el resultado del control correspondiente para decidir si solicita un nuevo intento, detiene el flujo o envía el caso a revisión.",
  },
  {
    q: "¿Puede conectarse con una plataforma existente?",
    a: "Sí. JAAK puede implementarse mediante API, SDK o una experiencia de marca blanca, según el alcance acordado.",
  },
  {
    q: "¿Incluye fuentes oficiales y listas de riesgo?",
    a: "El flujo puede configurarse con las fuentes y consultas contratadas para cada operación.",
  },
  {
    q: "¿Se conserva evidencia?",
    a: "La verificación genera un resultado estructurado y la trazabilidad de los controles ejecutados.",
  },
  {
    q: "¿JAAK sustituye el análisis legal del operador?",
    a: "No. JAAK aporta tecnología de identidad, validaciones y evidencia. Las obligaciones y reglas aplicables deben definirse por cada operador conforme a su permiso, actividad y marco regulatorio.",
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
      <FloatingWhatsApp />
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
                    debe haber una identidad verificable.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Verifica quién se registra en tu plataforma, confirma la vigencia de su documento y conecta rostro,
                  prueba de vida pasiva, fuentes oficiales, riesgo y ubicación dentro de un solo flujo.
                </p>
                <p className="text-lg md:text-xl font-semibold mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: TEAL }}>
                  Tu operación recibe un resultado estructurado y la evidencia de cada validación.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                  <Link
                    href="#video"
                    onClick={() => gtmEvent("click_ver_video_60s", { location: "hero", page: "kyc-igaming-mexico" })}
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-px"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    Ver el flujo en 60 segundos
                  </Link>
                  <a
                    href={WHATSAPP_URL_GAMING}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("whatsapp_click", { source: "hero", page_path: "/soluciones/kyc-igaming-mexico" })}
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    Hablar con un especialista
                  </a>
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

        {/* ── 2. El problema ──────────────────────────────────────────────── */}
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
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: TEAL }}>Riesgo operativo</p>
                  <p className="text-xs text-white/50 leading-relaxed">{p.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Simulador interactivo ─────────────────────────────────────── */}
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

        {/* ── 4. La solución: seis capas ───────────────────────────────────── */}
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
            <p className="text-center text-xs text-white/40 mt-8 max-w-lg mx-auto">
              Las fuentes y listas disponibles dependen de la configuración o el paquete contratado para tu operación.
            </p>
          </div>
        </section>

        {/* ── 5. Video de 60 segundos ───────────────────────────────────────── */}
        <section id="video" className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="video-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <h2 id="video-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Mira cómo funciona el onboarding
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Un recorrido para el jugador. Un resultado claro para tu operación.
              </p>
            </div>
            <div data-sr>
              <VideoDemo />
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                "Sin movimientos faciales guiados.",
                "Sin cambiar entre diferentes procesos.",
                "Sin mostrar datos reales.",
                "Disponible para integrar en la experiencia del operador.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/60 px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Qué recibe tu operación ────────────────────────────────────── */}
        <section className="py-20" aria-labelledby="recibe-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="recibe-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                No recibes solamente un &ldquo;aprobado&rdquo; o &ldquo;rechazado&rdquo;.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Cada verificación genera información estructurada para que tu equipo aplique sus propias reglas de
                decisión.
              </p>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {RECEIVES.map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-semibold" style={{ color: TEAL }}>
              Un jugador realiza un solo recorrido. Tu operación recibe información para decidir.
            </p>
          </div>
        </section>

        {/* ── 7. Momentos de uso ────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="momentos-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 id="momentos-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Activa la verificación donde tu operación la necesita.
              </h2>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {MOMENTS.map((m) => (
                <div key={m.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-white/40 max-w-lg mx-auto">
              El momento exacto y las reglas de cada validación dependen de la configuración y las políticas de cada
              operación.
            </p>
          </div>
        </section>

        {/* ── 8. Cumplimiento en México ─────────────────────────────────────── */}
        <section id="cumplimiento" className="py-20" aria-labelledby="cumplimiento-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
              <div data-sr className="text-center lg:text-left order-2 lg:order-1">
                <h2 id="cumplimiento-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  En gaming, el onboarding también forma parte del control regulatorio.
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Para las operaciones de apuestas por Internet, el sistema de control debe registrar la identidad del
                  apostador. Además, los juegos con apuesta, concursos y sorteos pueden generar obligaciones de
                  identificación y presentación de avisos conforme a la LFPIORPI.
                </p>
              </div>
              <div data-sr="right" className="order-1 lg:order-2">
                <FramedImage
                  src="/images/kyc-igaming/validacion-fuentes-oficiales.jpg"
                  alt="Especialista de cumplimiento revisando en su laptop el resultado de validaciones de identidad contra fuentes oficiales"
                />
              </div>
            </div>

            <blockquote
              data-sr
              className="rounded-2xl p-5 mb-10 text-sm italic text-white/70 leading-relaxed max-w-3xl mx-auto"
              style={{ background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${TEAL}` }}
            >
              &ldquo;El artículo 85 del Reglamento establece que, en apuestas captadas por Internet, vía telefónica o
              electrónica, el sistema de control debe registrar, entre otros elementos, el número de cuenta y la
              identidad del apostador.&rdquo;
              <footer className="mt-2 text-xs not-italic text-white/40">— Art. 85 del Reglamento</footer>
            </blockquote>

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
              Fuente: Portal de Prevención de Lavado de Dinero del SAT. Valores 2026. Los valores deben actualizarse
              conforme cambie la UMA y deben analizarse de acuerdo con la modalidad de operación, acumulación y
              criterios aplicables.
            </p>

            <div data-sr className="mb-12">
              <p className="text-center text-sm font-semibold text-white/70 mb-6">Calcula el umbral orientativo para tu operación</p>
              <UmaCalculator />
            </div>

            <p data-sr className="text-sm text-white/70 leading-relaxed text-center max-w-2xl mx-auto">
              JAAK apoya la implementación de controles de identidad y la generación de evidencia dentro del proceso.
              La definición del momento de verificación, el seguimiento de operaciones, la acumulación de montos, el
              monitoreo transaccional y la presentación de Avisos permanecen bajo responsabilidad del operador y de
              sus políticas de cumplimiento.
            </p>
          </div>
        </section>

        {/* ── 9. Implementación simplificada ───────────────────────────────── */}
        <section id="implementacion" className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="implementacion-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div data-sr="left" className="order-2 lg:order-1">
                <FramedImage
                  src="/images/kyc-igaming/api-sdk.jpg"
                  alt="Desarrollador integrando el flujo de verificación de identidad JAAK mediante API"
                />
              </div>
              <div data-sr className="text-center lg:text-left order-1 lg:order-2">
                <h2 id="implementacion-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  Integra JAAK en la experiencia que ya tienes
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  Implementa el flujo de verificación mediante la modalidad que mejor se adapte a tu plataforma y a tu
                  equipo.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {["API", "SDK", "Marca blanca"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)", color: "#7FE8EC" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Un especialista de JAAK puede ayudarte a definir qué validaciones necesita tu operación, cómo
                  recibirá los resultados y qué modalidad de implementación es la más conveniente.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a
                    href={WHATSAPP_URL_GAMING}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("whatsapp_click", { source: "implementacion", page_path: "/soluciones/kyc-igaming-mexico" })}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:-translate-y-px"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    Hablar con un especialista
                  </a>
                  <a
                    href={DEMO_ANDRES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("click_agendar_demo_andres", { location: "implementacion", page: "kyc-igaming-mexico" })}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    Agendar demo con Andrés
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Confianza y certificaciones ──────────────────────────────── */}
        <section className="py-20" aria-labelledby="confianza-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <h2 id="confianza-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                Tecnología de identidad respaldada por controles evaluados.
              </h2>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-sm font-bold mb-2" style={{ color: TEAL }}>{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. FAQ ────────────────────────────────────────────────────────── */}
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

        {/* ── 12. Plan Cobre (alternativa secundaria) ──────────────────────── */}
        <section id="prueba" className="py-20" style={{ background: NAVY_LIGHT }} aria-labelledby="prueba-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-sr>
              <h2 id="prueba-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Prueba el flujo antes de escalar.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
                Realiza cinco verificaciones para conocer la experiencia del jugador y revisar los resultados que
                recibe tu operación.
              </p>
            </div>
            <div
              data-sr
              className="rounded-2xl p-8 mb-6 inline-flex flex-col items-center gap-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-sm font-bold text-white/70">Plan Cobre</span>
              <p className="text-3xl font-black text-white">
                {formatMXN(COBRE_PACKAGE.precio)} <span className="text-base font-semibold text-white/50">MXN + IVA</span>
              </p>
              <p className="text-sm text-white/60">
                {COBRE_PACKAGE.cantidad} verificaciones para probar el recorrido completo
              </p>
              <a
                href={COBRE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_probar_flujo_cobre", { location: "prueba", page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY }}
              >
                Probar el flujo
              </a>
            </div>
            <p className="text-sm text-white/50">
              Para pruebas técnicas, configuraciones especiales o mayores volúmenes,{" "}
              <a
                href={WHATSAPP_URL_GAMING}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("whatsapp_click", { source: "prueba", page_path: "/soluciones/kyc-igaming-mexico" })}
                className="underline underline-offset-2 hover:text-white transition-colors"
                style={{ color: TEAL }}
              >
                habla con un especialista
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── 13. Recurso descargable (secundario) ─────────────────────────── */}
        <section id="guia" className="py-14" aria-labelledby="guia-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div data-sr>
                <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Recurso descargable
                </span>
                <h2 id="guia-heading" className="text-xl sm:text-2xl font-black text-white mt-2 mb-4">
                  Guía KYC para Gaming en México
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Una guía práctica sobre identificación de jugadores, umbrales LFPIORPI 2026, diferencia entre KYC y
                  AML, y preguntas para evaluar a un proveedor de KYC.
                </p>
              </div>
              <div data-sr="right">
                <GuideLeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. Cierre ────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ background: `linear-gradient(135deg, ${NAVY_LIGHT} 0%, ${NAVY} 100%)` }}>
          <div data-sr className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Conoce a cada jugador antes de dejarlo avanzar.
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Revisa con un especialista cómo combinar documento, prueba de vida pasiva, comparación facial, fuentes
              oficiales, riesgo y geolocalización dentro de tu onboarding.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL_GAMING}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("whatsapp_click", { source: "cta_final", page_path: "/soluciones/kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-all hover:-translate-y-px"
                style={{ background: "#25D366" }}
              >
                Hablar por WhatsApp
              </a>
              <a
                href={DEMO_ANDRES_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_agendar_demo_andres", { location: "cta_final", page: "kyc-igaming-mexico" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Agendar una demo con Andrés
              </a>
            </div>
            <p className="text-sm text-white/40 max-w-lg mx-auto">
              No necesitas compartir datos de jugadores para una primera revisión. Podemos comenzar únicamente con la
              estructura de tu flujo actual.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
