import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  year: string;
  tags: string[];
  slug: string;
  thumbnail: string;
};

export default function ResearchCard({
  title,
  description,
  year,
  tags,
  slug,
}: Props) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <p className="text-sm font-semibold text-blue-600">
        {year}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/research/${slug}`}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4"
      >
        Read Research
        <ArrowRight size={18} />
      </Link>

    </article>
  );
}