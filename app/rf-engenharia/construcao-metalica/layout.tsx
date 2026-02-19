import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construção Metálica | RF Engenharia",
  description:
    "Projetos de construção e fabricação metálica: telhados, galpões, escadas marinheiro, passarelas de acesso e rampas. Infraestrutura própria de serralheria e solda com equipe supervisionada por Engenheiro Mecânico.",
};

export default function ConstrucaoMetalicaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
