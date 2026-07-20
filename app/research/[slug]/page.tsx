import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Paper | Pritika Parsai",
};

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { research } from "@/data/research";

import ResearchHero from "@/components/research/ResearchHero";
import ResearchInfo from "@/components/research/ResearchInfo";
import Methodology from "@/components/research/Methodology";
import Findings from "@/components/research/Findings";
import SkillsUsed from "@/components/research/SkillsUsed";
import ResearchSidebar from "@/components/research/ResearchSidebar";
import Citation from "@/components/research/Citation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ResearchDetails({ params }: Props) {
  const paper = research.find((item) => item.slug === params.slug);

  if (!paper) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      {/* Back Button */}

      <Link
        href="/research"
        className="mb-8 inline-flex items-center gap-2 text-blue-600 transition hover:gap-3 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Research
      </Link>

      {/* Hero */}

      <ResearchHero
        title={paper.title}
        year={paper.year}
        tags={paper.tags}
      />

      {/* Content */}

      <div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr]">

        {/* Main Content */}

        <div>

          <ResearchInfo
            abstract={paper.abstract}
            question={paper.question}
          />

          <Methodology
            methodology={paper.methodology}
          />

          <Findings
            findings={paper.findings}
          />

          <SkillsUsed
            skills={paper.skills}
          />

          <Citation
            title={paper.title}
            year={paper.year}
          />

        </div>

        {/* Sidebar */}

        <ResearchSidebar
          year={paper.year}
          pdf={paper.pdf}
        />

      </div>

    </main>
  );
}