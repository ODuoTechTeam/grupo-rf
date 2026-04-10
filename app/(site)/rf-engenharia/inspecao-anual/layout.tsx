import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspeção Anual em Ancoragem | RF Engenharia",
  description:
    "Inspeção anual obrigatória em sistemas de ancoragem. Realizamos inspeção visual, teste de arrancamento, revalidação de laudo e emissão de ART a cada 12 meses.",
};

export default function InspecaoAnualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
