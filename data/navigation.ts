export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "RF Engenharia",
    href: "/rf-engenharia",
    children: [
      { label: "Ancoragem Predial", href: "/rf-engenharia/ancoragem-predial" },
      { label: "Linha de Vida", href: "/rf-engenharia/linha-de-vida" },
      { label: "Construção Metálica", href: "/rf-engenharia/construcao-metalica" },
      { label: "Inspeção Anual", href: "/rf-engenharia/inspecao-anual" },
      { label: "Treinamentos", href: "/rf-engenharia/treinamentos" },
      { label: "Projetos e Laudos", href: "/rf-engenharia/projetos-laudos" },
      {
        label: "Produtos",
        href: "/rf-engenharia/produtos",
        children: [
          { label: "Kit Linha de Vida para Telhados", href: "/rf-engenharia/produtos/kit-linha-vida-telhados" },
          { label: "Linha de Vida para Concretagem", href: "/rf-engenharia/produtos/linha-vida-concretagem" },
          { label: "Linha de Vida para Escadas Marinheiro", href: "/rf-engenharia/produtos/linha-vida-escadas-marinheiro" },
          { label: "Escada Marinheiro", href: "/rf-engenharia/produtos/escada-marinheiro" },
          { label: "Gaiola para Grua", href: "/rf-engenharia/produtos/gaiola-grua" },
          { label: "Plataforma de Grua", href: "/rf-engenharia/produtos/plataforma-grua" },
        ],
      },
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
