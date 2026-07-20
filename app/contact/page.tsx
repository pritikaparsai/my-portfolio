export const metadata = {
  title: "Contact | Pritika Parsai",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">

      <section className="text-center">

        <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
          Get In Touch
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Contact
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Whether it's research, internships, graduate
          opportunities or collaborations, I'd love to hear from you.
        </p>

      </section>

      <div className="mt-16 rounded-3xl border p-10">

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-600">
              pritikaparsai05@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-slate-600">
              www.linkedin.com/in/pritika-parsai
            </p>
          </div>


        </div>

      </div>

    </main>
  );
}