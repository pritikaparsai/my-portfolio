import type { SemesterCoursework } from "@/data/education";

type Props = {
  coursework: SemesterCoursework[];
};

export default function Coursework({
  coursework,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Relevant Coursework
      </h2>

      <div className="mt-8 space-y-10">
        {coursework.map(({ semester, courses }) => (
          <section key={semester} aria-labelledby={`semester-${semester}`}>
            <h3 id={`semester-${semester}`} className="mb-4 text-xl font-semibold text-slate-900">
              Semester {semester}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm"
                >
                  <span>{course.title}</span>
                  <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    {course.credits === null || course.credits === "Non-credit"
                      ? "Non-credit"
                      : course.credits === undefined
                        ? "Credit not listed"
                        : `${course.credits} ${course.credits === 1 ? "credit" : "credits"}`}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </section>
  );
}
