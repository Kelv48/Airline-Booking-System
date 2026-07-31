export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
      <p className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        Travel Planning Platform
      </p>

      <h1 className="max-w-4xl text-6xl font-bold leading-tight">
        Explore the World with
        <span className="text-blue-500"> Simulated Flights</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-slate-300">
        Discover destinations, build itineraries, compare generated
        flights and view live weather—all in one place.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
          Explore
        </button>

        <button className="rounded-lg border border-slate-700 px-8 py-4 hover:bg-slate-800">
          Learn More
        </button>
      </div>
    </section>
  );
}