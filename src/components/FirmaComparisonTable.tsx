"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";
import { signatureLevels, type SignatureLevel } from "@/lib/firma/levels";

const filters: { id: string; label: string; test: (level: SignatureLevel) => boolean }[] = [
  { id: "bajo-riesgo", label: "Bajo riesgo", test: (l) => l.risk === "Bajo" },
  { id: "alto-valor", label: "Alto valor", test: (l) => l.risk === "Alto" },
  { id: "regulado", label: "Regulado", test: (l) => l.risk === "Regulado" },
  { id: "identidad", label: "Requiere identidad", test: (l) => l.matrix.identity !== null },
  { id: "nom151", label: "Requiere NOM-151", test: (l) => l.matrix.nom151 },
  { id: "efirma", label: "Requiere e.firma", test: (l) => l.id === "efirma" },
];

function Check({ value, color }: { value: boolean; color: string }) {
  if (!value) return <span className="text-gray-600">—</span>;
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" style={{ color }} aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function FirmaComparisonTable() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isHighlighted = (level: SignatureLevel) =>
    activeFilters.size > 0 && filters.some((f) => activeFilters.has(f.id) && f.test(level));

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrar comparativa de firmas">
        {filters.map((filter) => {
          const isActive = activeFilters.has(filter.id);
          return (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              aria-pressed={isActive}
              className="text-xs font-semibold px-3.5 py-2 rounded-full transition-all"
              style={{
                background: isActive ? "#2DB6C1" : cl.cardBg,
                color: isActive ? "#fff" : cl.textMuted,
                border: `1px solid ${isActive ? "#2DB6C1" : cl.border}`,
              }}
            >
              {filter.label}
            </button>
          );
        })}
        {activeFilters.size > 0 && (
          <button
            onClick={() => setActiveFilters(new Set())}
            className="text-xs font-semibold px-3.5 py-2 rounded-full transition-all"
            style={{ color: cl.textMuted }}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="w-full overflow-x-auto rounded-2xl" style={{ border: `1px solid ${cl.border}` }}>
        <table className="w-full min-w-[900px]" style={{ borderCollapse: "collapse" }} aria-label="Comparación de tipos de firma electrónica">
          <thead>
            <tr style={{ background: "rgba(30,202,211,0.06)", borderBottom: `1px solid ${cl.border}` }}>
              {[
                "Tipo de Firma",
                "Identidad del Firmante",
                "Sellos de Tiempo",
                "NOM-151",
                "Biometría",
                "KYC",
                "Nivel de Evidencia",
                "Casos de Uso",
              ].map((header) => (
                <th key={header} className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color: "#2DB6C1" }} scope="col">
                  {header}
                </th>
              ))}
              <th className="py-4 px-4" scope="col">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {signatureLevels.map((level, index) => {
              const highlighted = isHighlighted(level);
              const dimmed = activeFilters.size > 0 && !highlighted;
              return (
                <React.Fragment key={level.id}>
                  <tr
                    onMouseEnter={() => setHoveredRow(level.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    onClick={() => toggleRow(level.id)}
                    className="cursor-pointer transition-all duration-200"
                    style={{
                      background: highlighted
                        ? level.color + "14"
                        : expandedRow === level.id
                        ? "rgba(30,202,211,0.06)"
                        : hoveredRow === level.id
                        ? cl.cardBgActive
                        : index % 2 === 0
                        ? cl.cardBgMin
                        : "transparent",
                      borderBottom: expandedRow === level.id ? "none" : `1px solid ${cl.borderFaint}`,
                      borderLeft: highlighted ? `3px solid ${level.color}` : "3px solid transparent",
                      opacity: dimmed ? 0.5 : 1,
                    }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                          style={{ background: level.color + "22", color: level.color }}
                        >
                          {level.level}
                        </span>
                        <span className="font-semibold text-white text-sm whitespace-nowrap">{level.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      {level.matrix.identity ? (
                        <span className="text-gray-300">{level.matrix.identity}</span>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4"><Check value={level.matrix.timestamp} color={level.color} /></td>
                    <td className="py-4 px-4"><Check value={level.matrix.nom151} color={level.color} /></td>
                    <td className="py-4 px-4"><Check value={level.matrix.biometria} color={level.color} /></td>
                    <td className="py-4 px-4"><Check value={level.matrix.kyc} color={level.color} /></td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-bold" style={{ color: level.color }}>{level.matrix.evidenceLevel}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{level.matrix.useCase}</td>
                    <td className="py-4 px-4">
                      <button
                        className="text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap"
                        style={{ color: "#2DB6C1", background: expandedRow === level.id ? "rgba(30,202,211,0.15)" : "rgba(30,202,211,0.08)" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRow(level.id);
                        }}
                        aria-expanded={expandedRow === level.id}
                        aria-label={`${expandedRow === level.id ? "Cerrar" : "Ver"} detalles de ${level.name}`}
                      >
                        {expandedRow === level.id ? "Cerrar" : "Detalles"}
                        <svg
                          className="w-3 h-3 transition-transform duration-200"
                          style={{ transform: expandedRow === level.id ? "rotate(180deg)" : "rotate(0deg)" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {expandedRow === level.id && (
                    <tr>
                      <td colSpan={9} style={{ background: "rgba(30,202,211,0.05)", borderBottom: `1px solid ${cl.borderFaint}`, padding: 0 }}>
                        <div className="px-5 py-6 flex flex-col sm:flex-row gap-6 items-start">
                          <div className="flex-1">
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{level.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {level.evidence.map((item) => (
                                <span
                                  key={item}
                                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                                  style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#A7F3F6" }}
                                >
                                  <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#2DB6C1" }} aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Link
                            href={level.href}
                            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                            style={{ background: level.color }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ver solución →
                          </Link>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
