type Props = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  description,
  responsibilities,
  technologies,
  achievements,
}: Props) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            {role}
          </h2>

          <p className="mt-2 text-lg font-semibold text-blue-600">
            {company}
          </p>

        </div>

        <div className="text-right text-slate-500">

          <p>{duration}</p>

          <p>{location}</p>

        </div>

      </div>

      <p className="mt-8 leading-8 text-slate-600">
        {description}
      </p>

      <section className="mt-10">

        <h3 className="text-xl font-semibold">
          Responsibilities
        </h3>

        <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">

          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}

        </ul>

      </section>

      <section className="mt-10">

        <h3 className="text-xl font-semibold">
          Technologies
        </h3>

        <div className="mt-5 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      <section className="mt-10">

        <h3 className="text-xl font-semibold">
          Key Achievements
        </h3>

        <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">

          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}

        </ul>

      </section>

    </article>
  );
}