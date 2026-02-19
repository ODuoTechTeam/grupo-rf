import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça o Grupo RF Engenharia. Desde 2006 atuando em segurança do trabalho em altura, locação de equipamentos e soluções industriais em todo o Brasil.",
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
