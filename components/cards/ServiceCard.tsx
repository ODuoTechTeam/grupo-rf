import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  features?: string[];
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  features,
  image,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden border border-gray-100 hover:border-primary-medium/30"
    >
      {image && (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover card-image-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Reveal overlay on hover */}
          <div className="card-reveal-overlay absolute inset-0 bg-primary/90 flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-white" />
              </div>
              {features && features.length > 0 && (
                <ul className="space-y-1.5">
                  {features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-white/90">
                      <div className="w-1 h-1 rounded-full bg-accent-warm-light shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <Icon className="w-5 h-5 text-primary-medium" />
          </div>
        </div>
      )}

      <div className="p-6 relative">
        {!image && (
          <div className="w-12 h-12 rounded-xl bg-primary-pale flex items-center justify-center mb-4 group-hover:bg-primary-medium group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary-medium group-hover:text-white transition-colors" />
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

        {features && features.length > 0 && !image && (
          <ul className="space-y-1.5 mb-4">
            {features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-text-light"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent-warm" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-1.5 text-sm font-medium text-primary-medium group-hover:gap-3 transition-all">
          Saiba mais
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
