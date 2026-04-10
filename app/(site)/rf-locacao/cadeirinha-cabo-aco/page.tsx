import { Metadata } from "next";
import { Paintbrush, Droplets } from "lucide-react";
import {
  IconArmchair,
  IconLineDashed,
  IconShieldCheck,
  IconTool,
  IconBuildingSkyscraper,
  IconZoomCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Cadeirinha Cabo de Aço",
  description:
    "Locação de cadeirinha suspensa com cabo de aço para trabalho individual em fachadas. Estrutura metálica resistente e assento ergonômico.",
};

const features = [
  {
    icon: IconArmchair,
    title: "Cadeira Suspensa Manual",
    description:
      "Sistema individual de trabalho suspenso, permitindo deslocamento vertical controlado pelo próprio operador de forma segura.",
  },
  {
    icon: IconShieldCheck,
    title: "Estrutura Metálica",
    description:
      "Fabricada com estrutura metálica resistente e durável, projetada para suportar as exigências do trabalho em altura com total segurança.",
  },
  {
    icon: IconArmchair,
    title: "Assento Ergonômico",
    description:
      "Assento de plástico de alta resistência com design ergonômico, proporcionando conforto ao operador durante longos períodos de trabalho.",
  },
  {
    icon: IconLineDashed,
    title: "Cabo de Aço",
    description:
      "Sistema de deslocamento por cabo de aço similar ao balancim, garantindo segurança e praticidade na movimentação vertical.",
  },
];

const applications = [
  { icon: IconBuildingSkyscraper, label: "Fachadas prediais" },
  { icon: Paintbrush, label: "Pintura externa" },
  { icon: Droplets, label: "Impermeabilização" },
  { icon: IconTool, label: "Reparos pontuais" },
  { icon: IconZoomCheck, label: "Inspeções técnicas" },
  { icon: IconShieldCheck, label: "Serviços de manutenção" },
];

export default function CadeirinhaCaboAcoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Cadeirinha Cabo de Aço" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconArmchair className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Cadeirinha Cabo de Aço
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Cadeira suspensa individual manual para trabalhos em fachadas. Composta por
                estrutura metálica resistente e assento ergonômico de plástico de alta
                resistência, a cadeirinha oferece segurança e conforto para o operador.
              </p>
              <p className="text-base text-text-light mt-4 max-w-2xl leading-relaxed">
                O sistema de deslocamento é similar ao do balancim, utilizando cabos de aço
                que permitem a movimentação vertical controlada. Ideal para serviços pontuais
                e trabalhos individuais em fachadas.
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/equipment/cadeira-cabo-de-aco.jpg"
                    alt="Trabalhadores em cadeirinha cabo de aço em fachada"
                    fill
                    className="object-cover object-center"
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
            title="Vantagens da Cadeirinha"
            description="Solução individual segura e ergonômica para trabalhos em fachadas."
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
            description="A cadeirinha com cabo de aço é indicada para trabalhos individuais em altura."
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
                  Nossas cadeirinhas com cabo de aço atendem integralmente às exigências da
                  Norma Regulamentadora NR-18. Cada equipamento é inspecionado antes da entrega
                  e acompanha toda a documentação técnica necessária para garantir a segurança
                  do operador.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["NR-18", "ART Inclusa", "Laudo Técnico", "Inspeção Pré-entrega"].map(
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
        title="Precisa de cadeirinha com cabo de aço para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
