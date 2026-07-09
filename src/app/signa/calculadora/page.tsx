"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const REFERENCE_UNIT_PRICE = 15;

const formatCurrency = (value: number) =>
  value.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

interface CostEstimate {
  volume: number;
  unitPrice: number;
  monthlyTotal: number;
  annualTotal: number;
}

const volumeExamples = [
  {
    sector: "Inmobiliaria",
    volume: 500,
    note: "Contratos de compraventa, arrendamiento y poderes.",
  },
  {
    sector: "Bufete legal",
    volume: 300,
    note: "Contratos, demandas y documentos notariales.",
  },
  {
    sector: "Empresa",
    volume: 200,
    note: "Contratos laborales, con proveedores y documentos internos.",
  },
];

export default function SignaCalculadora() {
  const [monthlyVolume, setMonthlyVolume] = useState("");
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const volume = Number.parseInt(monthlyVolume, 10);

    if (!Number.isFinite(volume) || volume < 1) {
      setError("Ingrese al menos 1 documento por mes.");
      setEstimate(null);
      return;
    }

    const monthlyTotal = volume * REFERENCE_UNIT_PRICE;

    setError("");
    setEstimate({
      volume,
      unitPrice: REFERENCE_UNIT_PRICE,
      monthlyTotal,
      annualTotal: monthlyTotal * 12,
    });
  };

  return (
    <>
      <title>Calculadora de costo de firma electrónica NOM-151 | JAAK</title>
      <meta
        name="description"
        content="Estime el costo mensual y anual de sus firmas electrónicas con validez legal NOM-151 según su volumen. Precios de referencia; consulte el catálogo vigente en precios."
      />
      <link rel="canonical" href="https://jaak.ai/signa/calculadora" />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#212A45]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DB6C1]/10 border border-[#2DB6C1]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#2DB6C1] rounded-full"></span>
              <span className="text-[#2DB6C1] text-sm font-medium">Calculadora de costo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Calcule el costo de su{" "}
              <span className="text-[#2DB6C1]">firma electrónica NOM-151</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ingrese su volumen mensual de firmas y obtenga una estimación del costo con Signa.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Sus datos</h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="monthly-volume"
                      className="block text-gray-800 text-sm font-semibold mb-2"
                    >
                      ¿Cuántos documentos firma por mes?
                    </label>
                    <input
                      type="number"
                      id="monthly-volume"
                      value={monthlyVolume}
                      onChange={(event) => setMonthlyVolume(event.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#2DB6C1] focus:outline-none"
                      placeholder="ej. 150"
                      min="1"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Promedio de documentos que procesa mensualmente.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCalculate}
                    className="w-full px-6 py-4 bg-[#2DB6C1] text-white font-bold text-lg rounded-lg hover:bg-[#249ba5] transition-all"
                  >
                    Calcular costo estimado
                  </button>

                  {error && (
                    <p className="text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  )}

                  <p className="text-xs text-gray-500">
                    Precios de referencia; consulte el catálogo vigente en{" "}
                    <Link href="/precios" className="text-[#2DB6C1] font-semibold hover:underline">
                      precios
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Results Panel */}
              {estimate ? (
                <div className="bg-[#2DB6C1]/5 border-2 border-[#2DB6C1]/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Costo estimado con Signa</h2>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-[#212A45]/5 border border-[#212A45]/20 rounded-xl p-6 text-center">
                      <h3 className="text-sm text-gray-600 font-medium mb-2">Costo mensual</h3>
                      <span className="text-3xl font-black text-[#212A45]">
                        {formatCurrency(estimate.monthlyTotal)}
                      </span>
                    </div>
                    <div className="bg-[#2DB6C1]/10 border border-[#2DB6C1]/30 rounded-xl p-6 text-center">
                      <h3 className="text-sm text-gray-600 font-medium mb-2">Costo anual</h3>
                      <span className="text-3xl font-black text-[#2DB6C1]">
                        {formatCurrency(estimate.annualTotal)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Desglose</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-sm text-gray-600">
                          Precio por firma (estimación de referencia)
                        </span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(estimate.unitPrice)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-sm text-gray-600">Volumen mensual</span>
                        <span className="font-semibold text-gray-900">
                          {estimate.volume.toLocaleString("es-MX")} documentos
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-600">Costo mensual estimado</span>
                        <span className="font-semibold text-[#2DB6C1]">
                          {formatCurrency(estimate.monthlyTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-8">
                    Estimación de referencia con base en un precio unitario indicativo. El precio final
                    depende del catálogo vigente y de las condiciones de su plan. Consulte el{" "}
                    <Link href="/precios" className="text-[#2DB6C1] font-semibold hover:underline">
                      catálogo de precios
                    </Link>
                    .
                  </p>

                  <div className="bg-[#212A45] rounded-xl p-6 text-center text-white">
                    <h3 className="text-lg font-bold mb-2">¿Requiere una cotización?</h3>
                    <p className="text-sm mb-4 text-white/80">
                      Le compartimos un precio a la medida de su volumen y caso de uso.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Link
                        href="/contacto"
                        className="px-4 py-2 bg-[#2DB6C1] text-white font-bold rounded-lg hover:bg-[#249ba5] transition-all text-sm"
                      >
                        Solicitar cotización
                      </Link>
                      <Link
                        href="/precios"
                        className="px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#212A45] transition-all text-sm"
                      >
                        Ver precios
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 flex items-center justify-center text-center">
                  <p className="text-gray-500 max-w-xs">
                    Ingrese su volumen mensual de firmas para ver el costo estimado con Signa.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Volume Examples */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ejemplos de costo estimado por volumen
              </h2>
              <p className="text-lg text-gray-600">
                Estimación de referencia según el volumen mensual de firmas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {volumeExamples.map((example) => (
                <div
                  key={example.sector}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{example.sector}</h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-600 mb-1">
                        {example.volume.toLocaleString("es-MX")} documentos/mes
                      </div>
                      <div className="text-2xl font-bold text-[#2DB6C1]">
                        {formatCurrency(example.volume * REFERENCE_UNIT_PRICE * 12)}/año
                      </div>
                      <div className="text-sm text-gray-500">costo estimado de referencia</div>
                    </div>
                    <p className="text-sm text-gray-600">{example.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Cifras de referencia con base en un precio unitario indicativo. Consulte el catálogo
              vigente en{" "}
              <Link href="/precios" className="text-[#2DB6C1] font-semibold hover:underline">
                precios
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ¿Los precios de la calculadora son definitivos?
                </h3>
                <p className="text-gray-600">
                  No. Son una estimación de referencia. El precio final depende del catálogo vigente y
                  de las condiciones de su plan.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ¿Dónde consulto el precio vigente?
                </h3>
                <p className="text-gray-600">
                  En la página de precios encontrará el catálogo actualizado por producto y volumen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ¿Mis documentos tendrán validez legal?
                </h3>
                <p className="text-gray-600">
                  Sí. Signa cumple con la NOM-151-SCFI-2016 para conservación de mensajes de datos.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ¿Puedo obtener una cotización a la medida?
                </h3>
                <p className="text-gray-600">
                  Sí. Contáctenos y le compartimos un precio ajustado a su volumen y caso de uso.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
