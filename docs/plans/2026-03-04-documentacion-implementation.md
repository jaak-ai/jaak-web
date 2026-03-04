# Documentación JAAK Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Crear una sección de documentación técnica completa en /docs con MDX, componentes interactivos para API reference, y contenido migrado de docs.jaak.ai + OpenAPI de Signa.

**Architecture:** App Router con catch-all route para MDX, componentes React para API reference interactiva, Contentlayer para procesamiento de MDX, y búsqueda client-side con FlexSearch.

**Tech Stack:** Next.js 16, MDX, Contentlayer, Shiki (syntax highlighting), FlexSearch, TypeScript

---

## Phase 1: Infraestructura Base

### Task 1: Instalar dependencias

**Files:**
- Modify: `package.json`

**Step 1: Instalar dependencias de MDX y utilidades**

```bash
npm install contentlayer next-contentlayer shiki flexsearch yaml rehype-slug rehype-autolink-headings
```

**Step 2: Instalar tipos**

```bash
npm install -D @types/flexsearch
```

**Step 3: Verificar instalación**

Run: `npm ls contentlayer`
Expected: contentlayer@x.x.x

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add documentation dependencies (contentlayer, shiki, flexsearch)"
```

---

### Task 2: Configurar Contentlayer

**Files:**
- Create: `contentlayer.config.ts`
- Modify: `next.config.ts`
- Modify: `tsconfig.json`

**Step 1: Crear configuración de Contentlayer**

```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: {
      type: 'enum',
      options: ['guia', 'concepto', 'api', 'sdk', 'recurso'],
      default: 'guia'
    },
    order: { type: 'number', default: 999 },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('docs/', ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath.replace('docs/', '')}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})
```

**Step 2: Actualizar next.config.ts**

```typescript
// next.config.ts
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  // existing config...
}

export default withContentlayer(nextConfig)
```

**Step 3: Actualizar tsconfig.json**

Agregar en `compilerOptions.paths`:
```json
{
  "compilerOptions": {
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": [".contentlayer/generated"]
}
```

**Step 4: Verificar que compila**

Run: `npm run build`
Expected: Build exitoso (puede mostrar warnings de que no hay contenido aún)

**Step 5: Commit**

```bash
git add contentlayer.config.ts next.config.ts tsconfig.json
git commit -m "feat(docs): configure contentlayer for MDX processing"
```

---

### Task 3: Crear estructura de directorios

**Files:**
- Create: `content/docs/index.mdx`
- Create: `src/lib/docs/config.ts`
- Create: `src/lib/docs/navigation.ts`

**Step 1: Crear directorio de contenido con página de inicio**

```bash
mkdir -p content/docs
```

```mdx
---
title: Documentación JAAK
description: Guías técnicas, referencia de API y recursos para integrar verificación de identidad y firma electrónica.
category: guia
order: 0
---

# Documentación JAAK

Bienvenido a la documentación técnica de JAAK. Aquí encontrarás todo lo necesario para integrar nuestras soluciones de verificación de identidad y firma electrónica.

## Primeros pasos

- [Verificar identidad](/docs/verificar-identidad) - KYC biométrico con prueba de vida
- [Firmar documentos](/docs/firmar-documentos) - Firma electrónica con validez legal
- [Consultas oficiales](/docs/consultas-oficiales) - INE, SAT, RENAPO, listas PLD

## Recursos

- [Webhooks](/docs/recursos/webhooks) - Recibe notificaciones en tiempo real
- [Errores](/docs/recursos/errores) - Códigos de error y soluciones
- [Sandbox](/docs/recursos/sandbox) - Ambiente de pruebas
```

**Step 2: Crear configuración de docs**

```typescript
// src/lib/docs/config.ts
export const docsConfig = {
  title: 'Documentación JAAK',
  description: 'Guías técnicas, referencia de API y recursos para integrar JAAK',

  apis: {
    signa: {
      name: 'Firma Electrónica',
      sandbox: 'https://signa.dev.jaak.ai',
      production: 'https://signa.jaak.ai',
    },
    kyc: {
      name: 'Verificación de Identidad',
      sandbox: 'https://api.dev.jaak.ai',
      production: 'https://api.jaak.ai',
    },
  },

  defaultEnvironment: 'sandbox' as const,
}

export type DocsConfig = typeof docsConfig
```

**Step 3: Crear estructura de navegación**

```typescript
// src/lib/docs/navigation.ts
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
  const index = flat.findIndex((item) => item.href === `/docs/${slug}` || item.href === '/docs' && slug === '')

  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  }
}
```

**Step 4: Commit**

```bash
git add content/docs/index.mdx src/lib/docs/
git commit -m "feat(docs): add content structure and navigation config"
```

---

## Phase 2: Componentes de Layout

### Task 4: Crear DocsLayout

**Files:**
- Create: `src/app/docs/layout.tsx`
- Create: `src/components/docs/Sidebar.tsx`
- Create: `src/components/docs/TableOfContents.tsx`

**Step 1: Crear Sidebar**

```typescript
// src/components/docs/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { docsNavigation, type NavItem } from '@/lib/docs/navigation'

function NavItems({ items, level = 0 }: { items: NavItem[]; level?: number }) {
  const pathname = usePathname()

  return (
    <ul className={level === 0 ? 'space-y-2' : 'mt-2 space-y-1 border-l border-gray-200 pl-4'}>
      {items.map((item, index) => {
        const isActive = item.href === pathname
        const hasChildren = item.items && item.items.length > 0

        return (
          <li key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className={`block py-1 text-sm transition-colors ${
                  isActive
                    ? 'font-semibold text-[#0066ff]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.title}
              </Link>
            ) : (
              <span className={`block py-1 text-sm font-medium ${level === 0 ? 'text-gray-900' : 'text-gray-700'}`}>
                {item.title}
              </span>
            )}
            {hasChildren && <NavItems items={item.items!} level={level + 1} />}
          </li>
        )
      })}
    </ul>
  )
}

export function Sidebar() {
  return (
    <nav className="w-64 flex-shrink-0 border-r border-gray-200 bg-white">
      <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto p-6">
        <NavItems items={docsNavigation} />
      </div>
    </nav>
  )
}
```

**Step 2: Crear TableOfContents**

```typescript
// src/components/docs/TableOfContents.tsx
'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = document.querySelectorAll('article h2, article h3')
    const items: Heading[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: parseInt(el.tagName[1]),
    }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="w-56 flex-shrink-0">
      <div className="sticky top-32">
        <h4 className="mb-4 text-sm font-semibold text-gray-900">En esta página</h4>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block text-sm transition-colors ${
                  heading.level === 3 ? 'pl-4' : ''
                } ${
                  activeId === heading.id
                    ? 'font-medium text-[#0066ff]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
```

**Step 3: Crear DocsLayout**

```typescript
// src/app/docs/layout.tsx
import { Sidebar } from '@/components/docs/Sidebar'
import { docsConfig } from '@/lib/docs/config'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: {
    default: docsConfig.title,
    template: `%s | ${docsConfig.title}`,
  },
  description: docsConfig.description,
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/jaak-logo-azul.png"
                alt="JAAK"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <Link
              href="/docs"
              className="text-sm font-semibold text-gray-900"
            >
              Documentación
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Buscar...
              <kbd className="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-xs">⌘K</kbd>
            </button>
            <Link
              href="https://platform.jaak.ai"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg bg-[#0066ff] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0052cc]"
            >
              Contactar
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
```

**Step 4: Verificar que compila**

Run: `npm run build`
Expected: Build exitoso

**Step 5: Commit**

```bash
git add src/app/docs/layout.tsx src/components/docs/
git commit -m "feat(docs): add layout with sidebar and table of contents"
```

---

### Task 5: Crear página catch-all para MDX

**Files:**
- Create: `src/app/docs/[[...slug]]/page.tsx`
- Create: `src/components/docs/MDXComponents.tsx`

**Step 1: Crear componentes MDX**

```typescript
// src/components/docs/MDXComponents.tsx
import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 text-4xl font-black text-gray-900">{children}</h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="mb-4 mt-12 text-2xl font-bold text-gray-900 scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="mb-3 mt-8 text-xl font-semibold text-gray-900 scroll-mt-24">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0066ff] hover:underline"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href || '#'} className="text-[#0066ff] hover:underline">
        {children}
      </Link>
    )
  },
  ul: ({ children }) => (
    <ul className="mb-4 list-disc pl-6 text-gray-600 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal pl-6 text-gray-600 space-y-2">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  code: ({ children, className }) => {
    // Inline code
    if (!className) {
      return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">
          {children}
        </code>
      )
    }
    // Code blocks are handled by CodeBlock component
    return <code className={className}>{children}</code>
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-[#0a0a0a] p-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-4 border-[#0066ff] pl-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-semibold text-gray-900">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-gray-200 px-4 py-2 text-gray-600">{children}</td>
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
}
```

**Step 2: Crear página catch-all**

```typescript
// src/app/docs/[[...slug]]/page.tsx
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from '@/components/docs/MDXComponents'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { findPrevNext } from '@/lib/docs/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

function getDocFromParams(slug?: string[]) {
  const slugPath = slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slug === slugPath || doc.slug === 'index' && slugPath === '')
  return doc
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slug === 'index' ? [] : doc.slug.split('/'),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getDocFromParams(slug)
  if (!doc) return {}

  return {
    title: doc.title,
    description: doc.description,
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getDocFromParams(slug)

  if (!doc) {
    notFound()
  }

  const MDXContent = useMDXComponent(doc.body.code)
  const { prev, next } = findPrevNext(doc.slug)

  return (
    <div className="flex">
      <article className="flex-1 px-8 py-12 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li>
              <Link href="/docs" className="hover:text-gray-900">
                Docs
              </Link>
            </li>
            {slug?.map((segment, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>/</span>
                <span className="capitalize">{segment.replace(/-/g, ' ')}</span>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <MDXContent components={mdxComponents} />

        {/* Prev/Next navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
          {prev ? (
            <Link
              href={prev.href!}
              className="group flex items-center gap-2 text-sm text-gray-600 hover:text-[#0066ff]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prev.title}
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={next.href!}
              className="group flex items-center gap-2 text-sm text-gray-600 hover:text-[#0066ff]"
            >
              {next.title}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </article>

      <TableOfContents />
    </div>
  )
}
```

**Step 3: Verificar que funciona**

Run: `npm run dev`
Navigate to: `http://localhost:3000/docs`
Expected: Página de docs con sidebar y contenido del index.mdx

**Step 4: Commit**

```bash
git add src/app/docs/[[...slug]]/ src/components/docs/MDXComponents.tsx
git commit -m "feat(docs): add MDX page rendering with catch-all route"
```

---

## Phase 3: Componentes de API Reference

### Task 6: Crear componentes de contenido

**Files:**
- Create: `src/components/docs/Callout.tsx`
- Create: `src/components/docs/CodeBlock.tsx`
- Create: `src/components/docs/Tabs.tsx`

**Step 1: Crear Callout**

```typescript
// src/components/docs/Callout.tsx
import { ReactNode } from 'react'

type CalloutType = 'info' | 'warning' | 'danger' | 'tip'

const styles: Record<CalloutType, { bg: string; border: string; icon: string; title: string }> = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-500',
    title: 'Información',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: 'text-yellow-500',
    title: 'Importante',
  },
  danger: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'text-red-500',
    title: 'Advertencia',
  },
  tip: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-500',
    title: 'Tip',
  },
}

const icons: Record<CalloutType, ReactNode> = {
  info: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  danger: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tip: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
}

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = styles[type]

  return (
    <div className={`my-6 rounded-lg border ${style.bg} ${style.border} p-4`}>
      <div className="flex items-start gap-3">
        <span className={style.icon}>{icons[type]}</span>
        <div>
          <p className="font-semibold text-gray-900">{title || style.title}</p>
          <div className="mt-1 text-sm text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Crear CodeBlock**

```typescript
// src/components/docs/CodeBlock.tsx
'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ children, language, title, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-4 overflow-hidden rounded-lg bg-[#0a0a0a]">
      {title && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          <span className="text-sm text-white/60">{title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-sm text-white/60 hover:text-white"
          >
            {copied ? (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copiado
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copiar
              </>
            )}
          </button>
        </div>
      )}
      <pre className={`overflow-x-auto p-4 text-sm ${!title ? 'relative' : ''}`}>
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 rounded bg-white/10 p-1.5 text-white/60 hover:bg-white/20 hover:text-white"
          >
            {copied ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        )}
        <code className="text-green-400">{children}</code>
      </pre>
    </div>
  )
}
```

**Step 3: Crear Tabs**

```typescript
// src/components/docs/Tabs.tsx
'use client'

import { useState, ReactNode } from 'react'

interface Tab {
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultIndex?: number
}

export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  return (
    <div className="my-4">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeIndex === index
                ? 'border-b-2 border-[#0066ff] text-[#0066ff]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeIndex].content}</div>
    </div>
  )
}

// Helper for code tabs
interface CodeTabsProps {
  children: { [key: string]: string }
}

export function CodeTabs({ children }: CodeTabsProps) {
  const tabs = Object.entries(children).map(([label, code]) => ({
    label,
    content: (
      <pre className="overflow-x-auto rounded-lg bg-[#0a0a0a] p-4 text-sm">
        <code className="text-green-400">{code}</code>
      </pre>
    ),
  }))

  return <Tabs tabs={tabs} />
}
```

**Step 4: Commit**

```bash
git add src/components/docs/Callout.tsx src/components/docs/CodeBlock.tsx src/components/docs/Tabs.tsx
git commit -m "feat(docs): add content components (Callout, CodeBlock, Tabs)"
```

---

### Task 7: Crear componentes de API Reference

**Files:**
- Create: `src/components/docs/api/HttpMethod.tsx`
- Create: `src/components/docs/api/Endpoint.tsx`
- Create: `src/components/docs/api/ParamsTable.tsx`
- Create: `src/components/docs/api/ResponseSchema.tsx`

**Step 1: Crear HttpMethod badge**

```typescript
// src/components/docs/api/HttpMethod.tsx
const methodColors: Record<string, string> = {
  GET: 'bg-green-100 text-green-700',
  POST: 'bg-blue-100 text-blue-700',
  PUT: 'bg-yellow-100 text-yellow-700',
  PATCH: 'bg-orange-100 text-orange-700',
  DELETE: 'bg-red-100 text-red-700',
}

interface HttpMethodProps {
  method: string
}

export function HttpMethod({ method }: HttpMethodProps) {
  const colorClass = methodColors[method.toUpperCase()] || 'bg-gray-100 text-gray-700'

  return (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-bold ${colorClass}`}>
      {method.toUpperCase()}
    </span>
  )
}
```

**Step 2: Crear Endpoint**

```typescript
// src/components/docs/api/Endpoint.tsx
import { HttpMethod } from './HttpMethod'

interface EndpointProps {
  method: string
  path: string
  description?: string
  auth?: 'bearer' | 'none' | 'api-key'
}

export function Endpoint({ method, path, description, auth = 'bearer' }: EndpointProps) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-3 bg-gray-50 px-4 py-3">
        <HttpMethod method={method} />
        <code className="text-sm font-mono text-gray-900">{path}</code>
        {auth !== 'none' && (
          <span className="ml-auto flex items-center gap-1 text-xs text-gray-500">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {auth === 'bearer' ? 'Bearer Token' : 'API Key'}
          </span>
        )}
      </div>
      {description && (
        <div className="px-4 py-3 text-sm text-gray-600">{description}</div>
      )}
    </div>
  )
}
```

**Step 3: Crear ParamsTable**

```typescript
// src/components/docs/api/ParamsTable.tsx
interface Param {
  name: string
  type: string
  required?: boolean
  description: string
  default?: string
}

interface ParamsTableProps {
  title?: string
  params: Param[]
}

export function ParamsTable({ title = 'Parámetros', params }: ParamsTableProps) {
  if (params.length === 0) return null

  return (
    <div className="my-6">
      <h4 className="mb-3 text-sm font-semibold text-gray-900">{title}</h4>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold text-gray-900">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-900">Tipo</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-900">Requerido</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-900">Descripción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {params.map((param, index) => (
              <tr key={index}>
                <td className="px-4 py-3">
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono">
                    {param.name}
                  </code>
                </td>
                <td className="px-4 py-3 text-gray-600">{param.type}</td>
                <td className="px-4 py-3">
                  {param.required ? (
                    <span className="text-green-600">✓</span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {param.description}
                  {param.default && (
                    <span className="ml-2 text-gray-400">
                      (default: <code className="text-xs">{param.default}</code>)
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

**Step 4: Crear ResponseSchema**

```typescript
// src/components/docs/api/ResponseSchema.tsx
'use client'

import { useState } from 'react'

interface SchemaProperty {
  name: string
  type: string
  description?: string
  properties?: SchemaProperty[]
}

interface ResponseSchemaProps {
  statusCode: number
  description: string
  schema?: SchemaProperty[]
  example?: object
}

export function ResponseSchema({ statusCode, description, schema, example }: ResponseSchemaProps) {
  const [showExample, setShowExample] = useState(false)

  const statusColor = statusCode >= 400 ? 'text-red-600' : 'text-green-600'

  return (
    <div className="my-4 rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between bg-gray-50 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className={`font-mono font-bold ${statusColor}`}>{statusCode}</span>
          <span className="text-sm text-gray-600">{description}</span>
        </div>
        {example && (
          <button
            onClick={() => setShowExample(!showExample)}
            className="text-sm text-[#0066ff] hover:underline"
          >
            {showExample ? 'Ver schema' : 'Ver ejemplo'}
          </button>
        )}
      </div>

      {showExample && example ? (
        <pre className="overflow-x-auto bg-[#0a0a0a] p-4 text-sm">
          <code className="text-green-400">{JSON.stringify(example, null, 2)}</code>
        </pre>
      ) : schema ? (
        <div className="p-4">
          <SchemaProperties properties={schema} />
        </div>
      ) : null}
    </div>
  )
}

function SchemaProperties({ properties, level = 0 }: { properties: SchemaProperty[]; level?: number }) {
  return (
    <div className={level > 0 ? 'ml-4 border-l border-gray-200 pl-4' : ''}>
      {properties.map((prop, index) => (
        <div key={index} className="py-1">
          <div className="flex items-center gap-2">
            <code className="text-sm font-mono text-gray-900">{prop.name}</code>
            <span className="text-xs text-gray-500">{prop.type}</span>
          </div>
          {prop.description && (
            <p className="text-sm text-gray-600">{prop.description}</p>
          )}
          {prop.properties && (
            <SchemaProperties properties={prop.properties} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  )
}
```

**Step 5: Crear barrel export**

```typescript
// src/components/docs/api/index.ts
export { HttpMethod } from './HttpMethod'
export { Endpoint } from './Endpoint'
export { ParamsTable } from './ParamsTable'
export { ResponseSchema } from './ResponseSchema'
```

**Step 6: Commit**

```bash
git add src/components/docs/api/
git commit -m "feat(docs): add API reference components (Endpoint, ParamsTable, ResponseSchema)"
```

---

## Phase 4: Contenido

### Task 8: Crear contenido de Firmar Documentos (API Signa)

**Files:**
- Create: `content/docs/firmar-documentos/index.mdx`
- Create: `content/docs/firmar-documentos/guia-rapida.mdx`
- Create: `content/docs/firmar-documentos/conceptos/tipos-firma.mdx`
- Create: `content/docs/firmar-documentos/api/autenticacion.mdx`
- Create: `content/docs/firmar-documentos/api/plantillas.mdx`
- Create: `content/docs/firmar-documentos/api/envios.mdx`

**Step 1: Crear página de introducción**

```mdx
---
title: Firmar documentos
description: API de firma electrónica con validez legal. Soporte para firma simple, avanzada, biométrica, FIEL y PSC.
category: guia
order: 0
---

# Firmar documentos

JAAK Signa es la solución de firma electrónica que te permite firmar documentos con validez legal completa en México.

## Tipos de firma disponibles

| Tipo | Descripción | Validez Legal |
|------|-------------|---------------|
| Simple | Firma con imagen de trazo | Básica |
| Avanzada | Firma + verificación OTP | Alta |
| Biométrica | Firma + verificación KYC facial | Máxima |
| FIEL | Firma con certificado SAT | Máxima (gobierno) |
| PSC | Firma con Prestador de Servicios de Certificación | Máxima |

## Flujo básico

1. **Crear plantilla** - Sube un PDF y define los campos de firma
2. **Crear envío** - Envía el documento a los firmantes
3. **Firmar** - Los firmantes completan su firma
4. **Descargar** - Obtén el documento firmado con audit trail

## Primeros pasos

- [Guía rápida](/docs/firmar-documentos/guia-rapida) - Tu primera firma en 5 minutos
- [Tipos de firma](/docs/firmar-documentos/conceptos/tipos-firma) - Cuándo usar cada tipo
- [API de autenticación](/docs/firmar-documentos/api/autenticacion) - Obtener tokens de acceso

## URLs base

| Ambiente | URL |
|----------|-----|
| Sandbox | `https://signa.dev.jaak.ai` |
| Producción | `https://signa.jaak.ai` |
```

**Step 2: Crear guía rápida**

```mdx
---
title: Guía rápida - Firma electrónica
description: Configura tu primera firma electrónica con JAAK Signa en 5 minutos.
category: guia
order: 1
---

import { Callout } from '@/components/docs/Callout'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Endpoint } from '@/components/docs/api/Endpoint'

# Guía rápida

Configura tu primera firma electrónica con JAAK Signa.

## 1. Autenticación

Obtén un token de acceso con tus credenciales:

<Endpoint method="POST" path="/api/v1/sign-in" auth="none" />

```bash
curl -X POST https://signa.dev.jaak.ai/api/v1/sign-in \
  -H "Content-Type: application/json" \
  -d '{
    "email": "tu@email.com",
    "password": "tu-password"
  }'
```

Respuesta:
```json
{
  "access_token": "eyJhbG...",
  "refresh_token": "eyJhbG...",
  "expires_in": 3600
}
```

<Callout type="warning">
  Guarda el `access_token` para usarlo en las siguientes llamadas. Expira en 1 hora.
</Callout>

## 2. Crear plantilla

Sube un PDF y crea una plantilla:

<Endpoint method="POST" path="/api/v1/templates" />

```bash
curl -X POST https://signa.dev.jaak.ai/api/v1/templates \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Contrato de prueba",
    "signature_type": "simple",
    "documents": [{
      "name": "contrato.pdf",
      "file": "base64_del_pdf..."
    }]
  }'
```

## 3. Crear envío

Envía el documento a los firmantes:

<Endpoint method="POST" path="/api/v1/submissions" />

```bash
curl -X POST https://signa.dev.jaak.ai/api/v1/submissions \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "template_id": 123,
    "submitters": [{
      "email": "firmante@email.com",
      "name": "Juan Pérez",
      "role": "Firmante"
    }],
    "send_emails": true
  }'
```

El firmante recibirá un email con el enlace para firmar.

## 4. Descargar documento firmado

Una vez firmado, descarga el PDF con audit trail:

<Endpoint method="GET" path="/api/v1/submissions/{id}/download" />

```bash
curl -X GET https://signa.dev.jaak.ai/api/v1/submissions/456/download \
  -H "Authorization: Bearer $TOKEN" \
  -o documento-firmado.pdf
```

## Próximos pasos

- [Tipos de firma](/docs/firmar-documentos/conceptos/tipos-firma) - Elige el nivel de seguridad adecuado
- [Webhooks](/docs/recursos/webhooks) - Recibe notificaciones cuando se complete una firma
```

**Step 3: Crear documentación de tipos de firma**

```mdx
---
title: Tipos de firma
description: Guía completa de los tipos de firma electrónica disponibles en JAAK Signa.
category: concepto
order: 0
---

import { Callout } from '@/components/docs/Callout'

# Tipos de firma

JAAK Signa soporta 5 tipos de firma electrónica, cada uno con diferentes niveles de seguridad y validez legal.

## Simple

Firma electrónica básica con imagen de trazo manuscrito.

**Características:**
- Captura de firma con el dedo o mouse
- Sin verificación de identidad adicional
- Válida para documentos internos

**Cuándo usar:**
- Documentos internos de la empresa
- Acuerdos de bajo riesgo
- Consentimientos simples

## Avanzada (OTP)

Firma con verificación de identidad mediante código OTP.

**Características:**
- Firma + código OTP enviado por email/SMS
- Vinculación del firmante con su email/teléfono
- Mayor nivel de no repudio

**Cuándo usar:**
- Contratos comerciales
- Acuerdos con terceros
- Documentos que requieren trazabilidad

## Biométrica

Firma con verificación de identidad KYC completa.

**Características:**
- Verificación facial con prueba de vida
- Validación de documento de identidad (INE)
- Máximo nivel de no repudio

**Cuándo usar:**
- Contratos de alto valor
- Operaciones financieras
- Cumplimiento regulatorio (LFPIORPI, CNBV)

<Callout type="tip">
  La firma biométrica genera evidencia legal completa que puede usarse en procedimientos judiciales.
</Callout>

## FIEL

Firma con certificado de Firma Electrónica Avanzada del SAT.

**Características:**
- Usa el certificado .cer y .key del contribuyente
- Validez legal máxima ante autoridades mexicanas
- Vinculación con RFC del firmante

**Cuándo usar:**
- Documentos fiscales
- Trámites gubernamentales
- Operaciones que requieren identificación fiscal

## PSC

Firma con certificado de Prestador de Servicios de Certificación.

**Características:**
- Certificado digital emitido por PSC autorizado
- Cumple con NOM-151
- Timestamping incluido

**Cuándo usar:**
- Documentos con requisitos legales específicos
- Contratos internacionales
- Cumplimiento NOM-151

## Comparativa

| Característica | Simple | Avanzada | Biométrica | FIEL | PSC |
|----------------|--------|----------|------------|------|-----|
| Verificación identidad | ❌ | Email/SMS | Facial + INE | Certificado SAT | Certificado PSC |
| No repudio | Bajo | Medio | Alto | Máximo | Máximo |
| Validez legal | Básica | Media | Alta | Máxima | Máxima |
| Cumple LFPIORPI | ❌ | ❌ | ✅ | ✅ | ✅ |
| Cumple NOM-151 | ❌ | ❌ | ✅ | ✅ | ✅ |
```

**Step 4: Crear documentación de API de autenticación**

```mdx
---
title: Autenticación
description: Endpoints de autenticación para la API de JAAK Signa.
category: api
order: 0
---

import { Endpoint } from '@/components/docs/api/Endpoint'
import { ParamsTable } from '@/components/docs/api/ParamsTable'
import { ResponseSchema } from '@/components/docs/api/ResponseSchema'
import { Callout } from '@/components/docs/Callout'

# Autenticación

La API de Signa usa autenticación Bearer JWT. Obtén tokens mediante el endpoint de sign-in.

## POST /api/v1/sign-in

Autentica un usuario y retorna tokens de acceso.

<Endpoint method="POST" path="/api/v1/sign-in" auth="none" description="Autentica un usuario y retorna tokens de acceso" />

<ParamsTable
  title="Body Parameters"
  params={[
    { name: 'email', type: 'string', required: true, description: 'Email del usuario' },
    { name: 'password', type: 'string', required: true, description: 'Contraseña del usuario' },
  ]}
/>

### Ejemplo

```bash
curl -X POST https://signa.dev.jaak.ai/api/v1/sign-in \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@empresa.com",
    "password": "mi-password-seguro"
  }'
```

### Respuesta exitosa

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "user": {
    "id": "user_123",
    "email": "usuario@empresa.com",
    "name": "Usuario Demo"
  }
}
```

<Callout type="warning">
  El `access_token` expira en 1 hora (3600 segundos). Usa el `refresh_token` para obtener un nuevo token sin volver a autenticar.
</Callout>

---

## POST /api/v1/refresh-token

Obtiene un nuevo access token usando el refresh token.

<Endpoint method="POST" path="/api/v1/refresh-token" auth="none" description="Refresca el token de acceso" />

<ParamsTable
  title="Body Parameters"
  params={[
    { name: 'refresh_token', type: 'string', required: true, description: 'Token de refresh obtenido en sign-in' },
  ]}
/>

### Ejemplo

```bash
curl -X POST https://signa.dev.jaak.ai/api/v1/refresh-token \
  -H "Content-Type: application/json" \
  -d '{
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }'
```

---

## POST /api/v1/sign-out

Invalida el refresh token del usuario.

<Endpoint method="POST" path="/api/v1/sign-out" description="Cierra la sesión e invalida el token" />

### Ejemplo

```bash
curl -X POST https://signa.dev.jaak.ai/api/v1/sign-out \
  -H "Authorization: Bearer $TOKEN"
```

---

## Uso del token

Incluye el `access_token` en el header `Authorization` de todas las requests:

```bash
curl -X GET https://signa.dev.jaak.ai/api/v1/templates \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Errores comunes

| Código | Mensaje | Solución |
|--------|---------|----------|
| 401 | Invalid credentials | Verifica email y password |
| 401 | Token expired | Usa refresh-token para obtener un nuevo token |
| 401 | Invalid token | El token es inválido o fue revocado |
```

**Step 5: Crear directorio y archivos**

```bash
mkdir -p content/docs/firmar-documentos/conceptos
mkdir -p content/docs/firmar-documentos/api
```

**Step 6: Commit**

```bash
git add content/docs/firmar-documentos/
git commit -m "feat(docs): add Signa documentation (intro, quick start, auth, concepts)"
```

---

### Task 9: Crear contenido de Verificar Identidad

**Files:**
- Create: `content/docs/verificar-identidad/index.mdx`
- Create: `content/docs/verificar-identidad/guia-rapida.mdx`
- Create: `content/docs/verificar-identidad/conceptos/tipos-verificacion.mdx`
- Create: `content/docs/verificar-identidad/api/sesiones.mdx`

(Contenido similar basado en docs.jaak.ai - se creará en el mismo patrón que Task 8)

**Step 1: Crear estructura de directorios**

```bash
mkdir -p content/docs/verificar-identidad/conceptos
mkdir -p content/docs/verificar-identidad/api
mkdir -p content/docs/verificar-identidad/sdks
```

**Step 2: Crear páginas MDX** (contenido extraído de docs.jaak.ai)

**Step 3: Commit**

```bash
git add content/docs/verificar-identidad/
git commit -m "feat(docs): add KYC verification documentation"
```

---

### Task 10: Crear contenido de Recursos

**Files:**
- Create: `content/docs/recursos/webhooks.mdx`
- Create: `content/docs/recursos/errores.mdx`
- Create: `content/docs/recursos/sandbox.mdx`

**Step 1: Crear directorio**

```bash
mkdir -p content/docs/recursos
```

**Step 2: Crear páginas de recursos**

**Step 3: Commit**

```bash
git add content/docs/recursos/
git commit -m "feat(docs): add resources documentation (webhooks, errors, sandbox)"
```

---

## Phase 5: Búsqueda y Finalización

### Task 11: Implementar búsqueda

**Files:**
- Create: `src/lib/docs/search.ts`
- Create: `src/components/docs/SearchModal.tsx`
- Modify: `src/app/docs/layout.tsx`

**Step 1: Crear utilidades de búsqueda**

```typescript
// src/lib/docs/search.ts
import FlexSearch from 'flexsearch'
import { allDocs } from 'contentlayer/generated'

export interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

let searchIndex: FlexSearch.Index | null = null

export function initSearchIndex() {
  if (searchIndex) return searchIndex

  searchIndex = new FlexSearch.Index({
    tokenize: 'forward',
    cache: true,
  })

  allDocs.forEach((doc, id) => {
    searchIndex!.add(id, `${doc.title} ${doc.description} ${doc.body.raw}`)
  })

  return searchIndex
}

export function search(query: string): SearchResult[] {
  if (!searchIndex) initSearchIndex()

  const results = searchIndex!.search(query, { limit: 10 })

  return results.map((id) => {
    const doc = allDocs[id as number]
    return {
      title: doc.title,
      description: doc.description,
      url: doc.url,
      category: doc.category,
    }
  })
}
```

**Step 2: Crear SearchModal**

```typescript
// src/components/docs/SearchModal.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { search, type SearchResult } from '@/lib/docs/search'

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  useEffect(() => {
    if (query.length > 1) {
      setResults(search(query))
    } else {
      setResults([])
    }
  }, [query])

  const handleSelect = useCallback((url: string) => {
    router.push(url)
    setIsOpen(false)
    setQuery('')
  }, [router])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="relative mx-auto mt-20 max-w-xl">
        <div className="rounded-lg bg-white shadow-2xl">
          <div className="flex items-center border-b border-gray-200 px-4">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar en la documentación..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border-0 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
              autoFocus
            />
            <kbd className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">ESC</kbd>
          </div>
          {results.length > 0 && (
            <ul className="max-h-96 overflow-y-auto p-2">
              {results.map((result, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSelect(result.url)}
                    className="w-full rounded-lg px-4 py-3 text-left hover:bg-gray-100"
                  >
                    <div className="text-sm font-medium text-gray-900">{result.title}</div>
                    <div className="text-sm text-gray-500">{result.description}</div>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {query.length > 1 && results.length === 0 && (
            <div className="p-4 text-center text-sm text-gray-500">
              No se encontraron resultados para &quot;{query}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
```

**Step 3: Agregar SearchModal al layout**

**Step 4: Commit**

```bash
git add src/lib/docs/search.ts src/components/docs/SearchModal.tsx src/app/docs/layout.tsx
git commit -m "feat(docs): add search functionality with FlexSearch"
```

---

### Task 12: Actualizar sitemap y navegación principal

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/components/Header.tsx`

**Step 1: Agregar rutas de docs al sitemap**

**Step 2: Actualizar enlace de Documentación en Header**

Cambiar el enlace de `/documentacion` a `/docs`

**Step 3: Commit**

```bash
git add src/app/sitemap.ts src/components/Header.tsx
git commit -m "feat(docs): update sitemap and navigation to use /docs"
```

---

### Task 13: Verificación final y build

**Step 1: Ejecutar lint**

Run: `npm run lint`
Expected: Sin errores

**Step 2: Ejecutar build**

Run: `npm run build`
Expected: Build exitoso

**Step 3: Verificar en desarrollo**

Run: `npm run dev`
Navigate to: `http://localhost:3000/docs`
Expected: Documentación completa funcionando

**Step 4: Commit final**

```bash
git add .
git commit -m "feat(docs): complete documentation section implementation"
```

**Step 5: Push**

```bash
git push origin main
```

---

## Resumen de Tasks

| # | Task | Archivos | Estimación |
|---|------|----------|------------|
| 1 | Instalar dependencias | package.json | S |
| 2 | Configurar Contentlayer | contentlayer.config.ts, next.config.ts | M |
| 3 | Crear estructura de directorios | content/docs/, src/lib/docs/ | M |
| 4 | Crear DocsLayout | src/app/docs/layout.tsx, Sidebar, TOC | L |
| 5 | Crear página catch-all para MDX | src/app/docs/[[...slug]]/page.tsx | M |
| 6 | Crear componentes de contenido | Callout, CodeBlock, Tabs | M |
| 7 | Crear componentes de API Reference | Endpoint, ParamsTable, ResponseSchema | L |
| 8 | Crear contenido Firmar Documentos | content/docs/firmar-documentos/ | XL |
| 9 | Crear contenido Verificar Identidad | content/docs/verificar-identidad/ | XL |
| 10 | Crear contenido Recursos | content/docs/recursos/ | M |
| 11 | Implementar búsqueda | SearchModal, search.ts | M |
| 12 | Actualizar sitemap y navegación | sitemap.ts, Header.tsx | S |
| 13 | Verificación final y build | — | S |

**Total: 13 tasks**
