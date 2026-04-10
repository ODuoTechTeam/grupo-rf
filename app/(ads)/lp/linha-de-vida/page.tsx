import type { Metadata } from "next";
import {
  IconRouteAltRight,
  IconBuildingBridge,
  IconShieldCheck,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "linha-de-vida";
const WHATSAPP_MESSAGE =
  "Olá, quero orçamento para instalação de linha de vida.";

export const metadata: Metadata = {
  title: "Linha de Vida com Projeto e Instalação | Grupo RF Engenharia",
  description:
    "Sistemas de linha de vida flexível e rígida para edifícios, galpões, hospitais e indústrias. Projeto, instalação e certificação pela RF Engenharia.",
};

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

export default function LinhaDeVidaLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="RF Engenharia"
        title="Linha de Vida Predial e Industrial com Projeto e Instalação"
        subtitle="Sistemas flexíveis e rígidos para edifícios, galpões, hospitais e indústrias. Projeto, fabricação, instalação e certificação pela RF Engenharia."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/linha-de-vida/linha-vida-01.jpg"
        heroImageAlt="Linha de vida instalada em cobertura industrial"
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Por que contratar linha de vida com a RF?"
        subtitle="Projeto dedicado por engenheiro CREA, instalação sem infiltração, certificação completa."
        benefits={BENEFITS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Sua instalação precisa de linha de vida?"
        description="Fale agora com nossos engenheiros pelo WhatsApp e receba um projeto sob medida."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
