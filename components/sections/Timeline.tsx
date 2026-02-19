"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TimelineProps {
  milestones: Milestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -280 : 280;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div ref={sectionRef} className="relative">
      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary-pale hover:border-primary-medium/30 transition-all cursor-pointer"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary-pale hover:border-primary-medium/30 transition-all cursor-pointer"
          aria-label="Próximo"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}

      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-bg-surface to-transparent z-[5] pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-bg-surface to-transparent z-[5] pointer-events-none" />

      {/* Scrollable timeline */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative flex items-start gap-0 min-w-max py-8">
          {/* Connector line */}
          <div className="absolute top-[52px] left-6 right-6 h-[3px] bg-gray-200 rounded-full" />
          <motion.div
            className="absolute top-[52px] left-6 h-[3px] rounded-full bg-gradient-to-r from-primary-medium to-accent-warm"
            initial={{ width: 0 }}
            animate={isInView ? {
              width: `${((activeIndex + 1) / milestones.length) * 100}%`,
            } : { width: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          />

          {milestones.map((milestone, index) => {
            const isActive = index === activeIndex;
            const isPast = index <= activeIndex;

            return (
              <motion.div
                key={milestone.year}
                className="relative flex flex-col items-center w-[240px] shrink-0 cursor-pointer group"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Year badge */}
                <motion.div
                  className={`mb-4 px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-primary-medium text-white shadow-lg shadow-primary-medium/25"
                      : isPast
                        ? "bg-primary-pale text-primary-medium border border-primary-medium/20"
                        : "bg-gray-100 text-text-light border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {milestone.year}
                </motion.div>

                {/* Dot */}
                <div className="relative mb-6">
                  <div
                    className={`w-4 h-4 rounded-full border-[3px] transition-all duration-300 ${
                      isActive
                        ? "border-primary-medium bg-white scale-125"
                        : isPast
                          ? "border-primary-medium/50 bg-primary-pale"
                          : "border-gray-300 bg-white"
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-primary-medium/30"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className={`px-5 py-4 rounded-xl text-center transition-all duration-300 max-w-[220px] ${
                    isActive
                      ? "bg-white shadow-lg border border-primary-medium/20"
                      : "bg-transparent group-hover:bg-white/60"
                  }`}
                  layout
                >
                  <h4
                    className={`text-sm font-bold font-[family-name:var(--font-display)] mb-1.5 transition-colors ${
                      isActive ? "text-primary-medium" : "text-gray-900 group-hover:text-primary-medium"
                    }`}
                  >
                    {milestone.title}
                  </h4>
                  <motion.p
                    className="text-xs text-text-light leading-relaxed"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0.6, height: isActive ? "auto" : "2.5em" }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    {milestone.description}
                  </motion.p>
                  {milestone.highlight && isActive && (
                    <motion.div
                      className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-accent-warm/10 text-accent-warm text-[10px] font-bold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      Marco importante
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
