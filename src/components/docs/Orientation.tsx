interface DocLink {
  title: string
  href: string
}

interface OrientationProps {
  /** A quién va dirigida la página. Una o varias figuras, separadas por " · ". */
  audience: string
  /** Qué sabe hacer el lector cuando termina la página. Una frase, en infinitivo. */
  goal: string
  /** Página que conviene haber leído antes. */
  before?: DocLink
  /** Lo que esta página NO cubre, con el enlace a la que sí lo cubre. */
  outOfScope?: DocLink[]
}

/**
 * Cabecera de orientación del manual de Alnitak.
 *
 * Existe por un motivo concreto: el manual es unlisted, así que el lector no
 * tiene sidebar general ni búsqueda para situarse, y llega a cualquier página
 * por enlace directo. Sin esta cabecera no sabe si la página es para él, qué
 * debería haber leído antes, ni dónde está lo que vino a buscar y aquí no está.
 */
export function Orientation({ audience, goal, before, outOfScope }: OrientationProps) {
  return (
    <aside
      aria-label="Orientación de la página"
      className="not-prose mb-10 overflow-hidden rounded-xl border border-gray-200 bg-gray-50/70"
    >
      <dl className="divide-y divide-gray-200">
        <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
          <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:w-32 sm:pt-0.5">
            Para quién
          </dt>
          <dd className="text-sm text-gray-700">{audience}</dd>
        </div>

        <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
          <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:w-32 sm:pt-0.5">
            Al terminar
          </dt>
          <dd className="text-sm text-gray-700">{goal}</dd>
        </div>

        {before && (
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:w-32 sm:pt-0.5">
              Antes, lee
            </dt>
            <dd className="text-sm text-gray-700">
              <a href={before.href} className="text-[#0066ff] hover:underline">
                {before.title}
              </a>
            </dd>
          </div>
        )}

        {outOfScope && outOfScope.length > 0 && (
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:w-32 sm:pt-0.5">
              Aquí no está
            </dt>
            <dd className="text-sm text-gray-700">
              <ul className="space-y-1">
                {outOfScope.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-[#0066ff] hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </aside>
  )
}
