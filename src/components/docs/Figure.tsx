import type { ReactNode } from 'react'

interface FigureProps {
  src: string
  alt: string
  caption?: string
  /** Prioridad de carga (above the fold) */
  priority?: boolean
}

/**
 * Figura con marco, sombra suave y pie de foto.
 * Uso: <Figure src="/docs/alnitak/bench-resumen.png" alt="..." caption="..." />
 */
export function Figure({ src, alt, caption, priority = false }: FigureProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50/80 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="relative w-full bg-white">
        {/* next/image necesita width/height o fill; usamos img nativo para PNG de docs
            de tamaño variable sin forzar aspect ratio roto. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="mx-auto h-auto w-full max-w-full object-contain"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-gray-100 px-4 py-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

interface FigureGridProps {
  children: ReactNode
}

/** Dos figuras en fila en desktop. */
export function FigureGrid({ children }: FigureGridProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2">{children}</div>
  )
}
