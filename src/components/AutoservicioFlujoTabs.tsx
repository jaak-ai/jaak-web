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
    title: "Elija lo que necesita",
    desc: "Combine los servicios que necesita y ajuste el volumen de cada paquete. Empiece con el paquete más pequeño y escale cuando quiera.",
    pills: ["Pago único, sin suscripciones", "Activación inmediata", "Sin compromiso"],
  },
  {
    num: "2",
    title: "Ingrese su información",
    desc: "Complete sus datos para crear su cuenta y asociar su compra. Su correo será usado para acceder a su cuenta y gestionar sus firmas.",
    pills: ["Nombre", "Email", "Empresa", "Teléfono"],
  },
  {
    num: "3",
    title: "Complete su pago seguro",
    desc: "Pague su compra de forma segura a través de Stripe. Su cuenta y sus productos quedan activos de inmediato.",
    pills: ["Pago seguro encriptado", "Procesado por Stripe", "Activación automática"],
    variant: "warning",
  },
  {
    num: "4",
    title: "Verifique su correo",
    desc: "Le enviaremos un enlace y un código de verificación para activar su cuenta.",
    pills: ["Revise su bandeja de entrada", "El código expira en 24 horas"],
    variant: "verification",
  },
  {
    num: "5",
    title: "Cree su contraseña",
    desc: "Defina su contraseña para acceder a su cuenta JAAK.",
    pills: ["Mínimo 8 caracteres", "Guárdela en un lugar seguro"],
  },
  {
    num: "6",
    title: "Configure su empresa y personalice su flujo",
    desc: "Cargue el logo de su empresa — aparecerá en los documentos y notificaciones enviadas a sus firmantes. Luego configure quiénes firman, en qué orden, y cree plantillas de documentos recurrentes. Todo desde la plataforma web, sin código. Su marca, su flujo.",
    pills: ["Sin integraciones", "Plataforma web", "Sin código", "Personalizable con su logo"],
    variant: "advantage",
    advantageText: "Sus clientes ven su marca, no la nuestra. El flujo de firma lleva el logo y nombre de su empresa — diferenciador real sin costo adicional.",
  },
  {
    num: "7",
    title: "Sesión grupal de onboarding",
    desc: "Una sesión de 1 hora vía videollamada con el equipo JAAK para resolver dudas del uso de plataforma, configuración de plantillas y flujos de firma.",
    pills: ["1 hora", "Grupal", "Videollamada", "Agendada post-activación"],
  },
  {
    num: "8",
    title: "Empiece a operar",
    desc: "Su cuenta ya está activa. Suba su primer documento, asigne firmantes y envíe. Los firmantes reciben notificación automática. El documento firmado y la evidencia quedan en su dashboard.",
    pills: ["Su cuenta está activa y lista"],
    variant: "success",
  },
];

const KYC_STEPS: Step[] = [
  {
    num: "1",
    title: "Elija lo que necesita",
    desc: "Combine los servicios que necesita y ajuste el volumen de cada paquete. Empiece con el paquete más pequeño y escale cuando quiera.",
    pills: ["Pago único, sin suscripciones", "Activación inmediata", "Sin compromiso"],
  },
  {
    num: "2",
    title: "Ingrese su información",
    desc: "Complete sus datos para crear su cuenta y asociar su compra. Su correo será usado para acceder a su cuenta y gestionar sus verificaciones.",
    pills: ["Nombre", "Email", "Empresa", "Teléfono"],
  },
  {
    num: "3",
    title: "Complete su pago seguro",
    desc: "Pague su compra de forma segura a través de Stripe. Su cuenta y sus productos quedan activos de inmediato.",
    pills: ["Pago seguro encriptado", "Procesado por Stripe", "Activación automática"],
    variant: "warning",
  },
  {
    num: "4",
    title: "Verifique su correo",
    desc: "Le enviaremos un enlace y un código de verificación para activar su cuenta.",
    pills: ["Revise su bandeja de entrada", "El código expira en 24 horas"],
    variant: "verification",
  },
  {
    num: "5",
    title: "Cree su contraseña",
    desc: "Defina su contraseña para acceder a su cuenta JAAK.",
    pills: ["Mínimo 8 caracteres", "Guárdela en un lugar seguro"],
  },
  {
    num: "6",
    title: "Configure su flujo de verificación y su marca",
    desc: "Desde la plataforma web (sin código): personalice los pasos del flujo KYC, defina los campos requeridos y active las consultas que necesite. Cargue el logo de su empresa — sus clientes verán su marca en todo el proceso de verificación. Sin necesidad de conectar API.",
    pills: ["Sin integraciones", "Plataforma web", "Sin código", "Personalizable con su logo"],
    variant: "advantage",
    advantageText: "El flujo de verificación lleva su marca. Sus clientes no saben que usa JAAK — solo ven su empresa. Diferenciador real sin costo adicional.",
  },
  {
    num: "7",
    title: "Sesión grupal de onboarding",
    desc: "Una sesión de 1 hora vía videollamada con el equipo JAAK para resolver dudas del uso de plataforma, configuración del flujo KYC y mejores prácticas de verificación.",
    pills: ["1 hora", "Grupal", "Videollamada", "Agendada post-activación"],
  },
  {
    num: "8",
    title: "Empiece a operar",
    desc: "Su cuenta ya está activa. Envíe su primer enlace de verificación a un cliente. Resultados en tiempo real. El expediente queda en su dashboard listo para descarga.",
    pills: ["Su cuenta está activa y lista"],
    variant: "success",
  },
];

export default function AutoservicioFlujoTabs({ onStart }: { onStart?: () => void }) {
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
              ? "#2DB6C1"
              : "transparent",
            border: active === "firma" ? "none" : "1.5px solid #d1d5db",
            color: active === "firma" ? "#fff" : "#374151",
            boxShadow: active === "firma" ? "0 4px 20px rgba(45,182,193,0.3)" : "none",
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer"
        >
          ✍️ Firma Digital
        </button>
        <button
          onClick={() => switchTab("kyc")}
          style={{
            background: active === "kyc"
              ? "#2DB6C1"
              : "transparent",
            border: active === "kyc" ? "none" : "1.5px solid #d1d5db",
            color: active === "kyc" ? "#fff" : "#374151",
            boxShadow: active === "kyc" ? "0 4px 20px rgba(45,182,193,0.3)" : "none",
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer"
        >
          👤 Verificación KYC
        </button>
      </div>

      {/* Timeline */}
      <div key={key} className="relative max-w-2xl mx-auto">
        {/* Vertical gradient line */}
        <div
          className="absolute left-8 top-8 bottom-8 w-0.5"
          style={{ background: "#2DB6C1" }}
        />

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} delay={i * 40} onStart={onStart} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, delay, onStart }: { step: Step; delay: number; onStart?: () => void }) {
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
      border: "#2DB6C1",
      badge: "Ventaja JAAK",
      badgeBg: "rgba(45,182,193,0.12)",
    },
    success: {
      bg: "linear-gradient(135deg, rgba(45,182,193,0.08) 0%, rgba(42,215,150,0.08) 100%)",
      border: "#2AD796",
      badge: "¡Listo para operar!",
      badgeBg: "rgba(42,215,150,0.15)",
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
            background: "#2DB6C1",
            boxShadow: "0 4px 16px rgba(45,182,193,0.35)",
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
            className="inline-block text-sm font-semibold px-2.5 py-1 rounded-full mb-2"
            style={{
              background: v.badgeBg,
              color: step.variant === "warning" ? "#92400e" : step.variant === "verification" ? "#065f46" : step.variant === "advantage" ? "#0e7490" : "#065f46",
            }}
          >
            {v.badge}
          </span>
        )}

        <h4 className="font-bold text-gray-900 mb-1 text-lg">{step.title}</h4>
        <p className="text-gray-500 text-base leading-relaxed mb-3">{step.desc}</p>

        {/* Advantage box */}
        {step.variant === "advantage" && step.advantageText && (
          <div
            className="rounded-xl p-3 mb-3 text-base"
            style={{
              background: "rgba(45,182,193,0.06)",
              border: "1px solid rgba(45,182,193,0.2)",
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
              className="text-sm px-2.5 py-1 rounded-full font-medium"
              style={{ background: "#F3F4F8", color: "#64748B" }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Success CTA */}
        {step.variant === "success" && (
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(42,215,150,0.15)" }}>
            <button
              type="button"
              onClick={() => onStart?.()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-base text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#2DB6C1" }}
            >
              Empezar ahora →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
