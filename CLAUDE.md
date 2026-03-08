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
npm run dev         # Servidor de desarrollo (localhost:3000)
npm run lint        # Verificar código con ESLint
npm run build       # Build de producción
npm start           # Servidor de producción
```

---

## Stack Técnico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 16.1 | App Router |
| React | 19.2.3 | Server/Client Components |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 4 | Estilos |
| Vercel Analytics | - | Analytics + Speed Insights |
| Resend | - | Servicio de email |
| HubSpot | - | CRM y formularios |

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
├── documentacion/              # Documentación de API y guías
└── [páginas estáticas]         # privacidad, terminos, cookies, seguridad, contacto, nosotros
```

### Componentes (`src/components/`)

~37 componentes React. Los principales:
- `Header.tsx` - Navegación con dropdowns (client component)
- `Footer.tsx` - Footer del sitio
- `ContactForm.tsx` - Formulario con HubSpot
- `NewsletterForm.tsx` - Signup de newsletter
- `Hero.tsx` / `HeroRegulated.tsx` - Secciones hero
- `SimuladorPLD.tsx` / `TablaUmbrales.tsx` - Componentes interactivos de cumplimiento

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
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=sales@jaak.ai
CRM_WEBHOOK_URL=          # opcional
CRM_WEBHOOK_SECRET=       # opcional
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
