"use client";

import { ArrowRight } from "lucide-react";
import { IconShieldCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { TextReveal, FadeIn, FloatingElement, GlowPulse } from "@/components/ui/Animations";

interface HeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  showStats?: boolean;
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
}

export default function Hero({
  badge,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  showStats = false,
  image,
  imageAlt = "Grupo RF Engenharia",
  video,
  videoPoster,
}: HeroProps) {
  const isVideoHero = !!video;

  return (
    <section className={`relative overflow-hidden ${isVideoHero ? "pt-32 pb-20 md:pt-40 md:pb-28 min-h-[85vh] flex items-center" : "pt-32 pb-20 md:pt-40 md:pb-28"}`}>
      {/* Video or static background */}
      {isVideoHero ? (
        <>
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={videoPoster || image}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
            {/* Animated grain texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
          </div>
        </>
      ) : (
        <>
          {/* Original static background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-pale/40 via-white to-white" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-medium/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <FloatingElement
                key={i}
                duration={4 + i * 2}
                distance={20 + i * 10}
                className={`absolute w-2 h-2 rounded-full bg-primary-medium/10`}
              >
                <div
                  className="w-full h-full rounded-full bg-primary-medium/15"
                  style={{
                    left: `${15 + i * 18}%`,
                    top: `${20 + i * 12}%`,
                  }}
                />
              </FloatingElement>
            ))}
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${image && !isVideoHero ? "lg:flex-row lg:items-center lg:gap-16" : ""}`}>
          {/* Text content */}
          <div className={image && !isVideoHero ? "lg:flex-1 lg:max-w-xl" : isVideoHero ? "max-w-2xl" : "max-w-3xl"}>
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full ${isVideoHero ? "bg-white/10 border border-white/20 backdrop-blur-sm" : "bg-primary-pale border border-primary-medium/15"}`}
              >
                <IconShieldCheck className={`w-4 h-4 ${isVideoHero ? "text-white" : "text-primary-medium"}`} />
                <span className={`text-sm font-medium ${isVideoHero ? "text-white" : "text-primary-medium"}`}>
                  {badge}
                </span>
              </motion.div>
            )}

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-[family-name:var(--font-display)] ${isVideoHero ? "text-white" : "text-text-primary"}`}>
              <TextReveal text={title} delay={0.3} />
              {highlight && (
                <>
                  {" "}
                  <motion.span
                    className={`${isVideoHero ? "text-accent-warm-light" : "text-transparent bg-clip-text bg-gradient-to-r from-primary-medium to-primary-light"}`}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {highlight}
                  </motion.span>
                </>
              )}
            </h1>

            <FadeIn delay={0.6}>
              <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl ${isVideoHero ? "text-white/80" : "text-text-light"}`}>
                {description}
              </p>
            </FadeIn>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {primaryCTA && (
                <GlowPulse className="w-full sm:w-auto rounded-lg">
                  <Button href={primaryCTA.href} size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                    {primaryCTA.label}
                  </Button>
                </GlowPulse>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          </div>

          {/* Hero image (hidden in video mode) */}
          {image && !isVideoHero && (
            <motion.div
              className="lg:flex-1 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-medium/20 via-primary-pale to-transparent rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-medium/10">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
                {/* Accent corner decoration */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 border-2 border-primary-medium/20 rounded-xl" />
              </div>
            </motion.div>
          )}
        </div>

        {showStats && (
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "20+", label: "Anos de mercado" },
              { value: "500+", label: "Projetos realizados" },
              { value: "3", label: "Unidades no Brasil" },
              { value: "100%", label: "Conformidade" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`text-center p-4 md:p-6 rounded-xl ${isVideoHero ? "bg-white/10 backdrop-blur-sm border border-white/10" : "bg-white shadow-sm"}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + i * 0.15,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(65, 105, 225, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${isVideoHero ? "text-white" : "text-primary-medium"}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isVideoHero ? "text-white/60" : "text-text-light"}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
