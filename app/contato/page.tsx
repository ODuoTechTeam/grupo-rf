"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  IconMessage,
  IconSend,
  IconBuildingSkyscraper,
  IconClock,
} from "@tabler/icons-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import OfficeTabs from "@/components/sections/OfficeTabs";
import { offices, contact } from "@/data/contact";

// Metadata must be exported from a server component, so we handle it via layout or head
// For client components, metadata is set differently. We'll skip the export here.

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message as fallback
    const message = `Olá! Meu nome é ${formData.nome}${formData.empresa ? ` da empresa ${formData.empresa}` : ""}. ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

    // Simulate brief delay then redirect to WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setSubmitted(true);

    window.open(whatsappUrl, "_blank");
  }

  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-4 md:pb-8 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Contato" }]} />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-bg-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Contato"
            title="Fale com Nossa Equipe"
            description="Preencha o formulário ou entre em contato diretamente por telefone ou WhatsApp."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form - Left */}
            <div className="lg:col-span-3">
              <div className="p-5 sm:p-8 rounded-2xl bg-white border border-gray-100">
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
                  Envie sua Mensagem
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary-pale border border-primary-medium/30 flex items-center justify-center mx-auto mb-4">
                      <IconMessage className="w-8 h-8 text-primary-medium" />
                    </div>
                    <h4 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                      Mensagem enviada!
                    </h4>
                    <p className="text-text-light mb-6">
                      Você será redirecionado para o WhatsApp para finalizar o
                      contato.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nome: "",
                          email: "",
                          telefone: "",
                          empresa: "",
                          mensagem: "",
                        });
                      }}
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="nome"
                          className="block text-sm font-medium text-text-light mb-2"
                        >
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-text-medium focus:outline-none focus:border-primary-medium focus:ring-1 focus:ring-primary-medium transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text-light mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-text-medium focus:outline-none focus:border-primary-medium focus:ring-1 focus:ring-primary-medium transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="telefone"
                          className="block text-sm font-medium text-text-light mb-2"
                        >
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-text-medium focus:outline-none focus:border-primary-medium focus:ring-1 focus:ring-primary-medium transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="empresa"
                          className="block text-sm font-medium text-text-light mb-2"
                        >
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nome da empresa"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-text-medium focus:outline-none focus:border-primary-medium focus:ring-1 focus:ring-primary-medium transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-sm font-medium text-text-light mb-2"
                      >
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        rows={5}
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Descreva o que precisa: tipo de serviço, local da obra, prazo..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-text-medium focus:outline-none focus:border-primary-medium focus:ring-1 focus:ring-primary-medium transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      icon={IconSend}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info - Right */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Olá, gostaria de solicitar um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl bg-white border border-primary-medium/30 hover:border-primary-medium/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center group-hover:bg-primary-medium/30 transition-colors">
                    <IconMessage className="w-6 h-6 text-primary-medium" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-medium transition-colors">
                      WhatsApp
                    </div>
                    <div className="text-sm text-text-light">
                      {contact.whatsappDisplay}
                    </div>
                  </div>
                </div>
              </a>

              {/* Toll-free */}
              <a
                href={`tel:${contact.tollFree.replace(/\s/g, "")}`}
                className="block p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center group-hover:bg-primary-medium/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary-medium" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-medium transition-colors">
                      Ligação Gratuita
                    </div>
                    <div className="text-lg font-bold text-primary-medium">
                      {contact.tollFree}
                    </div>
                  </div>
                </div>
              </a>

              {/* Emails */}
              <div className="p-6 rounded-xl bg-white border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary-medium" />
                  <h4 className="font-semibold font-[family-name:var(--font-display)] text-gray-900">E-mails</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-text-medium uppercase tracking-wider mb-1">
                      RF Engenharia
                    </div>
                    <a
                      href={`mailto:${contact.emailEngenharia}`}
                      className="text-sm text-primary-medium hover:underline"
                    >
                      {contact.emailEngenharia}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-text-medium uppercase tracking-wider mb-1">
                      RF Locação
                    </div>
                    <a
                      href={`mailto:${contact.emailLocacao}`}
                      className="text-sm text-primary-medium hover:underline"
                    >
                      {contact.emailLocacao}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horário */}
              <div className="p-6 rounded-xl bg-white border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <IconClock className="w-5 h-5 text-primary-medium" />
                  <h4 className="font-semibold font-[family-name:var(--font-display)] text-gray-900">
                    Horário de Atendimento
                  </h4>
                </div>
                <p className="text-sm text-text-light">
                  Segunda a Sexta: 08h às 18h
                </p>
                <p className="text-sm text-text-light">
                  Sábado: 08h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices with Google Maps */}
      <section className="py-12 md:py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            badge="Unidades"
            title="Onde Estamos"
            description="Presentes em 4 estados para atender todo o Brasil com agilidade e qualidade."
          />
          <OfficeTabs />
        </div>
      </section>
    </>
  );
}
