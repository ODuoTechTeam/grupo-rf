import { Metadata } from "next";
import {
  Zap,
  Drill,
  CircleDot,
  Disc,
  Wind,
  Slice,
} from "lucide-react";
import {
  IconTool,
  IconHammer,
  IconSettings,
  IconPackage,
  IconBuildingSkyscraper,
  IconBuildingFactory2,
  IconTruck,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Equipamentos Diversos",
  description:
    "Locação de equipamentos diversos para obras: betoneira, compactador de solo, marteletes, furadeira, serra mármore, compressor e mais.",
};

const mainEquipment = [
  {
    icon: IconSettings,
    title: "Betoneira",
    description:
      "Equipamento essencial para mistura homogênea de concreto e argamassa. Agiliza o preparo dos materiais garantindo a qualidade e consistência da mistura para a obra.",
    highlights: [
      "Mistura de concreto",
      "Preparo de argamassa",
      "Mistura homogênea",
      "Alta produtividade",
    ],
  },
  {
    icon: Disc,
    title: "Compactador de Solo",
    description:
      "Utilizado para preparação e compactação do terreno antes da construção. Garante a estabilidade e uniformidade do solo, fundamental para a segurança estrutural da edificação.",
    highlights: [
      "Preparação de terreno",
      "Compactação uniforme",
      "Estabilidade do solo",
      "Base para construção",
    ],
  },
];

const electricalEquipment = [
  { icon: IconHammer, name: "Martelete Perfurador" },
  { icon: IconHammer, name: "Martelete Rompedor" },
  { icon: IconHammer, name: "Martelete Demolidor" },
  { icon: Drill, name: "Furadeira" },
  { icon: CircleDot, name: "Serra Mármore" },
  { icon: Slice, name: "Serra Madeira" },
  { icon: Wind, name: "Compressor" },
  { icon: IconTool, name: "Plaina" },
  { icon: CircleDot, name: "Policorte" },
  { icon: IconSettings, name: "Parafusadeira" },
  { icon: Disc, name: "Esmerilhadeira" },
  { icon: Disc, name: "Lixadeira" },
];

const applications = [
  { icon: IconBuildingSkyscraper, label: "Construção civil" },
  { icon: IconBuildingFactory2, label: "Obras industriais" },
  { icon: IconTool, label: "Reformas" },
  { icon: IconHammer, label: "Demolições" },
  { icon: IconPackage, label: "Acabamentos" },
  { icon: IconTruck, label: "Infraestrutura" },
];

export default function EquipamentosDiversosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Locação", href: "/rf-locacao" },
              { label: "Equipamentos Diversos" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-6">
                <IconTool className="w-8 h-8 text-primary-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Equipamentos Diversos
              </h1>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Linha completa de equipamentos para construção civil, incluindo betoneira,
                compactador de solo e uma ampla variedade de ferramentas elétricas. Tudo o que
                sua obra precisa em um só lugar.
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/estruturas-metalicas/estrutura-metalica-02.jpg"
                    alt="Equipamentos Diversos"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Equipment */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Equipamentos Principais"
            title="Máquinas para Obra"
            description="Equipamentos de grande porte essenciais para o canteiro de obras."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainEquipment.map((equip) => (
              <div
                key={equip.title}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-6 group-hover:bg-primary-medium/20 transition-colors">
                  <equip.icon className="w-7 h-7 text-primary-medium" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">{equip.title}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-6">
                  {equip.description}
                </p>
                <ul className="space-y-2">
                  {equip.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electrical Equipment Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Ferramentas Elétricas"
            title="Equipamentos Elétricos"
            description="Ampla variedade de ferramentas elétricas profissionais para sua obra."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {electricalEquipment.map((equip) => (
              <div
                key={equip.name}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-medium/10 group-hover:bg-primary-medium/20 transition-colors">
                  <equip.icon className="w-5 h-5 text-primary-medium" />
                </div>
                <span className="text-xs text-text-light font-medium leading-tight">
                  {equip.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Aplicações"
            title="Onde Utilizar"
            description="Nossos equipamentos atendem às mais diversas necessidades da construção civil."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app) => (
              <div
                key={app.label}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all text-center"
              >
                <app.icon className="w-8 h-8 text-primary-medium" />
                <span className="text-sm text-text-light font-medium">{app.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NR Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-primary-medium/30">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-pale shrink-0">
                <IconShieldCheck className="w-6 h-6 text-primary-medium" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  Conformidade com NR-18
                </h3>
                <p className="text-text-light leading-relaxed">
                  Todos os nossos equipamentos são mantidos em conformidade com a Norma
                  Regulamentadora NR-18 e passam por revisões periódicas. Fornecemos
                  equipamentos em perfeito estado de funcionamento com toda a documentação
                  técnica necessária.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    "NR-18",
                    "Revisão Periódica",
                    "Documentação Técnica",
                    "Equipamentos Revisados",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-medium/10 text-primary-medium border border-primary-medium/20"
                    >
                      <IconCircleCheck className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de equipamentos para sua obra?"
        description="Solicite um orçamento e receba a visita de nossos especialistas."
      />
    </>
  );
}
