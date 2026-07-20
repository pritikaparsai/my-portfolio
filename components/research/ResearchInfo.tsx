type Props = {
  abstract: string;
  question: string;
};

export default function ResearchInfo({
  abstract,
  question,
}: Props) {
  return (
    <section className="mt-20">

      <div className="grid gap-10 lg:grid-cols-2">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Abstract
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {abstract}
          </p>

        </div>

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Research Question
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {question}
          </p>

        </div>

      </div>

    </section>
  );
}