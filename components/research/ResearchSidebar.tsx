import { CalendarDays, BookOpen, Download } from "lucide-react";

type Props = {
  year: string;
  pdf: string;
};

export default function ResearchSidebar({
  year,
  pdf,
}: Props) {
  return (
    <aside className="sticky top-24 rounded-3xl border bg-white p-8 shadow-sm">

      <h3 className="text-xl font-bold">
        Research Details
      </h3>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">

          <CalendarDays size={18} />

          <span>{year}</span>

        </div>

        <div className="flex items-center gap-3">

          <BookOpen size={18} />

          Economics Research

        </div>

      </div>

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
      >
        <Download size={18} />

        Download PDF

      </a>

    </aside>
  );
}