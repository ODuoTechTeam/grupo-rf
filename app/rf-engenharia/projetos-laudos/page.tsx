import { Metadata } from "next";
import {
  IconFileSearch,
  IconTool,
  IconShieldCheck,
  IconCircleCheck,
  IconAward,
  IconUsersGroup,
  IconFileCheck,
  IconBuildingSkyscraper,
  IconBuildingFactory2,
} from "@tabler/icons-react";
import {
  ShieldCheck,
  Zap,
  Bolt,
  ClipboardList,
  SearchCheck,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projetos e Laudos | RF Engenharia",
  description:
    "Serviços técnicos de engenharia: projetos de montagem de equipamentos, proteções coletivas, prontuário de instalações elétricas, laudo de aterramento e SPDA, PGR, consultoria em acidentes e auditoria em segurança.",
};

const services = [
  {
    icon: IconTool,
    title: "Projeto de Montagem de Equipamentos para Construção",
    description:
      "Elaboração de projetos técnicos para montagem de equipamentos utilizados na construção civil, incluindo gruas, guindastes, elevadores de carga e plataformas. Projetos com memorial de cálculo, ART e conformidade com NR-18.",
    tags: ["NR-18", "Projeto", "ART"],
  },
  {
    icon: ShieldCheck,
    title: "Projetos de Proteções Coletivas",
    description:
      "Projetos de sistemas de proteção coletiva contra quedas, incluindo guarda-corpos, redes de proteção, bandejas de proteção e plataformas de segurança. Dimensionamento conforme NR-18 e NR-35.",
    tags: ["NR-18", "NR-35", "Proteção Coletiva"],
  },
  {
    icon: Zap,
    title: "Prontuário de Instalações Elétricas",
    description:
      "Elaboração do Prontuário de Instalações Elétricas conforme NR-10, incluindo diagramas, especificações de equipamentos, procedimentos de segurança e certificações das instalações elétricas.",
    tags: ["NR-10", "Elétrica", "Prontuário"],
  },
  {
    icon: Bolt,
    title: "Laudo de Aterramento Elétrico e SPDA",
    description:
      "Emissão de laudo técnico de aterramento elétrico e Sistema de Proteção contra Descargas Atmosféricas (SPDA / para-raios), com medições, ensaios e conformidade com NBR 5419.",
    tags: ["SPDA", "NBR 5419", "Aterramento"],
  },
  {
    icon: ClipboardList,
    title: "PGR - Programa de Gerenciamento de Riscos",
    description:
      "Elaboração do Programa de Gerenciamento de Riscos conforme NR-01, identificando perigos, avaliando riscos e definindo medidas de prevenção e controle para o ambiente de trabalho.",
    tags: ["NR-01", "PGR", "Gestão de Riscos"],
  },
  {
    icon: SearchCheck,
    title: "Consultoria de Investigação de Acidentes do Trabalho",
    description:
      "Investigação técnica de acidentes e incidentes de trabalho, com análise de causas raiz, elaboração de relatório técnico e recomendações de medidas preventivas e corretivas.",
    tags: ["Investigação", "Perícia", "Preventivo"],
  },
  {
    icon: IconShieldCheck,
    title: "Auditoria em Segurança do Trabalho",
    description:
      "Auditoria completa nas condições de segurança e saúde do trabalho, verificando conformidade com as NRs, identificando não conformidades e propondo plano de ação corretivo.",
    tags: ["Auditoria", "NRs", "Conformidade"],
  },
];

const differentials = [
  {
    icon: IconAward,
    title: "Engenheiros Habilitados",
    description:
      "Equipe de Engenheiros registrados no CREA com habilitação específica para cada tipo de projeto e laudo.",
  },
  {
    icon: IconFileCheck,
    title: "Documentação Completa",
    description:
      "Todos os projetos e laudos acompanhados de ART, memorial de cálculo e documentação conforme normas vigentes.",
  },
  {
    icon: IconUsersGroup,
    title: "Experiência Comprovada",
    description:
      "Desde 2006 atendendo grandes empresas, construtoras e órgãos públicos em todo o Brasil.",
  },
  {
    icon: IconCircleCheck,
    title: "Conformidade Normativa",
    description:
      "Projetos e laudos em total conformidade com as Normas Regulamentadoras e normas técnicas ABNT.",
  },
];

export default function ProjetosLaudosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Projetos e Laudos" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconFileSearch className="w-7 h-7 text-primary-medium" />
              </div>
              <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                RF Engenharia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              Projetos e{" "}
              <span className="text-primary-medium">Laudos</span>
            </h1>

            <p className="text-lg text-text-light leading-relaxed mb-8">
              Serviços técnicos de engenharia para segurança do trabalho.
              Elaboramos projetos, laudos, prontuários e programas de
              gerenciamento de riscos com documentação completa e ART,
              garantindo a conformidade da sua empresa com as normas
              regulamentadoras vigentes.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                Projetos com ART
              </span>
              <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                Laudos técnicos
              </span>
              <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                Consultoria especializada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Serviços Técnicos"
            title="Nossos Projetos e Laudos"
            description="Oferecemos uma ampla gama de serviços técnicos de engenharia para segurança do trabalho, todos com documentação completa e ART."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 group-hover:bg-primary-medium/30 transition-colors">
                    <ServiceIcon className="w-6 h-6 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-medium border border-primary-medium/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Diferenciais"
            title="Por que Escolher a RF Engenharia?"
            description="Experiência, qualificação técnica e compromisso com a conformidade normativa em cada projeto e laudo."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((diff) => {
              const DiffIcon = diff.icon;
              return (
                <div
                  key={diff.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-medium/30 transition-colors">
                    <DiffIcon className="w-7 h-7 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Setores Atendidos"
            title="Experiência em Diversos Segmentos"
            description="Nossos projetos e laudos atendem empresas de diversos setores em todo o Brasil."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: IconBuildingSkyscraper, label: "Construção Civil" },
              { icon: IconBuildingFactory2, label: "Indústria" },
              { icon: Zap, label: "Energia e Eletricidade" },
              { icon: IconBuildingSkyscraper, label: "Órgãos Públicos" },
              { icon: IconBuildingSkyscraper, label: "Prédios Comerciais" },
              { icon: IconBuildingSkyscraper, label: "Condomínios" },
              { icon: IconBuildingFactory2, label: "Logística" },
              { icon: IconShieldCheck, label: "Saúde e Hospitais" },
            ].map((sector) => {
              const SectorIcon = sector.icon;
              return (
                <div
                  key={sector.label}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all"
                >
                  <SectorIcon className="w-8 h-8 text-primary-medium" />
                  <span className="text-sm text-text-light font-medium text-center">
                    {sector.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Precisa de um projeto ou laudo técnico?"
        description="Entre em contato com nossos Engenheiros e solicite uma proposta personalizada para sua necessidade."
      />
    </>
  );
}
