interface SpecGroup {
  heading: string;
  items: string[];
}

interface AdsTechSpecsProps {
  title: string;
  subtitle?: string;
  groups: SpecGroup[];
}

export default function AdsTechSpecs({
  title,
  subtitle,
  groups,
}: AdsTechSpecsProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.heading}
              className="p-6 rounded-2xl bg-white border border-gray-200"
            >
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-medium shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
