"use client";

import Image from "next/image";
import {
  IconShieldCheck,
  IconAward,
  IconCertificate,
  IconBuildingSkyscraper,
  IconTool,
  IconBulb,
  IconBuildingFactory2,
  IconBook,
  IconCircleCheck,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import Timeline from "@/components/sections/Timeline";
import { companyInfo } from "@/data/contact";

const milestones = [
  {
    year: "2006",
    title: "Fundação em Brasília",
    description: "Início das atividades com foco em ancoragem predial e segurança do trabalho em altura no Distrito Federal.",
    highlight: true,
  },
  {
    year: "2008",
    title: "Fabricação Própria",
    description: "Início da fabricação própria de pontos de ancoragem e componentes metálicos, garantindo controle de qualidade total.",
  },
  {
    year: "2011",
    title: "Expansão para Goiânia",
    description: "Abertura da unidade em Goiânia/GO para atender a demanda crescente na região Centro-Oeste.",
    highlight: true,
  },
  {
    year: "2014",
    title: "RF Locação",
    description: "Criação da divisão de locação de equipamentos para construção civil: balancins, andaimes e elevadores.",
    highlight: true,
  },
  {
    year: "2017",
    title: "Cobertura Nacional",
    description: "Expansão para São Paulo e Belo Horizonte, consolidando atendimento em todo o território nacional.",
  },
  {
    year: "2019",
    title: "Linha de Vida e NR-35",
    description: "Especialização em sistemas de linha de vida horizontal e vertical, com treinamentos em conformidade NR-35.",
  },
  {
    year: "2022",
    title: "500+ Projetos",
    description: "Marco de mais de 500 projetos realizados com excelência, atendendo construtoras, indústrias e órgãos públicos.",
    highlight: true,
  },
  {
    year: "2024",
    title: "Inovação Contínua",
    description: "Investimentos em tecnologia, novos equipamentos e capacitação, reforçando a liderança no mercado de segurança.",
  },
];

const groupCompanies = [
  {
    icon: IconShieldCheck,
    name: "RF Engenharia",
    description:
      "Projetos, fabricação e instalação de sistemas de segurança do trabalho em altura. Ancoragem predial, linha de vida, construção metálica, treinamentos e inspeção anual.",
    href: "/rf-engenharia",
  },
  {
    icon: IconBuildingSkyscraper,
    name: "RF Locação",
    description:
      "Locação de equipamentos para construção civil com montagem, manutenção, projeto, ART e treinamento. Balancins, andaimes, elevadores e proteções coletivas.",
    href: "/rf-locacao",
  },
  {
    icon: IconBulb,
    name: "RF Soluções",
    description:
      "Soluções integradas em engenharia para demandas especiais. Consultoria técnica, projetos customizados e suporte especializado.",
    href: "#",
  },
  {
    icon: IconBuildingFactory2,
    name: "RF Indústria",
    description:
      "Fabricação de componentes e estruturas metálicas. Produção própria de pontos de ancoragem, suportes, plataformas e equipamentos sob medida.",
    href: "#",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-4 md:pb-8 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Sobre Nós" }]} />
        </div>
      </section>

      {/* História */}
      <section className="py-12 md:py-20 bg-bg-darkest relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-pale border border-primary-medium/30">
                <IconAward className="w-4 h-4 text-primary-medium" />
                <span className="text-sm font-medium text-primary-medium">
                  Desde {companyInfo.since}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6 text-gray-900">
                Protegendo Vidas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-accent">
                  há mais de 18 Anos
                </span>
              </h1>

              <p className="text-lg text-text-light leading-relaxed mb-6">
                O {companyInfo.name} nasceu em {companyInfo.since} com a missão de
                tornar o trabalho em altura mais seguro em todo o Brasil. Ao longo
                de quase duas décadas, nos consolidamos como referência nacional em
                segurança do trabalho, atendendo grandes construtoras, órgãos
                públicos, hospitais, indústrias e empresas de telecomunicações.
              </p>

              <p className="text-lg text-text-light leading-relaxed">
                Hoje, com unidades em Brasília, Goiânia, São Paulo e Belo
                Horizonte, oferecemos cobertura nacional com equipe própria,
                fabricação interna e atendimento especializado. Nosso compromisso é
                entregar soluções de engenharia que protegem vidas e valorizam cada
                projeto.
              </p>
            </div>

            {/* About hero image */}
            <div className="lg:flex-1 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/15 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/services/linha-de-vida-galpao.jpg"
                    alt="Instalação de linha de vida em galpão"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary-medium/15 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Nossa Trajetória"
            title="Marcos da Nossa História"
            description="Uma jornada de quase duas décadas dedicada à segurança e excelência em engenharia."
          />
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Responsável Técnico */}
      <section className="py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Responsável Técnico"
            title="Liderança Técnica de Excelência"
            description="Nossos projetos são supervisionados por profissional com formação acadêmica e experiência reconhecida."
          />

          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                      <IconCertificate className="w-8 h-8 text-primary-medium" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                        {companyInfo.responsavelTecnico.name}
                      </h3>
                      <p className="text-sm text-primary-medium">
                        CREA {companyInfo.responsavelTecnico.crea}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {companyInfo.responsavelTecnico.titles.map((title) => (
                      <div
                        key={title}
                        className="flex items-start gap-3 text-sm"
                      >
                        <IconBook className="w-4 h-4 text-primary-medium shrink-0 mt-0.5" />
                        <span className="text-text-light">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registros */}
                <div className="md:w-64 space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs font-bold text-primary-medium uppercase tracking-wider mb-1">
                      CREA Engenharia
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {companyInfo.creaEngenharia}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs font-bold text-primary-medium uppercase tracking-wider mb-1">
                      CREA Locação
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {companyInfo.creaLocacao}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs font-bold text-primary-medium uppercase tracking-wider mb-1">
                      Atuação desde
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {companyInfo.since}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas do Grupo */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="O Grupo"
            title="Empresas do Grupo RF"
            description="Quatro empresas integradas para oferecer soluções completas em segurança do trabalho e engenharia."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupCompanies.map((company) => {
              const Icon = company.icon;
              return (
                <div
                  key={company.name}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center group-hover:bg-primary-medium/30 transition-colors">
                      <Icon className="w-7 h-7 text-primary-medium" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2 group-hover:text-primary-medium transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conformidade Normativa */}
      <section className="py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Conformidade"
            title="Atuação em Conformidade com Normas Técnicas"
            description="Todas as nossas atividades seguem rigorosamente as normas regulamentadoras e técnicas vigentes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: IconShieldCheck,
                title: "NR-18",
                subtitle: "Construção Civil",
                description:
                  "Condições e meio ambiente de trabalho na indústria da construção. Diretrizes para segurança em canteiros de obras, montagem de equipamentos e proteções coletivas.",
                items: [
                  "Projeto de montagem com ART",
                  "Proteções coletivas obrigatórias",
                  "Treinamento de operadores",
                  "Inspeção periódica",
                ],
              },
              {
                icon: IconTool,
                title: "NR-35",
                subtitle: "Trabalho em Altura",
                description:
                  "Estabelece os requisitos mínimos de proteção para o trabalho em altura, envolvendo planejamento, organização e execução de atividades acima de 2 metros.",
                items: [
                  "Análise de risco obrigatória",
                  "Equipamentos certificados",
                  "Procedimento operacional",
                  "Capacitação específica",
                ],
              },
              {
                icon: IconCircleCheck,
                title: "NBR 16325",
                subtitle: "Proteção Contra Quedas",
                description:
                  "Norma técnica para dispositivos de ancoragem tipo A, B, C, D e E. Define requisitos de projeto, fabricação, ensaio e instalação de pontos de ancoragem.",
                items: [
                  "Resistência mínima 1.500 kgf",
                  "Ensaio de arrancamento",
                  "Rastreabilidade de material",
                  "Certificação de produto",
                ],
              },
            ].map((norm) => {
              const NormIcon = norm.icon;
              return (
                <div
                  key={norm.title}
                  className="p-6 rounded-xl bg-white border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                      <NormIcon className="w-6 h-6 text-primary-medium" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">
                        {norm.title}
                      </h3>
                      <p className="text-xs text-primary-medium">
                        {norm.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {norm.description}
                  </p>
                  <ul className="space-y-2">
                    {norm.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />

      <CTASection
        title="Quer conhecer mais sobre o Grupo RF?"
        description="Entre em contato e descubra como podemos ajudar no seu próximo projeto."
      />
    </>
  );
}
