const features = [
  {
    icon: "🗺️",
    title: "Interactive Maps",
    description: "Browse destinations across the world."
  },
  {
    icon: "✈️",
    title: "Flight Simulator",
    description: "Generate realistic airline routes."
  },
  {
    icon: "🌦️",
    title: "Weather",
    description: "Current conditions and forecasts."
  },
  {
    icon: "🧳",
    title: "Trip Builder",
    description: "Organise your journey day by day."
  }
];

export default function Features() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
        >
          <div className="mb-5 text-4xl">{feature.icon}</div>

          <h3 className="mb-3 text-xl font-semibold">
            {feature.title}
          </h3>

          <p className="text-slate-400">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}