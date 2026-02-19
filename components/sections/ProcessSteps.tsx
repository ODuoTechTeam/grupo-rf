"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type IconType = React.ComponentType<{ className?: string }>;

interface Step {
  icon: IconType;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  description?: string;
  steps: Step[];
}

export default function ProcessSteps({
  title = "Nosso Processo",
  description,
  steps,
}: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 bg-bg-darkest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary font-[family-name:var(--font-display)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              className="text-text-light text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        <div ref={ref} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Step selector — vertical on desktop, horizontal scroll on mobile */}
          <div className="lg:w-[340px] shrink-0">
            {/* Mobile: horizontal scrollable pills */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                return (
                  <motion.button
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary-medium text-white shadow-md shadow-primary-medium/20"
                        : isPast
                          ? "bg-primary-pale text-primary-medium border border-primary-medium/20"
                          : "bg-white text-text-light border border-gray-200"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.06 }}
                  >
                    <StepIcon className="w-4 h-4" />
                    <span className="whitespace-nowrap">{step.title}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop: vertical step list with connector */}
            <div className="hidden lg:flex flex-col relative">
              {/* Vertical connector line */}
              <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gray-200 rounded-full" />
              <motion.div
                className="absolute left-[23px] top-6 w-[2px] rounded-full bg-gradient-to-b from-primary-medium to-accent-warm"
                initial={{ height: 0 }}
                animate={isInView ? {
                  height: `${(activeStep / Math.max(steps.length - 1, 1)) * 100}%`,
                } : { height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              />

              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <motion.button
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all cursor-pointer group ${
                      isActive ? "bg-white shadow-md" : "hover:bg-white/50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    {/* Step number circle */}
                    <div
                      className={`relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-primary-medium text-white shadow-lg shadow-primary-medium/25"
                          : isPast
                            ? "bg-primary-pale text-primary-medium border-2 border-primary-medium/30"
                            : "bg-gray-100 text-text-light border-2 border-gray-200 group-hover:border-primary-medium/20"
                      }`}
                    >
                      {isActive ? (
                        <StepIcon className="w-5 h-5" />
                      ) : isPast ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        String(index + 1).padStart(2, "0")
                      )}
                    </div>

                    {/* Step label */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-medium">
                        Etapa {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`font-semibold font-[family-name:var(--font-display)] transition-colors ${
                          isActive ? "text-primary-medium" : "text-text-primary group-hover:text-primary-medium"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute right-3 w-2 h-2 rounded-full bg-primary-medium"
                        layoutId="activeStepDot"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active step detail panel */}
          <div className="flex-1 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-sm h-full"
              >
                {(() => {
                  const step = steps[activeStep];
                  const StepIcon = step.icon;
                  return (
                    <>
                      {/* Progress bar */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary-medium to-accent-warm"
                            initial={{ width: 0 }}
                            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <span className="text-xs font-bold text-text-medium whitespace-nowrap">
                          {activeStep + 1} / {steps.length}
                        </span>
                      </div>

                      {/* Icon + content */}
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-medium to-primary-light flex items-center justify-center shadow-lg shadow-primary-medium/15">
                          <StepIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-accent-warm uppercase tracking-wider mb-1">
                            Etapa {String(activeStep + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-text-light leading-relaxed text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveStep(Math.max(0, activeStep - 1)); }}
                          disabled={activeStep === 0}
                          className="flex items-center gap-2 text-sm font-medium text-text-light hover:text-primary-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                          Anterior
                        </button>
                        <div className="flex gap-1.5">
                          {steps.map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => { e.stopPropagation(); setActiveStep(i); }}
                              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                i === activeStep
                                  ? "bg-primary-medium w-6"
                                  : i < activeStep
                                    ? "bg-primary-medium/40"
                                    : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveStep(Math.min(steps.length - 1, activeStep + 1)); }}
                          disabled={activeStep === steps.length - 1}
                          className="flex items-center gap-2 text-sm font-medium text-text-light hover:text-primary-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          Próxima
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
