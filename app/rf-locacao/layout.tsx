import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RF Locação",
  description:
    "Locação de equipamentos para construção civil. Balancim elétrico, andaime fachadeiro, elevador cremalheira, mini-grua e proteções coletivas com montagem e manutenção.",
};

export default function RFLocacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
