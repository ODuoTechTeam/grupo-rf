type IconType = React.ComponentType<{ className?: string }>;

interface IconBoxProps {
  icon: IconType;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function IconBox({
  icon: Icon,
  size = "md",
  className = "",
}: IconBoxProps) {
  const sizes = {
    sm: "w-10 h-10 p-2",
    md: "w-14 h-14 p-3",
    lg: "w-18 h-18 p-4",
  };

  return (
    <div
      className={`${sizes[size]} rounded-xl bg-primary-pale flex items-center justify-center ${className}`}
    >
      <Icon className="w-full h-full text-primary-medium" />
    </div>
  );
}
