"use client";

import React, { useState } from "react";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";

type Step = {
  number: number;
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
  color: string;
};

const IconUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const IconPen = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const IconStamp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const IconArchive = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

const steps: Step[] = [
  {
    number: 1,
    title: "Sube el documento",
    description: "Carga el contrato, pagaré o cualquier documento que necesite firma.",
    detail:
      "Soporta PDF, DOCX y más de 20 formatos. El documento se encripta al vuelo y se almacena de forma segura. Puedes definir múltiples firmantes y el orden de firma.",
    icon: <IconUpload />,
    color: "#1ECAD3",
  },
  {
    number: 2,
    title: "Genera el enlace",
    description: "JAAK crea un enlace único y seguro para cada firmante.",
    detail:
      "El enlace incluye autenticación de un solo uso. Puedes configurar expiración, recordatorios automáticos y personalizar el correo con tu marca. Sin instalaciones.",
    icon: <IconLink />,
    color: "#8B5CF6",
  },
  {
    number: 3,
    title: "El usuario firma",
    description: "El firmante abre el enlace, verifica su identidad y firma desde cualquier dispositivo.",
    detail:
      "Flujo 100% móvil optimizado. Según el nivel configurado: firma simple, validación biométrica o KYC completo. El proceso tarda menos de 3 minutos.",
    icon: <IconPen />,
    color: "#F59E0B",
  },
  {
    number: 4,
    title: "Evidencia NOM-151 generada",
    description: "Automáticamente se genera un sello de tiempo NOM-151 certificado.",
    detail:
      "El sello de tiempo es emitido por una Entidad Autorizada (PSC) conforme a la NOM-151-SCFI-2016. Incluye hash del documento, timestamp y cadena de custodia.",
    icon: <IconStamp />,
    color: "#10B981",
  },
  {
    number: 5,
    title: "Expediente digital creado",
    description: "Se genera el expediente digital completo, auditable y descargable.",
    detail:
      "El expediente incluye: documento firmado, evidencias de identidad, sello NOM-151, log de actividad, IP, geolocalización y todos los metadatos necesarios para una auditoría.",
    icon: <IconArchive />,
    color: "#EC4899",
  },
];

export default function FirmaHowItWorks() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep];

  return (
    <div>
      {/* Desktop stepper */}
      <div className="hidden md:flex items-center justify-between mb-12 relative">
        {/* Progress line */}
        <div
          className="absolute top-6 left-0 right-0 h-px"
          style={{ background: cl.border }}
          aria-hidden="true"
        />
        <div
          className="absolute top-6 left-0 h-px transition-all duration-500"
          style={{
            background: `linear-gradient(to right, ${current.color}, ${current.color}88)`,
            width: `${(activeStep / (steps.length - 1)) * 100}%`,
          }}
          aria-hidden="true"
        />

        {steps.map((step, index) => {
          const isPast = index < activeStep;
          const isActive = index === activeStep;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className="flex flex-col items-center gap-3 relative z-10 group"
              aria-label={`Paso ${step.number}: ${step.title}`}
              aria-current={isActive ? "step" : undefined}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-sm"
                style={{
                  background: isActive
                    ? current.color
                    : isPast
                    ? step.color + "33"
                    : cl.inputBg,
                  border: `2px solid ${
                    isActive ? current.color : isPast ? step.color + "66" : cl.inputBorder
                  }`,
                  color: isActive ? "#fff" : isPast ? step.color : "#64748B",
                  boxShadow: isActive ? `0 0 20px ${current.color}44` : "none",
                  transform: isActive ? "scale(1.15)" : "scale(1)",
                }}
              >
                {isPast ? (
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className="text-xs font-semibold text-center max-w-[90px] leading-tight transition-colors duration-200"
                style={{ color: isActive ? current.color : "#64748B" }}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile step selector */}
      <div className="flex md:hidden gap-2 mb-6 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(index)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: index === activeStep ? step.color : cl.inputBg,
              color: index === activeStep ? "#fff" : "#64748B",
              border: `1px solid ${index === activeStep ? step.color : cl.border}`,
            }}
          >
            {step.number}. {step.title}
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div
        key={activeStep}
        className="rounded-2xl p-8 transition-all duration-300"
        style={{
          background: cl.cardBg,
          border: `1px solid ${current.color}33`,
          boxShadow: `0 0 40px ${current.color}11`,
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Step info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: current.color + "22",
                  color: current.color,
                  border: `1px solid ${current.color}44`,
                }}
              >
                {current.icon}
              </div>
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: current.color }}
                >
                  Paso {current.number} de {steps.length}
                </div>
                <h3 className="text-xl font-bold text-white">{current.title}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              {current.description}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">{current.detail}</p>
          </div>

          {/* Right: Visual indicator */}
          <div className="hidden md:flex flex-col gap-2 flex-shrink-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all"
                style={{
                  background:
                    index === activeStep
                      ? step.color + "15"
                      : cl.cardBgTiny,
                  border: `1px solid ${
                    index === activeStep
                      ? step.color + "33"
                      : cl.borderFaint
                  }`,
                }}
                onClick={() => setActiveStep(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setActiveStep(index);
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background:
                      index === activeStep
                        ? step.color
                        : index < activeStep
                        ? step.color + "33"
                        : cl.inputBg,
                    color: index === activeStep ? "#fff" : index < activeStep ? step.color : "#64748B",
                  }}
                >
                  {index < activeStep ? (
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className="text-xs font-medium"
                  style={{
                    color: index === activeStep ? current.color : "#475569",
                  }}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: cl.inputBg,
            color: cl.textMuted,
            border: `1px solid ${cl.border}`,
          }}
          aria-label="Paso anterior"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>

        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background:
                  index === activeStep ? current.color : cl.divider,
                transform: index === activeStep ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Ir al paso ${index + 1}`}
              aria-current={index === activeStep ? "step" : undefined}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStep === steps.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: current.color + "22",
            color: current.color,
            border: `1px solid ${current.color}44`,
          }}
          aria-label="Siguiente paso"
        >
          Siguiente
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
