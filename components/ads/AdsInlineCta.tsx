import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsInlineCtaProps {
  title: string;
  description?: string;
  whatsappMessage: string;
  lpSlug: string;
  ctaLabel?: string;
}

export default function AdsInlineCta({
  title,
  description,
  whatsappMessage,
  lpSlug,
  ctaLabel = "Falar com especialista",
}: AdsInlineCtaProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-primary-medium/30 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              {title}
            </h3>
            {description && (
              <p className="mt-1.5 text-sm md:text-base text-text-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-cta="whatsapp"
              data-ads-lp={lpSlug}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-whatsapp text-white font-semibold hover:bg-whatsapp-dark transition-colors"
            >
              <IconBrandWhatsapp className="w-5 h-5" />
              {ctaLabel}
            </a>
            <a
              href={telHref}
              aria-label={`Ligar para ${contact.tollFree}`}
              data-ads-cta="phone"
              data-ads-lp={lpSlug}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-white transition-colors"
            >
              <IconPhone className="w-5 h-5" />
              {contact.tollFree}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
