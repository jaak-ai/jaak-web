# CLAUDE.md - AI Assistant Guide for jaak-web

## Project Overview

**JAAK** is a marketing website for an identity verification and compliance platform serving Mexican financial institutions and regulated enterprises. The platform offers KYC (Know Your Customer), KYB (Know Your Business), electronic signatures, and regulatory compliance solutions.

**Live Site:** https://jaak.ai

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.0 | React meta-framework (App Router) |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 4.x | Utility-first styling |
| Node.js | >= 20.0.0 | Runtime requirement |
| Resend | 6.6.0 | Email service (optional) |
| Vercel Analytics | 1.6.1 | Web analytics |
| ESLint | 9.x | Code linting |

## Project Structure

```
jaak-web/
├── src/
│   ├── app/                    # Next.js App Router (pages and routes)
│   │   ├── layout.tsx          # Root layout with metadata, fonts, analytics
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles and CSS variables
│   │   ├── robots.ts           # SEO robots configuration
│   │   ├── sitemap.ts          # Dynamic XML sitemap
│   │   ├── api/                # API routes
│   │   │   └── contact/        # HubSpot form submission endpoint
│   │   ├── plataforma/         # Platform feature pages
│   │   ├── soluciones/         # Solution pages by use case
│   │   ├── cumplimiento/       # Compliance/regulatory pages
│   │   ├── documentacion/      # Documentation and guides
│   │   ├── blog/               # Blog posts (static pages)
│   │   └── [legal pages]/      # privacidad, terminos, cookies, seguridad
│   ├── components/             # Reusable React components (35+ components)
│   └── lib/                    # Utilities and shared code
│       └── blog.ts             # Blog post metadata and types
├── public/                     # Static assets (images, logos, favicons)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── .env.example
```

## Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Key Conventions

### File and Component Naming

- **Pages:** Use `page.tsx` in route directories (Next.js App Router convention)
- **Components:** PascalCase filenames matching component name (e.g., `ContactForm.tsx`)
- **Utilities:** camelCase filenames (e.g., `blog.ts`)
- **Routes:** Lowercase with hyphens for URL paths (e.g., `/verificacion-identidad`)

### Component Patterns

1. **Server Components (default):** Most pages and components are server-rendered
2. **Client Components:** Use `"use client"` directive for interactive components (forms, state)
3. **Component Structure:**
   ```tsx
   // Server component example
   import Header from "@/components/Header";

   export default function PageName() {
     return (
       <>
         <Header />
         <main>
           {/* Page content */}
         </main>
         <Footer />
       </>
     );
   }
   ```

4. **Client Component with State:**
   ```tsx
   "use client";

   import { useState } from "react";

   export default function InteractiveComponent() {
     const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
     // ...
   }
   ```

### Import Conventions

- Use the `@/` path alias for imports from `src/`:
  ```tsx
  import Header from "@/components/Header";
  import { blogPosts } from "@/lib/blog";
  ```

### Styling Guidelines

**CSS Variables (defined in globals.css):**
```css
--primary: #212A45        /* Dark blue - main brand */
--primary-dark: #0E1133   /* Darker blue */
--accent: #2DB6C1         /* Cyan/teal - CTAs */
--accent-hover: #25969f   /* Cyan hover */
--accent-green: #2AD796   /* Green - success states */
--text-dark: #212A45
--text-body: #4A5568
--text-muted: #64748B
--section-alt: #FAFAFA
--section-light: #F3F4F8
--border-light: #EEEEEE
```

**Button Classes:**
- `.btn-primary` - Cyan background (main CTA)
- `.btn-secondary` - Transparent with border
- `.btn-green` - Green background
- `.btn-cyan` - Large cyan button
- `.btn-blue` - Primary blue background

**Utility Classes:**
- `.section-padding` - Responsive section padding (80px mobile, 120px desktop)
- `.gradient-bg` - Dark blue gradient background
- `.gradient-bg-light` - Light gray gradient
- `.hover-lift` - Lift effect on hover
- `.card` - White card with border and hover shadow
- `.animate-fade-in-up` - Fade in animation

**Typography:**
- Font: Montserrat (weights: 400, 500, 600, 700, 800)
- Use Tailwind classes for text styling

### Content Language

- **All content is in Spanish (Mexico)**
- Website locale: `es_MX`
- Use proper Spanish punctuation and accents
- Regulatory terms: LFPIORPI, CNBV, UIF, AML, NOM-151

## API Routes

### Contact Form (`/api/contact`)
- **Method:** POST
- **Integration:** HubSpot Forms API
- **Required fields:** name, email, phone, role
- **Optional fields:** company, message

## Blog System

Blog posts are managed in `src/lib/blog.ts`:

```typescript
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;        // Human-readable: "13 de enero, 2026"
  dateISO: string;     // ISO format: "2026-01-13"
  category: string;    // Análisis, KYC, Regulación, Seguridad, Fraude, Onboarding, Compliance
  slug: string;        // URL slug
  readTime: string;    // e.g., "8 min"
  image?: string;      // Optional featured image path
}
```

**Adding a new blog post:**
1. Add entry to `blogPosts` array in `src/lib/blog.ts`
2. Create page at `src/app/blog/[slug]/page.tsx`
3. Add image to `public/images/blog/` (optional)

## SEO and Metadata

- **Metadata:** Configured in `layout.tsx` with OpenGraph, Twitter cards
- **Structured Data:** JSON-LD schema for Organization, WebSite, SoftwareApplication, FAQPage
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **RSS Feed:** Available at `/rss.xml`
- **Robots:** Configured in `/robots.ts`

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
# Email service (Resend) - optional
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Contact email
CONTACT_EMAIL=sales@jaak.ai

# CRM Integration (optional)
CRM_WEBHOOK_URL=
CRM_WEBHOOK_SECRET=
```

## Common Tasks for AI Assistants

### Adding a New Page

1. Create directory in `src/app/` with the route name
2. Add `page.tsx` with the page component
3. Import Header and Footer components
4. Update `sitemap.ts` if needed

### Adding a New Component

1. Create file in `src/components/` with PascalCase name
2. Export default function component
3. Use Tailwind CSS for styling
4. Add `"use client"` directive only if client-side interactivity is needed

### Modifying Styles

1. Global styles and CSS variables: `src/app/globals.css`
2. Component-specific styles: Use Tailwind classes inline
3. New button variants: Add to globals.css following existing patterns

### Updating Navigation

The Header component (`src/components/Header.tsx`) contains the main navigation with:
- Desktop mega-menu with dropdowns
- Mobile hamburger menu
- All navigation links and structure

### Adding Blog Content

1. Add post metadata to `src/lib/blog.ts`
2. Create new page in `src/app/blog/[slug]/page.tsx`
3. Follow existing blog post structure for consistent layout

## Testing

**No testing framework is currently configured.** If tests are needed:
- Consider Jest + React Testing Library for unit/component tests
- Consider Playwright or Cypress for E2E tests

## Deployment

- **Platform:** Vercel (implicit from dependencies)
- **Analytics:** Vercel Analytics enabled
- **Speed Insights:** Vercel Speed Insights enabled

## Important Notes

1. **No state management library** - Uses React's built-in useState/useContext
2. **No database** - Static marketing site with HubSpot CRM integration
3. **Images** - Use Next.js `Image` component for optimization
4. **Forms** - Submit to `/api/contact` which forwards to HubSpot
5. **Strict TypeScript** - Enabled in tsconfig.json

## Code Quality Checklist

Before committing changes:
- [ ] Run `npm run lint` and fix any errors
- [ ] Run `npm run build` to verify production build
- [ ] Check responsive design on mobile viewports
- [ ] Verify Spanish content is grammatically correct
- [ ] Ensure all links work correctly
- [ ] Test forms if modified
