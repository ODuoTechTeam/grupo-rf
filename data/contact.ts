export interface Office {
  city: string;
  state: string;
  phones: string[];
  address?: string;
  cep?: string;
  mapQuery?: string;
}

export const offices: Office[] = [
  {
    city: "Brasília",
    state: "DF",
    phones: ["(61) 9332-6766", "(61) 3264-3378"],
    address: "QSC 19 Ch 26 Cj. M Lote 01 - Taguatinga Sul",
    mapQuery: "QSC+19+Taguatinga+Sul+Brasilia+DF",
  },
  {
    city: "Goiânia",
    state: "GO",
    phones: ["(62) 99312-7838", "(62) 3142-6272"],
  },
  {
    city: "São Paulo",
    state: "SP",
    phones: ["(11) 99390-6054"],
    address: "Rodovia Raposo Tavares, km 18,5 - Jd. Boa Vista - Cotia/SP",
    cep: "06705-030",
    mapQuery: "Rodovia+Raposo+Tavares+km+18+Cotia+SP",
  },
];

export const contact = {
  tollFree: "0800 326 4378",
  whatsapp: "+5561993326766",
  whatsappDisplay: "(61) 99332-6766",
  emailEngenharia: "comercial@rf.eng.br",
  emailLocacao: "comercial@rflocacao.com.br",
  social: {
    facebook: "https://facebook.com/RfEngenharia",
    instagram: "https://instagram.com/rfengenharia",
    linkedin: "https://linkedin.com/company/rfengenharia",
    youtube: "https://youtube.com/@rfengenharia",
  },
};

export const companyInfo = {
  name: "Grupo RF Engenharia",
  since: 2006,
  // TODO(pre-go-live): replace CNPJ placeholder with the real value
  // before publishing any ads landing page to production.
  cnpj: "XX.XXX.XXX/0001-XX",
  creaEngenharia: "10047/RF",
  creaLocacao: "11649/RF",
  responsavelTecnico: {
    name: "Eng. Dr. Rafael Vaz Ferreira",
    crea: "13839/D-DF",
    titles: [
      "Engenheiro Mecânico (UnB/DF)",
      "Eng. Segurança do Trabalho",
      "Pós-Graduado em Eng. de Energia (FEAD/MG)",
      "Pós-Graduado em Eng. Segurança do Trabalho (FEAD/MG)",
      "Mestre Especialista em Seg. do Trabalho (UneAtlântico/Espanha)",
      "Doutor em Projetos de Segurança do Trabalho (UNINI/México)",
      "Professor de Pós-Graduação em Engenharia (INBEC/UNIP)",
    ],
  },
};
