import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsStickyMobileCtaProps {
  whatsappMessage: string;
  lpSlug: string;
}

export default function AdsStickyMobileCta({
  whatsappMessage,
  lpSlug,
}: AdsStickyMobileCtaProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-ads-cta="whatsapp"
        data-ads-lp={lpSlug}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-whatsapp text-white font-bold text-base"
      >
        <IconBrandWhatsapp className="w-6 h-6" />
        Falar no WhatsApp
      </a>
    </div>
  );
}
