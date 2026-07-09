"use client";

import { useState } from "react";

/**
 * PricingAnimated — Mostrar adaptabilidad de precios (PERSONA pattern)
 *
 * Inspiración VERIFF: muestra cómo los precios se ajustan dinámicamente
 * según volumen, flujo y características seleccionadas.
 *
 * No hardcoded. Configurable.
 */

interface PricingOption {
  name: string;
  price: number | string;
  description: string;
  features: string[];
  color: string;
}

interface PricingConfig {
  title: string;
  subtitle?: string;
  baseOptions: PricingOption[];
  volumeScaling?: {
    threshold: number;
    discount: number; // %
  }[];
}

export default function PricingAnimated({
  config,
}: {
  config: PricingConfig;
}) {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [volume, setVolume] = useState(1000); // Volumen inicial

  // Calcular descuento según volumen
  const getDiscount = () => {
    if (!config.volumeScaling) return 0;
    for (const tier of config.volumeScaling) {
      if (volume >= tier.threshold) {
        return tier.discount;
      }
    }
    return 0;
  };

  const discount = getDiscount();

  const calculatePrice = (basePrice: number | string) => {
    if (typeof basePrice === "string") return basePrice;
    const discountedPrice = basePrice * (1 - discount / 100);
    return `$${discountedPrice.toFixed(2)}`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-800 text-[#212A45] mb-3">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              {config.subtitle}
            </p>
          )}
        </div>

        {/* Volume slider */}
        {config.volumeScaling && (
          <div className="mb-12 p-6 bg-[#F3F4F8] rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-600 text-[#212A45]">
                Volumen anual estimado
              </label>
              <span className="text-2xl font-700 text-[#2DB6C1]">
                {volume.toLocaleString()} transacciones
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="10000000"
              step="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-[#EEEEEE] rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2DB6C1 0%, #2DB6C1 ${
                  ((volume - 100) / (10000000 - 100)) * 100
                }%, #EEEEEE ${((volume - 100) / (10000000 - 100)) * 100}%, #EEEEEE 100%)`,
              }}
            />

            <div className="flex justify-between text-xs text-[#64748B] mt-3">
              <span>100</span>
              <span>1,000</span>
              <span>100,000</span>
              <span>10,000,000+</span>
            </div>

            {discount > 0 && (
              <div
                className="mt-4 p-3 rounded-lg border"
                style={{
                  background: "#2AD79610",
                  borderColor: "#2AD79630",
                }}
              >
                <p className="text-sm font-600 text-[#2AD796]">
                  ✓ Descuento por volumen: {discount}% OFF
                </p>
              </div>
            )}
          </div>
        )}

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {config.baseOptions.map((option, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPlan(idx)}
              className="p-6 rounded-lg border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: selectedPlan === idx ? option.color : "#EEEEEE",
                background:
                  selectedPlan === idx ? `${option.color}08` : "#FFFFFF",
                boxShadow:
                  selectedPlan === idx
                    ? `0 8px 24px ${option.color}20`
                    : "none",
              }}
            >
              <h3 className="text-lg font-700 text-[#212A45] mb-2">
                {option.name}
              </h3>
              <p className="text-sm text-[#64748B] mb-6">{option.description}</p>

              {/* Price display */}
              <div className="mb-6">
                <p
                  className="text-3xl font-800 mb-2"
                  style={{ color: option.color }}
                >
                  {calculatePrice(option.price)}
                </p>
                <p className="text-xs text-[#64748B]">por transacción</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {option.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-start gap-2 text-xs text-[#64748B]"
                  >
                    <span
                      className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]"
                      style={{ background: option.color }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-2 rounded-lg font-600 text-white transition-all duration-200"
                style={{
                  background: option.color,
                  opacity: selectedPlan === idx ? 1 : 0.7,
                }}
              >
                Seleccionar plan
              </button>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="text-center">
          <p className="text-sm text-[#64748B]">
            Precios varían según volumen, características y región. Contacta
            sales para propuesta personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}
