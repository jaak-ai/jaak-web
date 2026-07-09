"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FlowStep {
  label: string;
  description: string;
  duration: number;
  color: string;
  icon: string;
}

const flowSteps: FlowStep[] = [
  {
    label: "Captura",
    description: "Fotografía de INE + Selfie",
    duration: 2000,
    color: "#2DB6C1",
    icon: "📷",
  },
  {
    label: "Liveness",
    description: "Prueba de vida anti-spoofing (iBeta)",
    duration: 2000,
    color: "#2AD796",
    icon: "✨",
  },
  {
    label: "Verificación",
    description: "Cruce 1:1 + listas negras (OFAC/SAT)",
    duration: 2000,
    color: "#2DB6C1",
    icon: "🔍",
  },
  {
    label: "Evidencia",
    description: "Expediente auditable generado",
    duration: 1000,
    color: "#2AD796",
    icon: "✅",
  },
];

export default function VerificationFlowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const detailRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const buildTimeline = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      flowSteps.forEach((step, idx) => {
        const dot = dotsRef.current[idx];
        if (!dot) return;

        // Dot activación
        tl.to(
          dot,
          {
            backgroundColor: step.color,
            boxShadow: `0 0 20px ${step.color}66`,
            scale: 1.15,
            duration: 0.2,
            ease: "power2.out",
          },
          `step-${idx}`
        );

        // Progress bar avanza
        tl.to(
          progressBarRef.current,
          {
            width: `${((idx + 1) / flowSteps.length) * 100}%`,
            backgroundColor: step.color,
            duration: step.duration / 1000,
            ease: "linear",
          },
          `step-${idx}`
        );

        // Detail card fade in
        tl.to(
          detailRef.current,
          {
            opacity: 1,
            duration: 0.15,
          },
          `step-${idx}`
        );

        // Visual emoji + text
        tl.fromTo(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 10,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "back.out",
          },
          `step-${idx}+=0.1`
        );

        // Prepare next dot
        if (idx < flowSteps.length - 1) {
          tl.to(
            dotsRef.current[idx + 1],
            {
              backgroundColor: "#F3F4F8",
              boxShadow: "none",
              scale: 1,
              duration: 0.1,
            },
            `step-${idx}+=${step.duration / 1000 - 0.2}`
          );
        }
      });

      tlRef.current = tl;
    };

    buildTimeline();

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg border border-[#E2E8F0]"
      style={{ willChange: "contents" }}
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-[#212A45] mb-2">
          De 0 a 30 segundos
        </h2>
        <p className="text-sm text-[#64748B]">
          Flujo de verificación de JAAK con GPU transforms. Sin jank.
        </p>
      </div>

      {/* Progress header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-600 text-[#64748B] uppercase">
          Progreso
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-[#F3F4F8] rounded-full overflow-hidden mb-8">
        <div
          ref={progressBarRef}
          className="h-full rounded-full"
          style={{
            width: "0%",
            willChange: "width,background-color",
          }}
        />
      </div>

      {/* Step dots */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {flowSteps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div
              ref={(el) => {
                dotsRef.current[idx] = el;
              }}
              className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-black text-white"
              style={{
                backgroundColor: "#F3F4F8",
                willChange: "background-color,box-shadow,transform",
              }}
            >
              {idx + 1}
            </div>
            <p className="text-xs font-600 text-[#212A45]">{step.label}</p>
            <p className="text-xs text-[#64748B]">{step.duration / 1000}s</p>
          </div>
        ))}
      </div>

      {/* Detail card */}
      <div
        ref={detailRef}
        className="p-4 rounded-lg border mb-8"
        style={{
          backgroundColor: "#F3F4F8",
          borderColor: "#E2E8F0",
          willChange: "opacity",
        }}
      >
        <h3 className="text-sm font-600 text-[#212A45] mb-1">
          {flowSteps[0].label}
        </h3>
        <p className="text-sm text-[#64748B]">{flowSteps[0].description}</p>
      </div>

      {/* Visual representation */}
      <div className="p-6 bg-[#F3F4F8] rounded-lg border border-[#E2E8F0]">
        <div
          ref={visualRef}
          className="text-center"
          style={{ willChange: "opacity,transform" }}
        >
          <div className="text-5xl mb-3">{flowSteps[0].icon}</div>
          <p className="text-sm text-[#64748B]">{flowSteps[0].description}</p>
        </div>
      </div>
    </div>
  );
}
