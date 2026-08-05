"use client";

import { useEffect, useState } from "react";

const TEAL = "#1ECAD3";

const tabs = [
  { id: "api", label: "API", desc: "Integra cada componente dentro de tu propia interfaz y reglas de negocio." },
  { id: "sdk", label: "SDK", desc: "Incorpora la captura y verificación dentro de aplicaciones web o móviles." },
  { id: "marca-blanca", label: "Marca blanca", desc: "Activa un flujo listo para utilizar y personalízalo con la identidad del operador." },
];

const events = [
  "PLAYER_REGISTERED",
  "DOCUMENT_CAPTURED",
  "LIVENESS_PASSED",
  "FACE_MATCH_PASSED",
  "RENAPO_MATCHED",
  "RISK_SCREEN_CLEAR",
  "IDENTITY_VERIFIED",
];

export default function IntegrationTimeline() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeEvent, setActiveEvent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveEvent((i) => (i + 1) % events.length);
    }, 1400);
    return () => clearInterval(interval);
  }, [paused]);

  const tab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-2xl justify-center max-w-md mx-auto"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        role="tablist"
        aria-label="Seleccionar método de integración"
      >
        {tabs.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              role="tab"
              aria-selected={isActive}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300"
              style={{ background: isActive ? TEAL : "transparent", color: isActive ? "#02132D" : "#64748B" }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm text-white/60 mb-8 max-w-md mx-auto">{tab.desc}</p>

      <div className="max-w-md mx-auto space-y-2">
        {events.map((event, i) => {
          const isActive = i === activeEvent;
          const isDone = i < activeEvent;
          return (
            <div
              key={event}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-mono text-xs transition-all duration-500"
              style={{
                background: isActive ? "rgba(30,202,211,0.1)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${isActive ? TEAL : "rgba(255,255,255,0.06)"}`,
                color: isActive || isDone ? "#fff" : "#64748B",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: isActive || isDone ? TEAL : "#475569" }}
                aria-hidden="true"
              />
              {event}
            </div>
          );
        })}
      </div>
    </div>
  );
}
