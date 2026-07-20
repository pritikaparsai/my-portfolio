import SectionHeading from "../ui/SectionHeading";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "R", "Java", "HTML", "CSS"],
  },
  {
    title: "Data Analytics",
    skills: ["Excel", "Tableau", "Power BI", "Pandas", "NumPy"],
  },
  {
    title: "Economics & Research",
    skills: [
      "Econometrics",
      "ARDL",
      "Regression",
      "Forecasting",
      "Financial Analysis",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I use for research, analytics, and development."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}