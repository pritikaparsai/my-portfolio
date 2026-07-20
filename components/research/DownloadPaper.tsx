import { Download } from "lucide-react";

type Props = {
  pdf: string;
};

export default function DownloadPaper({
  pdf,
}: Props) {
  return (
    <section className="mt-24 rounded-3xl bg-slate-900 p-10 text-center text-white">

      <h2 className="text-3xl font-bold">
        Interested in reading the full paper?
      </h2>

      <p className="mt-4 text-gray-300">
        Download the complete research paper in PDF format.
      </p>

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
      >
        <Download size={20} />
        Download Full Paper
      </a>

    </section>
  );
}