import { Metadata } from "next";
import { Fence } from "lucide-react";
import {
  IconShieldCheck,
  IconStack2,
  IconLineDashed,
  IconBuildingSkyscraper,
  IconHammer,
  IconUsersGroup,
  IconAlertTriangle,
  IconCircleCheck,
  IconPackage,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Proteções Coletivas",
  description:
    "Locação de proteções coletivas para obras: guarda-corpo metálico, suportes de bandejas e tubo linha de vida. Segurança em conformidade com NR-18.",
};

const protectionTypes = [
  {
    icon: Fence,
    title: "Guarda-Corpo Metálico",
    description:
      "Sistema de proteção perimetral para locais elevados. Reduz significativamente os riscos de acidentes e quedas, proporcionando segurança contínua para todos os trabalhadores nas áreas de risco.",
    highlights: [
      "Proteção em locais elevados",
      "Redução de riscos de quedas",
      "Instalação perimetral completa",
      "Estrutura metálica resistente",
    ],
  },
  {
    icon: IconStack2,
    title: "Suportes de Bandejas",
    description:
      "Proteção contra queda de objetos, materiais, entulhos e ferramentas. Os suportes de bandejas protegem tanto os trabalhadores que atuam nos pavimentos inferiores quanto as pessoas que circulam nas proximidades da obra.",
    highlights: [
      "Proteção contra queda de objetos",
      "Segurança para trabalhadores",
      "Proteção para transeuntes",
      "Retenção de entulhos e ferramentas",
    ],
  },
  {
    icon: IconLineDashed,
    title: "Tubo Linha de Vida (tipo varal)",
    description:
      "Proteção coletiva fundamental para trabalhos em altura, especialmente durante a montagem de formas, armação e concretagem. O tubo linha de vida tipo varal é um equipamento essencial para a segurança da equipe em atividades críticas.",
    highlights: [
      "Montagem de formas",
      "Armação e concretagem",
      "Proteção coletiva em altura",
      "Sistema tipo varal",
    ],
  },
];

const applications = [
  { icon: IconBuildingSkyscraper, label: "Edificações" },
  { icon: IconHammer, label: "Construção civil" },
  { icon: IconUsersGroup, label: "Áreas de circulação" },
  { icon: IconAlertTriangle, label: "Perímetros elevados" },
  { icon: IconPackage, label: "Concretagem" },
  { icon: IconStack2, label: "Montagem de formas" },
];

export default function ProtecoesColetivas() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Proteções Coletivas" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconShieldCheck className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Proteções Coletivas
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Sistemas de proteção coletiva essenciais para a segurança em canteiros de obras.
                Oferecemos três tipos de proteção que, juntos, garantem a integridade física
                dos trabalhadores e das pessoas que circulam nas proximidades da obra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Types */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Tipos de Proteção"
            title="Soluções Completas de Segurança"
            description="Três tipos de proteção coletiva para cobrir todas as necessidades da sua obra."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {protectionTypes.map((protection) => (
              <div
                key={protection.title}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-6 group-hover:bg-primary-medium/20 transition-colors">
                  <protection.icon className="w-7 h-7 text-primary-medium" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">{protection.title}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-6">
                  {protection.description}
                </p>
                <ul className="space-y-2">
                  {protection.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Aplicações"
            title="Onde Utilizar"
            description="As proteções coletivas são obrigatórias em diversas situações da construção civil."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app) => (
              <div
                key={app.label}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all text-center"
              >
                <app.icon className="w-8 h-8 text-primary-medium" />
                <span className="text-sm text-text-light font-medium">{app.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NR Compliance */}
      <section className="py-16 bg-bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-primary-medium/30">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-pale shrink-0">
                <IconShieldCheck className="w-6 h-6 text-primary-medium" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  Conformidade com NR-18
                </h3>
                <p className="text-text-light leading-relaxed">
                  Todas as nossas proteções coletivas são projetadas e instaladas em total
                  conformidade com a Norma Regulamentadora NR-18. A proteção coletiva tem
                  prioridade sobre a proteção individual conforme as diretrizes regulamentadoras,
                  sendo obrigatória em toda obra de construção civil.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    "NR-18",
                    "ART Inclusa",
                    "Projeto Técnico",
                    "Instalação Profissional",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-medium/10 text-primary-medium border border-primary-medium/20"
                    >
                      <IconCircleCheck className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de proteções coletivas para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
