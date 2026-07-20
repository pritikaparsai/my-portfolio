import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedResearch from "@/components/home/FeaturedResearch";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <Hero />
        <About />
        <FeaturedResearch />
        <FeaturedPortfolio />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </>
  );
}