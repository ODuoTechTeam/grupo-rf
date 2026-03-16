"use client";

import { ArrowRight } from "lucide-react";
import {
  IconShieldCheck,
  IconBuildingFactory2,
  IconAward,
  IconTruck,
  IconCircleCheck,
  IconCreditCard,
  IconFileCheck,
  IconClock,
} from "@tabler/icons-react";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import ClientMarquee from "@/components/sections/ClientMarquee";
import SplitScreen from "@/components/sections/SplitScreen";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import EquipmentCard from "@/components/cards/EquipmentCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { engenhariaServices } from "@/data/services";
import { locacaoEquipments } from "@/data/equipment";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero
        badge="Desde 2006 protegendo vidas"
        title="Segurança Inteligente que"
        highlight="Salva Vidas"
        description="Desde 2006, atuamos no mercado de projetos, consultoria, fabricação e instalação de sistemas de segurança do trabalho — especialmente prevenção contra queda em altura. Tornamos sua obra mais segura e valorizamos seu projeto."
        primaryCTA={{ label: "Solicitar Visita Técnica", href: "/contato" }}
        secondaryCTA={{ label: "Conheça Nossos Serviços", href: "/rf-engenharia" }}
        showStats
        image="/images/ancoragem/ancoragem-01.jpg"
        imageAlt="Sistema de ancoragem predial RF Engenharia"
      />

      {/* Benefícios — Bento Grid */}
      <section className="py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Por que nos escolher"
            title="Excelência em cada projeto"
            description="Combinamos experiência técnica, equipamentos de ponta e atendimento personalizado."
          />

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {/* Featured large card — spans 3 columns */}
            <StaggerItem className="md:col-span-3 md:row-span-2">
              <div className="group relative h-full p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-medium overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconBuildingFactory2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mb-3">
                    Fabricação Própria
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 max-w-sm">
                    Fabricação e equipe própria garantindo qualidade e agilidade em cada projeto. Do projeto à instalação, tudo com controle total.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Controle de qualidade", "Equipe especializada", "Entrega ágil"].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/15 text-white rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Standard cards — 3 columns */}
            <StaggerItem className="md:col-span-3">
              <div className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all duration-500 relative overflow-hidden hover:shadow-lg h-full">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-medium to-accent-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-pale flex items-center justify-center group-hover:bg-primary-medium transition-colors duration-300">
                    <IconShieldCheck className="w-6 h-6 text-primary-medium group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1">Conformidade Total</h3>
                    <p className="text-sm text-text-light leading-relaxed">Conformidade com NR-18 e NR-35. Empresa e RT registrados no CREA.</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-3">
              <div className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-accent-warm/30 transition-all duration-500 relative overflow-hidden hover:shadow-lg h-full">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-warm to-accent-warm-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-warm-pale flex items-center justify-center group-hover:bg-accent-warm transition-colors duration-300">
                    <IconAward className="w-6 h-6 text-accent-warm group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1">Garantia 5+ Anos</h3>
                    <p className="text-sm text-text-light leading-relaxed">Material a pronta entrega com garantia estendida. Laudo técnico, ART e projeto.</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Wide card — spans full bottom */}
            <StaggerItem className="md:col-span-6">
              <div className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-success/30 transition-all duration-500 relative overflow-hidden hover:shadow-lg">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-success via-primary-medium to-accent-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-success-pale flex items-center justify-center group-hover:bg-success transition-colors duration-300">
                      <IconTruck className="w-6 h-6 text-success group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary font-[family-name:var(--font-display)]">Cobertura Nacional</h3>
                      <p className="text-sm text-text-light">Atendimento em todo o Brasil com unidades estratégicas.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 md:ml-auto">
                    {[
                      { icon: IconCircleCheck, text: "Testes 100%" },
                      { icon: IconCreditCard, text: "Até 12x" },
                      { icon: IconFileCheck, text: "Laudo e ART" },
                      { icon: IconClock, text: "Pronta entrega" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-surface border border-gray-100 text-xs text-text-light">
                        <item.icon className="w-3.5 h-3.5 text-primary-accent" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Split-Screen: Engenharia vs Locação */}
      <SplitScreen />

      {/* RF Engenharia — Top Services Preview */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="RF Engenharia"
            title="Serviços de Engenharia"
            description="Atuantes no mercado de projetos, consultoria, fabricação e instalação de sistemas de segurança do trabalho, especialmente prevenção contra queda em altura."
          />

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engenhariaServices.slice(0, 3).map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  features={service.features}
                  image={service.image}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-10">
            <Button href="/rf-engenharia" variant="outline" icon={ArrowRight}>
              Ver Todos os Serviços
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* RF Locação — Top Equipment Preview */}
      <section className="py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="RF Locação"
            title="Equipamentos para Locação"
            description="Locação de equipamentos para construção civil com montagem, manutenção, projeto e treinamento."
          />

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locacaoEquipments.slice(0, 4).map((equip) => (
              <StaggerItem key={equip.slug}>
                <EquipmentCard
                  title={equip.title}
                  description={equip.description}
                  icon={equip.icon}
                  href={equip.href}
                  badge={equip.badge}
                  features={equip.features}
                  image={equip.image}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-10">
            <Button href="/rf-locacao" variant="outline" icon={ArrowRight}>
              Ver Todos os Equipamentos
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Clientes — Marquee */}
      <ClientMarquee />

      <CTASection />
    </>
  );
}
