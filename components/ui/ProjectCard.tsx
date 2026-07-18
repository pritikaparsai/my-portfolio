type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <button className="mt-8 font-semibold text-blue-600 hover:underline">
        Learn More →
      </button>
    </div>
  );
}