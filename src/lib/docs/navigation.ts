export interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

export const docsNavigation: NavItem[] = [
  {
    title: 'Inicio',
    href: '/docs',
  },
  {
    title: 'JAAK',
    items: [
      { title: 'Quiénes somos', href: '/docs/jaak/quienes-somos' },
      { title: 'Conceptos clave', href: '/docs/jaak/conceptos-clave' },
      { title: 'Plataforma JAAK', href: '/docs/jaak/plataforma' },
      { title: 'Inicio de sesión', href: '/docs/jaak/inicio-sesion' },
    ],
  },
  {
    title: 'Verificar identidad',
    items: [
      { title: 'Manual JAAK KYC', href: '/docs/verificar-identidad' },
      { title: '¿Qué es KYC?', href: '/docs/verificar-identidad/que-es-kyc' },
      { title: 'Conociendo KYC JAAK', href: '/docs/verificar-identidad/conociendo-kyc' },
      { title: 'Cómo consumir KYC', href: '/docs/verificar-identidad/como-consumir' },
      { title: 'KYC vía Web (white label)', href: '/docs/verificar-identidad/via-web-white-label' },
      { title: 'Personalizar KYC Web', href: '/docs/verificar-identidad/personalizar-web' },
      { title: 'Notificaciones de sesión', href: '/docs/verificar-identidad/notificaciones' },
      {
        title: 'KYC vía API',
        items: [
          { title: 'Introducción', href: '/docs/verificar-identidad/api' },
          { title: 'Guía de integración', href: '/docs/verificar-identidad/api/guia-integracion' },
          { title: 'Paso 1 — Crear sesión', href: '/docs/verificar-identidad/api/paso-1-crear-sesion' },
          { title: 'Paso 2 — Short Key', href: '/docs/verificar-identidad/api/paso-2-short-key' },
          { title: 'Paso 3 — Geolocalización', href: '/docs/verificar-identidad/api/paso-3-geolocalizacion' },
          { title: 'Paso 4 — Verificación de documento', href: '/docs/verificar-identidad/api/paso-4-verificacion-documento' },
          { title: 'Paso 5 — OCR', href: '/docs/verificar-identidad/api/paso-5-ocr' },
          { title: 'Paso 6 — Listas oficiales y negras', href: '/docs/verificar-identidad/api/paso-6-listas-oficiales' },
          { title: 'Paso 7 — Verificación de vida', href: '/docs/verificar-identidad/api/paso-7-liveness' },
          { title: 'Paso 8 — Titularidad', href: '/docs/verificar-identidad/api/paso-8-titularidad' },
          { title: 'Paso 9 — Finalizar sesión', href: '/docs/verificar-identidad/api/paso-9-finalizar' },
        ],
      },
      {
        title: 'KYC vía Android',
        items: [
          { title: 'Introducción', href: '/docs/verificar-identidad/android' },
          { title: 'Guía de integración', href: '/docs/verificar-identidad/android/guia-integracion' },
          { title: 'Paso 1 — Short Key', href: '/docs/verificar-identidad/android/paso-1-short-key' },
          { title: 'Paso 2 — Geolocalización', href: '/docs/verificar-identidad/android/paso-2-geolocalizacion' },
          { title: 'Paso 3 — Verificación de documento', href: '/docs/verificar-identidad/android/paso-3-verificacion-documento' },
          { title: 'Paso 4 — OCR', href: '/docs/verificar-identidad/android/paso-4-ocr' },
          { title: 'Paso 5 — Listas oficiales y negras', href: '/docs/verificar-identidad/android/paso-5-listas-oficiales' },
          { title: 'Paso 6 — Verificación de vida', href: '/docs/verificar-identidad/android/paso-6-liveness' },
          { title: 'Paso 7 — Titularidad', href: '/docs/verificar-identidad/android/paso-7-titularidad' },
          { title: 'Paso 8 — Finalizar sesión', href: '/docs/verificar-identidad/android/paso-8-finalizar' },
        ],
      },
    ],
  },
  {
    title: 'Productos',
    items: [
      { title: 'Introducción', href: '/docs/productos' },
      { title: 'Document Verify', href: '/docs/productos/document-verify' },
      { title: 'Document OCR', href: '/docs/productos/document-ocr' },
      { title: 'Blacklist', href: '/docs/productos/blacklist' },
      { title: 'Liveness', href: '/docs/productos/liveness' },
      { title: 'One-to-One', href: '/docs/productos/one-to-one' },
    ],
  },
  {
    title: 'SDKs y herramientas',
    items: [
      { title: 'Introducción', href: '/docs/sdks' },
      {
        title: 'Web',
        items: [
          { title: 'Stamps', href: '/docs/sdks/web/stamps' },
          { title: 'Visage', href: '/docs/sdks/web/visage' },
          { title: 'Document Detector (deprecated)', href: '/docs/sdks/web/document-detector-deprecated' },
          { title: 'Face Detector (deprecated)', href: '/docs/sdks/web/face-detector-deprecated' },
        ],
      },
      {
        title: 'Android',
        items: [
          { title: 'Stamps', href: '/docs/sdks/android/stamps' },
          { title: 'Visage', href: '/docs/sdks/android/visage' },
          { title: 'Face Detector', href: '/docs/sdks/android/face-detector' },
          { title: 'Document Detector', href: '/docs/sdks/android/document-detector' },
        ],
      },
      {
        title: 'iOS',
        items: [
          { title: 'Stamps', href: '/docs/sdks/ios/stamps' },
          { title: 'Visage', href: '/docs/sdks/ios/visage' },
        ],
      },
    ],
  },
  {
    title: 'Firmar documentos',
    items: [
      { title: 'Introducción', href: '/docs/firmar-documentos' },
      { title: 'Guía rápida', href: '/docs/firmar-documentos/guia-rapida' },
      {
        title: 'Conceptos',
        items: [
          { title: 'Tipos de firma', href: '/docs/firmar-documentos/conceptos/tipos-firma' },
        ],
      },
      {
        title: 'API Reference',
        items: [
          { title: 'Autenticación', href: '/docs/firmar-documentos/api/autenticacion' },
        ],
      },
    ],
  },
  {
    title: 'Consultas oficiales',
    items: [
      { title: 'Introducción', href: '/docs/consultas-oficiales' },
      {
        title: 'API Reference',
        items: [
          { title: 'Listas PLD / AML', href: '/docs/consultas-oficiales/api/listas-pld' },
          { title: 'INE', href: '/docs/consultas-oficiales/api/ine' },
          { title: 'SAT / RFC', href: '/docs/consultas-oficiales/api/sat-rfc' },
          { title: 'RENAPO / CURP', href: '/docs/consultas-oficiales/api/renapo-curp' },
        ],
      },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { title: 'Webhooks', href: '/docs/recursos/webhooks' },
      { title: 'Manual de webhooks KYC', href: '/docs/recursos/webhooks-kyc' },
      { title: 'Errores', href: '/docs/recursos/errores' },
      { title: 'Sandbox', href: '/docs/recursos/sandbox' },
      { title: 'Catálogo Sandbox Request IDs', href: '/docs/recursos/sandbox-request-ids' },
    ],
  },
  {
    title: 'Extras',
    items: [
      { title: 'Glosario', href: '/docs/extras/glosario' },
      { title: 'Documentos soportados — América', href: '/docs/extras/documentos-america' },
      { title: 'Documentos soportados — Europa', href: '/docs/extras/documentos-europa' },
      { title: 'Tipos de documentos', href: '/docs/extras/tipos-documentos' },
      { title: 'Captura óptima de documentos', href: '/docs/extras/captura-optima' },
    ],
  },
]

export function flattenNavigation(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => {
    if (item.items) {
      return [item, ...flattenNavigation(item.items)]
    }
    return [item]
  })
}

export function findPrevNext(slug: string): { prev?: NavItem; next?: NavItem } {
  const flat = flattenNavigation(docsNavigation).filter((item) => item.href)
  const index = flat.findIndex((item) => item.href === `/docs/${slug}` || (item.href === '/docs' && slug === ''))

  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  }
}
