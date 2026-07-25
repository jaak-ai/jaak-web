"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import { gtmEvent } from "@/components/GoogleTagManager";

const NAVY = "#02132D";
const NAVY_SOFT = "#0C2544";
const TEAL = "#1ECAD3";
const LIGHT = "#F6F8FA";
const BORDER = "#E3E8EE";
const TEXT_BODY = "#4B5768";
const TEXT_MUTED = "#6B7686";

const VIDEO_ID = "q0Iliu1wK-g";
const MEETINGS_URL = "https://meetings.hubspot.com/jose-andres-yllescas-lira";
const WHATSAPP_NUMBER = "5215535091788";
const WHATSAPP_MESSAGE =
  "Hola, quiero conocer la solución de firma digital y evidencia de JAAK para el sector salud.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const TRIAL_PACKAGES = [
  {
    key: "nom151",
    name: "Firma Digital NOM-151",
    detail: "5 documentos incluidos · Firma electrónica avanzada con conservación NOM-151.",
    priceLabel: "$99 + IVA",
    originalPriceLabel: "$165",
    badge: "40% de descuento",
    href: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWQlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBEaWdpdGFsJTIwTk9NLTE1MSUyMiUyQyUyMnByJTIyJTNBMTE0Ljg0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwRGlnaXRhbCUyME5PTS0xNTElMjBDb2JyZSUyMDUlMjIlMkMlMjJxJTIyJTNBNSU3RCU1RCU3RA%3D%3D",
    cta: "Probar por $99 + IVA",
  },
  {
    key: "nom151_bio",
    name: "Firma NOM-151 + Biometría",
    detail: "5 documentos incluidos · Firma electrónica avanzada con validación de identidad biométrica.",
    priceLabel: "$130 + IVA",
    badge: "",
    href: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWNhNjNhODg3MzU1MzNmMmJhNzklMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWNhNjNhODg3MzU1MzNmMmJhNzklMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWRfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwQklPJTIyJTJDJTIycHIlMjIlM0ExNTAuOCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIydCUyMiUzQSUyMkNvYnJlJTIyJTdEJTVEJTdE",
    cta: "Probar con biometría",
  },
];

const RISKS = [
  "Firmas cuya identidad resulta difícil de comprobar.",
  "Fechas registradas manualmente.",
  "Documentos que pueden extraviarse o quedar incompletos.",
  "Falta de trazabilidad sobre el envío, consulta y firma.",
];

const LOCKS = [
  {
    q: "¿Quién firmó?",
    a: "Configura mecanismos de autenticación y, cuando el proceso lo requiera, validación de identidad mediante documento oficial, biometría y prueba de vida.",
  },
  {
    q: "¿Cuándo firmó?",
    a: "Registra fecha, hora y eventos relevantes del proceso. La conservación NOM-151 puede incorporar una constancia emitida por un Prestador de Servicios de Certificación, de acuerdo con la configuración contratada.",
  },
  {
    q: "¿Qué documento aceptó?",
    a: "Genera una huella criptográfica del documento y conserva evidencia para identificar la versión que fue enviada, revisada y firmada.",
  },
];

const DIMENSIONS = [
  {
    title: "Dimensión clínica y sanitaria",
    text: "El consentimiento debe contener la información médica, los riesgos, beneficios, alternativas y demás elementos que correspondan al procedimiento y a la institución.",
    ref: "Ley General de Salud y NOM-004-SSA3-2012.",
  },
  {
    title: "Dimensión jurídica y documental",
    text: "El proceso electrónico debe permitir atribuir la participación de los firmantes y conservar la integridad y disponibilidad de la información.",
    ref: "Código de Comercio y NOM-151-SCFI-2016.",
  },
  {
    title: "Dimensión de privacidad",
    text: "Los expedientes clínicos, datos biométricos y datos relacionados con el estado de salud requieren medidas reforzadas de seguridad y confidencialidad.",
    ref: "Legislación mexicana en materia de protección de datos personales.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Carga o genera el documento",
    text: "Consentimiento, autorización, receta, expediente o formato interno.",
  },
  {
    n: "02",
    title: "Configura a los participantes",
    text: "Médico, paciente, representante legal, responsable sanitario u otros participantes.",
  },
  {
    n: "03",
    title: "Define el nivel de firma y autenticación",
    text: "Firma electrónica, códigos de autenticación, biometría, validación documental o e.firma, de acuerdo con el caso de uso y la configuración disponible.",
  },
  {
    n: "04",
    title: "Genera la evidencia",
    text: "Fecha, hora, identidad, eventos, documento firmado, huella criptográfica y constancia NOM-151 cuando aplique.",
  },
  {
    n: "05",
    title: "Consulta el expediente",
    text: "Acceso a documentos, estados, evidencia y actividad del proceso desde una misma plataforma.",
  },
];

const USE_CASES = [
  "Cartas de consentimiento informado",
  "Autorizaciones para procedimientos",
  "Avisos y aceptación de riesgos",
  "Consentimientos para el tratamiento de datos sensibles",
  "Expedientes clínicos y documentos complementarios",
  "Recetas y órdenes médicas",
  "Documentos emitidos por médicos y especialistas",
  "Aceptación de políticas por parte de pacientes",
  "Entrega o recepción de documentación relacionada con farmacias",
  "Contratos con médicos, proveedores y personal clínico",
];

const MANUAL_PROCESS = [
  "Firma manuscrita.",
  "Fecha capturada manualmente.",
  "Documentos distribuidos en diferentes archivos.",
  "Consulta y seguimiento manual.",
  "Evidencia limitada sobre el recorrido del documento.",
];

const JAAK_PROCESS = [
  "Firma electrónica configurable.",
  "Mecanismos de autenticación e identidad.",
  "Registro de fecha, hora y actividad.",
  "Huella criptográfica del documento.",
  "Expediente digital con evidencia centralizada.",
  "Conservación NOM-151 cuando se contrate y aplique.",
];

const AREAS = [
  { name: "Dirección médica", text: "Fortalece la documentación de las decisiones, autorizaciones y consentimientos del paciente." },
  { name: "Legal y cumplimiento", text: "Conserva evidencia sobre los firmantes, el momento de aceptación y la integridad del documento." },
  { name: "Calidad", text: "Estandariza formatos y reduce omisiones en los procesos de integración documental." },
  { name: "Operaciones", text: "Reduce impresión, traslado, archivo y seguimiento manual." },
  { name: "Tecnología", text: "Integra la firma al flujo digital mediante las opciones técnicas disponibles en JAAK." },
  { name: "Experiencia del paciente", text: "Permite revisar y firmar documentos desde un dispositivo, sin depender exclusivamente del papel." },
];

const SECURITY_CAPS = [
  "Accesos controlados",
  "Cifrado",
  "Registro de actividad",
  "Expediente auditable",
  "Gestión de evidencia",
  "Certificación ISO 27001, en caso de que se encuentre vigente y pueda publicarse",
  "Integraciones mediante API o SDK, cuando correspondan al producto contratado",
];

const INSTITUTION_TYPES = ["Clínica", "Hospital", "Consultorio", "Laboratorio", "Farmacia", "Red médica", "Plataforma de salud", "Otro"];
const USE_CASE_OPTIONS = ["Consentimiento informado", "Expediente clínico", "Recetas u órdenes", "Protección de datos", "Contratos internos", "Otro"];

const FAQ_ITEMS = [
  {
    q: "¿JAAK sustituye la explicación médica al paciente?",
    a: "No. La plataforma documenta el proceso de revisión, autenticación y firma. La información clínica y la explicación del procedimiento siguen siendo responsabilidad del profesional y de la institución.",
  },
  {
    q: "¿La NOM-151 es un tipo de firma?",
    a: "No exactamente. La NOM-151 establece requisitos para la conservación de mensajes de datos y la digitalización de documentos. Puede complementar una firma electrónica mediante evidencia de integridad y una constancia de conservación.",
  },
  {
    q: "¿Es obligatorio utilizar biometría?",
    a: "Depende del nivel de identidad y evidencia que requiera cada caso. JAAK permite configurar diferentes mecanismos de autenticación.",
  },
  {
    q: "¿Se puede integrar con nuestro expediente clínico?",
    a: "JAAK cuenta con alternativas de integración. La viabilidad y alcance deben revisarse de acuerdo con el sistema utilizado y la configuración contratada.",
  },
  {
    q: "¿Podemos utilizar e.firma del SAT?",
    a: "JAAK puede contemplar flujos con e.firma cuando el producto, la integración y el caso de uso lo permitan. Debe revisarse técnicamente antes de ofrecerlo como una funcionalidad estándar.",
  },
];

function CheckIcon({ color = TEAL }: { color?: string }) {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke={color} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="#94A3B8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.86L2.05 22l5.36-1.4a9.9 9.9 0 004.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0012.04 2zm5.83 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z" />
    </svg>
  );
}

function WhatsAppButton({ location, variant = "solid" }: { location: string; variant?: "solid" | "outline" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => gtmEvent("whatsapp_click", { source: location, destination: "whatsapp", page_path: "/salud" })}
      className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold transition-all"
      style={
        variant === "solid"
          ? { background: "#25D366", color: "#fff" }
          : { border: "1px solid rgba(255,255,255,0.30)", color: "#fff" }
      }
    >
      <WhatsAppIcon />
      Escríbenos por WhatsApp
    </a>
  );
}

function HeroVisual() {
  const states = [
    { label: "Identidad validada", done: true },
    { label: "Documento revisado", done: true },
    { label: "Firma completada", done: true },
    { label: "Evidencia generada", done: false },
  ];
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="rounded-[28px] p-3"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
      >
        <div className="rounded-[20px] p-6" style={{ background: "#FFFFFF" }}>
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>
              Expediente digital
            </span>
            <span
              className="text-[10px] font-bold px-2 py-1 rounded-full"
              style={{ background: "rgba(30,202,211,0.12)", color: "#0E8E96" }}
            >
              En proceso
            </span>
          </div>
          <div className="space-y-3">
            {states.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: s.done ? "rgba(30,202,211,0.06)" : LIGHT,
                  border: `1px solid ${s.done ? "rgba(30,202,211,0.25)" : BORDER}`,
                }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: s.done ? TEAL : "#E5E9EF" }}
                >
                  {s.done ? (
                    <CheckIcon color={NAVY} />
                  ) : (
                    <span className="w-2 h-2 rounded-full" style={{ background: "#94A3B8" }} />
                  )}
                </span>
                <span className="text-[13.5px] font-semibold" style={{ color: NAVY }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl -z-10"
        style={{ background: "rgba(30,202,211,0.14)" }}
      />
    </div>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: "16/9", background: NAVY, border: "1px solid rgba(255,255,255,0.12)" }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="Demo de firma digital JAAK"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            gtmEvent("video_play", { page: "salud", video: VIDEO_ID });
          }}
          aria-label="Reproducir demo de firma digital JAAK"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(2,19,45,0.55), rgba(2,19,45,0.75)), url(https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span
            className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{ background: TEAL, boxShadow: "0 0 0 10px rgba(30,202,211,0.16)" }}
          >
            <svg className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5" fill={NAVY} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <p className="text-white font-bold text-base sm:text-lg">Ver demo de firma digital</p>
        </button>
      )}
    </div>
  );
}

interface LeadForm {
  nombre: string;
  empresa: string;
  cargo: string;
  correo: string;
  telefono: string;
  tipoInstitucion: string;
  volumen: string;
  casoUso: string;
  mensaje: string;
  acepta: boolean;
}

const FORM_INITIAL: LeadForm = {
  nombre: "",
  empresa: "",
  cargo: "",
  correo: "",
  telefono: "",
  tipoInstitucion: "",
  volumen: "",
  casoUso: "",
  mensaje: "",
  acepta: false,
};

function LeadFormSection() {
  const [form, setForm] = useState<LeadForm>(FORM_INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    gtmEvent("click_solicitar_demo", { location: "formulario", page: "salud" });

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nombre,
          empresa: form.empresa,
          email: form.correo,
          telefono: form.telefono,
          mensaje: [
            form.cargo && `Cargo: ${form.cargo}`,
            form.tipoInstitucion && `Tipo de institución: ${form.tipoInstitucion}`,
            form.volumen && `Documentos mensuales: ${form.volumen}`,
            form.casoUso && `Caso de uso: ${form.casoUso}`,
            form.mensaje && `Mensaje: ${form.mensaje}`,
          ]
            .filter(Boolean)
            .join(" | "),
          source: "landing-salud",
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        gtmEvent("submit_form_salud", { page: "salud" });
        setForm(FORM_INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-[15px]";

  return (
    <div className="rounded-2xl p-6 sm:p-9" style={{ background: "#fff", border: `1px solid ${BORDER}`, boxShadow: "0 20px 50px rgba(2,19,45,0.06)" }}>
      {status === "success" ? (
        <div className="py-6 text-center">
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "rgba(30,202,211,0.14)" }}
          >
            <CheckIcon color="#0E8E96" />
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>
            Solicitud enviada
          </h3>
          <p style={{ color: TEXT_MUTED }}>
            Un especialista de JAAK te contacta en menos de 24 horas para revisar tu caso de uso.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Nombre *</label>
              <input required type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Empresa o institución *</label>
              <input required type="text" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de la institución" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Cargo</label>
              <input type="text" name="cargo" value={form.cargo} onChange={handleChange} placeholder="Tu puesto en la institución" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Correo corporativo *</label>
              <input required type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="tu@institucion.com" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Teléfono *</label>
              <input required type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+52 55 1234 5678" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Tipo de institución</label>
              <select name="tipoInstitucion" value={form.tipoInstitucion} onChange={handleChange} className={inputClass} style={{ borderColor: BORDER, color: NAVY }}>
                <option value="">Selecciona una opción</option>
                {INSTITUTION_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Documentos mensuales aproximados</label>
              <input type="text" name="volumen" value={form.volumen} onChange={handleChange} placeholder="Ej. 200 - 500" className={inputClass} style={{ borderColor: BORDER, color: NAVY }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Caso de uso</label>
              <select name="casoUso" value={form.casoUso} onChange={handleChange} className={inputClass} style={{ borderColor: BORDER, color: NAVY }}>
                <option value="">Selecciona una opción</option>
                {USE_CASE_OPTIONS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: NAVY }}>Mensaje</label>
            <textarea
              rows={3}
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos qué documentos necesitas firmar, quiénes participan y qué evidencia necesitas conservar."
              className={`${inputClass} resize-none`}
              style={{ borderColor: BORDER, color: NAVY }}
            />
          </div>

          <label className="flex items-start gap-3 text-sm" style={{ color: TEXT_MUTED }}>
            <input required type="checkbox" name="acepta" checked={form.acepta} onChange={handleChange} className="mt-1" />
            <span>
              Acepto el{" "}
              <Link href="/privacidad" className="underline" style={{ color: "#0E8E96" }}>
                Aviso de Privacidad
              </Link>{" "}
              de JAAK.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-4 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            style={{ background: TEAL, color: NAVY }}
          >
            {status === "loading" ? "Enviando..." : "Solicitar una demostración"}
          </button>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700 font-medium text-sm">{errorMessage}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <div key={item.q} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            style={{ background: open === i ? LIGHT : "#fff" }}
          >
            <span className="font-semibold" style={{ color: NAVY }}>{item.q}</span>
            <span
              className="flex-shrink-0 text-lg transition-transform"
              style={{ color: TEAL, transform: open === i ? "rotate(45deg)" : "none" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4" style={{ background: LIGHT }}>
              <p className="text-[14.5px] leading-relaxed" style={{ color: TEXT_BODY }}>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SaludLandingClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* SECCIÓN 1. HERO */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: "rgba(30,202,211,0.10)" }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-sr>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{ background: "rgba(30,202,211,0.10)", border: "1px solid rgba(30,202,211,0.30)" }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: TEAL }}>
                    Firma digital y evidencia para el sector salud
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Cada consentimiento, receta o expediente debe poder demostrar quién participó.
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-8">
                  Firma documentos, valida la identidad de los participantes y conserva la evidencia del proceso en un expediente digital auditable.
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <a
                    href="#formulario"
                    onClick={() => gtmEvent("click_solicitar_demo", { location: "hero", page: "salud" })}
                    className="px-6 py-3 font-bold rounded-lg transition-all"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    Solicitar una demostración
                  </a>
                  <a
                    href="#video"
                    onClick={() => gtmEvent("click_ver_video", { location: "hero", page: "salud" })}
                    className="px-6 py-3 border font-semibold rounded-lg text-white transition-all"
                    style={{ borderColor: "rgba(255,255,255,0.30)" }}
                  >
                    Ver cómo funciona
                  </a>
                  <WhatsAppButton location="hero" />
                </div>

                <p className="text-sm text-white/45">
                  Configuración adaptable a los procesos y requisitos de cada institución.
                </p>
              </div>

              <div data-sr="right">
                <HeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2. EL PROBLEMA */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Un documento firmado no siempre cuenta toda la historia.
              </h2>
              <p className="text-lg" style={{ color: TEXT_BODY }}>
                En un proceso médico no basta con conservar un PDF o una hoja con una firma. Ante una revisión, una queja o una auditoría, también puede ser necesario demostrar quién aceptó el documento, en qué momento lo hizo y qué versión recibió.
              </p>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RISKS.map((risk) => (
                <div key={risk} className="p-6 rounded-2xl" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
                  <p className="text-[15px] font-medium" style={{ color: NAVY }}>{risk}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm max-w-2xl" style={{ color: TEXT_MUTED }}>
              Esto no significa que todos los consentimientos en papel carezcan de validez: pueden presentar mayores dificultades operativas y probatorias frente a un proceso digital con evidencia.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3. LOS TRES CANDADOS DE LA EVIDENCIA */}
        <section className="py-20" style={{ background: LIGHT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Tres preguntas que debe responder tu expediente.
              </h2>
            </div>

            <div data-sr-grid className="grid md:grid-cols-3 gap-6 mb-6">
              {LOCKS.map((lock) => (
                <div key={lock.q} className="bg-white rounded-2xl p-8" style={{ border: `1px solid ${BORDER}` }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#0E8E96" }}>{lock.q}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>{lock.a}</p>
                </div>
              ))}
            </div>

            <div data-sr className="bg-white rounded-2xl p-8" style={{ border: `1px solid rgba(30,202,211,0.35)` }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>Acceso y trazabilidad</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
                Centraliza documentos y evidencia en un expediente digital con controles de acceso e historial de actividad.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4. TRES DIMENSIONES DEL PROCESO */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Contenido clínico, validez documental y protección de datos.
              </h2>
            </div>

            <div data-sr-grid className="grid md:grid-cols-3 gap-6 mb-10">
              {DIMENSIONS.map((d) => (
                <div key={d.title} className="rounded-2xl p-8" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: NAVY }}>{d.title}</h3>
                  <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: TEXT_BODY }}>{d.text}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#0E8E96" }}>{d.ref}</p>
                </div>
              ))}
            </div>

            <div data-sr className="max-w-3xl mx-auto text-center p-6 rounded-xl" style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.20)" }}>
              <p className="text-sm" style={{ color: TEXT_BODY }}>
                JAAK proporciona herramientas tecnológicas para configurar el proceso. El contenido clínico, la base jurídica del tratamiento de datos y las políticas de conservación deben ser definidos y validados por cada institución.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5. CÓMO FUNCIONA JAAK */}
        <section className="py-20" style={{ background: LIGHT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Del documento al expediente de evidencia.
              </h2>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {STEPS.map((step) => (
                <div key={step.n} className="bg-white rounded-2xl p-6" style={{ border: `1px solid ${BORDER}` }}>
                  <div className="text-3xl font-black mb-4" style={{ color: "rgba(30,202,211,0.35)" }}>{step.n}</div>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: NAVY }}>{step.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: TEXT_MUTED }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 6. VIDEO DE DEMOSTRACIÓN */}
        <section id="video" className="py-20" style={{ background: NAVY }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Conoce cómo funciona nuestra firma digital.
              </h2>
              <p className="text-white/65 max-w-2xl mx-auto">
                En este video podrás conocer el flujo general de JAAK: creación o carga del documento, configuración de firmantes, envío, autenticación, firma y generación del expediente final.
              </p>
            </div>

            <div data-sr>
              <VideoPlayer />
            </div>

            <div data-sr className="text-center mt-8">
              <p className="text-white/50 text-sm mb-6 max-w-xl mx-auto">
                Este flujo puede configurarse para consentimientos informados, autorizaciones, expedientes, recetas y otros documentos del sector salud.
              </p>
              <a
                href="#formulario"
                onClick={() => gtmEvent("click_solicitar_demo", { location: "video", page: "salud" })}
                className="inline-block px-6 py-3 font-bold rounded-lg transition-all"
                style={{ background: TEAL, color: NAVY }}
              >
                Quiero revisar mi caso de uso
              </a>
            </div>
          </div>
        </section>

        {/* OFERTA: PAQUETE DE PRUEBA COBRE */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: NAVY }}>
                Pruébalo tú mismo: firma digital NOM-151 por tiempo limitado.
              </h2>
              <p className="text-lg" style={{ color: TEXT_BODY }}>
                Activa un paquete de prueba de la línea Cobre y firma tus primeros documentos con evidencia NOM-151 en minutos.
              </p>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 gap-6 mb-8">
              {TRIAL_PACKAGES.map((pkg) => (
                <div key={pkg.key} className="rounded-2xl p-8 bg-white" style={{ border: pkg.badge ? "1.5px solid rgba(30,202,211,0.45)" : `1px solid ${BORDER}` }}>
                  {pkg.badge && (
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
                      style={{ background: "rgba(30,202,211,0.12)", color: "#0E8E96" }}
                    >
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>{pkg.name}</h3>
                  <p className="text-[14px] leading-relaxed mb-5" style={{ color: TEXT_MUTED }}>{pkg.detail}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    {pkg.originalPriceLabel && (
                      <span className="text-lg font-medium line-through" style={{ color: "#B7C0CC" }}>{pkg.originalPriceLabel}</span>
                    )}
                    <span className="text-3xl font-black" style={{ color: NAVY }}>{pkg.priceLabel}</span>
                    <span className="text-sm" style={{ color: TEXT_MUTED }}>MXN</span>
                  </div>
                  <a
                    href={pkg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("click_buy_trial", { package: pkg.key, page: "salud" })}
                    className="block w-full text-center px-6 py-3 font-bold rounded-lg transition-all"
                    style={{ background: TEAL, color: NAVY }}
                  >
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>

            <p data-sr className="text-center text-sm" style={{ color: TEXT_MUTED }}>
              Precios en pesos mexicanos, más IVA. Paquetes de prueba de la línea Cobre.{" "}
              <Link href="/autoservicio" className="font-semibold underline" style={{ color: "#0E8E96" }}>
                Conoce todos los paquetes de JAAK →
              </Link>
            </p>
          </div>
        </section>

        {/* SECCIÓN 7. CASOS DE USO */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Un flujo adaptable a diferentes procesos de salud.
              </h2>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {USE_CASES.map((uc) => (
                <div
                  key={uc}
                  className="flex items-start gap-3 p-5 rounded-xl"
                  style={{ background: LIGHT, border: `1px solid ${BORDER}` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: "rgba(30,202,211,0.15)" }}>
                    <CheckIcon color="#0E8E96" />
                  </span>
                  <span className="text-[14.5px] font-medium" style={{ color: NAVY }}>{uc}</span>
                </div>
              ))}
            </div>

            <p className="text-xs max-w-2xl mb-8" style={{ color: TEXT_MUTED }}>
              Para recetas, farmacias y documentos médicos, la configuración de firma y evidencia se adapta a cada caso de uso; la validación automática de cédulas profesionales, medicamentos o requisitos sanitarios debe confirmarse con nuestro equipo de Producto.
            </p>

            <div data-sr className="text-center">
              <a
                href="#formulario"
                onClick={() => gtmEvent("click_solicitar_demo", { location: "casos_de_uso", page: "salud" })}
                className="inline-block px-6 py-3 font-bold rounded-lg transition-all"
                style={{ background: NAVY, color: "#fff" }}
              >
                Solicitar una demostración
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN 8. PAPEL VS. PROCESO DIGITAL */}
        <section className="py-20" style={{ background: LIGHT }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                No se trata solamente de sustituir papel.
              </h2>
            </div>

            <div data-sr-grid className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8" style={{ border: `1px solid ${BORDER}` }}>
                <h3 className="text-lg font-bold mb-6" style={{ color: TEXT_MUTED }}>Proceso manual</h3>
                <ul className="space-y-4">
                  {MANUAL_PROCESS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XIcon />
                      <span className="text-[14.5px]" style={{ color: TEXT_BODY }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8" style={{ border: "1.5px solid rgba(30,202,211,0.40)" }}>
                <h3 className="text-lg font-bold mb-6" style={{ color: NAVY }}>Proceso con JAAK</h3>
                <ul className="space-y-4">
                  {JAAK_PROCESS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon color="#0E8E96" />
                      <span className="text-[14.5px] font-medium" style={{ color: NAVY }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 9. PARA CADA ÁREA DE LA INSTITUCIÓN */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Valor para las áreas médicas, legales y operativas.
              </h2>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AREAS.map((area) => (
                <div key={area.name} className="p-6 rounded-2xl" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
                  <h3 className="font-bold mb-2" style={{ color: NAVY }}>{area.name}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: TEXT_BODY }}>{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 10. SEGURIDAD Y PRIVACIDAD */}
        <section className="py-20" style={{ background: LIGHT }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: NAVY }}>
                Los datos de salud requieren una protección reforzada.
              </h2>
              <p className="text-lg" style={{ color: TEXT_BODY }}>
                Los expedientes clínicos, documentos médicos y datos biométricos contienen información sensible. Por ello, el proceso debe considerar controles de acceso, confidencialidad, trazabilidad y medidas de seguridad adecuadas.
              </p>
            </div>

            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {SECURITY_CAPS.map((cap) => (
                <div key={cap} className="flex items-center gap-3 p-4 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(30,202,211,0.15)" }}>
                    <CheckIcon color="#0E8E96" />
                  </span>
                  <span className="text-[13.5px] font-medium" style={{ color: NAVY }}>{cap}</span>
                </div>
              ))}
            </div>

            <Link href="/privacidad" className="text-sm font-semibold underline" style={{ color: "#0E8E96" }}>
              Consulta el Aviso de Privacidad de JAAK →
            </Link>
          </div>
        </section>

        {/* SECCIÓN 11. FORMULARIO */}
        <section id="formulario" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-sr>
                <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: NAVY }}>
                  Revisa tu flujo con un especialista.
                </h2>
                <p className="text-lg mb-8" style={{ color: TEXT_BODY }}>
                  Cuéntanos qué documentos necesitas firmar, quiénes participan y qué evidencia necesitas conservar. Te mostraremos una configuración aplicada a tu caso.
                </p>
                <div className="p-6 rounded-xl" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
                  <p className="font-bold mb-1" style={{ color: NAVY }}>¿Prefieres agendar directo?</p>
                  <a
                    href={MEETINGS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmEvent("schedule_demo_click", { source: "formulario", destination: "meetings_hubspot", page_path: "/salud" })}
                    className="underline font-medium"
                    style={{ color: "#0E8E96" }}
                  >
                    Reserva tu demostración en nuestro calendario →
                  </a>
                </div>
              </div>

              <div data-sr="right">
                <LeadFormSection />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 12. PREGUNTAS FRECUENTES */}
        <section className="py-20" style={{ background: LIGHT }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black" style={{ color: NAVY }}>
                Preguntas frecuentes
              </h2>
            </div>
            <div data-sr>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* CIERRE FINAL */}
        <section className="py-20" style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              Cada firma debe dejar evidencia.
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Digitaliza tus procesos documentales y fortalece la trazabilidad de consentimientos, expedientes y documentos médicos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={MEETINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmEvent("schedule_demo_click", { source: "cierre", destination: "meetings_hubspot", page_path: "/salud" })}
                className="px-6 py-3 font-bold rounded-lg transition-all"
                style={{ background: TEAL, color: NAVY }}
              >
                Agenda una demostración
              </a>
              <WhatsAppButton location="cierre" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
