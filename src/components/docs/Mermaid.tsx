'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'strict',
  fontFamily: 'inherit',
})

const WATERMARK_URL = '/images/logos/jaak-logo-azul.png'

interface MermaidProps {
  chart: string
}

export function Mermaid({ chart }: MermaidProps) {
  const inlineRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string>('')
  const [zoomed, setZoomed] = useState(false)

  const renderInto = useCallback((el: HTMLDivElement | null) => {
    if (!el) return
    el.removeAttribute('data-processed')
    el.textContent = chart.trim()
    if (!el.textContent) return
    mermaid.run({ nodes: [el] }).catch((err: unknown) => {
      setError(err instanceof Error ? err.message : String(err))
    })
  }, [chart])

  useEffect(() => {
    setError('')
    renderInto(inlineRef.current)
  }, [renderInto])

  useEffect(() => {
    if (!zoomed) return
    renderInto(modalRef.current)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [zoomed, renderInto])

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
    <>
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="group relative my-6 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
        aria-label="Ampliar diagrama"
        style={{
          backgroundImage: `url(${WATERMARK_URL})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '40%',
          backgroundBlendMode: 'lighten',
        }}
      >
        <span className="pointer-events-none absolute right-3 top-3 rounded bg-gray-900/70 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Click para ampliar
        </span>
        <div
          ref={inlineRef}
          className="mermaid mx-auto flex min-h-[320px] w-full items-center justify-center [&_svg]:h-auto [&_svg]:max-h-[600px] [&_svg]:w-full [&_svg]:max-w-full"
        />
      </button>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Diagrama ampliado"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-900 shadow-lg hover:bg-white"
            aria-label="Cerrar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-[90vw] overflow-auto rounded-lg bg-white p-6"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${WATERMARK_URL})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '30%',
              backgroundBlendMode: 'lighten',
            }}
          >
            <div
              ref={modalRef}
              className="mermaid mx-auto flex w-full items-center justify-center [&_svg]:h-auto [&_svg]:w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
