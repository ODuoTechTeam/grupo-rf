import Link from "next/link";
import { contact, offices, companyInfo } from "@/data/contact";

export default function AdsFooter() {
  return (
    <footer className="bg-footer-bg text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
        <div className="space-y-1">
          <p className="text-gray-200 font-semibold">
            {companyInfo.name} · CNPJ {companyInfo.cnpj}
          </p>
          <p>
            CREA-DF {companyInfo.creaEngenharia} · CREA-DF {companyInfo.creaLocacao} ·{" "}
            {companyInfo.responsavelTecnico.name} — CREA{" "}
            {companyInfo.responsavelTecnico.crea}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div key={office.city} className="space-y-1">
              <p className="text-gray-200 font-semibold">
                {office.city} / {office.state}
              </p>
              {office.address && <p>{office.address}</p>}
              {office.cep && <p>CEP {office.cep}</p>}
              <p>{office.phones.join(" · ")}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>
            {contact.tollFree} · {contact.emailEngenharia}
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} {companyInfo.name} ·{" "}
            <Link
              href="/lp/politica-de-privacidade"
              className="underline hover:text-gray-200"
            >
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
