import type { Metadata } from "next";
import {
  IconPackage,
  IconCircleCheck,
  IconShieldCheck,
  IconAward,
  IconTool,
  IconBuildingFactory2,
  IconClipboardCheck,
  IconScale,
} from "@tabler/icons-react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Plataforma de Grua",
  description:
    "Plataforma de grua para movimentação segura de cargas no canteiro de obras. Projetada para cargas pesadas com certificação de segurança completa.",
};

const features = [
  {
    icon: IconShieldCheck,
    title: "Movimentação Segura",
    description:
      "Plataforma projetada para movimentação segura de cargas pesadas no canteiro de obras, com guarda-corpo e pontos de içamento certificados.",
  },
  {
    icon: IconScale,
    title: "Cargas Pesadas",
    description:
      "Dimensionada para suportar cargas pesadas conforme projeto. Estrutura metálica robusta com fator de segurança adequado às normas.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Fabricação Própria",
    description:
      "Fabricada em nossas instalações com aço de alta resistência, soldas qualificadas e acabamento de alta qualidade.",
  },
  {
    icon: IconAward,
    title: "Certificação Completa",
    description:
      "Ensaio de carga realizado conforme normas técnicas. Certificado de fabricação, ART e documentação completa para fiscalização.",
  },
  {
    icon: IconTool,
    title: "Projeto Personalizado",
    description:
      "Dimensionamento conforme a necessidade do canteiro de obras. Diferentes tamanhos e capacidades de carga disponíveis.",
  },
  {
    icon: IconClipboardCheck,
    title: "Documentação Técnica",
    description:
      "Projeto técnico com memorial de cálculo, ART de fabricação, certificado de ensaio de carga e manual de operação e inspeção.",
  },
];

const specs = [
  { label: "Material", value: "Aço carbono de alta resistência" },
  { label: "Acabamento", value: "Pintura industrial" },
  { label: "Proteção", value: "Guarda-corpo perimetral" },
  { label: "Içamento", value: "Pontos de elevação certificados" },
  { label: "Normas", value: "NR-18, NR-11" },
  { label: "Documentação", value: "Projeto, ART e ensaio de carga" },
];

const advantages = [
  {
    title: "Segurança Certificada",
    description:
      "Cada plataforma passa por ensaio de carga antes da entrega, garantindo que suporta a carga nominal com fator de segurança adequado.",
  },
  {
    title: "Durabilidade",
    description:
      "Construída em aço de alta resistência com pintura industrial, projetada para suportar as condições adversas do canteiro de obras.",
  },
  {
    title: "Versatilidade",
    description:
      "Utilizada para transporte de paletes, equipamentos, materiais de construção e demais cargas pesadas que não podem ser transportadas em gaiola.",
  },
  {
    title: "Conformidade Legal",
    description:
      "Toda a documentação necessária para fiscalização: projeto, memorial de cálculo, ART e certificado de ensaio de carga.",
  },
];

export default function PlataformaGruaPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Plataforma de Grua" },
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                <IconPackage className="w-4 h-4" />
                Produto
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Plataforma de Grua
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Plataforma de grua para movimentação segura de cargas no
                canteiro de obras. Projetada para cargas pesadas com
                certificação de segurança completa, incluindo ensaio de carga,
                projeto técnico e ART. Fabricação própria com aço de alta
                resistência.
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
            <div className="shrink-0 w-full lg:w-80">
              <div className="p-6 rounded-xl bg-white border border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4">
                  <IconPackage className="w-8 h-8 text-primary-medium" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                  Diferenciais
                </h3>
                <ul className="space-y-4">
                  {advantages.map((adv) => (
                    <li key={adv.title}>
                      <div className="flex items-start gap-2">
                        <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">
                            {adv.title}
                          </span>
                          <p className="text-xs text-text-light mt-0.5">
                            {adv.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Vantagens"
            title="Benefícios da Plataforma de Grua"
            description="Solução certificada para movimentação de cargas pesadas com total segurança no canteiro de obras."
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
            description="Dados técnicos da plataforma de grua para movimentação de cargas."
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
        title="Precisa de uma plataforma de grua?"
        description="Fabricamos plataformas de grua sob medida para o seu canteiro de obras. Solicite um orçamento personalizado."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
