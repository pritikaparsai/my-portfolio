import SectionHeading from "../ui/SectionHeading";
import ResearchCard from "../research/ResearchCard";
import { research } from "@/data/research";

export default function FeaturedResearch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        title="Featured Research"
        subtitle="Research in economics, gender and labour markets, including an ongoing study of generative AI exposure and the gender wage gap in India."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {[...research]
          .sort((a, b) => Number(b.status === "Ongoing") - Number(a.status === "Ongoing"))
          .map((paper) => (
          <ResearchCard
            key={paper.id}
            title={paper.title}
            description={paper.description}
            year={paper.year}
            tags={paper.tags}
            slug={paper.slug}
            thumbnail={paper.thumbnail}
            status={paper.status}
          />
        ))}

      </div>

    </section>
  );
}
