import { education } from "@/data/education";

export default function EducationStats() {
  const school = education[0];

  return (
    <section className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl bg-slate-900 p-8 text-white">
        <h2 className="text-5xl font-bold">
          {(school.coursework ?? []).reduce((total, semester) => total + semester.courses.length, 0)}
        </h2>
        <p className="mt-3">Core Subjects</p>
      </div>

      <div className="rounded-3xl bg-emerald-600 p-8 text-white">
        <h2 className="text-5xl font-bold">
          {(school.achievements ?? []).length}
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
