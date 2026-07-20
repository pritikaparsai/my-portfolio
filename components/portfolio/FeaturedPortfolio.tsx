import Link from "next/link";

import PortfolioCard from "./PortfolioCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PortfolioItem } from "@/data/portfolio";

type FeaturedPortfolioProps = {
  portfolio: PortfolioItem[];
};

export default function FeaturedPortfolio({
  portfolio,
}: FeaturedPortfolioProps) {
  if (portfolio.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Featured Portfolio"
          subtitle="A selection of projects that best represent my skills in research, data analytics, machine learning, economics, and software development."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {portfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View All Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}