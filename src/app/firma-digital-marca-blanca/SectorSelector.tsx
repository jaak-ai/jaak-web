"use client";

import { useState } from "react";

type Sector = {
  id: string;
  label: string;
  icon: string;
  desc: string;
  example: string;
};

const sectors: Sector[] = [
  {
    id: "financiero",
    label: "Servicios financieros",
    icon: "🏦",
    desc: "Mensajes de seguridad más visibles y fecha límite clara para procesos regulados.",
    example: "“Por tu seguridad, verifica que este correo provenga de [tu institución] antes de firmar.”",
  },
  {
    id: "inmobiliario",
    label: "Inmobiliario",
    icon: "🏠",
    desc: "Mensajes que identifican al asesor o inmobiliaria y el tipo de contrato enviado.",
    example: "“[Inmobiliaria] te envía tu Contrato de Arrendamiento para firma.”",
  },
  {
    id: "automotriz",
    label: "Automotriz",
    icon: "🚗",
    desc: "Personalización por agencia o marca del vehículo en el contrato de compra o financiamiento.",
    example: "“Tu contrato de financiamiento con [Agencia] está listo para firma.”",
  },
  {
    id: "construccion",
    label: "Construcción",
    icon: "🏗️",
    desc: "Textos adaptados a contratos de obra, anticipos y convenios con proveedores.",
    example: "“[Constructora] te envía el convenio de anticipo de tu proyecto.”",
  },
  {
    id: "rh",
    label: "Recursos Humanos",
    icon: "🧑‍💼",
    desc: "Saludo cercano y mensajes claros para contratos laborales y avisos internos.",
    example: "“Bienvenido a [Empresa]. Firma tu contrato laboral aquí.”",
  },
  {
    id: "salud",
    label: "Salud",
    icon: "🩺",
    desc: "Mensajes cuidadosos para consentimientos informados y correo de soporte visible.",
    example: "“[Clínica] te envía tu consentimiento informado. Escríbenos si tienes dudas.”",
  },
  {
    id: "profesionales",
    label: "Servicios profesionales",
    icon: "📋",
    desc: "Mensaje adaptado a propuestas, contratos de servicio o acuerdos de confidencialidad.",
    example: "“[Despacho] te envía el acuerdo de confidencialidad para firma.”",
  },
];

export default function SectorSelector() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const active = sectors.find((s) => s.id === activeId) ?? sectors[0];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl justify-center"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        role="tablist"
        aria-label="Seleccionar sector"
      >
        {sectors.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`sector-panel-${s.id}`}
              id={`sector-tab-${s.id}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300"
              style={{
                background: isActive ? "linear-gradient(135deg, #1ECAD3, #2AD796)" : "transparent",
                color: isActive ? "#fff" : "#64748B",
                boxShadow: isActive ? "0 0 20px rgba(30,202,211,0.3)" : "none",
              }}
            >
              <span aria-hidden="true">{s.icon}</span>
              {s.label}
            </button>
          );
        })}
      </div>

      <div
        key={activeId}
        id={`sector-panel-${activeId}`}
        role="tabpanel"
        aria-labelledby={`sector-tab-${activeId}`}
        className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 animate-fade-in-up"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0" aria-hidden="true">{active.icon}</span>
          <div>
            <h3 className="text-sm font-bold text-white mb-2">{active.label}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{active.desc}</p>
            <div
              className="text-sm text-gray-300 italic p-4 rounded-xl"
              style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.15)" }}
            >
              {active.example}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
