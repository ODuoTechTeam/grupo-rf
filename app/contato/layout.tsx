import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo RF Engenharia. Unidades em Brasilia, Goiania, Sao Paulo e Belo Horizonte. WhatsApp, telefone e e-mail.",
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
