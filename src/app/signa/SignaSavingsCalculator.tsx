"use client";

import { useState } from "react";
import Link from "next/link";

const COMPETITOR_PRICE = 29.9;
const SIGNA_PRICE = 15.0;

export default function SignaSavingsCalculator() {
  const [monthlyDocs, setMonthlyDocs] = useState("");
  const [result, setResult] = useState<{ monthly: number; annual: number; percentage: number } | null>(null);

  const handleCalculate = () => {
    const docs = parseInt(monthlyDocs, 10) || 0;
    if (docs < 1) return;
    const competitorCost = docs * COMPETITOR_PRICE;
    const signaCost = docs * SIGNA_PRICE;
    const monthlySavings = competitorCost - signaCost;
    setResult({
      monthly: monthlySavings,
      annual: monthlySavings * 12,
      percentage: Math.round((monthlySavings / competitorCost) * 100),
    });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Calcula tu ahorro real</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="monthly-docs" className="block text-white/80 text-sm font-medium mb-2">
            ¿Cuántos documentos firmas al mes?
          </label>
          <input
            type="number"
            id="monthly-docs"
            value={monthlyDocs}
            onChange={(e) => setMonthlyDocs(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#1ECAD3] focus:outline-none"
            placeholder="Ej. 100"
            min={1}
          />
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="w-full px-6 py-3 bg-[#1ECAD3] text-[#0E2233] font-bold rounded-lg hover:bg-[#19b3bb] transition-all"
        >
          Calcular ahorro
        </button>

        {result && (
          <div className="bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-lg p-4 text-center">
            <p className="text-white/70 text-sm mb-1">Ahorro mensual</p>
            <p className="text-[#1ECAD3] text-lg font-bold mb-3">
              ${result.monthly.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN
            </p>
            <p className="text-white/70 text-sm mb-1">Ahorro anual</p>
            <p className="text-[#1ECAD3] text-2xl font-bold mb-3">
              ${result.annual.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN
            </p>
            <p className="text-white text-sm mb-4">
              Ahorro total: <span className="text-[#1ECAD3] font-bold">{result.percentage}%</span>
            </p>
            <Link
              href="/signa/calculadora"
              className="inline-block px-4 py-2 bg-[#1ECAD3] text-[#0E2233] rounded-lg text-sm font-semibold hover:bg-[#19b3bb] transition-all"
            >
              Ver detalles completos →
            </Link>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-white/60 text-sm text-center">
          <strong className="text-white">Garantía de 30 días:</strong> si no ahorras como prometemos, te devolvemos el 100% sin preguntas.
        </p>
      </div>
    </div>
  );
}
