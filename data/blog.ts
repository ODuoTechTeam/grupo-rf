export type BlogCategory =
  | "Normas e Legislação"
  | "Equipamentos"
  | "Treinamentos"
  | "Projetos e Laudos"
  | "Obras e Cases";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; style: "bullet" | "numbered"; items: string[] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string }
  | { type: "quote"; text: string; attribution?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  readingTime: number;
  author: string;
  coverImage: string;
  coverImageAlt: string;
  featured?: boolean;
  tags: string[];
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nr-35-trabalho-em-altura-guia-completo",
    title: "NR-35: Guia Completo para Trabalho em Altura Seguro",
    excerpt:
      "Entenda todos os requisitos da Norma Regulamentadora 35, quem precisa cumpri-la e como garantir a segurança dos trabalhadores em atividades acima de 2 metros.",
    category: "Normas e Legislação",
    publishedAt: "2025-11-12",
    readingTime: 8,
    author: "Eng. Rafael Vaz Ferreira",
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    coverImageAlt:
      "Trabalhadores utilizando equipamentos de segurança em altura em uma construção",
    featured: true,
    tags: ["NR-35", "Segurança do Trabalho", "Trabalho em Altura", "Normas Regulamentadoras"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "O que é a NR-35?",
      },
      {
        type: "paragraph",
        text: "A Norma Regulamentadora 35 (NR-35) estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente com esta atividade. Considera-se trabalho em altura toda atividade executada acima de 2,00 metros do nível inferior, onde haja risco de queda.",
      },
      {
        type: "callout",
        variant: "info",
        text: "A NR-35 se aplica a qualquer atividade realizada acima de 2 metros do nível inferior com risco de queda — não apenas na construção civil, mas em manutenção predial, industrial, telecomunicações e diversas outras áreas.",
      },
      {
        type: "heading",
        level: 2,
        text: "Responsabilidades do Empregador",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Garantir a implementação das medidas de proteção estabelecidas na norma",
          "Assegurar a realização da Análise de Risco (AR) e a emissão da Permissão de Trabalho (PT)",
          "Desenvolver procedimento operacional para atividades rotineiras de trabalho em altura",
          "Assegurar a supervisão por trabalhador capacitado e autorizado",
          "Garantir que todo trabalho em altura seja precedido de treinamento específico",
          "Fornecer e exigir o uso de EPIs adequados e em perfeito estado de conservação",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Capacitação e Treinamento",
      },
      {
        type: "paragraph",
        text: "O treinamento deve ser realizado com carga horária mínima de 8 horas, incluindo parte teórica e prática. A parte prática deve ser realizada em situação que simule as condições reais de trabalho do profissional. O treinamento deve ser ministrado por instrutores com comprovada proficiência no assunto.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "O treinamento periódico bienal (a cada dois anos) é obrigatório, com carga horária mínima de 8 horas. Sempre que ocorrer mudança nos procedimentos ou condições de trabalho, treinamento complementar deve ser realizado.",
      },
      {
        type: "heading",
        level: 3,
        text: "Conteúdo programático mínimo do treinamento",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Normas e regulamentos aplicáveis ao trabalho em altura",
          "Análise de risco e condições impeditivas",
          "Riscos potenciais inerentes ao trabalho em altura e medidas de prevenção e controle",
          "Sistemas, equipamentos e procedimentos de proteção coletiva",
          "Equipamentos de Proteção Individual (EPI) para trabalho em altura — seleção, inspeção, conservação e limitação de uso",
          "Acidentes típicos em trabalhos em altura",
          "Condutas em situações de emergência, noções de técnicas de resgate e primeiros socorros",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Equipamentos de Proteção",
      },
      {
        type: "paragraph",
        text: "Os sistemas de proteção contra quedas devem ser adequados à tarefa a ser executada. O SPIQ (Sistema de Proteção Individual contra Quedas) deve ser composto por ancoragem, elemento de ligação e cinto de segurança tipo paraquedista. Os pontos de ancoragem devem possuir resistência mínima de 1.500 kgf por trabalhador conectado.",
      },
      {
        type: "quote",
        text: "Cabe ao empregador avaliar o estado de saúde dos trabalhadores que exercem atividades em altura, garantindo que os exames e a sistemática de avaliação sejam adequados aos riscos presentes.",
        attribution: "NR-35, item 35.2.1",
      },
    ],
  },
  {
    slug: "portaria-157-2006-ancoragem-obrigatoria",
    title: "Portaria 157/2006: Quando a Ancoragem Predial é Obrigatória?",
    excerpt:
      "Saiba quais edificações precisam obrigatoriamente de sistema de ancoragem na cobertura e como a Portaria 157/2006 regulamenta essa exigência.",
    category: "Normas e Legislação",
    publishedAt: "2025-10-28",
    readingTime: 6,
    author: "Eng. Rafael Vaz Ferreira",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    coverImageAlt: "Vista de edifícios residenciais modernos com fachada de vidro",
    tags: ["Portaria 157", "Ancoragem Predial", "Legislação", "Segurança Predial"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "O que determina a Portaria 157/2006?",
      },
      {
        type: "paragraph",
        text: "A Portaria 157, de 10 de abril de 2006, do Ministério do Trabalho e Emprego, determina que toda edificação com 4 ou mais pavimentos — ou altura igual ou superior a 12 metros — deve possuir sistema de ancoragem instalado na cobertura, destinado à fixação de equipamentos de sustentação de andaimes e de cabos de segurança para o uso de cadeirinhas.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "A obrigatoriedade se aplica tanto a edifícios novos quanto a existentes que necessitem de manutenção em fachada. A responsabilidade é do proprietário ou condomínio.",
      },
      {
        type: "heading",
        level: 2,
        text: "Quais edificações estão obrigadas?",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Edifícios residenciais com 4 ou mais pavimentos",
          "Edifícios comerciais com altura igual ou superior a 12 metros",
          "Hospitais, hotéis e edifícios públicos com as mesmas características",
          "Edificações industriais que necessitem de manutenção em fachada",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Características do sistema de ancoragem",
      },
      {
        type: "paragraph",
        text: "O sistema de ancoragem deve ser composto por pontos fixos instalados na cobertura ou estrutura da edificação, fabricados em aço inoxidável com rastreabilidade de lote. Cada ponto deve suportar carga mínima de 1.500 kgf e ser submetido a teste de arrancamento individual após a instalação.",
      },
      {
        type: "heading",
        level: 3,
        text: "Processo de instalação padrão",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Elaboração do projeto técnico por engenheiro habilitado",
          "Fornecimento de material em aço inoxidável rastreável",
          "Instalação dos pontos por equipe especializada",
          "Impermeabilização de todos os pontos de fixação",
          "Teste de arrancamento em 100% dos pontos",
          "Emissão de laudo técnico e ART registrada no CREA",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "A RF Engenharia realiza todo o processo — do projeto à emissão do laudo — com equipe própria supervisionada por Engenheiro Mecânico, garantindo conformidade total com a Portaria 157/2006.",
      },
    ],
  },
  {
    slug: "balancim-eletrico-vs-andaime-fachadeiro",
    title: "Balancim Elétrico ou Andaime Fachadeiro? Como Escolher",
    excerpt:
      "Comparativo técnico entre balancim elétrico e andaime fachadeiro: vantagens, limitações e critérios para escolher o equipamento ideal para cada obra.",
    category: "Equipamentos",
    publishedAt: "2025-10-15",
    readingTime: 5,
    author: "Equipe Técnica RF",
    coverImage:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80",
    coverImageAlt: "Andaimes instalados na fachada de um edifício em construção",
    tags: ["Balancim Elétrico", "Andaime Fachadeiro", "Locação de Equipamentos", "Fachada"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "Quando escolher o Balancim Elétrico?",
      },
      {
        type: "paragraph",
        text: "O balancim elétrico (andaime suspenso motorizado) é o equipamento mais utilizado em obras de fachada. Ideal para serviços como reboco, aplicação de pastilhas, pintura, limpeza, impermeabilização, instalação de vidros e inspeções prediais. A plataforma é suspensa por cabos de aço e possui comandos motorizados de subida e descida, proporcionando maior produtividade e qualidade na execução dos serviços.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Ideal para edifícios altos (acima de 10 pavimentos)",
          "Maior produtividade — deslocamento motorizado",
          "Plataforma estável para trabalhos de acabamento fino",
          "Necessita de pontos de ancoragem na cobertura",
          "Requer projeto de montagem e ART",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Quando escolher o Andaime Fachadeiro?",
      },
      {
        type: "paragraph",
        text: "O andaime fachadeiro é uma estrutura fixa montada a partir do solo, ideal para trabalhos contínuos em altura em toda a extensão da fachada. É especialmente recomendado para manutenção industrial e predial, reformas, acabamentos, alvenaria, pintura e revestimento em edificações de menor porte.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Ideal para edificações de menor porte (até 8 pavimentos)",
          "Acesso contínuo a toda a fachada simultaneamente",
          "Não depende de ancoragem na cobertura",
          "Maior área de trabalho para equipes numerosas",
          "Montagem e desmontagem mais demorada",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Comparativo rápido",
      },
      {
        type: "callout",
        variant: "tip",
        text: "Regra prática: para edifícios altos com serviços pontuais na fachada, o balancim é mais eficiente. Para reformas completas em edifícios menores, o andaime fachadeiro pode ser mais vantajoso pelo acesso simultâneo.",
      },
      {
        type: "paragraph",
        text: "A RF Locação disponibiliza ambos os equipamentos para locação, com montagem, desmontagem, projeto de montagem, ART e treinamento inclusos. Nossa equipe técnica pode ajudar a definir a melhor solução para sua obra.",
      },
    ],
  },
  {
    slug: "linha-de-vida-flexivel-vs-rigida",
    title: "Linha de Vida Flexível vs. Rígida: Qual a Certa para Seu Projeto?",
    excerpt:
      "Entenda as diferenças técnicas entre sistemas de linha de vida flexível e rígida, suas aplicações ideais e como escolher o sistema correto para cada situação.",
    category: "Equipamentos",
    publishedAt: "2025-09-30",
    readingTime: 7,
    author: "Eng. Rafael Vaz Ferreira",
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    coverImageAlt:
      "Instalação de sistema de segurança em cobertura industrial",
    featured: true,
    tags: ["Linha de Vida", "Segurança em Altura", "NBR 16325", "EPI"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "O que é uma Linha de Vida?",
      },
      {
        type: "paragraph",
        text: "A linha de vida é um sistema de ancoragem contínua que permite ao trabalhador se deslocar ao longo de uma área elevada mantendo-se sempre conectado a um ponto seguro. A RF Engenharia projeta, fabrica e instala sistemas de linha de vida para edificações, galpões industriais, hospitais e diversas outras aplicações, sempre em conformidade com a NBR 16325 e NR-35.",
      },
      {
        type: "heading",
        level: 2,
        text: "Linha de Vida Flexível (cabo de aço)",
      },
      {
        type: "paragraph",
        text: "A linha de vida flexível utiliza cabo de aço como elemento de sustentação. É o sistema mais versátil e amplamente utilizado, podendo ser instalado em coberturas, fachadas, passarelas e áreas industriais. Permite vãos maiores entre apoios e se adapta a diferentes geometrias de cobertura.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Maior versatilidade de instalação — adapta-se a diferentes layouts",
          "Permite vãos maiores entre apoios intermediários",
          "Custo geralmente menor para grandes extensões",
          "Ideal para coberturas, telhados e áreas amplas",
          "Requer absorvedor de energia no trava-queda",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Linha de Vida Rígida (trilho / monovia)",
      },
      {
        type: "paragraph",
        text: "A linha de vida rígida utiliza um trilho metálico (monovia) como elemento de sustentação. Oferece deflexão zero durante uma queda, reduzindo a distância de queda livre. É ideal para espaços confinados ou com altura livre limitada, onde a deflexão do cabo de aço seria um problema.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Deflexão zero — menor distância de queda livre",
          "Ideal para espaços com altura livre limitada",
          "Maior resistência a uso intensivo e frequente",
          "Manutenção simplificada do trilho",
          "Custo mais alto por metro linear",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "No projeto do TCU, a RF Engenharia instalou 1.480 metros de linha de vida flexível combinada com trechos de monovia rígida, demonstrando que as duas tecnologias podem — e devem — ser combinadas conforme a necessidade de cada trecho.",
      },
      {
        type: "heading",
        level: 3,
        text: "Como escolher?",
      },
      {
        type: "paragraph",
        text: "A escolha entre linha de vida flexível e rígida depende de fatores como altura livre disponível, frequência de uso, extensão do sistema e geometria do local. O ideal é sempre contar com o dimensionamento de um engenheiro especialista que avalie todas as variáveis do projeto.",
      },
    ],
  },
  {
    slug: "treinamento-nr-35-o-que-esperar",
    title: "Treinamento NR-35: O Que os Trabalhadores Precisam Saber",
    excerpt:
      "Tudo sobre o treinamento obrigatório para trabalho em altura: carga horária, conteúdo programático, validade e quem precisa realizá-lo.",
    category: "Treinamentos",
    publishedAt: "2025-09-18",
    readingTime: 6,
    author: "Equipe Técnica RF",
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    coverImageAlt: "Profissionais em treinamento de segurança do trabalho",
    tags: ["NR-35", "Treinamento", "Capacitação", "Segurança do Trabalho"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "Quem precisa fazer o treinamento?",
      },
      {
        type: "paragraph",
        text: "Todo trabalhador que execute atividades acima de 2 metros do nível inferior, onde haja risco de queda, precisa de capacitação específica conforme a NR-35. Isso inclui não apenas trabalhadores da construção civil, mas também profissionais de manutenção predial e industrial, telecomunicações, limpeza de fachadas, instalações elétricas em altura, entre outros.",
      },
      {
        type: "heading",
        level: 2,
        text: "Carga horária e validade",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Treinamento inicial: mínimo de 8 horas (teórico + prático)",
          "Treinamento periódico: bienal (a cada 2 anos), mínimo de 8 horas",
          "Treinamento eventual: sempre que houver mudança de procedimento, acidente ou retorno de afastamento superior a 90 dias",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conteúdo programático",
      },
      {
        type: "paragraph",
        text: "O treinamento abrange tanto a parte teórica quanto a prática, cobrindo normas e regulamentos, análise de risco, sistemas de proteção, equipamentos de proteção individual, acidentes típicos e procedimentos de emergência.",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Normas e regulamentos aplicáveis ao trabalho em altura",
          "Análise de risco e condições impeditivas",
          "Riscos potenciais e medidas de prevenção e controle",
          "Sistemas de proteção coletiva — instalação, uso e limitações",
          "EPIs para trabalho em altura — seleção, inspeção e conservação",
          "Acidentes típicos em trabalhos em altura",
          "Técnicas de resgate e primeiros socorros",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "A parte prática é obrigatória e deve simular condições reais de trabalho. Treinamentos exclusivamente teóricos não atendem à norma.",
      },
      {
        type: "heading",
        level: 2,
        text: "Instrutores e certificação",
      },
      {
        type: "paragraph",
        text: "O treinamento deve ser ministrado por instrutores com comprovada proficiência no assunto. A RF Engenharia oferece treinamentos de NR-35 com instrutores engenheiros de segurança do trabalho, garantindo certificação válida e conteúdo atualizado conforme as últimas atualizações normativas.",
      },
    ],
  },
  {
    slug: "art-laudo-tecnico-ancoragem-diferenca",
    title: "ART vs. Laudo Técnico em Ancoragem: Qual a Diferença?",
    excerpt:
      "Entenda a diferença entre ART e laudo técnico no contexto de sistemas de ancoragem predial, e por que ambos são indispensáveis para a conformidade legal.",
    category: "Projetos e Laudos",
    publishedAt: "2025-09-05",
    readingTime: 5,
    author: "Eng. Rafael Vaz Ferreira",
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    coverImageAlt: "Profissional analisando documentos técnicos de engenharia",
    tags: ["ART", "Laudo Técnico", "CREA", "Documentação Técnica"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "O que é a ART?",
      },
      {
        type: "paragraph",
        text: "A Anotação de Responsabilidade Técnica (ART) é o instrumento legal que identifica o responsável técnico pela execução de obras ou prestação de serviços de engenharia. É registrada junto ao CREA (Conselho Regional de Engenharia e Agronomia) e vincula o engenheiro à obra, garantindo que há um profissional habilitado responsável pelo serviço executado.",
      },
      {
        type: "heading",
        level: 2,
        text: "O que é o Laudo Técnico?",
      },
      {
        type: "paragraph",
        text: "O laudo técnico é o documento que comprova a realização de ensaios, testes e inspeções no sistema de ancoragem instalado. No caso da ancoragem predial, o laudo detalha os resultados dos testes de arrancamento realizados em cada ponto, atestando que o sistema atende aos requisitos de resistência e segurança estabelecidos pelas normas vigentes.",
      },
      {
        type: "heading",
        level: 3,
        text: "Conteúdo típico de um laudo de ancoragem",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Identificação da edificação e do responsável técnico",
          "Descrição do sistema de ancoragem instalado",
          "Especificação dos materiais utilizados (aço inoxidável, chumbador químico)",
          "Resultados dos testes de arrancamento ponto a ponto",
          "Mapa de localização dos pontos de ancoragem",
          "Parecer técnico sobre a conformidade do sistema",
          "Prazo de validade e necessidade de inspeção periódica",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "A ART garante que há um engenheiro responsável. O laudo comprova que o sistema funciona. Ambos são obrigatórios e complementares — um não substitui o outro.",
      },
      {
        type: "heading",
        level: 2,
        text: "Por que ambos são indispensáveis?",
      },
      {
        type: "paragraph",
        text: "Para fins de fiscalização e conformidade com a Portaria 157/2006, NR-18 e NR-35, o condomínio ou proprietário deve possuir tanto a ART quanto o laudo técnico do sistema de ancoragem. A ausência de qualquer um desses documentos pode resultar em multas, embargos e, em caso de acidente, responsabilização civil e criminal.",
      },
    ],
  },
  {
    slug: "caso-tcu-1480m-linha-de-vida",
    title: "Case: 1.480m de Linha de Vida no TCU",
    excerpt:
      "Conheça o projeto executado pela RF Engenharia no Tribunal de Contas da União: 1.480 metros de linha de vida e 423 pontos de ancoragem nos edifícios Sede e Anexos.",
    category: "Obras e Cases",
    publishedAt: "2025-08-20",
    readingTime: 7,
    author: "Eng. Rafael Vaz Ferreira",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    coverImageAlt: "Edifício institucional moderno com fachada de vidro",
    featured: true,
    tags: ["Case", "TCU", "Linha de Vida", "Ancoragem Predial", "Brasília"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "O desafio",
      },
      {
        type: "paragraph",
        text: "O Tribunal de Contas da União (TCU), localizado em Brasília/DF, necessitava da instalação de um sistema completo de segurança contra quedas em seus edifícios Sede e Anexos I, II e III. O projeto demandava grande extensão de linha de vida e centenas de pontos de ancoragem, tudo em conformidade com as normas de segurança mais rigorosas e sem interromper as atividades do tribunal.",
      },
      {
        type: "heading",
        level: 2,
        text: "Escopo do projeto",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "1.480 metros de linha de vida flexível instalados nas coberturas",
          "423 pontos de ancoragem em aço inoxidável",
          "Cobertura de 4 edifícios: Sede, Anexo I, Anexo II e Anexo III",
          "Teste de arrancamento em 100% dos pontos instalados",
          "Laudo técnico completo e ART registrada no CREA",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Solução implementada",
      },
      {
        type: "paragraph",
        text: "A RF Engenharia executou o projeto completo, desde a elaboração do projeto técnico até a emissão da documentação final. O sistema de linha de vida flexível em cabo de aço foi combinado com trechos de monovia rígida em áreas com restrição de altura livre. Todos os materiais utilizados foram em aço inoxidável com rastreabilidade de lote, fixados com chumbador químico de alta performance.",
      },
      {
        type: "quote",
        text: "O projeto do TCU é um exemplo de como sistemas de linha de vida flexível e rígida podem ser combinados em um único projeto para atender às necessidades específicas de cada trecho da edificação.",
        attribution: "Eng. Rafael Vaz Ferreira, Responsável Técnico",
      },
      {
        type: "heading",
        level: 2,
        text: "Resultados",
      },
      {
        type: "paragraph",
        text: "O projeto foi concluído dentro do prazo, entre novembro de 2020 e maio de 2021, com todos os testes de arrancamento aprovados e documentação técnica completa entregue. O sistema atende integralmente às exigências da NR-35, NR-18 e NBR 16325, permitindo manutenção segura das fachadas e coberturas do complexo do TCU.",
      },
      {
        type: "callout",
        variant: "tip",
        text: "Cada projeto da RF Engenharia é dimensionado sob medida para as necessidades do cliente. Solicite um orçamento e conheça como podemos atender o seu edifício.",
      },
    ],
  },
  {
    slug: "inspecao-anual-sistema-ancoragem",
    title: "Inspeção Anual de Ancoragem: Por que é Obrigatória",
    excerpt:
      "Saiba por que a inspeção anual do sistema de ancoragem é obrigatória, o que é avaliado e quais os riscos de não realizar a manutenção periódica.",
    category: "Normas e Legislação",
    publishedAt: "2025-08-05",
    readingTime: 6,
    author: "Equipe Técnica RF",
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    coverImageAlt: "Profissional realizando inspeção de segurança em cobertura de edifício",
    tags: ["Inspeção Anual", "Ancoragem", "Manutenção Preventiva", "NR-35"],
    content: [
      {
        type: "heading",
        level: 2,
        text: "Por que a inspeção é obrigatória?",
      },
      {
        type: "paragraph",
        text: "A NR-35 e a NBR 16325 determinam que os sistemas de ancoragem definitiva devem ser inspecionados e recertificados periodicamente, no máximo a cada 12 meses. A inspeção anual garante que todos os componentes do sistema — pontos de ancoragem, cabos, conectores e estruturas de suporte — estão em condições adequadas de uso e mantêm a resistência originalmente especificada.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "O uso de um sistema de ancoragem sem inspeção válida configura irregularidade perante a fiscalização do trabalho e pode gerar multas, embargos e responsabilização em caso de acidente.",
      },
      {
        type: "heading",
        level: 2,
        text: "O que é avaliado na inspeção?",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Integridade visual de todos os pontos de ancoragem",
          "Verificação de corrosão, trincas ou deformações",
          "Teste de arrancamento em amostra representativa",
          "Estado de conservação dos cabos de aço e conectores",
          "Verificação da impermeabilização dos pontos de fixação",
          "Conformidade do sistema com o projeto original",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Documentação gerada",
      },
      {
        type: "paragraph",
        text: "Ao final da inspeção, é emitido um laudo técnico atualizado com o parecer sobre o estado de cada componente, acompanhado de ART do engenheiro responsável. Pontos que não atendam aos requisitos mínimos de segurança são sinalizados para reparo ou substituição imediata.",
      },
      {
        type: "heading",
        level: 3,
        text: "Periodicidade e renovação",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Inspeção anual obrigatória (máximo 12 meses entre inspeções)",
          "Revalidação do laudo técnico a cada inspeção",
          "Emissão de nova ART pelo engenheiro responsável",
          "Inspeção extraordinária após eventos climáticos severos ou sinistros",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "A RF Engenharia oferece serviço de inspeção anual com agendamento programado. Mantemos um controle de vencimento para notificar nossos clientes quando a próxima inspeção se aproxima.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  slug: string,
  category: BlogCategory,
  limit = 3
): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit);
}
