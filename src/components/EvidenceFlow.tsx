"use client";

import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";

type FlowStep = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const flowSteps: FlowStep[] = [
  {
    title: "Documento firmado",
    description: "Archivo final aceptado por las partes.",
    icon: "📄",
    color: "#64748B",
  },
  {
    title: "Hash SHA-256",
    description: "Huella criptográfica del documento. Si el archivo cambia, el hash cambia.",
    icon: "🔑",
    color: "#3B82F6",
  },
  {
    title: "Sello digital de tiempo",
    description: "Fecha y hora confiable asociada al documento o evento.",
    icon: "⏱",
    color: "#F59E0B",
  },
  {
    title: "Constancia NOM-151",
    description: "Evidencia de conservación e integridad del mensaje de datos conforme al marco mexicano.",
    icon: "🔐",
    color: "#2DB6C1",
  },
  {
    title: "Expediente auditable",
    description: "Concentra documento, eventos, metadatos y evidencias descargables.",
    icon: "🗂️",
    color: "#2AD796",
  },
];

export default function EvidenceFlow() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 lg:items-stretch">
      {flowSteps.map((step, i) => (
        <div key={step.title} className="flex lg:flex-1 items-stretch gap-3">
          <div
            className="flex-1 rounded-2xl p-5 flex flex-col gap-2"
            style={{ background: cl.cardBg, border: `1px solid ${step.color}33` }}
          >
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-1"
              style={{ background: step.color + "1A", border: `1px solid ${step.color}33` }}
              aria-hidden="true"
            >
              {step.icon}
            </span>
            <h3 className="text-sm font-bold" style={{ color: isDark ? "#fff" : "#0A0F1A" }}>
              {step.title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: cl.textMuted }}>
              {step.description}
            </p>
          </div>
          {i < flowSteps.length - 1 && (
            <div className="hidden lg:flex items-center flex-shrink-0" aria-hidden="true">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={cl.textMuted}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
