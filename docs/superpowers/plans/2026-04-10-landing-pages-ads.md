# Landing Pages de Ads — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar três landing pages dedicadas ao Google Ads (balancim elétrico, ancoragem, linha de vida) com CTA travado em WhatsApp e layout stripped, sem quebrar nenhuma página institucional existente.

**Architecture:** Refactoring das páginas institucionais para um route group `(site)` isolado; criação de um route group `(ads)` paralelo com layout stripped próprio; componentes dedicados em `components/ads/` reutilizados pelas 3 LPs; conteúdo inline em cada `page.tsx`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion (já instalado), Tabler Icons + Lucide React (já instalados).

**Spec:** `docs/superpowers/specs/2026-04-10-landing-pages-ads-design.md`

---

## Observações gerais para o implementador

- **Não existe framework de testes** neste projeto. A verificação de cada tarefa é sempre: `npm run lint` + `npm run build` + checagem manual no `npm run dev` quando aplicável. O TDD clássico (teste primeiro → implementação) não se aplica aqui — em vez disso, cada tarefa termina com build/lint limpos e navegação manual da rota afetada.
- **Workspace sujo**: este repo tem muitas alterações não-commitadas que **não** fazem parte desta feature. Ao commitar, **sempre use `git add <arquivo-específico>`** — nunca `git add .`, nunca `git add -A`, nunca `git add app/`. Em moves, use `git mv <origem> <destino>` e depois `git status` para confirmar que só os arquivos movidos estão staged.
- **Imports** usam `@/*` (configurado em `tsconfig.json` como `./*` relativo à raiz). Nenhum arquivo em `app/` usa import relativo cruzado — isso foi verificado durante o design e é o que torna o refactoring do `(site)` seguro.
- **Conteúdo em Português** (H1, subtitles, badges, mensagens WhatsApp). **Código, nomes de arquivo, props e comentários em Inglês.**
- **Não criar novos arquivos de dependência nem instalar pacotes.** Tudo que é preciso já está em `package.json`.
- **Sempre rodar `npm run build` depois de mudanças estruturais** (Fase 1 e cada vez que uma rota nova é adicionada). `npm run lint` sozinho não detecta problemas de Next.js como rotas quebradas.
- **Importante sobre o ambiente Windows + Git**: quando for mover diretórios com `git mv`, pode ser necessário fazer em duas etapas se o Windows bloquear — mover para um nome temporário e depois para o final — mas geralmente funciona direto. Se der erro, fazer `git mv` arquivo por arquivo dentro da pasta em vez da pasta inteira.

---

## Fase 1 — Refactoring para route group `(site)`

Esta é a fase de maior risco. O objetivo é mover as 7 pastas/arquivos de primeiro nível do `app/` que hoje servem páginas públicas para dentro de um novo route group `app/(site)/`, sem mudar nenhuma URL pública. URLs são invariantes porque route groups são invisíveis na URL.

**O que se move** (em `app/`):
- `page.tsx` (home)
- `rf-engenharia/` (toda a pasta com subpastas e layouts)
- `rf-locacao/` (toda a pasta com subpastas e layout.tsx de nível intermediário)
- `blog/` (toda a pasta, inclusive `[slug]/`)
- `contato/`
- `sobre/`
- `portfolio/`

**O que NÃO se move:**
- `layout.tsx` (root) — será modificado, não movido
- `globals.css`
- `favicon.ico`

### Task 1: Baseline — capturar lista de rotas atuais do build

**Files:**
- Nenhum criado ou modificado. Puramente leitura/captura.

**Objetivo:** Gerar um snapshot textual das rotas do build atual para comparar depois do refactoring. Se qualquer rota sumir, some no diff.

- [ ] **Step 1: Rodar o build atual e salvar a saída**

Run:
```bash
npm run build 2>&1 | tee /tmp/build-before.log
```

Expected: build completa com sucesso. Procurar na saída a tabela "Route" do Next.js listando todas as rotas (geralmente começa com "Route (app)" ou similar). Salvar mentalmente (ou em um arquivo de nota local) as URLs listadas — serão comparadas ao final da Fase 1.

Se o build **falhar antes de começar**, significa que o workspace sujo já tem alguma quebra. **Parar e alertar o usuário antes de continuar** — não prosseguir com o refactoring em cima de uma base quebrada.

- [ ] **Step 2: Anotar todas as rotas estáticas da saída**

Esperadas (baseado no spec e exploração do repo):
- `/`
- `/blog`
- `/blog/[slug]` (dinâmica)
- `/contato`
- `/sobre`
- `/portfolio`
- `/rf-engenharia`
- `/rf-engenharia/ancoragem-predial`
- `/rf-engenharia/construcao-metalica`
- `/rf-engenharia/inspecao-anual`
- `/rf-engenharia/linha-de-vida`
- `/rf-engenharia/projetos-laudos`
- `/rf-engenharia/treinamentos`
- `/rf-engenharia/produtos/escada-marinheiro`
- `/rf-engenharia/produtos/gaiola-grua`
- `/rf-engenharia/produtos/kit-linha-vida-telhados`
- `/rf-engenharia/produtos/linha-vida-concretagem`
- `/rf-engenharia/produtos/linha-vida-escadas-marinheiro`
- `/rf-engenharia/produtos/material-ancoragem`
- `/rf-engenharia/produtos/plataforma-grua`
- `/rf-locacao`
- `/rf-locacao/andaime-fachadeiro`
- `/rf-locacao/balancim-eletrico`
- `/rf-locacao/cadeirinha-cabo-aco`
- `/rf-locacao/elevador-cremalheira`
- `/rf-locacao/equipamentos-diversos`
- `/rf-locacao/icamento`
- `/rf-locacao/mini-grua`
- `/rf-locacao/protecoes-coletivas`

Confirmar que o build realmente listou essas rotas. Se faltar alguma ou tiver extras, investigar antes de prosseguir.

- [ ] **Step 3: Nenhum commit**

Esta task é só verificação de baseline, não há alteração.

---

### Task 2: Criar `app/(site)/layout.tsx` com Header, Footer e FloatingWhatsApp

**Files:**
- Create: `app/(site)/layout.tsx`

**Objetivo:** Criar o novo layout do route group `(site)` contendo os 3 componentes que hoje estão no root layout. Ainda **não** mover nada — apenas criar o layout vazio. O Next vai ignorá-lo até as páginas serem movidas para dentro de `(site)/`.

- [ ] **Step 1: Criar o arquivo `app/(site)/layout.tsx`**

Conteúdo exato:

```tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass sem erros ou warnings novos. O novo arquivo não vai causar falha — ele é sintaticamente válido.

- [ ] **Step 3: Verificar build**

Run:
```bash
npm run build
```

Expected: pass. O layout em `(site)/` ainda não tem nenhuma rota dentro, então o Next vai efetivamente ignorá-lo. As rotas continuam servindo do root layout. **Todas as rotas do Step 2 da Task 1 devem continuar listadas.**

- [ ] **Step 4: Commit**

```bash
git add app/\(site\)/layout.tsx
git status
```

Verificar que só `app/(site)/layout.tsx` está staged. Se houver outros arquivos staged por acidente, usar `git restore --staged <arquivo>` antes de commitar.

```bash
git commit -m "refactor: add (site) route group layout with Header, Footer, FloatingWhatsApp

Preparação para mover páginas institucionais para dentro de (site),
permitindo que futuras landing pages de ads em (ads) tenham seu próprio
layout stripped sem herdar header/footer do site.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Simplificar `app/layout.tsx` para passthrough

**Files:**
- Modify: `app/layout.tsx`

**Objetivo:** Remover Header, Footer e FloatingWhatsApp do root layout, deixando apenas `<html>`, `<body>`, fontes e metadata global. **Isso vai temporariamente tirar o Header/Footer de todas as páginas porque elas ainda não foram movidas para `(site)/`. Build continua passando, mas visualmente o site fica quebrado até a Task 4.**

- [ ] **Step 1: Substituir o conteúdo de `app/layout.tsx`**

Conteúdo atual (para referência):

```tsx
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo RF Engenharia | Segurança em Altura desde 2006",
    template: "%s | Grupo RF Engenharia",
  },
  description:
    "Especialistas em segurança do trabalho em altura. Ancoragem predial, linha de vida, construção metálica e locação de equipamentos. Atuando desde 2006 em todo o Brasil.",
  keywords: [
    "ancoragem predial",
    "linha de vida",
    "segurança em altura",
    "NR-35",
    "NR-18",
    "balancim elétrico",
    "elevador cremalheira",
    "construção metálica",
    "RF Engenharia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
```

Substituir por:

```tsx
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo RF Engenharia | Segurança em Altura desde 2006",
    template: "%s | Grupo RF Engenharia",
  },
  description:
    "Especialistas em segurança do trabalho em altura. Ancoragem predial, linha de vida, construção metálica e locação de equipamentos. Atuando desde 2006 em todo o Brasil.",
  keywords: [
    "ancoragem predial",
    "linha de vida",
    "segurança em altura",
    "NR-35",
    "NR-18",
    "balancim elétrico",
    "elevador cremalheira",
    "construção metálica",
    "RF Engenharia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

Diferenças:
- Removidos 3 imports: `Header`, `Footer`, `FloatingWhatsApp`
- No body, `<main>...</main>` + componentes foram substituídos por `{children}` direto
- Classes `min-h-screen` do `<main>` não fazem mais parte do root (quem precisar coloca no seu layout)

- [ ] **Step 2: Verificar build**

Run:
```bash
npm run build
```

Expected: build pass. Todas as rotas ainda listadas. Visualmente as páginas estão sem Header/Footer neste momento, mas isso é esperado e será resolvido na Task 4 com o move.

- [ ] **Step 3: NÃO commitar ainda**

**Importante:** este step é parte de um refactoring que só tem sentido junto com a Task 4. Commitar agora deixaria o site quebrado em um estado intermediário. O commit vai ser feito ao final da Task 4 junto com o move.

---

### Task 4: Mover todas as páginas institucionais para `app/(site)/`

**Files:**
- Move: `app/page.tsx` → `app/(site)/page.tsx`
- Move: `app/rf-engenharia/` → `app/(site)/rf-engenharia/`
- Move: `app/rf-locacao/` → `app/(site)/rf-locacao/`
- Move: `app/blog/` → `app/(site)/blog/`
- Move: `app/contato/` → `app/(site)/contato/`
- Move: `app/sobre/` → `app/(site)/sobre/`
- Move: `app/portfolio/` → `app/(site)/portfolio/`

**Objetivo:** Consolidar o move numa única operação atômica. Usar `git mv` para preservar histórico de git.

- [ ] **Step 1: Mover `app/page.tsx`**

Run:
```bash
git mv app/page.tsx "app/(site)/page.tsx"
```

Verificação: `app/(site)/page.tsx` existe, `app/page.tsx` não existe mais.

- [ ] **Step 2: Mover `app/rf-engenharia/`**

Run:
```bash
git mv app/rf-engenharia "app/(site)/rf-engenharia"
```

Se o comando falhar no Windows com "directory not empty" ou similar, usar abordagem de fallback:

```bash
mkdir -p "app/(site)/rf-engenharia"
git mv app/rf-engenharia/page.tsx "app/(site)/rf-engenharia/page.tsx"
git mv app/rf-engenharia/ancoragem-predial "app/(site)/rf-engenharia/ancoragem-predial"
# ... repetir para cada subpasta
```

Verificação: `ls "app/(site)/rf-engenharia/"` mostra `ancoragem-predial`, `construcao-metalica`, `inspecao-anual`, `linha-de-vida`, `page.tsx`, `produtos`, `projetos-laudos`, `treinamentos`. E `ls app/rf-engenharia/` dá erro "No such file or directory".

- [ ] **Step 3: Mover `app/rf-locacao/`**

Run:
```bash
git mv app/rf-locacao "app/(site)/rf-locacao"
```

(Mesma abordagem de fallback se falhar.)

Verificação: `ls "app/(site)/rf-locacao/"` mostra `andaime-fachadeiro`, `balancim-eletrico`, `cadeirinha-cabo-aco`, `elevador-cremalheira`, `equipamentos-diversos`, `icamento`, `layout.tsx`, `mini-grua`, `page.tsx`, `protecoes-coletivas`.

- [ ] **Step 4: Mover `app/blog/`**

Run:
```bash
git mv app/blog "app/(site)/blog"
```

Verificação: `ls "app/(site)/blog/"` mostra os arquivos esperados, incluindo a subpasta `[slug]`.

- [ ] **Step 5: Mover `app/contato/`**

Run:
```bash
git mv app/contato "app/(site)/contato"
```

- [ ] **Step 6: Mover `app/sobre/`**

Run:
```bash
git mv app/sobre "app/(site)/sobre"
```

- [ ] **Step 7: Mover `app/portfolio/`**

Run:
```bash
git mv app/portfolio "app/(site)/portfolio"
```

- [ ] **Step 8: Verificar estado do `app/` raiz**

Run:
```bash
ls app
```

Expected: a saída deve conter exatamente:
- `(site)` (pasta)
- `favicon.ico`
- `globals.css`
- `layout.tsx`

E NÃO deve conter nenhuma das pastas movidas (`rf-engenharia`, `rf-locacao`, `blog`, `contato`, `sobre`, `portfolio`) nem `page.tsx` direto.

- [ ] **Step 9: Verificar `git status`**

Run:
```bash
git status
```

Expected: muitos `renamed:` indicando que o git reconheceu as movimentações como renames. **NÃO** deve haver `deleted:` seguido de `new file:` para os mesmos arquivos — se aparecer assim, o git perdeu o rastro do rename e o histórico será prejudicado, mas o código ainda funciona (só é mais feio no blame).

Também deve haver 1 arquivo modificado: `app/layout.tsx` (da Task 3, ainda sem commitar).

- [ ] **Step 10: Verificar build**

Run:
```bash
npm run build
```

Expected: **pass**. Todas as 29+ rotas listadas no Step 2 da Task 1 devem aparecer de novo no output, com **exatamente os mesmos paths públicos** (route group `(site)` é invisível na URL).

**Se alguma rota sumir ou se o build quebrar, NÃO commitar.** Debug:
1. Verificar se algum import quebrou (erro vai apontar o arquivo)
2. Verificar se algum `layout.tsx` intermediário ficou pra trás (ex: `app/(site)/rf-locacao/layout.tsx` precisa estar junto)
3. Verificar se o route group `(site)` realmente foi criado (com parênteses)

- [ ] **Step 11: Verificar visualmente no dev server**

Run:
```bash
npm run dev
```

Abrir em paralelo estas URLs e confirmar que todas carregam com Header + Footer + FloatingWhatsApp visíveis:
- http://localhost:3000/
- http://localhost:3000/rf-locacao/balancim-eletrico
- http://localhost:3000/rf-engenharia/ancoragem-predial
- http://localhost:3000/rf-engenharia/linha-de-vida
- http://localhost:3000/blog
- http://localhost:3000/contato
- http://localhost:3000/sobre
- http://localhost:3000/portfolio

Parar o dev server com `Ctrl+C` depois da verificação.

- [ ] **Step 12: Commit do refactoring completo**

Run:
```bash
git add "app/(site)" app/layout.tsx
git status
```

Verificar que o staging area contém:
- `renamed: app/page.tsx -> app/(site)/page.tsx`
- `renamed: app/rf-engenharia/... -> app/(site)/rf-engenharia/...` (um para cada arquivo)
- similar para blog, contato, sobre, portfolio, rf-locacao
- `modified: app/layout.tsx`
- **Nada mais** do workspace sujo.

Se houver outros arquivos staged por engano, desfazer com `git restore --staged <arquivo>`.

Commit:
```bash
git commit -m "refactor: move institutional pages into (site) route group

Mover todas as páginas do site institucional para um route group (site)
com seu próprio layout contendo Header, Footer e FloatingWhatsApp.
Root layout vira passthrough para permitir que o futuro route group
(ads) tenha seu próprio layout stripped independente.

URLs públicas invariantes — route groups são invisíveis na URL.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

Verificar: `git log --oneline -3` mostra o novo commit no topo.

---

### Task 5: Checkpoint de Fase 1 — regressão completa no dev server

**Files:**
- Nenhum modificado. Só verificação.

**Objetivo:** Depois do refactoring, passar o olho em um conjunto mais amplo de rotas para garantir zero regressão.

- [ ] **Step 1: Abrir dev server**

Run:
```bash
npm run dev
```

- [ ] **Step 2: Testar rotas estáticas**

Navegar por cada uma destas URLs e confirmar: página carrega sem erro, Header visível, Footer visível, nenhum erro no console do browser, imagens carregando.

Rotas a testar:
- [ ] `/`
- [ ] `/blog`
- [ ] `/contato`
- [ ] `/sobre`
- [ ] `/portfolio`
- [ ] `/rf-engenharia`
- [ ] `/rf-engenharia/ancoragem-predial`
- [ ] `/rf-engenharia/construcao-metalica`
- [ ] `/rf-engenharia/inspecao-anual`
- [ ] `/rf-engenharia/linha-de-vida`
- [ ] `/rf-engenharia/projetos-laudos`
- [ ] `/rf-engenharia/treinamentos`
- [ ] `/rf-engenharia/produtos/escada-marinheiro`
- [ ] `/rf-engenharia/produtos/gaiola-grua`
- [ ] `/rf-engenharia/produtos/kit-linha-vida-telhados`
- [ ] `/rf-engenharia/produtos/linha-vida-concretagem`
- [ ] `/rf-engenharia/produtos/linha-vida-escadas-marinheiro`
- [ ] `/rf-engenharia/produtos/material-ancoragem`
- [ ] `/rf-engenharia/produtos/plataforma-grua`
- [ ] `/rf-locacao`
- [ ] `/rf-locacao/andaime-fachadeiro`
- [ ] `/rf-locacao/balancim-eletrico`
- [ ] `/rf-locacao/cadeirinha-cabo-aco`
- [ ] `/rf-locacao/elevador-cremalheira`
- [ ] `/rf-locacao/equipamentos-diversos`
- [ ] `/rf-locacao/icamento`
- [ ] `/rf-locacao/mini-grua`
- [ ] `/rf-locacao/protecoes-coletivas`

Se qualquer uma quebrar, **reverter o commit** da Task 4 com `git revert HEAD` e investigar antes de prosseguir.

- [ ] **Step 3: Testar rota dinâmica do blog**

Navegar até `/blog` na UI, clicar em qualquer post para garantir que `/blog/[slug]` dinâmico também funciona.

- [ ] **Step 4: Parar dev server**

Ctrl+C.

- [ ] **Step 5: Nenhum commit**

Apenas verificação.

---

## Fase 2 — Infraestrutura compartilhada do `(ads)`

### Task 6: Criar helper `components/ads/whatsapp.ts`

**Files:**
- Create: `components/ads/whatsapp.ts`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```ts
import { contact } from "@/data/contact";

/**
 * Build a wa.me URL with a pre-filled message for the Grupo RF WhatsApp contact.
 * Uses contact.whatsapp from data/contact.ts.
 */
export function buildWhatsAppHref(message: string): string {
  const digits = contact.whatsapp.replace("+", "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/whatsapp.ts
git commit -m "feat(ads): add buildWhatsAppHref helper for landing pages

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Criar `app/(ads)/layout.tsx` com metadata noindex (placeholder temporário)

**Files:**
- Create: `app/(ads)/layout.tsx`

**Objetivo:** Criar o layout do route group `(ads)` inicialmente com um passthrough simples — sem `AdsTopBar`/`AdsFooter` ainda, porque esses componentes não existem. Isto permite adicionar páginas em `(ads)` nas próximas tasks e ter builds válidos no meio do caminho. O `AdsTopBar`/`AdsFooter` serão plugados depois (Task 15).

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TRACKING: quando tiver GTM, inserir aqui:
  //   import Script from "next/script";
  //   <Script id="gtm" strategy="afterInteractive">{`...`}</Script>
  // E inserir o <noscript> do GTM antes de {children}.
  return <>{children}</>;
}
```

- [ ] **Step 2: Verificar lint e build**

Run:
```bash
npm run lint
npm run build
```

Expected: pass. O route group `(ads)` ainda não tem páginas, então não aparece no output de rotas, mas o Next não reclama.

- [ ] **Step 3: Commit**

```bash
git add "app/(ads)/layout.tsx"
git commit -m "feat(ads): scaffold (ads) route group layout with noindex metadata

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Criar `components/ads/AdsTopBar.tsx`

**Files:**
- Create: `components/ads/AdsTopBar.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import Image from "next/image";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsTopBarProps {
  whatsappMessage: string;
  lpSlug: string;
}

export default function AdsTopBar({ whatsappMessage, lpSlug }: AdsTopBarProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo/logo-rf-engenharia.jpg"
            alt="Grupo RF Engenharia"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-ads-cta="whatsapp"
            data-ads-lp={lpSlug}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp-dark transition-colors"
          >
            <IconBrandWhatsapp className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={telHref}
            data-ads-cta="phone"
            data-ads-lp={lpSlug}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            <IconPhone className="w-5 h-5" />
            {contact.tollFree}
          </a>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass. Se houver warning sobre `<img>` vs `<Image>`, já está usando `<Image>`. Se houver warning de `IconBrandWhatsapp` não existir, trocar para `IconBrandWhatsapp` → verificar nome real no tabler (existe em `@tabler/icons-react`).

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsTopBar.tsx
git commit -m "feat(ads): add AdsTopBar with logo and WhatsApp/phone CTAs

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: Criar `components/ads/AdsFooter.tsx`

**Files:**
- Create: `components/ads/AdsFooter.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import Link from "next/link";
import { contact, offices, companyInfo } from "@/data/contact";

export default function AdsFooter() {
  return (
    <footer className="bg-bg-darkest text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
        <div className="space-y-1">
          <p className="text-gray-200 font-semibold">
            {companyInfo.name} · CNPJ XX.XXX.XXX/0001-XX
          </p>
          <p>
            CREA-DF {companyInfo.creaEngenharia} · CREA-DF {companyInfo.creaLocacao} ·{" "}
            {companyInfo.responsavelTecnico.name} — CREA{" "}
            {companyInfo.responsavelTecnico.crea}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div key={office.city} className="space-y-1">
              <p className="text-gray-200 font-semibold">
                {office.city} / {office.state}
              </p>
              <p>{office.address}</p>
              {office.cep && <p>CEP {office.cep}</p>}
              <p>{office.phones.join(" · ")}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>
            {contact.tollFree} · {contact.emailEngenharia}
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} {companyInfo.name} ·{" "}
            <Link
              href="/lp/politica-de-privacidade"
              className="underline hover:text-gray-200"
            >
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsFooter.tsx
git commit -m "feat(ads): add AdsFooter with CNPJ placeholder, CREA, 3 offices

CNPJ marcado como placeholder para substituição pré-go-live.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: Plugar `AdsTopBar` e `AdsFooter` no `app/(ads)/layout.tsx`

**Files:**
- Modify: `app/(ads)/layout.tsx`

**Objetivo:** Agora que os componentes existem, usar no layout. O `AdsTopBar` precisa de `whatsappMessage` e `lpSlug` por prop — o layout não tem essa informação. **Solução:** cada page passa essas infos ao topbar, ou — para não obrigar cada page a renderizar seu próprio topbar — o layout renderiza um topbar "genérico" com uma mensagem padrão, e cada page renderiza adicionalmente seus próprios CTAs dentro do conteúdo.

**Decisão do spec**: o `AdsTopBar` fica no layout com uma mensagem genérica `"Olá, tenho interesse nos serviços da RF Engenharia."` e `lpSlug="generic"`. Cada LP renderiza seus CTAs próprios com mensagens específicas no `AdsHero`, `AdsFinalCta` e `AdsStickyMobileCta` (que ficam nas pages, não no layout).

Isso é mais pragmático que passar props do layout para as pages via Context — mantém o layout simples e os dados fluem do page pra baixo.

- [ ] **Step 1: Substituir o conteúdo de `app/(ads)/layout.tsx`**

Substituir o arquivo inteiro por:

```tsx
import type { Metadata } from "next";
import AdsTopBar from "@/components/ads/AdsTopBar";
import AdsFooter from "@/components/ads/AdsFooter";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TRACKING: quando tiver GTM, inserir aqui:
  //   import Script from "next/script";
  //   <Script id="gtm" strategy="afterInteractive">{`...`}</Script>
  // E inserir o <noscript> do GTM antes do AdsTopBar.
  return (
    <>
      <AdsTopBar
        whatsappMessage="Olá, tenho interesse nos serviços da RF Engenharia."
        lpSlug="generic"
      />
      <main>{children}</main>
      <AdsFooter />
    </>
  );
}
```

- [ ] **Step 2: Verificar lint e build**

Run:
```bash
npm run lint
npm run build
```

Expected: pass. O route group `(ads)` continua sem páginas próprias, então o build não cria novas rotas, mas o `AdsTopBar`/`AdsFooter` são type-checked.

- [ ] **Step 3: Commit**

```bash
git add "app/(ads)/layout.tsx"
git commit -m "feat(ads): wire AdsTopBar and AdsFooter into (ads) layout

Layout passa mensagem genérica para o topbar; pages individuais
renderizam CTAs com mensagens específicas por produto.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: Criar `components/ads/AdsHero.tsx`

**Files:**
- Create: `components/ads/AdsHero.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
"use client";

import Image from "next/image";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
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
}

const TRUST_LOGOS = [
  { src: "/images/clients/cliente-bb.jpg", alt: "Banco do Brasil" },
  { src: "/images/clients/cliente-caixa.jpg", alt: "Caixa Econômica Federal" },
  { src: "/images/clients/cliente-sirio-libanes.jpg", alt: "Hospital Sírio-Libanês" },
  { src: "/images/clients/cliente-mrv.png", alt: "MRV" },
  { src: "/images/clients/cliente-odebrecht.jpg", alt: "Odebrecht" },
];

export default function AdsHero({
  badge,
  title,
  subtitle,
  whatsappMessage,
  heroImage,
  heroImageAlt,
  lpSlug,
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
                Falar no WhatsApp
              </a>
              <a
                href={telHref}
                data-ads-cta="phone"
                data-ads-lp={lpSlug}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 border-gray-300 text-gray-800 font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                <IconPhone className="w-5 h-5" />
                {contact.tollFree}
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-text-light/70 mb-4">
                Confiança de quem já contratou:
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {TRUST_LOGOS.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={40}
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

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsHero.tsx
git commit -m "feat(ads): add AdsHero with CTAs, trust logos bar and hero image

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 12: Criar `components/ads/AdsBenefitsGrid.tsx`

**Files:**
- Create: `components/ads/AdsBenefitsGrid.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import type { ComponentType } from "react";

interface Benefit {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsBenefitsGridProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

export default function AdsBenefitsGrid({
  title,
  subtitle,
  benefits,
}: AdsBenefitsGridProps) {
  return (
    <section className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
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
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-4">
                <benefit.icon className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsBenefitsGrid.tsx
git commit -m "feat(ads): add AdsBenefitsGrid (2x2 grid of benefit cards)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 13: Criar `components/ads/AdsTrustBadges.tsx`

**Files:**
- Create: `components/ads/AdsTrustBadges.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import { IconCircleCheck } from "@tabler/icons-react";
import { companyInfo } from "@/data/contact";

const BADGES = [
  `CREA-DF ${companyInfo.creaEngenharia}`,
  `CREA-DF ${companyInfo.creaLocacao}`,
  "NR-18",
  "NR-35",
  "ART Inclusa",
  "Laudo Técnico",
  `${companyInfo.responsavelTecnico.name} — CREA ${companyInfo.responsavelTecnico.crea}`,
];

export default function AdsTrustBadges() {
  return (
    <section className="py-10 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-medium/10 text-primary-medium border border-primary-medium/20"
            >
              <IconCircleCheck className="w-3.5 h-3.5" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsTrustBadges.tsx
git commit -m "feat(ads): add AdsTrustBadges with CREA, NR-18/35, ART, Laudo pills

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 14: Criar `components/ads/AdsSocialProof.tsx`

**Files:**
- Create: `components/ads/AdsSocialProof.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import Image from "next/image";

const CLIENTS = [
  { src: "/images/clients/cliente-bb.jpg", alt: "Banco do Brasil" },
  { src: "/images/clients/cliente-caixa.jpg", alt: "Caixa Econômica Federal" },
  { src: "/images/clients/cliente-sirio-libanes.jpg", alt: "Hospital Sírio-Libanês" },
  { src: "/images/clients/cliente-mrv.png", alt: "MRV" },
  { src: "/images/clients/cliente-odebrecht.jpg", alt: "Odebrecht" },
  { src: "/images/clients/cliente-tcu.jpg", alt: "TCU" },
  { src: "/images/clients/cliente-br.png", alt: "BR" },
  { src: "/images/clients/cliente-brasal.jpeg", alt: "Brasal" },
  { src: "/images/clients/cliente-cc.png", alt: "Conjunto Nacional" },
  { src: "/images/clients/cliente-emplavi.jpg", alt: "Emplavi" },
  { src: "/images/clients/cliente-jc.png", alt: "JCGontijo" },
  { src: "/images/clients/cliente-ministerio-economia.jpg", alt: "Ministério da Economia" },
  { src: "/images/clients/cliente-sabin.jpg", alt: "Sabin" },
  { src: "/images/clients/cliente-via.png", alt: "Via" },
];

export default function AdsSocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            Quem confia na RF Engenharia
          </h2>
          <p className="mt-3 text-text-light">
            Clientes que escolheram nossa engenharia para proteger suas obras e instalações.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.src}
              className="flex items-center justify-center h-20 p-3 bg-white rounded-xl border border-gray-200"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsSocialProof.tsx
git commit -m "feat(ads): add AdsSocialProof with grid of 14 client logos

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 15: Criar `components/ads/AdsFinalCta.tsx`

**Files:**
- Create: `components/ads/AdsFinalCta.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsFinalCtaProps {
  title: string;
  description: string;
  whatsappMessage: string;
  lpSlug: string;
}

export default function AdsFinalCta({
  title,
  description,
  whatsappMessage,
  lpSlug,
}: AdsFinalCtaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-primary via-primary-medium to-primary-light relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-ads-cta="whatsapp"
            data-ads-lp={lpSlug}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white font-bold rounded-lg hover:bg-whatsapp-dark transition-colors text-lg shadow-lg"
          >
            <IconBrandWhatsapp className="w-6 h-6" />
            Falar no WhatsApp
          </a>
          <a
            href={telHref}
            data-ads-cta="phone"
            data-ads-lp={lpSlug}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            <IconPhone className="w-5 h-5" />
            {contact.tollFree}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsFinalCta.tsx
git commit -m "feat(ads): add AdsFinalCta closing section with gradient and CTAs

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 16: Criar `components/ads/AdsStickyMobileCta.tsx`

**Files:**
- Create: `components/ads/AdsStickyMobileCta.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsStickyMobileCtaProps {
  whatsappMessage: string;
  lpSlug: string;
}

export default function AdsStickyMobileCta({
  whatsappMessage,
  lpSlug,
}: AdsStickyMobileCtaProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-ads-cta="whatsapp"
        data-ads-lp={lpSlug}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-whatsapp text-white font-bold text-base"
      >
        <IconBrandWhatsapp className="w-6 h-6" />
        Falar no WhatsApp
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add components/ads/AdsStickyMobileCta.tsx
git commit -m "feat(ads): add AdsStickyMobileCta (mobile-only fixed bottom CTA)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Fase 3 — As 3 landing pages

### Task 17: Criar `app/(ads)/lp/balancim-eletrico/page.tsx`

**Files:**
- Create: `app/(ads)/lp/balancim-eletrico/page.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import type { Metadata } from "next";
import {
  IconShieldCheck,
  IconCircleCheck,
  IconBuildingSkyscraper,
  IconTool,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "balancim-eletrico";
const WHATSAPP_MESSAGE =
  "Olá, tenho interesse no aluguel de balancim elétrico. Pode me passar um orçamento?";

export const metadata: Metadata = {
  title: "Aluguel de Balancim Elétrico | Grupo RF Engenharia",
  description:
    "Locação de balancim elétrico com ART, laudo técnico e projeto de instalação. Atendemos Brasília, Goiânia e São Paulo. Fale com um especialista.",
};

const BENEFITS = [
  {
    icon: IconShieldCheck,
    title: "Engenharia inclusa",
    description:
      "ART, laudo técnico e projeto de instalação em 100% das locações — documentação pronta para auditoria.",
  },
  {
    icon: IconCircleCheck,
    title: "Conformidade NR-18/NR-35",
    description:
      "Equipamento inspecionado e conforme norma regulamentadora de trabalho em altura.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Atendimento nas 3 praças",
    description:
      "Frota própria em Brasília, Goiânia e São Paulo. Visita técnica rápida e orçamento no mesmo dia.",
  },
  {
    icon: IconTool,
    title: "Suporte do início ao fim",
    description:
      "Montagem, treinamento dos operadores e manutenção preventiva durante todo o período de locação.",
  },
];

export default function BalancimEletricoLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Locação de Equipamentos"
        title="Aluguel de Balancim Elétrico com Engenharia Inclusa"
        subtitle="Plataforma suspensa motorizada para fachadas — com ART, laudo técnico e projeto de instalação. Atendemos Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/balancim/balancim-08.jpg"
        heroImageAlt="Balancim elétrico em operação em obra de fachada"
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Por que alugar balancim elétrico com a RF?"
        subtitle="Mais do que equipamento: engenharia, conformidade e suporte."
        benefits={BENEFITS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Precisa de balancim elétrico para sua obra?"
        description="Fale agora com nossos especialistas pelo WhatsApp e receba orçamento rápido."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
```

Notas sobre o código:
- `<div className="pb-24 md:pb-0">` existe para evitar que o `AdsStickyMobileCta` cubra o conteúdo final no mobile.
- `const LP_SLUG` e `const WHATSAPP_MESSAGE` no topo facilitam manutenção.

- [ ] **Step 2: Verificar build**

Run:
```bash
npm run build
```

Expected: pass. No output das rotas deve aparecer `/lp/balancim-eletrico` como nova rota estática.

- [ ] **Step 3: Verificar visualmente no dev server**

Run:
```bash
npm run dev
```

Abrir http://localhost:3000/lp/balancim-eletrico e confirmar:
- [ ] Header do site NÃO aparece (só o `AdsTopBar` minimalista)
- [ ] Footer do site NÃO aparece (só o `AdsFooter` stripped)
- [ ] FloatingWhatsApp do site NÃO aparece
- [ ] `AdsTopBar` sticky no topo com logo + WhatsApp (+ 0800 no desktop)
- [ ] Hero com badge, H1, subtitle, CTAs, trust logos e imagem
- [ ] Seção de benefícios (2x2)
- [ ] Trust badges (CREA, NR-18, etc.)
- [ ] Grid de logos de clientes
- [ ] CTA final em gradient
- [ ] No mobile (DevTools): sticky CTA no bottom funcionando
- [ ] Nenhum erro no console

Parar dev server.

- [ ] **Step 4: Commit**

```bash
git add "app/(ads)/lp/balancim-eletrico/page.tsx"
git commit -m "feat(ads): add balancim elétrico landing page

Rota: /lp/balancim-eletrico

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 18: Criar `app/(ads)/lp/ancoragem/page.tsx`

**Files:**
- Create: `app/(ads)/lp/ancoragem/page.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import type { Metadata } from "next";
import {
  IconShieldLock,
  IconAnchor,
  IconZoomCheck,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "ancoragem";
const WHATSAPP_MESSAGE =
  "Olá, preciso de orçamento para sistema de ancoragem predial.";

export const metadata: Metadata = {
  title: "Ancoragem Predial com ART | Grupo RF Engenharia",
  description:
    "Pontos de ancoragem em aço inox com teste de arrancamento 100%. Projeto, fabricação e instalação com ART inclusa. Fale com um especialista.",
};

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

export default function AncoragemLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="RF Engenharia"
        title="Ancoragem Predial Definitiva com ART e Teste de Arrancamento"
        subtitle="Pontos de ancoragem em aço inox, resistência 2.500 kgf, teste 100% certificado. Projeto, fabricação e instalação pela RF Engenharia."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/ancoragem/ancoragem-01.jpg"
        heroImageAlt="Ponto de ancoragem predial instalado em estrutura"
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Por que contratar ancoragem com a RF?"
        subtitle="Engenharia, rastreabilidade e teste de arrancamento em 100% dos pontos."
        benefits={BENEFITS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Pronto para garantir a segurança da sua edificação?"
        description="Fale agora com nossos engenheiros pelo WhatsApp e receba um orçamento técnico."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
```

- [ ] **Step 2: Verificar build**

Run:
```bash
npm run build
```

Expected: pass. Rota `/lp/ancoragem` deve aparecer no output.

- [ ] **Step 3: Verificar visualmente no dev server**

Run:
```bash
npm run dev
```

Abrir http://localhost:3000/lp/ancoragem e repetir o checklist visual da Task 17 Step 3.

- [ ] **Step 4: Commit**

```bash
git add "app/(ads)/lp/ancoragem/page.tsx"
git commit -m "feat(ads): add ancoragem predial landing page

Rota: /lp/ancoragem

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 19: Criar `app/(ads)/lp/linha-de-vida/page.tsx`

**Files:**
- Create: `app/(ads)/lp/linha-de-vida/page.tsx`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import type { Metadata } from "next";
import {
  IconRouteAltRight,
  IconBuildingBridge,
  IconShieldCheck,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "linha-de-vida";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para instalação de linha de vida.";

export const metadata: Metadata = {
  title: "Linha de Vida com Projeto e Instalação | Grupo RF Engenharia",
  description:
    "Sistemas de linha de vida flexível e rígida para edifícios, galpões, hospitais e indústrias. Projeto, instalação e certificação pela RF Engenharia.",
};

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

export default function LinhaDeVidaLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="RF Engenharia"
        title="Linha de Vida Predial e Industrial com Projeto e Instalação"
        subtitle="Sistemas flexíveis e rígidos para edifícios, galpões, hospitais e indústrias. Projeto, fabricação, instalação e certificação pela RF Engenharia."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/linha-de-vida/linha-vida-01.jpg"
        heroImageAlt="Linha de vida instalada em cobertura industrial"
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Por que contratar linha de vida com a RF?"
        subtitle="Projeto dedicado por engenheiro CREA, instalação sem infiltração, certificação completa."
        benefits={BENEFITS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Sua instalação precisa de linha de vida?"
        description="Fale agora com nossos engenheiros pelo WhatsApp e receba um projeto sob medida."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
```

- [ ] **Step 2: Verificar build**

Run:
```bash
npm run build
```

Expected: pass. Rota `/lp/linha-de-vida` deve aparecer no output.

- [ ] **Step 3: Verificar visualmente no dev server**

Run:
```bash
npm run dev
```

Abrir http://localhost:3000/lp/linha-de-vida e repetir o checklist visual da Task 17 Step 3.

- [ ] **Step 4: Commit**

```bash
git add "app/(ads)/lp/linha-de-vida/page.tsx"
git commit -m "feat(ads): add linha de vida landing page

Rota: /lp/linha-de-vida

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Fase 4 — Página de política de privacidade

### Task 20: Criar `app/(ads)/lp/politica-de-privacidade/page.tsx`

**Files:**
- Create: `app/(ads)/lp/politica-de-privacidade/page.tsx`

**Importante:** o texto abaixo é boilerplate. Está explicitamente marcado como **requerendo revisão jurídica antes do go-live** na lista de placeholders do spec. Não tem valor legal como está.

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```tsx
import type { Metadata } from "next";
import { companyInfo, contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade | Grupo RF Engenharia",
  description:
    "Política de privacidade do Grupo RF Engenharia — coleta, uso e proteção de dados pessoais conforme a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 text-text-light leading-relaxed">
      <h1 className="text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8">
        Política de Privacidade
      </h1>

      <p className="mb-6">
        Esta página descreve como o <strong>{companyInfo.name}</strong>{" "}
        (&quot;RF&quot;, &quot;nós&quot;) coleta, utiliza e protege dados pessoais dos
        visitantes de suas landing pages. Ao entrar em contato conosco pelos
        canais aqui indicados, você concorda com os termos descritos abaixo.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        1. Quais dados coletamos
      </h2>
      <p className="mb-6">
        Quando você clica em nosso botão de WhatsApp ou liga para nosso telefone
        de contato, podemos receber seu nome, número de telefone e o conteúdo
        da mensagem que você enviar. Esses dados são fornecidos voluntariamente
        por você no momento do contato.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        2. Finalidade do uso
      </h2>
      <p className="mb-6">
        Os dados coletados são utilizados exclusivamente para responder sua
        solicitação comercial, elaborar orçamentos, agendar visitas técnicas
        e enviar informações sobre os serviços e equipamentos da RF. Não
        utilizamos seus dados para fins de marketing de massa.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        3. Base legal
      </h2>
      <p className="mb-6">
        O tratamento de dados pessoais realizado pela RF encontra-se
        fundamentado no consentimento do titular (art. 7º, I da LGPD) e no
        legítimo interesse comercial (art. 7º, IX da LGPD), sempre respeitando
        os direitos fundamentais do titular.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        4. Compartilhamento
      </h2>
      <p className="mb-6">
        Não compartilhamos seus dados com terceiros para fins comerciais. Dados
        podem ser compartilhados apenas quando exigidos por obrigação legal ou
        ordem judicial.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        5. Direitos do titular
      </h2>
      <p className="mb-6">
        Conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018),
        você tem direito a: confirmar a existência de tratamento de seus dados;
        acessá-los; corrigi-los; solicitar anonimização, bloqueio ou eliminação;
        solicitar portabilidade; revogar consentimento. Para exercer qualquer
        desses direitos, entre em contato pelo email{" "}
        <a href={`mailto:${contact.emailEngenharia}`} className="underline">
          {contact.emailEngenharia}
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        6. Cookies e rastreamento
      </h2>
      <p className="mb-6">
        Atualmente nossas landing pages não utilizam cookies de rastreamento.
        Quando adotarmos ferramentas de análise (como Google Tag Manager ou
        Google Analytics), esta política será atualizada com detalhes sobre
        quais cookies são utilizados e como você pode gerenciá-los.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        7. Contato do encarregado
      </h2>
      <p className="mb-6">
        Dúvidas sobre esta política ou sobre o tratamento de seus dados podem
        ser encaminhadas ao endereço{" "}
        <a href={`mailto:${contact.emailEngenharia}`} className="underline">
          {contact.emailEngenharia}
        </a>
        .
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </p>
    </article>
  );
}
```

- [ ] **Step 2: Verificar build**

Run:
```bash
npm run build
```

Expected: pass. Rota `/lp/politica-de-privacidade` deve aparecer no output.

- [ ] **Step 3: Verificar visualmente no dev server**

Run:
```bash
npm run dev
```

Abrir http://localhost:3000/lp/politica-de-privacidade e confirmar:
- [ ] `AdsTopBar` presente
- [ ] `AdsFooter` presente
- [ ] Texto legível, com títulos hierárquicos
- [ ] Links de email funcionam (`mailto:`)

Abrir qualquer LP (ex: `/lp/balancim-eletrico`) e clicar no link "Política de Privacidade" do `AdsFooter` — confirmar que navega para `/lp/politica-de-privacidade`.

- [ ] **Step 4: Commit**

```bash
git add "app/(ads)/lp/politica-de-privacidade/page.tsx"
git commit -m "feat(ads): add boilerplate privacy policy page for ads LPs

Texto placeholder conforme spec — requer revisão jurídica antes do go-live.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Fase 5 — Documentação e validação final

### Task 21: Criar `components/ads/README.md` com guia de tracking

**Files:**
- Create: `components/ads/README.md`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato:

```markdown
# Ads Landing Pages — Tracking guide

Componentes dessa pasta são usados exclusivamente pelas landing pages de ads em `app/(ads)/lp/*`. **Não reutilizar em páginas institucionais.**

## Arquitetura de tracking

Todos os CTAs de WhatsApp e telefone carregam atributos `data-*`:

```html
<a data-ads-cta="whatsapp" data-ads-lp="balancim-eletrico" ...>
<a data-ads-cta="phone" data-ads-lp="balancim-eletrico" ...>
```

Isso permite instalar Google Tag Manager sem tocar em componentes individuais — um único listener captura todos os cliques.

## Como instalar Google Tag Manager

1. Criar um container GTM na conta do Google Tag Manager
2. Copiar o snippet do GTM (geralmente `GTM-XXXXXXX`)
3. Editar `app/(ads)/layout.tsx` e substituir o comentário `// TRACKING: ...` pelo script:

   ```tsx
   import Script from "next/script";

   // ... no body do layout, antes do AdsTopBar:
   <Script id="gtm" strategy="afterInteractive">
     {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
   </Script>
   ```

4. Adicionar o `<noscript>` do GTM logo no início do `<main>` do layout.

## Como configurar conversão de WhatsApp

Dentro do GTM:

1. **Trigger**: Click — All Elements, quando `Click Element matches CSS selector: [data-ads-cta="whatsapp"]`
2. **Tag**: Google Ads Conversion Tracking
   - Conversion ID: `AW-XXXXXXXXX`
   - Conversion Label: `<label específico gerado no Google Ads>`
3. (Opcional) Capturar qual LP: criar uma Data Layer Variable ou usar o DOM para ler `event.target.dataset.adsLp`

## Diferenciação por LP

O atributo `data-ads-lp` distingue as três LPs nos relatórios:
- `balancim-eletrico`
- `ancoragem`
- `linha-de-vida`

Use isso no GTM para reportar conversões separadamente e no Google Ads para otimizar por LP.

## O que NÃO fazer

- ❌ **Não** adicionar handlers `onClick` inline nos componentes `Ads*` — isso força esses componentes a virarem client components sem necessidade, o que aumenta o bundle. Todos os tracking de click devem ficar no GTM listener.
- ❌ **Não** criar modal de confirmação antes de abrir o WhatsApp — aumenta atrito e derruba conversão.
- ❌ **Não** adicionar pixel do Meta nessas LPs sem antes alinhar com o time de ads — elas hoje são Google Ads apenas (conforme spec).
```

- [ ] **Step 2: Verificar lint**

Run:
```bash
npm run lint
```

Expected: pass (README não é lintado, mas o comando roda sem erro).

- [ ] **Step 3: Commit**

```bash
git add components/ads/README.md
git commit -m "docs(ads): add tracking setup guide for future GTM/Google Ads install

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 22: Validação final — checklist de nível 2 completo

**Files:**
- Nenhum modificado. Só verificação.

**Objetivo:** Percorrer todo o checklist de Nível 2 do spec para garantir que nada foi perdido no caminho.

- [ ] **Step 1: Rodar build final**

Run:
```bash
npm run build
```

Expected: pass. No output, confirmar que estas 4 rotas aparecem como estáticas:
- `/lp/balancim-eletrico`
- `/lp/ancoragem`
- `/lp/linha-de-vida`
- `/lp/politica-de-privacidade`

E que todas as rotas do site institucional (listadas na Task 1 Step 2) continuam presentes.

- [ ] **Step 2: Rodar lint final**

Run:
```bash
npm run lint
```

Expected: pass sem warnings novos.

- [ ] **Step 3: Checklist manual no dev server**

Run:
```bash
npm run dev
```

Para cada uma das 4 URLs das LPs (`/lp/balancim-eletrico`, `/lp/ancoragem`, `/lp/linha-de-vida`, `/lp/politica-de-privacidade`), confirmar **em sequência**:

- [ ] Header do site institucional NÃO aparece
- [ ] Footer do site institucional NÃO aparece
- [ ] `FloatingWhatsApp` do site institucional NÃO aparece
- [ ] `AdsTopBar` aparece sticky no topo
- [ ] `AdsFooter` aparece no final
- [ ] Nenhum link de navegação que saia da LP exceto "Política de Privacidade"
- [ ] Botão de WhatsApp do `AdsTopBar` abre `https://wa.me/5561993326766?text=...`
- [ ] Botão de WhatsApp do `AdsHero` abre o link com a mensagem específica da LP
- [ ] Botão de WhatsApp do `AdsFinalCta` idem
- [ ] Botão de WhatsApp do `AdsStickyMobileCta` idem (no mobile)
- [ ] Botão 0800 do `AdsTopBar` abre `tel:08003264378`
- [ ] Imagens do hero carregam (sem 404 no Network tab do DevTools)
- [ ] Logos de clientes carregam (todos os 14 na seção de prova social)
- [ ] Em DevTools mobile (<768px), sticky bottom CTA aparece fixo sem cobrir o final do conteúdo
- [ ] Em DevTools desktop (≥768px), sticky mobile CTA NÃO aparece
- [ ] No `<head>`: `<meta name="robots" content="noindex, nofollow">` presente
- [ ] Inspecionar qualquer `<a>` de WhatsApp: contém `data-ads-cta="whatsapp"` e `data-ads-lp="<slug>"`

- [ ] **Step 4: Regressão no site institucional**

Ainda no dev server, abrir pelo menos estas 5 rotas e confirmar zero regressão:
- [ ] `/` (home) — Header + Footer + FloatingWhatsApp visíveis
- [ ] `/rf-locacao/balancim-eletrico` — página institucional do balancim intacta
- [ ] `/rf-engenharia/ancoragem-predial` — idem
- [ ] `/rf-engenharia/linha-de-vida` — idem
- [ ] `/blog` (e clicar em um post) — dinâmica funcionando

- [ ] **Step 5: Parar dev server**

Ctrl+C.

- [ ] **Step 6: Sem commit**

Só verificação.

---

### Task 23: Push e checkpoint final

**Files:**
- Nenhum modificado.

**Objetivo:** Subir tudo pro GitHub como ponto de backup, igual o checkpoint da Fase 1.

- [ ] **Step 1: Revisar log de commits da feature**

Run:
```bash
git log --oneline origin/main..HEAD
```

Expected: ~17 commits da feature listados, começando pelo refactor do `(site)` e terminando no README de tracking.

- [ ] **Step 2: Confirmar workspace sujo continua intocado**

Run:
```bash
git status --short
```

Expected: muitas linhas de modificações/arquivos não-rastreados que **já existiam antes** do início da feature. Nenhum arquivo staged. Se houver algo staged inesperado, parar e investigar antes de dar push.

- [ ] **Step 3: Push**

Run:
```bash
git push origin main
```

Expected: push bem-sucedido.

- [ ] **Step 4: Anunciar conclusão ao usuário**

Reportar:
- Número de commits
- URLs das 4 novas rotas
- Lembrete dos itens do checklist pré-go-live que ficaram fora do escopo (CNPJ, política jurídica, GTM, aprovação dos logos)

---

## Self-review

**Spec coverage** (mapeamento das seções do spec para tasks):

| Seção do spec | Task que implementa |
|---|---|
| Refactoring para `(site)` | Tasks 2, 3, 4, 5 |
| `app/(ads)/layout.tsx` com noindex | Task 7, atualizado na 10 |
| `components/ads/whatsapp.ts` | Task 6 |
| `AdsTopBar` | Task 8 |
| `AdsFooter` | Task 9 |
| `AdsHero` | Task 11 |
| `AdsBenefitsGrid` | Task 12 |
| `AdsTrustBadges` | Task 13 |
| `AdsSocialProof` | Task 14 |
| `AdsFinalCta` | Task 15 |
| `AdsStickyMobileCta` | Task 16 |
| LP balancim elétrico | Task 17 |
| LP ancoragem | Task 18 |
| LP linha de vida | Task 19 |
| Política de privacidade | Task 20 |
| README de tracking | Task 21 |
| Validação Nível 1 (lint + build) | Distribuída em todas as tasks |
| Validação Nível 2 (manual) | Task 22 |
| Checklist pré-go-live (Nível 3) | Fora de escopo, documentado no spec |
| Placeholder CNPJ | Task 9 (inline no componente) |
| Placeholder GTM | Task 7/10 (comentário no layout) |
| Data attributes `data-ads-cta` | Tasks 8, 11, 15, 16 |

Nenhum gap.

**Placeholder scan:** Nenhuma task tem "TBD", "implementar depois" ou código incompleto. As duas únicas referências a placeholder são explícitas e intencionais: `CNPJ XX.XXX.XXX/0001-XX` no `AdsFooter` (Task 9) e o comentário `// TRACKING: quando tiver GTM` no layout (Task 7/10), ambos documentados como TODOs pré-go-live.

**Type consistency:** Verificado — todos os componentes recebem `whatsappMessage: string` e `lpSlug: string` consistentemente; `buildWhatsAppHref` é usado com a mesma assinatura em todos os componentes; `Metadata` do Next.js é importado como `import type`.
