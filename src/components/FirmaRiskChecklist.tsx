"use client";

import { useState } from "react";
import Link from "next/link";

type RiskItem = {
  id: string;
  text: string;
  severity: "high" | "medium";
};

const riskItems: RiskItem[] = [
  {
    id: "identity",
    text: "No tengo evidencia de quién firmó el documento",
    severity: "high",
  },
  {
    id: "timestamp",
    text: "No existe un sello de tiempo certificado (NOM-151) en mis firmas",
    severity: "high",
  },
  {
    id: "integrity",
    text: "No puedo probar que el documento no fue modificado después de la firma",
    severity: "high",
  },
  {
    id: "biometrics",
    text: "No validé biométricamente la identidad del firmante",
    severity: "medium",
  },
  {
    id: "audit",
    text: "No tengo un expediente auditable con toda la cadena de custodia",
    severity: "medium",
  },
  {
    id: "legal",
    text: "No sé si mi firma resistiría un impugnación legal o auditoría regulatoria",
    severity: "medium",
  },
];

export default function FirmaRiskChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const checkedCount = checked.size;
  const showWarning = checkedCount >= 2;
  const riskLevel =
    checkedCount === 0
      ? null
      : checkedCount === 1
      ? "bajo"
      : checkedCount <= 3
      ? "moderado"
      : "alto";

  const highRiskChecked = riskItems
    .filter((i) => i.severity === "high" && checked.has(i.id))
    .length;

  return (
    <div>
      <fieldset>
        <legend className="sr-only">Lista de verificación de riesgos de firma electrónica</legend>
        <div className="space-y-3" role="list">
          {riskItems.map((item) => {
            const isChecked = checked.has(item.id);
            return (
              <div
                key={item.id}
                role="listitem"
                className="flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 group"
                style={{
                  background: isChecked
                    ? item.severity === "high"
                      ? "rgba(239,68,68,0.08)"
                      : "rgba(245,158,11,0.08)"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${
                    isChecked
                      ? item.severity === "high"
                        ? "rgba(239,68,68,0.3)"
                        : "rgba(245,158,11,0.3)"
                      : "rgba(255,255,255,0.07)"
                  }`,
                }}
                onClick={() => toggle(item.id)}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isChecked
                        ? item.severity === "high"
                          ? "#EF4444"
                          : "#F59E0B"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${
                        isChecked
                          ? item.severity === "high"
                            ? "#EF4444"
                            : "#F59E0B"
                          : "rgba(255,255,255,0.2)"
                      }`,
                    }}
                    role="checkbox"
                    aria-checked={isChecked}
                    aria-label={item.text}
                  >
                    {isChecked && (
                      <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <p
                    className="text-sm leading-relaxed transition-colors duration-200"
                    style={{
                      color: isChecked
                        ? item.severity === "high"
                          ? "#FCA5A5"
                          : "#FCD34D"
                        : "#94A3B8",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
                {isChecked && (
                  <span
                    className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background:
                        item.severity === "high"
                          ? "rgba(239,68,68,0.2)"
                          : "rgba(245,158,11,0.2)",
                      color:
                        item.severity === "high" ? "#FCA5A5" : "#FCD34D",
                    }}
                    aria-label={`Riesgo ${item.severity === "high" ? "alto" : "medio"}`}
                  >
                    {item.severity === "high" ? "⚠ Alto" : "⚡ Medio"}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>

      {/* Warning block */}
      <div
        className="mt-6 rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          maxHeight: showWarning ? "400px" : "0",
          opacity: showWarning ? 1 : 0,
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          className="p-6"
          style={{
            background:
              highRiskChecked >= 2
                ? "rgba(239,68,68,0.08)"
                : "rgba(245,158,11,0.08)",
            border: `1px solid ${
              highRiskChecked >= 2
                ? "rgba(239,68,68,0.3)"
                : "rgba(245,158,11,0.3)"
            }`,
            borderRadius: "16px",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
              style={{
                background:
                  highRiskChecked >= 2
                    ? "rgba(239,68,68,0.2)"
                    : "rgba(245,158,11,0.2)",
              }}
              aria-hidden="true"
            >
              {highRiskChecked >= 2 ? "🚨" : "⚠️"}
            </div>
            <div className="flex-1">
              <h4
                className="font-bold text-base mb-1"
                style={{
                  color: highRiskChecked >= 2 ? "#FCA5A5" : "#FCD34D",
                }}
              >
                Riesgo {riskLevel}:{" "}
                {checkedCount === 1
                  ? "1 punto de vulnerabilidad detectado"
                  : `${checkedCount} puntos de vulnerabilidad detectados`}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {highRiskChecked >= 2
                  ? "Tu firma actual presenta vulnerabilidades legales serias. En una auditoría regulatoria o proceso judicial, podrías no poder acreditar la validez de tus contratos."
                  : "Tu firma presenta áreas de mejora. Para cumplimiento regulatorio completo (CNBV, LFPIORPI), necesitas evidencia más sólida."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/firma-electronica-kyc"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{
                    background:
                      highRiskChecked >= 2 ? "#EF4444" : "#F59E0B",
                  }}
                >
                  Ver solución completa
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#94A3B8",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Hablar con un experto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {checkedCount === 0 && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Selecciona las situaciones que aplican a tu empresa para evaluar el riesgo de tu firma actual.
        </p>
      )}
    </div>
  );
}
