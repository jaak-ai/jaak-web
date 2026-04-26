'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'strict',
  fontFamily: 'inherit',
})

interface MermaidProps {
  chart: string
}

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const trimmed = chart.trim()
    if (!trimmed) return

    el.removeAttribute('data-processed')
    setError('')

    let cancelled = false
    mermaid
      .run({ nodes: [el] })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err))
      })

    return () => {
      cancelled = true
    }
  }, [chart])

  if (error) {
    return (
      <div className="my-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800">
        <p className="font-semibold mb-2">No se pudo renderizar el diagrama</p>
        <pre className="text-xs overflow-x-auto whitespace-pre-wrap">{error}</pre>
        <details className="mt-2">
          <summary className="cursor-pointer text-xs">Ver código fuente</summary>
          <pre className="mt-2 text-xs overflow-x-auto bg-white p-2 rounded">{chart}</pre>
        </details>
      </div>
    )
  }

  return (
    <div className="my-6 flex justify-center overflow-x-auto rounded-lg border border-gray-200 bg-white p-4">
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  )
}
