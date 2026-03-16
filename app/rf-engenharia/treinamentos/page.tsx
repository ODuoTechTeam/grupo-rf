import { Metadata } from "next";
import {
  IconSchool,
  IconHelmet,
  IconCircleCheck,
  IconUsersGroup,
  IconClock,
  IconAward,
  IconBook,
  IconShieldCheck,
  IconFileCheck,
} from "@tabler/icons-react";
import { Zap, Mountain } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Treinamentos | RF Engenharia",
  description:
    "Treinamentos especializados em segurança do trabalho: NR-10 (Segurança em Eletricidade), NR-18 (Construção Civil) e NR-35 (Trabalho em Altura). Certificação e conformidade normativa.",
};

const courses = [
  {
    icon: Zap,
    title: "NR-10",
    subtitle: "Segurança em Instalações e Serviços em Eletricidade",
    description:
      "Treinamento obrigatório para todos os trabalhadores que interagem com instalações elétricas e serviços com eletricidade. Aborda os riscos elétricos, medidas de controle, equipamentos de proteção e procedimentos de emergência.",
    topics: [
      "Riscos em instalações e serviços com eletricidade",
      "Medidas de controle do risco elétrico",
      "Normas técnicas brasileiras (NBR 5410 e NBR 14039)",
      "Equipamentos de proteção coletiva e individual",
      "Rotinas de trabalho e procedimentos",
      "Documentação das instalações elétricas",
      "Riscos adicionais (altura, ambientes confinados)",
      "Proteção e combate a incêndios",
      "Acidentes de origem elétrica e primeiros socorros",
      "Responsabilidades dos trabalhadores",
    ],
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
    accentColor: "text-yellow-400",
    bgAccent: "bg-yellow-500/10",
  },
  {
    icon: IconHelmet,
    title: "NR-18",
    subtitle: "Condições de Segurança e Saúde no Trabalho na Construção Civil",
    description:
      "Capacitação voltada para profissionais da construção civil, abordando as condições e meio ambiente de trabalho na indústria da construção, incluindo organização do canteiro, proteções coletivas e individuais.",
    topics: [
      "Organização do canteiro de obra",
      "Proteção contra quedas de altura",
      "Proteções coletivas (guarda-corpo, redes, plataformas)",
      "Movimentação e transporte de materiais",
      "Andaimes e plataformas de trabalho",
      "Escavações, fundações e desmonte de rochas",
      "Instalações elétricas no canteiro",
      "Equipamentos de proteção individual (EPI)",
      "Armazenamento e estocagem de materiais",
      "Ordem, limpeza e sinalização do canteiro",
    ],
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
  },
  {
    icon: Mountain,
    title: "NR-35",
    subtitle: "Trabalho em Altura",
    description:
      "Treinamento obrigatório para todos os trabalhadores que exercem atividades acima de 2 metros do nível inferior, onde haja risco de queda. Aborda planejamento, organização, execução e medidas de proteção para trabalho em altura.",
    topics: [
      "Normas e regulamentos sobre trabalho em altura",
      "Análise de risco e condições impeditivas",
      "Riscos potenciais inerentes ao trabalho em altura",
      "Sistemas de proteção contra quedas (SPIQ)",
      "Equipamentos de proteção individual (EPI)",
      "Acidentes típicos em trabalho em altura",
      "Condução em situações de emergência",
      "Técnicas de uso de ancoragem e linha de vida",
      "Noções de primeiros socorros",
      "Procedimentos de resgate e salvamento",
    ],
    color: "from-primary/20 to-primary-medium/5",
    borderColor: "border-primary-medium/30",
    accentColor: "text-primary-medium",
    bgAccent: "bg-primary/10",
  },
];

const benefits = [
  {
    icon: IconUsersGroup,
    title: "Instrutores Qualificados",
    description:
      "Treinamentos ministrados por Engenheiros e Técnicos de Segurança habilitados, com vasta experiência prática.",
  },
  {
    icon: IconBook,
    title: "Teoria e Prática",
    description:
      "Conteúdo teórico completo aliado a exercícios práticos e simulações para fixação do aprendizado.",
  },
  {
    icon: IconAward,
    title: "Certificação Oficial",
    description:
      "Emissão de certificado de conclusão válido em todo o território nacional, conforme exigência das NRs.",
  },
  {
    icon: IconClock,
    title: "Carga Horária Conforme NR",
    description:
      "Carga horária em total conformidade com as exigências de cada Norma Regulamentadora.",
  },
  {
    icon: IconShieldCheck,
    title: "Conformidade Legal",
    description:
      "Treinamentos que atendem integralmente às exigências do Ministério do Trabalho e Emprego.",
  },
  {
    icon: IconFileCheck,
    title: "Documentação Completa",
    description:
      "Lista de presença, conteúdo programático, certificados e toda a documentação necessária para fiscalização.",
  },
];

export default function TreinamentosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Treinamentos" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconSchool className="w-7 h-7 text-primary-medium" />
              </div>
              <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                RF Engenharia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              Treinamentos em{" "}
              <span className="text-primary-medium">Segurança</span>
            </h1>

            <p className="text-lg text-text-light leading-relaxed mb-8">
              Treinamentos especializados em segurança do trabalho, ministrados
              por profissionais qualificados com ampla experiência prática.
              Capacitamos sua equipe para atuar com segurança e em
              conformidade com as Normas Regulamentadoras.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-600 font-medium">
                <Zap className="w-4 h-4 inline mr-2" />
                NR-10
              </span>
              <span className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-600 font-medium">
                <IconHelmet className="w-4 h-4 inline mr-2" />
                NR-18
              </span>
              <span className="px-4 py-2 rounded-lg bg-primary/10 border border-primary-medium/20 text-sm text-primary-medium font-medium">
                <Mountain className="w-4 h-4 inline mr-2" />
                NR-35
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Nossos Cursos"
            title="Treinamentos Disponíveis"
            description="Oferecemos treinamentos nas principais Normas Regulamentadoras relacionadas à segurança do trabalho."
            align="center"
          />

          <div className="space-y-8 mt-12">
            {courses.map((course) => {
              const CourseIcon = course.icon;
              return (
                <div
                  key={course.title}
                  className={`p-8 rounded-2xl bg-white border border-gray-100 hover:${course.borderColor} transition-all`}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} border ${course.borderColor} flex items-center justify-center mb-4`}
                      >
                        <CourseIcon
                          className={`w-8 h-8 ${course.accentColor}`}
                        />
                      </div>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <p
                        className={`text-sm font-medium ${course.accentColor} mb-4`}
                      >
                        {course.subtitle}
                      </p>
                      <p className="text-text-light leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="lg:w-2/3">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                        Conteúdo Programático
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.topics.map((topic) => (
                          <div
                            key={topic}
                            className={`flex items-start gap-3 p-3 rounded-lg ${course.bgAccent} border ${course.borderColor}`}
                          >
                            <IconCircleCheck
                              className={`w-4 h-4 ${course.accentColor} shrink-0 mt-0.5`}
                            />
                            <span className="text-sm text-text-light">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Diferenciais"
            title="Por que Treinar com a RF Engenharia?"
            description="Nossos treinamentos combinam conhecimento teórico com experiência prática de campo."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 group-hover:bg-primary-medium/30 transition-colors">
                    <BenefitIcon className="w-6 h-6 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Precisa capacitar sua equipe?"
        description="Entre em contato e solicite uma proposta para treinamento in company ou turmas abertas."
      />
    </>
  );
}
