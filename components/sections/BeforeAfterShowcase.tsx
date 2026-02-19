"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

interface ShowcaseItem {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  stats?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Ancoragem Predial — Shopping Conjunto Nacional",
    description:
      "Instalação de 378 pontos de ancoragem para reforma de fachada. Sistema completo com linha de vida horizontal e pontos tipo A e B.",
    beforeImage: "/images/services/ancoragem-hero.jpg",
    afterImage: "/images/services/ancoragem-predial.jpg",
    beforeLabel: "Fachada sem proteção",
    afterLabel: "Com sistema de ancoragem",
    stats: "378 pontos instalados",
  },
  {
    title: "Linha de Vida — Galpão Industrial Heineken",
    description:
      "Projeto e instalação de linha de vida horizontal para substituição de telhado. Sistema permite trânsito seguro em toda a cobertura.",
    beforeImage: "/images/services/construcao-metalica.jpg",
    afterImage: "/images/services/linha-de-vida-galpao.jpg",
    beforeLabel: "Cobertura sem proteção",
    afterLabel: "Com linha de vida",
    stats: "3.200m de cabo instalados",
  },
  {
    title: "Sistema de Segurança — TCU Brasília",
    description:
      "1.480m de linha de vida + 423 pontos de ancoragem instalados nos Edifícios Sede e Anexos I, II e III do Tribunal de Contas da União.",
    beforeImage: "/images/services/linha-de-vida-hero.jpg",
    afterImage: "/images/services/linha-de-vida-predial.jpeg",
    beforeLabel: "Edifício sem sistema",
    afterLabel: "Proteção completa",
    stats: "1.480m de linha de vida",
  },
];

export default function BeforeAfterShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const active = showcaseItems[activeIndex];

  return (
    <div ref={ref}>
      {/* Thumbnail selector */}
      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: "none" }}>
        {showcaseItems.map((item, i) => (
          <motion.button
            key={item.title}
            onClick={() => setActiveIndex(i)}
            className={`shrink-0 px-5 py-3 rounded-xl text-left transition-all cursor-pointer border ${
              i === activeIndex
                ? "bg-white border-primary-medium/30 shadow-md"
                : "bg-white/50 border-gray-100 hover:bg-white hover:border-gray-200"
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-primary-medium mb-0.5">
              Projeto {String(i + 1).padStart(2, "0")}
            </div>
            <div
              className={`text-sm font-semibold font-[family-name:var(--font-display)] transition-colors ${
                i === activeIndex ? "text-gray-900" : "text-text-light"
              }`}
            >
              {item.title.split("—")[0].trim()}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Active comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3">
          <BeforeAfterSlider
            beforeImage={active.beforeImage}
            afterImage={active.afterImage}
            beforeLabel={active.beforeLabel}
            afterLabel={active.afterLabel}
            height={420}
          />
        </div>

        <motion.div
          key={activeIndex}
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-xs font-bold text-accent-warm uppercase tracking-wider mb-2">
            Projeto {String(activeIndex + 1).padStart(2, "0")} / {String(showcaseItems.length).padStart(2, "0")}
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
            {active.title}
          </h3>
          <p className="text-text-light leading-relaxed mb-6">
            {active.description}
          </p>

          {active.stats && (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-pale border border-primary-medium/20">
              <div className="w-2 h-2 rounded-full bg-primary-medium" />
              <span className="text-sm font-bold text-primary-medium">
                {active.stats}
              </span>
            </div>
          )}

          {/* Instruction hint */}
          <div className="mt-6 flex items-center gap-2 text-xs text-text-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3-3 3 3m-6 6l3 3 3-3" />
            </svg>
            Arraste o controle para comparar antes e depois
          </div>
        </motion.div>
      </div>
    </div>
  );
}
