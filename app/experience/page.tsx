import ExperienceStats from "@/components/experience/ExperienceStats";
import Timeline from "@/components/experience/Timeline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Experience | Pritika Parsai",
  description:
    "Professional experience in data analytics, merchant risk, research and operations.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-20">

      {/* Hero */}

      <section className="text-center">

        <p className="text-blue-600 font-semibold tracking-widest uppercase">
          Professional Journey
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Experience
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          My professional experience has focused on applying data analytics,
          economics and research methodologies to solve practical
          business and social problems. From analysing merchant
          transaction patterns at Paytm Payments Services to conducting
          survey-based research with Navratan Foundations, each
          experience strengthened my analytical and problem-solving
          skills.
        </p>

      </section>

      <div className="mt-20">
        <ExperienceStats />
      </div>

      <Timeline />

      </main>
      <Footer />
    </>
  );
}
