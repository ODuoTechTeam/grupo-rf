import type { Metadata } from "next";
import {
  IconBlueprint,
  IconTool,
  IconRouteAltRight,
  IconShieldCheck,
  IconEye,
  IconBuildingBridge,
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

const LP_SLUG = "linha-de-vida";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de linha de vida (projeto + instalação + certificação).";

export const metadata: Metadata = {
  title: "Linha de Vida com Projeto, Instalação e Certificação | Grupo RF Engenharia",
  description:
    "Solução completa em linha de vida: sistema flexível ou rígido, projeto CREA, instalação sem infiltração, documentação entregue. Filiais em Brasília, Goiânia e São Paulo.",
};

const PILLARS = [
  {
    icon: IconBlueprint,
    title: "Projeto técnico",
    description:
      "Cálculo estrutural e memorial por engenheiro CREA, dimensionado ao uso e layout da cobertura.",
  },
  {
    icon: IconTool,
    title: "Fabricação e instalação",
    description:
      "Sistema rígido ou flexível fabricado e instalado pela RF, escolhido conforme o projeto.",
  },
  {
    icon: IconRouteAltRight,
    title: "Equipamento",
    description:
      "Componentes em aço inox conformes à ABNT, com certificado e rastreabilidade.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Instalação sem infiltração: fixação e vedação preservam a impermeabilização do telhado.",
  },
  {
    icon: IconEye,
    title: "Acompanhamento",
    description:
      "ART, laudo técnico e memorial entregues; suporte pós-instalação e revalidação quando exigida.",
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
    title: "Flexível ou rígida",
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
    heading: "Documentação inclusa",
    items: ["ART", "Laudo técnico", "Memorial de cálculo"],
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

export default function LinhaDeVidaLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Solução Completa em Segurança em Altura"
        title="Linha de vida resolvida: projeto, instalação, impermeabilização e certificação."
        subtitle="Sistema flexível ou rígido para edifícios, galpões e indústrias. Projeto CREA, instalação sem infiltração e toda a documentação entregue. Filiais próprias em Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/linha-de-vida/linha-vida-01.jpg"
        heroImageAlt="Linha de vida instalada em cobertura industrial"
        lpSlug={LP_SLUG}
      />
      <AdsSolutionPillars
        title="Você não aluga um equipamento. Você recebe a solução pronta."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="Rigor técnico e escolha de sistema que garantem uso seguro ao longo de toda a vida útil."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais. Equipamento em operação."
        subtitle="Sistemas de linha de vida em coberturas industriais, hospitais e aeroportos."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
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
