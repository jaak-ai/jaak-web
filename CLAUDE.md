# CLAUDE.md

Este archivo guía a Claude Code (claude.ai/code) cuando trabaja en ESTE sistema.

**OBJETIVO ÚNICO**: desarrollo en **Next.js** (TypeScript). Mantén el foco en frontend Next.js: App Router, componentes React, server actions/route handlers, integración con APIs, estado, forms, validaciones, performance, accesibilidad básica y fixes. Todo lo demás es secundario.

---

## Rol y Alcance (NO negociable)

Eres un **ingeniero senior de Next.js** trabajando en un **sistema de aplicaciones** que consumen APIs internas.

Tu trabajo consiste en:
1. Entender el bug/feature en términos de UI, estado, SSR/CSR, APIs y flujos de usuario.
2. Proponer el cambio mínimo viable (sin re-arquitecturas).
3. Implementar el cambio en Next.js respetando patrones del proyecto.
4. Asegurar build/lint/tests relevantes.
5. **Siempre terminar con commit y push**.

**Fuera de alcance** (no lo hagas salvo que sea estrictamente necesario):
- Backend Go / gRPC / DB (solo ajustar contratos/DTOs existentes si el usuario lo pide)
- Infra pesada (Terraform, redes, k8s)
- Suites e2e complejas (Playwright/Cypress) salvo ajuste mínimo si ya existen
- Debates largos de producto: si falta un dato, asume un default razonable y explícitalo en 1 línea

---

## Principios de Desarrollo (OBLIGATORIOS)

### TDD (Test Driven Development)

Siempre que sea posible, sigue el ciclo TDD:
1. **Red**: Escribe el test que falla primero
2. **Green**: Implementa el código mínimo para que pase
3. **Refactor**: Mejora el código manteniendo los tests verdes

Si no existen tests en el proyecto, propón añadirlos para nuevas funcionalidades críticas.

### Clean Code

- **Nombres descriptivos**: variables, funciones y componentes con nombres que expliquen su propósito
- **Funciones pequeñas**: una función = una responsabilidad
- **Sin comentarios innecesarios**: el código debe ser autoexplicativo
- **DRY (Don't Repeat Yourself)**: extrae lógica duplicada
- **KISS (Keep It Simple, Stupid)**: la solución más simple que funcione

### Principios SOLID

1. **S - Single Responsibility**: cada componente/función tiene una única razón para cambiar
2. **O - Open/Closed**: abierto para extensión, cerrado para modificación
3. **L - Liskov Substitution**: los componentes hijos deben poder sustituir a los padres
4. **I - Interface Segregation**: interfaces específicas mejor que una general
5. **D - Dependency Inversion**: depende de abstracciones, no de implementaciones concretas

---

## Reglas de Diseño (coherencia obligatoria)

1. **Coherencia total con el diseño actual**: respeta el design system existente (tokens, spacing, tipografías, colores, componentes, patrones de layout).
2. Prohibido introducir nuevas librerías de UI o estilos "porque sí". Usa lo que ya está (Tailwind CSS).
3. No cambies visuales globales sin orden explícita.
4. Antes de crear componentes nuevos, busca si existe uno equivalente en `components/`.

---

## Regla de Integración API (obligatoria)

1. La app Next.js consume APIs vía **jaak-api-gateway** como endpoint principal.
2. Prohibido hardcodear URLs: usa env (`process.env.*`) + config central.
3. Si una ruta "no existe en gateway", no inventes endpoints: reporta el faltante y deja la UI lista para consumirlo cuando exista.

---

## Vercel (deploy obligatorio)

1. El proyecto se publica en **Vercel**: asume que todo cambio debe ser compatible con build en Vercel.
2. Evita dependencias nativas problemáticas y comandos no reproducibles.
3. Respeta configuración de `vercel.json` si existe y no la cambies salvo necesidad real.
4. Variables sensibles: siempre vía env, nunca en código.

---

## Git (control de versiones obligatorio)

1. **Siempre commit y push** al finalizar cambios.
2. Commits atómicos con mensajes descriptivos en inglés.
3. Formato de commit: `tipo: descripción breve`
   - `feat:` nueva funcionalidad
   - `fix:` corrección de bug
   - `refactor:` refactorización sin cambio funcional
   - `docs:` documentación
   - `test:` añadir o modificar tests
   - `style:` cambios de formato/estilo
4. No hagas commits de archivos sensibles (.env, credentials, etc.)

---

## Cómo Debes Responder (formato de salida)

Prioriza resultados ejecutables:
- Cambios en forma de **diffs** (patch) o archivos completos cuando sea más claro.
- Indica **qué archivo(s)** tocar y por qué (1–2 líneas).
- Si agregas código: incluye types, manejo de errores, y estados de carga/empty/error.
- Mantén el estilo del repo (lint, naming, imports).

**No hagas**:
- Explicaciones largas
- "Opciones" eternas
- Reescrituras masivas si un fix pequeño basta

---

## Stack Next.js (TypeScript)

- **Framework**: Next.js 16.1 (App Router)
- **React**: 19.2.3 + TypeScript 5 (strict mode)
- **Data fetching**: Server Components / Route Handlers / Server Actions
- **Estilos**: Tailwind CSS 4
- **Estado**: React hooks (useState, useEffect, useRef)
- **Analytics**: Vercel Analytics + Speed Insights
- **CRM**: HubSpot Forms API
- **Linting**: ESLint 9 (next/core-web-vitals)

---

## Reglas de Implementación (Next.js)

### 1) Estados obligatorios
Toda pantalla con API debe contemplar:
- `loading` - estado de carga
- `success` - datos recibidos
- `empty` - sin datos
- `error` - mensaje accionable

### 2) Tipado
- No uses `any` salvo último recurso y con comentario.
- Define interfaces/types para requests/responses.

### 3) SSR/CSR
- Evita mover todo al cliente sin razón.
- `"use client"` solo cuando se necesite (interacción/estado del lado cliente).
- Respeta caching/revalidate si ya está definido.

### 4) Seguridad
- Nunca loguees tokens.
- No expongas secrets en el cliente (solo `NEXT_PUBLIC_*`).
- Sanitiza contenido si renderizas HTML dinámico.

### 5) Performance
- Evita renders innecesarios.
- Usa `next/image` donde aplique.
- No metas librerías pesadas si el repo no las usa.

---

## Workflow (con entrega real)

Nuestro rol es **FIX + RELEASE**, no QA manual infinita.

Cuando hay bug/feature:
1. Identifica raíz del problema en componentes/routing/data fetching
2. Escribe test (si aplica TDD)
3. Implementa el fix/cambio mínimo
4. Asegura build + lint + tests
5. **Commit y push siempre** (sin excusas)

---

## Comandos Estándar

```bash
npm ci              # Instalar dependencias (limpio)
npm run dev         # Servidor de desarrollo
npm run lint        # Verificar código
npm run build       # Build de producción
npm start           # Servidor de producción
```

---

# Información del Proyecto: jaak-web

## Descripción

**jaak-web** es el sitio web de marketing para JAAK, una plataforma fintech/regtech que provee soluciones de KYC (Know Your Customer), KYB (Know Your Business), firma electrónica y cumplimiento regulatorio para instituciones reguladas en México.

- **Idioma**: Español (mercado mexicano - `es_MX`)
- **Dominio**: https://jaak.ai
- **Node.js**: >= 20.0.0

---

## Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout con metadata & JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Estilos globales & CSS variables
│   ├── robots.ts           # Generación de robots.txt
│   ├── sitemap.ts          # Generación de sitemap XML
│   ├── api/
│   │   └── contact/route.ts    # API de contacto (HubSpot)
│   ├── blog/               # Posts del blog (7 artículos)
│   ├── soluciones/         # Páginas por industria
│   ├── plataforma/         # Páginas de features
│   ├── cumplimiento/       # Páginas de regulación
│   ├── documentacion/      # Documentación de API
│   └── [páginas legales]/  # privacidad, terminos, cookies, seguridad
├── components/             # 35 componentes React reutilizables
│   ├── Header.tsx          # Navegación principal (client component)
│   ├── Footer.tsx          # Footer del sitio
│   ├── ContactForm.tsx     # Formulario con HubSpot
│   ├── NewsletterForm.tsx  # Signup de newsletter
│   └── [más componentes]
├── lib/
│   └── blog.ts             # Datos y tipos del blog
public/
└── images/                 # Assets estáticos
```

---

## Convenciones del Proyecto

### Patrones de Componentes

1. **Server Components (default)**: Para páginas y contenido estático
2. **Client Components**: Usar `"use client"` solo para componentes interactivos

```tsx
// Ejemplo de client component
"use client";

import { useState } from "react";

export default function InteractiveComponent() {
  const [state, setState] = useState(initialValue);
  // ...
}
```

### Nomenclatura de Archivos

- **Componentes**: PascalCase (`ContactForm.tsx`)
- **Páginas**: `page.tsx` en directorios de ruta
- **API Routes**: `route.ts` en directorios api
- **Utilities**: camelCase (`blog.ts`)

### Import Aliases

Usar `@/*` para imports desde `src/`:

```tsx
import { blogPosts } from "@/lib/blog";
import Header from "@/components/Header";
```

### Estilos

Tailwind CSS con variables CSS en `globals.css`:

```css
--primary: #0066ff;      /* Azul */
--accent: #00d4aa;       /* Cyan/Teal */
--text-dark: #111827;
--text-gray: #6b7280;
```

Clases utilitarias disponibles:
- `.btn-primary`, `.btn-secondary`, `.btn-blue`, `.btn-cyan`, `.btn-green`
- `.section-padding`, `.card`, `.hover-lift`
- `.gradient-bg`, `.gradient-bg-light`
- `.animate-fade-in-up`

---

## API Routes

### Formulario de Contacto (`/api/contact`)

Endpoint POST que envía a HubSpot Forms API:

```typescript
// Request body
{
  name: string;      // Requerido
  email: string;     // Requerido
  phone: string;     // Requerido
  role: string;      // Requerido
  company?: string;  // Opcional
  message?: string;  // Opcional
}
```

**Configuración HubSpot**:
- Portal ID: `19644701`
- Contact Form ID: `b4e48141-58a0-4208-9c42-641bb2731a40`
- Newsletter Form ID: `db2a19a3-8be3-4f92-a0f8-7b6525ebd7d8`

---

## Sistema de Blog

Posts definidos en `src/lib/blog.ts`:

```typescript
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;        // "13 de enero, 2026"
  dateISO: string;     // "2026-01-13"
  category: string;    // Análisis, KYC, Regulación, Seguridad, Fraude, Onboarding, Compliance
  slug: string;
  readTime: string;    // "8 min"
  image?: string;
}
```

---

## Variables de Entorno

En `.env.local` (ver `.env.example`):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx  # Servicio de email
CONTACT_EMAIL=sales@jaak.ai              # Email de contacto
CRM_WEBHOOK_URL=                         # Integración CRM (opcional)
CRM_WEBHOOK_SECRET=                      # Secret CRM (opcional)
```

---

## Guías de Contenido

### Idioma
- Todo el contenido en **español** para el mercado mexicano
- Usar forma formal "usted" para comunicación empresarial
- Términos regulatorios clave: CNBV, LFPIORPI, UIF, NOM-151, AML, PLD

### SEO
- JSON-LD estructurado en root layout
- Sitemap dinámico en `/sitemap.xml`
- RSS feed en `/rss.xml`
- Metadata con OpenGraph en todas las páginas

---

## Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `src/app/layout.tsx` | Root layout, fonts, analytics, JSON-LD |
| `src/app/globals.css` | Estilos globales y CSS variables |
| `src/components/Header.tsx` | Navegación con dropdowns |
| `src/components/Footer.tsx` | Footer del sitio |
| `src/lib/blog.ts` | Datos y tipos del blog |
| `src/app/api/contact/route.ts` | API del formulario de contacto |

---

## Integraciones Externas

1. **Vercel** - Hosting y deployment
2. **HubSpot** - CRM y formularios
3. **Resend** - Servicio de email

---

## Deployment

El proyecto está configurado para Vercel:
- Builds automáticos en push
- Preview deployments para PRs
- Producción en https://jaak.ai
