type Props = {
  coursework: string[];
};

export default function Coursework({
  coursework,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Relevant Coursework
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">

        {coursework.map((course) => (
          <span
            key={course}
            className="rounded-full bg-blue-50 px-5 py-3 text-blue-700"
          >
            {course}
          </span>
        ))}

      </div>

    </section>
  );
}