import Skills from "@/components/home/Skills";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Skills | Pritika Parsai",
  description:
    "Programming languages, analytics tools, research methodologies, and web development technologies used throughout my academic and professional projects.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Skills />
      </main>
      <Footer />
    </>
  );
}
