# Site Improvements v2 — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply client feedback — fix copy, icons, images, specs, and navigation across the Grupo RF site.

**Architecture:** Data-driven changes in `data/*.ts` files propagate to components automatically. Page-specific changes in `app/` pages. Shared layout changes in `components/layout/`. Images downloaded from Google Drive and placed in `public/images/`. Stock images sourced for pages without Drive photos.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Tabler Icons, Framer Motion

---

### Task 1: Remove Belo Horizonte from entire site

**Files:**
- Modify: `data/contact.ts:34-40` — remove BH office entry
- Modify: `components/layout/Header.tsx:68-69` — remove BH from top bar cities
- Modify: `app/sobre/page.tsx:49` — update timeline "Cobertura Nacional" text
- Modify: `app/sobre/page.tsx:139` — update body text listing cities
- Modify: `app/contato/layout.tsx:6` — update meta description

**Step 1: Remove BH office from contact data**

In `data/contact.ts`, delete lines 34-40 (the Belo Horizonte office object):
```typescript
  // DELETE THIS ENTIRE BLOCK:
  {
    city: "Belo Horizonte",
    state: "MG",
    phones: ["(31) 3157-1707"],
    address: "",
    mapQuery: "Belo+Horizonte+MG",
  },
```

**Step 2: Remove BH from Header top bar**

In `components/layout/Header.tsx`, remove lines 68-69:
```tsx
            <span className="text-text-medium">|</span>
            <span>Belo Horizonte</span>
```

**Step 3: Update Sobre page timeline**

In `app/sobre/page.tsx:49`, change:
```typescript
description: "Expansão para São Paulo e Belo Horizonte, consolidando atendimento em todo o território nacional.",
```
To:
```typescript
description: "Expansão para São Paulo e Goiânia, consolidando atendimento em todo o território nacional.",
```

**Step 4: Update Sobre page body text**

In `app/sobre/page.tsx:139`, change:
```tsx
Hoje, com unidades em Brasília, Goiânia, São Paulo e Belo
Horizonte, oferecemos cobertura nacional com equipe própria,
```
To:
```tsx
Hoje, com unidades em Brasília, Goiânia e São Paulo, oferecemos cobertura nacional com equipe própria,
```

**Step 5: Update Contato layout meta description**

In `app/contato/layout.tsx:6`, change `"Belo Horizonte"` to remove it from the cities list.

**Step 6: Verify and commit**

Run: `npm run build`
Expected: Build passes with no errors

```bash
git add data/contact.ts components/layout/Header.tsx app/sobre/page.tsx app/contato/layout.tsx
git commit -m "fix: remove Belo Horizonte office from entire site"
```

---

### Task 2: Update Home stats (20+ anos, 3 unidades)

**Files:**
- Modify: `components/sections/Hero.tsx:197-200` — update stats array
- Modify: `app/sobre/page.tsx:126` — update "18 Anos" to "20 Anos"

**Step 1: Update Hero stats**

In `components/sections/Hero.tsx:197-200`, change:
```typescript
{ value: "15+", label: "Anos de mercado" },
{ value: "500+", label: "Projetos realizados" },
{ value: "4", label: "Unidades no Brasil" },
{ value: "100%", label: "Conformidade" },
```
To:
```typescript
{ value: "20+", label: "Anos de mercado" },
{ value: "500+", label: "Projetos realizados" },
{ value: "3", label: "Unidades no Brasil" },
{ value: "100%", label: "Conformidade" },
```

**Step 2: Update Sobre page heading**

In `app/sobre/page.tsx:126`, change:
```tsx
há mais de 18 Anos
```
To:
```tsx
há mais de 20 Anos
```

**Step 3: Verify and commit**

Run: `npm run build`

```bash
git add components/sections/Hero.tsx app/sobre/page.tsx
git commit -m "fix: update stats to 20+ years and 3 offices"
```

---

### Task 3: Update navigation — separate Serviços and Produtos

**Files:**
- Modify: `data/navigation.ts:13-32` — restructure RF Engenharia children with group labels

**Step 1: Update navigation structure**

The `NavItem` interface needs a `group` field to support visual grouping. Update `data/navigation.ts`:

Add `group?: string` to the NavItem interface:
```typescript
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  group?: string;
}
```

Then update the RF Engenharia children to use groups:
```typescript
{
  label: "RF Engenharia",
  href: "/rf-engenharia",
  children: [
    { label: "Ancoragem Predial", href: "/rf-engenharia/ancoragem-predial", group: "Serviços" },
    { label: "Linha de Vida", href: "/rf-engenharia/linha-de-vida", group: "Serviços" },
    { label: "Construção Metálica", href: "/rf-engenharia/construcao-metalica", group: "Serviços" },
    { label: "Inspeção Anual", href: "/rf-engenharia/inspecao-anual", group: "Serviços" },
    { label: "Treinamentos", href: "/rf-engenharia/treinamentos", group: "Serviços" },
    { label: "Projetos e Laudos", href: "/rf-engenharia/projetos-laudos", group: "Serviços" },
    { label: "Kit Linha de Vida para Telhados", href: "/rf-engenharia/produtos/kit-linha-vida-telhados", group: "Produtos" },
    { label: "Linha de Vida para Concretagem", href: "/rf-engenharia/produtos/linha-vida-concretagem", group: "Produtos" },
    { label: "Linha de Vida para Escadas Marinheiro", href: "/rf-engenharia/produtos/linha-vida-escadas-marinheiro", group: "Produtos" },
    { label: "Escada Marinheiro", href: "/rf-engenharia/produtos/escada-marinheiro", group: "Produtos" },
    { label: "Gaiola para Grua", href: "/rf-engenharia/produtos/gaiola-grua", group: "Produtos" },
    { label: "Plataforma de Grua", href: "/rf-engenharia/produtos/plataforma-grua", group: "Produtos" },
  ],
},
```

**Step 2: Update Header dropdown to render groups**

In `components/layout/Header.tsx`, find the dropdown rendering logic and update it to group items by their `group` field, rendering group headings like "Serviços" and "Produtos" with a visual separator between them.

**Step 3: Verify and commit**

Run: `npm run build`

```bash
git add data/navigation.ts components/layout/Header.tsx
git commit -m "feat: separate services and products in navigation dropdown"
```

---

### Task 4: Update RF Engenharia icons

**Files:**
- Modify: `data/services.ts:1-14,34,49,79,94,109` — update icon imports and assignments
- Modify: `app/rf-engenharia/page.tsx` — update icon imports if page uses local icons
- Modify: `app/rf-engenharia/ancoragem-predial/page.tsx:4` — update icon import
- Modify: `app/rf-engenharia/construcao-metalica/page.tsx:4` — change IconHammer to IconBuildingBridge

**Step 1: Choose new icons from @tabler/icons-react**

Replace these icons to match the style of `IconBuildingBridge` (concrete, visual):

| Service | Current | New | Rationale |
|---------|---------|-----|-----------|
| Ancoragem Predial | `IconAnchor` | `IconBuildingLock` | Building + security/lock |
| Linha de Vida | `IconLineDashed` | `IconRouteAltRight` | Cable/route path |
| Inspeção Anual | `IconClipboardCheck` | `IconZoomCheck` | Inspection/magnifying check |
| Treinamentos | `IconCertificate` | `IconSchool` | Education/training |
| Projetos e Laudos | `IconFileAnalytics` | `IconFileSearch` | Technical document review |

**Step 2: Update data/services.ts imports and icon assignments**

Replace the import block and update each service's `icon` field.

**Step 3: Update ancoragem-predial/page.tsx**

Change `IconAnchor` to the new icon in the hero section icon box (line 136).

**Step 4: Update construcao-metalica/page.tsx**

Change `IconHammer` to `IconBuildingBridge` (line 4 import and wherever it's used in the page).

**Step 5: Verify icons exist in tabler**

Run: `npm run build` — if any icon doesn't exist, try alternatives.

**Step 6: Commit**

```bash
git add data/services.ts app/rf-engenharia/ancoragem-predial/page.tsx app/rf-engenharia/construcao-metalica/page.tsx
git commit -m "feat: update RF Engenharia service icons for better visual consistency"
```

---

### Task 5: Update Ancoragem Predial — 1.500 kgf → 2.500 kgf

**Files:**
- Modify: `app/rf-engenharia/ancoragem-predial/page.tsx:54,79,81,153,221` — all 1.500 kgf mentions
- Modify: `data/services.ts:39` — feature "Resistência 1.500 kgf"

**Step 1: Replace in ancoragem-predial/page.tsx**

Find and replace all `1.500 kgf` with `2.500 kgf` in the file:
- Line 54: `"resistência mínima de 1.500 kgf"` → `"resistência mínima de 2.500 kgf"`
- Line 79: `"Resistência 1.500 kgf"` → `"Resistência 2.500 kgf"`
- Line 81: `"carga mínima de 1.500 kgf"` → `"carga mínima de 2.500 kgf"`
- Line 153: `"resistência mínima de 1.500 kgf"` → `"resistência mínima de 2.500 kgf"`
- Line 221: `"resistência mínima de 1.500 kgf"` → `"resistência mínima de 2.500 kgf"`

**Step 2: Replace in data/services.ts**

Line 39: `"Resistência 1.500 kgf"` → `"Resistência 2.500 kgf"`

**Step 3: Commit**

```bash
git add app/rf-engenharia/ancoragem-predial/page.tsx data/services.ts
git commit -m "fix: update ancoragem resistance spec from 1500 to 2500 kgf"
```

---

### Task 6: Download Drive images and place in public/images

**Files:**
- Create: `public/images/ancoragem/` — selected anchor images from Drive
- Create: `public/images/balancim/` — selected balancim images from Drive
- Create: `public/images/estruturas-metalicas/` — metallic structure images from Drive
- Create: `public/images/linha-de-vida/` — lifeline images from Drive

**Step 1: Download images from Google Drive**

Use Playwright to navigate to each Drive folder and download the best/most professional images. Select ~5-8 per category (not all 50 from ancoragem). Prioritize:
- High resolution
- Professional composition
- Clear subject matter
- Good lighting

**Step 2: Rename downloaded files**

Rename from WhatsApp format to semantic names:
- `ancoragem-instalacao-01.jpg`, `ancoragem-produto-01.jpg`, etc.
- `balancim-fachada-01.jpg`, `balancim-trabalho-01.jpg`, etc.
- `estrutura-metalica-01.jpg`, etc.
- `linha-vida-instalacao-01.jpg`, `linha-vida-produto-01.jpg`, etc.

**Step 3: Place in public/images/**

Move renamed files to their respective directories.

**Step 4: Commit**

```bash
git add public/images/ancoragem/ public/images/balancim/ public/images/estruturas-metalicas/ public/images/linha-de-vida/
git commit -m "feat: add real product/service photos from client"
```

---

### Task 7: Source and add stock images

**Files:**
- Replace/Update: `public/images/hero/` — new hero images
- Replace/Update: `public/images/services/` — better service images
- Replace/Update: `public/images/equipment/` — better equipment images

**Step 1: Identify pages needing stock images**

Pages without Drive photos:
- Home hero background/image
- Inspeção Anual page
- Treinamentos page
- Projetos e Laudos page
- RF Locação pages: Andaime Fachadeiro, Elevador Cremalheira, Mini-Grua, Proteções Coletivas, Cadeirinha, Equipamentos Diversos, Içamento

**Step 2: Find high-quality stock images**

Search Unsplash (already allowed in next.config.ts) for:
- Construction safety, safety harness, workers at height
- Building facade maintenance, scaffolding
- Industrial metallic structures
- Construction training, safety equipment

**Step 3: Update image references in pages and data files**

Update `image` props in data files and page components to point to new images.

**Step 4: Commit**

```bash
git add public/images/ data/ app/
git commit -m "feat: upgrade all site images with high-quality photos"
```

---

### Task 8: Update product page heroes — add image, remove specs box

**Files:**
- Modify: `app/rf-engenharia/produtos/kit-linha-vida-telhados/page.tsx:128-145`
- Modify: `app/rf-engenharia/produtos/linha-vida-concretagem/page.tsx` (same pattern)
- Modify: `app/rf-engenharia/produtos/linha-vida-escadas-marinheiro/page.tsx` (same pattern)
- Modify: `app/rf-engenharia/produtos/escada-marinheiro/page.tsx` (same pattern)
- Modify: `app/rf-engenharia/produtos/gaiola-grua/page.tsx` (same pattern)
- Modify: `app/rf-engenharia/produtos/plataforma-grua/page.tsx` (same pattern)

**Step 1: Update hero right column**

In each product page, replace the specs/kit box (the `<div className="shrink-0 w-full lg:w-80">` block) with an image using Next.js Image component:

```tsx
<div className="shrink-0 w-full lg:w-96">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src="/images/ancoragem/ancoragem-produto-01.jpg"
      alt="Kit de Linha de Vida para Telhados"
      width={500}
      height={400}
      className="w-full h-auto object-cover"
    />
  </div>
</div>
```

Use appropriate image from Drive for each product.

**Step 2: Move specs content below hero**

Take the kit items / specs that were in the right column box and add them as a new section below the hero, using the existing card/grid pattern.

**Step 3: Verify and commit**

Run: `npm run build`

```bash
git add app/rf-engenharia/produtos/
git commit -m "feat: add product images to hero sections, move specs below"
```

---

### Task 9: Update copy with mixed tone

**Files:**
- Modify: `app/page.tsx` — home page copy refinements
- Modify: `app/rf-engenharia/ancoragem-predial/page.tsx` — incorporate technical content from rf-engenharia.com
- Modify: `app/rf-engenharia/construcao-metalica/page.tsx` — align with real service descriptions
- Modify: `app/rf-engenharia/linha-de-vida/page.tsx` — add technical specs from original site
- Modify: Various other service pages

**Step 1: Review current copy vs rf-engenharia.com content**

Key copy from original site to incorporate:
- Ancoragem: "Modelos de 1.500 kgf e 2.500 kgf" (we use 2.500 only now), "Carga de ruptura superior a 7.850 kgf comprovado por ensaio de tração", "Garantia de 5 anos do material", material is "Aço inox 304 ou 316", "acompanha certificado de resistência a corrosão"
- Construção Metálica: "coberturas, galpões, escadas marinheiro, passarelas de acesso, rampas" — supervised by Eng. Mecânico
- Company: founded 2006, "desde 2006" — use this consistently
- Norms: NR18, NR35, NBR 16325, NR 10/2015-CBMDF, Portaria 157/2006

**Step 2: Update hero sections** — keep modern/marketeiro tone

Heroes keep current punchy copy style but ensure factual accuracy.

**Step 3: Update detail sections** — add technical tone

Add real specs, norms, certifications. E.g., in ancoragem detail section:
- Mention "Aço inox 304 ou 316"
- Add "Carga de ruptura > 7.850 kgf comprovado em laboratório"
- Add "Garantia de 5 anos do material"
- Reference specific norms: NR18, NR35, NBR 16325-1, NR 10/2015-CBMDF

**Step 4: Commit**

```bash
git add app/ data/
git commit -m "feat: improve copy with technical content from original site"
```

---

### Task 10: Update images in all pages

**Files:**
- Modify: All pages in `app/rf-engenharia/` — update image src references
- Modify: All pages in `app/rf-locacao/` — update image src references
- Modify: `app/page.tsx` — update home page images
- Modify: `data/services.ts` — update service image paths
- Modify: `data/equipment.ts` — update equipment image paths

**Step 1: Map new images to pages**

| Page | New image source |
|------|-----------------|
| Home hero | Stock — construction safety |
| Ancoragem Predial | Drive: ancoragem folder |
| Linha de Vida | Drive: linha-de-vida folder |
| Construção Metálica | Drive: estruturas-metalicas folder |
| Balancim Elétrico | Drive: balancim folder |
| Other RF Locação | Stock images |
| Product pages | Drive: matching product photos |

**Step 2: Update all image references**

Replace current placeholder/low-quality image paths with new paths in:
- `data/services.ts` — the `image` field per service
- `data/equipment.ts` — the `image` field per equipment
- Individual page files — inline image components

**Step 3: Verify all images render**

Run: `npm run dev` and visually check each page.

**Step 4: Commit**

```bash
git add app/ data/ public/images/
git commit -m "feat: replace all site images with high-quality photos"
```

---

### Task 11: Final verification

**Step 1: Full build check**

Run: `npm run build`
Expected: Clean build, no errors.

**Step 2: Lint check**

Run: `npm run lint`
Expected: No lint errors.

**Step 3: Visual review**

Run: `npm run dev` and check:
- [ ] Home page: stats show 20+, 3 unidades, no BH
- [ ] Navigation: RF Engenharia dropdown shows Serviços and Produtos groups
- [ ] Icons: all updated, construção metálica consistent
- [ ] Ancoragem: all specs show 2.500 kgf
- [ ] Products: hero has image on right, specs moved below
- [ ] Images: all pages have quality images
- [ ] Copy: mixed tone (modern heroes, technical details)
- [ ] No broken images or links

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup after site improvements v2"
```
