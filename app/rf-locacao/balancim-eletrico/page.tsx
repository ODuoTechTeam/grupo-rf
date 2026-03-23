import { Metadata } from "next";
import {
  Zap,
  TrendingUp,
  Paintbrush,
  Droplets,
  GlassWater,
} from "lucide-react";
import {
  IconStack2,
  IconBuildingSkyscraper,
  IconHammer,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Balancim Elétrico",
  description:
    "Locação de balancim elétrico para obras de fachada. Plataforma suspensa motorizada para revestimento, pintura, limpeza e impermeabilização.",
};

const features = [
  {
    icon: Zap,
    title: "Controles Motorizados",
    description:
      "Subida e descida controladas por motor elétrico através de cabos de aço, garantindo deslocamento suave e preciso.",
  },
  {
    icon: IconStack2,
    title: "Plataforma Estável",
    description:
      "Estrutura robusta que proporciona estabilidade e segurança durante todo o trabalho em altura.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Obras de Fachada",
    description:
      "Ideal para revestimento, pastilhas, pintura, limpeza, impermeabilização e instalação de vidros em fachadas.",
  },
  {
    icon: TrendingUp,
    title: "Alta Produtividade",
    description:
      "Maior rendimento e qualidade nos serviços de fachada, otimizando tempo e recursos da obra.",
  },
];

const applications = [
  { icon: Paintbrush, label: "Pintura de fachadas" },
  { icon: IconStack2, label: "Revestimento e pastilhas" },
  { icon: Droplets, label: "Impermeabilização" },
  { icon: GlassWater, label: "Instalação de vidros" },
  { icon: IconHammer, label: "Reparos estruturais" },
  { icon: IconBuildingSkyscraper, label: "Limpeza de fachadas" },
];

export default function BalancimEletricoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Balancim Elétrico" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <Zap className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Balancim Elétrico
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Plataforma suspensa motorizada para serviços de fachada. O balancim elétrico
                possibilita a execução de revestimento, aplicação de pastilhas, pintura, limpeza,
                impermeabilização e instalação de vidros com total segurança e eficiência.
              </p>
              <p className="text-base text-text-light mt-4 max-w-2xl leading-relaxed">
                O deslocamento vertical é realizado por controles motorizados através de cabos de
                aço, proporcionando maior produtividade, qualidade no acabamento e uma plataforma
                de trabalho estável para os operadores.
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/balancim/balancim-01.jpg"
                    alt="Balancim Elétrico"
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
            title="Vantagens do Balancim Elétrico"
            description="Equipamento motorizado que eleva a produtividade e a segurança em serviços de fachada."
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
            description="O balancim elétrico é indicado para diversos tipos de serviços em fachadas."
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
                  Todos os nossos balancins elétricos atendem integralmente às exigências da
                  Norma Regulamentadora NR-18, que estabelece as condições e o meio ambiente de
                  trabalho na indústria da construção. Fornecemos documentação completa incluindo
                  ART (Anotação de Responsabilidade Técnica), laudo técnico e projeto de
                  instalação.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["NR-18", "ART Inclusa", "Laudo Técnico", "Projeto de Instalação"].map(
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
        title="Precisa de um balancim elétrico para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
