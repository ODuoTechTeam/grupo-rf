import type { ComponentType } from "react";
import { IconCircleCheck } from "@tabler/icons-react";

interface PackageItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

interface AdsPackageContentsProps {
  title: string;
  subtitle?: string;
  items: PackageItem[];
  footnote?: string;
}

export default function AdsPackageContents({
  title,
  subtitle,
  items,
  footnote,
}: AdsPackageContentsProps) {
  return (
    <section className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 p-5 md:p-6"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-pale border border-primary-medium/30 shrink-0">
                  <item.icon className="w-5 h-5 text-primary-medium" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-text-light leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
                <IconCircleCheck className="w-5 h-5 text-primary-medium shrink-0 mt-2.5" />
              </li>
            ))}
          </ul>
        </div>

        {footnote && (
          <p className="mt-4 text-sm text-text-light italic">{footnote}</p>
        )}
      </div>
    </section>
  );
}
