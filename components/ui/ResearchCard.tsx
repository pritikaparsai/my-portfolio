type ResearchCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ResearchCard({
  title,
  description,
  tags,
}: ResearchCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 leading-7 text-gray-600">
        {description}
      </p>

      <button className="mt-8 font-semibold text-blue-600 hover:underline">
        Read More →
      </button>
    </div>
  );
}