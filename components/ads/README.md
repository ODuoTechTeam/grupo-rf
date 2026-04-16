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

> **Atenção — topbar reporta `data-ads-lp="generic"`.** O `AdsTopBar` e o 0800 no topo são renderizados pelo `app/(ads)/layout.tsx`, que não tem acesso às props da página filha, então todos os cliques nesses CTAs chegam ao GTM como `data-ads-lp="generic"`. Os CTAs do hero, do CTA final e do sticky mobile continuam reportando o slug real de cada LP (`balancim-eletrico`, `ancoragem`, `linha-de-vida`). Para contabilizar cliques do topbar por LP no GTM, leia `window.location.pathname` quando `data-ads-lp === "generic"` ou trate o topbar como uma fonte separada de conversão.

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

## O que NÃO fazer

- ❌ **Não** adicionar handlers `onClick` inline nos componentes `Ads*` — isso força esses componentes a virarem client components sem necessidade, o que aumenta o bundle. Todos os tracking de click devem ficar no GTM listener.
- ❌ **Não** criar modal de confirmação antes de abrir o WhatsApp — aumenta atrito e derruba conversão.
- ❌ **Não** adicionar pixel do Meta nessas LPs sem antes alinhar com o time de ads — elas hoje são Google Ads apenas (conforme spec).
