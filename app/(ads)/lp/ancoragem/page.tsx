import type { Metadata } from "next";
import {
  IconSchema,
  IconAnchor,
  IconTool,
  IconDroplet,
  IconShieldCheck,
  IconFileCertificate,
  IconShieldLock,
  IconZoomCheck,
  IconFileSearch,
  IconBuildingSkyscraper,
  IconArmchair,
  IconRouteAltRight,
  IconAlertTriangle,
  IconGavel,
  IconBan,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsPainTrigger from "@/components/ads/AdsPainTrigger";
import AdsSolutionPillars from "@/components/ads/AdsSolutionPillars";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsApplications from "@/components/ads/AdsApplications";
import AdsGallery from "@/components/ads/AdsGallery";
import AdsTechSpecs from "@/components/ads/AdsTechSpecs";
import AdsInlineCta from "@/components/ads/AdsInlineCta";
import AdsFAQ from "@/components/ads/AdsFAQ";
import AdsResponsibleEngineer from "@/components/ads/AdsResponsibleEngineer";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "ancoragem";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de ancoragem predial (projeto + fabricação + instalação).";

export const metadata: Metadata = {
  title: "Ancoragem Predial com Projeto, Fabricação e ART | Grupo RF Engenharia",
  description:
    "Ancoragem predial: pontos em aço inox 304/316, carga de ruptura superior a 7.850 kgf, teste 100%, ART registrada. Filiais em Brasília, Goiânia e São Paulo.",
};

const PAINS = [
  {
    icon: IconGavel,
    title: "Não conformidade legal",
    description:
      "Portaria 157/2006 obriga ancoragem em edifícios com 4+ pavimentos. Sem o sistema regularizado, a edificação está em descumprimento.",
  },
  {
    icon: IconAlertTriangle,
    title: "Acidentes em altura",
    description:
      "Ponto mal dimensionado ou sem teste de arrancamento expõe trabalhadores a queda — e o condomínio à responsabilização civil e criminal.",
  },
  {
    icon: IconBan,
    title: "Embargos e paralisações",
    description:
      "Fiscalização do trabalho pode embargar a obra a qualquer momento se a ancoragem não tiver projeto, ART e laudo válidos.",
  },
];

const PILLARS = [
  {
    icon: IconSchema,
    title: "Projeto",
    description:
      "Projeto técnico com dimensionamento dos pontos por engenheiro CREA, conforme geometria, carga e necessidade da edificação.",
  },
  {
    icon: IconAnchor,
    title: "Material de Ancoragem",
    description:
      "Olhal em aço inox 304/316 com rastreabilidade de lote, ruptura superior a 7.850 kgf comprovada em laboratório.",
  },
  {
    icon: IconTool,
    title: "Instalação",
    description:
      "Mão de obra própria especializada, supervisionada por Engenheiro Mecânico — sem subcontratação, sem terceiro.",
  },
  {
    icon: IconDroplet,
    title: "Impermeabilização",
    description:
      "Tratamento impermeabilizante em todos os pontos de fixação, preservando a integridade da laje e da cobertura.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Teste de arrancamento estático em 100% dos pontos instalados, com carga superior a 2.500 kgf — sem amostragem.",
  },
  {
    icon: IconFileCertificate,
    title: "Documentação e Certificação",
    description:
      "ART de fabricação e instalação registradas no CREA, laudo técnico detalhado e certificado de resistência à corrosão.",
  },
];

const BENEFITS = [
  {
    icon: IconShieldLock,
    title: "Aço inoxidável rastreável",
    description:
      "Peças com certificado de origem, composição química e rastreabilidade completa — premium para longa durabilidade.",
  },
  {
    icon: IconAnchor,
    title: "Ruptura superior a 7.850 kgf",
    description:
      "Comprovada por ensaio de tração em laboratório — muito acima dos 2.500 kgf exigidos pela norma.",
  },
  {
    icon: IconZoomCheck,
    title: "Teste de arrancamento 100%",
    description:
      "Todos os pontos testados individualmente, não apenas por amostra. Garantia real de resistência.",
  },
  {
    icon: IconFileSearch,
    title: "Laudo técnico + ART inclusos",
    description:
      "Documentação completa pronta para auditoria, fiscalização e obrigações legais.",
  },
];

const APPLICATIONS = [
  {
    icon: IconBuildingSkyscraper,
    title: "Montagem de Balancins",
    description:
      "Pontos dimensionados para suportar a carga de balancins suspensos em serviços de fachada.",
  },
  {
    icon: IconArmchair,
    title: "Cadeirinha / Rapel",
    description:
      "Ancoragens projetadas para cadeirinhas e sistemas de rapel em manutenção e limpeza de fachadas.",
  },
  {
    icon: IconRouteAltRight,
    title: "Linha de Vida",
    description:
      "Permite instalar sistema de proteção coletiva com linha de vida, atendendo à NR-35.",
  },
  {
    icon: IconShieldCheck,
    title: "Resgate em altura",
    description:
      "Garante que o Corpo de Bombeiros realize resgate rápido em emergências (NR 10/2015-CBMDF).",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/ancoragem/ancoragem-01.jpg",
    alt: "Ponto de ancoragem predial instalado em estrutura de edifício",
  },
  {
    src: "/images/ancoragem/ancoragem-02.jpg",
    alt: "Sistema de ancoragem em aço inox fixado em cobertura",
  },
  {
    src: "/images/ancoragem/ancoragem-04.jpg",
    alt: "Pontos de ancoragem instalados em fachada de edifício comercial",
  },
  {
    src: "/images/ancoragem/ancoragem-05.jpg",
    alt: "Teste de arrancamento em ponto de ancoragem predial",
  },
  {
    src: "/images/ancoragem/ancoragem-06.jpg",
    alt: "Instalação de ancoragem predial em edifício hospitalar",
  },
  {
    src: "/images/ancoragem/ancoragem-08.jpg",
    alt: "Vista de pontos de ancoragem em cobertura de edifício institucional",
  },
];

const SPEC_GROUPS = [
  {
    heading: "Material",
    items: [
      "Aço inox 304 ou 316",
      "Rastreabilidade completa",
      "Certificado de composição química",
    ],
  },
  {
    heading: "Resistência",
    items: [
      "Carga de ruptura superior a 7.850 kgf (comprovada em laboratório)",
      "Resistência mínima 2.500 kgf (muito acima do exigido por norma)",
    ],
  },
  {
    heading: "Instalação e teste",
    items: [
      "Chumbador químico de alto desempenho",
      "Teste de arrancamento em 100% dos pontos",
      "Tratamento de impermeabilização em todos os pontos de fixação",
    ],
  },
  {
    heading: "Documentação inclusa",
    items: [
      "ART de fabricação",
      "ART de instalação registrada no CREA",
      "Laudo técnico detalhado",
      "Certificado de resistência à corrosão",
    ],
  },
  {
    heading: "Conformidade",
    items: [
      "Portaria 157/2006",
      "NR-18",
      "NR-35",
      "NBR 16325-1",
      "NR 10/2015-CBMDF",
    ],
  },
  {
    heading: "Garantia e inspeção",
    items: ["Garantia de 5 anos", "Inspeção a cada 12 meses"],
  },
];

const FAQ_ITEMS = [
  {
    question: "O sistema de ancoragem segue as exigências das normas?",
    answer:
      "Sim. O Sistema de Ancoragem Predial da RF Engenharia está de acordo com as exigências das normas NR-18, NR-35, NBR 16325 e NR 10/2015-CBMDF.",
  },
  {
    question: "O uso da ancoragem é obrigatório?",
    answer:
      "Sim. Desde a publicação da Portaria nº 157, de 10 de abril de 2006, todas as edificações com no mínimo quatro pavimentos (ou altura de 12 m) devem possuir dispositivos de ancoragem para sustentação de andaimes, balancins, cadeirinhas e cabos de segurança.",
  },
  {
    question: "Como deve ser o sistema de ancoragem?",
    answer:
      "Pela legislação, o sistema deve ser fixo na estrutura do edifício e atender todo o perímetro da fachada. Deve ser confeccionado em aço inox, resistente a intempéries, rastreável com gravação do nome e CNPJ da empresa fornecedora, material constituinte, número de lote e limite de carga.",
  },
  {
    question: "Além do olhal, qual outro material é utilizado?",
    answer:
      "Barras roscadas em aço inox e olhal de ancoragem desenvolvido pela nossa equipe técnica, também em aço inox, com resistência superior a 2.500 kgf e proteção contra intempéries.",
  },
  {
    question: "É realizada uma avaliação prévia à instalação?",
    answer:
      "Sim. Antes de qualquer instalação, desenvolvemos o projeto de locação dos pontos e fazemos verificação in loco com detector de materiais profissional não invasivo, evitando danos à estrutura existente.",
  },
  {
    question: "Quantos pontos são necessários em cada prédio?",
    answer:
      "A norma exige que os pontos atendam toda a fachada do edifício. Recomendamos projeto específico para cada edificação, pois a quantidade varia conforme geometria, altura e necessidades operacionais.",
  },
  {
    question: "Como se garante que o dispositivo está bem instalado?",
    answer:
      "Após a instalação, é realizado teste de arrancamento estático em 100% dos pontos, com carga superior a 2.500 kgf, e verificada sua estabilidade. O resultado é documentado em laudo técnico.",
  },
  {
    question: "Qual a periodicidade de manutenção?",
    answer:
      "A norma prevê inspeção periódica a cada 12 meses, no máximo. A inspeção inclui avaliação visual e teste de arrancamento em todos os pontos instalados, com revalidação de laudo e nova ART.",
  },
  {
    question: "É necessário tratamento de impermeabilização?",
    answer:
      "Quando a instalação é em platibanda, geralmente não há risco à impermeabilização. Em laje, pode haver necessidade de reparo de manta — a RF Engenharia executa o tratamento sempre que necessário, preservando a cobertura.",
  },
];

export default function AncoragemLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="RF Engenharia"
        title="Ancoragem Predial."
        subtitle="O sistema de ancoragem predial é utilizado geralmente na cobertura de edifícios como um ponto seguro para fixação de equipamentos para fachadas (balancins, cadeirinhas, etc), bem como para o SPIQ (Sistema de Proteção Individual contra Quedas)."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/ancoragem/ancoragem-01.jpg"
        heroImageAlt="Ponto de ancoragem predial instalado em estrutura"
        lpSlug={LP_SLUG}
      />
      <AdsPainTrigger
        title="Sem ancoragem regularizada, sua edificação está exposta a três riscos críticos."
        pains={PAINS}
      />
      <AdsSolutionPillars
        title="Você não contrata apenas um dispositivo. Você recebe uma solução completa de engenharia."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsApplications
        title="Onde a ancoragem predial é aplicada."
        subtitle="Pontos fixos que viabilizam todos os trabalhos de fachada, manutenção em altura e resposta a emergências."
        applications={APPLICATIONS}
      />
      <AdsInlineCta
        title="Quer saber se o seu edifício está em conformidade?"
        description="Engenheiro nosso visita a obra, dimensiona o sistema e envia o orçamento no mesmo dia."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="O nível de rigor que separa um sistema que passa na auditoria de um que não passa."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais e dispositivos instalados."
        subtitle="Pontos de ancoragem em edifícios, hospitais e centros administrativos atendidos pela RF."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
      <AdsInlineCta
        title="Precisa de orçamento para um edifício específico?"
        description="Mande as plantas ou as fotos da cobertura — nosso engenheiro responde com prazo e valor."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsFAQ
        title="Perguntas frequentes sobre ancoragem predial."
        subtitle="As dúvidas que síndicos, engenheiros e zeladorias mais nos enviam."
        items={FAQ_ITEMS}
      />
      <AdsResponsibleEngineer />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Sua edificação precisa de ancoragem? Entregamos o sistema pronto."
        description="Do projeto à ART registrada — engenheiro CREA dimensiona os pontos, nossa equipe fabrica e instala com teste de arrancamento 100%."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
