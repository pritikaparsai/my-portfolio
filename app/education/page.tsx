import EducationCard from "@/components/education/EducationCard";
import Coursework from "@/components/education/Coursework";
import Achievements from "@/components/education/Achievements";
import EducationStats from "@/components/education/EducationStats";
import SectionHeading from "@/components/ui/SectionHeading";

import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import {
  education,
  academicHighlights,
  certifications,
} from "@/data/education";

import { Languages } from "lucide-react";

export const metadata = {
  title: "Education | Pritika Parsai",
  description:
    "Academic background, coursework, achievements and certifications of Pritika Parsai.",
};

export default function EducationPage() {
  const university = education[0];

  return (
    <>
      <Navbar />
    <main className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}

        <SectionHeading
          eyebrow="Academic Journey"
          title="Education"
          subtitle="My academic journey combines economics with data analytics, equipping me with strong quantitative, analytical and research skills. Alongside coursework, research and internships, I continue to develop practical expertise across economics, analytics and technology."
          centered
        />

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-blue-100 bg-white px-6 py-5 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Total Undergraduate Credits
          </p>
          <p className="mt-1 text-4xl font-bold text-slate-900">
            {university.totalUndergraduateCredits}
          </p>
        </div>

        {/* Stats */}

        <div className="mt-20">
          <EducationStats />
        </div>

        {/* Education */}

        <div className="mt-20 space-y-10">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              institution={item.institution}
              degree={item.degree}
              duration={item.duration}
              location={item.location}
              grade={item.cgpa ?? item.percentage ?? item.grade}
              description={item.description}
            />
          ))}
        </div>

        {/* Coursework (University only) */}

        {university.coursework && (
          <Coursework coursework={university.coursework} />
        )}

        {/* Academic Highlights */}

        <Achievements achievements={academicHighlights} />

        {/* Language Certifications */}

        <section className="mt-20">
          <SectionHeading
            eyebrow="Certifications"
            title="Language Certifications"
            subtitle="Formal language qualifications completed alongside my academic studies."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certifications.map((certificate) => (
              <div
                key={certificate.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                  <Languages
                    size={28}
                    className="text-purple-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {certificate.issuer}
                </p>

                {certificate.grade && (
                  <p className="mt-2 font-medium text-blue-600">
                    Grade: {certificate.grade}
                  </p>
                )}

                <p className="mt-4 text-sm text-slate-500">
                  {certificate.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
      <Footer />
    </>
  );
}
