"use client";

import { useMemo, useState } from "react";

const TEAL = "#1ECAD3";

const UMA_2026 = 117.31;
const IDENTIFICACION_UMA = 325;
const AVISO_UMA = 645;
const IDENTIFICACION_MXN = IDENTIFICACION_UMA * UMA_2026;
const AVISO_MXN = AVISO_UMA * UMA_2026;

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 2,
});

type Bracket = "debajo" | "identificacion" | "aviso";

function getBracket(amount: number): Bracket {
  if (amount >= AVISO_MXN) return "aviso";
  if (amount >= IDENTIFICACION_MXN) return "identificacion";
  return "debajo";
}

const BRACKET_COPY: Record<Bracket, { label: string; desc: string; color: string; bg: string; border: string }> = {
  debajo: {
    label: "Debajo del umbral",
    desc: "El monto analizado no alcanza el umbral de identificación reforzada del Art. 17 LFPIORPI. Revisa siempre la acumulación mensual y tus propias políticas internas.",
    color: "#2AD796",
    bg: "rgba(42,215,150,0.08)",
    border: "rgba(42,215,150,0.25)",
  },
  identificacion: {
    label: "Umbral de identificación",
    desc: "A partir de 325 UMA aplica la obligación de identificación reforzada para juegos con apuesta, concursos y sorteos.",
    color: TEAL,
    bg: "rgba(30,202,211,0.08)",
    border: "rgba(30,202,211,0.3)",
  },
  aviso: {
    label: "Umbral de Aviso",
    desc: "A partir de 645 UMA se suma la obligación de presentar Aviso ante la autoridad, conforme al Art. 17 LFPIORPI.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.3)",
  },
};

export default function UmaCalculator() {
  const [individual, setIndividual] = useState("");
  const [acumulado, setAcumulado] = useState("");

  const result = useMemo(() => {
    const ind = Number(individual.replace(/,/g, "")) || 0;
    const acu = Number(acumulado.replace(/,/g, "")) || 0;
    const max = Math.max(ind, acu);
    if (!ind && !acu) return null;
    return { bracket: getBracket(max), max };
  }, [individual, acumulado]);

  const copy = result ? BRACKET_COPY[result.bracket] : null;

  return (
    <div className="rounded-2xl p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="uma-individual" className="block text-xs font-semibold text-white/60 mb-2">
            Monto individual (MXN)
          </label>
          <input
            id="uma-individual"
            type="text"
            inputMode="decimal"
            value={individual}
            onChange={(e) => setIndividual(e.target.value.replace(/[^0-9.]/g, ""))}
            placeholder="0.00"
            className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
        <div>
          <label htmlFor="uma-acumulado" className="block text-xs font-semibold text-white/60 mb-2">
            Acumulado mensual (MXN)
          </label>
          <input
            id="uma-acumulado"
            type="text"
            inputMode="decimal"
            value={acumulado}
            onChange={(e) => setAcumulado(e.target.value.replace(/[^0-9.]/g, ""))}
            placeholder="0.00"
            className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
      </div>

      {copy ? (
        <div className="rounded-xl p-5 transition-all" style={{ background: copy.bg, border: `1px solid ${copy.border}` }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: copy.color }} />
            <span className="text-sm font-bold" style={{ color: copy.color }}>{copy.label}</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">{copy.desc}</p>
        </div>
      ) : (
        <div className="rounded-xl p-5 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm text-white/50">Ingresa un monto para ver el resultado orientativo.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-3 mt-5 text-xs text-white/50">
        <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
          <span className="font-semibold" style={{ color: TEAL }}>Identificación:</span> 325 UMA ({currency.format(IDENTIFICACION_MXN)})
        </div>
        <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
          <span className="font-semibold" style={{ color: "#F59E0B" }}>Aviso:</span> 645 UMA ({currency.format(AVISO_MXN)})
        </div>
      </div>

      <p className="text-[11px] text-white/40 leading-relaxed mt-5">
        Cálculo orientativo con UMA 2026 = {currency.format(UMA_2026)} MXN diarios. Los valores deben analizarse conforme a
        la modalidad de operación, la acumulación y los criterios aplicables de la LFPIORPI. Esta calculadora no
        sustituye el análisis legal de un especialista.
      </p>
    </div>
  );
}
