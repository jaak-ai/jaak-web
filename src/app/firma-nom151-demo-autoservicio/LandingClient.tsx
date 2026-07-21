"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { productos, buildCheckoutUrl, formatMXN } from "@/data/autoservicio-catalogo";
import type { PricingIndex } from "@/lib/pricing";

/* ─────────────────────────────────────────────────────────────────────────
 * Constantes de marca e identidad visual (misma paleta que /kyc-demo-autoservicio)
 * ───────────────────────────────────────────────────────────────────────── */
const NAVY_DARK = "#071426";
const NAVY = "#202945";
const TEAL = "#1ECAD3";
const VIOLET = "#655DC6";
const OFFWHITE = "#F5F5F3";
const GRAY_LIGHT = "#EEF2F5";

const VIDEO_ID = "q0Iliu1wK-g";
const LOCK_SECONDS = 20;
const SESSION_LABEL = "Firma NOM-151 · Doc #48213";
const REGISTRO_URL = "/api/landing";
const LEAD_SOURCE = "landing_demo_firma_nom151";
const STORAGE_KEY = "firma-nom151-demo-registered";

const WHATSAPP_NUMBER = "5215535091788";
const WHATSAPP_MESSAGE =
  "Hola, te contactamos de JAAK IT. Vimos que te interesó nuestra Firma Digital NOM-151 con validez legal. ¿Tienes 5 minutos para platicar sobre tu caso de uso?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MEETINGS_URL = "https://meetings.hubspot.com/jose-andres-yllescas-lira";

// Producto/paquete real del catálogo de autoservicio: fuente única de verdad
// para precio, cantidad y bullets del Plan Cobre (evita duplicar copy/precio).
const PRODUCTO_FIRMA = productos.find((p) => p.id === "firma-nom151")!;
const PAQUETE_COBRE = PRODUCTO_FIRMA.paquetes.find((q) => q.id === "cobre")!;

function buildPlanCobreCheckoutHref(
  pricingIndex: PricingIndex,
  utm: ReturnType<typeof getUtmParams>
): string {
  return buildCheckoutUrl([{ producto: PRODUCTO_FIRMA, paquete: PAQUETE_COBRE }], { pricingIndex, utm });
}

/* ─────────────────────────────────────────────────────────────────────────
 * Datos de contenido estático
 * ───────────────────────────────────────────────────────────────────────── */
const LEGAL_FOUNDATIONS = [
  {
    title: "NOM-151-SCFI-2016",
    desc: "Norma Oficial Mexicana publicada en el DOF el 30 de marzo de 2017 por la Secretaría de Economía. Establece los requisitos técnicos para la conservación de mensajes de datos y la digitalización de documentos, sustituyendo a la NOM-151-SCFI-2002.",
  },
  {
    title: "Código de Comercio (Arts. 89–114)",
    desc: "Regulan los actos de comercio por medios electrónicos. El Art. 89 reconoce la validez de los mensajes de datos, el Art. 93 otorga equivalencia legal cuando la información se mantiene íntegra y accesible, y el Art. 97 añade requisitos para la firma electrónica avanzada.",
  },
  {
    title: "Ley Federal sobre Metrología y Normalización",
    desc: "El Art. 40, junto con los Arts. 33, 34, 38, 46 bis, 49 y 93 bis del Código de Comercio, faculta a la Secretaría de Economía para emitir la NOM-151.",
  },
  {
    title: "Ley de Firma Electrónica Avanzada (LFEA)",
    desc: "Reconoce que la firma electrónica avanzada, junto con elementos que prueben integridad y autenticidad, tiene pleno valor jurídico.",
  },
  {
    title: "Código Civil Federal",
    desc: "Reconoce los mensajes de datos como prueba admisible en juicio. Solo un Prestador de Servicios de Certificación (PSC) acreditado por la Secretaría de Economía puede emitir constancias de conservación con validez legal plena.",
  },
];

const PILARES = [
  { title: "Integridad del documento", desc: "Hash criptográfico SHA-256 que garantiza que el documento no ha sido modificado desde su firma." },
  { title: "Sellado de tiempo", desc: "Timestamp certificado por un PSC autorizado (RFC 3161), con fecha cierta verificable ante la Secretaría de Economía." },
  { title: "Atribución al firmante", desc: "Vínculo entre la firma y la persona a través del proceso de firma: correo, OTP, IP y dispositivo." },
  { title: "Conservación del mensaje", desc: "Almacenamiento seguro y accesible en el tiempo, listo para consulta en una auditoría o litigio." },
];

const DIFERENCIAS = [
  {
    id: "nom151",
    nombre: "Firma NOM-151",
    tag: "Esta demo",
    highlight: true,
    que: "Hash SHA-256 + sello de tiempo certificado por PSC + cadena de custodia verificable ante la SE.",
    atribucion: "Vínculo documental/técnico del proceso de firma (correo, OTP, IP, dispositivo).",
    href: null,
  },
  {
    id: "bio",
    nombre: "Firma NOM-151 + Biometría",
    tag: null,
    highlight: false,
    que: "Todo lo anterior, más verificación biométrica facial y prueba de vida del firmante.",
    atribucion: "Verificación biométrica facial + documento oficial — atribución reforzada ante riesgo de suplantación.",
    href: "/firma-electronica-biometrica",
  },
  {
    id: "kyc",
    nombre: "Firma NOM-151 + KYC",
    tag: null,
    highlight: false,
    que: "Todo lo anterior, más verificación de identidad completa: documento oficial, listas de riesgo y OCR.",
    atribucion: "Expediente de identidad completo, ideal para onboarding regulado.",
    href: "/firma-electronica-kyc",
  },
];

interface UseCase {
  title: string;
  desc: string;
  featured?: boolean;
}

const USE_CASES: UseCase[] = [
  { title: "Recibos de nómina digital", desc: "Recibo de pago con sello de tiempo: evidencia ante IMSS/STPS de la fecha de entrega y aceptación.", featured: true },
  { title: "Contratos financieros", desc: "Créditos, pagarés y apertura de cuenta con fecha cierta e integridad verificable." },
  { title: "Contratos inmobiliarios", desc: "Arrendamientos, promesas de compraventa y poderes con evidencia lista para escritura o litigio." },
  { title: "Documentos legales y mercantiles", desc: "Acuerdos de accionistas y mandatos con constancia de conservación por 10 años." },
  { title: "Contratos de servicios / SLAs", desc: "Acuerdos con proveedores con hash anti-alteración y sello de tiempo." },
  { title: "Contratos automotrices", desc: "Leasing y arrendamiento puro firmados digitalmente, sin papel." },
  { title: "Contratos de telecom", desc: "Alta de servicios y renovaciones con trazabilidad del proceso de firma." },
  { title: "Contratos laborales", desc: "Firma de contratos individuales de trabajo con evidencia auditable." },
  { title: "Consentimientos informados / NDAs", desc: "Consentimientos y acuerdos de confidencialidad con validez legal plena." },
];

const PROCESO_FIRMA = [
  { num: "1", title: "Carga de documento", desc: "Sube el PDF que necesitas firmar desde la plataforma." },
  { num: "2", title: "Verificación", desc: "Se confirma el proceso de firma del firmante (correo, OTP, dispositivo)." },
  { num: "3", title: "Firma", desc: "El firmante captura su consentimiento y firma el documento." },
  { num: "4", title: "Sellado de tiempo", desc: "Un PSC certifica el timestamp y genera el hash SHA-256 del documento." },
  { num: "5", title: "Expediente", desc: "Queda disponible un expediente descargable con toda la evidencia del proceso." },
];

const FAQ_ITEMS = [
  { q: "¿Qué incluye el Plan Cobre?", a: `${PAQUETE_COBRE.cantidad} firmas con sello de tiempo oficial certificado por un PSC, hash SHA-256 anti-alteración, constancia de conservación legal por 10 años y expediente digital descargable.` },
  { q: "¿Cuál es la diferencia con Firma NOM-151 + Biometría?", a: "Firma NOM-151 blinda la integridad y fecha del documento. + Biometría añade verificación facial y prueba de vida del firmante, útil cuando necesitas probar quién firmó, no solo qué se firmó." },
  { q: "¿Necesito integración API para usarlo?", a: "No. El Plan Cobre está pensado para operar directamente desde la plataforma de autoservicio, sin desarrollo inicial. La API está disponible cuando decidas escalar." },
  { q: "¿Cuánto tarda en activarse?", a: "La activación es automática: al completar el pago, tu acceso a las firmas queda disponible en minutos." },
  { q: "¿Aplica para recibos de nómina digital?", a: "Sí. El sello de tiempo certificado deja evidencia de la fecha de entrega y aceptación del recibo, útil ante una revisión del IMSS o la STPS." },
  { q: "¿Puedo escalar después a más firmas o volumen?", a: "Sí. Puedes adquirir más créditos, subir de paquete o migrar a un esquema Enterprise en cualquier momento, sin contratos ni permanencia forzosa." },
  { q: "¿JAAK sustituye la asesoría legal de mi empresa?", a: "No. JAAK ayuda a documentar el proceso de firma con evidencia técnica conforme a la NOM-151, pero no sustituye la asesoría legal de tu empresa." },
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
function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Demo", href: "#demo-player" },
    { label: "Fundamento legal", href: "#fundamento-legal" },
    { label: "Diferencias", href: "#diferencias" },
    { label: "Casos de uso", href: "#casos-de-uso" },
    { label: "Precio", href: "#precio" },
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
            {links.map((l) => (
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
            <a
              href="#precio"
              onClick={() => gtmEvent("click_activate_cobre", { location: "header" })}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13.5px] font-bold transition-transform hover:-translate-y-px"
              style={{ background: TEAL, color: NAVY_DARK }}
            >
              Activar Plan Cobre
            </a>
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
}: {
  secondsWatched: number;
  onRegisterClick: () => void;
  onBuyClick: () => void;
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
          Continúa viendo la demo completa
        </h3>
        <p className="text-[14px] leading-relaxed text-white/70 mb-6">
          Regístrate y te la enviamos también a tu correo, o activa tu Plan Cobre por {formatMXN(PAQUETE_COBRE.precio)} MXN + IVA directamente.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onBuyClick}
            className="w-full rounded-xl px-5 py-3.5 text-[14px] font-bold transition-transform hover:-translate-y-px"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Activar Plan Cobre
          </button>
          <button
            onClick={onRegisterClick}
            className="w-full rounded-xl px-5 py-3 text-[14px] font-semibold text-white border transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)" }}
          >
            Registrarme y continuar
          </button>
        </div>

        <p className="mt-5 text-[12px] leading-relaxed text-white/40">
          Firma electrónica avanzada con sello de tiempo certificado por un PSC acreditado.
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
}: {
  registered: boolean;
  onRegisterCta: () => void;
  onBuyCta: () => void;
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
          aria-label="Reproducir demo de Firma NOM-151"
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
            <p className="text-white/50 text-[13px] mt-1">Carga de documento, firma y sellado de tiempo certificado</p>
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
        <VideoLockOverlay secondsWatched={secondsWatched} onRegisterClick={onRegisterCta} onBuyClick={onBuyCta} />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ElProblema — sección 4
 * ───────────────────────────────────────────────────────────────────────── */
const PROBLEMAS_SIN_NOM151 = [
  "Un documento firmado se imprime, se archiva y se olvida en un gabinete.",
  "No hay forma de probar que el documento no fue alterado después de firmarse.",
  "La fecha de firma depende de lo que diga el papel, sin respaldo independiente.",
  "En una auditoría fiscal o un litigio, la carga de la prueba recae en tu empresa.",
  "La evidencia del proceso de firma queda dispersa entre correos y carpetas.",
];

function ElProblema() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: NAVY_DARK }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.3)", color: TEAL }}
          >
            El problema
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Firmar en papel (o sin NOM-151) es válido, pero difícil de probar
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            La firma electrónica ya es válida por el Código de Comercio. Sin NOM-151, esa validez depende de que
            puedas demostrarla ante una auditoría o un juicio.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-stretch">
          <div className="rounded-2xl p-6 sm:p-8 space-y-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {PROBLEMAS_SIN_NOM151.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.35)" }} />
                <p className="text-[14px] leading-relaxed text-white/70">{p}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-center"
            style={{ background: "rgba(30,202,211,0.08)", border: `1px solid rgba(30,202,211,0.35)` }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: TEAL }}>Con Firma NOM-151</p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
              La integridad del documento queda respaldada criptográficamente por un PSC acreditado, con fecha
              cierta. Si alguien impugna el documento, la evidencia técnica responde por ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * FundamentoLegal — sección 5
 * ───────────────────────────────────────────────────────────────────────── */
function FundamentoLegal() {
  return (
    <section id="fundamento-legal" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            El marco legal detrás de la NOM-151
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#6B7686" }}>
            La NOM-151 no es requisito de validez de la firma en sí: es lo que garantiza que el documento firmado
            no pueda alterarse después y tenga fecha cierta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {LEGAL_FOUNDATIONS.map((f) => (
            <div key={f.title} className="rounded-2xl p-6" style={{ border: "1px solid #E2E8EF" }}>
              <h3 className="font-bold text-[15px]" style={{ color: NAVY }}>{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl p-6 sm:p-8 text-center" style={{ background: GRAY_LIGHT }}>
          <p className="text-[15px] leading-relaxed font-medium" style={{ color: NAVY }}>
            &ldquo;Sin NOM-151, una firma electrónica es válida pero su prueba en juicio depende de que puedas
            demostrarla. Con NOM-151, la integridad del documento queda respaldada criptográficamente por un PSC
            acreditado, con fecha cierta.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Pilares — sección 6
 * ───────────────────────────────────────────────────────────────────────── */
function Pilares() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Los 4 pilares de la NOM-151
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILARES.map((p, i) => (
            <div key={p.title} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #E2E8EF" }}>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold mb-4"
                style={{ background: TEAL, color: NAVY_DARK }}
              >
                {i + 1}
              </div>
              <h3 className="font-bold text-[14.5px]" style={{ color: NAVY }}>{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Diferencias — sección 7
 * ───────────────────────────────────────────────────────────────────────── */
function Diferencias() {
  return (
    <section id="diferencias" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Firma NOM-151 vs. + Biometría vs. + KYC
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#6B7686" }}>
            Elige Firma NOM-151 si ya conoces a quien firma (empleados, proveedores, clientes recurrentes) y solo
            necesitas blindar la integridad y fecha del documento. Elige + Biometría si necesitas probar quién
            firmó, no solo qué se firmó.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {DIFERENCIAS.map((d) => (
            <div
              key={d.id}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: d.highlight ? "rgba(30,202,211,0.06)" : "#fff",
                border: d.highlight ? `1.5px solid ${TEAL}` : "1px solid #E2E8EF",
              }}
            >
              {d.tag && (
                <span
                  className="self-start mb-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold"
                  style={{ background: TEAL, color: NAVY_DARK }}
                >
                  {d.tag}
                </span>
              )}
              <h3 className="font-bold text-[16px]" style={{ color: NAVY }}>{d.nombre}</h3>
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#8992A3" }}>Qué hace</p>
                <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{d.que}</p>
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#8992A3" }}>Cómo atribuye la firma</p>
                <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{d.atribucion}</p>
              </div>
              {d.href && (
                <Link
                  href={d.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold"
                  style={{ color: VIOLET }}
                >
                  Ver {d.nombre} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * CasosDeUso — sección 8
 * ───────────────────────────────────────────────────────────────────────── */
function CasosDeUso() {
  return (
    <section id="casos-de-uso" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Documentos que puedes firmar con validez NOM-151
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl p-6 bg-white"
              style={uc.featured ? { border: `1.5px solid ${TEAL}`, background: "rgba(30,202,211,0.06)" } : { border: "1px solid #E2E8EF" }}
            >
              {uc.featured && (
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold mb-3"
                  style={{ background: TEAL, color: NAVY_DARK }}
                >
                  Caso destacado
                </span>
              )}
              <h3 className="font-bold text-[15px]" style={{ color: NAVY }}>{uc.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * PlanCobrePricing — sección 9
 * ───────────────────────────────────────────────────────────────────────── */
function PlanCobrePricing({ checkoutHref }: { checkoutHref: string }) {
  return (
    <section id="precio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)", color: "#0F8E96" }}
          >
            Oferta de lanzamiento
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Plan Cobre — Firma Digital NOM-151
          </h2>
        </div>

        <div className="rounded-3xl p-8 sm:p-10" style={{ background: NAVY_DARK, border: "1px solid rgba(30,202,211,0.3)" }}>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-white">{formatMXN(PAQUETE_COBRE.precio)}</span>
            <span className="text-[14px] font-medium text-white/50">MXN + IVA</span>
          </div>
          <p className="mt-2 text-[14px] text-white/60">{PAQUETE_COBRE.cantidad} {PRODUCTO_FIRMA.unidad} incluidas</p>

          <div className="mt-6 space-y-3">
            {PRODUCTO_FIRMA.incluye.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckIcon />
                <span className="text-[14px] leading-relaxed text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href={checkoutHref}
            onClick={() => gtmEvent("checkout_started", { location: "precio", mode: "direct" })}
            className="mt-8 flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Activar Plan Cobre
          </Link>

          <div className="mt-5 text-center">
            <p className="text-[13px] text-white/50">¿Prefieres hablar antes?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtmEvent("click_contact_sales", { location: "precio" })}
              className="mt-1 inline-flex items-center gap-1.5 text-[13.5px] font-semibold underline"
              style={{ color: TEAL }}
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ProcesoFirma — sección 10
 * ───────────────────────────────────────────────────────────────────────── */
function ProcesoFirma() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            De la carga del documento al expediente consultable
          </h2>
        </div>
        <div className="space-y-4">
          {PROCESO_FIRMA.map((step) => (
            <div
              key={step.num}
              className="flex gap-5 items-start rounded-2xl p-5 bg-white"
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
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * LeadRegistrationForm — sección 11
 * ───────────────────────────────────────────────────────────────────────── */
interface LeadFormState {
  nombre: string;
  correo: string;
  empresa: string;
  telefono: string;
  volumen: string;
  comentario: string;
}

const LEAD_INITIAL: LeadFormState = {
  nombre: "",
  correo: "",
  empresa: "",
  telefono: "",
  volumen: "",
  comentario: "",
};

function LeadRegistrationForm({
  checkoutHref,
  onRegistered,
}: {
  checkoutHref: string;
  onRegistered: (name: string) => void;
}) {
  const [form, setForm] = useState<LeadFormState>(LEAD_INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const startedInteraction = useRef(false);

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
            "Producto: Firma Digital NOM-151",
            `Volumen estimado mensual: ${form.volumen || "No especificado"}`,
            form.comentario && `Comentario: ${form.comentario}`,
          ].filter(Boolean).join(" | "),
          source: LEAD_SOURCE,
          ...utm,
          page_url: window.location.href,
        }),
      });

      if (!res.ok) throw new Error("submit_failed");

      gtmEvent("submit_registration", { estimated_volume: form.volumen });

      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // localStorage puede no estar disponible (modo privado); no es crítico.
      }

      setStatus("success");
      onRegistered(form.nombre);
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-[14px] outline-none transition-all focus:ring-2";

  if (status === "success") {
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
          Tu registro quedó completo, el video demo ya está desbloqueado por completo y también te lo enviamos a
          tu correo. Elige cómo quieres continuar.
        </p>

        <div className="mt-7 flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("click_contact_sales", { location: "post_registration" })}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-white transition-transform hover:-translate-y-px"
            style={{ background: NAVY }}
          >
            Hablar con ventas por WhatsApp
          </a>
          <a
            href={MEETINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("click_schedule_demo", { location: "post_registration" })}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-semibold"
            style={{ border: "1px solid #D7DEE7", color: NAVY }}
          >
            Agendar demo con un experto
          </a>
          <Link
            href={checkoutHref}
            onClick={() => gtmEvent("checkout_started", { location: "post_registration", mode: "manual" })}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-bold"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Ir a comprar Plan Cobre
          </Link>
        </div>

        <a
          href="#demo-player"
          className="mt-6 inline-block text-[13px] font-medium underline"
          style={{ color: "#8992A3" }}
        >
          Ver la demo completa
        </a>
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
      <h3 className="text-2xl font-bold" style={{ color: NAVY }}>Desbloquea la demo completa</h3>
      <p className="mt-2 text-[14px]" style={{ color: "#6B7686" }}>
        Un formulario corto. Te enviamos el video completo a tu correo y lo desbloqueamos aquí mismo.
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
        <div className="sm:col-span-2">
          <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#8992A3" }}>Volumen estimado mensual de firmas *</label>
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
          Cuéntanos brevemente qué documentos quieres firmar (opcional)
        </label>
        <textarea
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
          rows={3}
          placeholder="Ej. Contratos financieros, recibos de nómina, contratos de arrendamiento…"
          className={`${inputBase} resize-none`}
          style={{ borderColor: "#D7DEE7" }}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl px-4 py-3 text-[13.5px]" style={{ background: "#FEF2F2", color: "#B91C1C" }}>
          Ocurrió un error al enviar tu registro. Intenta de nuevo o escríbenos a{" "}
          <a href="mailto:contacto@jaak.ai" className="underline">contacto@jaak.ai</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-xl px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px disabled:opacity-60"
        style={{ background: TEAL, color: NAVY_DARK }}
      >
        {status === "loading" ? "Enviando…" : "Desbloquear demo completa →"}
      </button>
      <p className="mt-3 text-center text-[11.5px]" style={{ color: "#9AA3B1" }}>
        Al continuar, aceptas ser contactado por el equipo de JAAK.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * FAQAccordion — sección 12
 * ───────────────────────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8EF" }}>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderBottom: i === FAQ_ITEMS.length - 1 ? "none" : "1px solid #EEF2F5" }}>
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
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "300px" : "0" }}>
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
export default function FirmaNom151DemoLandingClient({
  pricingIndex,
}: {
  pricingIndex: PricingIndex;
}) {
  const [registered, setRegistered] = useState(false);

  const checkoutHref = buildPlanCobreCheckoutHref(pricingIndex, getUtmParams());

  useEffect(() => {
    gtmEvent("view_firma_nom151_demo_landing");
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

  const handleOverlayBuy = () => {
    gtmEvent("click_activate_cobre", { location: "video_overlay" });
  };

  const handleRegistered = (_name: string) => {
    setRegistered(true);
  };

  return (
    <div style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif" }}>
      <LandingHeader />

      <main>
        {/* ── 2-3. Hero + video protagonista ─────────────────────────────── */}
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
                  Firma Digital NOM-151 · Demo + Plan {formatMXN(PAQUETE_COBRE.precio)} MXN
                </span>

                <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-white">
                  Firma digital con validez legal{" "}
                  <span
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${TEAL}, ${VIOLET})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    NOM-151
                  </span>{" "}
                  en minutos
                </h1>

                <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Firma electrónica avanzada con sello de tiempo certificado por un PSC acreditado: hash SHA-256,
                  fecha cierta y expediente listo para auditoría o litigio.
                </p>

                <div
                  className="mt-7 inline-flex flex-col gap-1 rounded-2xl px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#7FE8EC" }}>
                    Plan Cobre
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">{formatMXN(PAQUETE_COBRE.precio)} MXN + IVA</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#demo-player"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white border transition-colors"
                    style={{ borderColor: "rgba(255,255,255,0.25)" }}
                  >
                    Ver demo de 20 segundos
                  </a>
                  <a
                    href="#precio"
                    onClick={() => gtmEvent("click_activate_cobre", { location: "hero" })}
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
                    style={{ background: TEAL, color: NAVY_DARK }}
                  >
                    Activar Plan Cobre
                  </a>
                </div>

                <p className="mt-5 text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Compra en línea, activa en minutos y firma con validez legal desde autoservicio.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
                  <Link
                    href="/contacto"
                    onClick={() => gtmEvent("contact_click", { source: "hero", destination: "contacto", page_path: "/firma-nom151-demo-autoservicio" })}
                    className="font-semibold underline underline-offset-2 transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    ¿Necesitas un volumen mayor o un flujo personalizado? Habla con un especialista.
                  </Link>
                  <a
                    href={getWhatsAppUrl("hero")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("whatsapp_click", { source: "hero", destination: "whatsapp", page_path: "/firma-nom151-demo-autoservicio" })}
                    className="font-semibold underline underline-offset-2 transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Resolver dudas por WhatsApp
                  </a>
                </div>
              </div>

              {/* Video */}
              <div id="demo-player">
                <VideoGatePlayer
                  registered={registered}
                  onRegisterCta={handleOverlayRegister}
                  onBuyCta={handleOverlayBuy}
                />
                <p className="mt-4 text-center text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Mira los primeros 20 segundos — regístrate para ver el flujo completo y recibirlo también por
                  correo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. El problema ───────────────────────────────────────────────── */}
        <ElProblema />

        {/* ── 5. Fundamento legal ──────────────────────────────────────────── */}
        <FundamentoLegal />

        {/* ── 6. Los 4 pilares ──────────────────────────────────────────────── */}
        <Pilares />

        {/* ── 7. Diferencias ───────────────────────────────────────────────── */}
        <Diferencias />

        {/* ── 8. Casos de uso ──────────────────────────────────────────────── */}
        <CasosDeUso />

        {/* ── 9. Plan Cobre — Pricing ──────────────────────────────────────── */}
        <PlanCobrePricing checkoutHref={checkoutHref} />

        {/* ── 10. Proceso de firma ─────────────────────────────────────────── */}
        <ProcesoFirma />

        {/* ── 11. Formulario de registro ───────────────────────────────────── */}
        <section id="registro" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: OFFWHITE }}>
          <div className="mx-auto max-w-2xl">
            <LeadRegistrationForm checkoutHref={checkoutHref} onRegistered={handleRegistered} />
          </div>
        </section>

        {/* ── 12. FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAY_LIGHT }}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-10" style={{ color: NAVY }}>
              Preguntas frecuentes
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── 13. CTA final ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)` }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Activa tu Plan Cobre por {formatMXN(PAQUETE_COBRE.precio)} MXN
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60 max-w-xl mx-auto">
              Ve el flujo, firma con validez legal NOM-151 y empieza a operar desde autoservicio, sin esperas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#precio"
                onClick={() => gtmEvent("click_activate_cobre", { location: "final_cta" })}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px"
                style={{ background: TEAL, color: NAVY_DARK }}
              >
                Activar Plan Cobre
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_contact_sales", { location: "final_cta" })}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white border"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Hablar con ventas por WhatsApp
              </a>
              <a
                href={MEETINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_schedule_demo", { location: "final_cta" })}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white border"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Agendar demo con un experto
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* CTA sticky móvil */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 py-3" style={{ background: NAVY_DARK, borderTop: "1px solid rgba(30,202,211,0.3)" }}>
        <a
          href="#precio"
          onClick={() => gtmEvent("click_activate_cobre", { location: "mobile_sticky" })}
          className="flex items-center justify-center gap-2 w-full rounded-xl px-5 py-3 text-[14.5px] font-bold"
          style={{ background: TEAL, color: NAVY_DARK }}
        >
          Activar Plan Cobre
        </a>
      </div>
      <div className="lg:hidden h-16" aria-hidden="true" />
    </div>
  );
}
