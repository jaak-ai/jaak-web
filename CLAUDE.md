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
npm ci              # Instalar dependencias (limpio)
npm run dev         # Servidor de desarrollo (Contentlayer + Next.js en localhost:3000)
npm run lint        # Verificar código con ESLint
npm run build       # Build de producción (contentlayer2 build && next build)
npm start           # Servidor de producción
```

**Nota**: El dev server ejecuta Contentlayer2 en paralelo con Next.js para procesar archivos MDX de documentación.

---

## Stack Técnico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 16.1 | App Router |
| React | 19.2.3 | Server/Client Components |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 4 | Estilos |
| Contentlayer2 | 0.5.8 | Documentación MDX → páginas estáticas |
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
├── api/contact/route.ts        # POST → HubSpot Forms API
│
├── docs/[[...slug]]/page.tsx   # Documentación dinámica (Contentlayer2 MDX)
│
├── signa/                      # Producto: Firma Electrónica
│   ├── page.tsx                # Landing principal Signa
│   ├── calculadora/            # Calculadora de ahorro
│   ├── comparacion/            # Comparación vs competencia
│   └── schema.tsx              # JSON-LD structured data
│
├── precios/                    # Página de precios (tabs por producto)
├── blog/                       # Posts del blog (~10 artículos)
├── soluciones/                 # Páginas por caso de uso (6 páginas)
├── plataforma/                 # Páginas de features (4 páginas)
├── cumplimiento/               # Páginas regulatorias (6 páginas)
├── documentacion/              # Documentación de API y guías (legacy)
│
├── bancos/                     # Landing de conversión: Bancos
├── financieras/                # Landing de conversión: Financieras
├── inmobiliarias/              # Landing de conversión: Inmobiliarias
├── autoservicio/               # Landing de conversión: Autoservicio
│
└── [páginas estáticas]         # privacidad, terminos, cookies, seguridad, contacto, nosotros
```

### Sistema de Documentación (Contentlayer2)

```
content/docs/                   # Archivos MDX fuente
├── index.mdx                   # Página principal de docs
├── verificar-identidad/        # Sección KYC
│   ├── index.mdx
│   ├── guia-rapida.mdx
│   ├── conceptos/
│   └── api/
├── firmar-documentos/          # Sección Signa
└── recursos/                   # Webhooks, errores, sandbox
```

Contentlayer genera tipos en `.contentlayer/generated/` que se importan directamente:
```tsx
import { allDocs } from "contentlayer/generated";
```

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

### POST /api/contact

Envía datos a HubSpot Forms API:

```typescript
interface ContactRequest {
  name: string;      // Requerido
  email: string;     // Requerido
  phone: string;     // Requerido
  role: string;      // Requerido
  company?: string;
  message?: string;
}
```

**HubSpot Config**:
- Portal ID: `19644701`
- Contact Form ID: `b4e48141-58a0-4208-9c42-641bb2731a40`
- Newsletter Form ID: `db2a19a3-8be3-4f92-a0f8-7b6525ebd7d8`

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
