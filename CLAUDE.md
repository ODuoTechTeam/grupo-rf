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

Next.js App Router with file-based routing. The app is split into two route groups with distinct chrome:

- `app/(site)/` — institutional site. Wraps pages with `Header` + `Footer` + `FloatingWhatsApp` via `(site)/layout.tsx`. Contains `rf-engenharia/` (6 service subcategories + `produtos/` with 7 product pages), `rf-locacao/` (8 equipment subcategories — each a static route, not dynamic), `blog/[slug]` (only dynamic route in the project), and `contato/`, `sobre/`, `portfolio/`.
- `app/(ads)/` — paid-traffic landing pages at `/lp/<slug>` (currently `ancoragem`, `balancim-eletrico`, `linha-de-vida`) plus `politica-de-privacidade`. Uses a separate `(ads)/layout.tsx` with `AdsTopBar` + `AdsFooter` (no site Header, no FloatingWhatsApp) and exports `robots: { index: false, follow: false }` at the layout level — everything under `(ads)` is noindex by default.

Root `app/layout.tsx` is minimal: it only loads fonts and sets the default metadata/title template (`"%s | Grupo RF Engenharia"`). All page chrome comes from the route-group layouts.

Per-page SEO uses two different patterns. `rf-engenharia/<service>/` folders each have their own `layout.tsx` exporting `Metadata` (so the page can be a client component with `"use client"`). `rf-locacao/` has a single shared `layout.tsx` at the top level, and its subcategory pages — plus all `produtos/<product>/page.tsx` and all `(ads)/lp/<slug>/page.tsx` — export `metadata` directly from the page file (so they stay as server components).

### Directory Structure

- `app/` — Pages and layouts (App Router), split into `(site)/` and `(ads)/` route groups
- `components/layout/` — `Header`, `Footer` (used by the `(site)` layout)
- `components/ads/` — Ads-only components (`AdsTopBar`, `AdsHero`, `AdsBenefitsGrid`, `AdsSocialProof`, `AdsTrustBadges`, `AdsFinalCta`, `AdsStickyMobileCta`, `AdsFooter`) plus `whatsapp.ts` helper. **Do not reuse these in institutional pages** — see `components/ads/README.md`.
- `components/cards/` — Content cards (Blog, Equipment, Feature, Product, Service)
- `components/sections/` — Full-width page sections (Hero, CTA, ProcessSteps, Timeline, etc.)
- `components/ui/` — Base UI primitives (Animations, Button, Breadcrumb, FloatingWhatsApp, IconBox, SectionTitle, BeforeAfterSlider)
- `data/` — All site content as typed TypeScript arrays (services, equipment, blog, navigation, etc.)
- `public/images/` — Static assets organized by type (hero, equipment, clients, portfolio, etc.)
- `docs/` — Planning docs (`docs/plans/`) and design reference screenshots (`docs/reference/`). Not shipped.

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

### Ads landing pages

Landing pages under `app/(ads)/lp/*` are conversion-focused and follow a separate playbook from the institutional site. Full details in `components/ads/README.md` — key rules:

- **CTAs go directly to WhatsApp** with a pre-filled message (use `buildWhatsAppHref` from `components/ads/whatsapp.ts`). No contact forms.
- **Tracking is attribute-based**: every CTA carries `data-ads-cta="whatsapp"|"phone"` and `data-ads-lp="<slug>"` so a single GTM listener can capture all clicks without touching components. GTM is not installed yet; the hook point is the `// TRACKING:` comment in `(ads)/layout.tsx`.
- **Do not add `onClick` handlers to `Ads*` components** — it forces them into client components and defeats the server-rendered bundle. All click tracking belongs in GTM.
- **`AdsTopBar` reports `data-ads-lp="generic"`** because it's rendered by the route-group layout without access to child-page props. The hero, final CTA, and sticky mobile CTA report the real slug.
- Everything under `(ads)` is `noindex` via the layout's metadata — don't override per page.

## Language

Site content is in **Brazilian Portuguese**. Route slugs, component names, and code are in English.
