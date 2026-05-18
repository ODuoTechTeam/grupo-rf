import type { ComponentType } from "react";

interface CrossSellItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsCrossSellingProps {
  title: string;
  subtitle?: string;
  items: CrossSellItem[];
}

export default function AdsCrossSelling({
  title,
  subtitle,
  items,
}: AdsCrossSellingProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-pale text-primary-medium border border-primary-medium/30">
            Geralmente contratado junto
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-bg-surface border border-gray-200 hover:border-primary-medium/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-medium/10 border border-primary-medium/20 mb-3">
                <item.icon className="w-5 h-5 text-primary-medium" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
