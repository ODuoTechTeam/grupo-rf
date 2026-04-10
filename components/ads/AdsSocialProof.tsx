import Image from "next/image";

const CLIENTS = [
  { src: "/images/clients/cliente-bb.jpg", alt: "Banco do Brasil" },
  { src: "/images/clients/cliente-caixa.jpg", alt: "Caixa Econômica Federal" },
  { src: "/images/clients/cliente-sirio-libanes.jpg", alt: "Hospital Sírio-Libanês" },
  { src: "/images/clients/cliente-mrv.png", alt: "MRV" },
  { src: "/images/clients/cliente-odebrecht.jpg", alt: "Odebrecht" },
  { src: "/images/clients/cliente-tcu.jpg", alt: "TCU" },
  { src: "/images/clients/cliente-br.png", alt: "BR" },
  { src: "/images/clients/cliente-brasal.jpeg", alt: "Brasal" },
  { src: "/images/clients/cliente-cc.png", alt: "Conjunto Nacional" },
  { src: "/images/clients/cliente-emplavi.jpg", alt: "Emplavi" },
  { src: "/images/clients/cliente-jc.png", alt: "JCGontijo" },
  { src: "/images/clients/cliente-ministerio-economia.jpg", alt: "Ministério da Economia" },
  { src: "/images/clients/cliente-sabin.jpg", alt: "Sabin" },
  { src: "/images/clients/cliente-via.png", alt: "Via" },
];

export default function AdsSocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            Quem confia na RF Engenharia
          </h2>
          <p className="mt-3 text-text-light">
            Clientes que escolheram nossa engenharia para proteger suas obras e instalações.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.src}
              className="group flex items-center justify-center h-20 p-3 bg-white rounded-xl border border-gray-200"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
