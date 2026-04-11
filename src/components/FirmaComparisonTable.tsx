"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";

type SignatureType = {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  legalValidity: string;
  identityVerification: string;
  evidenceLevel: string;
  evidenceColor: string;
  useCase: string;
  description: string;
  benefits: string[];
  href: string;
};

const signatureTypes: SignatureType[] = [
  {
    id: "simple",
    name: "Firma Simple",
    badge: "Básica",
    badgeColor: "#64748B",
    legalValidity: "Reconocimiento básico",
    identityVerification: "No incluida",
    evidenceLevel: "Baja",
    evidenceColor: "#94A3B8",
    useCase: "Acuerdos internos, NDAs",
    description:
      "Firma electrónica básica para documentos de bajo riesgo donde la relación entre las partes ya está establecida. Ideal para uso interno con trazabilidad básica.",
    benefits: [
      "Implementación inmediata",
      "Sin fricción para el firmante",
      "Trazabilidad básica de firma",
    ],
    href: "/firma-electronica-simple",
  },
  {
    id: "nom151",
    name: "Firma NOM-151",
    badge: "Certificada",
    badgeColor: "#1ECAD3",
    legalValidity: "Plena validez + Sello de tiempo NOM-151",
    identityVerification: "No incluida",
    evidenceLevel: "Alta",
    evidenceColor: "#1ECAD3",
    useCase: "Contratos financieros y comerciales",
    description:
      "Agrega un sello de tiempo certificado bajo NOM-151-SCFI-2016 que garantiza la integridad del documento y la fecha exacta de firma. Válida ante CNBV, SAT y tribunales.",
    benefits: [
      "Sello de tiempo NOM-151 certificado",
      "Integridad criptográfica del documento",
      "Válida ante CNBV, SAT y juzgados",
      "Expediente con evidencia de firma",
    ],
    href: "/firma-electronica-nom-151",
  },
  {
    id: "biometrica",
    name: "Firma Biométrica",
    badge: "Verificada",
    badgeColor: "#8B5CF6",
    legalValidity: "Plena validez + NOM-151 + Biometría",
    identityVerification: "Reconocimiento facial con liveness",
    evidenceLevel: "Muy alta",
    evidenceColor: "#A78BFA",
    useCase: "Onboarding digital, créditos, seguros",
    description:
      "Combina firma electrónica, NOM-151 y reconocimiento facial biométrico con detección de vida para verificar la identidad del firmante en tiempo real.",
    benefits: [
      "Verificación facial en tiempo real",
      "Detección de vida (anti-spoofing)",
      "NOM-151 + evidencia biométrica",
      "Expediente digital con video/foto",
    ],
    href: "/firma-electronica-biometrica",
  },
  {
    id: "kyc",
    name: "Firma + KYC Completo",
    badge: "Full Compliance",
    badgeColor: "#10B981",
    legalValidity: "Máxima validez legal + Full compliance",
    identityVerification: "Identidad + CURP + Biometría + Listas",
    evidenceLevel: "Máxima",
    evidenceColor: "#10B981",
    useCase: "Instituciones financieras reguladas por CNBV",
    description:
      "La solución más completa: firma electrónica + KYC completo (INE/pasaporte, CURP/Renapo, biometría facial, listas PLD/OFAC/SAT) + expediente digital auditable. Cumplimiento total para entidades reguladas.",
    benefits: [
      "Validación OCR de INE/Pasaporte",
      "Consulta CURP en Renapo",
      "Biometría facial con liveness",
      "Listas PLD, OFAC, SAT 69-B",
      "Expediente digital auditable",
      "Cumplimiento LFPIORPI y CNBV",
    ],
    href: "/firma-electronica-kyc",
  },
];

export default function FirmaComparisonTable() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="w-full overflow-x-auto rounded-2xl"
      style={{ border: `1px solid ${cl.border}` }}
    >
      <table
        className="w-full min-w-[800px]"
        style={{ borderCollapse: "collapse" }}
        aria-label="Comparación de tipos de firma electrónica"
      >
        <thead>
          <tr
            style={{
              background: "rgba(30,202,211,0.06)",
              borderBottom: `1px solid ${cl.border}`,
            }}
          >
            {[
              "Tipo de Firma",
              "Validez Legal",
              "Verificación de Identidad",
              "Nivel de Evidencia",
              "Caso de Uso",
            ].map((header) => (
              <th
                key={header}
                className="text-left py-4 px-5 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#1ECAD3" }}
                scope="col"
              >
                {header}
              </th>
            ))}
            <th className="py-4 px-5" scope="col">
              <span className="sr-only">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {signatureTypes.map((type, index) => (
            <React.Fragment key={type.id}>
              <tr
                onMouseEnter={() => setHoveredRow(type.id)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => toggleRow(type.id)}
                className="cursor-pointer transition-all duration-200"
                style={{
                  background:
                    expandedRow === type.id
                      ? "rgba(30,202,211,0.06)"
                      : hoveredRow === type.id
                      ? cl.cardBgActive
                      : index % 2 === 0
                      ? cl.cardBgMin
                      : "transparent",
                  borderBottom:
                    expandedRow === type.id
                      ? "none"
                      : `1px solid ${cl.borderFaint}`,
                }}
              >
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                      style={{
                        background: type.badgeColor + "22",
                        color: type.badgeColor,
                        border: `1px solid ${type.badgeColor}44`,
                      }}
                    >
                      {type.badge}
                    </span>
                    <span className="font-semibold text-white text-sm">
                      {type.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-5 text-gray-400 text-sm">
                  {type.legalValidity}
                </td>
                <td className="py-4 px-5 text-sm">
                  {type.identityVerification === "No incluida" ? (
                    <span className="text-gray-600">—</span>
                  ) : (
                    <span className="text-gray-300">
                      {type.identityVerification}
                    </span>
                  )}
                </td>
                <td className="py-4 px-5">
                  <span
                    className="text-sm font-bold"
                    style={{ color: type.evidenceColor }}
                  >
                    {type.evidenceLevel}
                  </span>
                </td>
                <td className="py-4 px-5 text-gray-400 text-sm">
                  {type.useCase}
                </td>
                <td className="py-4 px-5">
                  <button
                    className="text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all"
                    style={{
                      color: "#1ECAD3",
                      background:
                        expandedRow === type.id
                          ? "rgba(30,202,211,0.15)"
                          : "rgba(30,202,211,0.08)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRow(type.id);
                    }}
                    aria-expanded={expandedRow === type.id}
                    aria-label={`${expandedRow === type.id ? "Cerrar" : "Ver"} detalles de ${type.name}`}
                  >
                    {expandedRow === type.id ? "Cerrar" : "Detalles"}
                    <svg
                      className="w-3 h-3 transition-transform duration-200"
                      style={{
                        transform:
                          expandedRow === type.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {expandedRow === type.id && (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      background: "rgba(30,202,211,0.05)",
                      borderBottom: `1px solid ${cl.borderFaint}`,
                      padding: 0,
                    }}
                  >
                    <div className="px-5 py-6 flex flex-col sm:flex-row gap-6 items-start">
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {type.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {type.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                              style={{
                                background: "rgba(30,202,211,0.08)",
                                border: "1px solid rgba(30,202,211,0.2)",
                                color: "#A7F3F6",
                              }}
                            >
                              <svg
                                className="w-3 h-3 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                style={{ color: "#1ECAD3" }}
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={type.href}
                        className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                        style={{ background: type.badgeColor }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver solución →
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
