# CLAUDE.md - AI Assistant Guide for jaak-web

## Project Overview

**jaak-web** is a Next.js marketing website for JAAK, a fintech/regtech platform providing KYC (Know Your Customer), KYB (Know Your Business), electronic signature, and compliance solutions for regulated institutions in Mexico.

- **Language**: Spanish (Mexican market - `es_MX`)
- **Domain**: https://jaak.ai
- **Framework**: Next.js 16.1 with App Router
- **React Version**: 19.2.3

## Quick Start

```bash
# Install dependencies (requires Node.js >= 20.0.0)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1 (App Router) |
| UI | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 |
| Analytics | Vercel Analytics + Speed Insights |
| CRM | HubSpot Forms API |
| Email | Resend SDK |
| Linting | ESLint 9 (next/core-web-vitals) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata & JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & CSS variables
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # XML sitemap generation
│   ├── api/
│   │   └── contact/route.ts    # Contact form API (HubSpot integration)
│   ├── blog/               # Blog posts (7 articles)
│   ├── soluciones/         # Industry-specific solution pages
│   ├── plataforma/         # Platform feature pages
│   ├── cumplimiento/       # Regulatory compliance pages
│   ├── documentacion/      # API & integration documentation
│   └── [legal pages]/      # privacidad, terminos, cookies, seguridad
├── components/             # 35 reusable React components
│   ├── Header.tsx          # Main navigation (client component)
│   ├── Footer.tsx          # Site footer
│   ├── ContactForm.tsx     # Form with HubSpot integration
│   ├── NewsletterForm.tsx  # Newsletter signup
│   └── [feature components]
├── lib/
│   └── blog.ts             # Blog post data & types
public/
└── images/                 # Static assets (logos, icons, blog images)
```

## Key Conventions

### Component Patterns

1. **Server Components (default)**: Used for pages and static content
2. **Client Components**: Use `"use client"` directive for interactive components
   - Examples: `Header.tsx`, `ContactForm.tsx`, `NewsletterForm.tsx`

```tsx
// Client component example
"use client";

import { useState } from "react";

export default function InteractiveComponent() {
  const [state, setState] = useState(initialValue);
  // ...
}
```

### File Naming

- **Components**: PascalCase (`ContactForm.tsx`, `ClientLogos.tsx`)
- **Pages**: `page.tsx` in route directories
- **API Routes**: `route.ts` in api directories
- **Utilities**: camelCase (`blog.ts`)

### Import Aliases

Use `@/*` for imports from `src/`:

```tsx
import { blogPosts } from "@/lib/blog";
import Header from "@/components/Header";
```

### Styling

Tailwind CSS with custom CSS variables defined in `globals.css`:

```css
/* Primary brand colors */
--primary: #0066ff;      /* Blue */
--accent: #00d4aa;       /* Cyan/Teal */
--text-dark: #111827;
--text-gray: #6b7280;
```

Custom utility classes available:
- `.btn-primary`, `.btn-secondary`, `.btn-blue`, `.btn-cyan`, `.btn-green`
- `.section-padding`, `.card`, `.hover-lift`
- `.gradient-bg`, `.gradient-bg-light`
- `.animate-fade-in-up`

### Page Metadata

Use Next.js Metadata API:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title - JAAK",
  description: "Page description in Spanish",
  openGraph: {
    title: "Page Title - JAAK",
    description: "Page description",
    url: "https://jaak.ai/page-path",
  },
};
```

## API Routes

### Contact Form (`/api/contact`)

POST endpoint that submits to HubSpot Forms API:

```typescript
// Request body
{
  name: string;      // Required
  email: string;     // Required
  phone: string;     // Required
  role: string;      // Required
  company?: string;  // Optional
  message?: string;  // Optional
}
```

**HubSpot Configuration**:
- Portal ID: `19644701`
- Contact Form ID: `b4e48141-58a0-4208-9c42-641bb2731a40`
- Newsletter Form ID: `db2a19a3-8be3-4f92-a0f8-7b6525ebd7d8`

## Blog System

Blog posts are defined in `src/lib/blog.ts`:

```typescript
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;        // Human readable: "13 de enero, 2026"
  dateISO: string;     // ISO format: "2026-01-13"
  category: string;    // Análisis, KYC, Regulación, Seguridad, Fraude, Onboarding, Compliance
  slug: string;        // URL slug
  readTime: string;    // "8 min"
  image?: string;      // Optional featured image path
}
```

Blog categories with colors are also defined in `categoryColors` map.

## Environment Variables

Required in `.env.local` (see `.env.example`):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx  # Email service (optional)
CONTACT_EMAIL=sales@jaak.ai              # Contact email
CRM_WEBHOOK_URL=                         # Optional CRM integration
CRM_WEBHOOK_SECRET=                      # Optional CRM secret
```

## Content Guidelines

### Language

- All content is in **Spanish** targeting the Mexican market
- Use formal "usted" form for business communication
- Key regulatory terms: CNBV, LFPIORPI, UIF, NOM-151, AML, PLD

### SEO

- Comprehensive JSON-LD structured data in root layout
- Dynamic sitemap at `/sitemap.xml`
- RSS feed at `/rss.xml`
- All pages have proper metadata with OpenGraph tags

## Development Notes

### Adding a New Page

1. Create directory in `src/app/[route-name]/`
2. Add `page.tsx` with metadata export
3. Use server components by default
4. Add to sitemap in `src/app/sitemap.ts` if needed

### Adding a New Component

1. Create file in `src/components/ComponentName.tsx`
2. Use PascalCase naming
3. Add `"use client"` only if needed for interactivity
4. Import using `@/components/ComponentName`

### Adding a Blog Post

1. Add entry to `blogPosts` array in `src/lib/blog.ts`
2. Create page directory: `src/app/blog/[slug]/page.tsx`
3. Add featured image to `public/images/blog/`
4. Blog listing page auto-updates from the array

## Common Tasks

### Run Development Server
```bash
npm run dev
# Opens at http://localhost:3000
```

### Check for Lint Errors
```bash
npm run lint
```

### Build for Production
```bash
npm run build
npm start
```

## External Integrations

1. **Vercel** - Hosting and deployment (inferred from analytics packages)
2. **HubSpot** - CRM and form submissions
3. **Resend** - Email service (configured but minimal usage)

## Important Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, fonts, analytics, JSON-LD |
| `src/app/globals.css` | Global styles and CSS variables |
| `src/components/Header.tsx` | Main navigation with dropdowns |
| `src/components/Footer.tsx` | Site footer |
| `src/lib/blog.ts` | Blog post data and types |
| `src/app/api/contact/route.ts` | Contact form API endpoint |

## Testing

No automated testing is currently configured. Manual testing is required for:
- Form submissions (contact form, newsletter)
- Navigation and responsive design
- SEO metadata verification

## Deployment

The project is configured for Vercel deployment:
- Automatic builds on push
- Preview deployments for PRs
- Production at https://jaak.ai
