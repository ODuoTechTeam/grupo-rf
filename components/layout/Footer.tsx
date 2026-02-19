import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { offices, contact, companyInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      {/* CTA strip */}
      <div className="bg-primary-medium">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
              Precisa de uma solução em segurança?
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Entre em contato e solicite um orçamento sem compromisso.
            </p>
          </div>
          <a
            href={`https://wa.me/${contact.whatsapp}?text=Olá, gostaria de solicitar um orçamento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-primary-medium font-bold rounded-lg hover:bg-primary-pale transition-colors whitespace-nowrap"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo/logo-footer.png"
                alt="Grupo RF Engenharia"
                width={200}
                height={59}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Desde {companyInfo.since}, especialistas em segurança do trabalho
              em altura. Projetos, instalação e locação de equipamentos para
              construção civil.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-medium/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="w-4 h-4" />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-medium/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="w-4 h-4" />
              </a>
              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-medium/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin className="w-4 h-4" />
              </a>
              <a
                href={contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-medium/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <IconBrandYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RF Engenharia links */}
          <div>
            <h4 className="font-bold text-white mb-4">RF Engenharia</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/rf-engenharia/ancoragem-predial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ancoragem Predial
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-engenharia/linha-de-vida"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Linha de Vida
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-engenharia/construcao-metalica"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Construção Metálica
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-engenharia/treinamentos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Treinamentos
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-engenharia/projetos-laudos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos e Laudos
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-engenharia/produtos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produtos
                </Link>
              </li>
            </ul>
          </div>

          {/* RF Locação links */}
          <div>
            <h4 className="font-bold text-white mb-4">RF Locação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/rf-locacao/balancim-eletrico"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Balancim Elétrico
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-locacao/andaime-fachadeiro"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Andaime Fachadeiro
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-locacao/elevador-cremalheira"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Elevador Cremalheira
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-locacao/mini-grua"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mini-Grua
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-locacao/protecoes-coletivas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Proteções Coletivas
                </Link>
              </li>
              <li>
                <Link
                  href="/rf-locacao/cadeirinha-cabo-aco"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cadeirinha Cabo de Aço
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contact.tollFree.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-medium" />
                  {contact.tollFree}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emailEngenharia}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-medium" />
                  {contact.emailEngenharia}
                </a>
              </li>
              {offices.slice(0, 3).map((office) => (
                <li key={office.city} className="flex items-start gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-primary-medium mt-0.5 shrink-0" />
                  <span>
                    {office.city}/{office.state}
                    <br />
                    <span className="text-gray-500 text-xs">{office.address}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Grupo RF Engenharia. Todos os
            direitos reservados.
          </p>
          <p>
            CREA {companyInfo.creaEngenharia} | RT:{" "}
            {companyInfo.responsavelTecnico.name} - CREA{" "}
            {companyInfo.responsavelTecnico.crea}
          </p>
        </div>
      </div>
    </footer>
  );
}
