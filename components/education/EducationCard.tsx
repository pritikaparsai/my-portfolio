type Props = {
 institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
  description: string;
};

export default function EducationCard({
  institution,
  degree,
  duration,
  location,
  grade,
  description,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

      <h1 className="text-4xl font-bold text-slate-900">
        {institution}
      </h1>

      <p className="mt-3 text-xl font-semibold text-blue-600">
        {degree}
      </p>

      <div className="mt-6 flex flex-wrap gap-6 text-slate-500">
        <span>{duration}</span>
        <span>{location}</span>
        {grade && <span>Grade: {grade}</span>}
      </div>

      <p className="mt-8 leading-8 text-slate-600">
        {description}
      </p>

    </section>
  );
}