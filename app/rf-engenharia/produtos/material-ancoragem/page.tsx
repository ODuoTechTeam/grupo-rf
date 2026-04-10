import type { Metadata } from "next";
import Image from "next/image";
import {
  IconShieldCheck,
  IconCircleCheck,
  IconPackage,
  IconAward,
  IconTool,
  IconFlask,
  IconFileCheck,
  IconBuildingFactory2,
  IconScale,
  IconDroplet,
  IconChevronDown,
} from "@tabler/icons-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Material para Ancoragem",
  description:
    "Fabricantes e distribuidores de materiais para instalação de pontos de ancoragem predial. Olhal de ancoragem certificado em aço inox, kit completo com barra, chumbador químico e placa de identificação.",
};

const products = [
  {
    title: "Olhal de Ancoragem",
    description:
      "Dispositivo de ancoragem padrão NBR 16325-1 A1, em dois modelos (cargas de 1.500 kgf e 2.500 kgf), ambos fabricados em aço inoxidável com gravação de rastreabilidade.",
    image: "/images/ancoragem/material/olhal-ancoragem.jpg",
  },
  {
    title: "Estoque Pronta Entrega",
    description:
      "Olhais de ancoragem em aço inox disponíveis em estoque para pronta entrega. Modelos de 1.500 kgf e 2.500 kgf com rastreabilidade e certificação completa.",
    image: "/images/ancoragem/material/anc02.jpeg",
  },
  {
    title: "Fabricação Própria",
    description:
      "Processo de fabricação com maquinário de alta tecnologia, desde a fundição até o acabamento final, garantindo qualidade e rastreabilidade em cada peça.",
    image: "/images/ancoragem/material/f1.png",
  },
  {
    title: "Instalação em Edificações",
    description:
      "Olhal instalado na platibanda de edifício, pronto para fixação de balancins, cadeirinhas e sistemas de linha de vida conforme exigências normativas.",
    image: "/images/ancoragem/material/anc04.jpeg",
  },
];

const galleryImages = [
  { src: "/images/ancoragem/material/anc01.jpeg", alt: "Olhais de ancoragem em caixa — vista de cima" },
  { src: "/images/ancoragem/material/anc02.jpeg", alt: "Olhais de ancoragem em aço inox — vista lateral" },
  { src: "/images/ancoragem/material/anc03.jpeg", alt: "Olhais de ancoragem modelo 2.500 kgf" },
  { src: "/images/ancoragem/material/anc04.jpeg", alt: "Olhal instalado em platibanda de edifício" },
  { src: "/images/ancoragem/material/anc06-1.jpeg", alt: "Olhal instalado em laje com vista panorâmica" },
  { src: "/images/ancoragem/material/f4.png", alt: "Olhal instalado em parede com revestimento" },
];

const features = [
  {
    icon: IconTool,
    title: "Suporte Técnico",
    description:
      "Nossa equipe de Engenharia oferece todo o suporte técnico para que nosso cliente possa fazer a sua instalação com segurança e conformidade.",
  },
  {
    icon: IconBuildingFactory2,
    title: "Fabricação Própria",
    description:
      "Todos os nossos produtos são fabricados pela RF com maquinário de alta tecnologia, garantindo a maior qualidade do produto.",
  },
  {
    icon: IconScale,
    title: "Modelos 1.500 kgf e 2.500 kgf",
    description:
      "Produtos para diferentes aplicações, com carga de trabalho de 1.500 e 2.500 kgf e carga de ruptura no mínimo 4x a carga de trabalho.",
  },
  {
    icon: IconDroplet,
    title: "Resistente a Intempéries",
    description:
      "Todos os nossos produtos são confeccionados em aço inoxidável de acordo com as normas e não são suscetíveis a oxidação.",
  },
  {
    icon: IconAward,
    title: "Materiais Certificados",
    description:
      "Produtos certificados por laboratórios independentes, com certificados de testes de tração e resistência a corrosão.",
  },
  {
    icon: IconFileCheck,
    title: "Laudo Técnico e ART",
    description:
      "Fornecemos laudo técnico detalhado do material com garantia e Anotação de Responsabilidade Técnica registrada no CREA.",
  },
];

const specs = [
  { label: "Tipo", value: "Ancoragem A1 - NBR 16325-1" },
  { label: "Material", value: "Aço inox 304 ou 316" },
  { label: "Modelos", value: "1.500 kgf e 2.500 kgf" },
  { label: "Carga de ruptura", value: "Superior a 7.850 kgf" },
  { label: "Certificação", value: "Ensaio de tração em laboratório" },
  { label: "Rastreabilidade", value: "Gravação do fabricante, CNPJ, lote" },
  { label: "Garantia", value: "5 anos" },
  { label: "Documentação", value: "Certificado, laudo e ART de fabricação" },
];

const kitItems = [
  "Olhal de ancoragem em aço inox certificado",
  "Barra roscada em aço inoxidável",
  "Chumbador químico de alta performance",
  "Placa de identificação",
  "Certificado de resistência a corrosão",
  "ART de fabricação",
];

const whyChoose = [
  "Empresa especializada em trabalho em altura",
  "Material a pronta entrega",
  "Somos fabricantes e distribuidores do olhal de ancoragem",
  "Pagamento facilitado em até 12x sem juros",
  "Empresa e RT registrados no CREA",
  "Suporte técnico para nossos clientes",
  "Certificação de todo o material",
  "Fornecemos laudo técnico, ART e projeto",
  "Materiais resistentes a intempéries",
  "Garantia de 5 anos do material",
];

const faqItems = [
  {
    question: "O sistema de ancoragem segue as exigências das normas?",
    answer:
      "Sim. Nossos materiais de ancoragem estão de acordo com as exigências das normas NR-18, NR-35, NBR 16325-1 e NR 10/2015-CBMDF.",
  },
  {
    question: "O uso da ancoragem é obrigatório?",
    answer:
      "Sim. Desde a publicação da Portaria Nº 157, de 10 de abril de 2006, todas as edificações com, no mínimo, quatro pavimentos (ou altura de 12m) devem possuir dispositivos destinados à ancoragem de equipamentos de sustentação de andaimes, balancins e cadeirinhas.",
  },
  {
    question: "Como deve ser o sistema de ancoragem?",
    answer:
      "O sistema deve ser fixo na estrutura do edifício, atendendo todo o perímetro da fachada. Confeccionado em aço inox, rastreável com gravação do fabricante, CNPJ, material, número de lote e limite de carga de 1.500 kgf.",
  },
  {
    question: "O que compõe o kit de ancoragem?",
    answer:
      "O kit completo inclui olhal de ancoragem certificado em aço inox, barra roscada em aço inoxidável, chumbador químico de alta performance e placa de identificação. Acompanha certificado de resistência a corrosão, certificado de fabricação e ART.",
  },
  {
    question: "Qual a carga de ruptura do olhal?",
    answer:
      "Nosso olhal de ancoragem possui carga de ruptura superior a 7.850 kgf, comprovada por ensaio de tração em laboratório — muito acima dos 2.500 kgf exigidos por norma.",
  },
  {
    question: "Vocês entregam para todo o Brasil?",
    answer:
      "Sim. Somos distribuidores nacionais e realizamos envio para todo o Brasil. Temos estoque disponível para pronta entrega.",
  },
  {
    question: "Qual a periodicidade de manutenção dos pontos instalados?",
    answer:
      "A norma prevê que os sistemas de ancoragem devem sofrer inspeção periódica a cada 12 meses, no máximo. A inspeção inclui avaliação visual e teste de arrancamento em todos os pontos instalados.",
  },
  {
    question: "O material acompanha documentação técnica?",
    answer:
      "Sim. Todo material acompanha certificado de resistência a corrosão emitido por laboratório, certificado de fabricação e composição química, e ART de fabricação registrada no CREA.",
  },
];

export default function MaterialAncoragemPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "RF Engenharia", href: "/rf-engenharia" },
              { label: "Produtos", href: "/rf-engenharia/produtos" },
              { label: "Material para Ancoragem" },
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                <IconPackage className="w-4 h-4" />
                Produto
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                Material para{" "}
                <span className="text-primary-medium">Ancoragem</span>
              </h1>
              <p className="text-lg font-medium text-primary-medium mb-4">
                Distribuidor Nacional
              </p>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-2xl">
                Fabricantes e distribuidores de materiais para instalação de
                pontos de ancoragem predial. Olhal de ancoragem certificado em
                aço inox 304/316, kit completo com barra, chumbador químico e
                placa de identificação. Carga de ruptura superior a 7.850 kgf
                com garantia de 5 anos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/contato"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Solicitar Orçamento
                </Button>
                <Button
                  href="/rf-engenharia/produtos"
                  variant="outline"
                  size="lg"
                  icon={ArrowLeft}
                  iconPosition="left"
                >
                  Ver Todos os Produtos
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/ancoragem/material/olhal-ancoragem.jpg"
                    alt="Olhal de ancoragem em aço inox fabricado pela RF Engenharia"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <IconPackage className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                Kit de Ancoragem Completo
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <IconCircleCheck className="w-5 h-5 text-primary-medium shrink-0" />
                  <span className="text-sm text-text-primary font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Materiais"
            title="Componentes do Sistema de Ancoragem"
            description="Conheça cada componente do nosso sistema de ancoragem predial, fabricado com materiais de alta qualidade e certificação completa."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-primary-medium/30 transition-all"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Diferenciais"
            title="Por Que Escolher a RF Engenharia"
            description="Somos fabricantes e distribuidores com certificação completa e suporte técnico especializado."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-pale border border-primary-medium/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-medium" />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Choose */}
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                10 Motivos para Escolher a RF
              </h3>
              <ul className="space-y-3">
                {whyChoose.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-primary-pale border border-primary-medium/30 flex items-center justify-center shrink-0 text-xs font-bold text-primary-medium">
                      {index + 1}
                    </span>
                    <span className="text-text-light pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                Especificações Técnicas
              </h3>
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden">
                {specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between p-4 ${
                      index !== specs.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <span className="text-text-light font-medium">
                      {spec.label}
                    </span>
                    <span className="text-gray-900 font-semibold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Galeria"
            title="Nossos Produtos e Instalações"
            description="Conheça nossos materiais de ancoragem e exemplos de instalações realizadas em edificações."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Perguntas sobre Material de Ancoragem"
            description="Respostas para as principais dúvidas sobre nossos materiais de ancoragem predial."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-colors"
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

      {/* Back to Products */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Button
            href="/rf-engenharia/produtos"
            variant="ghost"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Voltar para Produtos
          </Button>
        </div>
      </section>

      <CTASection
        title="Precisa de material para ancoragem?"
        description="Solicite um orçamento. Somos fabricantes e distribuidores nacionais com material a pronta entrega e envio para todo o Brasil."
        primaryLabel="Solicitar Orçamento"
      />
    </>
  );
}
