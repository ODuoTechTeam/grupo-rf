import type { Metadata } from "next";
import { companyInfo, contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade | Grupo RF Engenharia",
  description:
    "Política de privacidade do Grupo RF Engenharia — coleta, uso e proteção de dados pessoais conforme a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 text-text-light leading-relaxed">
      <h1 className="text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8">
        Política de Privacidade
      </h1>

      <p className="mb-6">
        Esta página descreve como o <strong>{companyInfo.name}</strong>{" "}
        (&quot;RF&quot;, &quot;nós&quot;) coleta, utiliza e protege dados pessoais dos
        visitantes de suas landing pages. Ao entrar em contato conosco pelos
        canais aqui indicados, você concorda com os termos descritos abaixo.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        1. Quais dados coletamos
      </h2>
      <p className="mb-6">
        Quando você clica em nosso botão de WhatsApp ou liga para nosso telefone
        de contato, podemos receber seu nome, número de telefone e o conteúdo
        da mensagem que você enviar. Esses dados são fornecidos voluntariamente
        por você no momento do contato.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        2. Finalidade do uso
      </h2>
      <p className="mb-6">
        Os dados coletados são utilizados exclusivamente para responder sua
        solicitação comercial, elaborar orçamentos, agendar visitas técnicas
        e enviar informações sobre os serviços e equipamentos da RF. Não
        utilizamos seus dados para fins de marketing de massa.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        3. Base legal
      </h2>
      <p className="mb-6">
        O tratamento de dados pessoais realizado pela RF encontra-se
        fundamentado no consentimento do titular (art. 7º, I da LGPD) e no
        legítimo interesse comercial (art. 7º, IX da LGPD), sempre respeitando
        os direitos fundamentais do titular.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        4. Compartilhamento
      </h2>
      <p className="mb-6">
        Não compartilhamos seus dados com terceiros para fins comerciais. Dados
        podem ser compartilhados apenas quando exigidos por obrigação legal ou
        ordem judicial.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        5. Direitos do titular
      </h2>
      <p className="mb-6">
        Conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018),
        você tem direito a: confirmar a existência de tratamento de seus dados;
        acessá-los; corrigi-los; solicitar anonimização, bloqueio ou eliminação;
        solicitar portabilidade; revogar consentimento. Para exercer qualquer
        desses direitos, entre em contato pelo email{" "}
        <a href={`mailto:${contact.emailEngenharia}`} className="underline">
          {contact.emailEngenharia}
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        6. Cookies e rastreamento
      </h2>
      <p className="mb-6">
        Atualmente nossas landing pages não utilizam cookies de rastreamento.
        Quando adotarmos ferramentas de análise (como Google Tag Manager ou
        Google Analytics), esta política será atualizada com detalhes sobre
        quais cookies são utilizados e como você pode gerenciá-los.
      </p>

      <h2 className="text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4">
        7. Contato do encarregado
      </h2>
      <p className="mb-6">
        Dúvidas sobre esta política ou sobre o tratamento de seus dados podem
        ser encaminhadas ao endereço{" "}
        <a href={`mailto:${contact.emailEngenharia}`} className="underline">
          {contact.emailEngenharia}
        </a>
        .
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </p>
    </article>
  );
}
