type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "motion-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/60 focus:ring-offset-2 focus:ring-offset-background";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-electric to-cyan text-slate-950 shadow-lg shadow-cyan/20 hover:-translate-y-0.5 hover:shadow-cyan/35"
      : "border border-white/15 bg-white/[0.04] text-slate-50 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-white/[0.08]";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  );
}
