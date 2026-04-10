"use client";

import {
  IconRouteAltRight,
  IconCircleCheck,
  IconClipboardCheck,
  IconTool,
  IconDroplet,
  IconFlask,
  IconNotes,
  IconBuildingSkyscraper,
  IconBuildingFactory2,
  IconHammer,
  IconStack2,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  Hospital,
  ArrowLeftRight,
  CircleDot,
  Plane,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "@/components/sections/ProcessSteps";

const processSteps = [
  {
    icon: IconClipboardCheck,
    title: "Projeto",
    description:
      "Elaboração do projeto técnico personalizado, dimensionando o sistema de linha de vida conforme a estrutura e necessidades do local.",
  },
  {
    icon: IconStack2,
    title: "Material",
    description:
      "Fornecimento de todos os componentes com rastreabilidade, incluindo cabos, ancoragens, esticadores e acessórios.",
  },
  {
    icon: IconTool,
    title: "Instalação",
    description:
      "Instalação por equipe própria especializada, com supervisão de Engenheiro Mecânico habilitado.",
  },
  {
    icon: IconDroplet,
    title: "Impermeabilização",
    description:
      "Tratamento impermeabilizante em todos os pontos de fixação para preservar a integridade da estrutura.",
  },
  {
    icon: IconFlask,
    title: "Teste de Arrancamento",
    description:
      "Ensaio de arrancamento em todos os pontos de ancoragem, assegurando a capacidade de carga do sistema.",
  },
  {
    icon: IconNotes,
    title: "Laudo e ART",
    description:
      "Emissão de laudo técnico completo com memorial de cálculo e ART registrada no CREA.",
  },
];

const lineTypes = [
  {
    icon: IconBuildingSkyscraper,
    title: "Predial (Concreto)",
    description:
      "Sistemas de linha de vida instalados em edificações de concreto armado, ideais para manutenção de coberturas e fachadas de prédios residenciais e comerciais.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Industriais",
    description:
      "Linhas de vida projetadas para ambientes industriais, atendendo às necessidades específicas de plantas fabris, refinarias e usinas.",
  },
  {
    icon: Hospital,
    title: "Internas",
    description:
      "Sistemas internos para hospitais, shopping centers, galpões e edificações que necessitam de acesso seguro a áreas elevadas em ambientes fechados.",
  },
  {
    icon: ArrowLeftRight,
    title: "Flexível",
    description:
      "Sistema com cabo de aço flexível, ideal para grandes vãos e coberturas. Permite movimentação lateral do trabalhador ao longo de toda a extensão.",
  },
  {
    icon: CircleDot,
    title: "Rígida Monovia",
    description:
      "Sistema com trilho rígido (monovia) em alumínio ou aço, indicado para locais com necessidade de transposição contínua e alta frequência de uso.",
  },
];

const faqItems = [
  {
    question: "O que é um sistema de linha de vida?",
    answer:
      "É um sistema de proteção contra quedas composto por cabos de aço ou trilhos fixados à estrutura da edificação, ao qual o trabalhador conecta seu dispositivo de proteção individual, permitindo deslocamento seguro em áreas elevadas.",
  },
  {
    question: "Onde pode ser instalada a linha de vida?",
    answer:
      "Em edifícios residenciais e comerciais, galpões industriais, hospitais, aeroportos, obras de construção civil e em qualquer edificação onde haja necessidade de acesso seguro a coberturas ou áreas elevadas.",
  },
  {
    question: "Qual a diferença entre linha de vida flexível e rígida?",
    answer:
      "A flexível utiliza cabo de aço, ideal para grandes vãos e coberturas, permitindo movimentação lateral. A rígida (monovia) utiliza trilho em alumínio ou aço, indicada para locais com alta frequência de uso e necessidade de transposição contínua.",
  },
  {
    question: "Quais normas regulamentam a linha de vida?",
    answer:
      "Os sistemas de linha de vida devem atender às normas NR-18 (Construção Civil), NR-35 (Trabalho em Altura), NBR 16325 (Dispositivos de Ancoragem) e código de obras local.",
  },
  {
    question: "É necessário fazer manutenção periódica?",
    answer:
      "Sim. A norma exige inspeção a cada 12 meses, incluindo avaliação visual dos componentes, teste de arrancamento nos pontos de ancoragem e revalidação do laudo técnico com emissão de nova ART.",
  },
  {
    question: "A RF Engenharia fabrica os componentes?",
    answer:
      "Sim. Somos fabricantes e distribuidores de olhais de ancoragem, postes e demais componentes. Todo material é fabricado em aço inox 304/316 com certificação de laboratório independente e garantia de 5 anos.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Oferecemos pagamento facilitado em até 12x sem juros no cartão de crédito ou faturado mediante análise cadastral. Temos material em estoque com pronta entrega.",
  },
];

const applications = [
  { label: "Edifícios residenciais e comerciais", icon: IconBuildingSkyscraper },
  { label: "Galpões e armazéns", icon: IconBuildingFactory2 },
  { label: "Hospitais e centros de saúde", icon: Hospital },
  { label: "Canteiros de obra", icon: IconHammer },
  { label: "Instalações industriais", icon: IconBuildingFactory2 },
  { label: "Aeroportos", icon: Plane },
  { label: "Docas e caminhões", icon: Truck },
];

export default function LinhaDeVidaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Linha de Vida" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                  <IconRouteAltRight className="w-7 h-7 text-primary-medium" />
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                  RF Engenharia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Linha de{" "}
                <span className="text-primary-medium">Vida</span>
              </h1>

              <p className="text-lg text-text-light leading-relaxed max-w-2xl mb-8">
                Especialistas em sistemas de prevenção contra queda em altura.
                Projetamos, fabricamos e instalamos sistemas de linha de vida
                para edifícios, galpões, indústrias, hospitais e até
                aeroportos. Soluções completas com sistemas flexíveis e
                rígidos, do projeto à documentação técnica.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Projeto personalizado
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Fabricação própria
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Laudo e ART
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/linha-de-vida/linha-vida-09.jpg"
                    alt="Trabalhadores utilizando sistema de linha de vida em fachada"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onde Atendemos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Onde Atendemos
            </h3>
            <ul className="space-y-3">
              {applications.map((app) => {
                const AppIcon = app.icon;
                return (
                  <li key={app.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary-medium/20 flex items-center justify-center shrink-0">
                      <AppIcon className="w-4 h-4 text-primary-medium" />
                    </div>
                    <span className="text-text-light text-sm">
                      {app.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Sobre o Serviço"
            title="Sistemas de Linha de Vida Completos"
            description="Especialistas em prevenção contra queda em altura desde 2006. Projetamos, fabricamos e instalamos sistemas de linha de vida para edifícios, galpões, indústrias, hospitais e aeroportos, sob medida para cada necessidade operacional."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                O que é uma Linha de Vida?
              </h3>
              <p className="text-text-light leading-relaxed mb-4">
                A linha de vida é um sistema de proteção contra quedas que
                permite ao trabalhador se deslocar com segurança em áreas
                elevadas. Consiste em um cabo de aço ou trilho fixado à
                estrutura por meio de ancoragens, ao qual o trabalhador
                conecta seu dispositivo de proteção individual.
              </p>
              <p className="text-text-light leading-relaxed">
                Somos especialistas em sistemas de prevenção contra queda em
                altura. A RF Engenharia projeta, fabrica e instala sistemas
                de linha de vida para edifícios, galpões, indústrias,
                hospitais e até aeroportos — com projeto técnico, memorial de
                cálculo, fabricação própria dos componentes, instalação por
                equipe supervisionada e testes de arrancamento em todos os
                pontos de fixação. Laudo técnico e ART registrada no CREA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Nossos Diferenciais
              </h3>
              <ul className="space-y-3">
                {[
                  "Projeto técnico com memorial de cálculo",
                  "Fabricação própria de componentes",
                  "Equipe própria supervisionada por Engenheiro",
                  "Sistemas flexíveis e rígidos (monovia)",
                  "Teste de arrancamento em todos os pontos",
                  "Impermeabilização dos pontos de fixação",
                  "Laudo técnico e ART registrada no CREA",
                  "Conformidade com NR-18 e NR-35",
                  "Pagamento facilitado em até 12x sem juros",
                  "Garantia de 5 anos do material",
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
        description="Seguimos um processo rigoroso desde o projeto até a entrega da documentação técnica completa."
        steps={processSteps}
      />

      {/* Types of Lifelines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Tipos de Linha de Vida"
            title="Soluções para Cada Necessidade"
            description="Oferecemos diferentes tipos de sistemas de linha de vida, adaptados às características de cada edificação e ambiente de trabalho."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lineTypes.map((type) => {
              const TypeIcon = type.icon;
              return (
                <div
                  key={type.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 group-hover:bg-primary-medium/30 transition-colors">
                    <TypeIcon className="w-6 h-6 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Perguntas sobre Linha de Vida"
            description="Respostas para as principais dúvidas sobre sistemas de linha de vida."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-medium/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <IconChevronDown className="w-5 h-5 text-primary-medium shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-sm text-text-light leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Precisa de um sistema de linha de vida?"
        description="Entre em contato para um projeto personalizado com instalação completa e documentação técnica."
      />
    </>
  );
}
