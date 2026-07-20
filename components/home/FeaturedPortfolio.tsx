import Link from "next/link";

import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { portfolio } from "@/data/portfolio";

export default function FeaturedPortfolio() {
  const featuredPortfolio = portfolio.filter(
    (item) => item.featured
  );

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Work"
          subtitle="A selection of projects highlighting my experience in research, data analytics, machine learning, economics, and web development."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredPortfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/portfolio"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}