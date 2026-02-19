"use client";

import {
  IconAnchor,
  IconShieldCheck,
  IconCircleCheck,
  IconFileCheck,
  IconClipboardCheck,
  IconTool,
  IconDroplet,
  IconFlask,
  IconNotes,
  IconBuildingSkyscraper,
  IconHelmet,
  IconRosetteDiscountCheck,
  IconStack2,
  IconTestPipe,
  IconScale,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "@/components/sections/ProcessSteps";

const processSteps = [
  {
    icon: IconClipboardCheck,
    title: "Projeto",
    description:
      "Elaboração do projeto técnico com dimensionamento dos pontos de ancoragem conforme a geometria e necessidade da edificação.",
  },
  {
    icon: IconStack2,
    title: "Material",
    description:
      "Fornecimento de material em aço inoxidável rastreável com chumbador químico de alta performance.",
  },
  {
    icon: IconTool,
    title: "Instalação",
    description:
      "Instalação dos pontos de ancoragem por equipe especializada, supervisionada por Engenheiro Mecânico.",
  },
  {
    icon: IconDroplet,
    title: "Impermeabilização",
    description:
      "Tratamento impermeabilizante em todos os pontos instalados, garantindo a integridade da estrutura predial.",
  },
  {
    icon: IconFlask,
    title: "Teste de Arrancamento",
    description:
      "Teste de arrancamento em 100% dos pontos instalados, assegurando resistência mínima de 1.500 kgf.",
  },
  {
    icon: IconNotes,
    title: "Laudo Técnico e ART",
    description:
      "Emissão de laudo técnico completo e ART (Anotação de Responsabilidade Técnica) registrada no CREA.",
  },
];

const features = [
  {
    icon: IconShieldCheck,
    title: "Aço Inoxidável Rastreável",
    description:
      "Material de primeira qualidade com rastreabilidade completa, garantindo durabilidade e resistência a corrosão.",
  },
  {
    icon: IconFlask,
    title: "Chumbador Químico",
    description:
      "Fixação com chumbador químico de alta performance, proporcionando ancoragem segura e permanente na estrutura.",
  },
  {
    icon: IconRosetteDiscountCheck,
    title: "Resistência 1.500 kgf",
    description:
      "Cada ponto de ancoragem é projetado e testado para suportar carga mínima de 1.500 kgf conforme norma.",
  },
  {
    icon: IconTestPipe,
    title: "Teste 100% dos Pontos",
    description:
      "Todos os pontos instalados passam por teste de arrancamento individual, sem exceção.",
  },
  {
    icon: IconFileCheck,
    title: "Laudo e ART",
    description:
      "Documentação técnica completa com laudo de ensaio e ART emitida por Engenheiro habilitado no CREA.",
  },
  {
    icon: IconScale,
    title: "Conformidade Portaria 157/2006",
    description:
      "Atendimento integral à Portaria 157/2006, obrigatória para edifícios com 4 ou mais pavimentos (acima de 12m).",
  },
];

const applications = [
  {
    icon: IconBuildingSkyscraper,
    title: "Montagem de Balancins",
    description:
      "Pontos de ancoragem dimensionados para suportar a carga de balancins suspensos utilizados em serviços de fachada.",
  },
  {
    icon: IconHelmet,
    title: "Cadeirinha / Rapel",
    description:
      "Ancoragens projetadas para cadeirinhas e sistemas de rapel para manutenção e limpeza de fachadas.",
  },
];

export default function AncoragemPredialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Ancoragem Predial" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                  <IconAnchor className="w-7 h-7 text-primary-medium" />
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                  RF Engenharia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Ancoragem{" "}
                <span className="text-primary-medium">Predial</span>
              </h1>

              <p className="text-lg text-text-light leading-relaxed max-w-2xl mb-8">
                Instalação de pontos de ancoragem em edificações para fixação
                de equipamentos de acesso a fachada, como balancins,
                cadeirinhas e SPIQ (Sistema de Proteção Individual contra
                Quedas). Sistema fixo em aço inoxidável, rastreável, com
                resistência mínima de 1.500 kgf por ponto.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Teste 100% dos pontos
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Aço inoxidável rastreável
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Laudo técnico e ART
                </span>
              </div>
            </div>

            <div className="lg:w-96 w-full p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Obrigatoriedade Legal
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                A <strong className="text-gray-900">Portaria 157/2006</strong>{" "}
                do Ministério do Trabalho e Emprego determina que toda
                edificação com <strong className="text-gray-900">4 ou mais pavimentos</strong>{" "}
                (altura igual ou superior a 12 metros) deve possuir sistema de
                ancoragem instalado na cobertura para fixação de equipamentos
                de sustentação de andaimes e cadeirinhas.
              </p>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary-medium/20">
                <IconScale className="w-5 h-5 text-primary-medium shrink-0" />
                <span className="text-sm text-primary-medium font-medium">
                  Edifícios com 4+ pavimentos (12m)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Sobre o Serviço"
            title="Sistema de Ancoragem de Alta Performance"
            description="Nosso sistema de ancoragem predial é projetado para garantir a máxima segurança dos trabalhadores que atuam em fachadas, utilizando materiais de primeira qualidade e processos rigorosos de instalação e teste."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                O que é Ancoragem Predial?
              </h3>
              <p className="text-text-light leading-relaxed mb-4">
                A ancoragem predial consiste na instalação de pontos fixos de
                ancoragem na cobertura ou estrutura de edificações,
                destinados à fixação de equipamentos de sustentação para
                trabalho em fachada, como balancins suspensos, cadeirinhas de
                rapel e sistemas SPIQ.
              </p>
              <p className="text-text-light leading-relaxed">
                Cada ponto de ancoragem é fabricado em aço inoxidável com
                rastreabilidade de lote, fixado com chumbador químico de
                alto desempenho e submetido a teste de arrancamento
                individual, garantindo resistência mínima de 1.500 kgf.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Por que escolher a RF Engenharia?
              </h3>
              <ul className="space-y-3">
                {[
                  "Equipe própria supervisionada por Engenheiro Mecânico",
                  "Material em aço inoxidável com rastreabilidade completa",
                  "Chumbador químico de alta performance",
                  "Teste de arrancamento em 100% dos pontos instalados",
                  "Laudo técnico detalhado e ART registrada no CREA",
                  "Impermeabilização de todos os pontos de fixação",
                  "Conformidade total com Portaria 157/2006, NR-18 e NR-35",
                  "Atendimento em todo o Brasil",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCircleCheck className="w-5 h-5 text-primary-medium shrink-0 mt-0.5" />
                    <span className="text-text-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps
        title="Processo de Instalação"
        description="Nosso processo segue rigorosos padrões de qualidade e segurança, desde o projeto até a emissão da documentação técnica."
        steps={processSteps}
      />

      {/* Features / Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Diferenciais"
            title="Qualidade e Conformidade em Cada Ponto"
            description="Nosso sistema de ancoragem predial atende aos mais rigorosos padrões de segurança e normas regulamentadoras."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 group-hover:bg-primary-medium/30 transition-colors">
                    <FeatureIcon className="w-6 h-6 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Aplicações"
            title="Onde Utilizamos a Ancoragem Predial"
            description="Os pontos de ancoragem são essenciais para a fixação segura de equipamentos de trabalho em fachada."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {applications.map((app) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary-medium/30 transition-colors">
                    <AppIcon className="w-8 h-8 text-primary-medium" />
                  </div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Precisa instalar ancoragem predial?"
        description="Solicite um orçamento e garanta a segurança da sua edificação com conformidade total às normas vigentes."
      />
    </>
  );
}
