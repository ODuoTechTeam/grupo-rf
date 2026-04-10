"use client";

import {
  IconZoomCheck,
  IconFlask,
  IconFileDescription,
  IconRosetteDiscountCheck,
  IconNotes,
  IconCircleCheck,
  IconShieldCheck,
  IconAlertTriangle,
  IconClock,
  IconFileCheck,
  IconCreditCard,
} from "@tabler/icons-react";
import { Search, Calendar } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "@/components/sections/ProcessSteps";

const processSteps = [
  {
    icon: Calendar,
    title: "Agendamento",
    description:
      "Agendamento da visita técnica conforme a disponibilidade do cliente, respeitando o prazo de validade do laudo anterior.",
  },
  {
    icon: Search,
    title: "Inspeção Visual",
    description:
      "Inspeção visual detalhada de todos os pontos de ancoragem, verificando integridade, corrosão, deformações e condições gerais.",
  },
  {
    icon: IconFlask,
    title: "Teste de Arrancamento",
    description:
      "Ensaio de arrancamento nos pontos de ancoragem para verificar se mantêm a capacidade de carga mínima exigida por norma.",
  },
  {
    icon: IconFileDescription,
    title: "Relatório",
    description:
      "Elaboração de relatório técnico detalhado com registros fotográficos, resultados dos ensaios e recomendações.",
  },
  {
    icon: IconRosetteDiscountCheck,
    title: "Revalidação de Laudo",
    description:
      "Revalidação do laudo técnico do sistema de ancoragem por mais 12 meses, atestando as condições de segurança.",
  },
  {
    icon: IconNotes,
    title: "Emissão de ART",
    description:
      "Emissão de nova ART (Anotação de Responsabilidade Técnica) registrada no CREA, garantindo a validade legal.",
  },
];

const importanceItems = [
  {
    icon: IconShieldCheck,
    title: "Segurança dos Trabalhadores",
    description:
      "A inspeção periódica garante que os pontos de ancoragem mantêm sua capacidade de carga, protegendo a vida dos trabalhadores que dependem desses sistemas.",
  },
  {
    icon: IconAlertTriangle,
    title: "Obrigação Legal",
    description:
      "A legislação exige que os sistemas de ancoragem sejam inspecionados e recertificados a cada 12 meses. O descumprimento pode resultar em multas e interdições.",
  },
  {
    icon: IconClock,
    title: "Validade de 12 Meses",
    description:
      "O laudo técnico e a ART têm validade de 12 meses. Após esse período, é obrigatória uma nova inspeção para revalidação do sistema.",
  },
  {
    icon: IconFileCheck,
    title: "Documentação Atualizada",
    description:
      "A inspeção anual mantém a documentação do edifício em dia, evitando problemas com fiscalização e garantindo a regularidade da edificação.",
  },
  {
    icon: IconCreditCard,
    title: "Pagamento Facilitado",
    description:
      "Pagamento facilitado em até 12x sem juros no cartão de crédito, tornando a manutenção da conformidade mais acessível.",
  },
];

export default function InspecaoAnualPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Inspeção Anual em Ancoragem" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                  <IconZoomCheck className="w-7 h-7 text-primary-medium" />
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                  RF Engenharia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Inspeção Anual em{" "}
                <span className="text-primary-medium">Ancoragem</span>
              </h1>

              <p className="text-lg text-text-light leading-relaxed max-w-2xl mb-8">
                Os sistemas de ancoragem predial devem ser inspecionados e
                recertificados a cada 12 meses. Realizamos inspeção visual
                completa, teste de arrancamento, revalidação de laudo técnico
                e emissão de ART, garantindo a continuidade da segurança e
                conformidade legal da sua edificação.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Inspeção completa
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Teste de arrancamento
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Revalidação de laudo
                </span>
              </div>
            </div>

            <div className="lg:w-96 w-full p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Prazo de Validade
              </h3>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary-medium/20 mb-4">
                <div className="w-16 h-16 rounded-xl bg-primary-pale flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold text-primary-medium">
                    12
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Meses</p>
                  <p className="text-sm text-text-light">
                    Validade do laudo técnico e ART
                  </p>
                </div>
              </div>
              <p className="text-text-light text-sm leading-relaxed">
                Após o período de 12 meses, o sistema de ancoragem deve
                passar por nova inspeção para manter a validade da
                certificação e estar em conformidade com a legislação.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-start gap-2">
                  <IconAlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    Laudos vencidos podem resultar em multas e interdição do
                    serviço de fachada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Importância"
            title="Por que a Inspeção Anual é Obrigatória?"
            description="A inspeção periódica dos sistemas de ancoragem é fundamental para a segurança e conformidade legal."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {importanceItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center shrink-0 group-hover:bg-primary-medium/30 transition-colors">
                      <ItemIcon className="w-6 h-6 text-primary-medium" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps
        title="Etapas da Inspeção"
        description="Nosso processo de inspeção anual segue critérios rigorosos para garantir a segurança e revalidar a certificação do sistema."
        steps={processSteps}
      />

      {/* What We Inspect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Abrangência"
            title="O que Inspecionamos"
            description="Nossa inspeção abrange todos os componentes do sistema de ancoragem, garantindo uma avaliação completa e criteriosa."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Inspeção Visual
              </h3>
              <ul className="space-y-3">
                {[
                  "Integridade dos pontos de ancoragem",
                  "Presença de corrosão ou oxidação",
                  "Deformações ou danos mecânicos",
                  "Condição dos chumbadores e fixações",
                  "Estado da impermeabilização",
                  "Verificação de interferências estruturais",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-primary-medium shrink-0 mt-0.5" />
                    <span className="text-text-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Ensaios e Documentação
              </h3>
              <ul className="space-y-3">
                {[
                  "Teste de arrancamento com equipamento calibrado",
                  "Registro fotográfico de todos os pontos",
                  "Relatório técnico detalhado",
                  "Revalidação do laudo de ancoragem",
                  "Emissão de ART por Engenheiro habilitado",
                  "Recomendações de manutenção quando necessário",
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

      {/* CTA */}
      <CTASection
        title="Seu laudo de ancoragem está vencido?"
        description="Agende a inspeção anual e mantenha sua edificação em conformidade com a legislação vigente."
      />
    </>
  );
}
