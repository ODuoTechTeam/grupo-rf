import type { Metadata } from "next";
import {
  IconPackage,
  IconBuildingFactory2,
  IconShieldCheck,
  IconAward,
  IconCircleCheck,
} from "@tabler/icons-react";
import {
  Truck,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/cards/ProductCard";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { engenhariaProducts } from "@/data/services";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Produtos de fabricação própria para segurança em altura e movimentação de cargas. Olhal de ancoragem certificado, kits de linha de vida, escadas marinheiro e equipamentos para grua.",
};

export default function ProdutosPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos" },
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Produtos"
            title="Produtos e Soluções"
            description="Fabricantes e distribuidores de produtos para segurança em altura e movimentação de cargas no canteiro de obras. Material em estoque com envio para todo o Brasil."
          />

          {/* Highlight - Olhal de Ancoragem */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 mb-16">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconShieldCheck className="w-8 h-8 text-primary-medium" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  Olhal de Ancoragem Certificado
                </h3>
                <p className="text-text-light leading-relaxed mb-4">
                  Fabricação própria de olhais de ancoragem em aço inoxidável
                  com certificação de laboratórios independentes. Modelos com
                  resistência de 1.500 kgf e 2.500 kgf, atendendo às mais
                  rigorosas normas de segurança do trabalho em altura.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: IconBuildingFactory2, text: "Fabricação própria" },
                    { icon: IconAward, text: "Certificação independente" },
                    { icon: Truck, text: "Envio nacional" },
                    { icon: IconPackage, text: "Material em estoque" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-primary-medium shrink-0" />
                      <span className="text-sm text-text-light">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: IconBuildingFactory2,
                title: "Fabricação Própria",
                desc: "Produtos fabricados em nossas instalações com controle total de qualidade",
              },
              {
                icon: IconAward,
                title: "100% Inox",
                desc: "Todo material em aço inoxidável para máxima durabilidade e resistência",
              },
              {
                icon: IconCircleCheck,
                title: "Certificação",
                desc: "Ensaios e certificações emitidos por laboratórios independentes",
              },
              {
                icon: Truck,
                title: "Entrega Nacional",
                desc: "Envio para todo o Brasil com material pronta-entrega em estoque",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-5 rounded-xl bg-gray-50 border border-gray-100"
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

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Catálogo"
            title="Nossos Produtos"
            description="Selecione um produto para conhecer detalhes técnicos, especificações e solicitar orçamento."
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

      {/* Modelos de Olhal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Destaque"
            title="Olhal de Ancoragem"
            description="Dois modelos certificados para diferentes necessidades de carga."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                model: "Modelo 1.500 kgf",
                desc: "Ideal para ancoragem de trabalhadores em atividades de manutenção e limpeza de fachada.",
                specs: [
                  "Resistência: 1.500 kgf",
                  "Material: Aço inoxidável",
                  "Certificação: Laboratório independente",
                  "Aplicação: Predial e industrial",
                ],
              },
              {
                model: "Modelo 2.500 kgf",
                desc: "Para aplicações que exigem maior resistência, como sistemas de linha de vida e uso industrial pesado.",
                specs: [
                  "Resistência: 2.500 kgf",
                  "Material: Aço inoxidável",
                  "Certificação: Laboratório independente",
                  "Aplicação: Industrial e obras civis",
                ],
              },
            ].map((item) => (
              <div
                key={item.model}
                className="p-6 rounded-xl bg-white border border-gray-100"
              >
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  {item.model}
                </h3>
                <p className="text-text-light text-sm mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2">
                      <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0" />
                      <span className="text-sm text-text-light">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de produtos para segurança em altura?"
        description="Entre em contato para solicitar orçamento, catálogo técnico ou informações sobre disponibilidade em estoque."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
