export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  group?: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "RF Engenharia",
    href: "/rf-engenharia",
    children: [
      { label: "Ancoragem Predial", href: "/rf-engenharia/ancoragem-predial", group: "Serviços" },
      { label: "Linha de Vida", href: "/rf-engenharia/linha-de-vida", group: "Serviços" },
      { label: "Construção Metálica", href: "/rf-engenharia/construcao-metalica", group: "Serviços" },
      { label: "Inspeção Anual", href: "/rf-engenharia/inspecao-anual", group: "Serviços" },
      { label: "Treinamentos", href: "/rf-engenharia/treinamentos", group: "Serviços" },
      { label: "Projetos e Laudos", href: "/rf-engenharia/projetos-laudos", group: "Serviços" },
      { label: "Kit Linha de Vida para Telhados", href: "/rf-engenharia/produtos/kit-linha-vida-telhados", group: "Produtos" },
      { label: "Linha de Vida para Concretagem", href: "/rf-engenharia/produtos/linha-vida-concretagem", group: "Produtos" },
      { label: "Linha de Vida para Escadas Marinheiro", href: "/rf-engenharia/produtos/linha-vida-escadas-marinheiro", group: "Produtos" },
      { label: "Escada Marinheiro", href: "/rf-engenharia/produtos/escada-marinheiro", group: "Produtos" },
      { label: "Gaiola para Grua", href: "/rf-engenharia/produtos/gaiola-grua", group: "Produtos" },
      { label: "Plataforma de Grua", href: "/rf-engenharia/produtos/plataforma-grua", group: "Produtos" },
      { label: "Material para Ancoragem", href: "/rf-engenharia/produtos/material-ancoragem", group: "Produtos" },
    ],
  },
  {
    label: "RF Locação",
    href: "/rf-locacao",
    children: [
      { label: "Balancim Elétrico", href: "/rf-locacao/balancim-eletrico" },
      { label: "Andaime Fachadeiro", href: "/rf-locacao/andaime-fachadeiro" },
      { label: "Elevador Cremalheira", href: "/rf-locacao/elevador-cremalheira" },
      { label: "Mini-Grua", href: "/rf-locacao/mini-grua" },
      { label: "Proteções Coletivas", href: "/rf-locacao/protecoes-coletivas" },
      { label: "Cadeirinha Cabo de Aço", href: "/rf-locacao/cadeirinha-cabo-aco" },
      { label: "Equipamentos Diversos", href: "/rf-locacao/equipamentos-diversos" },
      { label: "Içamento", href: "/rf-locacao/icamento" },
    ],
  },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];
