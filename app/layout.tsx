import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo RF Engenharia | Segurança em Altura desde 2006",
    template: "%s | Grupo RF Engenharia",
  },
  description:
    "Especialistas em segurança do trabalho em altura. Ancoragem predial, linha de vida, construção metálica e locação de equipamentos. Atuando desde 2006 em todo o Brasil.",
  keywords: [
    "ancoragem predial",
    "linha de vida",
    "segurança em altura",
    "NR-35",
    "NR-18",
    "balancim elétrico",
    "elevador cremalheira",
    "construção metálica",
    "RF Engenharia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
