import type { Metadata } from "next";
import {
  IconSchema,
  IconTool,
  IconBuildingSkyscraper,
  IconShieldCheck,
  IconEye,
  IconCircleCheck,
  IconFileCheck,
  IconLink,
  IconWeight,
  IconBolt,
  IconStack2,
  IconAnchor,
  IconShieldLock,
  IconSchool,
  IconAlertTriangle,
  IconGavel,
  IconBan,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsPainTrigger from "@/components/ads/AdsPainTrigger";
import AdsSolutionPillars from "@/components/ads/AdsSolutionPillars";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsPackageContents from "@/components/ads/AdsPackageContents";
import AdsGallery from "@/components/ads/AdsGallery";
import AdsTechSpecs from "@/components/ads/AdsTechSpecs";
import AdsInlineCta from "@/components/ads/AdsInlineCta";
import AdsCrossSelling from "@/components/ads/AdsCrossSelling";
import AdsLegalLiability from "@/components/ads/AdsLegalLiability";
import AdsResponsibleEngineer from "@/components/ads/AdsResponsibleEngineer";
import AdsFAQ from "@/components/ads/AdsFAQ";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "balancim-eletrico";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de balancim elétrico (projeto + montagem + equipamento).";

export const metadata: Metadata = {
  title: "Balancim Elétrico com Projeto, Montagem e ART | Grupo RF Engenharia",
  description:
    "Balancim elétrico com projeto técnico, montagem especializada e acompanhamento em obra. Alumínio, capacidade até 500 kg, módulos de 1 a 6 m, plataformas de 90 cm e atendimento até 30 pavimentos.",
};

const PAINS = [
  {
    icon: IconGavel,
    title: "Multas pesadas",
    description:
      "Equipamento de fachada fora da norma gera autuação imediata da fiscalização do trabalho — autuação por trabalhador exposto.",
  },
  {
    icon: IconAlertTriangle,
    title: "Acidentes em altura",
    description:
      "Balancim sem projeto, ART ou montagem técnica é a causa nº 1 de queda fatal em obra. A responsabilidade é solidária com a contratante.",
  },
  {
    icon: IconBan,
    title: "Embargos da obra",
    description:
      "Sem documentação correta, a obra é embargada e o cronograma da fachada para — multa por dia parado e atraso na entrega.",
  },
];

const PILLARS = [
  {
    icon: IconSchema,
    title: "Projeto técnico",
    description:
      "Memorial de cálculo e projeto de instalação assinados por engenheiro CREA.",
  },
  {
    icon: IconTool,
    title: "Montagem completa",
    description:
      "Equipe própria monta a plataforma suspensa em obra — sem terceirizar a instalação crítica.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Equipamento",
    description:
      "Balancim em alumínio, motorizado e conforme NR-18/NR-35, com cabos e EPIs auxiliares.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Sistema de freio automático, segunda linha de cabo de segurança e treinamento dos operadores.",
  },
  {
    icon: IconEye,
    title: "Acompanhamento",
    description:
      "Manutenção preventiva e suporte técnico enquanto o equipamento estiver na sua obra.",
  },
];

const BENEFITS = [
  {
    icon: IconCircleCheck,
    title: "Conformidade NR-18 / NR-35",
    description:
      "Equipamento dentro das normas regulamentadoras de construção civil e trabalho em altura.",
  },
  {
    icon: IconTool,
    title: "Motor com redundância de segurança",
    description:
      "Sistema de freio automático e segunda linha de cabo em caso de falha — proteção dupla para o operador.",
  },
  {
    icon: IconFileCheck,
    title: "Documentação pronta para auditoria",
    description:
      "ART, laudo e projeto de instalação entregues antes de a obra começar.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Atendimento até 30 pavimentos",
    description:
      "Configuração modular com cabos de 80 m que atende fachadas residenciais, comerciais e institucionais.",
  },
];

const PACKAGE_ITEMS = [
  {
    icon: IconStack2,
    title: "Balancim de 1 a 6 m",
    description: "Módulos configuráveis conforme a largura da fachada e o tipo de serviço.",
  },
  {
    icon: IconTool,
    title: "Afastador / Viga",
    description: "Estrutura de apoio dimensionada para o ponto de ancoragem da cobertura.",
  },
  {
    icon: IconLink,
    title: "Cabo de aço (80 m)",
    description: "Cabo principal de sustentação com comprimento que atende até 30 pavimentos.",
  },
  {
    icon: IconBolt,
    title: "Cabo elétrico (80 m)",
    description: "Alimentação completa para o motor — sem cobranças adicionais por metragem.",
  },
  {
    icon: IconWeight,
    title: "Contrapesos",
    description: "Conjunto de contrapesos calculado pelo projeto para garantir a estabilidade.",
  },
];

const CROSS_SELL = [
  {
    icon: IconAnchor,
    title: "Ancoragem Predial",
    description: "Pontos fixos para suspensão do balancim com ART e teste de arrancamento.",
  },
  {
    icon: IconShieldLock,
    title: "Locação de EPIs",
    description: "Cinturões, talabartes e trava-quedas certificados, prontos para a obra.",
  },
  {
    icon: IconSchool,
    title: "Treinamento NR-35",
    description: "Capacitação de trabalhadores em altura conforme exigência normativa.",
  },
  {
    icon: IconTool,
    title: "Montagem / Desmontagem",
    description: "Serviço técnico de montagem e desmontagem executado pela nossa equipe.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/balancim/balancim-01.jpg",
    alt: "Balancim elétrico instalado em fachada de edifício residencial",
  },
  {
    src: "/images/balancim/balancim-02.jpg",
    alt: "Balancim elétrico em operação em fachada comercial",
  },
  {
    src: "/images/balancim/balancim-03.jpg",
    alt: "Plataforma suspensa motorizada em obra de pintura de fachada",
  },
  {
    src: "/images/balancim/balancim-04.jpg",
    alt: "Detalhe de montagem do balancim elétrico em altura",
  },
  {
    src: "/images/balancim/balancim-05.jpg",
    alt: "Balancim suspenso em trabalho de impermeabilização de fachada",
  },
  {
    src: "/images/balancim/balancim-06.jpg",
    alt: "Operação de balancim em revestimento externo de edifício",
  },
  {
    src: "/images/balancim/balancim-07.jpg",
    alt: "Balancim elétrico em serviço de limpeza de fachada institucional",
  },
  {
    src: "/images/balancim/balancim-08.jpg",
    alt: "Vista geral de balancim elétrico em operação em obra de fachada",
  },
];

const SPEC_GROUPS = [
  {
    heading: "Equipamento",
    items: [
      "Material: estrutura em alumínio (leve e resistente à corrosão)",
      "Capacidade de carga: até 500 kg",
      "Módulos disponíveis: 1 m, 2 m, 3 m, 4 m, 5 m e 6 m",
      "Plataforma: 90 cm de largura útil",
      "Atendimento: até 30 pavimentos",
    ],
  },
  {
    heading: "Acionamento e movimentação",
    items: [
      "Plataforma suspensa motorizada",
      "Motor elétrico via cabos de aço",
      "Subida e descida controladas",
      "Sistema de freio automático",
      "Segunda linha de cabo de segurança",
    ],
  },
  {
    heading: "Aplicações em fachada",
    items: [
      "Pintura e revestimento",
      "Aplicação de pastilhas",
      "Impermeabilização",
      "Instalação de vidros",
      "Limpeza de fachadas",
    ],
  },
  {
    heading: "Conformidade",
    items: ["NR-18 — Construção civil", "NR-35 — Trabalho em altura"],
  },
  {
    heading: "Documentação inclusa",
    items: ["ART registrada no CREA", "Laudo técnico", "Projeto de instalação"],
  },
];

const FAQ_ITEMS = [
  {
    question: "O que está incluído na locação do balancim?",
    answer:
      "Balancim em módulos de 1 a 6 m, afastador/viga, cabo de aço de 80 m, cabo elétrico de 80 m e contrapesos. Sem surpresas financeiras: o kit é entregue completo.",
  },
  {
    question: "Qual a capacidade e altura máxima de atendimento?",
    answer:
      "Capacidade de até 500 kg, plataformas de 90 cm de largura e atendimento para edifícios de até 30 pavimentos. O dimensionamento exato é feito no projeto técnico.",
  },
  {
    question: "Por que escolher um balancim em alumínio?",
    answer:
      "Alumínio é mais leve que aço, resiste à corrosão e facilita a montagem em obras de longa duração — sem comprometer a capacidade de carga.",
  },
  {
    question: "Quem é responsável legalmente pelo equipamento na obra?",
    answer:
      "Pela NR-18, a responsabilidade é solidária entre contratante e locadora. Por isso a locadora precisa ter registro no CREA, projeto e ART — exatamente o que entregamos.",
  },
  {
    question: "Preciso de ancoragem predial para usar o balancim?",
    answer:
      "Sim. O balancim depende de pontos de ancoragem instalados na cobertura. Quem não tem ainda pode contratar a ancoragem com a RF junto da locação.",
  },
  {
    question: "Os operadores são treinados em NR-35?",
    answer:
      "A obra deve fornecer operadores treinados em NR-35. A RF oferece esse treinamento como serviço adicional para empresas que ainda não capacitaram seus profissionais.",
  },
  {
    question: "Como funciona a montagem e a desmontagem?",
    answer:
      "Nossa equipe executa montagem e desmontagem conforme o projeto técnico, com supervisão de engenheiro. Esse serviço é contratado junto com a locação.",
  },
  {
    question: "Em quais cidades a RF entrega o balancim?",
    answer:
      "Atendemos com filiais próprias em Brasília, Goiânia e São Paulo, e operamos em obras nas regiões metropolitanas dessas três capitais.",
  },
];

export default function BalancimEletricoLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Balancim Elétrico"
        title="Sua fachada não precisa de um equipamento. Precisa de uma solução."
        subtitle="Entregamos o Balancim Elétrico com projeto técnico, montagem especializada e acompanhamento em obra. Engenharia de ponta para eliminar acidentes e garantir conformidade legal."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/balancim/balancim-08.jpg"
        heroImageAlt="Balancim elétrico em operação em obra de fachada"
        lpSlug={LP_SLUG}
      />
      <AdsPainTrigger
        title="Evite multas pesadas, acidentes e embargos da sua obra por causa de equipamentos de fachada fora da norma."
        pains={PAINS}
      />
      <AdsSolutionPillars
        title="Você não contrata apenas um equipamento. Você recebe uma solução completa de engenharia."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="Além do escopo da solução, o que garante que a obra não dá problema na fachada."
        benefits={BENEFITS}
      />
      <AdsPackageContents
        title="Já incluso na locação."
        subtitle="O kit chega completo. Você não recebe cobrança extra por cabo, contrapeso ou estrutura de apoio."
        items={PACKAGE_ITEMS}
        footnote="Frete, montagem/desmontagem e EPIs são contratados à parte e podem entrar no mesmo orçamento."
      />
      <AdsInlineCta
        title="Quer o orçamento do kit completo na sua obra?"
        description="Mande as características da fachada — nosso engenheiro responde com prazo e valor no mesmo dia."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsTechSpecs
        title="Especificações técnicas."
        subtitle="Dados que o engenheiro da obra precisa para confirmar que o balancim atende à fachada."
        groups={SPEC_GROUPS}
      />
      <AdsGallery
        title="Obras reais e equipamentos em operação."
        subtitle="Instalações de balancim elétrico em fachadas residenciais, comerciais e institucionais."
        images={GALLERY_IMAGES}
      />
      <AdsCrossSelling
        title="Itens que costumam fechar junto com o balancim."
        subtitle="Quem aluga balancim quase sempre precisa de ancoragem, EPIs e treinamento. Combine tudo em um único contrato."
        items={CROSS_SELL}
      />
      <AdsLegalLiability
        body="A NR-18 estabelece responsabilidade solidária entre a contratante e a empresa locadora do equipamento de fachada. Se a locadora não tiver registro no CREA, ART de fabricação e projeto de instalação, a contratante responde pelos acidentes e pelas autuações como se fosse ela própria a executora."
        bullets={[
          "RF Engenharia: registro CREA-DF 11649/RF (locação) e 10047/RF (engenharia)",
          "ART de fabricação e instalação registradas no CREA antes da entrega",
          "Engenheiro Mecânico responsável técnico pela operação",
          "Laudo técnico e projeto disponíveis para fiscalização imediata",
        ]}
        callout="Locadores informais e amadores não conseguem entregar essa documentação — e quem contrata é quem responde judicialmente."
      />
      <AdsResponsibleEngineer />
      <AdsInlineCta
        title="Sua obra começa essa semana?"
        description="Acionamos engenheiro, projeto e equipe de montagem rapidamente para não atrasar o cronograma."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsFAQ
        title="Perguntas frequentes sobre balancim elétrico."
        subtitle="Dúvidas que engenheiros, compradores e gerentes de obra mais nos enviam."
        items={FAQ_ITEMS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Vai subir na fachada? Receba a solução completa."
        description="Engenheiro nosso visita a obra, dimensiona o sistema, monta o balancim e acompanha a operação. Orçamento no mesmo dia."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
