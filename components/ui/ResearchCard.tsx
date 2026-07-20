import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  thumbnail: string;
};

export default function ResearchCard({
  slug,
  title,
  description,
  year,
  tags,
  thumbnail,
}: Props) {
  return (
    <Link
      href={`/research/${slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <p className="text-sm font-semibold text-blue-600">{year}</p>

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
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4">
          Read Research
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}