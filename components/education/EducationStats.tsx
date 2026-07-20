import { education } from "@/data/education";

export default function EducationStats() {
  const school = education[0];

  return (
    <section className="grid gap-6 md:grid-cols-4">

      <div className="rounded-3xl bg-blue-600 p-8 text-white">
        <h2 className="text-5xl font-bold">1</h2>
        <p className="mt-3">Degree</p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-8 text-white">
        <h2 className="text-5xl font-bold">
          {school.coursework?.length ?? 0}
        </h2>
        <p className="mt-3">Core Subjects</p>
      </div>

      <div className="rounded-3xl bg-emerald-600 p-8 text-white">
        <h2 className="text-5xl font-bold">
          {school.achievements?.length ?? 0}
        </h2>
        <p className="mt-3">Academic Highlights</p>
      </div>

      <div className="rounded-3xl bg-purple-600 p-8 text-white">
        <h2 className="text-5xl font-bold">2027</h2>
        <p className="mt-3">Expected Graduation</p>
      </div>

    </section>
  );
}