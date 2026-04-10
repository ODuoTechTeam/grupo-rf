# Landing Pages de Ads — Balancim Elétrico, Ancoragem e Linha de Vida

**Status**: Design aprovado, aguardando plano de implementação.
**Data**: 2026-04-10
**Autor**: Brainstorm colaborativo (usuário + Claude).

## Contexto

O Grupo RF Engenharia vai começar a rodar campanhas pagas no Google Ads (Rede de Pesquisa) para três produtos: **balancim elétrico**, **ancoragem predial** e **linha de vida**. As páginas institucionais existentes (`app/rf-locacao/balancim-eletrico`, `app/rf-engenharia/ancoragem-predial`, `app/rf-engenharia/linha-de-vida`) são ricas em conteúdo mas foram desenhadas para navegação orgânica do site, não para conversão direta de tráfego pago.

Este spec define três landing pages dedicadas a ads, otimizadas para conversão rápida via WhatsApp, com o "chrome" do site institucional removido.

## Objetivos

1. Criar três landing pages standalone em `/lp/balancim-eletrico`, `/lp/ancoragem`, `/lp/linha-de-vida`.
2. CTA único e agressivo: WhatsApp com mensagem pré-preenchida específica por produto.
3. Remover toda a navegação do site institucional (header, footer, menu) dessas páginas.
4. Não impactar as páginas institucionais existentes — elas continuam servindo tráfego orgânico.
5. Deixar placeholders de tracking prontos para quando GTM e tag de conversão do Google Ads forem instalados.
6. Manter conformidade mínima exigida pelo Google Ads (política de privacidade, dados da empresa, transparência).

## Não-objetivos

- **Não há formulário de lead.** CTA primário é exclusivamente WhatsApp. (Decisão do usuário: "é o padrão que usamos aqui".)
- **Não há SEO orgânico.** As LPs têm `robots: { index: false, follow: false }`.
- **Não há variantes por cidade.** Um único WhatsApp + 0800 nas 3 LPs. Geolocalização fica por conta das extensões de local do Google Ads.
- **Não há integração com API do WhatsApp Business** — só o link `wa.me`.
- **Não há backend, banco de dados, CMS nem MDX.** Conteúdo das LPs é inline em TSX.
- **Não há testes automatizados** — o projeto não tem framework de testes configurado; validação é por lint + build + checklist manual.
- **Não há instalação de GTM ou tag de conversão** neste entregável. Apenas placeholders prontos.
- **Não há mudanças de copy nas páginas institucionais existentes.**

## Decisões-chave

### Route group `(ads)` com layout próprio

As três LPs ficam dentro de `app/(ads)/lp/*`. O route group `(ads)` é invisível na URL mas carrega seu próprio `layout.tsx` com `AdsTopBar` + `AdsFooter`.

### Refactoring obrigatório: mover site institucional para `(site)`

**Problema identificado**: o root `app/layout.tsx` atual renderiza `Header`, `Footer` e `FloatingWhatsApp` diretamente no `<body>`. Route groups não criam um novo root layout no Next.js App Router — eles ficam *dentro* do root. Portanto, sem refactoring, o `Header`/`Footer` do site vazam para dentro das LPs de ads.

**Solução**: mover toda a árvore de páginas institucionais existente para um route group `(site)` e criar um `app/(site)/layout.tsx` que contém `Header` + `Footer` + `FloatingWhatsApp`. O `app/layout.tsx` root vira passthrough — só html, body, fontes, metadata global.

Route groups são invisíveis nas URLs, então **nenhuma URL pública muda**.

### WhatsApp como CTA travado, sem atrito

- Sem modal de confirmação
- Sem pré-captura ("digite seu nome antes de abrir")
- `target="_blank"` pra manter a LP aberta após o clique
- Mensagem pré-preenchida por LP, visível no `page.tsx` (fácil de editar e fazer A/B)

### Stripped total, com mínimo legal

`AdsTopBar` carrega logo + WhatsApp + 0800. `AdsFooter` carrega CNPJ, CREA, endereços dos 3 escritórios, link para política de privacidade. Nenhum link de navegação para outras páginas do site. A única "fuga" autorizada é a página de política de privacidade, que fica dentro do mesmo route group `(ads)` em `/lp/politica-de-privacidade`.

### Componentes dedicados em `components/ads/`

Não reutilizar `SectionTitle`, `Breadcrumb`, `Button` das pastas existentes. LPs de ads têm restrições e tratamento visual diferentes do site institucional. Isolar previne reuso acidental em páginas institucionais no futuro.

## Estrutura de arquivos

### Antes (atual)

```
app/
  layout.tsx                   ← renderiza Header/Footer/FloatingWhatsApp direto
  page.tsx
  rf-engenharia/
  rf-locacao/
  blog/
  contato/
  sobre/
  portfolio/
```

### Depois

```
app/
  layout.tsx                   ← passthrough: <html>, <body>, fontes, metadata global
  globals.css                  ← sem mudança
  favicon.ico                  ← sem mudança
  (site)/
    layout.tsx                 ← NOVO: Header + Footer + FloatingWhatsApp
    page.tsx                   ← movido de app/page.tsx
    rf-engenharia/             ← movido (inclusive subpastas e seus layout.tsx)
    rf-locacao/                ← movido (inclusive seu layout.tsx de nível de route)
    blog/                      ← movido
    contato/                   ← movido
    sobre/                     ← movido
    portfolio/                 ← movido
  (ads)/
    layout.tsx                 ← NOVO: AdsTopBar + AdsFooter, metadata robots noindex
    lp/
      balancim-eletrico/
        page.tsx               ← server component, metadata própria
      ancoragem/
        page.tsx
      linha-de-vida/
        page.tsx
      politica-de-privacidade/
        page.tsx               ← NOVO: texto LGPD boilerplate (requer revisão jurídica)

components/
  ads/                         ← NOVO
    AdsTopBar.tsx
    AdsFooter.tsx
    AdsHero.tsx
    AdsBenefitsGrid.tsx
    AdsSocialProof.tsx
    AdsTrustBadges.tsx
    AdsFinalCta.tsx
    AdsStickyMobileCta.tsx
    whatsapp.ts                ← helper buildWhatsAppHref
    README.md                  ← guia de instalação de tracking
```

Nenhum arquivo existente em `components/` é modificado. `data/`, `public/images/` permanecem intactos.

## Design dos componentes `components/ads/`

### `whatsapp.ts`

Helper puro, sem dependência de React:

```ts
import { contact } from "@/data/contact";

export function buildWhatsAppHref(message: string): string {
  const digits = contact.whatsapp.replace("+", "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}
```

### `AdsTopBar.tsx`

Server component. Sticky no topo (`sticky top-0 z-50`), fundo branco semi-transparente com backdrop blur, borda inferior sutil.

**Props**: `{ whatsappMessage: string; lpSlug: string }` — cada LP passa sua mensagem.

Layout:
- Desktop: logo à esquerda, 2 botões à direita (`WhatsApp` com ícone + texto; `0800 326 4378` com ícone de telefone).
- Mobile: logo à esquerda, só ícone de WhatsApp à direita. 0800 some (aparece no sticky mobile CTA do bottom).

Logo usa `public/images/logo/logo-rf-engenharia.jpg` (mesmo que o Header do site usa).

Botões recebem `data-ads-cta="whatsapp"` / `data-ads-cta="phone"` e `data-ads-lp={lpSlug}`.

### `AdsFooter.tsx`

Server component. Fundo escuro (`bg-bg-darkest`), texto `text-gray-400`.

Conteúdo (puxado de `data/contact.ts` quando aplicável):
- Linha 1: `Grupo RF Engenharia · CNPJ XX.XXX.XXX/0001-XX` (placeholder TODO antes de go-live)
- Linha 2: `CREA-DF 10047/RF · CREA-DF 11649/RF · Eng. Dr. Rafael Vaz Ferreira — CREA 13839/D-DF`
- Linha 3: endereços dos 3 escritórios em 3 colunas (desktop) / empilhados (mobile) — puxa de `offices` de `data/contact.ts`
- Linha 4: `0800 326 4378 · comercial@rf.eng.br`
- Linha 5: `© 2026 Grupo RF Engenharia · Política de Privacidade`

A "Política de Privacidade" é o único link do footer, apontando para `/lp/politica-de-privacidade`. Nenhum link para redes sociais, blog, home, etc.

### `AdsHero.tsx`

Client component (usa framer-motion para entrada). Props:

```ts
interface AdsHeroProps {
  badge: string;                    // ex: "Locação de Equipamentos"
  title: string;                    // H1
  subtitle: string;                 // parágrafo
  whatsappMessage: string;          // passado para buildWhatsAppHref
  heroImage: string;                // path relativo ao /public
  heroImageAlt: string;
  lpSlug: string;                   // data-ads-lp
}
```

Estrutura visual (reaproveita pegada das páginas institucionais mas mais direto):
- Layout 2 colunas (60% texto, 40% imagem) no desktop; empilhado no mobile
- Badge pill no topo
- H1 grande em fonte display (`font-[family-name:var(--font-display)]`)
- Subheadline em texto claro
- 2 CTAs: botão primário verde-WhatsApp grande + botão secundário "ligar 0800" (outline)
- Trust bar abaixo dos CTAs com 5 logos de clientes (inline, não carrossel): `cliente-bb.jpg`, `cliente-caixa.jpg`, `cliente-sirio-libanes.jpg`, `cliente-mrv.png`, `cliente-odebrecht.jpg`, precedidos de texto pequeno "Confiança de quem já contratou:".
- Imagem à direita com moldura gradient igual ao padrão atual das páginas de produto.

### `AdsBenefitsGrid.tsx`

Server component. Grid 2×2 (desktop) / 1 coluna (mobile) de 4 benefícios. Props: `{ benefits: Array<{ icon: IconType; title: string; description: string }> }`.

Cada card: ícone em caixa arredondada, título, descrição. Reusa estilo dos cards de features de `balancim-eletrico/page.tsx` existente.

### `AdsTrustBadges.tsx`

Server component. Uma linha só (wrap no mobile) de pill badges:

`CREA 10047/RF` · `CREA 11649/RF` · `NR-18` · `NR-35` · `ART Inclusa` · `Laudo Técnico` · `Eng. Dr. Rafael Vaz Ferreira — CREA 13839/D-DF`

Cada pill: borda sutil, ícone de check, texto pequeno. Mesmo visual do bloco NR-18 existente em `balancim-eletrico/page.tsx`.

### `AdsSocialProof.tsx`

Server component. Grid de 14 logos de clientes (todas as `.jpg`/`.png` em `public/images/clients/`). Título: "Quem confia na RF Engenharia". Logos em grayscale por padrão, ganham cor no hover.

Ordem de prioridade visual (primeira linha): BB, Caixa, Sírio-Libanês, MRV, Odebrecht, TCU. Restante em ordem livre.

### `AdsFinalCta.tsx`

Client component (framer-motion). Estrutura bem parecida com `components/sections/CTASection.tsx` existente, mas com props mais travadas e sem o parâmetro `showPhone` (sempre mostra) nem `primaryHref` (sempre WhatsApp).

Props: `{ title: string; description: string; whatsappMessage: string; lpSlug: string }`.

Fundo gradient do primary, CTAs grandes (botão WhatsApp branco + botão telefone outline).

### `AdsStickyMobileCta.tsx`

Client component. Barra fixa no bottom (`fixed bottom-0 inset-x-0 z-40`), só visível em `<md` (`md:hidden`). Contém um único botão grande de WhatsApp com ícone + texto "Falar no WhatsApp".

Props: `{ whatsappMessage: string; lpSlug: string }`.

Cada page renderiza seu próprio `AdsStickyMobileCta` no final (não fica no layout), porque cada LP tem mensagem de WhatsApp específica.

Padding-bottom no `<main>` das LPs para o sticky não cobrir o conteúdo final.

### `README.md` (em `components/ads/`)

Guia curto para o futuro, documentando:
- Como adicionar GTM (snippet + onde colar — em `app/(ads)/layout.tsx`)
- Como configurar a tag de conversão do Google Ads no GTM listening em `[data-ads-cta="whatsapp"]`
- Como diferenciar as 3 LPs nos relatórios usando `data-ads-lp`
- O que não fazer (tracking inline por `onClick` que obrigaria componentes a virar client).

## Conteúdo das 3 LPs

### LP 1: `/lp/balancim-eletrico`

**Metadata** (noindex herdado do layout, mas title/description próprios):
- `title`: "Aluguel de Balancim Elétrico | Grupo RF Engenharia"
- `description`: "Locação de balancim elétrico com ART, laudo técnico e projeto de instalação. Atendemos Brasília, Goiânia e São Paulo. Fale com um especialista."

**Hero**:
- Badge: "Locação de Equipamentos"
- H1: "Aluguel de Balancim Elétrico com Engenharia Inclusa"
- Subtitle: "Plataforma suspensa motorizada para fachadas — com ART, laudo técnico e projeto de instalação. Atendemos Brasília, Goiânia e São Paulo."
- Imagem: `/images/balancim/balancim-08.jpg`
- Mensagem WhatsApp: `"Olá, tenho interesse no aluguel de balancim elétrico. Pode me passar um orçamento?"`

**4 benefícios**:
1. **Engenharia inclusa** — "ART, laudo técnico e projeto de instalação em 100% das locações." (ícone: `IconShieldCheck`)
2. **Conformidade NR-18/NR-35** — "Equipamento inspecionado e conforme norma regulamentadora." (ícone: `IconCircleCheck`)
3. **Atendimento nas 3 praças** — "Frota em Brasília, Goiânia e São Paulo. Visita técnica rápida." (ícone: `IconBuildingSkyscraper`)
4. **Suporte do início ao fim** — "Montagem, treinamento dos operadores e manutenção preventiva." (ícone: `IconTool`)

**CTA final**:
- Título: "Precisa de balancim elétrico para sua obra?"
- Descrição: "Fale agora com nossos especialistas pelo WhatsApp e receba orçamento rápido."

### LP 2: `/lp/ancoragem`

**Metadata**:
- `title`: "Ancoragem Predial com ART | Grupo RF Engenharia"
- `description`: "Pontos de ancoragem em aço inox com teste de arrancamento 100%. Projeto, fabricação e instalação com ART inclusa. Fale com um especialista."

**Hero**:
- Badge: "RF Engenharia"
- H1: "Ancoragem Predial Definitiva com ART e Teste de Arrancamento"
- Subtitle: "Pontos de ancoragem em aço inox, resistência 2.500 kgf, teste 100% certificado. Projeto, fabricação e instalação pela RF Engenharia."
- Imagem: `/images/ancoragem/ancoragem-01.jpg`
- Mensagem WhatsApp: `"Olá, preciso de orçamento para sistema de ancoragem predial."`

**4 benefícios**:
1. **Aço inoxidável rastreável** — "Peças com certificado de origem e rastreabilidade completa." (`IconShieldLock`)
2. **Resistência 2.500 kgf** — "Muito acima do exigido pela norma regulamentadora." (`IconAnchor`)
3. **Teste de arrancamento 100%** — "Todos os pontos testados individualmente, não apenas amostra." (`IconZoomCheck`)
4. **Laudo técnico + ART inclusos** — "Documentação pronta para auditoria e fiscalização." (`IconFileSearch`)

**CTA final**:
- Título: "Pronto para garantir a segurança da sua edificação?"
- Descrição: "Fale agora com nossos engenheiros pelo WhatsApp e receba um orçamento técnico."

### LP 3: `/lp/linha-de-vida`

**Metadata**:
- `title`: "Linha de Vida com Projeto e Instalação | Grupo RF Engenharia"
- `description`: "Sistemas de linha de vida flexível e rígida para edifícios, galpões, hospitais e indústrias. Projeto, instalação e certificação pela RF Engenharia."

**Hero**:
- Badge: "RF Engenharia"
- H1: "Linha de Vida Predial e Industrial com Projeto e Instalação"
- Subtitle: "Sistemas flexíveis e rígidos para edifícios, galpões, hospitais e indústrias. Projeto, fabricação, instalação e certificação pela RF Engenharia."
- Imagem: `/images/linha-de-vida/linha-vida-01.jpg`
- Mensagem WhatsApp: `"Olá, quero orçamento para instalação de linha de vida."`

**4 benefícios**:
1. **Projeto sob medida** — "Cálculo estrutural por engenheiro CREA, adequado ao seu edifício." (`IconRouteAltRight`)
2. **Flexível ou rígida** — "Escolha o sistema conforme o layout e o uso da instalação." (`IconBuildingBridge`)
3. **Impermeabilização inclusa** — "Sistema instalado sem criar pontos de infiltração no telhado." (`IconShieldCheck`)
4. **Certificação completa** — "ART, laudo técnico e memorial de cálculo entregues no projeto." (`IconFileSearch`)

**CTA final**:
- Título: "Sua instalação precisa de linha de vida?"
- Descrição: "Fale agora com nossos engenheiros pelo WhatsApp e receba um projeto sob medida."

### Conteúdo compartilhado pelas 3 LPs

- **Trust bar no hero**: 5 logos de clientes (BB, Caixa, Sírio-Libanês, MRV, Odebrecht), texto "Confiança de quem já contratou:"
- **Grid de prova social**: 14 logos de `public/images/clients/`
- **Badges de confiança**: CREA 10047/RF, CREA 11649/RF, NR-18, NR-35, ART Inclusa, Laudo Técnico, Eng. Dr. Rafael Vaz Ferreira — CREA 13839/D-DF

## Página `/lp/politica-de-privacidade`

Page server component com texto boilerplate LGPD, fora do layout normal do site (usa o mesmo `(ads)/layout.tsx` stripped). Seções:

1. Finalidade da coleta (nome, telefone, mensagem via WhatsApp)
2. Base legal (consentimento + legítimo interesse comercial)
3. Compartilhamento (não compartilhamos com terceiros)
4. Direitos do titular (acesso, retificação, exclusão)
5. Encarregado de dados (email `comercial@rf.eng.br`)
6. Cookies (mencionar quando GTM for instalado no futuro)

**Marcado como requerendo revisão jurídica antes do go-live.** O spec não pretende que o texto boilerplate seja juridicamente válido — é só um placeholder estruturado.

## Placeholders de tracking

### No `app/(ads)/layout.tsx`

Comentário marcando o ponto de inserção do script do GTM:

```tsx
{/* TRACKING: quando tiver GTM, inserir aqui:
    import Script from "next/script";
    <Script id="gtm" strategy="afterInteractive">{`
      (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');
    `}</Script>
    E no <body> colocar o <noscript> do GTM.
*/}
```

### Nos links de WhatsApp/telefone

Todos os `<a>` de CTA carregam:

```tsx
<a
  href={buildWhatsAppHref(whatsappMessage)}
  target="_blank"
  rel="noopener noreferrer"
  data-ads-cta="whatsapp"
  data-ads-lp={lpSlug}
>
```

E para telefone:

```tsx
<a
  href={`tel:${contact.tollFree.replace(/\s/g, "")}`}
  data-ads-cta="phone"
  data-ads-lp={lpSlug}
>
```

Zero custo em runtime. Pronto para o GTM listener de click em `[data-ads-cta]` disparar conversão quando for ligado.

## Validação

### Nível 1 — Automática

- `npm run lint` deve passar sem warnings novos
- `npm run build` deve compilar com sucesso
- No output do build, verificar que as rotas `/lp/balancim-eletrico`, `/lp/ancoragem`, `/lp/linha-de-vida`, `/lp/politica-de-privacidade` aparecem como estáticas, não dinâmicas.
- Nenhuma regressão: visitar `/`, `/rf-locacao`, `/rf-locacao/balancim-eletrico`, `/rf-engenharia`, `/rf-engenharia/ancoragem-predial`, `/rf-engenharia/linha-de-vida`, `/blog`, `/contato`, `/sobre`, `/portfolio` e confirmar que todas continuam servindo.

### Nível 2 — Manual no dev server

Para cada uma das 4 URLs de LP:

- [ ] Header do site institucional NÃO aparece
- [ ] Footer do site institucional NÃO aparece
- [ ] FloatingWhatsApp do site institucional NÃO aparece
- [ ] `AdsTopBar` aparece sticky no topo
- [ ] `AdsFooter` aparece no final
- [ ] Nenhum link de navegação que saia da LP exceto "Política de Privacidade"
- [ ] Botão de WhatsApp do topo abre `wa.me` com a mensagem pré-preenchida correta
- [ ] Botão de WhatsApp do hero idem
- [ ] Botão de WhatsApp do CTA final idem
- [ ] Botão de WhatsApp do sticky mobile CTA idem
- [ ] Botão 0800 abre `tel:0800...`
- [ ] Imagens do hero e logos de clientes carregam (sem 404 no console)
- [ ] Mobile: sticky bottom CTA aparece fixo, sem cobrir conteúdo final
- [ ] Desktop: sticky mobile CTA NÃO aparece
- [ ] `<head>` contém `<meta name="robots" content="noindex, nofollow">`
- [ ] `<a>` de WhatsApp contém `data-ads-cta="whatsapp"` e `data-ads-lp="<slug>"`

### Nível 3 — Checklist pré-go-live

Este nível está **fora do escopo de implementação** mas fica documentado no próprio spec para o time marcar antes de ligar os anúncios:

- [ ] **CNPJ real** substituído em `AdsFooter` (procurar por `XX.XXX.XXX`)
- [ ] **Política de privacidade** revisada juridicamente
- [ ] Logo do rodapé (`logo-rf-negativo.png`) validado contra o fundo escuro
- [ ] 5 logos do trust bar do hero validados (autorização de uso)
- [ ] **GTM instalado** em `app/(ads)/layout.tsx`
- [ ] **Tag de conversão do Google Ads** configurada no GTM ouvindo `[data-ads-cta="whatsapp"]`
- [ ] Mensagens de WhatsApp pré-preenchidas aprovadas pelo comercial
- [ ] Teste real no celular: botão de WhatsApp abre o app nativo com mensagem correta
- [ ] Teste real no desktop: botão de WhatsApp abre `web.whatsapp.com` com mensagem correta
- [ ] URLs finais dos anúncios do Google Ads configuradas com UTMs
- [ ] `/robots.txt` do site (se existir) não bloqueia `/lp/*`

## Placeholders conhecidos (TODO pré-go-live)

| Item | Onde | Ação |
|---|---|---|
| CNPJ | `AdsFooter.tsx` | Substituir `XX.XXX.XXX/0001-XX` pelo valor real |
| Política de privacidade | `app/(ads)/lp/politica-de-privacidade/page.tsx` | Revisão jurídica do texto boilerplate |
| GTM | `app/(ads)/layout.tsx` | Inserir snippet quando container GTM for criado |
| Tag de conversão Google Ads | Configuração no GTM (externo) | Criar tag listening em `data-ads-cta="whatsapp"` |

## Riscos e armadilhas conhecidos

1. **Refactoring do route group `(site)` pode quebrar imports relativos.** Imports com `@/*` (alias para root) continuam funcionando. Imports relativos dentro de pastas de page (ex: `./components/Foo`) também, porque os arquivos se movem juntos. Mas qualquer referência hardcoded a `app/rf-locacao/...` em código (não URL) precisa ser ajustada. Primeira ação do plano: fazer um grep por `"app/"` e por imports relativos cruzados entre `app/` e outras pastas.

2. **`app/rf-locacao/layout.tsx` existente** (que define `metadata: { title: "RF Locação" }`) tem que vir junto no move, virando `app/(site)/rf-locacao/layout.tsx`. Mesma coisa para todos os `layout.tsx` das subpastas de `rf-engenharia/`.

3. **Imagens referenciadas por path absoluto** (`/images/...`) continuam funcionando porque `public/` não muda.

4. **CSS do `globals.css`** continua acessível pelas LPs porque é importado no root `app/layout.tsx`.

5. **`FloatingWhatsApp`** hoje está no root layout. Após refactoring, fica só no `(site)/layout.tsx` — as LPs de ads não vão ter esse componente extra (que seria redundante com os CTAs nativos da LP).

6. **Metadata robots noindex precisa estar explícito.** Next.js não adiciona noindex por padrão. O `app/(ads)/layout.tsx` deve exportar:

   ```ts
   export const metadata: Metadata = {
     robots: { index: false, follow: false },
   };
   ```

   E os `page.tsx` individuais exportam seu próprio `metadata` com `title`/`description`. O `robots` do layout é herdado automaticamente pelo Next.js.

7. **Imagens do balancim/ancoragem/linha de vida no hero** já existem no repositório e foram verificadas durante o brainstorm. Se algum path estiver errado, o build quebra (Next.js `<Image>` não valida paths, mas 404 no runtime é visível no checklist de validação manual).

## O que este spec NÃO cobre

- Instalação de GTM ou tag de conversão
- Texto jurídico real da política de privacidade
- Criação de anúncios, grupos de anúncios ou configuração de campanhas no Google Ads
- Testes A/B
- Variantes por cidade
- Outras LPs além das 3 especificadas (gaiola de grua, escada marinheiro, etc.)
- Integrações com CRM, Zapier, email, etc.

## Próximos passos

Após aprovação deste spec, invocar a skill `writing-plans` para gerar o plano de implementação detalhado com passos executáveis.
