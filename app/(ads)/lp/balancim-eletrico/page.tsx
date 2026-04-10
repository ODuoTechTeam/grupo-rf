import type { Metadata } from "next";
import {
  IconShieldCheck,
  IconCircleCheck,
  IconBuildingSkyscraper,
  IconTool,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "balancim-eletrico";
const WHATSAPP_MESSAGE =
  "Olá, tenho interesse no aluguel de balancim elétrico. Pode me passar um orçamento?";

export const metadata: Metadata = {
  title: "Aluguel de Balancim Elétrico | Grupo RF Engenharia",
  description:
    "Locação de balancim elétrico com ART, laudo técnico e projeto de instalação. Atendemos Brasília, Goiânia e São Paulo. Fale com um especialista.",
};

const BENEFITS = [
  {
    icon: IconShieldCheck,
    title: "Engenharia inclusa",
    description:
      "ART, laudo técnico e projeto de instalação em 100% das locações — documentação pronta para auditoria.",
  },
  {
    icon: IconCircleCheck,
    title: "Conformidade NR-18/NR-35",
    description:
      "Equipamento inspecionado e conforme norma regulamentadora de trabalho em altura.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Atendimento nas 3 praças",
    description:
      "Frota própria em Brasília, Goiânia e São Paulo. Visita técnica rápida e orçamento no mesmo dia.",
  },
  {
    icon: IconTool,
    title: "Suporte do início ao fim",
    description:
      "Montagem, treinamento dos operadores e manutenção preventiva durante todo o período de locação.",
  },
];

export default function BalancimEletricoLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="Locação de Equipamentos"
        title="Aluguel de Balancim Elétrico com Engenharia Inclusa"
        subtitle="Plataforma suspensa motorizada para fachadas — com ART, laudo técnico e projeto de instalação. Atendemos Brasília, Goiânia e São Paulo."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/balancim/balancim-08.jpg"
        heroImageAlt="Balancim elétrico em operação em obra de fachada"
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Por que alugar balancim elétrico com a RF?"
        subtitle="Mais do que equipamento: engenharia, conformidade e suporte."
        benefits={BENEFITS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Precisa de balancim elétrico para sua obra?"
        description="Fale agora com nossos especialistas pelo WhatsApp e receba orçamento rápido."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
