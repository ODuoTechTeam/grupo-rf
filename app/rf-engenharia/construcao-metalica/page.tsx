"use client";

import {
  IconBuildingBridge,
  IconShieldCheck,
  IconCircleCheck,
  IconFileCheck,
  IconClipboardCheck,
  IconTool,
  IconDroplet,
  IconNotes,
  IconStack2,
  IconBuildingFactory2,
} from "@tabler/icons-react";
import {
  Weight,
  Warehouse,
  Footprints,
  ArrowUpFromDot,
  Home,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "@/components/sections/ProcessSteps";

const processSteps = [
  {
    icon: IconClipboardCheck,
    title: "Projeto",
    description:
      "Elaboração do projeto estrutural com memorial de cálculo, detalhamento das peças e especificações técnicas completas.",
  },
  {
    icon: IconStack2,
    title: "Material",
    description:
      "Aquisição de materiais de alta qualidade com rastreabilidade, incluindo perfis, chapas e elementos de fixação.",
  },
  {
    icon: IconTool,
    title: "Fabricação e Instalação",
    description:
      "Fabricação em oficina própria com equipamentos de ponta e instalação no local por equipe especializada.",
  },
  {
    icon: IconDroplet,
    title: "Impermeabilização",
    description:
      "Tratamento anticorrosivo e impermeabilizante para garantir a durabilidade e vida útil da estrutura metálica.",
  },
  {
    icon: Weight,
    title: "Teste de Carga",
    description:
      "Ensaio de carga conforme projeto para validar a capacidade estrutural e segurança da construção.",
  },
  {
    icon: IconNotes,
    title: "Laudo e ART",
    description:
      "Emissão de laudo técnico com resultados dos ensaios e ART registrada no CREA por Engenheiro habilitado.",
  },
];

const applications = [
  {
    icon: Home,
    title: "Telhados",
    description:
      "Projetos e execução de estruturas metálicas para coberturas, incluindo treliças, terças e telhas metálicas para edificações de todos os portes.",
  },
  {
    icon: Warehouse,
    title: "Galpões",
    description:
      "Construção de galpões metálicos para armazenamento, logística e produção industrial, com projetos customizados para cada necessidade.",
  },
  {
    icon: ArrowUpFromDot,
    title: "Escadas Marinheiro",
    description:
      "Fabricação e instalação de escadas tipo marinheiro (escadas de marinheiro) com guarda-corpo e sistema de proteção contra quedas integrado.",
  },
  {
    icon: Footprints,
    title: "Passarelas de Acesso",
    description:
      "Projeto e construção de passarelas metálicas para acesso seguro a áreas elevadas, coberturas e equipamentos industriais.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Rampas",
    description:
      "Fabricação de rampas metálicas para acesso de veículos, equipamentos e pedestres, com inclinação e capacidade de carga conforme norma.",
  },
];

const differentials = [
  {
    icon: IconBuildingFactory2,
    title: "Infraestrutura Própria",
    description:
      "Oficina de serralheria e solda equipada com máquinas de ponta para corte, dobra, soldagem e acabamento de estruturas metálicas.",
  },
  {
    icon: IconShieldCheck,
    title: "Equipe Supervisionada",
    description:
      "Time próprio de serralheiros e soldadores qualificados, supervisionados por Engenheiro Mecânico habilitado.",
  },
  {
    icon: IconFileCheck,
    title: "Projeto e Documentação",
    description:
      "Projeto estrutural completo com memorial de cálculo, laudo técnico de ensaios e ART registrada no CREA.",
  },
  {
    icon: IconCircleCheck,
    title: "Conformidade Normativa",
    description:
      "Todos os projetos atendem às normas ABNT, NR-18 e NR-35, garantindo segurança e legalidade.",
  },
];

export default function ConstrucaoMetalicaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Construção Metálica" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                  <IconBuildingBridge className="w-7 h-7 text-primary-medium" />
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                  RF Engenharia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Construção{" "}
                <span className="text-primary-medium">Metálica</span>
              </h1>

              <p className="text-lg text-text-light leading-relaxed max-w-2xl mb-8">
                Projetamos e fabricamos diversos sistemas metálicos — coberturas,
                galpões, escadas, plataformas de acesso e rampas — com
                infraestrutura completa de serralheria e metalúrgica equipada
                com maquinário de ponta. Equipe própria supervisionada pelo
                Engenheiro Mecânico responsável, do projeto à instalação.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Fabricação própria
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Equipe supervisionada
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Projeto e ART
                </span>
              </div>
            </div>

            <div className="lg:w-96 w-full p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Infraestrutura Própria
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                Contamos com oficina de serralheria e solda totalmente
                equipada com maquinário de ponta, incluindo máquinas de
                corte, dobra, soldagem MIG/TIG e acabamento, permitindo
                fabricar estruturas metálicas com qualidade e agilidade.
              </p>
              <div className="space-y-2">
                {[
                  "Corte a plasma e oxicorte",
                  "Solda MIG, TIG e eletrodo",
                  "Dobra e calandra",
                  "Pintura e acabamento",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary-medium/20"
                  >
                    <IconTool className="w-4 h-4 text-primary-medium shrink-0" />
                    <span className="text-sm text-primary-medium font-medium">
                      {item}
                    </span>
                  </div>
                ))}
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
            title="Soluções Completas em Estrutura Metálica"
            description="Dispomos de toda infraestrutura de serralheria e metalúrgica com equipamentos de ponta, equipe própria supervisionada pelo Engenheiro Mecânico responsável. Da concepção do projeto à instalação final, um serviço integrado."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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

      {/* Process Steps */}
      <ProcessSteps
        title="Processo de Execução"
        description="Nosso processo integra projeto, fabricação e instalação com rigoroso controle de qualidade em cada etapa."
        steps={processSteps}
      />

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Aplicações"
            title="O que Fabricamos e Instalamos"
            description="Projetamos e fabricamos diversos sistemas metálicos com projetos personalizados para cada aplicação, incluindo docas com linha de vida integrada."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 group-hover:bg-primary-medium/30 transition-colors">
                    <AppIcon className="w-6 h-6 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
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
        title="Precisa de um projeto de construção metálica?"
        description="Solicite um orçamento e conte com a experiência da RF Engenharia para executar seu projeto."
      />
    </>
  );
}
