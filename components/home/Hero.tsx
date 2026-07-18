import Image from "next/image";
import StatCard from "../ui/StatCard";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10 pt-24">

      {/* Left Side */}
      <div className="max-w-2xl">
        <p className="text-lg font-semibold text-blue-600">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-6xl font-extrabold text-gray-900">
          Pritika Parsai
        </h1>

        <h2 className="mt-6 text-2xl font-medium text-gray-600">
          Economics Student | Data Analytics | Research Enthusiast
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-500">
          I enjoy solving real-world problems through economics,
          data analytics, and research. My work combines
          econometrics, SQL, Python, and visualization to
          transform data into actionable insights.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            View Research
          </button>

        <div className="mt-14 grid grid-cols-2 gap-5">

        <StatCard
           number="2"
          label="Research Papers"
         />

        <StatCard
            number="2"
          label="Internships"
        />

        <StatCard
             number="8+"
            label="Certifications"
         />

        <StatCard
          number="3"
          label="Leadership Roles"
         />

</div>

          <a
            href="/resume/resume.pdf"
            download
            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex">
        <Image
          src="/images/profile.jpeg"
          alt="Pritika Parsai"
          width={380}
          height={380}
          className="rounded-full border-8 border-white object-cover shadow-2xl"
          priority
        />
      </div>

    </section>
  );
}