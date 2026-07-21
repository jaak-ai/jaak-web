"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────────────────────────────────
 * Constantes de marca y contenido
 * ───────────────────────────────────────────────────────────────────────── */
const NAVY = "#202945";
const NAVY_DARK = "#171E33";
const TEAL = "#1ECAD3";
const VIOLET = "#655DC6";

const VIDEO_ID = "q6Xug6_kms0";
const LOCK_SECONDS = 20;

const HUBSPOT_MEETING_URL = "https://meetings.hubspot.com/people-jaak/autoserviciojaak";
const KYC_ONBOARDING_URL = "https://platform.jaak.ai/#/onboarding/user-info?plan=cobre";
const AUTOSERVICIO_URL = "/autoservicio";
const FIRMA_ELECTRONICA_URL = "/plataforma/firma-electronica";

const WHATSAPP_NUMBER = "5215535091788";
const WHATSAPP_MESSAGE =
  "Hola, te contactamos de JAAK IT. Vimos que te interesó nuestra solución de identidad digital y cumplimiento regulatorio. ¿Tienes 5 minutos para que te cuente cómo podemos ayudarte?";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}&type=phone_number&app_absent=0`;

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
 * Datos de contenido
 * ───────────────────────────────────────────────────────────────────────── */
const PAIN_POINTS = [
  {
    title: "Onboarding lento",
    desc: "Copias de INE, formatos impresos y firmas presenciales que retrasan cada operación y frustran al cliente.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "Riesgo de fraude",
    desc: "INE alteradas, suplantación de identidad y deepfakes que ponen en riesgo la validez de tus contratos.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-8.25 3h.008v.008h-.008V15z" />
    ),
  },
  {
    title: "Expedientes vulnerables",
    desc: "Archiveros físicos difíciles de resguardar durante 10 años e imposibles de presentar ante una auditoría.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Cumplimiento manual",
    desc: "Avisos, beneficiario controlador y consulta de listas de riesgo hechos a mano, propensos a errores.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2a4 4 0 014-4h4m0 0l-3-3m3 3l-3 3M4 7a4 4 0 014-4h4" />
    ),
  },
];

const COMPARISON_COLUMNS = [
  {
    label: "Fracción V (ya existía)",
    regula: "Construcción, desarrollo e intermediación en compraventa de inmuebles",
    momento: "En la escrituración / comercialización",
    ejemplos: "Compraventa, intermediación de agentes/brokers, arrendamiento con opción a compra",
  },
  {
    label: "Fracción V Bis (nueva, 2025)",
    regula: "Recepción de recursos destinados a un desarrollo inmobiliario para venta o renta",
    momento: "Desde el primer anticipo o aportación, antes de la venta",
    ejemplos: "Anticipos de preventa, aportaciones para construcción, recursos vía fideicomiso",
  },
];

const OBLIGACIONES = [
  { num: "01", title: "Identificar al cliente", desc: "Documento oficial vigente más copia, integrados al expediente." },
  { num: "02", title: "Conocer su actividad u ocupación", desc: "Registrar a qué se dedica el cliente y el propósito de la operación." },
  { num: "03", title: "Identificar al Beneficiario Controlador", desc: "La persona física que controla ≥25% o recibe el beneficio final de la operación." },
  { num: "04", title: "Conservar el expediente íntegro", desc: "Durante 10 años, disponible para auditoría de la UIF en cualquier momento." },
];

const MANUAL_VS_JAAK = [
  { obligacion: "Identificar cliente (Art. 18 Fr. I)", manual: "Fotocopia de INE, cotejo visual", jaak: "OCR + biometría facial + liveness en segundos" },
  { obligacion: "Beneficiario Controlador (Fr. III)", manual: "Solicitar acta constitutiva y analizar a mano", jaak: "Flujo dedicado para persona moral, mismos motores de KYC" },
  { obligacion: "Listas de riesgo / PEP (Fr. VIII)", manual: "Consultas manuales a portales separados", jaak: "Cruce automático OFAC, Interpol, SAT 69-B, PEP en tiempo real" },
  { obligacion: "Conservar expediente 10 años (Fr. IV)", manual: "Archivero físico o carpetas dispersas", jaak: "Bóveda digital cifrada + sello de tiempo NOM-151" },
  { obligacion: "Firma del contrato", manual: "Firma presencial o PDF sin validez robusta", jaak: "Firma electrónica NOM-151, integridad verificable por 10 años" },
];

const HOW_IT_WORKS = [
  { num: "01", title: "Captura", desc: "El cliente sube su INE o pasaporte y toma una selfie con prueba de vida desde su celular, sin instalar nada." },
  { num: "02", title: "Validación IA", desc: "OCR y biometría facial comparan documento y rostro, y detectan alteraciones o intentos de fraude en segundos." },
  { num: "03", title: "Cumplimiento", desc: "Consulta automática en listas OFAC, PEP, Interpol y SAT 69-B, más identificación del Beneficiario Controlador." },
  { num: "04", title: "Firma + Archivo", desc: "El contrato se firma con Firma Electrónica NOM-151 y el expediente completo queda en bóveda digital por 10 años." },
];

const CERTIFICACIONES = [
  { title: "ISO 9001", desc: "Certificación de gestión de calidad, acreditada por NYCE/IQNet." },
  { title: "ISO 27001", desc: "Certificación de seguridad de la información, acreditada por NYCE/IQNet." },
  { title: "iBeta Nivel 1 / NIST", desc: "Prueba de vida (liveness) certificada contra ataques de presentación." },
  { title: "NOM-151 con PSC CODEX", desc: "Sello de tiempo certificado por un Prestador de Servicios de Certificación acreditado." },
  { title: "Servidores en México", desc: "Infraestructura alineada a los requisitos de resguardo de datos de la CNBV." },
];

const AUTOSERVICIO_PUNTOS = [
  "Sin contratos forzosos — consumo bajo demanda",
  "Todo se activa 100% en web, sin instalar nada",
  "No requiere conocimientos técnicos: JAAK enseña en una capacitación grupal incluida",
  "Activo en menos de 5 minutos",
];

const FAQ_ITEMS = [
  {
    q: "¿Qué es la Fracción V Bis de la LFPIORPI?",
    a: "Es la fracción incorporada al Artículo 17 de la LFPIORPI mediante la reforma publicada en el DOF el 16 de julio de 2025. Considera Actividad Vulnerable la recepción de recursos destinados a llevar a cabo un Desarrollo Inmobiliario cuya finalidad sea su venta o renta, incluyendo anticipos de preventa y aportaciones canalizadas mediante fideicomisos.",
  },
  {
    q: "¿Una desarrolladora puede caer en ambas fracciones a la vez?",
    a: "Sí: en la V Bis cuando recibe recursos para financiar el proyecto, y en la V cuando construye, comercializa o vende. Requiere controles dobles.",
  },
  {
    q: "¿Desde qué monto debo identificar a mi cliente?",
    a: "No existe un umbral mínimo para iniciar la identificación en las fracciones V y V Bis: el expediente del cliente debe integrarse desde el inicio de la relación u operación. El umbral de 8,025 UMA (aproximadamente $941,412.75 MXN) aplica únicamente para la obligación de presentar el Aviso ante la autoridad.",
  },
  {
    q: "¿Qué pasa si no cumplo?",
    a: "Las sanciones van de 200 a 2,000 UMA por incumplir obligaciones de identificación o presentar avisos fuera de tiempo, y de 10,000 a 65,000 UMA (o hasta el 100% del valor del acto) por omitir avisos o aceptar pagos en efectivo prohibidos, conforme al Artículo 54 de la LFPIORPI. El expediente debe conservarse 10 años y puede ser auditado por la UIF.",
  },
  {
    q: "¿JAAK reemplaza el alta en el Padrón de Actividades Vulnerables del SAT?",
    a: "No. JAAK automatiza identificación, evidencia y conservación del expediente; el alta, el Manual de Políticas y la capacitación anual del sujeto obligado siguen siendo obligación propia.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * VideoGateOverlay — icono que tapa el video al llegar a los 20s
 * ───────────────────────────────────────────────────────────────────────── */
function VideoGateOverlay() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-5 sm:p-8"
      style={{ background: "rgba(7,20,38,0.85)", backdropFilter: "blur(6px)" }}
    >
      <div className="w-full max-w-sm text-center">
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "rgba(30,202,211,0.15)", border: "1.5px solid rgba(30,202,211,0.4)" }}
        >
          <svg className="h-6 w-6" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-12V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
          ¿Quieres ver el flujo completo?
        </h3>
        <p className="text-[13.5px] leading-relaxed text-white/70 mb-6">
          Prueba el KYC biométrico de JAAK por $99 + IVA o escríbenos por WhatsApp y te mostramos la demo entera.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={KYC_ONBOARDING_URL}
            onClick={() => gtmEvent("click_buy_99", { location: "video_gate", page: "kyc-inmobiliario-lfpiorpi" })}
            className="w-full rounded-xl px-5 py-3.5 text-[14px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Comprar Plan Cobre — $99 + IVA
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("click_whatsapp", { location: "video_gate", page: "kyc-inmobiliario-lfpiorpi" })}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ background: "#25D366" }}
          >
            <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
            </svg>
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * VideoGatePlayer — YouTube IFrame API; al llegar a los 20s se pausa el
 * video y aparece un overlay con las opciones de compra ($99) o WhatsApp.
 * ───────────────────────────────────────────────────────────────────────── */
function VideoGatePlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lockedRef = useRef(false);

  const [playerReady, setPlayerReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [secondsWatched, setSecondsWatched] = useState(0);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const onPlayerStateChange = useCallback(
    (event: YTPlayerEvent) => {
      const YT = window.YT;
      if (!YT) return;

      if (event.data === YT.PlayerState.PLAYING) {
        if (!started) {
          setStarted(true);
          gtmEvent("click_play_video", { page: "kyc-inmobiliario-lfpiorpi" });
        }
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            const player = playerRef.current;
            if (!player) return;
            const t = player.getCurrentTime();
            setSecondsWatched(Math.min(Math.floor(t), LOCK_SECONDS));
            if (!lockedRef.current && t >= LOCK_SECONDS) {
              lockedRef.current = true;
              player.pauseVideo();
              setLocked(true);
              gtmEvent("video_reached_20s", { page: "kyc-inmobiliario-lfpiorpi" });
              stopPolling();
            }
          }, 500);
        }
      } else {
        stopPolling();
      }
    },
    [started, stopPolling]
  );

  const createPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current || !window.YT) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: { enablejsapi: 1, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3 },
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

  const handlePlayClick = () => {
    if (!playerReady) return;
    playerRef.current?.playVideo();
  };

  const progressPct = locked ? 100 : Math.min((secondsWatched / LOCK_SECONDS) * 100, 100);

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          aspectRatio: "16/9",
          background: NAVY_DARK,
          border: "1px solid rgba(30,202,211,0.3)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div ref={containerRef} className="absolute inset-0 h-full w-full" />

        {!started && (
          <button
            onClick={handlePlayClick}
            aria-label="Reproducir demo de KYC de JAAK"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{
              background: "radial-gradient(120% 120% at 20% 15%, rgba(30,202,211,0.16) 0%, rgba(7,20,38,0.97) 60%)",
            }}
          >
            <span
              className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-transform hover:scale-105"
              style={{ background: TEAL, boxShadow: "0 0 0 10px rgba(30,202,211,0.14)" }}
            >
              <svg className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5" fill={NAVY_DARK} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div className="text-center px-6">
              <p className="text-white font-bold text-base sm:text-lg">Ver demo de KYC biométrico</p>
              <p className="text-white/50 text-[13px] mt-1">Captura de documento, biometría facial y prueba de vida</p>
            </div>
          </button>
        )}

        {locked && <VideoGateOverlay />}
      </div>

      {/* Barra de progreso hacia el bloqueo */}
      {!locked && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[12px] font-medium text-white/50">Desbloqueando en {LOCK_SECONDS}s...</span>
            <span className="text-[12px] font-medium text-white/50">{secondsWatched}/{LOCK_SECONDS}s</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progressPct}%`, background: `linear-gradient(90deg, ${TEAL}, ${VIOLET})` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * HeroCtas — botones siempre activos, sin depender del video
 * ───────────────────────────────────────────────────────────────────────── */
function HeroCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={HUBSPOT_MEETING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => gtmEvent("click_hablar_ejecutivo", { page: "kyc-inmobiliario-lfpiorpi" })}
        className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ background: TEAL, color: NAVY_DARK }}
      >
        Hablar con un ejecutivo JAAK
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => gtmEvent("click_whatsapp", { page: "kyc-inmobiliario-lfpiorpi" })}
        className="relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-bold text-center text-white transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ background: "#25D366" }}
      >
        <span
          className="absolute inset-0 rounded-xl animate-ping"
          style={{ background: "#25D366", opacity: 0.35 }}
          aria-hidden="true"
        />
        <span className="relative flex items-center gap-2">
          <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
          </svg>
          Escríbenos por WhatsApp
        </span>
      </a>
    </div>
  );
}

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
              className="w-full text-left px-6 py-5 flex items-start gap-4 cursor-pointer list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
                  color: isOpen ? NAVY_DARK : "#64748B",
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
            <p className="px-6 pb-6 pl-16 text-[14px] leading-relaxed" style={{ color: "#6B7686" }}>
              {item.a}
            </p>
          </details>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Página principal
 * ───────────────────────────────────────────────────────────────────────── */
export default function KycInmobiliarioLfpiorpiLandingClient() {
  useEffect(() => {
    gtmEvent("view_kyc_inmobiliario_lfpiorpi_landing");
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: `linear-gradient(150deg, ${NAVY_DARK} 0%, ${NAVY} 65%, #232C4C 100%)` }}
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[120px]"
            style={{ background: "rgba(30,202,211,0.1)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full blur-[100px]"
            style={{ background: "rgba(101,93,198,0.12)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: TEAL }} />
                  <span className="text-sm font-medium" style={{ color: "#7FE8EC" }}>
                    Reforma LFPIORPI · Art. 17 Fr. V y V Bis · DOF 16-jul-2025
                  </span>
                </div>

                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-[3.2rem] font-black text-white mb-6 leading-tight">
                  ¿Construyes, desarrollas, intermedias o recibes anticipos?{" "}
                  <span
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${TEAL}, ${VIOLET})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Hoy ya eres sujeto obligado.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                  Desde el 16 de julio de 2025, la reforma a la LFPIORPI (Art. 17, Fr. V y V Bis) obliga al sector
                  inmobiliario a identificar, demostrar y conservar. Automatiza tu cumplimiento con KYC biométrico y
                  firma electrónica NOM-151.
                </p>

                <div className="mb-6">
                  <VideoGatePlayer />
                </div>

                <HeroCtas />

                <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <Link
                    href={KYC_ONBOARDING_URL}
                    onClick={() => gtmEvent("click_buy_99", { location: "hero", page: "kyc-inmobiliario-lfpiorpi" })}
                    className="inline-flex items-center gap-2 font-semibold text-[15px] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ color: TEAL, outlineColor: TEAL }}
                  >
                    Prueba el Plan Cobre de KYC desde $99 + IVA →
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
                  <Link
                    href="/contacto"
                    onClick={() => gtmEvent("contact_click", { source: "hero", destination: "contacto", page_path: "/kyc-inmobiliario-lfpiorpi" })}
                    className="font-semibold underline underline-offset-2 transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    ¿Necesitas un volumen mayor o un flujo personalizado? Habla con un especialista.
                  </Link>
                  <a
                    href={getWhatsAppUrl("hero")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("whatsapp_click", { source: "hero", destination: "whatsapp", page_path: "/kyc-inmobiliario-lfpiorpi" })}
                    className="font-semibold underline underline-offset-2 transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Resolver dudas por WhatsApp
                  </a>
                </div>
              </div>

              {/* Bloque lateral: umbral y sanciones a un vistazo */}
              <div className="hidden lg:flex justify-center">
                <div
                  className="rounded-2xl p-8 max-w-sm w-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }}
                >
                  <p className="text-[12px] font-semibold uppercase tracking-wide mb-4" style={{ color: "#7FE8EC" }}>
                    Lo que exige la reforma
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <p className="text-2xl font-black text-white">Desde el primer acto</p>
                      <p className="text-white/50 text-[13px] mt-1">No hay umbral mínimo para identificar al cliente</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <p className="text-2xl font-black" style={{ color: TEAL }}>8,025 UMA</p>
                      <p className="text-white/50 text-[13px] mt-1">≈ $941,412.75 MXN — umbral para presentar Aviso</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <p className="text-2xl font-black text-white">10 años</p>
                      <p className="text-white/50 text-[13px] mt-1">Conservación obligatoria del expediente, sujeta a auditoría UIF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. El dolor del sector ─────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="dolor-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="dolor-heading" className="text-3xl md:text-4xl font-black mb-4" style={{ color: NAVY }}>
                Cumplir hoy es lento, caro y riesgoso
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                El proceso manual de identificación expone a agentes, brokers y desarrolladoras a fraude, pérdida de
                evidencia y sanciones evitables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PAIN_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl p-6 border border-gray-100 bg-gray-50 hover:shadow-lg transition-all"
                  style={{ borderColor: "#E2E8EF" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${NAVY}0D`, color: NAVY }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {point.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>{point.title}</h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Fundamento legal ────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#F5F7FA" }} aria-labelledby="legal-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(101,93,198,0.1)", border: "1px solid rgba(101,93,198,0.3)", color: VIOLET }}
              >
                Fundamento legal
              </span>
              <h2 id="legal-heading" className="mt-4 text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Qué cambió realmente con la reforma del 16 de julio de 2025
              </h2>
            </div>

            {/* Tabla comparativa Fracción V vs V Bis */}
            <div className="overflow-x-auto rounded-2xl bg-white mb-14" style={{ border: "1px solid #E2E8EF" }}>
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr style={{ background: "#EEF2F5" }}>
                    <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide" style={{ color: NAVY }}>—</th>
                    {COMPARISON_COLUMNS.map((col) => (
                      <th key={col.label} className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide" style={{ color: NAVY }}>
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    { label: "Qué regula", key: "regula" as const },
                    { label: "Momento de riesgo", key: "momento" as const },
                    { label: "Ejemplos", key: "ejemplos" as const },
                  ].map((row) => (
                    <tr key={row.label} style={{ borderTop: "1px solid #EEF2F5" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: "#6B7686" }}>{row.label}</td>
                      {COMPARISON_COLUMNS.map((col) => (
                        <td key={col.label} className="px-5 py-4" style={{ color: NAVY }}>
                          {col[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr style={{ borderTop: "1px solid #EEF2F5" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "#6B7686" }}>Umbral de Aviso</td>
                    <td className="px-5 py-4" style={{ color: NAVY }} colSpan={2}>
                      8,025 UMA (≈ $941,412.75 MXN) — mismo umbral para ambas fracciones
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #EEF2F5" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "#6B7686" }}>Umbral para identificar</td>
                    <td className="px-5 py-4" style={{ color: NAVY }} colSpan={2}>
                      No existe — la identificación es obligatoria desde el primer acto
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Obligaciones Art. 18 */}
            <h3 className="text-2xl font-black text-center mb-8" style={{ color: NAVY }}>
              Tus 4 obligaciones bajo el Art. 18
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {OBLIGACIONES.map((ob) => (
                <div key={ob.num} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #E2E8EF" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black mb-4"
                    style={{ background: TEAL, color: NAVY_DARK }}
                  >
                    {ob.num}
                  </div>
                  <h4 className="font-bold text-[15px] mb-2" style={{ color: NAVY }}>{ob.title}</h4>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "#6B7686" }}>{ob.desc}</p>
                </div>
              ))}
            </div>

            {/* Sanciones Art. 54 */}
            <div className="rounded-2xl p-8" style={{ background: NAVY_DARK, border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="text-xl font-black text-white mb-5">Sanciones (Art. 54)</h3>
              <div className="grid md:grid-cols-3 gap-6 text-[14px]">
                <div>
                  <p className="text-2xl font-black" style={{ color: TEAL }}>200–2,000 UMA</p>
                  <p className="text-white/60 mt-1">Por fallas de identificación o avisos presentados fuera de tiempo.</p>
                </div>
                <div>
                  <p className="text-2xl font-black" style={{ color: TEAL }}>10,000–65,000 UMA</p>
                  <p className="text-white/60 mt-1">O hasta el 100% del valor del acto, por omitir avisos o usar efectivo prohibido.</p>
                </div>
                <div>
                  <p className="text-2xl font-black" style={{ color: TEAL }}>10 años</p>
                  <p className="text-white/60 mt-1">Conservación obligatoria del expediente, sujeta a auditoría de la UIF.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. De lo manual a lo automatizado ──────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="manual-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="manual-heading" className="text-3xl md:text-4xl font-black mb-4" style={{ color: NAVY }}>
                De lo manual a lo automatizado
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Lo que hacías a mano, ahora en menos de una hora.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl mb-8" style={{ border: "1px solid #E2E8EF" }}>
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr style={{ background: "#EEF2F5" }}>
                    <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide" style={{ color: NAVY }}>Obligación legal</th>
                    <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide" style={{ color: NAVY }}>Proceso manual típico</th>
                    <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-wide" style={{ color: TEAL }}>Con JAAK</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {MANUAL_VS_JAAK.map((row) => (
                    <tr key={row.obligacion} style={{ borderTop: "1px solid #EEF2F5" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: NAVY }}>{row.obligacion}</td>
                      <td className="px-5 py-4" style={{ color: "#6B7686" }}>{row.manual}</td>
                      <td className="px-5 py-4 font-medium" style={{ color: NAVY }}>{row.jaak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[14px] leading-relaxed max-w-3xl mx-auto text-center" style={{ color: "#6B7686" }}>
              JAAK automatiza la identificación, la evidencia y la conservación. El alta en el padrón del SAT, el
              Manual de Políticas y la capacitación anual siguen siendo responsabilidad del sujeto obligado — JAAK te
              acompaña, no te sustituye.
            </p>
          </div>
        </section>

        {/* ── 5. Cómo funciona ────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: NAVY }} aria-labelledby="como-funciona-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="como-funciona-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
                Cómo funciona
              </h2>
              <p className="text-xl text-white/60">Un flujo digital, de principio a fin.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.num} className="relative">
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div
                      className="hidden md:block absolute top-8 left-full w-full h-0.5 z-0"
                      style={{ background: `linear-gradient(90deg, rgba(30,202,211,0.5), transparent)` }}
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className="relative rounded-2xl p-6 h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="text-4xl font-black mb-3" style={{ color: "rgba(30,202,211,0.25)" }}>{step.num}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 text-[13.5px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Cross-sell firma electrónica NOM-151 ────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="firma-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="firma-heading" className="text-3xl md:text-4xl font-black mb-6" style={{ color: NAVY }}>
              El expediente no sirve de nada si el contrato no tiene certeza jurídica
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto">
              La NOM-151 certifica la <strong style={{ color: NAVY }}>integridad y fecha cierta</strong> de un documento
              — no la identidad de quien firma, eso lo garantiza el KYC. Cada firma incluye un sello de tiempo{" "}
              <strong style={{ color: NAVY }}>RFC 3161</strong>, emitido por un PSC (CODEX) acreditado ante la Secretaría
              de Economía, con vigencia mínima de 10 años.
            </p>
            <Link
              href={FIRMA_ELECTRONICA_URL}
              onClick={() => gtmEvent("click_firma_electronica", { page: "kyc-inmobiliario-lfpiorpi" })}
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: VIOLET, outlineColor: VIOLET }}
            >
              Conoce la firma electrónica NOM-151 de JAAK →
            </Link>
          </div>
        </section>

        {/* ── 7. Certificaciones ──────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#F5F7FA" }} aria-labelledby="certs-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="certs-heading" className="text-3xl md:text-4xl font-black mb-4" style={{ color: NAVY }}>
                Certificaciones que respaldan cada expediente
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Miles de verificaciones al mes, con 100% tecnología hecha en México.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {CERTIFICACIONES.map((c) => (
                <div key={c.title} className="rounded-2xl p-5 bg-white" style={{ border: "1px solid #E2E8EF" }}>
                  <h3 className="font-bold text-[14.5px] mb-2" style={{ color: NAVY }}>{c.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#6B7686" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Autoservicio ─────────────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="autoservicio-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="autoservicio-heading" className="text-3xl md:text-4xl font-black mb-8" style={{ color: NAVY }}>
              Sin contratos forzosos. Sin saber de tecnología. Sin depender de tu equipo de TI.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
              {AUTOSERVICIO_PUNTOS.map((punto) => (
                <div key={punto} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: TEAL }}
                  >
                    <svg className="w-3 h-3" style={{ color: NAVY_DARK }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14.5px]" style={{ color: "#4B5563" }}>{punto}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={AUTOSERVICIO_URL}
                onClick={() => gtmEvent("click_ver_autoservicio", { page: "kyc-inmobiliario-lfpiorpi" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ background: `${NAVY}0D`, color: NAVY, border: `1px solid ${NAVY}33`, outlineColor: NAVY }}
              >
                Ver planes de Autoservicio
              </Link>
              <Link
                href={KYC_ONBOARDING_URL}
                onClick={() => gtmEvent("click_buy_99", { location: "autoservicio_section", page: "kyc-inmobiliario-lfpiorpi" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-all hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ background: TEAL, color: NAVY_DARK, outlineColor: TEAL }}
              >
                Probar Plan Cobre KYC — $99 + IVA
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. CTA final ─────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)` }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Identifica. Demuestra. Conserva.
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
              Hagamos que cumplir la LFPIORPI sea lo más fácil de tu operación.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_hablar_ejecutivo", { location: "final_cta", page: "kyc-inmobiliario-lfpiorpi" })}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: TEAL, color: NAVY_DARK }}
              >
                Hablar con un ejecutivo JAAK
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("click_whatsapp", { location: "final_cta", page: "kyc-inmobiliario-lfpiorpi" })}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: "#25D366" }}
              >
                Escríbenos por WhatsApp
              </a>
              <Link
                href={AUTOSERVICIO_URL}
                onClick={() => gtmEvent("click_ver_autoservicio", { location: "final_cta", page: "kyc-inmobiliario-lfpiorpi" })}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white border transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Ir a Autoservicio
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#F5F7FA" }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-center mb-10" style={{ color: NAVY }}>
              Preguntas frecuentes
            </h2>
            <FAQAccordion />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
