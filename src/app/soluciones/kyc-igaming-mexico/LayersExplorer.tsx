"use client";

import { useEffect, useState } from "react";

const TEAL = "#1ECAD3";
const NAVY_MED = "#0B1E3F";

const layers = [
  { num: "01", title: "Prueba de vida pasiva", short: "Persona presente", desc: "Confirma que existe una persona real frente al dispositivo y detecta fotografías, videos o pantallas." },
  { num: "02", title: "Comparación facial 1:1", short: "Rostro", desc: "Compara el rostro capturado durante la sesión con la fotografía del documento oficial." },
  { num: "03", title: "Verificación documental y OCR", short: "Documento", desc: "Captura el documento, extrae sus datos y valida su autenticidad y vigencia." },
  { num: "04", title: "Fuentes oficiales mexicanas", short: "Fuentes oficiales", desc: "Contrasta la información con fuentes como INE y RENAPO, según la configuración y el paquete contratado." },
  { num: "05", title: "Consulta de listas de riesgo", short: "Riesgo", desc: "Consulta las fuentes y listas de riesgo configuradas para tu operación (por ejemplo OFAC, INTERPOL o SAT 69-B), según el paquete contratado." },
  { num: "06", title: "Geolocalización", short: "Ubicación", desc: "Registra la ubicación asociada al proceso como señal contextual adicional." },
];

export default function LayersExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % layers.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {layers.map((layer, i) => {
          const isActive = i === activeIndex;
          const isDone = i < activeIndex;
          return (
            <button
              key={layer.num}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-500 hover:-translate-y-0.5"
              style={{
                background: NAVY_MED,
                border: `1px solid ${isActive ? TEAL : isDone ? "rgba(30,202,211,0.3)" : "rgba(255,255,255,0.08)"}`,
                boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.18)" : "none",
              }}
              aria-current={isActive}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors duration-500"
                style={{
                  background: isActive || isDone ? TEAL : "rgba(255,255,255,0.08)",
                  color: isActive || isDone ? "#02132D" : "#64748B",
                }}
              >
                {layer.num}
              </span>
              <span className="text-[11px] font-semibold text-center leading-tight" style={{ color: isActive ? "#fff" : "#A8B6C8" }}>
                {layer.short}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={activeIndex}
        className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 text-center animate-fade-in-up"
        style={{ background: NAVY_MED, border: "1px solid rgba(30,202,211,0.25)", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
      >
        <h3 className="text-xl font-bold text-white mb-3">{layers[activeIndex].title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{layers[activeIndex].desc}</p>
      </div>

      {activeIndex === layers.length - 1 && (
        <div
          className="max-w-md mx-auto mt-6 rounded-2xl p-5 text-center animate-fade-in-up"
          style={{ background: "rgba(42,215,150,0.08)", border: "1px solid rgba(42,215,150,0.3)" }}
        >
          <p className="text-sm font-black tracking-wide" style={{ color: "#2AD796" }}>IDENTIDAD VERIFICADA</p>
          <p className="text-xs text-white/50 mt-1">Seis controles. Un resultado estructurado. Un expediente de evidencia.</p>
        </div>
      )}
    </div>
  );
}
