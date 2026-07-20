type Props = {
  achievements: string[];
};

export default function Achievements({ achievements }: Props) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Achievements & Recognition
      </h2>

      <div className="mt-8 space-y-4">

        {achievements.map((achievement) => (
          <div
            key={achievement}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            {achievement}
          </div>
        ))}

      </div>

    </section>
  );
}