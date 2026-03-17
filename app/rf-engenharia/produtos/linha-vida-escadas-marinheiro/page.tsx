import type { Metadata } from "next";
import Image from "next/image";
import {
  IconLineDashed,
  IconCircleCheck,
  IconShieldCheck,
  IconAward,
  IconTool,
  IconClipboardCheck,
  IconPackage,
} from "@tabler/icons-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Lock,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Linha de Vida para Escadas Marinheiro",
  description:
    "Sistema de proteção para escadas tipo marinheiro com cabo de aço e dispositivos de segurança. Proteção contínua contra quedas durante subida e descida.",
};

const features = [
  {
    icon: IconShieldCheck,
    title: "Proteção Contínua",
    description:
      "Sistema de proteção contra quedas que acompanha o trabalhador durante toda a subida e descida na escada marinheiro.",
  },
  {
    icon: IconLineDashed,
    title: "Cabo de Aço Inox",
    description:
      "Cabo de aço inoxidável vertical com dispositivo trava-quedas que desliza livremente e trava automaticamente em caso de queda.",
  },
  {
    icon: Lock,
    title: "Trava-Quedas Automático",
    description:
      "Dispositivo de segurança que se movimenta livremente durante o deslocamento e bloqueia instantaneamente em caso de queda.",
  },
  {
    icon: IconTool,
    title: "Instalação Profissional",
    description:
      "Equipe própria qualificada para instalação em escadas novas ou existentes, sem necessidade de substituição da escada.",
  },
  {
    icon: ArrowUpDown,
    title: "Subida e Descida",
    description:
      "Proteção em ambos os sentidos de deslocamento. O dispositivo acompanha o trabalhador automaticamente na subida e na descida.",
  },
  {
    icon: IconClipboardCheck,
    title: "Documentação e ART",
    description:
      "Projeto técnico, memorial de cálculo, laudo de instalação e ART registrada no CREA. Documentação completa para fiscalização.",
  },
];

const specs = [
  { label: "Material do cabo", value: "Aço inoxidável" },
  { label: "Diâmetro do cabo", value: "8mm" },
  { label: "Dispositivo", value: "Trava-quedas deslizante" },
  { label: "Sentido", value: "Subida e descida" },
  { label: "Normas", value: "NR-35, NR-18, NBR 16325" },
  { label: "Documentação", value: "Projeto, laudo e ART" },
];

const components = [
  "Cabo de aço inoxidável vertical",
  "Dispositivo trava-quedas deslizante",
  "Suporte superior com esticador",
  "Suporte inferior com fixação",
  "Conectores e fixadores intermediários",
  "Manual de uso e inspeção",
];

export default function LinhaVidaEscadasMarinheiroPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Linha de Vida para Escadas Marinheiro" },
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
                Linha de Vida para Escadas Marinheiro
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Sistema de proteção para escadas tipo marinheiro com cabo de aço
                inoxidável e dispositivos de segurança trava-quedas. Proteção
                contínua contra quedas durante toda a subida e descida,
                permitindo que o trabalhador mantenha as mãos livres para se
                deslocar com segurança.
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
                    src="/images/linha-de-vida/linha-vida-03.jpg"
                    alt="Linha de Vida para Escadas Marinheiro"
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
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconPackage className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">
                O que inclui
              </h3>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {components.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0 mt-0.5" />
                  <span className="text-sm text-text-light">{item}</span>
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
            description="Proteção contínua contra quedas em escadas marinheiro, com instalação em escadas novas ou existentes."
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
            description="Dados técnicos do sistema de linha de vida para escadas marinheiro."
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
        title="Precisa de linha de vida para escada marinheiro?"
        description="Entre em contato para um orçamento personalizado. Instalamos em escadas novas ou já existentes."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
