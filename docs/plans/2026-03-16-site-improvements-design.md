# Design — Alterações Site Grupo RF v2

Data: 2026-03-16

## Contexto

Feedback do cliente após aprovação do visual (site v1). Precisam de melhorias em copy, ícones e imagens. Fontes de conteúdo: site atual rf-engenharia.com e Google Drive com fotos dos produtos.

## Alterações

### 1. Home Page — Stats e BH
- Stat "15+" → **"20+"** Anos de experiência
- Stat "4" → **"3"** Unidades no Brasil
- Remover escritório de BH de: `data/contact.ts`, página Sobre, Footer, Hero stats

### 2. Navegação — Separar Produtos e Serviços
- Dropdown "RF Engenharia" com dois sub-grupos visuais:
  - **Serviços**: Ancoragem Predial, Linha de Vida, Construção Metálica, Inspeção Anual, Treinamentos, Projetos e Laudos
  - **Produtos**: Os 6 kits
- Atualizar `data/navigation.ts` e `components/layout/Header.tsx`

### 3. Ícones RF Engenharia
- Manter `IconBuildingBridge` (Construção Metálica) — aprovado
- Propor novos ícones mais visuais/concretos para: Ancoragem Predial, Linha de Vida, Inspeção Anual, Treinamentos, Projetos e Laudos

### 4. Construção Metálica — Consistência de Ícone
- Trocar `IconHammer` → `IconBuildingBridge` na página detalhe (`app/rf-engenharia/construcao-metalica/page.tsx`)

### 5. Produtos — Hero com Imagem
- Substituir caixa de specs à direita por imagem do produto (fotos do Drive)
- Mover specs para seção abaixo do hero

### 6. Ancoragem Predial — Spec de Resistência
- Trocar todas as menções de "1.500 kgf" → **"2.500 kgf"** em `app/rf-engenharia/ancoragem-predial/page.tsx`

### 7. Copy — Tom Misto
- Hero sections: tom moderno/marketeiro
- Seções de detalhe: tom técnico com dados reais (normas NR18, NR35, NBR 16325, processos)
- Fonte: conteúdo coletado de rf-engenharia.com

### 8. Imagens — Upgrade Completo
- **Drive → site**:
  - Ancoragem (50 fotos) → páginas Ancoragem + Produtos ancoragem
  - Balancim Elétrico (16 fotos) → página Balancim (RF Locação)
  - Estruturas Metálicas (4 fotos) → página Construção Metálica
  - Linha de Vida (12 fotos) → páginas Linha de Vida + Produtos LV
- **Stock**: Home hero, Inspeção, Treinamentos, Projetos, demais equipamentos RF Locação
- Todas as imagens devem estar alinhadas com o padrão visual do design
