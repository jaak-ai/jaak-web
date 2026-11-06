"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import GuiaCapturaTab from "@/components/kyc-demo/GuiaCapturaTab";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import { productos, buildCheckoutUrl, buildKycRegisterUrl } from "@/data/autoservicio-catalogo";
import type { PricingIndex } from "@/lib/pricing";
import { formatMxn, type FaqItem, type KycTrialOffer } from "@/lib/kycTrialOffer";
import { AUTOSERVICIO_COPY } from "@/config/commercial-copy";

/* ─────────────────────────────────────────────────────────────────────────
 * Constantes de marca e identidad visual (paleta de esta campaña)
 * ───────────────────────────────────────────────────────────────────────── */
const NAVY_DARK = "#071426";
const NAVY = "#202945";
const TEAL = "#1ECAD3";
const OFFWHITE = "#F5F5F3";
const GRAY_LIGHT = "#EEF2F5";

const VIDEO_ID = "q6Xug6_kms0";
const LOCK_SECONDS = 20;
const SESSION_LABEL = "Sesión KYC #5207418";
const REGISTRO_URL = "/api/landing";
const LEAD_SOURCE = "landing_demo_kyc";
const STORAGE_KEY = "kyc-demo-autoservicio-registered";

const WHATSAPP_NUMBER = "5215535091788";
const WHATSAPP_MESSAGE =
  "Hola, te contactamos de JAAK IT. Vimos que te interesó nuestra solución de identidad digital y cumplimiento regulatorio. ¿Tienes 5 minutos para que te cuente cómo podemos ayudarte?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* ─────────────────────────────────────────────────────────────────────────
 * Catálogo de productos de prueba (precios reales del catálogo autoservicio)
 * ───────────────────────────────────────────────────────────────────────── */
type ProductId = "kyc" | "firma" | "firma-nom151-kyc" | "ine-curp" | "ocr" | "listas" | "no-se";

interface TrialProduct {
  id: ProductId;
  nombre: string;
  tagline: string;
}

// AUD-03: el producto principal de la landing es Cobre KYC (oferta del catálogo).
// Los demás productos se listan sin importes: cada uno tiene su precio y unidades en el
// catálogo de Autoservicio y aquí no hay ficha promocional aprobada.
const PRODUCTS: TrialProduct[] = [
  { id: "kyc", nombre: "KYC biométrico", tagline: "Valida identidad con documento, biometría facial, prueba de vida y evidencia." },
  { id: "firma", nombre: "Firma electrónica", tagline: "Firma documentos de forma digital con trazabilidad del proceso." },
  { id: "firma-nom151-kyc", nombre: "Firma NOM-151 + KYC", tagline: "Une identidad, firma y expediente auditable en un solo flujo." },
  { id: "ine-curp", nombre: "Validación INE / CURP", tagline: "Consulta y valida información contra fuentes oficiales." },
  { id: "ocr", nombre: "OCR de documentos", tagline: "Extrae datos de documentos para reducir captura manual." },
  { id: "listas", nombre: "Listas de riesgo", tagline: "Consulta coincidencias relevantes para procesos de prevención y control." },
];

const PRODUCT_OPTIONS: { id: ProductId; label: string }[] = [
  ...PRODUCTS.map((p) => ({ id: p.id, label: p.nombre })),
  { id: "no-se", label: "Aún no sé cuál necesito" },
];

const productLabel = (id: string) => PRODUCT_OPTIONS.find((p) => p.id === id)?.label ?? "";

// KYC usa el checkout unificado /register con el plan pre-seleccionado
// (TO-809 Fase 3 / AUTO-20).
const KYC_REGISTER_URL = buildKycRegisterUrl("cobre");

// Mapeo id de esta landing → id real del catálogo de autoservicio (paquete
// "cobre" = entrada de prueba). INE/CURP y OCR se dejan fuera a propósito:
// cada uno cubre dos productos del catálogo (ine/curp, ocr-inteligente/ocr-id)
// y no hay forma de saber cuál quiere sin preguntarle, así que van al catálogo
// completo en vez de asumir uno.
const CATALOG_PRODUCT_ID: Partial<Record<ProductId, string>> = {
  firma: "firma-simple",
  "firma-nom151-kyc": "firma-nom151-kyc",
  listas: "listas-negras",
};

// Construye el link de compra directa (mismo generador que usa /autoservicio)
// con precio y cantidad reales del catálogo — nunca un snapshot hardcodeado
// que pueda quedar desactualizado.
function buildTrialCheckoutHref(
  id: ProductId | "",
  pricingIndex: PricingIndex,
  utm: ReturnType<typeof getUtmParams>
): string {
  if (id === "kyc") return KYC_REGISTER_URL;
  const catalogId = id ? CATALOG_PRODUCT_ID[id] : undefined;
  if (!catalogId) return "/autoservicio";
  const producto = productos.find((p) => p.id === catalogId);
  const paquete = producto?.paquetes.find((q) => q.id === "cobre");
  if (!producto || !paquete) return "/autoservicio";
  return buildCheckoutUrl([{ producto, paquete }], { pricingIndex, utm });
}

/* ─────────────────────────────────────────────────────────────────────────
 * Datos de contenido estático
 * ───────────────────────────────────────────────────────────────────────── */
// Etapas conceptuales del proceso manual (sin cifras: no son resultados medidos de JAAK).
const MANUAL_STAGES = [
  "Los usuarios llegan",
  "Inician el proceso",
  "Suben documentos",
  "Esperan revisión",
  "Se convierten en clientes",
];

const HOW_IT_WORKS = [
  { num: "1", title: "Crea una sesión", desc: "Genera un flujo desde la plataforma para iniciar la validación." },
  { num: "2", title: "El usuario captura su documento", desc: "El usuario toma fotografía de su identificación y completa la información solicitada." },
  { num: "3", title: "Realiza biometría facial", desc: "El flujo compara el rostro con el documento e incorpora prueba de vida." },
  { num: "4", title: "Se procesa la validación", desc: "JAAK revisa señales de identidad, documento y riesgo según el producto seleccionado." },
  { num: "5", title: "Consulta el resultado", desc: "El resultado queda disponible para seguimiento, revisión o auditoría interna." },
];

const COMPARISON_ROWS = [
  ["Documentos por correo o WhatsApp", "Sesiones digitales estructuradas"],
  ["Revisión manual caso por caso", "Flujo automatizado desde la plataforma"],
  ["Evidencia dispersa", "Expediente consultable"],
  ["Validación visual", "Documento + biometría + prueba de vida"],
  ["Difícil de escalar", "Paquetes disponibles en autoservicio"],
  ["Requiere seguimiento manual", "Estados y resultados desde plataforma"],
];

const USE_CASES = [
  { title: "Alta de clientes", desc: "Verifica usuarios antes de activar cuentas o servicios." },
  { title: "Firma de contratos", desc: "Valida identidad antes de firmar documentos relevantes." },
  { title: "Onboarding financiero", desc: "Reduce fricción en procesos de alta y expediente." },
  { title: "Inmobiliario", desc: "Identifica compradores, vendedores, arrendatarios o representantes." },
  { title: "Marketplaces", desc: "Reduce cuentas falsas, usuarios duplicados o perfiles de riesgo." },
  { title: "RH y proveedores", desc: "Valida identidad de candidatos, colaboradores o terceros." },
];

const TRUST_BADGES = [
  "KYC biométrico", "Prueba de vida", "Expediente auditable", "Firma digital",
  "NOM-151", "LFPIORPI", "CNBV", "PLD/FT", "OFAC", "SAT 69-B",
];

/* ─────────────────────────────────────────────────────────────────────────
 * YouTube IFrame API — tipos mínimos necesarios
 * ───────────────────────────────────────────────────────────────────────── */
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  getCurrentTime: () => number;
}
interface YTPlayerEvent {
  data: number;
  target: YTPlayer;
}
interface YTNamespace {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars: Record<string, number>;
      events: {
        onReady: () => void;
        onStateChange: (e: YTPlayerEvent) => void;
      };
    }
  ) => YTPlayer;
  PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

/* ─────────────────────────────────────────────────────────────────────────
 * Link a la compra del paquete Cobre KYC (flujo de registro/compra en la plataforma
 * de JAAK, el mismo que ya usa el formulario). Incluye los UTM vigentes.
 * ───────────────────────────────────────────────────────────────────────── */
function useKycPurchaseHref(): string {
  const [href, setHref] = useState(KYC_REGISTER_URL);
  useEffect(() => {
    setHref(buildKycRegisterUrl("cobre", { utm: getUtmParams() }));
  }, []);
  return href;
}

/* ─────────────────────────────────────────────────────────────────────────
 * Icono de check reutilizable
 * ───────────────────────────────────────────────────────────────────────── */
function CheckIcon({ color = TEAL }: { color?: string }) {
  return (
    <svg className="h-4 w-4 flex-shrink-0" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * LandingHeader — nav sticky específico de esta campaña
 * ───────────────────────────────────────────────────────────────────────── */
function LandingHeader({ offer, purchaseHref }: { offer: KycTrialOffer | null; purchaseHref: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Demo", href: "#demo" },
    { label: "Productos", href: "#productos" },
    { label: "Casos de uso", href: "#casos-de-uso" },
    { label: "Paquete Cobre KYC", href: "#oferta" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,20,38,0.92)" : "rgba(7,20,38,0.55)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${scrolled ? "rgba(30,202,211,0.25)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logos/jaak-logo-azul.png"
              alt="JAAK"
              width={120}
              height={48}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.slice(0, 4).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {offer ? (
              <a
                href={purchaseHref}
                onClick={() => gtmEvent("click_buy_99", { location: "header" })}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13.5px] font-bold transition-transform hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY_DARK }}
              >
                Seleccionar paquete Cobre KYC
              </a>
            ) : (
              <Link
                href="/autoservicio"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13.5px] font-bold transition-transform hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY_DARK }}
              >
                Ver catálogo de Autoservicio
              </Link>
            )}
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-5 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/80 py-1.5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * VideoLockOverlay — bloqueo a los 20s
 * ───────────────────────────────────────────────────────────────────────── */
function VideoLockOverlay({
  secondsWatched,
  onRegisterClick,
  onBuyClick,
  offer,
  purchaseHref,
}: {
  secondsWatched: number;
  onRegisterClick: () => void;
  onBuyClick: () => void;
  offer: KycTrialOffer | null;
  purchaseHref: string;
}) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-5 sm:p-8"
      style={{ background: "rgba(7,20,38,0.82)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 sm:p-8 text-center"
        style={{
          background: "rgba(32,41,69,0.85)",
          border: `1px solid rgba(30,202,211,0.4)`,
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.35)", color: TEAL }}
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-12V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Demo bloqueada
          </span>
        </div>
        <p className="text-[11px] font-medium text-white/45 mb-1">{SESSION_LABEL}</p>
        <p className="text-[11px] font-medium text-white/45 mb-5">{secondsWatched} segundos vistos</p>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          ¿Quieres ver el flujo completo?
        </h3>
        <p className="text-[14px] leading-relaxed text-white/70 mb-6">
          Deja tus datos para desbloquear la demo completa.{offer ? " También puedes seleccionar el paquete Cobre KYC para probar la plataforma con tu propio caso de uso." : ""}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onRegisterClick}
            className="w-full rounded-xl px-5 py-3.5 text-[14px] font-bold transition-transform hover:-translate-y-px"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Desbloquear demo completa
          </button>
          {offer && (
            <a
              href={purchaseHref}
              onClick={onBuyClick}
              className="block w-full rounded-xl px-5 py-3 text-center text-[14px] font-semibold text-white border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)" }}
            >
              Seleccionar paquete Cobre KYC
            </a>
          )}
        </div>

        <p className="mt-5 text-[12px] leading-relaxed text-white/40">
          Autoservicio se utiliza desde la plataforma Web de JAAK.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * VideoGatePlayer — reproductor con YouTube IFrame API + bloqueo a los 20s
 * ───────────────────────────────────────────────────────────────────────── */
function VideoGatePlayer({
  registered,
  onRegisterCta,
  onBuyCta,
  offer,
  purchaseHref,
}: {
  registered: boolean;
  onRegisterCta: () => void;
  onBuyCta: () => void;
  offer: KycTrialOffer | null;
  purchaseHref: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const registeredRef = useRef(registered);
  const startedRef = useRef(false);
  const reachedRef = useRef(false);

  const [playerReady, setPlayerReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsWatched, setSecondsWatched] = useState(0);

  useEffect(() => {
    registeredRef.current = registered;
  }, [registered]);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const onPlayerStateChange = useCallback((event: YTPlayerEvent) => {
    const YT = window.YT;
    if (!YT) return;

    if (event.data === YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      if (!startedRef.current) {
        startedRef.current = true;
        setStarted(true);
        gtmEvent("click_play_video");
        gtmEvent("video_started");
      }
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          const player = playerRef.current;
          if (!player) return;
          const t = player.getCurrentTime();
          setSecondsWatched(Math.min(Math.floor(t), LOCK_SECONDS));
          if (!registeredRef.current && t >= LOCK_SECONDS) {
            player.pauseVideo();
            setLocked(true);
            setIsPlaying(false);
            if (!reachedRef.current) {
              reachedRef.current = true;
              gtmEvent("video_reached_20s");
              gtmEvent("video_locked");
            }
            stopPolling();
          }
        }, 400);
      }
    } else {
      setIsPlaying(false);
      stopPolling();
    }
  }, [stopPolling]);

  const createPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current || !window.YT) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: { enablejsapi: 1, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3 },
      events: {
        onReady: () => setPlayerReady(true),
        onStateChange: onPlayerStateChange,
      },
    });
  }, [onPlayerStateChange]);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      createPlayer();
      return stopPolling;
    }
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      createPlayer();
    };
    return stopPolling;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPlayer]);

  // Al registrarse: desbloquear y reanudar
  useEffect(() => {
    if (registered && locked) {
      setLocked(false);
      gtmEvent("view_full_demo");
      playerRef.current?.playVideo();
    }
  }, [registered, locked]);

  const handlePlayClick = () => {
    if (!playerReady) return;
    playerRef.current?.playVideo();
  };

  const handleToggle = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const progressPct = registered ? 100 : Math.min((secondsWatched / LOCK_SECONDS) * 100, 100);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl transition-[min-height] duration-300 ${locked ? "min-h-[420px] sm:min-h-[400px]" : ""}`}
      style={{
        aspectRatio: locked ? undefined : "16/9",
        background: NAVY_DARK,
        border: "1px solid rgba(30,202,211,0.3)",
        boxShadow: "0 25px 70px rgba(0,0,0,0.4)",
      }}
    >
      <div ref={containerRef} className="absolute inset-0 h-full w-full" />

      {!started && (
        <button
          onClick={handlePlayClick}
          aria-label="Reproducir demo KYC"
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-left"
          style={{
            background:
              "radial-gradient(120% 120% at 20% 15%, rgba(30,202,211,0.16) 0%, rgba(7,20,38,0.97) 60%)",
          }}
        >
          <div
            className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.35)", color: TEAL }}
          >
            {SESSION_LABEL}
          </div>
          <span
            className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{ background: TEAL, boxShadow: "0 0 0 10px rgba(30,202,211,0.14)" }}
          >
            <svg className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5" fill={NAVY_DARK} viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className="text-center px-6">
            <p className="text-white font-bold text-base sm:text-lg">Mira los primeros 20 segundos</p>
            <p className="text-white/50 text-[13px] mt-1">Captura de documento, biometría facial y prueba de vida</p>
          </div>
        </button>
      )}

      {started && !locked && (
        <div
          className="absolute bottom-0 inset-x-0 flex items-center gap-3 px-4 py-3"
          style={{ background: "linear-gradient(0deg, rgba(7,20,38,0.85) 0%, transparent 100%)" }}
        >
          <button
            onClick={handleToggle}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            {isPlaying ? (
              <svg className="h-3.5 w-3.5" fill="#fff" viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
            ) : (
              <svg className="h-3.5 w-3.5 translate-x-0.5" fill="#fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>
          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progressPct}%`, background: TEAL }}
            />
          </div>
          <span className="text-[11px] font-medium text-white/50 flex-shrink-0">
            {registered ? "Demo completa" : `${secondsWatched}/${LOCK_SECONDS}s`}
          </span>
        </div>
      )}

      {locked && (
        <VideoLockOverlay secondsWatched={secondsWatched} onRegisterClick={onRegisterCta} onBuyClick={onBuyCta} offer={offer} purchaseHref={purchaseHref} />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * KycFunnelVisual — sección 5
 * ───────────────────────────────────────────────────────────────────────── */
function KycFunnelVisual() {
  return (
    <section id="embudo" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: NAVY_DARK }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.3)", color: TEAL }}
          >
            El problema
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Del proceso manual al flujo digital
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Cuando la verificación depende de revisión manual, cada paso agrega fricción: usuarios que no
            terminan, documentos que esperan revisión y equipos que pierden tiempo validando información
            de forma dispersa.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
          {/* Etapas conceptuales (sin cifras) */}
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-white/50">Etapas de un proceso manual</p>
            <ol className="mt-5 space-y-3">
              {MANUAL_STAGES.map((stage, i) => (
                <li key={stage} className="flex items-center gap-4">
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: "rgba(30,202,211,0.15)", border: "1px solid rgba(30,202,211,0.35)", color: TEAL }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] font-semibold text-white/85">{stage}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[12px] leading-relaxed text-white/40">
              Ilustración conceptual del proceso. No representa resultados medidos de JAAK.
            </p>
          </div>

          {/* Comparativo lateral, sin tiempos */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 rounded-2xl p-6 flex flex-col justify-center items-center text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xl sm:text-2xl font-bold text-white/70">Proceso manual</p>
              <p className="mt-2 text-[13px] text-white/50">Revisión y seguimiento dispersos</p>
            </div>
            <div className="flex-1 rounded-2xl p-6 flex flex-col justify-center items-center text-center" style={{ background: "rgba(30,202,211,0.08)", border: `1px solid rgba(30,202,211,0.35)` }}>
              <p className="text-xl sm:text-2xl font-bold" style={{ color: TEAL }}>KYC automatizado</p>
              <p className="mt-2 text-[13px] text-white/70">Sesión estructurada con resultado y expediente en la plataforma</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[15px] font-medium text-white/70">
          El problema no es atraer usuarios. Es convertirlos con confianza.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ProductTrialSelector — sección 7
 * ───────────────────────────────────────────────────────────────────────── */
function ProductTrialSelector() {
  const otros = PRODUCTS.filter((p) => p.id !== "kyc");
  return (
    <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Explora otros productos de JAAK Autoservicio
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#5B6472" }}>
            El paquete de prueba de esta página es Cobre KYC. Cada producto de Autoservicio tiene su propio
            precio, unidades y condiciones en el catálogo. {AUTOSERVICIO_COPY.notaCatalogo}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {otros.map((p) => (
            <Link
              key={p.id}
              href="/autoservicio"
              onClick={() => gtmEvent("select_trial_product", { product: p.id })}
              className="block text-left rounded-2xl p-6 bg-white transition-all hover:-translate-y-1"
              style={{ border: "1px solid #E2E8EF" }}
            >
              <h3 className="font-bold text-[15px]" style={{ color: NAVY }}>{p.nombre}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{p.tagline}</p>
              <div className="mt-5">
                <span className="text-[13px] font-semibold" style={{ color: "#0F8E96" }}>Ver en el catálogo →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/autoservicio"
            onClick={() => gtmEvent("click_catalog", { location: "product_selector" })}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px"
            style={{ background: NAVY }}
          >
            Ver catálogo de Autoservicio
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * LeadRegistrationForm — sección 8/9
 * ───────────────────────────────────────────────────────────────────────── */
interface LeadFormState {
  nombre: string;
  correo: string;
  empresa: string;
  telefono: string;
  producto: ProductId | "";
  volumen: string;
  comentario: string;
}

const LEAD_INITIAL: LeadFormState = {
  nombre: "",
  correo: "",
  empresa: "",
  telefono: "",
  producto: "kyc",
  volumen: "",
  comentario: "",
};

function LeadRegistrationForm({
  selectedProduct,
  pricingIndex,
  onRegistered,
}: {
  selectedProduct: ProductId | "";
  pricingIndex: PricingIndex;
  onRegistered: (name: string, producto: ProductId | "") => void;
}) {
  const [form, setForm] = useState<LeadFormState>(LEAD_INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const startedInteraction = useRef(false);

  const checkoutHref = buildTrialCheckoutHref(form.producto || "no-se", pricingIndex, getUtmParams());
  const [autoRedirectSeconds, setAutoRedirectSeconds] = useState(4);
  const [autoRedirectCancelled, setAutoRedirectCancelled] = useState(false);
  const redirectedRef = useRef(false);

  useEffect(() => {
    if (selectedProduct) {
      setForm((prev) => ({ ...prev, producto: selectedProduct }));
    }
  }, [selectedProduct]);

  // Auto-redirige a la compra tras el registro exitoso, dando tiempo a leer
  // la confirmación y a cancelar si prefiere quedarse a ver la demo completa.
  useEffect(() => {
    if (status !== "success" || autoRedirectCancelled) return;
    if (autoRedirectSeconds <= 0) {
      if (!redirectedRef.current) {
        redirectedRef.current = true;
        gtmEvent("checkout_started", { selected_product: form.producto, mode: "auto" });
        window.location.href = checkoutHref;
      }
      return;
    }
    const t = setTimeout(() => setAutoRedirectSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [status, autoRedirectCancelled, autoRedirectSeconds, checkoutHref, form.producto]);

  const trackStart = () => {
    if (!startedInteraction.current) {
      startedInteraction.current = true;
      gtmEvent("start_registration");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const utm = getUtmParams();
    const productoLabel = productLabel(form.producto);

    try {
      const res = await fetch(REGISTRO_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nombre,
          email: form.correo,
          empresa: form.empresa,
          telefono: form.telefono,
          mensaje: [
            `Producto a probar: ${productoLabel || "No especificado"}`,
            `Volumen estimado mensual: ${form.volumen || "No especificado"}`,
            form.comentario && `Comentario: ${form.comentario}`,
          ].filter(Boolean).join(" | "),
          source: LEAD_SOURCE,
          ...utm,
          page_url: window.location.href,
        }),
      });

      if (!res.ok) throw new Error("submit_failed");

      gtmEvent("submit_registration", {
        selected_product: form.producto,
        estimated_volume: form.volumen,
      });

      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // localStorage puede no estar disponible (modo privado); no es crítico.
      }

      setStatus("success");
      onRegistered(form.nombre, form.producto);
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-[14px] outline-none transition-all focus:ring-2";

  if (status === "success") {
    const redirecting = !autoRedirectCancelled && autoRedirectSeconds > 0;
    const progressPct = ((4 - autoRedirectSeconds) / 4) * 100;
    return (
      <div
        className="rounded-3xl p-8 sm:p-10 text-center"
        style={{ background: "rgba(30,202,211,0.06)", border: `1px solid rgba(30,202,211,0.3)` }}
      >
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "rgba(30,202,211,0.15)", border: `1.5px solid rgba(30,202,211,0.35)` }}
        >
          <svg className="h-6 w-6" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold" style={{ color: NAVY }}>¡Listo, {form.nombre.split(" ")[0]}!</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed max-w-md mx-auto" style={{ color: "#5B6472" }}>
          Recibimos tu solicitud y la demo completa ya está desbloqueada. Si quieres continuar con la compra,
          te llevamos a la página de compra del paquete en la plataforma de JAAK, donde creas tu cuenta y
          completas el pago.
        </p>

        {redirecting && (
          <div className="mt-6 max-w-xs mx-auto">
            <p className="text-[13px] font-semibold" style={{ color: "#0F8E96" }}>
              Te llevamos a la página de compra en {autoRedirectSeconds}s…
            </p>
            <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: "rgba(30,202,211,0.15)" }}>
              <div
                className="h-full rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progressPct}%`, background: TEAL }}
              />
            </div>
            <button
              type="button"
              onClick={() => setAutoRedirectCancelled(true)}
              className="mt-2 text-[12.5px] font-medium underline"
              style={{ color: "#8992A3" }}
            >
              Cancelar y quedarme aquí
            </button>
          </div>
        )}

        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href={checkoutHref}
            onClick={() => gtmEvent("checkout_started", { selected_product: form.producto, mode: "manual" })}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-white transition-transform hover:-translate-y-px"
            style={{ background: NAVY }}
          >
            Continuar a la compra del paquete
          </Link>
          <a
            href="#demo"
            onClick={() => setAutoRedirectCancelled(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-semibold"
            style={{ border: "1px solid #D7DEE7", color: NAVY }}
          >
            Ver la demo completa
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={trackStart}
      className="rounded-3xl p-6 sm:p-9"
      style={{ background: "#fff", border: "1px solid #E2E8EF", boxShadow: "0 20px 50px rgba(7,20,38,0.06)" }}
    >
      <h3 className="text-2xl font-bold" style={{ color: NAVY }}>Solicita información de la prueba KYC</h3>
      <p className="mt-2 text-[14px]" style={{ color: "#6B7686" }}>
        Déjanos tus datos para que el equipo de JAAK te contacte. Al enviarlo se desbloquea la demo completa y te llevamos a la página de compra del paquete elegido.
      </p>

      <div className="mt-7 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Nombre *</label>
          <input required name="nombre" value={form.nombre} onChange={handleChange} placeholder="María García" className={inputBase} style={{ borderColor: "#D7DEE7" }} />
        </div>
        <div>
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Correo corporativo *</label>
          <input required type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="maria@empresa.com" className={inputBase} style={{ borderColor: "#D7DEE7" }} />
        </div>
        <div>
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Empresa *</label>
          <input required name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" className={inputBase} style={{ borderColor: "#D7DEE7" }} />
        </div>
        <div>
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Teléfono / WhatsApp *</label>
          <input required type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+52 55 0000 0000" className={inputBase} style={{ borderColor: "#D7DEE7" }} />
        </div>
        <div>
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Producto que quieres probar *</label>
          <select required name="producto" value={form.producto} onChange={handleChange} className={inputBase} style={{ borderColor: "#D7DEE7" }}>
            <option value="" disabled>Selecciona un producto</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Volumen estimado mensual *</label>
          <select required name="volumen" value={form.volumen} onChange={handleChange} className={inputBase} style={{ borderColor: "#D7DEE7" }}>
            <option value="" disabled>Selecciona un rango</option>
            <option value="1-50">1 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="201-1000">201 – 1,000</option>
            <option value="Más de 1000">Más de 1,000</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>
          Cuéntanos brevemente qué proceso quieres validar (opcional)
        </label>
        <textarea
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
          rows={3}
          placeholder="Ej. Alta de clientes en app móvil, firma de contratos, onboarding financiero…"
          className={`${inputBase} resize-none`}
          style={{ borderColor: "#D7DEE7" }}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl px-4 py-3 text-[13.5px]" style={{ background: "#FEF2F2", color: "#B91C1C" }}>
          Ocurrió un error al enviar tu registro. Intenta de nuevo o escríbenos a{" "}
          <a href="mailto:ventas@jaak.ai" className="underline">ventas@jaak.ai</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-xl px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px disabled:opacity-60"
        style={{ background: TEAL, color: NAVY_DARK }}
      >
        {status === "loading" ? "Enviando…" : "Solicitar información de la prueba KYC"}
      </button>
      <p className="mt-3 text-center text-[11.5px]" style={{ color: "#9AA3B1" }}>
        Al enviar este formulario, autorizas que el equipo de JAAK use tus datos para contactarte sobre tu solicitud. Consulta el{" "}
        <Link href="/privacidad" className="underline">Aviso de privacidad</Link>. El formulario no crea una cuenta ni realiza ningún cobro.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * FAQAccordion — sección 15
 * ───────────────────────────────────────────────────────────────────────── */
function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8EF" }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid #EEF2F5" }}>
            <button
              className="w-full text-left px-6 py-5 flex items-start gap-4"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-sm font-bold transition-transform"
                style={{
                  background: isOpen ? TEAL : "#EEF2F5",
                  color: isOpen ? NAVY_DARK : "#64748B",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
              <span className="flex-1 font-semibold text-[15px] leading-snug" style={{ color: NAVY }}>
                {item.q}
              </span>
            </button>
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "600px" : "0" }}>
              <p className="px-6 pb-6 pl-16 text-[14px] leading-relaxed" style={{ color: "#6B7686" }}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Página principal
 * ───────────────────────────────────────────────────────────────────────── */
export default function KycDemoAutoservicioLandingClient({
  pricingIndex,
  offer,
  faqItems,
}: {
  pricingIndex: PricingIndex;
  offer: KycTrialOffer | null;
  faqItems: FaqItem[];
}) {
  const [registered, setRegistered] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductId | "">("kyc");
  const purchaseHref = useKycPurchaseHref();

  useEffect(() => {
    gtmEvent("view_kyc_autoservicio_landing");
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setRegistered(true);
    } catch {
      // localStorage puede no estar disponible; no bloquea la demo.
    }
  }, []);

  const scrollToRegistro = () => {
    document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOverlayRegister = () => {
    gtmEvent("click_unlock_demo");
    gtmEvent("unlock_form_started");
    scrollToRegistro();
  };

  // Clic en "Seleccionar paquete Cobre KYC" desde el video bloqueado (va a la compra).
  const handleOverlayBuy = () => {
    gtmEvent("click_buy_99_from_video");
  };

  const handleRegistered = (_name: string, producto: ProductId | "") => {
    setRegistered(true);
    if (producto) setSelectedProduct(producto);
  };

  return (
    <div style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif" }}>
      <LandingHeader offer={offer} purchaseHref={purchaseHref} />
      <GuiaCapturaTab />

      <main>
        {/* ── 1-4. Hero + video protagonista ─────────────────────────────── */}
        <section
          id="demo"
          className="relative overflow-hidden pt-[110px] pb-16 sm:pt-[130px] sm:pb-20"
          style={{ background: `linear-gradient(150deg, ${NAVY_DARK} 0%, ${NAVY} 65%, #232C4C 100%)` }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div
            className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[120px]"
            style={{ background: "rgba(30,202,211,0.1)" }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-10 items-center">
              {/* Copy */}
              <div>
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                  style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.35)", color: "#7FE8EC" }}
                >
                  Paquete de prueba · JAAK Autoservicio
                </span>

                <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-white">
                  Prueba la verificación de identidad KYC de JAAK.
                </h1>

                <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Conoce cómo funciona una verificación de identidad con documento, biometría facial, prueba
                  de vida y evidencia digital desde nuestra plataforma Web.
                </p>

                {/* Tarjeta de oferta compacta: precio protagonista, datos clave en chips y condiciones en detalle */}
                <div
                  id="oferta"
                  className="relative mt-9 max-w-md rounded-2xl p-5 pt-7"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(30,202,211,0.3)", boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
                >
                  {offer && (
                    // Pestaña de promoción: paquete promocional de un solo uso por usuario.
                    <span
                      className="absolute -top-3.5 left-5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider shadow-lg"
                      style={{ background: `linear-gradient(90deg, ${TEAL}, #2AD796)`, color: NAVY_DARK }}
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.9l-4.8 2.5.9-5.4L2.2 7.2l5.4-.8L10 1.5z" />
                      </svg>
                      Paquete promocional
                    </span>
                  )}
                  {offer ? (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[11.5px] font-semibold uppercase tracking-wide" style={{ color: "#7FE8EC" }}>
                            {offer.nombre}
                          </span>
                          <p className="mt-1 text-[12.5px] text-white/60">
                            {formatMxn(offer.subtotal)} + IVA {formatMxn(offer.iva)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold leading-none text-white">{formatMxn(offer.total).replace(" MXN", "")}</p>
                          <p className="mt-1 text-[11.5px] font-medium text-white/60">MXN, IVA incluido</p>
                        </div>
                      </div>

                      <ul className="mt-4 grid grid-cols-3 gap-2 text-center">
                        {[
                          { k: `${offer.cantidad}`, v: offer.unidad },
                          { k: "1 año", v: "de vigencia" },
                          { k: "Web", v: "plataforma JAAK" },
                        ].map((c) => (
                          <li
                            key={c.v}
                            className="rounded-xl px-2 py-2.5"
                            style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.25)" }}
                          >
                            <span className="block text-lg font-bold leading-tight text-white">{c.k}</span>
                            <span className="block text-[11.5px] leading-tight text-white/65">{c.v}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-3 text-[12.5px] font-semibold leading-snug" style={{ color: "#7FE8EC" }}>
                        Promoción de un solo uso por usuario.
                      </p>
                      <p className="mt-1 text-[12.5px] leading-snug text-white/60">
                        No incluye API, SDK, White Label estándar ni sandbox automático.
                      </p>

                      <details className="group mt-3 border-t border-white/10 pt-3">
                        <summary className="cursor-pointer list-none text-[12.5px] font-semibold text-[#7FE8EC] marker:hidden">
                          <span className="underline underline-offset-2">Ver condiciones del paquete</span>
                        </summary>
                        <ul className="mt-2 space-y-1.5 text-[12.5px] leading-snug text-white/65">
                          <li><span className="font-semibold text-white/85">Promoción:</span> paquete promocional de un solo uso por usuario.</li>
                          <li><span className="font-semibold text-white/85">Vigencia:</span> un año, conforme a las condiciones del paquete.</li>
                          <li><span className="font-semibold text-white/85">Acceso:</span> plataforma Web de JAAK.</li>
                          <li><span className="font-semibold text-white/85">Soporte:</span> lunes a viernes de 9:00 a 18:00 h, horario CDMX.</li>
                          <li className="text-white/45">Importes según el catálogo vigente de Autoservicio; el importe final se confirma en el proceso de compra.</li>
                        </ul>
                      </details>
                    </>
                  ) : (
                    <p className="text-[14px] leading-relaxed text-white/75">
                      Consulta los paquetes disponibles, sus unidades y precios vigentes en el catálogo de
                      JAAK Autoservicio.
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {offer ? (
                    <a
                      href={purchaseHref}
                      onClick={() => gtmEvent("click_buy_99", { location: "hero" })}
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
                      style={{ background: TEAL, color: NAVY_DARK }}
                    >
                      Seleccionar paquete Cobre KYC
                    </a>
                  ) : (
                    <Link
                      href="/autoservicio"
                      onClick={() => gtmEvent("click_catalog", { location: "hero" })}
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
                      style={{ background: TEAL, color: NAVY_DARK }}
                    >
                      Ver catálogo de Autoservicio
                    </Link>
                  )}
                  <a
                    href="#demo-player"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white border transition-colors"
                    style={{ borderColor: "rgba(255,255,255,0.25)" }}
                  >
                    Ver demostración
                  </a>
                </div>

                <p className="mt-5 text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  El paquete se utiliza desde la plataforma Web de JAAK. ¿Prefieres que te contactemos?{" "}
                  <a href="#registro" className="underline">Solicita información</a>.
                </p>
              </div>

              {/* Video */}
              <div id="demo-player">
                <VideoGatePlayer
                  registered={registered}
                  onRegisterCta={handleOverlayRegister}
                  onBuyCta={handleOverlayBuy}
                  offer={offer}
                  purchaseHref={purchaseHref}
                />
                <p className="mt-4 text-center text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Reproduce los primeros segundos de la demo y conoce cómo se crea una sesión, cómo avanza
                  el usuario y cómo se consulta la evidencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Embudo ───────────────────────────────────────────────────── */}
        <KycFunnelVisual />

        {/* ── 6-7. Oferta + selector de producto ─────────────────────────── */}
        <ProductTrialSelector />

        {/* ── 8-9. Registro corto ─────────────────────────────────────────── */}
        <section id="registro" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: OFFWHITE }}>
          <div className="mx-auto max-w-2xl">
            <LeadRegistrationForm
              selectedProduct={selectedProduct}
              pricingIndex={pricingIndex}
              onRegistered={handleRegistered}
            />
          </div>
        </section>

        {/* ── 10. Cómo funciona JAAK ───────────────────────────────────────── */}
        <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
                De una sesión a un expediente consultable
              </h2>
            </div>
            <div className="space-y-4">
              {HOW_IT_WORKS.map((step) => (
                <div
                  key={step.num}
                  className="flex gap-5 items-start rounded-2xl p-5"
                  style={{ border: "1px solid #E2E8EF" }}
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: TEAL, color: NAVY_DARK }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[15.5px]" style={{ color: NAVY }}>{step.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: "#6B7686" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. Comparativa ───────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
                Menos revisión manual. Más evidencia.
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid #E2E8EF" }}>
              <div className="grid grid-cols-2 text-[13px] font-bold uppercase tracking-wide" style={{ color: NAVY, background: "#F5F7FA" }}>
                <div className="px-5 py-4 border-r" style={{ borderColor: "#E2E8EF" }}>Proceso manual</div>
                <div className="px-5 py-4">JAAK autoservicio</div>
              </div>
              {COMPARISON_ROWS.map((row) => (
                <div key={row[0]} className="grid grid-cols-2 text-[14px]" style={{ borderTop: "1px solid #EEF2F5" }}>
                  <div className="px-5 py-4 border-r" style={{ borderColor: "#EEF2F5", color: "#6B7686" }}>{row[0]}</div>
                  <div className="px-5 py-4 flex items-center gap-2" style={{ color: NAVY }}>
                    <CheckIcon color="#0F8E96" />
                    {row[1]}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[15px] font-medium" style={{ color: "#5B6472" }}>
              No se trata solo de pedir documentos. Se trata de saber quién está del otro lado y conservar
              evidencia del proceso.
            </p>
          </div>
        </section>

        {/* ── 12. Casos de uso ─────────────────────────────────────────────── */}
        <section id="casos-de-uso" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
                Prueba JAAK en el proceso que más impacto tenga para tu operación
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map((uc) => (
                <div key={uc.title} className="rounded-2xl p-6" style={{ border: "1px solid #E2E8EF" }}>
                  <h3 className="font-bold text-[15px]" style={{ color: NAVY }}>{uc.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 13. Bloque de confianza ───────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: NAVY_DARK }}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Diseñado para operaciones donde la identidad importa
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed max-w-2xl mx-auto text-white/60">
              JAAK combina verificación de identidad, biometría, firma digital y evidencia para empresas
              que necesitan operar con mayor confianza.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-[13px] font-medium rounded-full px-3.5 py-1.5"
                  style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)", color: "#7FE8EC" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 14. Bloque legal prudente ───────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center" style={{ color: NAVY }}>
              Más que una validación: evidencia para tu operación
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "#6B7686" }}>
              Dependiendo de tu industria, verificar identidad puede apoyar procesos de prevención de
              fraude, conocimiento del cliente, PLD, auditoría o documentación interna.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                { title: "Identidad", desc: "Ayuda a confirmar que la persona existe y coincide con su documento." },
                { title: "Evidencia", desc: "Permite conservar información del proceso en un expediente consultable." },
                { title: "Trazabilidad", desc: "Facilita revisar qué ocurrió, cuándo ocurrió y cuál fue el resultado." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-6" style={{ background: GRAY_LIGHT }}>
                  <h3 className="font-bold text-[14.5px]" style={{ color: NAVY }}>{c.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[12.5px] leading-relaxed" style={{ color: "#9AA3B1" }}>
              JAAK no sustituye la asesoría legal de tu empresa. La plataforma ayuda a documentar procesos
              de verificación, identidad y evidencia.
            </p>
          </div>
        </section>

        {/* ── 15. FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-10" style={{ color: NAVY }}>
              Preguntas frecuentes
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* ── 16. CTA final ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)` }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {offer ? "Selecciona el paquete Cobre KYC" : "Conoce el catálogo de JAAK Autoservicio"}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60 max-w-xl mx-auto">
              {offer
                ? `Utiliza ${offer.cantidad} ${offer.unidad} durante un año desde la plataforma Web de JAAK. Importes en MXN, más IVA.`
                : "Consulta los paquetes, unidades y precios vigentes de Autoservicio."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {offer ? (
                <a
                  href={purchaseHref}
                  onClick={() => gtmEvent("click_buy_99", { location: "final_cta" })}
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
                  style={{ background: TEAL, color: NAVY_DARK }}
                >
                  Seleccionar paquete Cobre KYC
                </a>
              ) : (
                <Link
                  href="/autoservicio"
                  onClick={() => gtmEvent("click_catalog", { location: "final_cta" })}
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
                  style={{ background: TEAL, color: NAVY_DARK }}
                >
                  Ver catálogo de Autoservicio
                </Link>
              )}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_contact_sales")}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white border"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Hablar con ventas por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* CTA sticky móvil */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 py-3" style={{ background: NAVY_DARK, borderTop: "1px solid rgba(30,202,211,0.3)" }}>
        {offer ? (
          <a
            href={purchaseHref}
            onClick={() => gtmEvent("click_buy_99", { location: "mobile_sticky" })}
            className="flex items-center justify-center gap-2 w-full rounded-xl px-5 py-3 text-[14.5px] font-bold"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Seleccionar paquete Cobre KYC
          </a>
        ) : (
          <Link
            href="/autoservicio"
            onClick={() => gtmEvent("click_catalog", { location: "mobile_sticky" })}
            className="flex items-center justify-center gap-2 w-full rounded-xl px-5 py-3 text-[14.5px] font-bold"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Ver catálogo de Autoservicio
          </Link>
        )}
      </div>
      <div className="lg:hidden h-16" aria-hidden="true" />
    </div>
  );
}
