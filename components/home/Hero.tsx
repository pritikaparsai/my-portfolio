import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { research } from "@/data/research";
import { portfolio } from "@/data/portfolio";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-20 lg:flex-row"
    >
      {/* Left Side */}
      <div className="max-w-2xl">

        <p className="text-lg font-semibold text-blue-600">
          👋 Hello, I&apos;m
        </p>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Pritika Parsai
        </h1>

        <h2 className="mt-6 text-2xl font-medium text-gray-600">
          Economics Student • Data Analytics • Research Enthusiast
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-500">
          My current research explores generative AI exposure and the gender
          wage gap in India, alongside women’s household decision-making in
          Pune. I bring together economics, data analytics, business operations,
          and applied research to answer practical questions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/research"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View Research
            <ArrowRight size={18} />
          </Link>

          <a
            href="https://github.com/pritikaparsai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            <ExternalLink size={18} />
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              {research.length}
            </h3>

            <p className="mt-2 text-gray-500">
              Research Papers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              {portfolio.length}
            </h3>

            <p className="mt-2 text-gray-500">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              {experiences.length}
            </h3>

            <p className="mt-2 text-gray-500">
              Professional Experiences
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              {education[0]?.totalUndergraduateCredits}
            </h3>
            <p className="mt-2 text-gray-500">Undergraduate Credits</p>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 p-2 shadow-2xl">

          <Image
            src="/images/profile.jpeg"
            alt="Pritika Parsai"
            width={420}
            height={420}
            priority
            className="rounded-full object-cover"
          />

        </div>
      </div>
    </section>
  );
}
