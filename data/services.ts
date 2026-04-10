import {
  IconShieldLock,
  IconRouteAltRight,
  IconBuildingBridge,
  IconZoomCheck,
  IconSchool,
  IconFileSearch,
  IconHome,
  IconWall,
  IconLadder,
  IconStairs,
  IconCrane,
  IconLayoutGrid,
  IconAnchor,
} from "@tabler/icons-react";

type IconType = React.ComponentType<{ className?: string }>;

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: IconType;
  href: string;
  features?: string[];
  image?: string;
}

export const engenhariaServices: Service[] = [
  {
    title: "Ancoragem Predial",
    slug: "ancoragem-predial",
    description:
      "Projeto, fabricação e instalação de pontos de ancoragem em edifícios. Sistema fixo em aço inox com teste de arrancamento em 100% dos pontos.",
    icon: IconShieldLock,
    href: "/rf-engenharia/ancoragem-predial",
    image: "/images/ancoragem/ancoragem-01.jpg",
    features: [
      "Aço inoxidável rastreável",
      "Resistência 2.500 kgf",
      "Teste de arrancamento 100%",
      "Laudo técnico e ART",
    ],
  },
  {
    title: "Linha de Vida",
    slug: "linha-de-vida",
    description:
      "Projeto, fabricação e instalação de sistemas de linha de vida prediais e industriais. Soluções para edifícios, galpões, hospitais e instalações industriais.",
    icon: IconRouteAltRight,
    href: "/rf-engenharia/linha-de-vida",
    image: "/images/linha-de-vida/linha-vida-01.jpg",
    features: [
      "Predial e industrial",
      "Flexível e rígida",
      "Impermeabilização inclusa",
      "Certificação completa",
    ],
  },
  {
    title: "Construção Metálica",
    slug: "construcao-metalica",
    description:
      "Projetos de construção e fabricação metálica. Coberturas, galpões, escadas marinheiro, passarelas de acesso e rampas.",
    icon: IconBuildingBridge,
    href: "/rf-engenharia/construcao-metalica",
    image: "/images/estruturas-metalicas/estrutura-metalica-01.jpg",
    features: [
      "Coberturas e galpões",
      "Escadas e passarelas",
      "Equipe própria supervisionada",
      "Infraestrutura completa",
    ],
  },
  {
    title: "Inspeção Anual",
    slug: "inspecao-anual",
    description:
      "Inspeção e certificação anual de sistemas de ancoragem definitiva. Testes, revalidação de laudo e emissão de ART.",
    icon: IconZoomCheck,
    href: "/rf-engenharia/inspecao-anual",
    image: "/images/ancoragem/ancoragem-04.jpg",
    features: [
      "Inspeção a cada 12 meses",
      "Testes de arrancamento",
      "Revalidação de laudo",
      "Emissão de ART",
    ],
  },
  {
    title: "Treinamentos",
    slug: "treinamentos",
    description:
      "Treinamentos especializados em NR-10, NR-18 e NR-35 para capacitação de trabalhadores em segurança do trabalho.",
    icon: IconSchool,
    href: "/rf-engenharia/treinamentos",
    image: "/images/ancoragem/ancoragem-05.jpg",
    features: [
      "NR-10 Eletricidade",
      "NR-18 Construção Civil",
      "NR-35 Trabalho em Altura",
      "Certificação válida",
    ],
  },
  {
    title: "Projetos e Laudos",
    slug: "projetos-laudos",
    description:
      "Elaboração de projetos técnicos, laudos de aterramento, PGR, auditoria e consultoria em segurança do trabalho.",
    icon: IconFileSearch,
    href: "/rf-engenharia/projetos-laudos",
    image: "/images/linha-de-vida/linha-vida-04.jpg",
    features: [
      "Projetos de montagem",
      "Laudos técnicos",
      "PGR",
      "Consultoria especializada",
    ],
  },
];

export const engenhariaProducts: Service[] = [
  {
    title: "Kit Linha de Vida para Telhados",
    slug: "kit-linha-vida-telhados",
    description:
      "Solução ideal para indústrias com grandes telhados ou tanques. Minimiza perfurações no telhado.",
    icon: IconHome,
    href: "/rf-engenharia/produtos/kit-linha-vida-telhados",
    image: "/images/linha-de-vida/kit-linha-vida-telhados.webp",
  },
  {
    title: "Linha de Vida para Concretagem",
    slug: "linha-vida-concretagem",
    description:
      "Sistema de linha de vida específico para etapas de concretagem em obras civis.",
    icon: IconWall,
    href: "/rf-engenharia/produtos/linha-vida-concretagem",
    image: "/images/linha-de-vida/linha-vida-concretagem.jpg",
  },
  {
    title: "Linha de Vida para Escadas Marinheiro",
    slug: "linha-vida-escadas-marinheiro",
    description:
      "Sistema de proteção para escadas tipo marinheiro com cabo de aço e dispositivos de segurança.",
    icon: IconLadder,
    href: "/rf-engenharia/produtos/linha-vida-escadas-marinheiro",
    image: "/images/linha-de-vida/linha-vida-escadas-marinheiro.jpg",
  },
  {
    title: "Escada Marinheiro",
    slug: "escada-marinheiro",
    description:
      "Fabricação de escadas marinheiro em aço para acesso a coberturas e áreas elevadas.",
    icon: IconStairs,
    href: "/rf-engenharia/produtos/escada-marinheiro",
    image: "/images/linha-de-vida/linha-vida-escadas-marinheiro.jpg",
  },
  {
    title: "Gaiola para Grua",
    slug: "gaiola-grua",
    description:
      "Gaiola para elevação e transporte de materiais no canteiro de obras com grua.",
    icon: IconLayoutGrid,
    href: "/rf-engenharia/produtos/gaiola-grua",
    image: "/images/equipment/gaiola-grua.png",
  },
  {
    title: "Plataforma de Grua",
    slug: "plataforma-grua",
    description:
      "Plataforma de grua para movimentação segura de cargas no canteiro de obras.",
    icon: IconCrane,
    href: "/rf-engenharia/produtos/plataforma-grua",
    image: "/images/equipment/plataforma-grua.jpg",
  },
  {
    title: "Material para Ancoragem",
    slug: "material-ancoragem",
    description:
      "Fabricantes e distribuidores de materiais para ancoragem predial. Olhal em aço inox certificado, kit completo com barra e chumbador.",
    icon: IconAnchor,
    href: "/rf-engenharia/produtos/material-ancoragem",
    image: "/images/ancoragem/ancoragem-produto.png",
  },
];
