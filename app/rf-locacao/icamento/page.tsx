import { Metadata } from "next";
import { Zap, Pilcrow, Link } from "lucide-react";
import {
  IconCrane,
  IconElevator,
  IconBuildingSkyscraper,
  IconBuildingFactory2,
  IconHelmet,
  IconPackage,
  IconTruck,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Içamento",
  description:
    "Locação de equipamentos de içamento: mini-grua, velox, guincho de coluna e talha. Movimentação vertical de cargas com segurança.",
};

const liftingEquipment = [
  {
    icon: IconCrane,
    title: "Mini-Grua",
    description:
      "Equipamento compacto para movimentação vertical de cargas no canteiro de obras. Ideal para obras com espaços reduzidos que necessitam de agilidade no içamento de materiais.",
    highlights: [
      "Compacta e versátil",
      "Espaços reduzidos",
      "Fácil operação",
      "Alta produtividade",
    ],
  },
  {
    icon: Zap,
    title: "Velox",
    description:
      "Sistema de içamento rápido e eficiente para movimentação vertical de cargas. Oferece velocidade e praticidade no transporte de materiais entre pavimentos da obra.",
    highlights: [
      "Içamento rápido",
      "Alta velocidade",
      "Eficiência operacional",
      "Transporte entre pavimentos",
    ],
  },
  {
    icon: Pilcrow,
    title: "Guincho de Coluna",
    description:
      "Equipamento de içamento fixado em coluna para movimentação vertical de cargas. Solução robusta e estável para operações de carga e descarga em obras de todos os portes.",
    highlights: [
      "Fixação em coluna",
      "Estabilidade superior",
      "Carga e descarga",
      "Diversos portes de obra",
    ],
  },
  {
    icon: Link,
    title: "Talha",
    description:
      "Dispositivo mecânico para elevação e movimentação de cargas pesadas. A talha oferece controle preciso na elevação, sendo fundamental para operações que exigem posicionamento exato.",
    highlights: [
      "Cargas pesadas",
      "Controle preciso",
      "Posicionamento exato",
      "Elevação segura",
    ],
  },
];

const applications = [
  { icon: IconElevator, label: "Içamento de materiais" },
  { icon: IconBuildingSkyscraper, label: "Edificações" },
  { icon: IconBuildingFactory2, label: "Obras industriais" },
  { icon: IconHelmet, label: "Construção civil" },
  { icon: IconPackage, label: "Carga e descarga" },
  { icon: IconTruck, label: "Logística de obra" },
];

export default function IcamentoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Içamento" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconCrane className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Içamento
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Linha completa de equipamentos para içamento e movimentação vertical de cargas
                em obras. Oferecemos mini-grua, velox, guincho de coluna e talha, cada um
                projetado para atender diferentes necessidades de elevação no canteiro de obras.
              </p>
              <p className="text-base text-text-light mt-4 max-w-2xl leading-relaxed">
                Todos os equipamentos são fornecidos com documentação técnica completa e
                passam por inspeções rigorosas para garantir a segurança das operações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifting Equipment Cards */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Equipamentos"
            title="Soluções de Içamento"
            description="Quatro opções de equipamentos para atender todas as demandas de movimentação vertical."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liftingEquipment.map((equip) => (
              <div
                key={equip.title}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-6 group-hover:bg-primary-medium/20 transition-colors">
                  <equip.icon className="w-7 h-7 text-primary-medium" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">{equip.title}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-6">
                  {equip.description}
                </p>
                <ul className="space-y-2">
                  {equip.highlights.map((highlight) => (
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
            description="Equipamentos de içamento para diversas operações na construção civil."
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
                  Todos os nossos equipamentos de içamento operam em total conformidade com a
                  Norma Regulamentadora NR-18. Cada equipamento é inspecionado rigorosamente e
                  acompanha documentação técnica completa, incluindo ART e laudo técnico,
                  garantindo a segurança em todas as operações de movimentação de carga.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    "NR-18",
                    "ART Inclusa",
                    "Laudo Técnico",
                    "Inspeção Rigorosa",
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
        title="Precisa de equipamentos de içamento para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
