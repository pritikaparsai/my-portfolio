import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  FolderKanban,
  Globe,
  FileText,
  ExternalLink,
  MonitorPlay,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import { portfolio } from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolio.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const item = portfolio.find((project) => project.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {item.category}
              </span>

              <h1 className="mt-5 text-4xl font-bold text-slate-900">
                {item.title}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-slate-500">
                <CalendarDays className="h-5 w-5" />
                {item.year}
              </div>

              <div className="mt-6">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="mt-8 leading-8 text-slate-600">
                {item.overview}
              </p>

              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold">
                  Technologies
                </h2>

                <div className="flex flex-wrap gap-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">

                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                  >
                    <FileText className="h-5 w-5" />
                    View PDF
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3"
                  >
                    <ExternalLink className="h-5 w-5" />
                    GitHub
                  </a>
                )}

                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                )}

                {item.presentation && (
                  <a
                    href={item.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3"
                  >
                    <MonitorPlay className="h-5 w-5" />
                    Presentation
                  </a>
                )}

                {item.video && (
                  <a
                    href={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Video
                  </a>
                )}

              </div>

            </div>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}