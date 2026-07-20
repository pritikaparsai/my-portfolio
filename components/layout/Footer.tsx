import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h2 className="text-xl font-bold">
            Pritika Parsai
          </h2>

          <p className="mt-2 text-gray-400">
            Economics • Data Analytics • Research
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Pritika Parsai
        </p>

      </div>
    </footer>
  );
}