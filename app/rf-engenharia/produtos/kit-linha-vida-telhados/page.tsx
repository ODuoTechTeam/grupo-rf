import type { Metadata } from "next";
import {
  IconPackage,
  IconCircleCheck,
  IconShieldCheck,
  IconAward,
  IconTool,
  IconBuildingFactory2,
  IconLineDashed,
} from "@tabler/icons-react";
import {
  Truck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Kit de Linha de Vida para Telhados",
  description:
    "Solução ideal para indústrias com grandes telhados ou tanques de armazenamento. Sistema de linha de vida que minimiza perfurações no telhado. Projeto, fabricação e instalação.",
};

const features = [
  {
    icon: IconShieldCheck,
    title: "Mínimas Perfurações",
    description:
      "Soluções projetadas para minimizar perfurações no telhado, preservando a integridade da cobertura e a estanqueidade.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Grandes Coberturas",
    description:
      "Ideal para indústrias com grandes telhados, galpões industriais e tanques de armazenamento que exigem manutenção em altura.",
  },
  {
    icon: IconAward,
    title: "Certificação Completa",
    description:
      "Sistema certificado conforme NR-35, NR-18 e NBR 16325. Ensaios em laboratório independente e ART registrada no CREA.",
  },
  {
    icon: IconTool,
    title: "Instalação Especializada",
    description:
      "Equipe própria treinada para instalação em telhados de diferentes tipos: metálico, fibrocimento, termoacústico e outros.",
  },
  {
    icon: IconLineDashed,
    title: "Cabo de Aço Inox",
    description:
      "Cabo de aço inoxidável com alta resistência a corrosão, garantindo durabilidade e segurança mesmo em ambientes agressivos.",
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    description:
      "Kit completo com todos os componentes necessários para instalação. Envio para todo o Brasil com material em estoque.",
  },
];

const specs = [
  { label: "Material", value: "Aço inoxidável" },
  { label: "Tipo de cabo", value: "Cabo de aço 8mm" },
  { label: "Resistência", value: "Conforme NBR 16325" },
  { label: "Aplicação", value: "Telhados industriais e tanques" },
  { label: "Normas", value: "NR-35, NR-18, NBR 16325" },
  { label: "Documentação", value: "Projeto, laudo e ART" },
];

const kitItems = [
  "Pontos de ancoragem em aço inox",
  "Cabo de aço inoxidável",
  "Esticadores e terminais",
  "Absorvedores de energia",
  "Conectores intermediários",
  "Manual de uso e manutenção",
];

export default function KitLinhaVidaTelhadosPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Kit de Linha de Vida para Telhados" },
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
                Kit de Linha de Vida para Telhados
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Solução ideal para indústrias com grandes telhados ou tanques de
                armazenamento. Sistemas de linha de vida projetados para
                minimizar perfurações no telhado, garantindo proteção coletiva
                durante atividades de manutenção, limpeza e inspeção em
                coberturas.
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
                  O que inclui o kit
                </h3>
                <ul className="space-y-2">
                  {kitItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0 mt-0.5" />
                      <span className="text-sm text-text-light">{item}</span>
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
            title="Por Que Escolher Nosso Kit"
            description="Sistema completo projetado para segurança máxima com mínimo impacto na estrutura do telhado."
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
            description="Informações técnicas do sistema de linha de vida para telhados."
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
        title="Precisa de um kit de linha de vida para telhados?"
        description="Solicite um orçamento personalizado. Nossos engenheiros analisam o seu projeto e indicam a melhor solução."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
