import { CalendarDays, FileText } from "lucide-react";

type Props = {
  title: string;
  year: string;
  tags: string[];
};

export default function ResearchHero({
  title,
  year,
  tags,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-10 py-20 text-white">

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10">

        <div className="flex items-center gap-2 text-blue-200">

          <FileText size={18} />

          Research Paper

        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight">
          {title}
        </h1>

        <div className="mt-6 flex items-center gap-2 text-blue-200">

          <CalendarDays size={18} />

          {year}

        </div>

        <div className="mt-8 flex flex-wrap gap-3">

          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}