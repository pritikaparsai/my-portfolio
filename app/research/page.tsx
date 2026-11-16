import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Pritika Parsai",
  description:
    "Research papers in Economics, Econometrics and Finance by Pritika Parsai.",
};

import SectionHeading from "@/components/ui/SectionHeading";
import ResearchCard from "@/components/research/ResearchCard";
import { research } from "@/data/research";
import ResearchStats from "@/components/research/ResearchStats";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        title="Research"
        subtitle="Explore my research papers, methodologies, and findings."
      />

      <ResearchStats />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">

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

    </main>
    <Footer />
  </>
);
}
