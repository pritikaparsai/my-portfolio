type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}