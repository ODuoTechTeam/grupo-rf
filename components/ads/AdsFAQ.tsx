import { IconChevronDown } from "@tabler/icons-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface AdsFAQProps {
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

export default function AdsFAQ({ title, subtitle, items }: AdsFAQProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group p-5 rounded-xl bg-bg-surface border border-gray-200 hover:border-primary-medium/30 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <IconChevronDown className="w-5 h-5 text-primary-medium shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-sm text-text-light leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
