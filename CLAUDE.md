# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **Grupo RF Engenharia** — a Brazilian company with two business lines:
- **RF Engenharia**: Occupational safety engineering (anchoring, lifelines, metallic construction)
- **RF Locacao**: Construction equipment rental (platforms, hoists, elevators)

Static site with no database or backend. Content is managed via TypeScript data files.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`, uses `@theme inline` in globals.css)
- **Framer Motion** for animations
- **Tabler Icons** (primary) + **Lucide React** (secondary icon library)
- **ESLint** flat config (`eslint.config.mjs`) with Next.js core-web-vitals + TypeScript rules

## Commands

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm start        # Start production server (requires build first)
npm run lint     # ESLint (Next.js core-web-vitals + TypeScript rules)
```

No test framework is configured.

## Architecture

### Routing

Next.js App Router with file-based routing. Two main route trees:

- `/rf-engenharia/` — 6 service subcategories + `/produtos/` with 7 product pages
- `/rf-locacao/` — 8 equipment subcategories (each a static route, not dynamic)
- `/blog/[slug]` — Dynamic blog routes (only dynamic route in the project)
- `/contato/`, `/sobre/`, `/portfolio/` — Static pages

Per-page SEO uses two different patterns. `rf-engenharia/<service>/` folders each have their own `layout.tsx` exporting `Metadata` (so the page can be a client component with `"use client"`). `rf-locacao/` has a single shared `layout.tsx` at the top level, and its subcategory pages — plus all `produtos/<product>/page.tsx` — export `metadata` directly from the page file (so they stay as server components). Root layout uses `title.template: "%s | Grupo RF Engenharia"`.

### Directory Structure

- `app/` — Pages and layouts (App Router)
- `components/layout/` — Header, Footer (shared via root layout)
- `components/cards/` — Content cards (Blog, Equipment, Feature, Product, Service)
- `components/sections/` — Full-width page sections (Hero, CTA, ProcessSteps, Timeline, etc.)
- `components/ui/` — Base UI primitives (Animations, Button, Breadcrumb, FloatingWhatsApp, IconBox, SectionTitle, BeforeAfterSlider)
- `data/` — All site content as typed TypeScript arrays (services, equipment, blog, navigation, etc.)
- `public/images/` — Static assets organized by type (hero, equipment, clients, portfolio, etc.)

### Data Layer

All content lives in `data/*.ts` files with exported TypeScript interfaces. To add/edit services, equipment, blog posts, or navigation, modify these files directly:

- `services.ts` — `Service` interface, exports `engenhariaServices[]` (6 items) and `engenhariaProducts[]` (7 items)
- `equipment.ts` — `Equipment` interface, exports `locacaoEquipments[]` (8 items)
- `blog.ts` — `BlogPost` with block-based `ContentBlock[]` (paragraph, heading, list, callout, quote)
- `navigation.ts` — `NavItem` with optional `children[]` and `group` string for dropdown sections
- `contact.ts` — `Office[]`, contact info, company CREA info
- `clients.ts` / `portfolio.ts` — Client logos and portfolio data

Icons in data files use `type IconType = React.ComponentType<{ className?: string }>` for type-safe icon references.

### Key Patterns

- **Content-driven pages**: Each service/equipment page follows: Hero -> Features -> Process Steps -> CTA. Content is defined inline in the page file (not pulled from data files). Hero supports both static images (`image`/`imageAlt`) and video backgrounds (`video`/`videoPoster`).
- **Client components**: Framer Motion is encapsulated in `components/sections/` and `components/ui/` (each declares its own `"use client"`), so page files can compose them while staying as server components. Only pages that use React hooks directly (state, refs) add `"use client"` themselves. Pages that need to export `metadata` must stay as server components — that's why `rf-engenharia/<service>/` pages offload metadata to a sibling `layout.tsx`.
- **Animation primitives**: `components/ui/Animations.tsx` exports `FadeIn`, `StaggerContainer`, `StaggerItem`, `ScaleIn`, `AnimatedCounter`, `TextReveal` — all scroll-triggered via `useInView`.
- **Path alias**: `@/*` maps to project root.
- **Image optimization**: Next.js `<Image>` with remote pattern for `images.unsplash.com`.
- **Container pattern**: Sections use `max-w-7xl mx-auto px-6` for consistent width.
- **FAQ pattern**: Uses native `<details>`/`<summary>` with `group-open:rotate-180` on chevron icon.

### Theming

CSS custom properties in `app/globals.css`, registered for Tailwind via `@theme inline`:

- **Colors**: `bg-primary`, `bg-primary-medium`, `bg-primary-light`, `bg-primary-pale`, `bg-accent-warm`, `text-text-light`, `text-text-primary`, etc.
- **Fonts**: `--font-sans` (Inter, body) and `--font-display` (DM Sans, headings). Root layout defines `--font-inter` and `--font-dm-sans` via `next/font/google`; these are re-registered as `--font-sans` and `--font-display` in the `@theme inline` block. Use `font-[family-name:var(--font-display)]` for display font in Tailwind classes.
- **Utility classes** (in globals.css): `.text-gradient`, `.glow-hover`, `.card-image-zoom`, `.card-reveal-overlay`, `.accent-line::after`, `.animate-marquee`, `.animate-shimmer`, `.animate-gradient-border`, `.animate-pulse-dot`, `.animate-whatsapp-pulse`.

### Navigation

Header uses `data/navigation.ts`. `NavItem.group` groups children into labeled sections in desktop dropdowns (e.g., "Servicos" and "Produtos" under RF Engenharia). Header is scroll-aware: hides on scroll down, shows on scroll up, top bar collapses at 50px.

## Language

Site content is in **Brazilian Portuguese**. Route slugs, component names, and code are in English.
