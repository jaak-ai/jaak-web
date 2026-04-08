"use client";
import { useState } from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
  pills: string[];
  variant?: "warning" | "verification" | "advantage" | "success";
  advantageText?: string;
}

const FIRMA_STEPS: Step[] = [
  {
    num: "1",
    title: "Elige lo que necesitas",
    desc: "Selecciona el tipo de firma o módulo que quieres activar. Puedes empezar con un solo uso y escalar después.",
    pills: ["Pago único, sin suscripciones", "Activación inmediata", "Sin compromiso"],
  },
  {
    num: "2",
    title: "Ingresa tu información",
    desc: "Completa tus datos para crear tu cuenta y asociar tu compra. Tu correo será usado para acceder a tu cuenta y gestionar tus firmas.",
    pills: ["Nombre", "Email", "Empresa", "Teléfono"],
  },
  {
    num: "3",
    title: "Completa tu pago seguro",
    desc: "Estás a punto de activar tu plan de Firma Digital. Realiza el pago de forma segura a través de Stripe.",
    pills: ["Pago seguro encriptado", "Procesado por Stripe", "Activación automática"],
    variant: "warning",
  },
  {
    num: "4",
    title: "Verifica tu correo",
    desc: "Te enviaremos un enlace y un código de verificación para activar tu cuenta.",
    pills: ["Revisa tu bandeja de entrada", "El código expira en 24 horas"],
    variant: "verification",
  },
  {
    num: "5",
    title: "Crea tu contraseña",
    desc: "Define tu contraseña para acceder a tu cuenta JAAK.",
    pills: ["Mínimo 8 caracteres", "Guárdala en un lugar seguro"],
  },
  {
    num: "6",
    title: "Configura tu empresa y personaliza tu flujo",
    desc: "Carga el logo de tu empresa — aparecerá en los documentos y notificaciones enviadas a tus firmantes. Luego configura quiénes firman, en qué orden y crea plantillas de documentos recurrentes. Todo desde la plataforma web, sin código. Tu marca, tu flujo.",
    pills: ["Sin integraciones", "Plataforma web", "Sin código", "Personalizable con tu logo"],
    variant: "advantage",
    advantageText: "Tus clientes ven tu marca, no la nuestra. El flujo de firma lleva el logo y nombre de tu empresa — diferenciador real sin costo adicional.",
  },
  {
    num: "7",
    title: "Sesión grupal de onboarding",
    desc: "Una sesión de 1 hora vía videollamada con el equipo JAAK para resolver dudas del uso de plataforma, configuración de plantillas y flujos de firma.",
    pills: ["1 hora", "Grupal", "Videollamada", "Agendada post-activación"],
  },
  {
    num: "8",
    title: "Empieza a operar",
    desc: "Tu cuenta ya está activa. Sube tu primer documento, asigna firmantes y envía. Los firmantes reciben notificación automática. El documento firmado y la evidencia quedan en tu dashboard.",
    pills: ["Tu cuenta está activa y lista"],
    variant: "success",
  },
];

const KYC_STEPS: Step[] = [
  {
    num: "1",
    title: "Elige lo que necesitas",
    desc: "Selecciona el tipo de verificación o módulo que quieres activar. Puedes empezar con un solo uso y escalar después.",
    pills: ["Pago único, sin suscripciones", "Activación inmediata", "Sin compromiso"],
  },
  {
    num: "2",
    title: "Ingresa tu información",
    desc: "Completa tus datos para crear tu cuenta y asociar tu compra. Tu correo será usado para acceder a tu cuenta y gestionar tus verificaciones.",
    pills: ["Nombre", "Email", "Empresa", "Teléfono"],
  },
  {
    num: "3",
    title: "Completa tu pago seguro",
    desc: "Estás a punto de activar tu plan de Verificación de Identidad KYC. Realiza el pago de forma segura a través de Stripe.",
    pills: ["Pago seguro encriptado", "Procesado por Stripe", "Activación automática"],
    variant: "warning",
  },
  {
    num: "4",
    title: "Verifica tu correo",
    desc: "Te enviaremos un enlace y un código de verificación para activar tu cuenta.",
    pills: ["Revisa tu bandeja de entrada", "El código expira en 24 horas"],
    variant: "verification",
  },
  {
    num: "5",
    title: "Crea tu contraseña",
    desc: "Define tu contraseña para acceder a tu cuenta JAAK.",
    pills: ["Mínimo 8 caracteres", "Guárdala en un lugar seguro"],
  },
  {
    num: "6",
    title: "Configura tu flujo de verificación y tu marca",
    desc: "Desde la plataforma web (sin código): personaliza los pasos del flujo KYC, define los campos requeridos y activa las consultas que necesitas. Carga el logo de tu empresa — tus clientes verán tu marca en todo el proceso de verificación. Sin necesidad de conectar API.",
    pills: ["Sin integraciones", "Plataforma web", "Sin código", "Personalizable con tu logo"],
    variant: "advantage",
    advantageText: "El flujo de verificación lleva tu marca. Tus clientes no saben que usas JAAK — solo ven tu empresa. Diferenciador real sin costo adicional.",
  },
  {
    num: "7",
    title: "Sesión grupal de onboarding",
    desc: "Una sesión de 1 hora vía videollamada con el equipo JAAK para resolver dudas del uso de plataforma, configuración del flujo KYC y mejores prácticas de verificación.",
    pills: ["1 hora", "Grupal", "Videollamada", "Agendada post-activación"],
  },
  {
    num: "8",
    title: "Empieza a operar",
    desc: "Tu cuenta ya está activa. Envía tu primer enlace de verificación a un cliente. Resultados en tiempo real. El expediente queda en tu dashboard listo para descarga.",
    pills: ["Tu cuenta está activa y lista"],
    variant: "success",
  },
];

export default function AutoservicioFlujoTabs() {
  const [active, setActive] = useState<"firma" | "kyc">("firma");
  const [key, setKey] = useState(0);

  const steps = active === "firma" ? FIRMA_STEPS : KYC_STEPS;

  function switchTab(tab: "firma" | "kyc") {
    if (tab === active) return;
    setActive(tab);
    setKey((k) => k + 1);
  }

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex justify-center gap-3 mb-12">
        <button
          onClick={() => switchTab("firma")}
          style={{
            background: active === "firma"
              ? "linear-gradient(135deg, #1ecad3, #655dc6)"
              : "transparent",
            border: active === "firma" ? "none" : "1.5px solid #d1d5db",
            color: active === "firma" ? "#fff" : "#374151",
            boxShadow: active === "firma" ? "0 4px 20px rgba(30,202,211,0.3)" : "none",
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
        >
          ✍️ Firma Digital
        </button>
        <button
          onClick={() => switchTab("kyc")}
          style={{
            background: active === "kyc"
              ? "linear-gradient(135deg, #1ecad3, #655dc6)"
              : "transparent",
            border: active === "kyc" ? "none" : "1.5px solid #d1d5db",
            color: active === "kyc" ? "#fff" : "#374151",
            boxShadow: active === "kyc" ? "0 4px 20px rgba(30,202,211,0.3)" : "none",
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
        >
          👤 Verificación KYC
        </button>
      </div>

      {/* Timeline */}
      <div key={key} className="relative max-w-2xl mx-auto">
        {/* Vertical gradient line */}
        <div
          className="absolute left-8 top-8 bottom-8 w-0.5"
          style={{ background: "linear-gradient(180deg, #1ecad3 0%, #655dc6 100%)" }}
        />

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} delay={i * 40} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, delay }: { step: Step; delay: number }) {
  const variantStyles: Record<string, { bg: string; border: string; badge: string; badgeBg: string }> = {
    warning: {
      bg: "rgba(254,243,199,0.6)",
      border: "#fbbf24",
      badge: "Importante",
      badgeBg: "rgba(251,191,36,0.15)",
    },
    verification: {
      bg: "rgba(209,250,229,0.6)",
      border: "#34d399",
      badge: "Revisión requerida",
      badgeBg: "rgba(52,211,153,0.15)",
    },
    advantage: {
      bg: "rgba(240,253,250,0.8)",
      border: "#1ecad3",
      badge: "Ventaja JAAK",
      badgeBg: "rgba(30,202,211,0.12)",
    },
    success: {
      bg: "linear-gradient(135deg, rgba(30,202,211,0.08) 0%, rgba(101,93,198,0.08) 100%)",
      border: "#655dc6",
      badge: "¡Listo para operar!",
      badgeBg: "rgba(101,93,198,0.1)",
    },
  };

  const v = step.variant ? variantStyles[step.variant] : null;

  return (
    <div
      className="fade-up flex gap-5"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Circle number */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #1ecad3, #655dc6)",
            boxShadow: "0 4px 16px rgba(30,202,211,0.35)",
          }}
        >
          {step.num}
        </div>
      </div>

      {/* Card */}
      <div
        className="flex-1 rounded-2xl p-5 shadow-sm"
        style={{
          background: v ? v.bg : "#fff",
          border: v ? `1.5px solid ${v.border}` : "1.5px solid #e5e7eb",
        }}
      >
        {/* Badge for special variants */}
        {v && (
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
            style={{
              background: v.badgeBg,
              color: step.variant === "warning" ? "#92400e" : step.variant === "verification" ? "#065f46" : step.variant === "advantage" ? "#0e7490" : "#4c1d95",
            }}
          >
            {v.badge}
          </span>
        )}

        <h4 className="font-bold text-gray-900 mb-1 text-base">{step.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">{step.desc}</p>

        {/* Advantage box */}
        {step.variant === "advantage" && step.advantageText && (
          <div
            className="rounded-xl p-3 mb-3 text-sm"
            style={{
              background: "rgba(30,202,211,0.06)",
              border: "1px solid rgba(30,202,211,0.2)",
              color: "#0e7490",
            }}
          >
            💡 {step.advantageText}
          </div>
        )}

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {step.pills.map((pill, pi) => (
            <span
              key={pi}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "#f3f4f6", color: "#374151" }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Success CTA */}
        {step.variant === "success" && (
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(101,93,198,0.15)" }}>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #1ecad3, #655dc6)" }}
            >
              Empezar ahora →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
