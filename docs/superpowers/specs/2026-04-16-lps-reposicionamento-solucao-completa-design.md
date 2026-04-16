# LPs de Ads — Reposicionamento para "Solução Completa"

**Data:** 2026-04-16
**Escopo:** `app/(ads)/lp/balancim-eletrico`, `app/(ads)/lp/ancoragem`, `app/(ads)/lp/linha-de-vida`

## Objetivo

Reposicionar as 3 LPs de tráfego pago de "locação de equipamento" para "solução completa com engenharia". Transmitir mais valor, autoridade e segurança; aumentar conversão por percepção de escopo entregue (projeto + montagem + equipamento + segurança + acompanhamento) em vez de aluguel puro.

## Diretriz estratégica (do brief do cliente)

> "Você não aluga um equipamento, você recebe a solução pronta."

As LPs hoje vendem **equipamento**. Precisam vender **solução completa + segurança + engenharia**. O ajuste é mais estratégico (copy + percepção) do que técnico.

## Decisões tomadas na brainstorming

| # | Pergunta | Decisão |
|---|---|---|
| 1 | Especificações técnicas — fonte do conteúdo | Extrair das páginas institucionais (`/rf-engenharia/*`, `/rf-locacao/balancim-eletrico`). |
| 2 | Quem escreve a copy | Claude drafta toda; usuário revisa. |
| 3 | Imagens | Usar apenas o inventário atual (8+ por LP) em `public/images/*`. Sem pedir fotos novas. |
| 4 | Variações de CTA | Variar **por posição** (não por LP): hero = "Falar com especialista"; final = "Quero orçamento completo"; sticky mobile = "Falar agora". |
| 5 | Sequência de rollout | Componentes compartilhados primeiro, rollout LP por LP: balancim → linha-de-vida → ancoragem. |
| 6 | Tracking (GTM / Pixel Meta) | Fora de escopo. Hook já existe em `(ads)/layout.tsx`; instalação fica para ciclo futuro. |
| 7 | Balancim — gap de specs técnicas | Seguir com o que existe no institucional. Ficha técnica completa (carga, dimensões, velocidade) fica para ciclo futuro quando o cliente fornecer. |

## Abordagem escolhida: narrativa em camadas

Adicionar 3 componentes novos (`AdsSolutionPillars`, `AdsGallery`, `AdsTechSpecs`) e ajustar 3 existentes (`AdsHero`, `AdsFinalCta`, `AdsStickyMobileCta`). Mantém o grain do código (componentes pequenos e composáveis), respeita a regra do `components/ads/README.md` (sem `onClick`, tracking via `data-*`), e permite revisão LP por LP.

### Nova ordem das seções

```
AdsHero               (com faixa "Filiais próprias em:")
AdsSolutionPillars    ← NOVO — os 5 pilares, peça central do repositioning
AdsBenefitsGrid       (diferenciais técnicos — mantém papel)
AdsGallery            ← NOVO — obra real
AdsTechSpecs          ← NOVO — especificações extraídas do institucional
AdsTrustBadges
AdsSocialProof
AdsFinalCta           (nova copy por LP)
AdsStickyMobileCta
```

## Componentes novos

### `components/ads/AdsSolutionPillars.tsx`

Server component. Os 5 pilares da solução completa.

- **Props:** `title: string`, `subtitle: string`, `pillars: { icon, title, description }[]`
- **Layout:** grid 5 col desktop / 2 col tablet / 1 col mobile. Cada pilar: badge numerado 1–5 + ícone Tabler + título curto + 1–2 linhas.
- **Fundo:** `bg-white` (contraste com `bg-bg-surface` do `AdsBenefitsGrid` seguinte).
- **Sem CTA** — seção narrativa, não conversão.

### `components/ads/AdsGallery.tsx`

Server component. Mosaico de imagens reais da obra.

- **Props:** `title: string`, `subtitle: string`, `images: { src, alt }[]`
- **Layout:** grid responsivo — 2 col mobile / 3 col tablet / 4 col desktop. `aspect-[4/3]`. `next/image` com `sizes` e lazy loading (sem `priority` — só o hero é priority).
- **Hover:** `.card-image-zoom` (classe já existente em `globals.css`).
- **Sem lightbox** nesta versão.
- **Fundo:** `bg-white`.

### `components/ads/AdsTechSpecs.tsx`

Server component. Especificações técnicas estruturadas.

- **Props:** `title: string`, `subtitle?: string`, `groups: { heading, specs: { label, value }[] }[]`
- **Layout:** grid 2 col desktop / 1 col mobile. Cada grupo: heading + `<dl>/<dt>/<dd>` (markup semântico).
- **Sem ícones** — seção técnica, limpa.
- **Fundo:** `bg-bg-surface` (combina com o `AdsBenefitsGrid`).

## Edits em componentes existentes

### `components/ads/AdsHero.tsx`

1. Adicionar faixa **"Filiais próprias em:"** logo acima dos logos de clientes:
   - Label em caps/tracking largo: `FILIAIS PRÓPRIAS EM:`
   - 3 pills com `IconMapPin`: Brasília · Goiânia · São Paulo
2. Aceitar prop opcional `ctaLabel?: string`, default `"Falar com especialista"`.
3. Nenhuma mudança de estrutura de motion ou `"use client"`.

### `components/ads/AdsFinalCta.tsx`

Aceitar prop opcional `ctaLabel?: string`, default `"Quero orçamento completo"`.

### `components/ads/AdsStickyMobileCta.tsx`

Aceitar prop opcional `ctaLabel?: string`, default `"Falar agora"`.

## Copy final por LP

### Balancim elétrico (`app/(ads)/lp/balancim-eletrico/page.tsx`)

**Metadata:**
- Title: `Balancim Elétrico com Projeto e Montagem | Grupo RF Engenharia`
- Description: `Solução completa em balancim elétrico: projeto de instalação, montagem, equipamento e acompanhamento em obra. Filiais em Brasília, Goiânia e São Paulo.`

**AdsHero:**
- Badge: `Solução Completa para Fachadas`
- Title: `Balancim elétrico entregue pronto: projeto, montagem, equipamento e segurança.`
- Subtitle: `Mais que locação. Sua fachada resolvida por engenheiros CREA — com ART, laudo, montagem e acompanhamento em obra. Filiais próprias em Brasília, Goiânia e São Paulo.`
- heroImage: `/images/balancim/balancim-08.jpg` (mantém)

**AdsSolutionPillars:**
- Title: `Você não aluga um equipamento. Você recebe a solução pronta.`
- Subtitle: `Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade.`
- Pilares:
  1. **Projeto técnico** (`IconBlueprint`) — Memorial de cálculo e projeto de instalação assinados por engenheiro CREA.
  2. **Montagem completa** (`IconTool`) — Equipe própria monta a plataforma suspensa em obra — sem terceirizar a instalação crítica.
  3. **Equipamento** (`IconBuildingSkyscraper`) — Balancim inspecionado, motorizado e conforme NR-18/NR-35, com cabos e EPIs auxiliares.
  4. **Segurança** (`IconShieldCheck`) — Treinamento dos operadores e inspeção diária durante toda a locação.
  5. **Acompanhamento** (`IconEye`) — Manutenção preventiva e suporte técnico enquanto o equipamento estiver na sua obra.

**AdsBenefitsGrid:**
- Title atualizado: `Diferenciais técnicos que fazem a operação dar certo.` (substitui `Por que alugar balancim elétrico com a RF?` — remove o verbo "alugar").
- Subtítulo atualizado: `Além do escopo da solução, o que garante que a operação não dá problema em obra.`
- **Benefícios ajustados para minimizar overlap com os pilares** (pilares = serviço entregue; benefícios = rigor técnico que prova a diferença):
  1. `IconShieldCheck` **Inspeção diária em obra** — Operadores acompanhados e equipamento inspecionado todos os dias da locação.
  2. `IconCircleCheck` **Conformidade NR-18/NR-35** — Equipamento dentro das normas regulamentadoras de construção civil e trabalho em altura.
  3. `IconTool` **Motor com redundância de segurança** — Sistema de freio automático e segunda linha de cabo em caso de falha.
  4. `IconFileCheck` **Documentação pronta para auditoria** — ART, laudo e projeto de instalação entregues antes de a obra começar.

> O benefício "Atendimento nas 3 praças" sai daqui — a faixa "Filiais próprias em:" no hero já cobre com mais força.

**AdsGallery:**
- Title: `Obras reais. Equipamento em operação.`
- Subtitle: `Instalações de balancim elétrico em fachadas residenciais, comerciais e institucionais.`
- Imagens: `balancim-01.jpg` a `balancim-08.jpg` (8 imagens; alts descritivos por imagem, a definir durante implementação).

**AdsTechSpecs:**
- Title: `Especificações técnicas.`
- Grupos:
  - **Equipamento:** Tipo: Plataforma suspensa motorizada · Acionamento: Motor elétrico via cabos de aço · Movimentação: subida e descida controladas
  - **Conformidade:** NR-18 · NR-35
  - **Documentação inclusa:** ART · Laudo Técnico · Projeto de Instalação

> Balancim tem menos dados técnicos no institucional do que os outros dois. Carga, dimensões e velocidade ficam para quando o cliente fornecer a ficha técnica.

**AdsFinalCta:**
- Title: `Vai subir na fachada? Receba a solução completa.`
- Description: `Engenheiro nosso visita a obra, dimensiona o sistema, monta o balancim e acompanha a operação. Orçamento no mesmo dia.`

**WHATSAPP_MESSAGE:** `Olá, quero orçamento para solução completa de balancim elétrico (projeto + montagem + equipamento).`

---

### Ancoragem predial (`app/(ads)/lp/ancoragem/page.tsx`)

**Metadata:**
- Title: `Ancoragem Predial com Projeto, Fabricação e ART | Grupo RF Engenharia`
- Description: `Solução completa em ancoragem predial: pontos em aço inox 304/316, carga de ruptura superior a 7.850 kgf, teste 100%, ART registrada. Filiais em Brasília, Goiânia e São Paulo.`

**AdsHero:**
- Badge: `Solução Completa em Segurança Predial`
- Title: `Ancoragem predial resolvida: projeto, fabricação, instalação e ART inclusa.`
- Subtitle: `Pontos em aço inox rastreável com teste de arrancamento 100% e documentação pronta para auditoria. Engenharia completa, do cálculo à certificação. Filiais próprias em Brasília, Goiânia e São Paulo.`
- heroImage: `/images/ancoragem/ancoragem-01.jpg` (mantém)

**AdsSolutionPillars:**
- Title/Subtitle: iguais aos da balancim.
- Pilares:
  1. **Projeto técnico** (`IconBlueprint`) — Cálculo estrutural e definição dos pontos por engenheiro CREA, conforme carga e layout do edifício.
  2. **Fabricação e instalação** (`IconTool`) — Peças em aço inox rastreável, fabricadas e instaladas pela RF — sem revenda, sem terceiro.
  3. **Equipamento** (`IconAnchor`) — Pontos em aço inox com resistência de 2.500 kgf, muito acima do exigido pela norma.
  4. **Segurança** (`IconShieldCheck`) — Teste de arrancamento em 100% dos pontos individualmente, não por amostragem.
  5. **Acompanhamento** (`IconEye`) — Inspeção anual no primeiro ano inclusa e laudo de revalidação quando necessário.

**AdsBenefitsGrid:**
- Title: `Diferenciais técnicos que fazem a operação dar certo.`
- Subtítulo: `O nível de rigor que separa um sistema que passa na auditoria de um que não passa.`
- Benefícios: **manter os 4 atuais** (Aço inoxidável rastreável · Resistência 2.500 kgf · Teste de arrancamento 100% · Laudo técnico + ART inclusos) — já são técnicos e específicos, pouco overlap com pilares.

**AdsGallery:**
- Title: `Obras reais. Equipamento em operação.`
- Subtitle: `Pontos de ancoragem instalados em edifícios, hospitais e centros administrativos.`
- Imagens: `ancoragem-01.jpg` a `ancoragem-08.jpg` (8 imagens; pular `ancoragem-produto.png` e pasta `material/`).

**AdsTechSpecs:**
- Title: `Especificações técnicas.`
- Grupos:
  - **Material:** Aço inox 304 ou 316 · Rastreabilidade completa · Certificado de composição química
  - **Resistência:** Carga de ruptura superior a 7.850 kgf (comprovada em laboratório) · Resistência mínima 2.500 kgf (muito acima do exigido por norma)
  - **Instalação e teste:** Chumbador químico de alto desempenho · Teste de arrancamento em 100% dos pontos
  - **Documentação inclusa:** ART de fabricação · ART de instalação registrada no CREA · Laudo técnico detalhado · Certificado de resistência à corrosão
  - **Conformidade:** NR-18 · NR-35 · NBR 16325-1 · NR 10/2015-CBMDF · Portaria 157/2006
  - **Garantia e inspeção:** Garantia de 5 anos · Inspeção a cada 12 meses

**AdsFinalCta:**
- Title: `Sua edificação precisa de ancoragem? Entregamos o sistema pronto.`
- Description: `Do projeto à ART registrada — engenheiro CREA dimensiona os pontos, nossa equipe fabrica e instala com teste de arrancamento 100%.`

**WHATSAPP_MESSAGE:** `Olá, quero orçamento para solução completa de ancoragem predial (projeto + fabricação + instalação).`

---

### Linha de vida (`app/(ads)/lp/linha-de-vida/page.tsx`)

**Metadata:**
- Title: `Linha de Vida com Projeto, Instalação e Certificação | Grupo RF Engenharia`
- Description: `Solução completa em linha de vida: sistema flexível ou rígido, projeto CREA, instalação sem infiltração, documentação entregue. Filiais em Brasília, Goiânia e São Paulo.`

**AdsHero:**
- Badge: `Solução Completa em Segurança em Altura`
- Title: `Linha de vida resolvida: projeto, instalação, impermeabilização e certificação.`
- Subtitle: `Sistema flexível ou rígido para edifícios, galpões e indústrias. Projeto CREA, instalação sem infiltração e toda a documentação entregue. Filiais próprias em Brasília, Goiânia e São Paulo.`
- heroImage: `/images/linha-de-vida/linha-vida-01.jpg` (mantém)

**AdsSolutionPillars:**
- Title/Subtitle: iguais aos da balancim.
- Pilares:
  1. **Projeto técnico** (`IconBlueprint`) — Cálculo estrutural e memorial por engenheiro CREA, dimensionado ao uso e layout da cobertura.
  2. **Fabricação e instalação** (`IconTool`) — Sistema rígido ou flexível fabricado e instalado pela RF, escolhido conforme o projeto.
  3. **Equipamento** (`IconRouteAltRight`) — Componentes em aço inox conformes à ABNT, com certificado e rastreabilidade.
  4. **Segurança** (`IconShieldCheck`) — Instalação sem infiltração: fixação e vedação preservam a impermeabilização do telhado.
  5. **Acompanhamento** (`IconEye`) — ART, laudo técnico e memorial entregues; suporte pós-instalação e revalidação quando exigida.

**AdsBenefitsGrid:**
- Title: `Diferenciais técnicos que fazem a operação dar certo.`
- Subtítulo: `Rigor técnico e escolha de sistema que garantem uso seguro ao longo de toda a vida útil.`
- Benefícios: **manter os 4 atuais** (Projeto sob medida · Flexível ou rígida · Impermeabilização inclusa · Certificação completa) — já cobrem técnica específica, mantêm contraste com pilares.

**AdsGallery:**
- Title: `Obras reais. Equipamento em operação.`
- Subtitle: `Sistemas de linha de vida em coberturas industriais, hospitais e aeroportos.`
- Imagens: `linha-vida-01.jpg` a `linha-vida-09.jpg` + `linha-vida-concretagem.jpg` + `linha-vida-escadas-marinheiro.jpg` (11 imagens).

**AdsTechSpecs:**
- Title: `Especificações técnicas.`
- Grupos:
  - **Tipos disponíveis:** Flexível (cabo de aço) · Rígida Monovia (trilho em alumínio ou aço)
  - **Material:** Aço inox 304/316 · Certificação por laboratório independente · Componentes rastreáveis (cabos, ancoragens, esticadores, acessórios)
  - **Documentação inclusa:** ART · Laudo técnico · Memorial de cálculo
  - **Conformidade:** NR-18 · NR-35 · NBR 16325 · Código de obras local
  - **Garantia e inspeção:** Garantia de 5 anos · Inspeção a cada 12 meses (inclui revalidação e nova ART)

**AdsFinalCta:**
- Title: `Cobertura, galpão ou indústria? Linha de vida completa, instalada pela RF.`
- Description: `Engenheiro nosso projeta o sistema flexível ou rígido, nossa equipe instala sem comprometer a impermeabilização e entrega a documentação completa.`

**WHATSAPP_MESSAGE:** `Olá, quero orçamento para solução completa de linha de vida (projeto + instalação + certificação).`

## Plano de rollout

**Fase 1 — Componentes compartilhados:**
1. Criar `AdsSolutionPillars.tsx`.
2. Criar `AdsGallery.tsx`.
3. Criar `AdsTechSpecs.tsx`.
4. Editar `AdsHero.tsx` (faixa de filiais + prop `ctaLabel`).
5. Editar `AdsFinalCta.tsx` (prop `ctaLabel`).
6. Editar `AdsStickyMobileCta.tsx` (prop `ctaLabel`).

**Fase 2 — Rollout LP por LP (revisão em cada ponto):**
7. `balancim-eletrico/page.tsx` — nova copy completa. Revisão.
8. `linha-de-vida/page.tsx` — idem. Revisão.
9. `ancoragem/page.tsx` — idem. Revisão.

**Fase 3 — Documentação:**
10. Atualizar `components/ads/README.md` — documentar os 3 componentes novos e o padrão de `ctaLabel` por posição.

## Arquivos tocados

- **3 novos:** `components/ads/AdsSolutionPillars.tsx`, `AdsGallery.tsx`, `AdsTechSpecs.tsx`
- **6 editados:** `components/ads/AdsHero.tsx`, `AdsFinalCta.tsx`, `AdsStickyMobileCta.tsx`, `app/(ads)/lp/balancim-eletrico/page.tsx`, `linha-de-vida/page.tsx`, `ancoragem/page.tsx`
- **1 de docs:** `components/ads/README.md`
- **Nenhuma mudança em:** `data/contact.ts`, `AdsTopBar.tsx`, `AdsBenefitsGrid.tsx`, `AdsTrustBadges.tsx`, `AdsSocialProof.tsx`, `AdsFooter.tsx`, `app/(ads)/layout.tsx`, páginas institucionais (só leitura).

## Critérios de aceitação

**Funcionais:**
- [ ] Cada LP renderiza na ordem: Hero → Pilares → Benefícios → Galeria → Specs → Trust → Social → Final CTA → Sticky (mobile).
- [ ] Hero mostra faixa "Filiais próprias em: Brasília · Goiânia · São Paulo" acima dos logos de clientes.
- [ ] Todos os CTAs WhatsApp abrem `wa.me` com a mensagem por LP pré-preenchida (novo texto "solução completa").
- [ ] CTAs carregam `data-ads-cta` e `data-ads-lp` com o slug correto (tracking continua funcional para quando o GTM for instalado).
- [ ] Galeria carrega as 8+ imagens existentes por LP; nenhuma com `priority` (só o hero é `priority`).
- [ ] Mobile: sticky CTA não sobrepõe conteúdo final (`pb-24 md:pb-0` já existente mantém isso).
- [ ] `AdsTechSpecs` de balancim apresenta só o conteúdo extraído do institucional, sem placeholder visível.

**Qualidade:**
- [ ] `npm run lint` passa sem warnings nos arquivos novos/editados.
- [ ] `npm run build` passa.
- [ ] `robots: noindex` continua herdado de `(ads)/layout.tsx` (nada sobrescreve).
- [ ] Regra do `components/ads/README.md` mantida: sem `onClick` em `Ads*`; os 3 componentes novos são server components; `AdsHero` continua sendo o único client component de Ads* (por causa do `motion`).
- [ ] Todos os ícones novos vêm de `@tabler/icons-react`.

**Visual (review manual com `npm run dev`):**
- [ ] Mobile e desktop nas 3 LPs: seção "Solução Completa" é visualmente dominante; galeria transmite "obra real" (não genérica); specs são escaneáveis.

## Explicitamente fora de escopo

- Tracking (GTM, Pixel Meta, GA) — hook já preparado em `(ads)/layout.tsx`, instalação em ciclo futuro.
- A/B testing real de copy de CTA.
- Fotos novas do cliente — usa só inventário atual.
- Ficha técnica expandida de balancim (carga, dimensões, velocidade) — ciclo futuro.
- Substituição do CNPJ placeholder em `data/contact.ts` — outro ticket.
- Mudanças em páginas institucionais (`/rf-engenharia/*`, `/rf-locacao/*`) — apenas leitura pra extrair specs.
