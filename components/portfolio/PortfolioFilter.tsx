const filters = [
  "All",
  "Research",
  "Data Analytics",
  "Machine Learning",
  "Economics",
  "Academic Writing",
  "Web Development",
] as const;

export default function PortfolioFilters() {
  return (
    <section className="py-4">

      <div className="mb-6 text-center">

        <h2 className="text-2xl font-bold text-slate-900">
          Browse by Category
        </h2>

        <p className="mt-2 text-slate-600">
          Explore projects across different domains of research, analytics,
          economics, technology and academic writing.
        </p>

      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">

        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            disabled
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              index === 0
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {filter}
          </button>
        ))}

      </div>

    </section>
  );
}