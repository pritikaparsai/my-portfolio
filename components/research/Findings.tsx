import { CheckCircle2 } from "lucide-react";

type Props = {
  findings: string[];
};

export default function Findings({
  findings,
}: Props) {
  return (
    <section className="mt-20">

      <h2 className="text-3xl font-bold">
        Key Findings
      </h2>

      <div className="mt-8 grid gap-6">

        {findings.map((finding) => (
          <div
            key={finding}
            className="flex gap-4 rounded-2xl bg-green-50 p-6"
          >
            <CheckCircle2
              className="mt-1 text-green-600"
              size={24}
            />

            <p>{finding}</p>

          </div>
        ))}

      </div>

    </section>
  );
}