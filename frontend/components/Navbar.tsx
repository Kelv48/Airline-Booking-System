export default function Navbar() {
  return (
    <nav className="border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold">
          ✈ Journey Planner
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Destinations</a>
          <a href="#">Flights</a>
          <a href="#">Weather</a>
          <a href="#">About</a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}