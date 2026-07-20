import { experiences } from "@/data/experience";

export default function ExperienceStats() {
  const internships = experiences.length;

  const technologies = new Set(
    experiences.flatMap((item) => item.technologies)
  ).size;

  const contributions = experiences.reduce(
    (sum, item) => sum + item.achievements.length,
    0
  );

  return (
    <section className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl bg-blue-600 p-8 text-white">
        <h2 className="text-5xl font-bold">{internships}</h2>
        <p className="mt-3 text-lg">Professional Experiences</p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-8 text-white">
        <h2 className="text-5xl font-bold">{technologies}+</h2>
        <p className="mt-3 text-lg">Technologies Used</p>
      </div>

      <div className="rounded-3xl bg-emerald-600 p-8 text-white">
        <h2 className="text-5xl font-bold">{contributions}</h2>
        <p className="mt-3 text-lg">Key Contributions</p>
      </div>
    </section>
  );
}