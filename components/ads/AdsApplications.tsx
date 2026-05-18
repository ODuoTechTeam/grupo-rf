import type { ComponentType } from "react";

interface Application {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdsApplicationsProps {
  title: string;
  subtitle?: string;
  applications: Application[];
}

export default function AdsApplications({
  title,
  subtitle,
  applications,
}: AdsApplicationsProps) {
  return (
    <section className="py-20 bg-white">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.title}
              className="p-6 rounded-2xl bg-bg-surface border border-gray-200 hover:border-primary-medium/30 transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 mb-4">
                <app.icon className="w-7 h-7 text-primary-medium" />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                {app.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
