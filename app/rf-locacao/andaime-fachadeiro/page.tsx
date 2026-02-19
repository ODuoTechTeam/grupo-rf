import { Metadata } from "next";
import { PaintBucket } from "lucide-react";
import {
  IconTool,
  IconStack2,
  IconBuildingSkyscraper,
  IconBuildingFactory2,
  IconHelmet,
  IconHammer,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Andaime Fachadeiro",
  description:
    "Locação de andaime fachadeiro para trabalho contínuo em altura. Ideal para manutenção industrial, reformas, acabamentos, alvenaria e pintura.",
};

const features = [
  {
    icon: IconStack2,
    title: "Trabalho Contínuo",
    description:
      "Permite trabalho ininterrupto em diferentes alturas ao longo de toda a fachada, otimizando a produtividade da equipe.",
  },
  {
    icon: IconTool,
    title: "Manutenção",
    description:
      "Ideal para manutenção industrial e predial, oferecendo acesso seguro e prático a todas as áreas da edificação.",
  },
  {
    icon: IconHammer,
    title: "Reformas",
    description:
      "Estrutura perfeita para obras de reforma e acabamento, suportando materiais e profissionais com total segurança.",
  },
  {
    icon: PaintBucket,
    title: "Revestimentos",
    description:
      "Solução completa para pintura, alvenaria e aplicação de revestimentos em fachadas de todos os portes.",
  },
];

const applications = [
  { icon: IconBuildingFactory2, label: "Manutenção industrial" },
  { icon: IconBuildingSkyscraper, label: "Manutenção predial" },
  { icon: IconHammer, label: "Reformas" },
  { icon: PaintBucket, label: "Pintura" },
  { icon: IconStack2, label: "Acabamentos" },
  { icon: IconHelmet, label: "Alvenaria" },
];

export default function AndaimeFachadeiroPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Andaime Fachadeiro" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconBuildingSkyscraper className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Andaime Fachadeiro
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Estrutura metálica modular projetada para possibilitar o trabalho contínuo em
                altura ao longo de toda a fachada da edificação. Solução essencial para obras
                que demandam acesso prolongado e seguro a grandes áreas verticais.
              </p>
              <p className="text-base text-text-light mt-4 max-w-2xl leading-relaxed">
                Indicado para manutenção industrial e predial, reformas, acabamentos, alvenaria,
                pintura e aplicação de revestimentos. Montagem e desmontagem realizadas por
                equipe especializada.
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
            title="Vantagens do Andaime Fachadeiro"
            description="Estrutura modular que garante acesso seguro e contínuo para trabalhos em fachadas."
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
            description="O andaime fachadeiro atende uma ampla variedade de serviços na construção civil."
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
                  Nossos andaimes fachadeiros são montados e inspecionados em total conformidade
                  com a Norma Regulamentadora NR-18, garantindo a segurança de todos os
                  trabalhadores. A montagem e desmontagem são realizadas por profissionais
                  habilitados, com acompanhamento técnico e documentação completa.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["NR-18", "ART Inclusa", "Laudo Técnico", "Equipe Habilitada"].map(
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
        title="Precisa de andaime fachadeiro para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
