import Link from "next/link";

type PortfolioCardProps = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function PortfolioCard({
  slug,
  title,
  description,
  technologies,
}: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <div className="group h-full cursor-pointer rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 leading-7 text-gray-600">
          {description}
        </p>

        <p className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-1">
          View Project →
        </p>

      </div>
    </Link>
  );
}
