import type { Metadata } from "next";
import {
  IconBusinessplan,
  IconTool,
  IconAnchor,
  IconShieldCheck,
  IconEye,
  IconShieldLock,
  IconZoomCheck,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsSolutionPillars from "@/components/ads/AdsSolutionPillars";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsGallery from "@/components/ads/AdsGallery";
import AdsTechSpecs from "@/components/ads/AdsTechSpecs";
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
    "Solução completa em ancoragem predial: pontos em aço inox 304/316, carga de ruptura superior a 7.850 kgf, teste 100%, ART registrada. Filiais em Brasília, Goiânia e São Paulo.",
};

const PILLARS = [
  {
    icon: IconBusinessplan,
    title: "Projeto técnico",
    description:
      "Cálculo estrutural e definição dos pontos por engenheiro CREA, conforme carga e layout do edifício.",
  },
  {
    icon: IconTool,
    title: "Fabricação e instalação",
    description:
      "Peças em aço inox rastreável, fabricadas e instaladas pela RF — sem revenda, sem terceiro.",
  },
  {
    icon: IconAnchor,
    title: "Equipamento",
    description:
      "Pontos em aço inox com resistência de 2.500 kgf, muito acima do exigido pela norma.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Teste de arrancamento em 100% dos pontos individualmente, não por amostragem.",
  },
  {
    icon: IconEye,
    title: "Acompanhamento",
    description:
      "Inspeção anual no primeiro ano inclusa e laudo de revalidação quando necessário.",
  },
];

const BENEFITS = [
  {
    icon: IconShieldLock,
    title: "Aço inoxidável rastreável",
    description:
      "Peças com certificado de origem e rastreabilidade completa — materiais premium para longa durabilidade.",
  },
  {
    icon: IconAnchor,
    title: "Resistência 2.500 kgf",
    description:
      "Muito acima do exigido pela norma regulamentadora — segurança com folga para o usuário.",
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
    src: "/images/ancoragem/ancoragem-03.jpg",
    alt: "Detalhe de olhal de ancoragem em aço inox 316",
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
    src: "/images/ancoragem/ancoragem-07.jpg",
    alt: "Sistema de ancoragem fixo em estrutura de concreto",
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
      "NR-18",
      "NR-35",
      "NBR 16325-1",
      "NR 10/2015-CBMDF",
      "Portaria 157/2006",
    ],
  },
  {
    heading: "Garantia e inspeção",
    items: ["Garantia de 5 anos", "Inspeção a cada 12 meses"],
  },
];

export default function AncoragemLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Solução Completa em Segurança Predial"
        title="Ancoragem predial resolvida: projeto, fabricação, instalação e ART inclusa."
        subtitle="Pontos em aço inox rastreável com teste de arrancamento 100% e documentação pronta para auditoria. Engenharia completa, do cálculo à certificação. Filiais próprias em Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/ancoragem/ancoragem-01.jpg"
        heroImageAlt="Ponto de ancoragem predial instalado em estrutura"
        lpSlug={LP_SLUG}
      />
      <AdsSolutionPillars
        title="Você não aluga um equipamento. Você recebe a solução pronta."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="O nível de rigor que separa um sistema que passa na auditoria de um que não passa."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais. Equipamento em operação."
        subtitle="Pontos de ancoragem instalados em edifícios, hospitais e centros administrativos."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
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
