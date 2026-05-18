import type { ComponentType } from "react";

interface Pain {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsPainTriggerProps {
  title: string;
  pains: Pain[];
}

export default function AdsPainTrigger({ title, pains }: AdsPainTriggerProps) {
  return (
    <section className="py-14 bg-bg-darkest border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 max-w-3xl">
          {title}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="p-5 rounded-xl bg-white border border-red-200/60 shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 border border-red-100 mb-3">
                <pain.icon className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                {pain.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
