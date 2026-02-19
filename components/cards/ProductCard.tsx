import Link from "next/link";
import { ArrowRight } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

interface ProductCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

export default function ProductCard({
  title,
  description,
  icon: Icon,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-pale flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-primary-medium" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text-primary font-[family-name:var(--font-display)] mb-1 group-hover:text-primary-medium transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-light leading-relaxed">{description}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-text-medium group-hover:text-primary-medium group-hover:translate-x-1 transition-all shrink-0 mt-1" />
    </Link>
  );
}
