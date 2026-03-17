import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

interface EquipmentCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  badge?: string;
  features?: string[];
  image?: string;
}

export default function EquipmentCard({
  title,
  description,
  icon: Icon,
  href,
  badge,
  features,
  image,
}: EquipmentCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden border border-gray-100 hover:border-primary-medium/30"
    >
      {badge && (
        <span className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-bold bg-accent-warm rounded-full text-white shadow-sm">
          {badge}
        </span>
      )}

      {image && (
        <div className="relative h-44 md:h-52 overflow-hidden bg-bg-surface">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover card-image-zoom"
          />

          {/* Reveal overlay on hover */}
          <div className="card-reveal-overlay absolute inset-0 bg-primary/90 flex items-center justify-center p-4">
            <div className="text-center">
              {features && features.length > 0 && (
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/90">
                      <div className="w-1 h-1 rounded-full bg-accent-warm-light shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="p-6">
        {!image && (
          <div className="w-16 h-16 rounded-xl bg-primary-pale flex items-center justify-center mb-4 group-hover:bg-primary-medium group-hover:scale-110 transition-all duration-300">
            <Icon className="w-8 h-8 text-primary-medium group-hover:text-white transition-colors" />
          </div>
        )}

        <div className="relative accent-line pb-0.5">
          <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-display)] mb-2 group-hover:text-primary-medium transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-sm text-text-light leading-relaxed mb-4">
          {description}
        </p>

        {features && !image && (
          <div className="flex flex-wrap gap-2 mb-4">
            {features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="px-2.5 py-1 text-xs bg-bg-surface rounded-lg text-text-light"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-sm font-medium text-primary-medium group-hover:gap-3 transition-all">
          Ver detalhes
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
