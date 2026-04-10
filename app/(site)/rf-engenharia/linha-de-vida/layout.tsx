import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linha de Vida | RF Engenharia",
  description:
    "Projeto, fabricação e instalação de sistemas de linha de vida para edifícios, galpões, hospitais, canteiros de obra e indústrias. Sistemas flexíveis e rígidos com laudo e ART.",
};

export default function LinhaDeVidaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
