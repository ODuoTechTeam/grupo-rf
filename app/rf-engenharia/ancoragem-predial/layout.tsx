import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancoragem Predial | RF Engenharia",
  description:
    "Instalação de pontos de ancoragem predial em aço inoxidável para balancins, cadeirinhas e SPIQ. Sistema fixo com resistência de 2.500 kgf e teste 100% dos pontos. Conformidade com Portaria 157/2006.",
};

export default function AncoragemPredialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
