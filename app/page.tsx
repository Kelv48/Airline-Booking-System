export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="tag">Infrastructure Portfolio</p>

        <h1>
          Building reliable systems with modern DevOps
        </h1>

        <p className="subtitle">
          A live deployment running Next.js, Docker, Jenkins,
          and Caddy with automated GitHub deployments.
        </p>

        <div className="buttons">
          <button>View Projects</button>
          <button className="secondary">Contact Me</button>
        </div>
      </section>

      <section className="stack">
        <h2>Technology Stack</h2>

        <div className="cards">
          <Card
            title="Frontend"
            text="Next.js + React + TypeScript"
          />

          <Card
            title="Containers"
            text="Docker image builds and deployments"
          />

          <Card
            title="CI/CD"
            text="Jenkins automated pipelines"
          />

          <Card
            title="Proxy"
            text="Caddy HTTPS reverse proxy"
          />
        </div>
      </section>

      <section className="status">
        <h2>✓ System Online</h2>
        <p>
          GitHub → Jenkins → Docker → Next.js → Caddy
        </p>
      </section>
    </main>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}