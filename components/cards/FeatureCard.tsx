type IconType = React.ComponentType<{ className?: string }>;

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-medium/30 transition-all duration-500 relative overflow-hidden hover:shadow-lg">
      {/* Accent top border on hover */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-medium via-primary-light to-accent-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,98,217,0.06), transparent 70%)" }}
      />

      <div className="relative w-12 h-12 rounded-xl bg-primary-pale flex items-center justify-center mb-4 group-hover:bg-primary-medium group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary-medium group-hover:text-white transition-colors" />
      </div>
      <h3 className="relative font-semibold text-text-primary font-[family-name:var(--font-display)] mb-2">{title}</h3>
      <p className="relative text-sm text-text-light leading-relaxed">{description}</p>
    </div>
  );
}
