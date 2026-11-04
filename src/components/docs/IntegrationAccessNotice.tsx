import Link from 'next/link'
import { INTEGRACION_COPY, INTEGRATION_CONTACT_HREF } from '@/config/commercial-copy'

interface Props {
  /** "intro": aclaración general. "requisito": requisito previo antes de obtener credenciales. */
  variant?: 'intro' | 'requisito'
}

/**
 * Aviso comercial de acceso a integraciones y ambientes de prueba (AUD-01, ajustado en AUD-02).
 * Solo presentación: no altera endpoints, ejemplos ni autenticación.
 */
export function IntegrationAccessNotice({ variant = 'intro' }: Props) {
  const isRequisito = variant === 'requisito'
  return (
    <aside
      role="note"
      className="not-prose mb-8 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-relaxed text-gray-700"
    >
      <p className="mb-1 font-semibold text-gray-900">
        {isRequisito ? 'Requisito previo' : INTEGRACION_COPY.docsTitulo}
      </p>
      {isRequisito ? (
        <p>{INTEGRACION_COPY.requisitoCredenciales}</p>
      ) : (
        INTEGRACION_COPY.docsDescripcion.map((parrafo) => (
          <p key={parrafo} className="mb-1">
            {parrafo}
          </p>
        ))
      )}
      <p className="mt-2">
        <Link href={INTEGRATION_CONTACT_HREF} className="font-semibold text-blue-700 underline underline-offset-2">
          {INTEGRACION_COPY.docsCta}
        </Link>
      </p>
    </aside>
  )
}
