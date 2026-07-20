import PortfolioCard from "./PortfolioCard";
import type { PortfolioItem } from "@/data/portfolio";

type CategorySectionProps = {
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
};

export default function CategorySection({
  title,
  subtitle,
  items,
}: CategorySectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            {subtitle}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="h-1 w-20 rounded-full bg-blue-600" />

          <p className="hidden text-sm font-medium text-slate-500 md:block">
            {items.length} {items.length === 1 ? "Project" : "Projects"}
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}