"use client";

import Link from "next/link";
import { ReactNode } from "react";

/**
 * ProductLandingTemplate — Componente configurable reutilizable
 *
 * Permite crear landing pages de productos modulares sin duplicar código.
 * Se adapta a Signa, Guardian, Verificación KYC, etc.
 *
 * Inspiración PERSONA: interfaz percibida como modular y adaptable.
 */

export interface ProductFeature {
  label: string;
  description: string;
  icon: ReactNode;
  highlight?: boolean;
}

export interface ProductComparison {
  category: string;
  items: {
    label: string;
    values: (string | boolean)[];
  }[];
  columns: string[];
}

export interface ProductLandingConfig {
  productName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  cta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  features: ProductFeature[];
  comparison?: ProductComparison;
  faqs?: Array<{ question: string; answer: string }>;
  color: "teal" | "green" | "navy";
}

export default function ProductLandingTemplate({
  config,
}: {
  config: ProductLandingConfig;
}) {
  const colorMap = {
    teal: { bg: "#2DB6C110", border: "#2DB6C130", text: "#2DB6C1" },
    green: { bg: "#2AD79610", border: "#2AD79630", text: "#2AD796" },
    navy: { bg: "#212A4510", border: "#212A4530", text: "#212A45" },
  };

  const color = colorMap[config.color];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: color.bg,
              border: `1px solid ${color.border}`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: color.text }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: color.text }}
            >
              {config.tagline}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-800 text-[#212A45] mb-6 leading-tight">
            {config.headline}
          </h1>

          <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto leading-relaxed">
            {config.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={config.cta.href}
              className="px-7 py-3 text-white font-600 rounded-lg transition-all duration-200"
              style={{
                background: color.text,
                boxShadow: `0 8px 24px ${color.text}30`,
              }}
            >
              {config.cta.label}
            </Link>
            {config.secondaryCta && (
              <Link
                href={config.secondaryCta.href}
                className="px-7 py-3 text-[#212A45] font-600 rounded-lg border border-[#EEEEEE] hover:bg-[#F3F4F8] transition-colors duration-200"
              >
                {config.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-700 text-[#212A45] mb-12 text-center">
            Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#EEEEEE] rounded-lg hover:border-[#2DB6C1] transition-colors duration-200"
                style={{
                  borderColor: feature.highlight
                    ? color.text
                    : undefined,
                  background: feature.highlight ? `${color.bg}50` : undefined,
                }}
              >
                <div className="mb-3 text-2xl">{feature.icon}</div>
                <h3 className="text-sm font-700 text-[#212A45] mb-2">
                  {feature.label}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table (si aplica) */}
      {config.comparison && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-700 text-[#212A45] mb-12 text-center">
              Comparación
            </h2>
            <div className="overflow-x-auto bg-white border border-[#EEEEEE] rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#EEEEEE] bg-[#F3F4F8]">
                    <th className="px-6 py-3 text-left font-600 text-[#64748B]">
                      {config.comparison.category}
                    </th>
                    {config.comparison.columns.map((col) => (
                      <th
                        key={col}
                        className="px-6 py-3 text-center font-600 text-[#64748B]"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.comparison.items.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#EEEEEE] hover:bg-[#FAFAFA] transition-colors"
                    >
                      <td className="px-6 py-4 font-500 text-[#212A45]">
                        {item.label}
                      </td>
                      {item.values.map((val, vidx) => (
                        <td
                          key={vidx}
                          className="px-6 py-4 text-center text-[#64748B]"
                        >
                          {typeof val === "boolean" ? (
                            <span
                              className="text-lg"
                              style={{
                                color: val ? "#2AD796" : "#b91c1c",
                              }}
                            >
                              {val ? "✓" : "✗"}
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQs (si aplica) */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-700 text-[#212A45] mb-12 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {config.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="p-4 bg-white border border-[#EEEEEE] rounded-lg group"
                >
                  <summary className="cursor-pointer font-600 text-[#212A45] flex justify-between items-center">
                    {faq.question}
                    <span className="text-[#64748B] group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
