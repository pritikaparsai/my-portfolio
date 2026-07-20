type Props = {
  skills: string[];
};

export default function SkillsUsed({
  skills,
}: Props) {
  return (
    <section className="mt-20">

      <h2 className="text-3xl font-bold text-gray-900">
        Skills Demonstrated
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-900 px-5 py-3 text-white"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}