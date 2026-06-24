# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**OBJETIVO ÚNICO**: desarrollo en **Next.js** (TypeScript). Foco en App Router, componentes React, server actions/route handlers, integración con APIs, estado, forms, validaciones, performance y accesibilidad. Todo lo demás es secundario.

---

## Rol y Alcance

Ingeniero senior de Next.js trabajando en un sitio web de marketing que consume APIs internas.

**Tu trabajo**:
1. Entender el bug/feature en términos de UI, estado, SSR/CSR, APIs y flujos de usuario
2. Proponer el cambio mínimo viable (sin re-arquitecturas)
3. Implementar respetando patrones del proyecto
4. Asegurar build + lint
5. **Siempre terminar con commit y push**

**Fuera de alcance**: Backend Go/gRPC/DB, infra (Terraform, k8s), suites e2e complejas.

---

## Comandos

```bash
npm ci              # Instalar dependencias (limpio); postinstall corre `contentlayer2 build`
npm run dev         # Dev: `contentlayer2 dev & next dev` (watch MDX + Next en localhost:3000)
npm run lint        # ESLint plano (`eslint`, NO `next lint`)
npm run build       # Build de producción (`contentlayer2 build && next build`)
npm start           # Servidor de producción
```

**Notas**:
- No hay tests automatizados ni framework de test configurado en el repo. La verificación obligatoria antes de commit es `npm run lint` + `npm run build` (el build falla si Contentlayer no genera los tipos MDX).
- Si el build se queja de tipos faltantes de docs, corre primero `npx contentlayer2 build` para regenerar `.contentlayer/generated/`.

---

## Stack Técnico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 16.1 | App Router |
| React | 19.2.3 | Server/Client Components |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 4 | Estilos |
| Contentlayer2 | 0.5.8 | Documentación MDX → páginas estáticas |
| FlexSearch | 0.8 | Búsqueda client-side en docs (`src/lib/docs/search.ts`) |
| Shiki | 4 | Syntax highlighting de bloques de código en docs |
| Mermaid | 11 | Diagramas en docs MDX |
| Vercel Analytics | - | Analytics + Speed Insights |
| Resend | - | Servicio de email |
| HubSpot | - | CRM y formularios |
| Cloudflare Turnstile | - | Protección de formularios (captcha) |
| Kairos Chat | - | Widget de chat para leads |

---

## Arquitectura del Proyecto

### Estructura de Páginas (App Router)

```
src/app/
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout (metadata, fonts, JSON-LD, analytics)
├── globals.css                 # CSS variables y clases utilitarias
├── robots.ts / sitemap.ts      # SEO automático
│
├── api/                        # Route handlers (POST → HubSpot/Resend). Ver sección API Routes
│   ├── contact/                # Form de contacto principal
│   ├── landing/                # Captura de leads de landings (CRM webhook + Resend)
│   ├── capacitacion/           # Form de webinar/capacitación → HubSpot
│   └── onboarding/             # Form de onboarding/autoservicio → HubSpot
│
├── docs/[[...slug]]/page.tsx   # Documentación dinámica (Contentlayer2 MDX). Sistema nuevo.
├── documentacion/              # Documentación legacy (NO migrar aquí; usar /docs)
│
├── signa/                      # Producto: Firma Electrónica (calculadora/, comparacion/, schema.tsx)
├── firma-electronica/          # Landing SEO Signa + variantes:
│   firma-electronica-biometrica|-kyc|-nom-151|-simple/   # páginas SEO por keyword
├── guardian/                   # Producto: Guardian
├── chronos/                    # Producto: Chronos
│
├── precios/                    # Precios (tabs por producto)
├── blog/                       # Posts del blog
├── soluciones/ · plataforma/ · cumplimiento/   # Casos de uso, features, regulatorias
├── recursos/                   # Recursos / contenido
│
├── bancos/ · financieras/ · inmobiliarias/ · autoservicio/   # Landings de conversión por industria
├── webinar/ · efisys-lab-connect/              # Landings de campaña
│
└── [páginas estáticas]         # privacidad, terminos, cookies, seguridad, contacto, nosotros
```

> **Importante**: `src/app/docs/` (Contentlayer) y `src/app/documentacion/` (legacy) coexisten. El sistema activo de documentación es `/docs`; `documentacion/` es legacy.

### Sistema de Documentación (Contentlayer2)

Fuente MDX en `content/docs/` (secciones: `verificar-identidad/` KYC, `firmar-documentos/` Signa, `productos/`, `integraciones/`, `sdks/`, `consultas-oficiales/`, `recursos/`, `extras/`, `jaak/`). El frontmatter (`title`, `description` requeridos; `category`, `order` opcionales) está definido en `contentlayer.config.ts`.

Contentlayer genera tipos en `.contentlayer/generated/`. **Importar desde `contentlayer2/generated`** (con el sufijo `2`), no `contentlayer/generated`:
```tsx
import { allDocs } from "contentlayer2/generated";
```

La lógica de docs vive en `src/lib/docs/` (`config.ts` URLs de APIs por entorno, `navigation.ts` prev/next y árbol, `search.ts` índice FlexSearch) y los componentes de render en `src/components/docs/` (`MDXContent`, `TableOfContents`, etc.).

### Componentes (`src/components/`)

~40 componentes React. Los principales:
- `Header.tsx` - Navegación con dropdowns (client component)
- `Footer.tsx` - Footer del sitio
- `ContactForm.tsx` - Formulario con HubSpot + Turnstile
- `NewsletterForm.tsx` - Signup de newsletter
- `Hero.tsx` / `HeroRegulated.tsx` - Secciones hero
- `SimuladorPLD.tsx` / `TablaUmbrales.tsx` - Componentes interactivos de cumplimiento

**Integraciones de terceros** (cargadas en root layout):
- `GoogleTagManager.tsx` - GTM head + body scripts
- `CloudflareTurnstile.tsx` - Protección anti-bot para forms
- `KairosSalesChat.tsx` - Widget de chat flotante

### Datos (`src/lib/`)

- `blog.ts` - Array de posts con interface `BlogPost`

---

## Patrones del Proyecto

### Server vs Client Components

```tsx
// Server Component (default) - para contenido estático
export default function Page() {
  return <div>...</div>;
}

// Client Component - solo cuando hay interactividad
"use client";
import { useState } from "react";
export default function Interactive() {
  const [state, setState] = useState(initialValue);
  // ...
}
```

### Import Aliases

```tsx
import { blogPosts } from "@/lib/blog";
import Header from "@/components/Header";
```

### CSS Variables (globals.css)

```css
--primary: #0066ff;      /* Azul JAAK */
--accent: #00d4aa;       /* Cyan/Teal */
--text-dark: #111827;
--text-gray: #6b7280;
```

Clases utilitarias: `.btn-primary`, `.btn-secondary`, `.btn-blue`, `.btn-cyan`, `.btn-green`, `.section-padding`, `.card`, `.hover-lift`, `.gradient-bg`, `.animate-fade-in-up`

---

## API Routes

Cuatro route handlers `POST`, todos en `src/app/api/*/route.ts`:

| Ruta | Destino | Notas |
|------|---------|-------|
| `/api/contact` | HubSpot Forms API | Form de contacto principal |
| `/api/capacitacion` | HubSpot Forms API | Form de webinar/capacitación |
| `/api/onboarding` | HubSpot Forms API | Form de onboarding/autoservicio |
| `/api/landing` | CRM webhook + Resend (fallback) | Captura de leads de landings; sin HubSpot |

**HubSpot Config** (compartido por contact/capacitacion/onboarding; el Portal y Form ID están **hardcodeados** en cada route):
- Portal ID: `19644701`
- Contact Form ID: `b4e48141-58a0-4208-9c42-641bb2731a40`
- Newsletter Form ID: `db2a19a3-8be3-4f92-a0f8-7b6525ebd7d8`

`ContactRequest` (campos requeridos: `name`, `email`, `phone`, `role`; opcionales: `company`, `message`). `/api/landing` envía al `CRM_WEBHOOK_URL` y, si no está configurado, intenta notificar por Resend.

---

## Variables de Entorno

Ver `.env.example`:

```bash
# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=sales@jaak.ai

# CRM (opcional)
CRM_WEBHOOK_URL=
CRM_WEBHOOK_SECRET=

# Analytics (Google Tag Manager)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Protección de formularios (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE=0x4AAAA...

# Chat widget (Kairos)
NEXT_PUBLIC_KAIROS_WIDGET_URL=https://chat.kairos.jaak.ai/widget.js
NEXT_PUBLIC_KAIROS_TENANT_ID=jaak
```

---

## Reglas de Implementación

### Estados obligatorios para pantallas con API
- `loading` - estado de carga
- `success` - datos recibidos
- `empty` - sin datos
- `error` - mensaje accionable

### Tipado
- No usar `any` salvo último recurso con comentario
- Definir interfaces para requests/responses

### SSR/CSR
- `"use client"` solo cuando se necesite interacción
- Respetar caching/revalidate existente

### Seguridad
- No loguear tokens
- Solo `NEXT_PUBLIC_*` para secrets del cliente
- Sanitizar HTML dinámico

### Performance
- Usar `next/image` donde aplique
- Evitar renders innecesarios
- No agregar librerías pesadas

---

## Guías de Contenido

- **Idioma**: Español (mercado mexicano - `es_MX`)
- **Tono**: Formal "usted" para comunicación empresarial
- **Términos regulatorios**: CNBV, LFPIORPI, UIF, NOM-151, AML, PLD

---

## SEO

- JSON-LD estructurado en root layout y páginas de producto
- Sitemap dinámico en `/sitemap.xml`
- RSS feed en `/rss.xml`
- Metadata con OpenGraph en todas las páginas

---

## Deployment

**Vercel**:
- Builds automáticos en push
- Preview deployments para PRs
- Producción en https://jaak.ai
- Node.js >= 20.0.0
