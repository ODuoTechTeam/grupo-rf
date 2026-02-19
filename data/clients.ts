export interface ClientCategory {
  category: string;
  clients: string[];
}

export const clientCategories: ClientCategory[] = [
  {
    category: "Autarquias e Empresas Públicas",
    clients: [
      "Banco do Brasil",
      "Caixa Econômica Federal",
      "TCU",
      "Ministério da Economia",
    ],
  },
  {
    category: "Poder Público",
    clients: ["Ministério Público do Trabalho", "CONFEA"],
  },
  {
    category: "Rede de Saúde",
    clients: [
      "Hospital Sírio-Libanês",
      "Hospital da Criança de Brasília",
      "Sabin",
    ],
  },
  {
    category: "Construtoras",
    clients: [
      "MRV",
      "Brookfield",
      "Emplavi",
      "Villela e Carvalho",
      "Brasal",
      "Odebrecht",
      "JCGontijo",
    ],
  },
  {
    category: "Outros",
    clients: [
      "Via",
      "TIM Brasil",
      "Heineken",
      "Aeroporto de Guarulhos",
      "Shopping Conjunto Nacional",
    ],
  },
];
