"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contact } from "@/data/contact";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
}

export default function CTASection({
  title = "Pronto para garantir a segurança da sua obra?",
  description = "Entre em contato com nossos especialistas e solicite um orçamento personalizado.",
  primaryLabel = "Solicitar Orçamento",
  primaryHref,
  showPhone = true,
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=Olá, gostaria de solicitar um orçamento.`;

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-primary via-primary-medium to-primary-light relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
          <motion.a
            href={primaryHref || whatsappHref}
            target={primaryHref ? undefined : "_blank"}
            rel={primaryHref ? undefined : "noopener noreferrer"}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-medium font-bold rounded-lg hover:bg-primary-pale transition-colors text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            {primaryLabel}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          {showPhone && (
            <motion.a
              href={`tel:${contact.tollFree.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              {contact.tollFree}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
