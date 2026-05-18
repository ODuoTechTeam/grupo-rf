import { IconScale, IconAlertTriangle, IconCircleCheck } from "@tabler/icons-react";

interface AdsLegalLiabilityProps {
  title?: string;
  body: string;
  bullets?: string[];
  callout?: string;
}

export default function AdsLegalLiability({
  title = "Responsabilidade Solidária — NR-18",
  body,
  bullets,
  callout,
}: AdsLegalLiabilityProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-8 md:p-10 rounded-2xl bg-bg-surface border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 shrink-0">
              <IconScale className="w-6 h-6 text-amber-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
                {title}
              </h2>
              <p className="text-base text-text-light leading-relaxed">
                {body}
              </p>

              {bullets && bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-primary-medium shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {callout && (
                <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <IconAlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 font-medium leading-relaxed">
                    {callout}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
