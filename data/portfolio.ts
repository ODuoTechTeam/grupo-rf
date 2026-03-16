export interface PortfolioItem {
  client: string;
  description: string;
  date?: string;
  stats?: string;
  image?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    client: "Shopping Conjunto Nacional Brasília",
    description: "378 pontos de ancoragem + 20 balancins para reforma de fachada",
    date: "Mai/2021",
    stats: "378 pontos",
    image: "/images/ancoragem/ancoragem-01.jpg",
  },
  {
    client: "Fábrica Heineken",
    description: "Projeto de linha de vida para substituição de telhado em Alexânia/GO",
    date: "Jun/2021",
    image: "/images/linha-de-vida/linha-vida-03.jpg",
  },
  {
    client: "Serra Bonita Sementes S/A",
    description: "3.200m de linha de vida flexível + 150m rígida monovia + 270 pontos de ancoragem",
    date: "Mai/2021",
    stats: "3.200m",
    image: "/images/linha-de-vida/linha-vida-02.jpg",
  },
  {
    client: "TCU - Tribunal de Contas da União",
    description: "1.480m de linha de vida + 423 pontos de ancoragem nos Ed. Sede e Anexos I, II e III",
    date: "Nov/2020 - Mai/2021",
    stats: "1.480m",
    image: "/images/linha-de-vida/linha-vida-01.jpg",
  },
  {
    client: "Ministério Público do Trabalho - Goiás",
    description: "68m de linha de vida flexível + 253 pontos de ancoragem",
    stats: "253 pontos",
    image: "/images/ancoragem/ancoragem-04.jpg",
  },
  {
    client: "Embaixada da Noruega",
    description: "Sistema de linha de vida e ancoragem em Brasília/DF",
    image: "/images/linha-de-vida/linha-vida-04.jpg",
  },
  {
    client: "CONFEA",
    description: "Projeto e instalação de pontos de ancoragem",
    image: "/images/ancoragem/ancoragem-05.jpg",
  },
  {
    client: "Hospital da Criança de Brasília",
    description: "Projeto de ancoragem, linha de vida e escadas marinheiro",
    image: "/images/estruturas-metalicas/estrutura-metalica-01.jpg",
  },
  {
    client: "Aeroporto de Guarulhos / GRU",
    description: "Projeto de sistema de prevenção contra queda (linha de vida)",
    image: "/images/linha-de-vida/linha-vida-05.jpg",
  },
  {
    client: "TIM Brasil",
    description: "Sistema de segurança em altura para infraestrutura de telecomunicações",
    image: "/images/linha-de-vida/linha-vida-06.jpg",
  },
];
