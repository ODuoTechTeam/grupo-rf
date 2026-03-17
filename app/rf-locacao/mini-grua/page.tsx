import { Metadata } from "next";
import { Grip, UserMinus } from "lucide-react";
import {
  IconPackage,
  IconBuildingSkyscraper,
  IconCrane,
  IconHammer,
  IconTruck,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mini-Grua",
  description:
    "Locação de mini-grua para movimentação de cargas em canteiro de obras. Fácil manuseio e redução de esforço manual.",
};

const features = [
  {
    icon: Grip,
    title: "Fácil Manuseio",
    description:
      "Operação simples e intuitiva, permitindo que o equipamento seja utilizado com rapidez e segurança no canteiro.",
  },
  {
    icon: IconPackage,
    title: "Movimentação de Cargas",
    description:
      "Transporte eficiente de materiais de construção dentro do canteiro de obras, agilizando o fluxo de trabalho.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Canteiro de Obras",
    description:
      "Projetada para operar em espaços reduzidos, ideal para canteiros de obras urbanos e áreas com acesso restrito.",
  },
  {
    icon: UserMinus,
    title: "Reduz Esforço Manual",
    description:
      "Diminui significativamente a necessidade de esforço físico manual, prevenindo lesões e aumentando a produtividade.",
  },
];

const applications = [
  { icon: IconCrane, label: "Içamento de materiais" },
  { icon: IconPackage, label: "Transporte de cargas" },
  { icon: IconBuildingSkyscraper, label: "Construção civil" },
  { icon: IconHammer, label: "Obras residenciais" },
  { icon: IconBuildingSkyscraper, label: "Obras comerciais" },
  { icon: IconTruck, label: "Logística interna" },
];

export default function MiniGruaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Mini-Grua" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconCrane className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Mini-Grua
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Equipamento compacto e versátil para movimentação de cargas no canteiro de obras.
                A mini-grua oferece fácil manuseio e é ideal para obras que necessitam de
                agilidade na movimentação de materiais.
              </p>
              <p className="text-base text-text-light mt-4 max-w-2xl leading-relaxed">
                Reduz significativamente o esforço manual dos trabalhadores, prevenindo lesões
                e otimizando o tempo de execução da obra. Perfeita para espaços reduzidos e
                canteiros urbanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Características"
            title="Vantagens da Mini-Grua"
            description="Equipamento compacto que otimiza a movimentação de cargas com segurança."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-4 group-hover:bg-primary-medium/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-medium" />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
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
            description="A mini-grua é indicada para diversas operações de movimentação em obras."
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
                  Todas as nossas mini-gruas atendem às exigências da Norma Regulamentadora
                  NR-18. Fornecemos equipamentos inspecionados e com documentação técnica
                  completa, incluindo ART e laudo técnico, assegurando a operação segura no
                  canteiro de obras.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["NR-18", "ART Inclusa", "Laudo Técnico", "Inspeção Completa"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-medium/10 text-primary-medium border border-primary-medium/20"
                      >
                        <IconCircleCheck className="w-3 h-3" />
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de uma mini-grua para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
