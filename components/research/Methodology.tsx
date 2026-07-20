type Props = {
  methodology: string[];
};

export default function Methodology({
  methodology,
}: Props) {
  return (
    <section>

      <h2 className="text-3xl font-bold">
        Methodology
      </h2>

      <div className="mt-10 border-l-4 border-blue-600 pl-8">

        {methodology.map((item, index) => (
          <div
            key={item}
            className="relative mb-10"
          >
            <div className="absolute -left-11 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}