"use client";

import { ArrowRight } from "lucide-react";
import {
  IconTool,
  IconShieldCheck,
  IconFileCheck,
  IconUsersGroup,
  IconAlertTriangle,
} from "@tabler/icons-react";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import SectionTitle from "@/components/ui/SectionTitle";
import EquipmentTabs from "@/components/sections/EquipmentTabs";
import Button from "@/components/ui/Button";
import { complementaryServices } from "@/data/equipment";

const complementaryIcons = [IconTool, IconShieldCheck, IconFileCheck, IconUsersGroup];

export default function RFLocacaoPage() {
  return (
    <>
      <Hero
        badge="RF Locação"
        title="Locação de Equipamentos para Construção Civil"
        description="Balancins elétricos, andaimes fachadeiros, elevadores cremalheira, mini-gruas e proteções coletivas. Locação com montagem, manutenção, projeto e treinamento incluso."
        primaryCTA={{ label: "Solicitar Orçamento", href: "/contato" }}
        secondaryCTA={{ label: "Ver Portfólio", href: "/portfolio" }}
        image="/images/equipment/balancim.png"
        imageAlt="Balancim elétrico RF Locação"
      />

      {/* Equipamentos com Tabs */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Equipamentos"
            title="Nossos Equipamentos para Locação"
            description="Equipamentos de alta qualidade para obras de construção civil, manutenção predial e industrial."
          />

          <EquipmentTabs />
        </div>
      </section>

      {/* Serviços Complementares */}
      <section className="py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Serviços Inclusos"
            title="Serviços Complementares"
            description="Todos os nossos equipamentos contam com serviços integrados para garantir segurança e conformidade."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {complementaryServices.map((service, index) => {
              const Icon = complementaryIcons[index];
              return (
                <div
                  key={service.title}
                  className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-accent-warm/30 transition-all text-center hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-warm-pale border border-accent-warm/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-warm group-hover:border-accent-warm transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-warm group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NR-18 Compliance */}
      <section className="py-16 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-primary-medium/20">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconAlertTriangle className="w-8 h-8 text-primary-medium" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  Conformidade NR-18 Obrigatória
                </h3>
                <p className="text-text-light leading-relaxed mb-4">
                  A Norma Regulamentadora NR-18 estabelece diretrizes de ordem
                  administrativa, de planejamento e de organização que objetivam
                  a implementação de medidas de controle e sistemas preventivos
                  de segurança nos processos e nas condições de trabalho na
                  indústria da construção.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Projeto de montagem com ART obrigatório",
                    "Manutenção preventiva documentada",
                    "Treinamento para operadores",
                    "Inspeção antes de cada uso",
                    "Registro no CREA obrigatório",
                    "Equipamentos com laudo técnico",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <IconShieldCheck className="w-4 h-4 text-primary-medium shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "200+", label: "Equipamentos disponíveis" },
              { value: "4", label: "Unidades no Brasil" },
              { value: "24h", label: "Atendimento emergencial" },
              { value: "100%", label: "Conformidade NR-18" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 md:p-6 rounded-xl bg-white border border-gray-200"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-medium mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/contato" variant="outline" icon={ArrowRight}>
              Solicitar Orçamento de Locação
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de equipamentos para sua obra?"
        description="Solicite um orçamento e receba a visita técnica da nossa equipe para avaliar a melhor solução."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
