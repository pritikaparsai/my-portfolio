import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { portfolio, type PortfolioItem } from "@/data/portfolio";

import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import CategorySection from "@/components/portfolio/CategorySection";


export default function PortfolioPage() {
  const research = portfolio.filter(
    (item) => item.category === "Research"
  );

  const analytics = portfolio.filter(
    (item) => item.category === "Data Analytics"
  );

  const ml = portfolio.filter(
    (item) => item.category === "Machine Learning"
  );

  const economics = portfolio.filter(
    (item) => item.category === "Economics"
  );

  const writing = portfolio.filter(
    (item) => item.category === "Academic Writing"
  );

  const web = portfolio.filter(
    (item) => item.category === "Web Development"
  );

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <PortfolioHero />

        <PortfolioStats />

        <CategorySection
          title="Research"
          subtitle="Research papers focusing on economics, finance, public policy and behavioural studies."
          items={research}
        />

        <CategorySection
          title="Data Analytics"
          subtitle="Projects involving SQL, dashboards, exploratory data analysis and business intelligence."
          items={analytics}
        />

        <CategorySection
          title="Machine Learning"
          subtitle="Predictive models built using Python and Scikit-learn."
          items={ml}
        />

        <CategorySection
          title="Economics"
          subtitle="Coursework and analytical projects covering international economics and economic theory."
          items={economics}
        />

        <CategorySection
          title="Academic Writing"
          subtitle="Essays and analytical writing completed during undergraduate coursework."
          items={writing}
        />

        <CategorySection
          title="Web Development"
          subtitle="Modern web applications built with Next.js, React and TypeScript."
          items={web}
        />
      </main>

      <Footer />
    </>
  );
}