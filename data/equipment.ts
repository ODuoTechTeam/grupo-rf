import {
  IconCrane,
  IconBuildingSkyscraper,
  IconElevator,
  IconForklift,
  IconShieldCheck,
  IconArmchair,
  IconTools,
  IconArrowBadgeUp,
} from "@tabler/icons-react";

type IconType = React.ComponentType<{ className?: string }>;

export interface Equipment {
  title: string;
  slug: string;
  description: string;
  icon: IconType;
  href: string;
  badge?: string;
  features?: string[];
  image?: string;
}

export const locacaoEquipments: Equipment[] = [
  {
    title: "Balancim Elétrico",
    slug: "balancim-eletrico",
    description:
      "Andaime suspenso motorizado para obras de fachada: reboco, pastilhas, pintura, limpeza, impermeabilização e vidros.",
    icon: IconCrane,
    href: "/rf-locacao/balancim-eletrico",
    badge: "Mais Procurado",
    image: "/images/balancim/balancim-01.jpg",
    features: [
      "Comandos motorizados",
      "Plataforma estável",
      "Alta produtividade",
      "Obras de fachada",
    ],
  },
  {
    title: "Andaime Fachadeiro",
    slug: "andaime-fachadeiro",
    description:
      "Trabalho contínuo em altura para manutenção industrial e predial, reformas, acabamentos, alvenaria e pintura.",
    icon: IconBuildingSkyscraper,
    href: "/rf-locacao/andaime-fachadeiro",
    image: "/images/equipment/andaime-fachadeiro.webp",
    features: [
      "Trabalho contínuo",
      "Reformas e acabamentos",
      "Manutenção industrial",
      "Revestimento",
    ],
  },
  {
    title: "Elevador Cremalheira",
    slug: "elevador-cremalheira",
    description:
      "Transporte de materiais e trabalhadores na obra. Ideal para obras industriais, infraestrutura e civis.",
    icon: IconElevator,
    href: "/rf-locacao/elevador-cremalheira",
    image: "/images/equipment/elevador-cremalheira.webp",
    features: [
      "Transporte vertical",
      "Materiais e pessoas",
      "Obras industriais",
      "Alta capacidade",
    ],
  },
  {
    title: "Mini-Grua",
    slug: "mini-grua",
    description:
      "Movimentação de cargas no canteiro de obras. Fácil manuseio, reduz a carga de trabalho manual.",
    icon: IconForklift,
    href: "/rf-locacao/mini-grua",
    image: "/images/equipment/mini-grua.webp",
    features: [
      "Fácil manuseio",
      "Movimentação de cargas",
      "Canteiro de obras",
      "Reduz trabalho manual",
    ],
  },
  {
    title: "Proteções Coletivas",
    slug: "protecoes-coletivas",
    description:
      "Guarda-corpo metálico, suportes de bandejas e tubo linha de vida para proteção coletiva em obras.",
    icon: IconShieldCheck,
    href: "/rf-locacao/protecoes-coletivas",
    image: "/images/equipment/guarda-corpo.webp",
    features: [
      "Guarda-corpo metálico",
      "Suportes de bandejas",
      "Linha de vida tipo varal",
      "Conformidade NR-18",
    ],
  },
  {
    title: "Cadeirinha Cabo de Aço",
    slug: "cadeirinha-cabo-aco",
    description:
      "Balancim individual com cadeira suspensa manual. Estrutura metálica resistente e assento ergonômico.",
    icon: IconArmchair,
    href: "/rf-locacao/cadeirinha-cabo-aco",
    image: "/images/equipment/cadeirinha.png",
    features: [
      "Cadeira suspensa manual",
      "Estrutura metálica",
      "Assento ergonômico",
      "Cabo de aço",
    ],
  },
  {
    title: "Equipamentos Diversos",
    slug: "equipamentos-diversos",
    description:
      "Betoneira, compactador de solo, marteletes, furadeiras, serras, compressores e mais para sua obra.",
    icon: IconTools,
    href: "/rf-locacao/equipamentos-diversos",
    image: "/images/equipment/betoneira.webp",
    features: [
      "Betoneira",
      "Compactador de solo",
      "Marteletes",
      "Ferramentas elétricas",
    ],
  },
  {
    title: "Içamento",
    slug: "icamento",
    description:
      "Mini-grua, velox, guincho de coluna e talha para movimentação vertical de cargas na obra.",
    icon: IconArrowBadgeUp,
    href: "/rf-locacao/icamento",
    image: "/images/equipment/mini-grua.webp",
    features: [
      "Mini-Grua",
      "Velox",
      "Guincho de coluna",
      "Talha",
    ],
  },
];

export const complementaryServices = [
  {
    title: "Montagem",
    description: "Montagem e desmontagem dos equipamentos no local da obra.",
  },
  {
    title: "Manutenção",
    description: "Preventiva e corretiva com qualidade técnica e agilidade.",
  },
  {
    title: "Projeto e ART",
    description: "Projetos e documentações obrigatórias para conformidade.",
  },
  {
    title: "Treinamento",
    description: "Teórico e prático para operação segura dos equipamentos.",
  },
];
