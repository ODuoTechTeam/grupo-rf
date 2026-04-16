# LPs de Ads — Reposicionamento para "Solução Completa" — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar as 3 landing pages de ads (`balancim-eletrico`, `ancoragem`, `linha-de-vida`) de "locação de equipamento" para "solução completa com engenharia", implementando 3 novos componentes (`AdsSolutionPillars`, `AdsGallery`, `AdsTechSpecs`), ajustando 3 componentes existentes (`AdsHero`, `AdsFinalCta`, `AdsStickyMobileCta`) e reescrevendo a copy das 3 LPs.

**Architecture:** Componentes compartilhados em `components/ads/` (server components exceto `AdsHero`, que já é client por causa do Framer Motion). LPs em `app/(ads)/lp/*` compõem os componentes e passam a copy por props. Regra do `components/ads/README.md` mantida: sem `onClick` em `Ads*`, tracking via atributos `data-ads-cta` e `data-ads-lp`.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Tabler Icons. Sem framework de testes — verificação via lint + build + browser manual.

**Spec:** `docs/superpowers/specs/2026-04-16-lps-reposicionamento-solucao-completa-design.md`

---

## File Structure

### Novos arquivos
| Arquivo | Responsabilidade |
|---|---|
| `components/ads/AdsSolutionPillars.tsx` | Os 5 pilares da solução completa (server component) |
| `components/ads/AdsGallery.tsx` | Galeria de imagens reais de obra (server component) |
| `components/ads/AdsTechSpecs.tsx` | Especificações técnicas em grupos (server component) |

### Arquivos modificados
| Arquivo | Mudança |
|---|---|
| `components/ads/AdsHero.tsx` | Adicionar faixa "Filiais próprias em:" + prop `ctaLabel` |
| `components/ads/AdsFinalCta.tsx` | Prop `ctaLabel` |
| `components/ads/AdsStickyMobileCta.tsx` | Prop `ctaLabel` |
| `app/(ads)/lp/balancim-eletrico/page.tsx` | Reescrever copy + nova composição |
| `app/(ads)/lp/linha-de-vida/page.tsx` | Idem |
| `app/(ads)/lp/ancoragem/page.tsx` | Idem |
| `components/ads/README.md` | Documentar novos componentes + padrão `ctaLabel` |

---

## Fase 1 — Componentes compartilhados

### Task 1: Criar `AdsSolutionPillars`

**Files:**
- Create: `components/ads/AdsSolutionPillars.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import type { ComponentType } from "react";

interface Pillar {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsSolutionPillarsProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
}

export default function AdsSolutionPillars({
  title,
  subtitle,
  pillars,
}: AdsSolutionPillarsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative p-6 rounded-2xl bg-bg-surface border border-gray-200"
            >
              <span className="absolute top-4 right-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-medium/10 text-primary-medium text-xs font-bold">
                {index + 1}
              </span>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-4">
                <pillar.icon className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors nos arquivos tocados.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsSolutionPillars.tsx
git commit -m "feat(ads): add AdsSolutionPillars component for solution repositioning"
```

---

### Task 2: Criar `AdsGallery`

**Files:**
- Create: `components/ads/AdsGallery.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface AdsGalleryProps {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

export default function AdsGallery({
  title,
  subtitle,
  images,
}: AdsGalleryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 border border-gray-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover card-image-zoom"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Nota: `card-image-zoom` só ativa no hover do elemento-pai com classe `group` — por isso o wrapper tem `group`. Padrão idêntico ao usado em `components/cards/EquipmentCard.tsx` e `ServiceCard.tsx`.

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors nos arquivos tocados.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsGallery.tsx
git commit -m "feat(ads): add AdsGallery component for real-work photo mosaics"
```

---

### Task 3: Criar `AdsTechSpecs`

**Files:**
- Create: `components/ads/AdsTechSpecs.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
interface SpecGroup {
  heading: string;
  items: string[];
}

interface AdsTechSpecsProps {
  title: string;
  subtitle?: string;
  groups: SpecGroup[];
}

export default function AdsTechSpecs({
  title,
  subtitle,
  groups,
}: AdsTechSpecsProps) {
  return (
    <section className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.heading}
              className="p-6 rounded-2xl bg-white border border-gray-200"
            >
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-medium shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors nos arquivos tocados.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsTechSpecs.tsx
git commit -m "feat(ads): add AdsTechSpecs component for institutional specs"
```

---

### Task 4: Ajustar `AdsHero` (faixa de filiais + `ctaLabel`)

**Files:**
- Modify: `components/ads/AdsHero.tsx`

- [ ] **Step 1: Substituir o arquivo pelo conteúdo abaixo**

Arquivo completo atualizado:

```tsx
"use client";

import Image from "next/image";
import { IconBrandWhatsapp, IconPhone, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  whatsappMessage: string;
  heroImage: string;
  heroImageAlt: string;
  lpSlug: string;
  ctaLabel?: string;
}

const TRUST_LOGOS = [
  { src: "/images/clients/cliente-bb.jpg", alt: "Banco do Brasil" },
  { src: "/images/clients/cliente-caixa.jpg", alt: "Caixa Econômica Federal" },
  { src: "/images/clients/cliente-sirio-libanes.jpg", alt: "Hospital Sírio-Libanês" },
  { src: "/images/clients/cliente-mrv.png", alt: "MRV" },
  { src: "/images/clients/cliente-odebrecht.jpg", alt: "Odebrecht" },
];

const FILIAIS = ["Brasília", "Goiânia", "São Paulo"];

export default function AdsHero({
  badge,
  title,
  subtitle,
  whatsappMessage,
  heroImage,
  heroImageAlt,
  lpSlug,
  ctaLabel = "Falar com especialista",
}: AdsHeroProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <section className="pt-10 pb-16 bg-bg-darkest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-pale text-primary-medium border border-primary-medium/30">
              {badge}
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="mt-5 text-lg text-text-light max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-ads-cta="whatsapp"
                data-ads-lp={lpSlug}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-whatsapp text-white font-bold text-lg hover:bg-whatsapp-dark transition-colors shadow-lg"
              >
                <IconBrandWhatsapp className="w-6 h-6" />
                {ctaLabel}
              </a>
              <a
                href={telHref}
                aria-label={`Ligar para ${contact.tollFree}`}
                data-ads-cta="phone"
                data-ads-lp={lpSlug}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 border-gray-300 text-gray-800 font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                <IconPhone className="w-5 h-5" />
                {contact.tollFree}
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-text-light/70 mb-3">
                Filiais próprias em:
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {FILIAIS.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-300"
                  >
                    <IconMapPin className="w-4 h-4 text-primary-medium" />
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-text-light/70 mb-4">
                Confiança de quem já contratou:
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {TRUST_LOGOS.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain grayscale opacity-70"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[40%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

Mudanças:
1. Importa `IconMapPin` de `@tabler/icons-react`.
2. Adiciona constante `FILIAIS`.
3. Adiciona prop opcional `ctaLabel` com default `"Falar com especialista"`.
4. Substitui label do botão WhatsApp de `"Falar no WhatsApp"` por `{ctaLabel}`.
5. Adiciona bloco "Filiais próprias em:" entre os CTAs e o bloco de trust logos — mesmo padrão visual do label existente "Confiança de quem já contratou:".

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsHero.tsx
git commit -m "feat(ads): add filiais strip and ctaLabel prop to AdsHero"
```

---

### Task 5: Ajustar `AdsFinalCta` (`ctaLabel`)

**Files:**
- Modify: `components/ads/AdsFinalCta.tsx`

- [ ] **Step 1: Editar interface e default**

Trocar a interface:

```tsx
interface AdsFinalCtaProps {
  title: string;
  description: string;
  whatsappMessage: string;
  lpSlug: string;
}
```

por:

```tsx
interface AdsFinalCtaProps {
  title: string;
  description: string;
  whatsappMessage: string;
  lpSlug: string;
  ctaLabel?: string;
}
```

Trocar a assinatura da função:

```tsx
export default function AdsFinalCta({
  title,
  description,
  whatsappMessage,
  lpSlug,
}: AdsFinalCtaProps) {
```

por:

```tsx
export default function AdsFinalCta({
  title,
  description,
  whatsappMessage,
  lpSlug,
  ctaLabel = "Quero orçamento completo",
}: AdsFinalCtaProps) {
```

Trocar o texto do botão WhatsApp. De:

```tsx
            <IconBrandWhatsapp className="w-6 h-6" />
            Falar no WhatsApp
          </a>
```

para:

```tsx
            <IconBrandWhatsapp className="w-6 h-6" />
            {ctaLabel}
          </a>
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsFinalCta.tsx
git commit -m "feat(ads): add ctaLabel prop to AdsFinalCta"
```

---

### Task 6: Ajustar `AdsStickyMobileCta` (`ctaLabel`)

**Files:**
- Modify: `components/ads/AdsStickyMobileCta.tsx`

- [ ] **Step 1: Substituir o arquivo pelo conteúdo abaixo**

```tsx
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsStickyMobileCtaProps {
  whatsappMessage: string;
  lpSlug: string;
  ctaLabel?: string;
}

export default function AdsStickyMobileCta({
  whatsappMessage,
  lpSlug,
  ctaLabel = "Falar agora",
}: AdsStickyMobileCtaProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-ads-cta="whatsapp"
        data-ads-lp={lpSlug}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-whatsapp text-white font-bold text-base"
      >
        <IconBrandWhatsapp className="w-6 h-6" />
        {ctaLabel}
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors.

- [ ] **Step 3: Checkpoint de Fase 1 — rodar build**

Run: `npm run build`
Expected: build passa. Se falhar, corrigir antes de seguir.

- [ ] **Step 4: Commit**

```bash
git add components/ads/AdsStickyMobileCta.tsx
git commit -m "feat(ads): add ctaLabel prop to AdsStickyMobileCta"
```

---

## Fase 2 — Rollout LP por LP

> **Ordem crítica:** balancim-eletrico → linha-de-vida → ancoragem (conforme decisão da brainstorming). Após cada LP, fazer review manual no browser antes de seguir.

### Task 7: Reescrever LP `balancim-eletrico`

**Files:**
- Modify: `app/(ads)/lp/balancim-eletrico/page.tsx`

- [ ] **Step 1: Substituir o arquivo pelo conteúdo abaixo**

```tsx
import type { Metadata } from "next";
import {
  IconBlueprint,
  IconTool,
  IconBuildingSkyscraper,
  IconShieldCheck,
  IconEye,
  IconCircleCheck,
  IconFileCheck,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsSolutionPillars from "@/components/ads/AdsSolutionPillars";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsGallery from "@/components/ads/AdsGallery";
import AdsTechSpecs from "@/components/ads/AdsTechSpecs";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "balancim-eletrico";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de balancim elétrico (projeto + montagem + equipamento).";

export const metadata: Metadata = {
  title: "Balancim Elétrico com Projeto e Montagem | Grupo RF Engenharia",
  description:
    "Solução completa em balancim elétrico: projeto de instalação, montagem, equipamento e acompanhamento em obra. Filiais em Brasília, Goiânia e São Paulo.",
};

const PILLARS = [
  {
    icon: IconBlueprint,
    title: "Projeto técnico",
    description:
      "Memorial de cálculo e projeto de instalação assinados por engenheiro CREA.",
  },
  {
    icon: IconTool,
    title: "Montagem completa",
    description:
      "Equipe própria monta a plataforma suspensa em obra — sem terceirizar a instalação crítica.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Equipamento",
    description:
      "Balancim inspecionado, motorizado e conforme NR-18/NR-35, com cabos e EPIs auxiliares.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Treinamento dos operadores e inspeção diária durante toda a locação.",
  },
  {
    icon: IconEye,
    title: "Acompanhamento",
    description:
      "Manutenção preventiva e suporte técnico enquanto o equipamento estiver na sua obra.",
  },
];

const BENEFITS = [
  {
    icon: IconShieldCheck,
    title: "Inspeção diária em obra",
    description:
      "Operadores acompanhados e equipamento inspecionado todos os dias da locação.",
  },
  {
    icon: IconCircleCheck,
    title: "Conformidade NR-18/NR-35",
    description:
      "Equipamento dentro das normas regulamentadoras de construção civil e trabalho em altura.",
  },
  {
    icon: IconTool,
    title: "Motor com redundância de segurança",
    description:
      "Sistema de freio automático e segunda linha de cabo em caso de falha.",
  },
  {
    icon: IconFileCheck,
    title: "Documentação pronta para auditoria",
    description:
      "ART, laudo e projeto de instalação entregues antes de a obra começar.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/balancim/balancim-01.jpg",
    alt: "Balancim elétrico instalado em fachada de edifício residencial",
  },
  {
    src: "/images/balancim/balancim-02.jpg",
    alt: "Balancim elétrico em operação em fachada comercial",
  },
  {
    src: "/images/balancim/balancim-03.jpg",
    alt: "Plataforma suspensa motorizada em obra de pintura de fachada",
  },
  {
    src: "/images/balancim/balancim-04.jpg",
    alt: "Detalhe de montagem do balancim elétrico em altura",
  },
  {
    src: "/images/balancim/balancim-05.jpg",
    alt: "Balancim suspenso em trabalho de impermeabilização de fachada",
  },
  {
    src: "/images/balancim/balancim-06.jpg",
    alt: "Operação de balancim em revestimento externo de edifício",
  },
  {
    src: "/images/balancim/balancim-07.jpg",
    alt: "Balancim elétrico em serviço de limpeza de fachada institucional",
  },
  {
    src: "/images/balancim/balancim-08.jpg",
    alt: "Vista geral de balancim elétrico em operação em obra de fachada",
  },
];

const SPEC_GROUPS = [
  {
    heading: "Equipamento",
    items: [
      "Tipo: Plataforma suspensa motorizada",
      "Acionamento: motor elétrico via cabos de aço",
      "Movimentação: subida e descida controladas",
    ],
  },
  {
    heading: "Conformidade",
    items: ["NR-18 — Construção civil", "NR-35 — Trabalho em altura"],
  },
  {
    heading: "Documentação inclusa",
    items: ["ART registrada no CREA", "Laudo técnico", "Projeto de instalação"],
  },
];

export default function BalancimEletricoLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Solução Completa para Fachadas"
        title="Balancim elétrico entregue pronto: projeto, montagem, equipamento e segurança."
        subtitle="Mais que locação. Sua fachada resolvida por engenheiros CREA — com ART, laudo, montagem e acompanhamento em obra. Filiais próprias em Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/balancim/balancim-08.jpg"
        heroImageAlt="Balancim elétrico em operação em obra de fachada"
        lpSlug={LP_SLUG}
      />
      <AdsSolutionPillars
        title="Você não aluga um equipamento. Você recebe a solução pronta."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="Além do escopo da solução, o que garante que a operação não dá problema em obra."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais. Equipamento em operação."
        subtitle="Instalações de balancim elétrico em fachadas residenciais, comerciais e institucionais."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Vai subir na fachada? Receba a solução completa."
        description="Engenheiro nosso visita a obra, dimensiona o sistema, monta o balancim e acompanha a operação. Orçamento no mesmo dia."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors.

- [ ] **Step 3: Review visual no browser**

Run: `npm run dev`
Abrir http://localhost:3000/lp/balancim-eletrico em mobile (DevTools device mode 375px) e desktop (1440px). Verificar:
- Ordem das seções: Hero → Pilares → Benefícios → Galeria → Specs → Trust → Social → FinalCTA → Sticky
- Faixa "Filiais próprias em:" no hero acima dos logos de clientes
- CTA do hero = "Falar com especialista"
- CTA do final = "Quero orçamento completo"
- CTA sticky mobile = "Falar agora"
- Galeria carrega 8 imagens
- WhatsApp abre com a mensagem "solução completa de balancim elétrico..."

- [ ] **Step 4: Commit**

```bash
git add app/(ads)/lp/balancim-eletrico/page.tsx
git commit -m "feat(ads): reposition balancim-eletrico LP as complete solution"
```

---

### Task 8: Reescrever LP `linha-de-vida`

**Files:**
- Modify: `app/(ads)/lp/linha-de-vida/page.tsx`

- [ ] **Step 1: Substituir o arquivo pelo conteúdo abaixo**

```tsx
import type { Metadata } from "next";
import {
  IconBlueprint,
  IconTool,
  IconRouteAltRight,
  IconShieldCheck,
  IconEye,
  IconBuildingBridge,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsSolutionPillars from "@/components/ads/AdsSolutionPillars";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsGallery from "@/components/ads/AdsGallery";
import AdsTechSpecs from "@/components/ads/AdsTechSpecs";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "linha-de-vida";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de linha de vida (projeto + instalação + certificação).";

export const metadata: Metadata = {
  title: "Linha de Vida com Projeto, Instalação e Certificação | Grupo RF Engenharia",
  description:
    "Solução completa em linha de vida: sistema flexível ou rígido, projeto CREA, instalação sem infiltração, documentação entregue. Filiais em Brasília, Goiânia e São Paulo.",
};

const PILLARS = [
  {
    icon: IconBlueprint,
    title: "Projeto técnico",
    description:
      "Cálculo estrutural e memorial por engenheiro CREA, dimensionado ao uso e layout da cobertura.",
  },
  {
    icon: IconTool,
    title: "Fabricação e instalação",
    description:
      "Sistema rígido ou flexível fabricado e instalado pela RF, escolhido conforme o projeto.",
  },
  {
    icon: IconRouteAltRight,
    title: "Equipamento",
    description:
      "Componentes em aço inox conformes à ABNT, com certificado e rastreabilidade.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Instalação sem infiltração: fixação e vedação preservam a impermeabilização do telhado.",
  },
  {
    icon: IconEye,
    title: "Acompanhamento",
    description:
      "ART, laudo técnico e memorial entregues; suporte pós-instalação e revalidação quando exigida.",
  },
];

const BENEFITS = [
  {
    icon: IconRouteAltRight,
    title: "Projeto sob medida",
    description:
      "Cálculo estrutural feito por engenheiro CREA, adequado ao seu edifício e à sua operação.",
  },
  {
    icon: IconBuildingBridge,
    title: "Flexível ou rígida",
    description:
      "Escolhemos o sistema conforme o layout, o uso e a frequência de utilização da instalação.",
  },
  {
    icon: IconShieldCheck,
    title: "Impermeabilização inclusa",
    description:
      "Sistema instalado sem criar pontos de infiltração no telhado — sua cobertura continua protegida.",
  },
  {
    icon: IconFileSearch,
    title: "Certificação completa",
    description:
      "ART, laudo técnico e memorial de cálculo entregues junto com o projeto.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/linha-de-vida/linha-vida-01.jpg",
    alt: "Linha de vida instalada em cobertura industrial",
  },
  {
    src: "/images/linha-de-vida/linha-vida-02.jpg",
    alt: "Sistema de linha de vida flexível em telhado",
  },
  {
    src: "/images/linha-de-vida/linha-vida-03.jpg",
    alt: "Detalhe de ponto de ancoragem de linha de vida em cobertura metálica",
  },
  {
    src: "/images/linha-de-vida/linha-vida-04.jpg",
    alt: "Instalação de linha de vida em edifício comercial",
  },
  {
    src: "/images/linha-de-vida/linha-vida-05.jpg",
    alt: "Linha de vida rígida em monovia industrial",
  },
  {
    src: "/images/linha-de-vida/linha-vida-06.jpg",
    alt: "Trabalhador conectado a linha de vida em manutenção de cobertura",
  },
  {
    src: "/images/linha-de-vida/linha-vida-07.jpg",
    alt: "Sistema completo de linha de vida em galpão",
  },
  {
    src: "/images/linha-de-vida/linha-vida-08.jpg",
    alt: "Linha de vida com cabo de aço tensionado em cobertura",
  },
  {
    src: "/images/linha-de-vida/linha-vida-09.jpg",
    alt: "Detalhe de esticador e ancoragem de linha de vida",
  },
  {
    src: "/images/linha-de-vida/linha-vida-concretagem.jpg",
    alt: "Linha de vida instalada durante concretagem de laje",
  },
  {
    src: "/images/linha-de-vida/linha-vida-escadas-marinheiro.jpg",
    alt: "Sistema de linha de vida em escadas marinheiro industriais",
  },
];

const SPEC_GROUPS = [
  {
    heading: "Tipos disponíveis",
    items: [
      "Flexível — cabo de aço para grandes vãos e coberturas",
      "Rígida Monovia — trilho em alumínio ou aço para alta frequência de uso",
    ],
  },
  {
    heading: "Material",
    items: [
      "Aço inox 304/316",
      "Certificação por laboratório independente",
      "Componentes rastreáveis: cabos, ancoragens, esticadores, acessórios",
    ],
  },
  {
    heading: "Documentação inclusa",
    items: ["ART", "Laudo técnico", "Memorial de cálculo"],
  },
  {
    heading: "Conformidade",
    items: ["NR-18", "NR-35", "NBR 16325", "Código de obras local"],
  },
  {
    heading: "Garantia e inspeção",
    items: [
      "Garantia de 5 anos",
      "Inspeção a cada 12 meses (inclui revalidação e nova ART)",
    ],
  },
];

export default function LinhaDeVidaLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Solução Completa em Segurança em Altura"
        title="Linha de vida resolvida: projeto, instalação, impermeabilização e certificação."
        subtitle="Sistema flexível ou rígido para edifícios, galpões e indústrias. Projeto CREA, instalação sem infiltração e toda a documentação entregue. Filiais próprias em Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/linha-de-vida/linha-vida-01.jpg"
        heroImageAlt="Linha de vida instalada em cobertura industrial"
        lpSlug={LP_SLUG}
      />
      <AdsSolutionPillars
        title="Você não aluga um equipamento. Você recebe a solução pronta."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="Rigor técnico e escolha de sistema que garantem uso seguro ao longo de toda a vida útil."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais. Equipamento em operação."
        subtitle="Sistemas de linha de vida em coberturas industriais, hospitais e aeroportos."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Cobertura, galpão ou indústria? Linha de vida completa, instalada pela RF."
        description="Engenheiro nosso projeta o sistema flexível ou rígido, nossa equipe instala sem comprometer a impermeabilização e entrega a documentação completa."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors.

- [ ] **Step 3: Review visual no browser**

Run: `npm run dev`
Abrir http://localhost:3000/lp/linha-de-vida em mobile e desktop. Verificar os mesmos pontos da Task 7. Bonus: galeria tem 11 imagens — confirmar que todas carregam.

- [ ] **Step 4: Commit**

```bash
git add app/(ads)/lp/linha-de-vida/page.tsx
git commit -m "feat(ads): reposition linha-de-vida LP as complete solution"
```

---

### Task 9: Reescrever LP `ancoragem`

**Files:**
- Modify: `app/(ads)/lp/ancoragem/page.tsx`

- [ ] **Step 1: Substituir o arquivo pelo conteúdo abaixo**

```tsx
import type { Metadata } from "next";
import {
  IconBlueprint,
  IconTool,
  IconAnchor,
  IconShieldCheck,
  IconEye,
  IconShieldLock,
  IconZoomCheck,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsSolutionPillars from "@/components/ads/AdsSolutionPillars";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsGallery from "@/components/ads/AdsGallery";
import AdsTechSpecs from "@/components/ads/AdsTechSpecs";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "ancoragem";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de ancoragem predial (projeto + fabricação + instalação).";

export const metadata: Metadata = {
  title: "Ancoragem Predial com Projeto, Fabricação e ART | Grupo RF Engenharia",
  description:
    "Solução completa em ancoragem predial: pontos em aço inox 304/316, carga de ruptura superior a 7.850 kgf, teste 100%, ART registrada. Filiais em Brasília, Goiânia e São Paulo.",
};

const PILLARS = [
  {
    icon: IconBlueprint,
    title: "Projeto técnico",
    description:
      "Cálculo estrutural e definição dos pontos por engenheiro CREA, conforme carga e layout do edifício.",
  },
  {
    icon: IconTool,
    title: "Fabricação e instalação",
    description:
      "Peças em aço inox rastreável, fabricadas e instaladas pela RF — sem revenda, sem terceiro.",
  },
  {
    icon: IconAnchor,
    title: "Equipamento",
    description:
      "Pontos em aço inox com resistência de 2.500 kgf, muito acima do exigido pela norma.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Teste de arrancamento em 100% dos pontos individualmente, não por amostragem.",
  },
  {
    icon: IconEye,
    title: "Acompanhamento",
    description:
      "Inspeção anual no primeiro ano inclusa e laudo de revalidação quando necessário.",
  },
];

const BENEFITS = [
  {
    icon: IconShieldLock,
    title: "Aço inoxidável rastreável",
    description:
      "Peças com certificado de origem e rastreabilidade completa — materiais premium para longa durabilidade.",
  },
  {
    icon: IconAnchor,
    title: "Resistência 2.500 kgf",
    description:
      "Muito acima do exigido pela norma regulamentadora — segurança com folga para o usuário.",
  },
  {
    icon: IconZoomCheck,
    title: "Teste de arrancamento 100%",
    description:
      "Todos os pontos testados individualmente, não apenas por amostra. Garantia real de resistência.",
  },
  {
    icon: IconFileSearch,
    title: "Laudo técnico + ART inclusos",
    description:
      "Documentação completa pronta para auditoria, fiscalização e obrigações legais.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/ancoragem/ancoragem-01.jpg",
    alt: "Ponto de ancoragem predial instalado em estrutura de edifício",
  },
  {
    src: "/images/ancoragem/ancoragem-02.jpg",
    alt: "Sistema de ancoragem em aço inox fixado em cobertura",
  },
  {
    src: "/images/ancoragem/ancoragem-03.jpg",
    alt: "Detalhe de olhal de ancoragem em aço inox 316",
  },
  {
    src: "/images/ancoragem/ancoragem-04.jpg",
    alt: "Pontos de ancoragem instalados em fachada de edifício comercial",
  },
  {
    src: "/images/ancoragem/ancoragem-05.jpg",
    alt: "Teste de arrancamento em ponto de ancoragem predial",
  },
  {
    src: "/images/ancoragem/ancoragem-06.jpg",
    alt: "Instalação de ancoragem predial em edifício hospitalar",
  },
  {
    src: "/images/ancoragem/ancoragem-07.jpg",
    alt: "Sistema de ancoragem fixo em estrutura de concreto",
  },
  {
    src: "/images/ancoragem/ancoragem-08.jpg",
    alt: "Vista de pontos de ancoragem em cobertura de edifício institucional",
  },
];

const SPEC_GROUPS = [
  {
    heading: "Material",
    items: [
      "Aço inox 304 ou 316",
      "Rastreabilidade completa",
      "Certificado de composição química",
    ],
  },
  {
    heading: "Resistência",
    items: [
      "Carga de ruptura superior a 7.850 kgf (comprovada em laboratório)",
      "Resistência mínima 2.500 kgf (muito acima do exigido por norma)",
    ],
  },
  {
    heading: "Instalação e teste",
    items: [
      "Chumbador químico de alto desempenho",
      "Teste de arrancamento em 100% dos pontos",
    ],
  },
  {
    heading: "Documentação inclusa",
    items: [
      "ART de fabricação",
      "ART de instalação registrada no CREA",
      "Laudo técnico detalhado",
      "Certificado de resistência à corrosão",
    ],
  },
  {
    heading: "Conformidade",
    items: [
      "NR-18",
      "NR-35",
      "NBR 16325-1",
      "NR 10/2015-CBMDF",
      "Portaria 157/2006",
    ],
  },
  {
    heading: "Garantia e inspeção",
    items: ["Garantia de 5 anos", "Inspeção a cada 12 meses"],
  },
];

export default function AncoragemLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Solução Completa em Segurança Predial"
        title="Ancoragem predial resolvida: projeto, fabricação, instalação e ART inclusa."
        subtitle="Pontos em aço inox rastreável com teste de arrancamento 100% e documentação pronta para auditoria. Engenharia completa, do cálculo à certificação. Filiais próprias em Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/ancoragem/ancoragem-01.jpg"
        heroImageAlt="Ponto de ancoragem predial instalado em estrutura"
        lpSlug={LP_SLUG}
      />
      <AdsSolutionPillars
        title="Você não aluga um equipamento. Você recebe a solução pronta."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="O nível de rigor que separa um sistema que passa na auditoria de um que não passa."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais. Equipamento em operação."
        subtitle="Pontos de ancoragem instalados em edifícios, hospitais e centros administrativos."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Sua edificação precisa de ancoragem? Entregamos o sistema pronto."
        description="Do projeto à ART registrada — engenheiro CREA dimensiona os pontos, nossa equipe fabrica e instala com teste de arrancamento 100%."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
```

- [ ] **Step 2: Rodar lint**

Run: `npm run lint`
Expected: sem warnings/errors.

- [ ] **Step 3: Checkpoint de Fase 2 — rodar build**

Run: `npm run build`
Expected: build passa nas 3 LPs.

- [ ] **Step 4: Review visual no browser**

Run: `npm run dev`
Abrir as 3 URLs, mobile e desktop:
- http://localhost:3000/lp/balancim-eletrico
- http://localhost:3000/lp/linha-de-vida
- http://localhost:3000/lp/ancoragem

Verificar:
- Ordem correta em todas: Hero → Pilares → Benefícios → Galeria → Specs → Trust → Social → FinalCTA → Sticky
- Faixa "Filiais próprias em:" aparece no hero das 3
- CTAs corretos por posição nas 3
- Imagens da galeria carregam sem 404
- Sticky mobile não sobrepõe conteúdo

- [ ] **Step 5: Commit**

```bash
git add app/(ads)/lp/ancoragem/page.tsx
git commit -m "feat(ads): reposition ancoragem LP as complete solution"
```

---

## Fase 3 — Documentação

### Task 10: Atualizar `components/ads/README.md`

**Files:**
- Modify: `components/ads/README.md`

- [ ] **Step 1: Adicionar seção documentando os novos componentes e o padrão `ctaLabel`**

Ler o arquivo atual. Após a seção `## Diferenciação por LP` (linha 52 aproximadamente) e antes de `## O que NÃO fazer`, inserir:

```markdown
## Componentes de LP (reposicionamento "Solução Completa")

A partir de 2026-04, as LPs seguem a narrativa "solução completa com engenharia" — não "locação de equipamento". Três componentes carregam essa narrativa:

- **`AdsSolutionPillars`** — os 5 pilares da solução (Projeto · Montagem/Fabricação · Equipamento · Segurança · Acompanhamento). Server component. Usado logo após o hero.
- **`AdsGallery`** — mosaico de imagens reais de obra. Grid 2/3/4 colunas (mobile/tablet/desktop), `aspect-[4/3]`, hover zoom via classe `.card-image-zoom` (requer `group` no wrapper).
- **`AdsTechSpecs`** — especificações técnicas em grupos de listas (heading + bullet items). Server component, sem marketing. Conteúdo extraído das páginas institucionais.

## CTAs por posição

Para manter consistência de jornada, os CTAs de WhatsApp têm copy diferente por posição (não por LP). Todos os componentes de CTA aceitam prop opcional `ctaLabel` com os seguintes defaults:

| Componente | `ctaLabel` default |
|---|---|
| `AdsHero` | `Falar com especialista` |
| `AdsFinalCta` | `Quero orçamento completo` |
| `AdsStickyMobileCta` | `Falar agora` |

Para mudar o default em todas as LPs, edite o default da prop no componente. Para fazer A/B test por LP, passe `ctaLabel` como prop na LP.

```

- [ ] **Step 2: Commit**

```bash
git add components/ads/README.md
git commit -m "docs(ads): document solution pillars, gallery, specs and ctaLabel pattern"
```

---

## Critérios de aceitação final

Após todas as tasks, validar:

**Funcionais (manual no browser):**
- [ ] As 3 LPs renderizam com a nova ordem de seções sem quebrar.
- [ ] Faixa "Filiais próprias em:" aparece no hero das 3.
- [ ] CTAs com a copy correta por posição nas 3 LPs.
- [ ] WhatsApp abre com mensagem "solução completa" pré-preenchida em cada LP.
- [ ] Galeria carrega 8/11/8 imagens (balancim/linha/ancoragem) sem 404.
- [ ] Sticky mobile não sobrepõe conteúdo final.

**Qualidade (automatizável):**
- [ ] `npm run lint` limpo.
- [ ] `npm run build` passa.
- [ ] `robots: noindex` herdado de `(ads)/layout.tsx` (nada sobrescreve).

**Tracking:**
- [ ] No DevTools, inspecionar qualquer CTA de WhatsApp — deve ter `data-ads-cta="whatsapp"` e `data-ads-lp="<slug>"` preservados.

**Regras do README.md:**
- [ ] Nenhum dos novos componentes tem `onClick` (todos são server components exceto `AdsHero`, que já era client).
- [ ] Nenhum novo `Ads*` virou client component desnecessariamente.

---

## Resumo de commits esperados

```
feat(ads): add AdsSolutionPillars component for solution repositioning
feat(ads): add AdsGallery component for real-work photo mosaics
feat(ads): add AdsTechSpecs component for institutional specs
feat(ads): add filiais strip and ctaLabel prop to AdsHero
feat(ads): add ctaLabel prop to AdsFinalCta
feat(ads): add ctaLabel prop to AdsStickyMobileCta
feat(ads): reposition balancim-eletrico LP as complete solution
feat(ads): reposition linha-de-vida LP as complete solution
feat(ads): reposition ancoragem LP as complete solution
docs(ads): document solution pillars, gallery, specs and ctaLabel pattern
```

Total: 10 commits, 3 arquivos novos, 6 arquivos editados, 1 doc atualizado.
