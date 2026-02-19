import type { Metadata } from "next";
import Image from "next/image";
import {
  IconCalendar,
  IconChartBar,
  IconBuildingSkyscraper,
  IconUsersGroup,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import { portfolioItems } from "@/data/portfolio";
import { clientCategories } from "@/data/clients";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Projetos realizados pelo Grupo RF Engenharia. Ancoragem predial, linha de vida e locação de equipamentos para grandes clientes em todo o Brasil.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-4 md:pb-8 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Portfólio" }]} />
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-12 md:py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Antes e Depois"
            title="Transformações Reais"
            description="Arraste o controle para ver a diferença que nossos sistemas de segurança fazem em cada projeto."
          />
          <BeforeAfterShowcase />
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-12 md:py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Portfólio"
            title="Projetos Realizados"
            description="Conheça alguns dos projetos entregues pelo Grupo RF Engenharia para grandes clientes em todo o Brasil."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group overflow-hidden"
              >
                {/* Project image */}
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-pale flex items-center justify-center">
                      <IconBuildingSkyscraper className="w-4.5 h-4.5 text-primary-medium" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold font-[family-name:var(--font-display)] text-gray-900 text-base group-hover:text-primary-medium transition-colors">
                        {item.client}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {item.date && (
                      <div className="flex items-center gap-1.5 text-xs text-text-medium">
                        <IconCalendar className="w-3.5 h-3.5 text-primary-medium" />
                        {item.date}
                      </div>
                    )}
                    {item.stats && (
                      <div className="flex items-center gap-1.5 text-xs text-text-medium">
                        <IconChartBar className="w-3.5 h-3.5 text-primary-medium" />
                        {item.stats}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Clientes"
            title="Empresas que Confiam no Grupo RF"
            description="Atendemos diversos segmentos com soluções de engenharia de segurança em todo o Brasil."
          />

          <div className="space-y-8">
            {clientCategories.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-4">
                  <IconUsersGroup className="w-5 h-5 text-primary-medium" />
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.clients.map((client) => (
                    <div
                      key={client}
                      className="flex items-center justify-center p-4 min-h-16 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all"
                    >
                      <span className="text-sm text-text-light font-medium text-center">
                        {client}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Projetos entregues" },
              { value: "10.000+", label: "Pontos instalados" },
              { value: "50+", label: "Clientes ativos" },
              { value: "15+", label: "Anos de experiência" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-white border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-medium mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Quer fazer parte do nosso portfólio?"
        description="Entre em contato e solicite uma visita técnica para o seu empreendimento."
        primaryLabel="Solicitar Visita Técnica"
      />
    </>
  );
}
