type Props = {
  title: string;
  year: string;
};

export default function Citation({
  title,
  year,
}: Props) {
  return (
    <section className="mt-20 rounded-3xl bg-slate-100 p-8">

      <h2 className="text-2xl font-bold">
        Citation
      </h2>

      <p className="mt-4 font-mono">
        Parsai, P. ({year}). {title}.
      </p>

    </section>
  );
}