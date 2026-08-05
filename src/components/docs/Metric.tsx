import type { ReactNode } from 'react'

interface MetricProps {
  /** Valor principal (número o texto corto) */
  value: string
  /** Etiqueta debajo del valor */
  label: string
  /** Línea auxiliar opcional */
  hint?: string
}

/**
 * Tarjeta de métrica medida: valor grande + etiqueta.
 * Uso en MDX: <Metric value="~200 ms" label="p95 identify a 60 rps" />
 */
export function Metric({ value, label, hint }: MetricProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-shadow hover:shadow-md">
      <span className="font-mono text-3xl font-semibold tracking-tight text-gray-900 tabular-nums sm:text-4xl">
        {value}
      </span>
      <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
      {hint ? <span className="mt-1 text-xs text-gray-500 leading-snug">{hint}</span> : null}
    </div>
  )
}

interface MetricGridProps {
  children: ReactNode
}

/** Rejilla responsive de métricas (2–4 columnas). */
export function MetricGrid({ children }: MetricGridProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  )
}
