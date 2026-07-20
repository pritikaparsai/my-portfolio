import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Internships and professional experience."
        />

        <div className="mt-16 space-y-8">

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold">
              Merchant Ops & Risk Intern
            </h3>

            <p className="mt-2 text-blue-600 font-medium">
              Paytm Payments Services Ltd.
            </p>

            <p className="mt-1 text-gray-500">
              April 2025 – May 2025
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Performed merchant transaction analysis using SQL.</li>
              <li>Worked with AWS and Starburst.</li>
              <li>Created ETL pipelines and data extraction workflows.</li>
              <li>Supported merchant risk investigations.</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold">
              Research Intern
            </h3>

            <p className="mt-2 text-blue-600 font-medium">
              Navratan Foundations
            </p>

            <p className="mt-1 text-gray-500">
              May 2024 – June 2024
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Designed research surveys.</li>
              <li>Collected and cleaned datasets.</li>
              <li>Developed the Emotional Wellness Index.</li>
              <li>Performed statistical analysis.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}