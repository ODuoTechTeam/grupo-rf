import type { Metadata } from "next";
import {
  IconSchema,
  IconTool,
  IconRouteAltRight,
  IconShieldCheck,
  IconBuildingBridge,
  IconFileSearch,
  IconDroplet,
  IconFileCertificate,
  IconBuildingSkyscraper,
  IconBuildingFactory2,
  IconHammer,
  IconAlertTriangle,
  IconGavel,
  IconBan,
} from "@tabler/icons-react";
import { Hospital, Plane, Truck } from "lucide-react";
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

const LP_SLUG = "linha-de-vida";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de linha de vida (projeto + instalação + certificação).";

export const metadata: Metadata = {
  title: "Linha de Vida com Projeto, Instalação e Certificação | Grupo RF Engenharia",
  description:
    "Linha de vida flexível ou rígida com projeto CREA, instalação sem infiltração e documentação completa. Filiais em Brasília, Goiânia e São Paulo.",
};

const PAINS = [
  {
    icon: IconGavel,
    title: "Não conformidade legal",
    description:
      "NR-35 e NR-18 obrigam sistema de proteção contra queda em qualquer trabalho a partir de 2 m de altura — sem ele, a obra está em descumprimento.",
  },
  {
    icon: IconAlertTriangle,
    title: "Risco de queda em altura",
    description:
      "Linha de vida mal dimensionada ou instalada sem teste de arrancamento expõe o trabalhador a queda fatal e a empresa à responsabilização criminal.",
  },
  {
    icon: IconBan,
    title: "Embargos e infiltrações",
    description:
      "Instalação amadora compromete a impermeabilização do telhado, gera infiltração e pode embargar serviços de manutenção e operação.",
  },
];

const PILLARS = [
  {
    icon: IconSchema,
    title: "Projeto",
    description:
      "Cálculo estrutural e memorial por engenheiro CREA, dimensionado ao uso e layout da cobertura.",
  },
  {
    icon: IconRouteAltRight,
    title: "Material",
    description:
      "Cabos, ancoragens, esticadores e acessórios em aço inox 304/316 conformes à ABNT, com certificado e rastreabilidade.",
  },
  {
    icon: IconTool,
    title: "Instalação",
    description:
      "Mão de obra própria especializada, supervisionada por Engenheiro Mecânico — sem subcontratação.",
  },
  {
    icon: IconDroplet,
    title: "Impermeabilização",
    description:
      "Tratamento em todos os pontos de fixação preserva a impermeabilização do telhado e evita infiltração.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Teste de arrancamento em 100% dos pontos de ancoragem, garantindo a capacidade de carga do sistema.",
  },
  {
    icon: IconFileCertificate,
    title: "Documentação e Certificação",
    description:
      "ART, laudo técnico e memorial de cálculo entregues — pronto para auditoria e fiscalização.",
  },
];

const BENEFITS = [
  {
    icon: IconRouteAltRight,
    title: "Projeto sob medida",
    description:
      "Cálculo estrutural feito por engenheiro CREA, adequado ao seu edifício e à sua operação.",
  },
  {
    icon: IconBuildingBridge,
    title: "Flexível ou rígida (monovia)",
    description:
      "Escolhemos o sistema conforme o layout, o uso e a frequência de utilização da instalação.",
  },
  {
    icon: IconShieldCheck,
    title: "Impermeabilização inclusa",
    description:
      "Sistema instalado sem criar pontos de infiltração no telhado — sua cobertura continua protegida.",
  },
  {
    icon: IconFileSearch,
    title: "Certificação completa",
    description:
      "ART, laudo técnico e memorial de cálculo entregues junto com o projeto.",
  },
];

const APPLICATIONS = [
  {
    icon: IconBuildingSkyscraper,
    title: "Edifícios prediais",
    description:
      "Edificações residenciais e comerciais em concreto armado, ideais para manutenção de coberturas e fachadas.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Galpões e indústrias",
    description:
      "Plantas fabris, refinarias, usinas e galpões logísticos com rotina de manutenção em altura.",
  },
  {
    icon: Hospital,
    title: "Hospitais e shoppings",
    description:
      "Sistemas internos para hospitais, shopping centers e edificações com acesso seguro a áreas elevadas.",
  },
  {
    icon: Plane,
    title: "Aeroportos e infraestrutura",
    description:
      "Aeroportos, terminais de carga e instalações que exigem manutenção contínua em coberturas e estruturas.",
  },
  {
    icon: Truck,
    title: "Docas e caminhões",
    description:
      "Carga, descarga e inspeção de topo de caminhões — operações com queda recorrente sem proteção.",
  },
  {
    icon: IconHammer,
    title: "Canteiros de obra",
    description:
      "Concretagem, montagem de estrutura e manutenção em altura durante a execução da obra.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/linha-de-vida/linha-vida-01.jpg",
    alt: "Linha de vida instalada em cobertura industrial",
  },
  {
    src: "/images/linha-de-vida/linha-vida-02.jpg",
    alt: "Sistema de linha de vida flexível em telhado",
  },
  {
    src: "/images/linha-de-vida/linha-vida-03.jpg",
    alt: "Detalhe de ponto de ancoragem de linha de vida em cobertura metálica",
  },
  {
    src: "/images/linha-de-vida/linha-vida-04.jpg",
    alt: "Instalação de linha de vida em edifício comercial",
  },
  {
    src: "/images/linha-de-vida/linha-vida-05.jpg",
    alt: "Linha de vida rígida em monovia industrial",
  },
  {
    src: "/images/linha-de-vida/linha-vida-06.jpg",
    alt: "Trabalhador conectado a linha de vida em manutenção de cobertura",
  },
  {
    src: "/images/linha-de-vida/linha-vida-07.jpg",
    alt: "Sistema completo de linha de vida em galpão",
  },
  {
    src: "/images/linha-de-vida/linha-vida-08.jpg",
    alt: "Linha de vida com cabo de aço tensionado em cobertura",
  },
  {
    src: "/images/linha-de-vida/linha-vida-09.jpg",
    alt: "Detalhe de esticador e ancoragem de linha de vida",
  },
  {
    src: "/images/linha-de-vida/linha-vida-concretagem.jpg",
    alt: "Linha de vida instalada durante concretagem de laje",
  },
  {
    src: "/images/linha-de-vida/linha-vida-escadas-marinheiro.jpg",
    alt: "Sistema de linha de vida em escadas marinheiro industriais",
  },
];

const SPEC_GROUPS = [
  {
    heading: "Tipos disponíveis",
    items: [
      "Flexível — cabo de aço para grandes vãos e coberturas",
      "Rígida Monovia — trilho em alumínio ou aço para alta frequência de uso",
    ],
  },
  {
    heading: "Material",
    items: [
      "Aço inox 304/316",
      "Certificação por laboratório independente",
      "Componentes rastreáveis: cabos, ancoragens, esticadores, acessórios",
    ],
  },
  {
    heading: "Instalação e teste",
    items: [
      "Mão de obra própria supervisionada por Engenheiro Mecânico",
      "Teste de arrancamento em todos os pontos",
      "Tratamento de impermeabilização em todos os pontos de fixação",
    ],
  },
  {
    heading: "Documentação inclusa",
    items: ["ART registrada no CREA", "Laudo técnico", "Memorial de cálculo"],
  },
  {
    heading: "Conformidade",
    items: ["NR-18", "NR-35", "NBR 16325", "Código de obras local"],
  },
  {
    heading: "Garantia e inspeção",
    items: [
      "Garantia de 5 anos",
      "Inspeção a cada 12 meses (inclui revalidação e nova ART)",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "O que é um sistema de linha de vida?",
    answer:
      "É um sistema de proteção contra quedas composto por cabos de aço ou trilhos fixados à estrutura da edificação, ao qual o trabalhador conecta seu dispositivo de proteção individual, permitindo deslocamento seguro em áreas elevadas.",
  },
  {
    question: "Onde pode ser instalada a linha de vida?",
    answer:
      "Em edifícios residenciais e comerciais, galpões industriais, hospitais, aeroportos, obras de construção civil e em qualquer edificação onde haja necessidade de acesso seguro a coberturas ou áreas elevadas.",
  },
  {
    question: "Qual a diferença entre linha de vida flexível e rígida?",
    answer:
      "A flexível utiliza cabo de aço, ideal para grandes vãos e coberturas, permitindo movimentação lateral. A rígida (monovia) utiliza trilho em alumínio ou aço, indicada para locais com alta frequência de uso e necessidade de transposição contínua.",
  },
  {
    question: "Quais normas regulamentam a linha de vida?",
    answer:
      "Os sistemas de linha de vida devem atender às normas NR-18 (Construção Civil), NR-35 (Trabalho em Altura), NBR 16325 (Dispositivos de Ancoragem) e código de obras local.",
  },
  {
    question: "É necessário fazer manutenção periódica?",
    answer:
      "Sim. A norma exige inspeção a cada 12 meses, incluindo avaliação visual dos componentes, teste de arrancamento nos pontos de ancoragem e revalidação do laudo técnico com emissão de nova ART.",
  },
  {
    question: "A RF Engenharia fabrica os componentes?",
    answer:
      "Sim. Somos fabricantes e distribuidores de olhais de ancoragem, postes e demais componentes. Todo material é fabricado em aço inox 304/316 com certificação de laboratório independente e garantia de 5 anos.",
  },
  {
    question: "A instalação compromete a impermeabilização do telhado?",
    answer:
      "Não. Realizamos tratamento de impermeabilização em todos os pontos de fixação, mantendo a integridade da cobertura e prevenindo infiltrações.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Oferecemos pagamento facilitado em até 12x sem juros no cartão de crédito ou faturado mediante análise cadastral. Temos material em estoque com pronta entrega.",
  },
];

export default function LinhaDeVidaLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Linha de Vida"
        title="Linha de Vida com projeto, instalação e certificação."
        subtitle="Sistema flexível ou rígido para edifícios, galpões e indústrias. Projeto CREA, instalação sem infiltração e toda a documentação entregue."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/linha-de-vida/linha-vida-01.jpg"
        heroImageAlt="Linha de vida instalada em cobertura industrial"
        lpSlug={LP_SLUG}
      />
      <AdsPainTrigger
        title="Sem linha de vida regularizada, sua operação está exposta a três riscos críticos."
        pains={PAINS}
      />
      <AdsSolutionPillars
        title="Você não contrata apenas um dispositivo. Você recebe uma solução completa de engenharia."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsApplications
        title="Onde instalamos linha de vida."
        subtitle="Sistemas projetados para a realidade de cada operação — do edifício corporativo ao galpão industrial."
        applications={APPLICATIONS}
      />
      <AdsInlineCta
        title="Tem cobertura para proteger? Pedimos as plantas e voltamos com prazo."
        description="Nosso engenheiro avalia o tipo de sistema (flexível ou rígido) e dimensiona o que cabe na sua operação."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="Rigor técnico e escolha de sistema que garantem uso seguro ao longo de toda a vida útil."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais e dispositivos instalados."
        subtitle="Sistemas de linha de vida em coberturas industriais, hospitais e aeroportos atendidos pela RF."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
      <AdsInlineCta
        title="Precisa de orçamento para uma cobertura específica?"
        description="Mande as plantas ou as fotos do telhado — nosso engenheiro responde com prazo e valor."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsFAQ
        title="Perguntas frequentes sobre linha de vida."
        subtitle="As dúvidas que síndicos, gestores de facilities e engenheiros mais nos enviam."
        items={FAQ_ITEMS}
      />
      <AdsResponsibleEngineer />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Cobertura, galpão ou indústria? Linha de vida completa, instalada pela RF."
        description="Engenheiro nosso projeta o sistema flexível ou rígido, nossa equipe instala sem comprometer a impermeabilização e entrega a documentação completa."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
