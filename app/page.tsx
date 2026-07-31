export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Infrastructure Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Building reliable systems with
            <span className="text-cyan-400"> modern DevOps</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            A demonstration platform running Next.js, Docker, Jenkins, and Caddy
            with automated deployments from GitHub.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
              View Projects
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
          {[
            {
              title: "Frontend",
              description: "Next.js + React + TypeScript",
            },
            {
              title: "Containers",
              description: "Docker image builds and deployments",
            },
            {
              title: "CI/CD",
              description: "Jenkins automated pipelines",
            },
            {
              title: "Proxy",
              description: "Caddy HTTPS reverse proxy",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>

              <p className="text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment Status */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-xl border border-green-500/30 bg-green-500/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-400">
            System Online
          </h2>

          <p className="mt-3 text-slate-300">
            Deployment pipeline successfully connected:
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "GitHub",
              "Jenkins",
              "Docker",
              "Next.js",
              "Caddy",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full bg-slate-800 px-4 py-2 text-sm"
              >
                ✓ {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        Portfolio Infrastructure Demo • Built with Next.js
      </footer>
    </main>
  );
}