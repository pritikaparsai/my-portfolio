import { research } from "@/data/research";

export default function ResearchStats() {
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl bg-slate-900 p-8 text-center text-white">

        <h2 className="text-5xl font-black">
          {research.length}
        </h2>

        <p className="mt-3 text-slate-300">
          Research Papers
        </p>

      </div>

      <div className="rounded-2xl bg-blue-600 p-8 text-center text-white">

        <h2 className="text-5xl font-black">
          {new Set(research.flatMap((p) => p.tags)).size}
        </h2>

        <p className="mt-3">
          Research Topics
        </p>

      </div>

      <div className="rounded-2xl bg-indigo-600 p-8 text-center text-white">

        <h2 className="text-5xl font-black">
          {research[0]?.year}
        </h2>

        <p className="mt-3">
          Latest Publication
        </p>

      </div>

    </section>
  );
}