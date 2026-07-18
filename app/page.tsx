import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedResearch from "../components/home/FeaturedResearch";import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <Hero />
        <About />
        <FeaturedResearch />
        <FeaturedProjects />
      </main>

      <Footer />
    </>
  );
}