import type { ComponentType } from "react";

interface Benefit {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsBenefitsGridProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

export default function AdsBenefitsGrid({
  title,
  subtitle,
  benefits,
}: AdsBenefitsGridProps) {
  return (
    <section className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary-medium/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-4">
                <benefit.icon className="w-6 h-6 text-primary-medium" />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
