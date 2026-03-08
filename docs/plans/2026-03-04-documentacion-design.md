# Diseño: Nueva Sección de Documentación JAAK

**Fecha:** 2026-03-04
**Estado:** Aprobado
**Autor:** Claude + Javier Moya

## Resumen Ejecutivo

Migrar la documentación existente en docs.jaak.ai al sitio web principal de JAAK (jaak.ai), integrando:
- Documentación de KYC (verificación de identidad) desde docs.jaak.ai
- Documentación de Signa (firma electrónica) desde el OpenAPI spec
- Referencia de API interactiva con "Try it" sandbox

## Objetivos

1. **Unificar** toda la documentación técnica en jaak.ai/docs
2. **Organizar por caso de uso** para facilitar la navegación
3. **Referencia interactiva** con ejemplos de código y sandbox
4. **SEO optimizado** con páginas estáticas generadas en build time

## Enfoque Técnico

**Stack elegido:** MDX + Componentes Interactivos

- **MDX** para contenido (Markdown + React)
- **Contentlayer** para procesamiento de MDX
- **Shiki** para syntax highlighting
- **FlexSearch** para búsqueda client-side
- **Componentes custom** para API reference interactiva

## Arquitectura de Información

```
/docs
├── / (Inicio, Autenticación, Ambientes)
│
├── /verificar-identidad
│   ├── /introduccion
│   ├── /guia-rapida
│   ├── /conceptos (tipos-verificacion, documentos, estados)
│   ├── /api (sesiones, verificaciones, liveness, one-to-one, documentos)
│   └── /sdks (ios, android, web)
│
├── /firmar-documentos
│   ├── /introduccion
│   ├── /guia-rapida
│   ├── /conceptos (tipos-firma, plantillas, firmantes, audit-trail)
│   ├── /api (autenticacion, plantillas, envios, firmantes, empresas, certificados, almacenamiento)
│   └── /webhooks
│
├── /consultas-oficiales
│   ├── /introduccion
│   └── /api (ine, sat-rfc, renapo-curp, listas-pld)
│
└── /recursos
    ├── /webhooks
    ├── /errores
    ├── /rate-limits
    ├── /changelog
    └── /sandbox
```

## Estructura de Archivos

```
src/
├── app/docs/
│   ├── layout.tsx              # DocsLayout con sidebar
│   ├── page.tsx                # /docs (inicio)
│   ├── [[...slug]]/page.tsx    # Catch-all para rutas MDX
│   └── api/proxy/route.ts      # Proxy para Try It sandbox
│
├── components/docs/
│   ├── Layout/
│   │   ├── DocsLayout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TableOfContents.tsx
│   │   └── Breadcrumb.tsx
│   ├── Content/
│   │   ├── MDXComponents.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Callout.tsx
│   │   ├── Tabs.tsx
│   │   └── Steps.tsx
│   ├── API/
│   │   ├── Endpoint.tsx
│   │   ├── ParamsTable.tsx
│   │   ├── ResponseSchema.tsx
│   │   ├── TryIt.tsx
│   │   └── HttpMethod.tsx
│   └── Navigation/
│       ├── SearchModal.tsx
│       ├── VersionSelector.tsx
│       └── PrevNext.tsx
│
├── content/docs/               # Archivos MDX (~45 páginas)
│   ├── index.mdx
│   ├── verificar-identidad/
│   ├── firmar-documentos/
│   ├── consultas-oficiales/
│   └── recursos/
│
├── lib/docs/
│   ├── mdx.ts
│   ├── navigation.ts
│   ├── search.ts
│   └── openapi.ts
│
└── data/openapi/
    ├── signa.yaml
    └── kyc.yaml
```

## Componentes de UI

### Endpoint Component
Muestra un endpoint de API completo con:
- Método HTTP + path
- Descripción
- Tabs: Parámetros | Respuestas | Ejemplos
- Botón "Try it"

### CodeBlock
- Syntax highlighting con Shiki
- Botón de copiar
- Soporte para múltiples lenguajes en tabs

### Callout
- Variantes: info, warning, danger, tip
- Iconos distintivos

### TryIt Sandbox
- Campos pre-llenados desde OpenAPI schema
- Selector de ambiente (sandbox/production)
- Response con syntax highlighting
- Proxy server-side para evitar CORS

## Fuentes de Contenido

| Sección | Fuente | Páginas |
|---------|--------|---------|
| Verificar identidad | docs.jaak.ai | ~15 |
| Firmar documentos | OpenAPI signa.yaml | ~20 |
| Consultas oficiales | docs.jaak.ai | ~5 |
| Recursos | Nuevo + docs.jaak.ai | ~5 |
| **Total** | | **~45** |

## APIs a Documentar

### Signa API (desde OpenAPI)
- **auth**: sign-in, sign-out, refresh-token (3 endpoints)
- **templates**: CRUD, clone, folders (7 endpoints)
- **submissions**: CRUD, cancel, download, audit-trail (8 endpoints)
- **submitters**: status, OTP, face-image (10 endpoints)
- **companies**: CRUD, activity, signers (8 endpoints)
- **signers**: CRUD, status, submissions, kyc-sessions (10 endpoints)
- **certificates**: CRUD, validate, FIEL, PSC (7 endpoints)
- **storage**: files, signed-url, download, preview (8 endpoints)
- **dashboard**: stats, pending (3 endpoints)
- **quotas**: status, subscription, plans (5 endpoints)
- **audit**: compliance-report, search (2 endpoints)
- **kyc-verifications**: CRUD (4 endpoints)
- **settings**: profile, company (4 endpoints)
- **webhooks**: kyc, stripe (2 endpoints)
- **psc-providers**: CRUD, test, set-default (7 endpoints)

**Total Signa:** ~88 endpoints

### KYC API (desde docs.jaak.ai)
- Sessions
- Verifications
- Liveness
- OneToOne
- Documents
- Blacklist

## Dependencias Nuevas

```json
{
  "contentlayer": "^0.3.4",
  "next-contentlayer": "^0.3.4",
  "@shikijs/rehype": "^1.0.0",
  "flexsearch": "^0.7.43",
  "yaml": "^2.3.4"
}
```

## Configuración de Ambientes

```typescript
const docsConfig = {
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
}
```

## SEO

- Metadata dinámica por página desde frontmatter MDX
- JSON-LD para artículos técnicos
- Sitemap actualizado con rutas /docs/*
- OpenGraph images

## Consideraciones

### Performance
- Páginas estáticas generadas en build time (SSG)
- Búsqueda client-side sin servidor adicional
- Lazy loading de componentes pesados (TryIt, CodeBlock)

### Mantenibilidad
- Contenido en MDX fácil de editar
- OpenAPI como source of truth para endpoints de Signa
- Componentes reutilizables

### Accesibilidad
- Navegación por teclado en sidebar y búsqueda
- Labels en todos los inputs
- Contraste adecuado en code blocks

## Fuera de Alcance

- Versionado de API (v1, v2) - fase posterior
- Internacionalización (i18n) - fase posterior
- Comentarios/feedback en documentación - fase posterior
- Autenticación para endpoints privados en Try It - fase posterior

## Métricas de Éxito

- Todas las páginas de docs.jaak.ai migradas
- API de Signa documentada completamente (88 endpoints)
- Búsqueda funcional con resultados relevantes
- Build sin errores, lint passing
- Lighthouse score > 90 en performance
