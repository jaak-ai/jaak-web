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
        ],
      },
      {
        title: 'API Reference',
        items: [
          { title: 'Sesiones', href: '/docs/verificar-identidad/api/sesiones' },
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
    title: 'Recursos',
    items: [
      { title: 'Webhooks', href: '/docs/recursos/webhooks' },
      { title: 'Errores', href: '/docs/recursos/errores' },
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
