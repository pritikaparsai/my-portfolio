import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-20 lg:flex-row"
    >
      {/* Left Side */}
      <div className="max-w-2xl">

        <p className="text-lg font-semibold text-blue-600">
          👋 Hello, I'm
        </p>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Pritika Parsai
        </h1>

        <h2 className="mt-6 text-2xl font-medium text-gray-600">
          Economics Student • Data Analytics • Research Enthusiast
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-500">
          I enjoy solving real-world problems through economics,
          econometrics, data analytics, and technology. My work combines
          research, SQL, Python, and data visualization to transform data
          into actionable insights.
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
            href="/resume/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8">

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              2+
            </h3>

            <p className="mt-2 text-gray-500">
              Research Papers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              5+
            </h3>

            <p className="mt-2 text-gray-500">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              2
            </h3>

            <p className="mt-2 text-gray-500">
              Internships
            </p>
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