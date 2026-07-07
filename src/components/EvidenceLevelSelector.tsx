"use client";

import { useState } from "react";
import Link from "next/link";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";
import { signatureLevels, riskColors } from "@/lib/firma/levels";

export default function EvidenceLevelSelector() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [activeId, setActiveId] = useState(signatureLevels[0].id);
  const active = signatureLevels.find((l) => l.id === activeId)!;

  return (
    <div>
      {/* Desktop: horizontal tabs */}
      <div
        className="hidden md:flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl"
        style={{ background: cl.cardBg, border: `1px solid ${cl.border}` }}
        role="tablist"
        aria-label="Niveles de evidencia"
      >
        {signatureLevels.map((level) => {
          const isActive = level.id === activeId;
          return (
            <button
              key={level.id}
              onClick={() => setActiveId(level.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`level-panel-${level.id}`}
              id={`level-tab-${level.id}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex-1 justify-center"
              style={{
                background: isActive ? level.color : "transparent",
                color: isActive ? "#fff" : cl.textMuted,
                boxShadow: isActive ? `0 0 20px ${level.color}44` : "none",
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{
                  background: isActive ? "rgba(255,255,255,0.25)" : level.color + "22",
                  color: isActive ? "#fff" : level.color,
                }}
                aria-hidden="true"
              >
                {level.level}
              </span>
              <span className="whitespace-nowrap">{level.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile: dropdown selector */}
      <div className="md:hidden mb-6">
        <label htmlFor="level-select" className="sr-only">
          Selecciona un nivel de evidencia
        </label>
        <select
          id="level-select"
          value={activeId}
          onChange={(e) => setActiveId(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold appearance-none"
          style={{
            background: cl.cardBg,
            border: `1px solid ${cl.border}`,
            color: isDark ? "#fff" : "#0A0F1A",
          }}
        >
          {signatureLevels.map((level) => (
            <option key={level.id} value={level.id}>
              Nivel {level.level} · {level.name}
            </option>
          ))}
        </select>
      </div>

      {/* Detail panel */}
      <div
        key={active.id}
        id={`level-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`level-tab-${active.id}`}
        className="rounded-2xl p-6 sm:p-8 animate-fade-in-up"
        style={{ background: cl.cardBg, border: `1px solid ${active.color}33`, boxShadow: `0 0 40px ${active.color}11` }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: active.color + "1A", border: `1px solid ${active.color}33` }}
            aria-hidden="true"
          >
            {active.icon}
          </span>
          <h3 className="text-xl font-black" style={{ color: isDark ? "#fff" : "#0A0F1A" }}>
            {active.name}
          </h3>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{
              background: riskColors[active.risk] + "22",
              color: riskColors[active.risk],
              border: `1px solid ${riskColors[active.risk]}44`,
            }}
          >
            Riesgo {active.risk}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-6" style={{ color: cl.textMuted }}>
          {active.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: active.color }}>
              Ideal para
            </p>
            <ul className="space-y-2">
              {active.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: cl.textFaint }}>
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: active.color }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: active.color }}>
              Evidencia que genera
            </p>
            <ul className="space-y-2">
              {active.evidence.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: cl.textFaint }}>
                  <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: active.color }} aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="rounded-xl px-4 py-3.5 mb-6 text-sm"
          style={{ background: active.color + "0F", border: `1px solid ${active.color}22`, color: cl.textFaint }}
        >
          <strong style={{ color: active.color }}>Úsala cuando:</strong> {active.useWhen}
        </div>

        <Link
          href={active.href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
          style={{ background: active.color }}
        >
          {active.cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
