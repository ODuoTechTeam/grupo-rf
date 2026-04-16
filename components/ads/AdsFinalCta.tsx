"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { contact } from "@/data/contact";
import { buildWhatsAppHref } from "./whatsapp";

interface AdsFinalCtaProps {
  title: string;
  description: string;
  whatsappMessage: string;
  lpSlug: string;
  ctaLabel?: string;
}

export default function AdsFinalCta({
  title,
  description,
  whatsappMessage,
  lpSlug,
  ctaLabel = "Quero orçamento completo",
}: AdsFinalCtaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const whatsappHref = buildWhatsAppHref(whatsappMessage);
  const telHref = `tel:${contact.tollFree.replace(/\s/g, "")}`;

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-primary via-primary-medium to-primary-light relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-ads-cta="whatsapp"
            data-ads-lp={lpSlug}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white font-bold rounded-lg hover:bg-whatsapp-dark transition-colors text-lg shadow-lg"
          >
            <IconBrandWhatsapp className="w-6 h-6" />
            {ctaLabel}
          </a>
          <a
            href={telHref}
            aria-label={`Ligar para ${contact.tollFree}`}
            data-ads-cta="phone"
            data-ads-lp={lpSlug}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            <IconPhone className="w-5 h-5" />
            {contact.tollFree}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
