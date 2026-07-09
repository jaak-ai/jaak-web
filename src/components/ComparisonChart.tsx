"use client";

/**
 * ComparisonChart — Tabla comparativa data-driven
 *
 * Tabla limpia, data-dense pero legible.
 * Para mostrar ventajas de JAAK o variantes de producto.
 */

export interface ComparisonRow {
  feature: string;
  description?: string;
  jaak: string | boolean;
  competitors?: Record<string, string | boolean>;
}

export interface ComparisonChartConfig {
  title: string;
  subtitle?: string;
  rows: ComparisonRow[];
  competitorNames?: string[];
  highlightJaak?: boolean;
}

export default function ComparisonChart({
  config,
}: {
  config: ComparisonChartConfig;
}) {
  const competitorNames = config.competitorNames || ["Competidor A", "Competidor B"];

  const formatValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="text-[#2AD796] font-700">✓</span>
      ) : (
        <span className="text-[#b91c1c] font-700">✗</span>
      );
    }
    return val;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-800 text-[#212A45] mb-3">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              {config.subtitle}
            </p>
          )}
        </div>

        {/* Comparison Grid */}
        <div className="bg-white border border-[#EEEEEE] rounded-lg overflow-hidden">
          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-4 bg-[#F3F4F8] border-b border-[#EEEEEE]">
            <div className="px-6 py-4 col-span-1 md:col-span-1">
              <p className="text-xs font-700 text-[#64748B] uppercase tracking-wide">
                Característica
              </p>
            </div>
            <div
              className="px-6 py-4 text-center"
              style={{
                background: config.highlightJaak
                  ? "rgba(45,182,193,0.08)"
                  : undefined,
              }}
            >
              <p className="text-xs font-700 text-[#212A45] uppercase tracking-wide">
                JAAK
              </p>
            </div>
            {competitorNames.map((name) => (
              <div key={name} className="px-6 py-4 text-center">
                <p className="text-xs font-700 text-[#64748B] uppercase tracking-wide">
                  {name}
                </p>
              </div>
            ))}
          </div>

          {/* Rows */}
          {config.rows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-4 border-b border-[#EEEEEE] hover:bg-[#FAFAFA] transition-colors"
            >
              {/* Feature cell */}
              <div className="px-6 py-4 col-span-1 md:col-span-1 flex flex-col justify-center">
                <p className="font-600 text-[#212A45]">{row.feature}</p>
                {row.description && (
                  <p className="text-xs text-[#64748B] mt-1">{row.description}</p>
                )}
              </div>

              {/* JAAK value */}
              <div
                className="px-6 py-4 flex items-center justify-center"
                style={{
                  background: config.highlightJaak
                    ? "rgba(45,182,193,0.04)"
                    : undefined,
                }}
              >
                <span className="text-sm font-600 text-[#212A45]">
                  {formatValue(row.jaak)}
                </span>
              </div>

              {/* Competitor values */}
              {competitorNames.map((name) => {
                const val = row.competitors?.[name];
                return (
                  <div
                    key={name}
                    className="px-6 py-4 flex items-center justify-center"
                  >
                    <span className="text-sm text-[#64748B]">
                      {val !== undefined ? formatValue(val) : "—"}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-xs text-[#64748B] mt-6 text-center">
          Comparación basada en datos públicos de productos. Última actualización: 2026.
        </p>
      </div>
    </section>
  );
}
