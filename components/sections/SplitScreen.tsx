"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

const divisions = [
  {
    icon: IconShieldCheck,
    name: "RF Engenharia",
    tagline: "Segurança que protege vidas",
    description:
      "Projetos, fabricação e instalação de sistemas de segurança do trabalho em altura. Ancoragem predial, linha de vida, construção metálica e treinamentos.",
    highlights: [
      "Ancoragem Predial",
      "Linha de Vida",
      "Construção Metálica",
      "Treinamentos NR-35",
    ],
    href: "/rf-engenharia",
    image: "/images/ancoragem/ancoragem-01.jpg",
    accent: "from-primary/80 to-primary-medium/90",
    hoverAccent: "group-hover:from-primary/90 group-hover:to-primary-medium",
  },
  {
    icon: IconBuildingSkyscraper,
    name: "RF Locação",
    tagline: "Equipamentos para toda obra",
    description:
      "Locação de equipamentos para construção civil com montagem, manutenção, projeto e treinamento. Balancins, andaimes, elevadores e proteções.",
    highlights: [
      "Balancim Elétrico",
      "Andaime Fachadeiro",
      "Elevador Cremalheira",
      "Proteções Coletivas",
    ],
    href: "/rf-locacao",
    image: "/images/balancim/balancim-01.jpg",
    accent: "from-accent-warm/80 to-accent-warm-light/90",
    hoverAccent: "group-hover:from-accent-warm/90 group-hover:to-accent-warm-light",
  },
];

export default function SplitScreen() {
  return (
    <section className="py-20 bg-bg-darkest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary-pale border border-primary-medium/20">
            <span className="text-sm font-medium text-primary-medium">
              Duas Empresas, Uma Missão
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-text-primary">
            Conheça Nossas Divisões
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {divisions.map((div, index) => {
            const Icon = div.icon;
            return (
              <Link
                key={div.name}
                href={div.href}
                className="group relative block rounded-2xl overflow-hidden h-full min-h-[400px]"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={div.image}
                    alt={div.name}
                    fill
                    className={`object-cover ${index === 1 ? "object-center" : ""} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${div.accent} ${div.hoverAccent} transition-all duration-500`}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white">
                          {div.name}
                        </h3>
                        <p className="text-sm text-white/70">{div.tagline}</p>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-md">
                      {div.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {div.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                      Conhecer {div.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
