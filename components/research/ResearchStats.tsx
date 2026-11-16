import { research } from "@/data/research";

export default function ResearchStats() {
  return (
    <section className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl bg-slate-900 p-8 text-center text-white">

        <h2 className="text-5xl font-black">
          {research.length}
        </h2>

        <p className="mt-3 text-slate-300">
          Research Papers
        </p>

      </div>

      <div className="rounded-2xl bg-emerald-600 p-8 text-center text-white">
        <h2 className="text-5xl font-black">
          {research.filter((paper) => paper.status === "Ongoing").length}
        </h2>
        <p className="mt-3">Ongoing Research</p>
      </div>

      <div className="rounded-2xl bg-blue-600 p-8 text-center text-white">

        <h2 className="text-5xl font-black">
          4
        </h2>

        <p className="mt-3">
          Research Topics
        </p>

      </div>

      <div className="rounded-2xl bg-indigo-600 p-8 text-center text-white">

        <h2 className="text-5xl font-black">
          2026
        </h2>

        <p className="mt-3">
          Latest Research
        </p>

      </div>

    </section>
  );
}
