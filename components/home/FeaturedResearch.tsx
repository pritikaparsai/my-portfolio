import SectionHeading from "../ui/SectionHeading";
import ResearchCard from "../research/ResearchCard";
import { research } from "@/data/research";

export default function FeaturedResearch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        title="Featured Research"
        subtitle="Academic research in economics, econometrics and finance."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {research.map((paper) => (
          <ResearchCard
            key={paper.id}
            title={paper.title}
            description={paper.description}
            year={paper.year}
            tags={paper.tags}
            slug={paper.slug}
            thumbnail={paper.thumbnail}
          />
        ))}

      </div>

    </section>
  );
}