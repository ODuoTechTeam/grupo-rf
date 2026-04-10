import type { Metadata } from "next";
import Image from "next/image";
import {
  IconLineDashed,
  IconCircleCheck,
  IconShieldCheck,
  IconAward,
  IconTool,
  IconBuildingSkyscraper,
  IconUsersGroup,
  IconClipboardCheck,
  IconPackage,
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
  title: "Linha de Vida para Concretagem",
  description:
    "Sistema de linha de vida específico para etapas de concretagem em obras civis. Proteção coletiva durante formas, armação e concretagem conforme NR-18 e NR-35.",
};

const features = [
  {
    icon: IconShieldCheck,
    title: "Proteção Coletiva",
    description:
      "Sistema de proteção coletiva contra quedas durante as etapas de formas, armação e concretagem de lajes e estruturas.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Específico para Obras",
    description:
      "Projetado especificamente para o ambiente de construção civil, suportando as condições adversas do canteiro de obras.",
  },
  {
    icon: IconAward,
    title: "Conformidade NR-18",
    description:
      "Atende integralmente às exigências da NR-18 (Segurança na Construção Civil) e NR-35 (Trabalho em Altura).",
  },
  {
    icon: IconTool,
    title: "Montagem Rápida",
    description:
      "Sistema de montagem e desmontagem rápida, acompanhando o avanço da concretagem sem atrasar o cronograma da obra.",
  },
  {
    icon: IconUsersGroup,
    title: "Múltiplos Usuários",
    description:
      "Dimensionado para uso simultâneo por múltiplos trabalhadores, garantindo proteção de toda a equipe de concretagem.",
  },
  {
    icon: IconClipboardCheck,
    title: "Documentação Completa",
    description:
      "Projeto técnico assinado por engenheiro, memorial de cálculo, ART registrada no CREA e manual de montagem.",
  },
];

const specs = [
  { label: "Material", value: "Aço carbono e inoxidável" },
  { label: "Tipo", value: "Linha de vida temporária" },
  { label: "Aplicação", value: "Concretagem de lajes e estruturas" },
  { label: "Usuários simultâneos", value: "Conforme projeto" },
  { label: "Normas", value: "NR-18, NR-35, NBR 16325" },
  { label: "Documentação", value: "Projeto, ART e manual" },
];

const stages = [
  {
    title: "Formas",
    description:
      "Proteção durante a montagem e desmontagem de formas de madeira e metálicas para concretagem de lajes e vigas.",
  },
  {
    title: "Armação",
    description:
      "Segurança garantida durante a etapa de montagem da armadura de aço (ferragem) das estruturas de concreto armado.",
  },
  {
    title: "Concretagem",
    description:
      "Proteção contra quedas durante o lançamento, adensamento e acabamento do concreto nas lajes e estruturas.",
  },
];

export default function LinhaVidaConcretagemPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Linha de Vida para Concretagem" },
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
                <IconLineDashed className="w-4 h-4" />
                Produto
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Linha de Vida para Concretagem
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Sistema de linha de vida específico para as etapas de
                concretagem em obras civis. Proteção coletiva durante formas,
                armação e concretagem, garantindo a segurança de toda a equipe
                conforme as normas NR-18 e NR-35.
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
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/linha-de-vida/linha-vida-concretagem.jpg"
                    alt="Sistema de linha de vida para concretagem"
                    fill
                    className="object-cover object-center"
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
              {stages.map((stage) => (
                <div key={stage.title} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <IconCircleCheck className="w-5 h-5 text-primary-medium shrink-0" />
                  <span className="text-sm text-text-primary font-medium">{stage.title}</span>
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
            title="Benefícios do Sistema"
            description="Linha de vida projetada para as condições específicas de concretagem em obras civis."
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
            description="Dados técnicos do sistema de linha de vida para concretagem."
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
        title="Precisa de linha de vida para concretagem?"
        description="Nossos engenheiros desenvolvem o projeto ideal para a sua obra, garantindo segurança em todas as etapas da concretagem."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
