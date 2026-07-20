import { portfolio } from "@/data/portfolio";
import {
  FolderKanban,
  Layers3,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function PortfolioStats() {
  const totalProjects = portfolio.length;

  const totalCategories = new Set(
    portfolio.map((item) => item.category)
  ).size;

  const researchProjects = portfolio.filter(
    (item) => item.category === "Research"
  ).length;

  const completedProjects = portfolio.filter(
    (item) => item.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Portfolio Items",
      value: totalProjects,
      icon: FolderKanban,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: Layers3,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Research Papers",
      value: researchProjects,
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Completed Projects",
      value: completedProjects,
      icon: Briefcase,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg}`}
                >
                  <Icon
                    size={28}
                    className={stat.color}
                  />
                </div>

                <h3 className="text-4xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}