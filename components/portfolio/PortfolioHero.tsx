import Link from "next/link";
import {
  ArrowRight,
  FileText,
  FolderKanban,
} from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 shadow-sm">
            <FolderKanban
              size={40}
              className="text-blue-600"
            />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Portfolio
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            A Collection of My
            <span className="text-blue-600"> Research</span>,
            <span className="text-blue-600"> Analytics</span> &
            <span className="text-blue-600"> Technical Work</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Explore a curated portfolio showcasing research papers,
            machine learning models, data analytics projects,
            economics reports, academic writing, and web development
            completed throughout my undergraduate journey and
            professional experience.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Explore Portfolio
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              <FileText className="h-5 w-5" />
              View Resume
            </Link>
          </div>

          <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                12+
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Portfolio Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                4+
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Research Papers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                6
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Categories
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                2023–26
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Academic Journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}