type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <span className="section-label animate-textLift">{eyebrow}</span>
      <h2 className="mt-5 animate-textLift text-3xl font-bold leading-[0.98] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="animation-delay-200 mt-4 animate-textLift text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
