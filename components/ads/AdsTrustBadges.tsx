import { IconCircleCheck } from "@tabler/icons-react";
import { companyInfo } from "@/data/contact";

const BADGES = [
  `CREA-DF ${companyInfo.creaEngenharia}`,
  `CREA-DF ${companyInfo.creaLocacao}`,
  "NR-18",
  "NR-35",
  "ART Inclusa",
  "Laudo Técnico",
  `${companyInfo.responsavelTecnico.name} — CREA ${companyInfo.responsavelTecnico.crea}`,
];

export default function AdsTrustBadges() {
  return (
    <section className="py-10 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-medium/10 text-primary-medium border border-primary-medium/20"
            >
              <IconCircleCheck className="w-3.5 h-3.5" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
