import type { ReactNode } from 'react'

interface HighlightProps {
  title?: string
  children: ReactNode
}

/**
 * Banda de apertura para páginas de producto: acento azul JAAK, sin “objetivo”.
 */
export function Highlight({ title, children }: HighlightProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#0066ff]/15 bg-gradient-to-br from-[#0066ff]/[0.06] via-white to-gray-50 p-6 sm:p-8">
      {title ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#0066ff]">
          {title}
        </p>
      ) : null}
      <div className="text-base leading-relaxed text-gray-700 [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
