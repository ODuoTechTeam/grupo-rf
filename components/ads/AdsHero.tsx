"use client";

import Image from "next/image";
import { IconBrandWhatsapp, IconPhone, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  whatsappMessage: string;
  heroImage: string;
  heroImageAlt: string;
  lpSlug: string;
  ctaLabel?: string;
}

const FILIAIS = ["Brasília", "Goiânia", "São Paulo"];

export default function AdsHero({
  badge,
  title,
  subtitle,
  whatsappMessage,
  heroImage,
  heroImageAlt,
  lpSlug,
  ctaLabel = "Falar com especialista",
}: AdsHeroProps) {
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <section className="pt-10 pb-16 bg-bg-darkest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-pale text-primary-medium border border-primary-medium/30">
              {badge}
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="mt-5 text-lg text-text-light max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-ads-cta="whatsapp"
                data-ads-lp={lpSlug}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-whatsapp text-white font-bold text-lg hover:bg-whatsapp-dark transition-colors shadow-lg"
              >
                <IconBrandWhatsapp className="w-6 h-6" />
                {ctaLabel}
              </a>
              <a
                href={telHref}
                aria-label={`Ligar para ${contact.tollFree}`}
                data-ads-cta="phone"
                data-ads-lp={lpSlug}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 border-gray-300 text-gray-800 font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                <IconPhone className="w-5 h-5" />
                {contact.tollFree}
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-text-light/70 mb-3">
                Filiais próprias em:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {FILIAIS.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-300"
                  >
                    <IconMapPin className="w-4 h-4 text-primary-medium" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
