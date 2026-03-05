import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const planets = [
  { name: "Mercury", type: "Terrestrial", temp: "430°C day / -180°C night", atmosphere: "Almost none", description: "Closest planet to the Sun.", image: "/planets/mercury.jpg" },
  { name: "Venus", type: "Terrestrial", temp: "464°C", atmosphere: "Thick CO₂ atmosphere", description: "Hottest planet in the solar system.", image: "/planets/venus.jpg" },
  { name: "Earth", type: "Terrestrial", temp: "15°C average", atmosphere: "Nitrogen & Oxygen", description: "The only planet known to support life.", image: "/planets/earth.jpg" },
  { name: "Mars", type: "Terrestrial", temp: "-65°C average", atmosphere: "Thin CO₂ atmosphere", description: "Known as the Red Planet.", image: "/planets/mars.jpg" },
  { name: "Jupiter", type: "Gas Giant", temp: "-110°C", atmosphere: "Hydrogen & Helium", description: "Largest planet in our solar system.", image: "/planets/jupiter.jpg" },
  { name: "Saturn", type: "Gas Giant", temp: "-140°C", atmosphere: "Hydrogen & Helium", description: "Famous for its rings.", image: "/planets/saturn.jpg" },
  { name: "Uranus", type: "Ice Giant", temp: "-195°C", atmosphere: "Hydrogen, Helium, Methane", description: "An ice giant with an extreme tilt.", image: "/planets/uranus.jpg" },
  { name: "Neptune", type: "Ice Giant", temp: "-200°C", atmosphere: "Hydrogen, Helium, Methane", description: "Known for very strong winds.", image: "/planets/neptune.jpg" },
];

const FILTERS = ["All", "Terrestrial", "Gas Giant", "Ice Giant"];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function StarsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft glow */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-3xl" />

      {/* stars layer 1 */}
      <div className="stars absolute inset-0 opacity-50" />
      {/* stars layer 2 */}
      <div className="stars2 absolute inset-0 opacity-40" />
    </div>
  );
}

function PlanetCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/30"
    >
      {/* glow border on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/30" />
      </div>

      {/* image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-4 bottom-3">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {p.name}
          </h3>
          <p className="text-xs text-white/70">{p.description}</p>
        </div>

        <div className="absolute right-4 top-4">
          <Badge>{p.type}</Badge>
        </div>
      </div>

      {/* details */}
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <Badge>Temp: {p.temp}</Badge>
          <Badge>Atmosphere: {p.atmosphere}</Badge>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm text-white/80">
            <span className="text-white/60">About: </span>
            {p.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

const filtered = useMemo(() => {

  // 1️⃣ Search first
  let result = planets;

  if (search.trim() !== "") {
    const q = search.toLowerCase();
    result = result.filter((p) =>
      p.name.toLowerCase().includes(q)
    );
  }

  // 2️⃣ Then apply filter
  if (filter !== "All") {
    result = result.filter((p) =>
      p.type === filter
    );
  }

  return result;

}, [search, filter]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <StarsBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-lg">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* Title */}
    <div>
      <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
        FARUZ Solar System Explorer
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        Explore planets, atmospheres, and temperatures in our solar system
      </p>
    </div>

    {/* Controls */}
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

      {/* Search */}
      <input
        type="text"
        placeholder="Search planet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2">

        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300
            ${
              filter === f
                ? "bg-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/30"
                : "bg-slate-800 border border-slate-700 text-gray-300 hover:bg-slate-700"
            }`}
          >
            {f}
          </button>
        ))}

      </div>

    </div>
  </div>
</header>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-8">
        <div className="mb-5 flex items-center justify-between text-sm text-white/60">
          <p>
            Showing <span className="text-white/90">{filtered.length}</span> planet(s)
          </p>
          <p>
            Filter: <span className="text-white/90">{filter}</span>
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <PlanetCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-sm text-white/50">
        Made with React + Tailwind + Framer Motion 🌌
      </footer>

      {/* Stars CSS */}
      <style>{`
        .stars, .stars2 {
          background-image:
            radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,0.9) 50%, transparent 51%),
            radial-gradient(1px 1px at 80px 40px, rgba(255,255,255,0.8) 50%, transparent 51%),
            radial-gradient(1px 1px at 140px 90px, rgba(255,255,255,0.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 200px 140px, rgba(255,255,255,0.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 260px 60px, rgba(255,255,255,0.6) 50%, transparent 51%),
            radial-gradient(1px 1px at 320px 110px, rgba(255,255,255,0.6) 50%, transparent 51%);
          background-size: 360px 180px;
          animation: drift 18s linear infinite;
        }
        .stars2 {
          background-size: 520px 260px;
          animation: drift 28s linear infinite reverse;
        }
        @keyframes drift {
          from { transform: translateY(0px); }
          to { transform: translateY(-220px); }
        }
      `}</style>
    </div>
  );
}