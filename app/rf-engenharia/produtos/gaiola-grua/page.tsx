import type { Metadata } from "next";
import {
  IconPackage,
  IconCircleCheck,
  IconShieldCheck,
  IconAward,
  IconTool,
  IconBuildingFactory2,
  IconClipboardCheck,
  IconAlertTriangle,
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
  title: "Gaiola para Grua",
  description:
    "Gaiola para elevação e transporte de materiais no canteiro de obras com grua. Elevação segura de materiais soltos com certificação completa.",
};

const features = [
  {
    icon: IconShieldCheck,
    title: "Elevação Segura",
    description:
      "Gaiola projetada para elevação segura de materiais soltos no canteiro de obras, evitando quedas de objetos durante o transporte vertical.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Fabricação Própria",
    description:
      "Fabricada em nossas instalações com aço de alta resistência, controle de qualidade rigoroso e rastreabilidade total de materiais.",
  },
  {
    icon: IconAward,
    title: "Certificação Completa",
    description:
      "Produto certificado conforme normas de segurança para movimentação de cargas. Ensaios de carga e documentação técnica completa.",
  },
  {
    icon: IconTool,
    title: "Projeto Robusto",
    description:
      "Estrutura metálica robusta com tela de proteção lateral, porta de acesso com trava e pontos de içamento certificados.",
  },
  {
    icon: IconAlertTriangle,
    title: "Prevenção de Acidentes",
    description:
      "Elimina o risco de queda de materiais soltos durante o transporte por grua, um dos principais riscos em canteiros de obras.",
  },
  {
    icon: IconClipboardCheck,
    title: "Documentação e ART",
    description:
      "Projeto técnico com memorial de cálculo, ART de fabricação, certificado de ensaio de carga e manual de operação.",
  },
];

const specs = [
  { label: "Material", value: "Aço carbono com pintura" },
  { label: "Proteção lateral", value: "Tela metálica soldada" },
  { label: "Acesso", value: "Porta com trava de segurança" },
  { label: "Içamento", value: "4 pontos de elevação certificados" },
  { label: "Normas", value: "NR-18, NR-11" },
  { label: "Documentação", value: "Projeto, ART e ensaio de carga" },
];

const materials = [
  "Tijolos, blocos e alvenarias em geral",
  "Ferramentas e equipamentos de mão",
  "Materiais elétricos e hidráulicos",
  "Sacas de cimento e argamassa",
  "Peças e componentes soltos",
  "Demais materiais de canteiro",
];

export default function GaiolaGruaPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Gaiola para Grua" },
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
                Gaiola para Grua
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Gaiola para elevação e transporte de materiais no canteiro de
                obras com grua. Solução segura para a elevação de materiais
                soltos, evitando a queda de objetos e acidentes durante a
                movimentação vertical de cargas no canteiro de obras.
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
                  Materiais Transportados
                </h3>
                <ul className="space-y-2">
                  {materials.map((item) => (
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
            title="Benefícios da Gaiola para Grua"
            description="Solução segura e certificada para movimentação vertical de materiais soltos no canteiro de obras."
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
            description="Dados técnicos da gaiola para movimentação de materiais com grua."
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
        title="Precisa de uma gaiola para grua?"
        description="Fabricamos gaiolas para grua sob medida para o seu canteiro de obras. Solicite um orçamento."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
