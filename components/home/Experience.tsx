import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Professional experience across business operations, merchant risk, and research."
        />

        <div className="mt-16 space-y-8">

          {experiences.map((experience) => (
            <article key={experience.id} className="rounded-2xl border p-8 shadow-sm">
              <h3 className="text-2xl font-bold">{experience.role}</h3>
              <p className="mt-2 font-medium text-blue-600">{experience.company}</p>
              <p className="mt-1 text-gray-500">{experience.duration}</p>
              <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
                {experience.responsibilities.slice(0, 3).map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
