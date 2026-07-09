"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animación narrativa del flujo de verificación 0→30 segundos
 * Inspirado en INCODE + VERIFF: explica visualmente la propuesta de valor
 *
 * Fases:
 * 1. Captura (selfie + INE) → 5-8s
 * 2. Prueba de vida anti-spoofing → 3-5s
 * 3. Cruce biométrico 1:1 + listas negras → 5-7s
 * 4. Evidencia auditable generada → 2-3s
 */

interface FlowStep {
  label: string;
  description: string;
  duration: number; // ms
  color: string;
}

const flowSteps: FlowStep[] = [
  {
    label: "Captura",
    description: "Fotografía de INE + Selfie",
    duration: 2000,
    color: "#2DB6C1",
  },
  {
    label: "Liveness",
    description: "Prueba de vida anti-spoofing (iBeta)",
    duration: 2000,
    color: "#2AD796",
  },
  {
    label: "Verificación",
    description: "Cruce 1:1 + listas negras (OFAC/SAT)",
    duration: 2000,
    color: "#25969f",
  },
  {
    label: "Evidencia",
    description: "Expediente auditable generado",
    duration: 1000,
    color: "#0E1133",
  },
];

export default function VerificationFlowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const timelineRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const animate = () => {
      let delay = 0;
      flowSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveStep(index);
        }, delay);
        delay += flowSteps[index].duration;
      });

      // Reset después de ciclo completo
      setTimeout(() => {
        setActiveStep(0);
        timelineRef.current = setTimeout(animate, 500);
      }, delay + 1500);
    };

    if (isAnimating) {
      animate();
      return () => {
        if (timelineRef.current) clearTimeout(timelineRef.current);
      };
    }
  }, [isAnimating]);

  const totalDuration = flowSteps.reduce((sum, step) => sum + step.duration, 0);
  const elapsedTime = flowSteps
    .slice(0, activeStep)
    .reduce((sum, step) => sum + step.duration, 0);
  const progressPercent = (elapsedTime / totalDuration) * 100;

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg border border-[#EEEEEE]"
      onMouseEnter={() => setIsAnimating(false)}
      onMouseLeave={() => setIsAnimating(true)}
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-700 text-[#212A45] mb-2">
          De 0 a 30 segundos
        </h2>
        <p className="text-sm text-[#64748B]">
          El flujo de verificación de JAAK en acción. Pasa el mouse para pausar.
        </p>
      </div>

      {/* Timeline visualization */}
      <div className="mb-8">
        {/* Tiempo transcurrido */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold text-[#64748B] uppercase">
            Progreso
          </span>
          <span className="text-sm font-700 text-[#212A45]">
            ~{Math.round((elapsedTime / 1000) * 10) / 10}s / ~{Math.round((totalDuration / 1000) * 10) / 10}s
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-[#F3F4F8] rounded-full overflow-hidden mb-6">
          <div
            className="h-full transition-all duration-200"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: flowSteps[activeStep].color,
            }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-4 gap-2">
          {flowSteps.map((step, index) => (
            <div
              key={step.label}
              className="text-center"
              onClick={() => setActiveStep(index)}
              role="button"
              tabIndex={0}
            >
              {/* Dot indicator */}
              <div
                className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor:
                    index <= activeStep
                      ? step.color
                      : "#F3F4F8",
                  border:
                    index === activeStep
                      ? `2px solid ${step.color}`
                      : "2px solid transparent",
                  boxShadow:
                    index === activeStep
                      ? `0 0 20px ${step.color}40`
                      : "none",
                }}
              >
                <span
                  className="text-xs font-700"
                  style={{
                    color:
                      index <= activeStep
                        ? "#ffffff"
                        : "#64748B",
                  }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Label */}
              <p className="text-xs font-600 text-[#212A45]">
                {step.label}
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">
                {step.duration / 1000}s
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Active step detail */}
      <div
        className="p-4 rounded-lg border transition-colors duration-300"
        style={{
          backgroundColor: `${flowSteps[activeStep].color}10`,
          borderColor: `${flowSteps[activeStep].color}30`,
        }}
      >
        <h3 className="text-sm font-700 text-[#212A45] mb-1">
          Paso {activeStep + 1}: {flowSteps[activeStep].label}
        </h3>
        <p className="text-sm text-[#64748B]">
          {flowSteps[activeStep].description}
        </p>
      </div>

      {/* Visual representation */}
      <div className="mt-8 p-6 bg-[#F3F4F8] rounded-lg border border-[#EEEEEE]">
        <div className="text-center">
          {activeStep === 0 && (
            <div>
              <div className="text-4xl mb-3">📷</div>
              <p className="text-sm text-[#64748B]">
                Captura de documento (INE/Pasaporte) + Selfie
              </p>
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <div className="text-4xl mb-3">✨</div>
              <p className="text-sm text-[#64748B]">
                Prueba de vida anti-spoofing (iBeta Nivel 1)
              </p>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-sm text-[#64748B]">
                Verificación biométrica 1:1 + consultas a listas negras
              </p>
            </div>
          )}
          {activeStep === 3 && (
            <div>
              <div className="text-4xl mb-3">✅</div>
              <p className="text-sm text-[#64748B]">
                Evidencia auditable lista para la regulación
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
