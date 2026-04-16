import type { Metadata } from "next";
import {
  IconSchema,
  IconTool,
  IconBuildingSkyscraper,
  IconShieldCheck,
  IconEye,
  IconCircleCheck,
  IconFileCheck,
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

const LP_SLUG = "balancim-eletrico";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para solução completa de balancim elétrico (projeto + montagem + equipamento).";

export const metadata: Metadata = {
  title: "Balancim Elétrico com Projeto e Montagem | Grupo RF Engenharia",
  description:
    "Solução completa em balancim elétrico: projeto de instalação, montagem, equipamento e acompanhamento em obra. Filiais em Brasília, Goiânia e São Paulo.",
};

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
      "Balancim inspecionado, motorizado e conforme NR-18/NR-35, com cabos e EPIs auxiliares.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    description:
      "Treinamento dos operadores e inspeção diária durante toda a locação.",
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
    icon: IconShieldCheck,
    title: "Inspeção diária em obra",
    description:
      "Operadores acompanhados e equipamento inspecionado todos os dias da locação.",
  },
  {
    icon: IconCircleCheck,
    title: "Conformidade NR-18/NR-35",
    description:
      "Equipamento dentro das normas regulamentadoras de construção civil e trabalho em altura.",
  },
  {
    icon: IconTool,
    title: "Motor com redundância de segurança",
    description:
      "Sistema de freio automático e segunda linha de cabo em caso de falha.",
  },
  {
    icon: IconFileCheck,
    title: "Documentação pronta para auditoria",
    description:
      "ART, laudo e projeto de instalação entregues antes de a obra começar.",
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
      "Tipo: Plataforma suspensa motorizada",
      "Acionamento: motor elétrico via cabos de aço",
      "Movimentação: subida e descida controladas",
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

export default function BalancimEletricoLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Solução Completa para Fachadas"
        title="Balancim elétrico entregue pronto: projeto, montagem, equipamento e segurança."
        subtitle="Mais que locação. Sua fachada resolvida por engenheiros CREA — com ART, laudo, montagem e acompanhamento em obra. Filiais próprias em Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/balancim/balancim-08.jpg"
        heroImageAlt="Balancim elétrico em operação em obra de fachada"
        lpSlug={LP_SLUG}
      />
      <AdsSolutionPillars
        title="Você não aluga um equipamento. Você recebe a solução pronta."
        subtitle="Uma única empresa responsável do projeto à entrega final — sem subcontratação, sem lacuna de responsabilidade."
        pillars={PILLARS}
      />
      <AdsBenefitsGrid
        title="Diferenciais técnicos que fazem a operação dar certo."
        subtitle="Além do escopo da solução, o que garante que a operação não dá problema em obra."
        benefits={BENEFITS}
      />
      <AdsGallery
        title="Obras reais. Equipamento em operação."
        subtitle="Instalações de balancim elétrico em fachadas residenciais, comerciais e institucionais."
        images={GALLERY_IMAGES}
      />
      <AdsTechSpecs title="Especificações técnicas." groups={SPEC_GROUPS} />
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
