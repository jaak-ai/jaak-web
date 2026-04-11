"use client";

import React, { useState } from "react";
import Link from "next/link";

type ProductCard = {
  id: string;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  color: string;
  glowColor: string;
  steps: string[];
  features: string[];
  cta: string;
  href: string;
  anchor: string;
};

const IconDocument = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconFace = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.75a1.5 1.5 0 013 0" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const productCards: ProductCard[] = [
  {
    id: "simple",
    icon: <IconDocument />,
    name: "Firma Simple",
    tagline: "Rápida y sin fricción",
    description:
      "La forma más ágil de obtener consentimiento digital. Sin verificación de identidad, ideal para documentos internos y acuerdos de bajo riesgo.",
    color: "#64748B",
    glowColor: "rgba(100,116,139,0.2)",
    steps: ["Sube documento", "Envía enlace", "Firma en segundos"],
    features: [
      "Firma en 1 clic desde cualquier dispositivo",
      "Notificaciones automáticas por email",
      "Trazabilidad básica del proceso",
      "Sin instalación requerida",
    ],
    cta: "Explorar Firma Simple",
    href: "/firma-electronica-simple",
    anchor: "simple",
  },
  {
    id: "nom151",
    name: "Firma NOM-151",
    icon: <IconClock />,
    tagline: "Sello de tiempo certificado",
    description:
      "Agrega un sello de tiempo certificado bajo la Norma Oficial Mexicana NOM-151-SCFI-2016, garantizando integridad y fecha exacta del documento firmado.",
    color: "#1ECAD3",
    glowColor: "rgba(30,202,211,0.2)",
    steps: ["Firma el documento", "Sello NOM-151 automático", "Expediente generado"],
    features: [
      "Sello de tiempo NOM-151 certificado",
      "Integridad criptográfica garantizada",
      "Validez ante CNBV, SAT y tribunales",
      "Expediente digital con evidencias",
    ],
    cta: "Explorar Firma NOM-151",
    href: "/firma-electronica-nom-151",
    anchor: "nom151",
  },
  {
    id: "biometrica",
    name: "Firma Biométrica",
    icon: <IconFace />,
    tagline: "Identidad verificada en tiempo real",
    description:
      "Combina la firma electrónica con reconocimiento facial biométrico y detección de vida, generando evidencia irrefutable de quién firmó.",
    color: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.2)",
    steps: ["Sube selfie en vivo", "Verificación facial", "Firma con identidad confirmada"],
    features: [
      "Reconocimiento facial con liveness",
      "Anti-spoofing (foto de foto)",
      "NOM-151 + evidencia biométrica",
      "Expediente con video y capturas",
    ],
    cta: "Explorar Firma Biométrica",
    href: "/firma-electronica-biometrica",
    anchor: "biometria",
  },
  {
    id: "kyc",
    name: "Firma + KYC Completo",
    icon: <IconShield />,
    tagline: "Cumplimiento total para reguladas",
    description:
      "La solución más robusta: validación de identidad completa (INE/pasaporte, CURP, biometría, listas PLD/OFAC) integrada con la firma, generando un expediente 100% auditable.",
    color: "#10B981",
    glowColor: "rgba(16,185,129,0.2)",
    steps: ["KYC completo", "Validación en listas", "Firma + expediente auditable"],
    features: [
      "OCR de INE/Pasaporte",
      "Consulta CURP en Renapo",
      "Biometría + liveness",
      "Listas PLD, OFAC, SAT 69-B",
      "Expediente auditable 100%",
      "Cumplimiento CNBV y LFPIORPI",
    ],
    cta: "Explorar Firma + KYC",
    href: "/firma-electronica-kyc",
    anchor: "kyc",
  },
];

export default function FirmaProductCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {productCards.map((card) => {
        const isExpanded = expandedCard === card.id;
        return (
          <div
            key={card.id}
            id={card.anchor}
            className="rounded-2xl transition-all duration-300 cursor-pointer"
            style={{
              background: isExpanded
                ? "rgba(255,255,255,0.06)"
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${isExpanded ? card.color + "44" : "rgba(255,255,255,0.08)"}`,
              boxShadow: isExpanded ? `0 0 40px ${card.glowColor}` : "none",
            }}
            onClick={() => toggleCard(card.id)}
            role="button"
            aria-expanded={isExpanded}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard(card.id);
              }
            }}
          >
            {/* Card Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: card.color + "22",
                    color: card.color,
                    border: `1px solid ${card.color}33`,
                  }}
                >
                  {card.icon}
                </div>
                <svg
                  className="w-5 h-5 transition-transform duration-300 mt-1 text-gray-500"
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{card.name}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: card.color }}>
                {card.tagline}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>

              {/* Mini flow */}
              <div className="flex items-center gap-2 mt-5">
                {card.steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: card.color }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap hidden sm:block">
                        {step}
                      </span>
                    </div>
                    {i < card.steps.length - 1 && (
                      <div
                        className="w-6 h-px flex-shrink-0"
                        style={{ background: card.color + "44" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Expanded Section */}
            {isExpanded && (
              <div
                className="px-6 pb-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: card.color }}>
                    Incluye
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ color: card.color }}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                    style={{ background: card.color }}
                  >
                    {card.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
