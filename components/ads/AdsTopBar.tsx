import Image from "next/image";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsTopBarProps {
  whatsappMessage: string;
  lpSlug: string;
}

export default function AdsTopBar({ whatsappMessage, lpSlug }: AdsTopBarProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo/logo-rf-engenharia.jpg"
            alt="Grupo RF Engenharia"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-ads-cta="whatsapp"
            data-ads-lp={lpSlug}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1fb855] transition-colors"
          >
            <IconBrandWhatsapp className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={telHref}
            data-ads-cta="phone"
            data-ads-lp={lpSlug}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            <IconPhone className="w-5 h-5" />
            {contact.tollFree}
          </a>
        </div>
      </div>
    </header>
  );
}
