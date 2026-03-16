import type { Metadata } from "next";
import {
  IconShieldCheck,
  IconCircleCheck,
  IconAward,
  IconFileDescription,
} from "@tabler/icons-react";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import ProductCard from "@/components/cards/ProductCard";
import Button from "@/components/ui/Button";
import { engenhariaServices, engenhariaProducts } from "@/data/services";

export const metadata: Metadata = {
  title: "RF Engenharia",
  description:
    "Soluções completas em segurança do trabalho em altura. Projetos, fabricação, instalação e inspeção de sistemas de ancoragem, linha de vida e construção metálica.",
};

export default function RFEngenhariaPage() {
  return (
    <>
      <Hero
        badge="RF Engenharia"
        title="Soluções Completas em Segurança do Trabalho em Altura"
        description="Projetos, fabricação, instalação e inspeção de sistemas de ancoragem predial, linhas de vida, construção metálica e treinamentos. Conformidade total com NR-18, NR-35 e NBR 16325."
        primaryCTA={{ label: "Solicitar Orçamento", href: "/contato" }}
        secondaryCTA={{ label: "Ver Portfolio", href: "/portfolio" }}
        image="/images/linha-de-vida/linha-vida-01.jpg"
        imageAlt="Sistema de linha de vida RF Engenharia"
      />

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: IconShieldCheck,
                title: "NR-35 e NR-18",
                desc: "Conformidade total com normas regulamentadoras",
              },
              {
                icon: IconCircleCheck,
                title: "Teste 100%",
                desc: "Teste de arrancamento em todos os pontos instalados",
              },
              {
                icon: IconAward,
                title: "Garantia 5+ Anos",
                desc: "Material de alta qualidade com garantia estendida",
              },
              {
                icon: IconFileDescription,
                title: "Laudo e ART",
                desc: "Documentação técnica completa com ART registrada",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-5 rounded-xl bg-white border border-gray-200"
              >
                <item.icon className="w-8 h-8 text-primary-medium mx-auto mb-3" />
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-text-light">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Serviços"
            title="Nossos Serviços de Engenharia"
            description="Soluções completas em segurança do trabalho em altura, desde o projeto até a certificação anual."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engenhariaServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                features={service.features}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Produtos"
            title="Produtos e Soluções"
            description="Produtos de fabricação própria para segurança em altura e movimentação de cargas no canteiro de obras."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engenhariaProducts.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.title}
                description={product.description}
                icon={product.icon}
                href={product.href}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/contato" variant="outline" icon={ArrowRight}>
              Solicitar Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Normas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconShieldCheck className="w-8 h-8 text-primary-medium" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  Conformidade com Normas Técnicas
                </h3>
                <p className="text-text-light leading-relaxed">
                  Todos os nossos projetos e instalações seguem rigorosamente as
                  normas NR-18 (Segurança na Construção Civil), NR-35 (Trabalho
                  em Altura) e NBR 16325 (Proteção Contra Quedas). Empresa e
                  Responsável Técnico registrados no CREA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de um projeto de segurança em altura?"
        description="Nossos engenheiros estão prontos para desenvolver a solução ideal para o seu empreendimento."
        primaryLabel="Falar com Engenheiro"
      />
    </>
  );
}
