"use client";

import { useState } from "react";

const TEAL = "#1ECAD3";

const roles = [
  { id: "cumplimiento", label: "Cumplimiento", icon: "🛡️", benefit: "Evidencia por validación y fuentes consultadas visibles, listas para una revisión interna o un requerimiento." },
  { id: "operaciones", label: "Operaciones", icon: "⚙️", benefit: "Menos captura manual y menos revisión por caso: el equipo interviene principalmente en excepciones." },
  { id: "producto", label: "Producto", icon: "🎮", benefit: "Menor fricción en el registro: seis controles dentro de un solo recorrido para el jugador." },
  { id: "tecnologia", label: "Tecnología", icon: "🧩", benefit: "Integración modular vía API, SDK o web en marca blanca, con sandbox para pruebas." },
  { id: "direccion", label: "Dirección", icon: "📈", benefit: "Crecimiento con mayor control: un onboarding que escala sin perder trazabilidad ni evidencia." },
];

export default function RoleSelector() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((r) => r.id === activeId) ?? roles[0];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-2xl justify-center"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        role="tablist"
        aria-label="Seleccionar rol"
      >
        {roles.map((r) => {
          const isActive = r.id === activeId;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveId(r.id)}
              role="tab"
              aria-selected={isActive}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300"
              style={{
                background: isActive ? TEAL : "transparent",
                color: isActive ? "#02132D" : "#64748B",
              }}
            >
              <span aria-hidden="true">{r.icon}</span>
              {r.label}
            </button>
          );
        })}
      </div>

      <div
        key={activeId}
        className="max-w-xl mx-auto rounded-2xl p-6 text-center animate-fade-in-up"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-sm text-white/80 leading-relaxed">{active.benefit}</p>
      </div>
    </div>
  );
}
