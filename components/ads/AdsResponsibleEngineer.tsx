import { IconUserCheck, IconCircleCheck, IconCertificate } from "@tabler/icons-react";
import { companyInfo } from "@/data/contact";

interface AdsResponsibleEngineerProps {
  title?: string;
  subtitle?: string;
}

export default function AdsResponsibleEngineer({
  title = "Responsável Técnico",
  subtitle = "Toda obra entregue pela RF tem assinatura, ART e responsabilidade técnica de um engenheiro registrado no CREA.",
}: AdsResponsibleEngineerProps) {
  const { name, crea, titles } = companyInfo.responsavelTecnico;

  return (
    <section className="py-20 bg-bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="shrink-0">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-pale border border-primary-medium/30">
                <IconUserCheck className="w-10 h-10 text-primary-medium" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                {name}
              </h3>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-medium/10 border border-primary-medium/20">
                <IconCertificate className="w-4 h-4 text-primary-medium" />
                <span className="text-sm font-semibold text-primary-medium">
                  CREA {crea}
                </span>
              </div>

              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                {titles.map((credential) => (
                  <li key={credential} className="flex items-start gap-2">
                    <IconCircleCheck className="w-4 h-4 text-primary-medium shrink-0 mt-0.5" />
                    <span className="text-sm text-text-light leading-relaxed">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
