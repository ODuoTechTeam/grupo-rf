import type { Metadata } from "next";
import {
  IconShieldLock,
  IconAnchor,
  IconZoomCheck,
  IconFileSearch,
} from "@tabler/icons-react";
import AdsHero from "@/components/ads/AdsHero";
import AdsBenefitsGrid from "@/components/ads/AdsBenefitsGrid";
import AdsTrustBadges from "@/components/ads/AdsTrustBadges";
import AdsSocialProof from "@/components/ads/AdsSocialProof";
import AdsFinalCta from "@/components/ads/AdsFinalCta";
import AdsStickyMobileCta from "@/components/ads/AdsStickyMobileCta";

const LP_SLUG = "ancoragem";
const WHATSAPP_MESSAGE =
  "Olá, preciso de orçamento para sistema de ancoragem predial.";

export const metadata: Metadata = {
  title: "Ancoragem Predial com ART | Grupo RF Engenharia",
  description:
    "Pontos de ancoragem em aço inox com teste de arrancamento 100%. Projeto, fabricação e instalação com ART inclusa. Fale com um especialista.",
};

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

export default function AncoragemLandingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <AdsHero
        badge="RF Engenharia"
        title="Ancoragem Predial Definitiva com ART e Teste de Arrancamento"
        subtitle="Pontos de ancoragem em aço inox, resistência 2.500 kgf, teste 100% certificado. Projeto, fabricação e instalação pela RF Engenharia."
        whatsappMessage={WHATSAPP_MESSAGE}
        heroImage="/images/ancoragem/ancoragem-01.jpg"
        heroImageAlt="Ponto de ancoragem predial instalado em estrutura"
        lpSlug={LP_SLUG}
      />
      <AdsBenefitsGrid
        title="Por que contratar ancoragem com a RF?"
        subtitle="Engenharia, rastreabilidade e teste de arrancamento em 100% dos pontos."
        benefits={BENEFITS}
      />
      <AdsTrustBadges />
      <AdsSocialProof />
      <AdsFinalCta
        title="Pronto para garantir a segurança da sua edificação?"
        description="Fale agora com nossos engenheiros pelo WhatsApp e receba um orçamento técnico."
        whatsappMessage={WHATSAPP_MESSAGE}
        lpSlug={LP_SLUG}
      />
      <AdsStickyMobileCta whatsappMessage={WHATSAPP_MESSAGE} lpSlug={LP_SLUG} />
    </div>
  );
}
