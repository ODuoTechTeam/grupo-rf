"use client";

import {
  IconShieldLock,
  IconShieldCheck,
  IconCircleCheck,
  IconFileCheck,
  IconClipboardCheck,
  IconTool,
  IconDroplet,
  IconFlask,
  IconNotes,
  IconBuildingSkyscraper,
  IconArmchair,
  IconRosetteDiscountCheck,
  IconStack2,
  IconTestPipe,
  IconScale,
  IconRouteAltRight,
  IconChevronDown,
} from "@tabler/icons-react";
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
      "Elaboração do projeto técnico com dimensionamento dos pontos de ancoragem conforme a geometria e necessidade da edificação.",
  },
  {
    icon: IconStack2,
    title: "Material",
    description:
      "Fornecimento de material em aço inox 304/316 rastreável, com certificado de fabricação, composição química e ART de fabricação. Chumbador químico de alta performance.",
  },
  {
    icon: IconTool,
    title: "Instalação",
    description:
      "Instalação dos pontos de ancoragem por equipe especializada, supervisionada por Engenheiro Mecânico.",
  },
  {
    icon: IconDroplet,
    title: "Impermeabilização",
    description:
      "Tratamento impermeabilizante em todos os pontos instalados, garantindo a integridade da estrutura predial.",
  },
  {
    icon: IconFlask,
    title: "Teste de Arrancamento",
    description:
      "Teste de arrancamento em 100% dos pontos instalados, assegurando resistência mínima de 2.500 kgf.",
  },
  {
    icon: IconNotes,
    title: "Laudo Técnico e ART",
    description:
      "Emissão de laudo técnico completo e ART (Anotação de Responsabilidade Técnica) registrada no CREA.",
  },
];

const features = [
  {
    icon: IconShieldCheck,
    title: "Aço Inox 304 ou 316",
    description:
      "Olhal de ancoragem fabricado em aço inox 304 ou 316, com certificado de resistência a corrosão emitido por laboratório e rastreabilidade completa.",
  },
  {
    icon: IconFlask,
    title: "Chumbador Químico",
    description:
      "Fixação com chumbador químico de alta performance, proporcionando ancoragem segura e permanente na estrutura.",
  },
  {
    icon: IconRosetteDiscountCheck,
    title: "Ruptura Superior a 7.850 kgf",
    description:
      "Carga de ruptura superior a 7.850 kgf comprovada por ensaio de tração em laboratório — muito acima dos 2.500 kgf exigidos por norma.",
  },
  {
    icon: IconTestPipe,
    title: "Teste 100% dos Pontos",
    description:
      "Todos os pontos instalados passam por teste de arrancamento individual, sem exceção.",
  },
  {
    icon: IconFileCheck,
    title: "Laudo e ART",
    description:
      "Documentação técnica completa com laudo de ensaio e ART emitida por Engenheiro habilitado no CREA.",
  },
  {
    icon: IconScale,
    title: "Conformidade Portaria 157/2006",
    description:
      "Atendimento integral à Portaria 157/2006, obrigatória para edifícios com 4 ou mais pavimentos (acima de 12m).",
  },
];

const faqItems = [
  {
    question: "O sistema de ancoragem segue as exigências das normas?",
    answer:
      "Sim. O Sistema de Ancoragem Predial da RF Engenharia está de acordo com as exigências das normas NR-18, NR-35, NBR 16325 e NR 10/2015-CBMDF.",
  },
  {
    question: "O uso da ancoragem é obrigatório?",
    answer:
      "Sim. Desde a publicação da Portaria Nº 157, de 10 de abril de 2006, todas as edificações com, no mínimo, quatro pavimentos (ou altura de 12m) devem possuir dispositivos destinados à ancoragem de equipamentos de sustentação de andaimes, balancins e cadeirinhas, bem como cabos de segurança para fixação do trabalhador.",
  },
  {
    question: "Como deve ser o sistema de ancoragem?",
    answer:
      "De acordo com a legislação, o sistema deve ser fixo na estrutura do edifício e de forma que atenda todo o perímetro da fachada. Deve ser confeccionado em aço inox, resistente a intempéries, rastreável com gravação do nome e CNPJ da empresa fornecedora, material constituinte, número de lote e limite de carga.",
  },
  {
    question: "Além do olhal, qual outro material é utilizado?",
    answer:
      "É necessário utilizar barras roscadas em aço inox, bem como olhal de ancoragem especialmente desenvolvido por nossa equipe técnica, também fabricado em aço inox, cuja resistência é superior a 2.500 kgf, além de resistência a intempéries.",
  },
  {
    question: "É realizada uma avaliação prévia à instalação?",
    answer:
      "Sim. Antes de qualquer instalação, realizamos o desenvolvimento de projeto de locação dos pontos e verificação in loco com detector de materiais profissional não invasivo, garantindo que não haverá danos à estrutura existente.",
  },
  {
    question: "Quantos pontos são necessários em cada prédio?",
    answer:
      "A exigência da norma é de que os pontos atendam a toda a fachada do edifício. Recomendamos elaborar projeto específico para cada edificação, pois a quantidade varia conforme a geometria, altura e necessidades operacionais.",
  },
  {
    question: "Como se garante que o dispositivo está bem instalado?",
    answer:
      "Após a instalação, é realizado teste de arrancamento estático em 100% dos pontos, onde é aplicada carga superior a 2.500 kgf e verifica-se sua estabilidade. O resultado é documentado em laudo técnico.",
  },
  {
    question: "Qual a periodicidade de manutenção?",
    answer:
      "A norma prevê que os sistemas de ancoragem devem sofrer inspeção periódica a cada 12 meses, no máximo. A inspeção inclui avaliação visual e teste de arrancamento em todos os pontos instalados.",
  },
  {
    question: "É necessário tratamento de impermeabilização?",
    answer:
      "Se a instalação for na platibanda, geralmente não há riscos à impermeabilização. Porém, se for em laje, pode haver necessidade de reparo da manta. A RF Engenharia realiza o tratamento de impermeabilização quando necessário.",
  },
];

const applications = [
  {
    icon: IconBuildingSkyscraper,
    title: "Montagem de Balancins",
    description:
      "Pontos de ancoragem dimensionados para suportar a carga de balancins suspensos utilizados em serviços de fachada.",
  },
  {
    icon: IconArmchair,
    title: "Cadeirinha / Rapel",
    description:
      "Ancoragens projetadas para cadeirinhas e sistemas de rapel para manutenção e limpeza de fachadas.",
  },
  {
    icon: IconRouteAltRight,
    title: "Linha de Vida",
    description:
      "Permite a instalação de sistema de proteção coletiva com linha de vida, atendendo às exigências da NR-35.",
  },
  {
    icon: IconShieldCheck,
    title: "Resgate pelo Corpo de Bombeiros",
    description:
      "Garante que, em caso de emergência, o Corpo de Bombeiros possa realizar resgate rápido e eficiente. Atende às normas de Resgate e Salvamento (NR 10/2015-CBMDF).",
  },
];

export default function AncoragemPredialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Ancoragem Predial" },
            ]}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                  <IconShieldLock className="w-7 h-7 text-primary-medium" />
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                  RF Engenharia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Ancoragem{" "}
                <span className="text-primary-medium">Predial</span>
              </h1>

              <p className="text-lg text-text-light leading-relaxed max-w-2xl mb-8">
                Instalação de pontos de ancoragem em edificações para fixação
                de equipamentos de acesso a fachada, como balancins,
                cadeirinhas e SPIQ. Sistema fixo em aço inox 304/316 com
                carga de ruptura superior a 7.850 kgf, garantia de 5 anos
                e certificação completa. Somos fabricantes.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Aço inox 304/316
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Garantia de 5 anos
                </span>
                <span className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-text-light">
                  <IconCircleCheck className="w-4 h-4 text-primary-medium inline mr-2" />
                  Ruptura 7.850 kgf
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/ancoragem/ancoragem-01.jpg"
                    alt="Ancoragem Predial"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obrigatoriedade Legal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Obrigatoriedade Legal
            </h3>
            <p className="text-text-light text-sm leading-relaxed mb-4">
              A <strong className="text-gray-900">Portaria 157/2006</strong>{" "}
              do Ministério do Trabalho e Emprego determina que toda
              edificação com <strong className="text-gray-900">4 ou mais pavimentos</strong>{" "}
              (altura igual ou superior a 12 metros) deve possuir sistema de
              ancoragem instalado na cobertura para fixação de equipamentos
              de sustentação de andaimes e cadeirinhas.
            </p>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary-medium/20">
              <IconScale className="w-5 h-5 text-primary-medium shrink-0" />
              <span className="text-sm text-primary-medium font-medium">
                Edifícios com 4+ pavimentos (12m)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Sobre o Serviço"
            title="Sistema de Ancoragem de Alta Performance"
            description="Nosso sistema de ancoragem predial é projetado para garantir a máxima segurança dos trabalhadores que atuam em fachadas, utilizando materiais de primeira qualidade e processos rigorosos de instalação e teste."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                O que é Ancoragem Predial?
              </h3>
              <p className="text-text-light leading-relaxed mb-4">
                A ancoragem predial consiste na instalação de pontos fixos de
                ancoragem na cobertura ou estrutura de edificações,
                destinados à fixação de equipamentos de sustentação para
                trabalho em fachada, como balancins suspensos, cadeirinhas de
                rapel e sistemas SPIQ.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Cada ponto de ancoragem é fabricado em{" "}
                <strong className="text-gray-900">aço inox 304 ou 316</strong>,
                com rastreabilidade de lote, fixado com chumbador químico de
                alto desempenho e submetido a teste de arrancamento
                individual. Nosso olhal de ancoragem possui{" "}
                <strong className="text-gray-900">carga de ruptura superior a 7.850 kgf</strong>,
                comprovada por ensaio de tração em laboratório — muito acima
                dos 2.500 kgf exigidos por norma.
              </p>
              <p className="text-text-light leading-relaxed">
                O material acompanha <strong className="text-gray-900">certificado de resistência
                a corrosão</strong> emitido por laboratório, certificado de
                fabricação e composição química, ART de fabricação e{" "}
                <strong className="text-gray-900">garantia de 5 anos</strong>.
                Atendimento às normas NR-18, NR-35, NBR 16325-1, NR 10/2015-CBMDF
                e Portaria 157/2006.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Por que escolher a RF Engenharia?
              </h3>
              <ul className="space-y-3">
                {[
                  "Somos fabricantes e distribuidores do olhal de ancoragem",
                  "Equipe própria supervisionada por Engenheiro Mecânico",
                  "Aço inox 304/316 com certificado de composição química",
                  "Carga de ruptura superior a 7.850 kgf comprovada em laboratório",
                  "Garantia de 5 anos do material",
                  "Teste de arrancamento em 100% dos pontos instalados",
                  "Laudo técnico detalhado e ART registrada no CREA",
                  "Impermeabilização de todos os pontos de fixação",
                  "Conformidade com Portaria 157/2006, NR-18, NR-35, NBR 16325-1",
                  "Pagamento facilitado em até 12x sem juros",
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
        description="Nosso processo segue rigorosos padrões de qualidade e segurança, desde o projeto até a emissão da documentação técnica."
        steps={processSteps}
      />

      {/* Features / Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Diferenciais"
            title="Qualidade e Conformidade em Cada Ponto"
            description="Nosso sistema de ancoragem predial atende aos mais rigorosos padrões de segurança e normas regulamentadoras."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4 group-hover:bg-primary-medium/30 transition-colors">
                    <FeatureIcon className="w-6 h-6 text-primary-medium" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Aplicações"
            title="Onde Utilizamos a Ancoragem Predial"
            description="Os pontos de ancoragem são essenciais para a fixação segura de equipamentos de trabalho em fachada."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary-medium/30 transition-colors">
                    <AppIcon className="w-8 h-8 text-primary-medium" />
                  </div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {app.description}
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
            title="Perguntas sobre Ancoragem Predial"
            description="Respostas para as principais dúvidas sobre sistemas de ancoragem."
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
        title="Precisa instalar ancoragem predial?"
        description="Solicite um orçamento e garanta a segurança da sua edificação com conformidade total às normas vigentes."
      />
    </>
  );
}
