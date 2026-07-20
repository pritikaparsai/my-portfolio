import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Timeline() {
  return (
    <section className="relative mt-20">

      {/* Vertical Line */}

      <div className="absolute left-4 top-0 hidden h-full w-1 rounded bg-slate-200 md:block" />

      <div className="space-y-20">

        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="relative md:pl-16"
          >
            {/* Timeline Dot */}

            <div className="absolute left-0 top-8 hidden h-8 w-8 rounded-full border-4 border-white bg-blue-600 shadow md:block" />

            <ExperienceCard
              company={experience.company}
              role={experience.role}
              duration={experience.duration}
              location={experience.location}
              description={experience.description}
              responsibilities={experience.responsibilities}
              technologies={experience.technologies}
              achievements={experience.achievements}
            />
          </div>
        ))}

      </div>
    </section>
  );
}