"use client";

import { useState } from "react";

type UseCase = {
  title: string;
  description: string;
  signaType: string;
  signaColor: string;
  icon: string;
};

type Industry = {
  id: string;
  label: string;
  icon: string;
  useCases: UseCase[];
};

const industries: Industry[] = [
  {
    id: "financiero",
    label: "Financiero",
    icon: "🏦",
    useCases: [
      {
        title: "Apertura de cuenta digital",
        description:
          "Valida la identidad del cliente con KYC biométrico y obtén su firma electrónica en el mismo flujo. Cumple con CNBV y LFPIORPI desde el primer contacto.",
        signaType: "Firma + KYC",
        signaColor: "#10B981",
        icon: "💳",
      },
      {
        title: "Contratos de crédito y pagarés",
        description:
          "Formaliza créditos personales, automotrices e hipotecarios con firma NOM-151 y biometría. El expediente digital sustituye al papel con total validez legal.",
        signaType: "Firma NOM-151 + Biometría",
        signaColor: "#8B5CF6",
        icon: "📑",
      },
      {
        title: "Actualización periódica de KYC",
        description:
          "Automatiza el proceso de renovación de expedientes con una experiencia completamente digital. Notificaciones automáticas y firma desde cualquier dispositivo.",
        signaType: "Firma + KYC",
        signaColor: "#10B981",
        icon: "🔄",
      },
    ],
  },
  {
    id: "inmobiliario",
    label: "Inmobiliario",
    icon: "🏠",
    useCases: [
      {
        title: "Contratos de arrendamiento",
        description:
          "Firma arrendamientos residenciales y comerciales con validez legal completa. Incluid identificación de propietario e inquilino con NOM-151.",
        signaType: "Firma NOM-151",
        signaColor: "#1ECAD3",
        icon: "🔑",
      },
      {
        title: "Promesas de compraventa",
        description:
          "Formaliza promesas y contratos de compraventa con firma avanzada y sello de tiempo certificado. Protege a compradores y vendedores desde el primer acuerdo.",
        signaType: "Firma NOM-151",
        signaColor: "#1ECAD3",
        icon: "🤝",
      },
      {
        title: "Poderes y representaciones",
        description:
          "Verifica la identidad del apoderado con biometría facial antes de ejecutar un poder. Genera evidencia de quién firmó y en qué condiciones.",
        signaType: "Firma Biométrica",
        signaColor: "#8B5CF6",
        icon: "⚖️",
      },
    ],
  },
  {
    id: "automotriz",
    label: "Automotriz",
    icon: "🚗",
    useCases: [
      {
        title: "Solicitudes de financiamiento",
        description:
          "Digitaliza el proceso de crédito automotriz: verificación de identidad, firma del contrato y pagaré en un solo flujo móvil desde el agencia.",
        signaType: "Firma + KYC",
        signaColor: "#10B981",
        icon: "📋",
      },
      {
        title: "Contratos de leasing y arrendamiento",
        description:
          "Firma contratos de arrendamiento puro o financiero con evidencia biométrica y NOM-151. Reducción del ciclo de venta de días a horas.",
        signaType: "Firma NOM-151 + Biometría",
        signaColor: "#8B5CF6",
        icon: "📄",
      },
      {
        title: "Seguros de auto y garantías",
        description:
          "Acepta pólizas de seguro y garantías extendidas de forma digital. El cliente firma desde su teléfono antes de salir de la agencia.",
        signaType: "Firma Simple",
        signaColor: "#64748B",
        icon: "🛡️",
      },
    ],
  },
  {
    id: "telecom",
    label: "Telecom",
    icon: "📡",
    useCases: [
      {
        title: "Alta de líneas móviles",
        description:
          "Verifica la identidad del titular con KYC y biometría al momento del alta. Cumple con la regulación del IFT para portación y nuevas altas.",
        signaType: "Firma + KYC",
        signaColor: "#10B981",
        icon: "📱",
      },
      {
        title: "Contratos de servicio empresarial",
        description:
          "Firma contratos de telefonía fija, internet y datos con múltiples firmantes. Gestiona renovaciones y modificaciones de servicio sin papel.",
        signaType: "Firma NOM-151",
        signaColor: "#1ECAD3",
        icon: "🖊️",
      },
      {
        title: "Actualizaciones de plan y adendas",
        description:
          "Obtén consentimiento firmado para cambios de plan, cargos adicionales y adendas contractuales. Evita disputas con evidencia digital de la aceptación.",
        signaType: "Firma Simple",
        signaColor: "#64748B",
        icon: "✅",
      },
    ],
  },
];

export default function FirmaUseCases() {
  const [activeIndustry, setActiveIndustry] = useState("financiero");

  const current = industries.find((i) => i.id === activeIndustry)!;

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
        role="tablist"
        aria-label="Filtrar por industria"
      >
        {industries.map((industry) => {
          const isActive = industry.id === activeIndustry;
          return (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${industry.id}`}
              id={`tab-${industry.id}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex-1 justify-center sm:flex-none"
              style={{
                background: isActive ? "#1ECAD3" : "transparent",
                color: isActive ? "#fff" : "#64748B",
                boxShadow: isActive ? "0 0 20px rgba(30,202,211,0.3)" : "none",
              }}
            >
              <span aria-hidden="true">{industry.icon}</span>
              {industry.label}
            </button>
          );
        })}
      </div>

      {/* Use case cards */}
      <div
        key={activeIndustry}
        id={`panel-${activeIndustry}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndustry}`}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        style={{ animation: "fadeInUp 0.3s ease-out" }}
      >
        {current.useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-start justify-between">
              <span
                className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)" }}
                aria-hidden="true"
              >
                {useCase.icon}
              </span>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: useCase.signaColor + "22",
                  color: useCase.signaColor,
                  border: `1px solid ${useCase.signaColor}33`,
                }}
              >
                {useCase.signaType}
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
