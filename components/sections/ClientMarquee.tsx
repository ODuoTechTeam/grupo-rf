"use client";

import Image from "next/image";

interface ClientLogo {
  name: string;
  logo: string;
}

const clients: ClientLogo[] = [
  { name: "Banco do Brasil", logo: "/images/clients/cliente-bb.jpg" },
  { name: "Caixa Econômica", logo: "/images/clients/cliente-caixa.jpg" },
  { name: "TCU", logo: "/images/clients/cliente-tcu.jpg" },
  { name: "MRV", logo: "/images/clients/cliente-mrv.png" },
  { name: "Brasal", logo: "/images/clients/cliente-brasal.jpeg" },
  { name: "Odebrecht", logo: "/images/clients/cliente-odebrecht.jpg" },
  { name: "Hospital Sírio-Libanês", logo: "/images/clients/cliente-sirio-libanes.jpg" },
  { name: "Laboratório Sabin", logo: "/images/clients/cliente-sabin.jpg" },
  { name: "Emplavi", logo: "/images/clients/cliente-emplavi.jpg" },
  { name: "Ministério da Economia", logo: "/images/clients/cliente-ministerio-economia.jpg" },
];

export default function ClientMarquee() {
  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="py-14 bg-bg-darkest overflow-hidden relative">
      {/* Gradient masks */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-8 px-6">
        <p className="text-sm font-semibold text-text-medium uppercase tracking-widest">
          Empresas que confiam no Grupo RF
        </p>
      </div>

      <div className="flex animate-marquee" style={{ width: "fit-content" }}>
        {allClients.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center px-6 py-4 h-20 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/20 transition-all hover:shadow-md"
            style={{ minWidth: "160px" }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={50}
              className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
