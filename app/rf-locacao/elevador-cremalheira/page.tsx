import { Metadata } from "next";
import { Gauge } from "lucide-react";
import {
  IconElevator,
  IconPackage,
  IconBuildingFactory2,
  IconBuildingSkyscraper,
  IconUsersGroup,
  IconTruck,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Elevador Cremalheira",
  description:
    "Locação de elevador cremalheira para transporte vertical de materiais e trabalhadores em obras industriais, de infraestrutura e construção civil.",
};

const features = [
  {
    icon: IconElevator,
    title: "Transporte Vertical",
    description:
      "Deslocamento seguro e eficiente entre pavimentos, com sistema de cremalheira que garante precisão e estabilidade.",
  },
  {
    icon: IconUsersGroup,
    title: "Materiais e Pessoas",
    description:
      "Transporte simultâneo de materiais de construção e trabalhadores, otimizando a logística do canteiro de obras.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Obras Industriais",
    description:
      "Ideal para obras industriais, de infraestrutura e construção civil de grande porte com múltiplos pavimentos.",
  },
  {
    icon: Gauge,
    title: "Alta Capacidade",
    description:
      "Elevada capacidade de carga e velocidade de deslocamento, atendendo às demandas das obras mais exigentes.",
  },
];

const applications = [
  { icon: IconBuildingSkyscraper, label: "Edifícios residenciais" },
  { icon: IconBuildingFactory2, label: "Obras industriais" },
  { icon: IconBuildingFactory2, label: "Infraestrutura" },
  { icon: IconPackage, label: "Transporte de materiais" },
  { icon: IconUsersGroup, label: "Transporte de pessoal" },
  { icon: IconTruck, label: "Logística de canteiro" },
];

export default function ElevadorCremalheiraPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Elevador Cremalheira" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconElevator className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Elevador Cremalheira
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Equipamento projetado para o transporte vertical de materiais e trabalhadores
                no canteiro de obras. O elevador cremalheira é a solução ideal para obras
                industriais, de infraestrutura e construção civil que necessitam de deslocamento
                eficiente entre pavimentos.
              </p>
              <p className="text-base text-text-light mt-4 max-w-2xl leading-relaxed">
                Com alta capacidade de carga e sistema de cremalheira que garante segurança e
                precisão, o equipamento otimiza a logística da obra e aumenta significativamente
                a produtividade.
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/balancim/balancim-04.jpg"
                    alt="Elevador Cremalheira"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Características"
            title="Vantagens do Elevador Cremalheira"
            description="Transporte vertical seguro e eficiente para materiais e trabalhadores."
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
            description="O elevador cremalheira atende obras de diversos portes e segmentos."
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
                  Nossos elevadores cremalheira operam em total conformidade com a Norma
                  Regulamentadora NR-18. Cada equipamento passa por inspeções regulares e
                  manutenção preventiva, com toda a documentação técnica necessária para a
                  segurança da operação.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    "NR-18",
                    "ART Inclusa",
                    "Inspeção Periódica",
                    "Manutenção Preventiva",
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
        title="Precisa de um elevador cremalheira para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
