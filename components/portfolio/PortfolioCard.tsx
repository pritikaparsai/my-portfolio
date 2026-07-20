import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

import { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({
  item,
}: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <div className="mb-4 flex items-center justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {item.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              item.status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {item.status}
          </span>

        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />
          {item.year}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
          {item.overview}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/portfolio/${item.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

      </div>
    </article>
  );
}