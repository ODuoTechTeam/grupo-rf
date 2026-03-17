import type { Metadata } from "next";
import Image from "next/image";
import {
  IconTool,
  IconCircleCheck,
  IconShieldCheck,
  IconAward,
  IconBuildingFactory2,
  IconClipboardCheck,
  IconPackage,
} from "@tabler/icons-react";
import {
  Ruler,
  ArrowLeft,
  ArrowRight,
  Settings,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Escada Marinheiro",
  description:
    "Fabricação de escadas marinheiro em aço para acesso a coberturas e áreas elevadas. Projetos sob medida conforme especificação técnica e normas de segurança.",
};

const features = [
  {
    icon: IconBuildingFactory2,
    title: "Fabricação Própria",
    description:
      "Escadas fabricadas em nossas instalações com controle total de qualidade, utilizando aço carbono ou inoxidável conforme a necessidade.",
  },
  {
    icon: Ruler,
    title: "Projeto Sob Medida",
    description:
      "Projetos customizados conforme a especificação técnica do cliente. Dimensionamento, altura, tipo de fixação e acabamento sob medida.",
  },
  {
    icon: IconShieldCheck,
    title: "Conformidade NR-18",
    description:
      "Fabricação em conformidade com a NR-18 e normas técnicas aplicáveis. Guarda-corpo, plataforma de descanso e proteção dorsal quando necessário.",
  },
  {
    icon: Settings,
    title: "Diversos Acabamentos",
    description:
      "Opções de acabamento em pintura eletrostática, galvanização a quente ou aço inoxidável, conforme o ambiente de instalação.",
  },
  {
    icon: IconAward,
    title: "Qualidade Certificada",
    description:
      "Material rastreável com certificados de qualidade. Soldas executadas por profissionais qualificados conforme normas técnicas.",
  },
  {
    icon: IconClipboardCheck,
    title: "Documentação Técnica",
    description:
      "Projeto técnico com memorial de cálculo, ART de fabricação e instalação, e manual de uso e manutenção.",
  },
];

const specs = [
  { label: "Material", value: "Aço carbono ou inoxidável" },
  { label: "Acabamento", value: "Pintura, galvanização ou inox" },
  { label: "Largura útil", value: "Conforme projeto (min. 400mm)" },
  { label: "Espaço entre degraus", value: "Conforme NR-18 (max. 300mm)" },
  { label: "Normas", value: "NR-18, NBR 14718" },
  { label: "Documentação", value: "Projeto, ART e manual" },
];

const applications = [
  {
    title: "Acesso a Coberturas",
    description:
      "Escadas para acesso a coberturas de edifícios, galpões industriais e instalações comerciais para manutenção e inspeção.",
  },
  {
    title: "Torres e Reservatórios",
    description:
      "Acesso a torres de telecomunicação, reservatórios de água, caixas d'água e estruturas elevadas em geral.",
  },
  {
    title: "Silos e Tanques",
    description:
      "Escadas para acesso a silos de armazenagem, tanques industriais e estruturas de processo em indústrias.",
  },
  {
    title: "Fachadas e Platibandas",
    description:
      "Acesso a platibandas, muros de contenção e fachadas de edifícios para manutenção de sistemas de ancoragem.",
  },
];

export default function EscadaMarinheiroPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Escada Marinheiro" },
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                <IconTool className="w-4 h-4" />
                Produto
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Escada Marinheiro
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Fabricação de escadas marinheiro em aço para acesso a coberturas
                e áreas elevadas. Projetos sob medida conforme especificação
                técnica, com opções de acabamento em pintura, galvanização ou aço
                inoxidável. Fabricação própria com controle total de qualidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contato" variant="primary" size="lg" icon={ArrowRight}>
                  Solicitar Orçamento
                </Button>
                <Button href="/rf-engenharia/produtos" variant="outline" size="lg" icon={ArrowLeft} iconPosition="left">
                  Ver Todos os Produtos
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/estruturas-metalicas/estrutura-metalica-01.jpg"
                    alt="Escada Marinheiro"
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

      {/* Kit Contents / Specs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconPackage className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                O que inclui
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((app) => (
                <div key={app.title} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <IconCircleCheck className="w-5 h-5 text-primary-medium shrink-0" />
                  <span className="text-sm text-text-primary font-medium">{app.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Vantagens"
            title="Diferenciais da Nossa Fabricação"
            description="Escadas marinheiro fabricadas com materiais de alta qualidade e projetos sob medida para cada aplicação."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-medium" />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Técnico"
            title="Especificações Técnicas"
            description="Informações técnicas sobre a fabricação de escadas marinheiro."
          />

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl bg-white border border-gray-100 overflow-hidden">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-4 ${
                    index !== specs.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-text-light font-medium">
                    {spec.label}
                  </span>
                  <span className="text-gray-900 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button href="/rf-engenharia/produtos" variant="ghost" icon={ArrowLeft} iconPosition="left">
              Voltar para Produtos
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de uma escada marinheiro sob medida?"
        description="Fabricamos escadas marinheiro conforme a sua especificação. Solicite um orçamento personalizado."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
