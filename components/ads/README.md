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
