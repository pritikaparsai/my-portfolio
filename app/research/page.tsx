import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Pritika Parsai",
  description:
    "Research papers in Economics, Econometrics and Finance by Pritika Parsai.",
};

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ResearchCard from "@/components/research/ResearchCard";
import { research } from "@/data/research";
import ResearchStats from "@/components/research/ResearchStats";

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <Link
      href="/research"
      className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:underline"
       >
     <ArrowLeft size={18} />
      Back to Research
    </Link>

      <SectionHeading
        title="Research"
        subtitle="Explore my research papers, methodologies, and findings."
      />

      <ResearchStats />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">

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

    </main>
  );
}