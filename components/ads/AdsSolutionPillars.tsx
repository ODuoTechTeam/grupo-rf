import type { ComponentType } from "react";

interface Pillar {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsSolutionPillarsProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
}

export default function AdsSolutionPillars({
  title,
  subtitle,
  pillars,
}: AdsSolutionPillarsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative p-6 rounded-2xl bg-bg-surface border border-gray-200"
            >
              <span className="absolute top-4 right-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-medium/10 text-primary-medium text-xs font-bold">
                {index + 1}
              </span>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-4">
                <pillar.icon className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
