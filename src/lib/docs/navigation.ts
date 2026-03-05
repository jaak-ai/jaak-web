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
    title: 'Verificar identidad',
    items: [
      { title: 'Introducción', href: '/docs/verificar-identidad' },
      { title: 'Guía rápida', href: '/docs/verificar-identidad/guia-rapida' },
      {
        title: 'Conceptos',
        items: [
          { title: 'Tipos de verificación', href: '/docs/verificar-identidad/conceptos/tipos-verificacion' },
          { title: 'Documentos soportados', href: '/docs/verificar-identidad/conceptos/documentos-soportados' },
          { title: 'Estados de sesión', href: '/docs/verificar-identidad/conceptos/estados-sesion' },
        ],
      },
      {
        title: 'API Reference',
        items: [
          { title: 'Sesiones', href: '/docs/verificar-identidad/api/sesiones' },
          { title: 'Verificaciones', href: '/docs/verificar-identidad/api/verificaciones' },
          { title: 'Liveness', href: '/docs/verificar-identidad/api/liveness' },
          { title: 'OneToOne', href: '/docs/verificar-identidad/api/one-to-one' },
          { title: 'Documentos', href: '/docs/verificar-identidad/api/documentos' },
        ],
      },
      {
        title: 'SDKs',
        items: [
          { title: 'iOS', href: '/docs/verificar-identidad/sdks/ios' },
          { title: 'Android', href: '/docs/verificar-identidad/sdks/android' },
          { title: 'Web', href: '/docs/verificar-identidad/sdks/web' },
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
          { title: 'Plantillas', href: '/docs/firmar-documentos/conceptos/plantillas' },
          { title: 'Firmantes', href: '/docs/firmar-documentos/conceptos/firmantes' },
          { title: 'Audit trail', href: '/docs/firmar-documentos/conceptos/audit-trail' },
        ],
      },
      {
        title: 'API Reference',
        items: [
          { title: 'Autenticación', href: '/docs/firmar-documentos/api/autenticacion' },
          { title: 'Plantillas', href: '/docs/firmar-documentos/api/plantillas' },
          { title: 'Envíos', href: '/docs/firmar-documentos/api/envios' },
          { title: 'Firmantes', href: '/docs/firmar-documentos/api/firmantes' },
          { title: 'Empresas', href: '/docs/firmar-documentos/api/empresas' },
          { title: 'Certificados', href: '/docs/firmar-documentos/api/certificados' },
          { title: 'Almacenamiento', href: '/docs/firmar-documentos/api/almacenamiento' },
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
          { title: 'INE', href: '/docs/consultas-oficiales/api/ine' },
          { title: 'SAT / RFC', href: '/docs/consultas-oficiales/api/sat-rfc' },
          { title: 'RENAPO / CURP', href: '/docs/consultas-oficiales/api/renapo-curp' },
          { title: 'Listas PLD', href: '/docs/consultas-oficiales/api/listas-pld' },
        ],
      },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { title: 'Webhooks', href: '/docs/recursos/webhooks' },
      { title: 'Errores', href: '/docs/recursos/errores' },
      { title: 'Rate Limits', href: '/docs/recursos/rate-limits' },
      { title: 'Changelog', href: '/docs/recursos/changelog' },
      { title: 'Sandbox', href: '/docs/recursos/sandbox' },
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
