type Props = {
  achievements: string[];
};

export default function Certifications({
  achievements,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Highlights
      </h2>

      <div className="mt-8 space-y-5">

        {achievements.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-slate-100 p-5"
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}