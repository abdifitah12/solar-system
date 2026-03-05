import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    temp: "430°C day / -180°C night",
    atmosphere: "Almost none",
    description: "Closest planet to the Sun.",
    details:
      "Mercury is the smallest planet in the solar system and the closest to the Sun. It has a rocky surface filled with craters and experiences extreme temperature changes because it has almost no atmosphere to trap heat.",
    image: "/planets/mercury.jpg",
    video: "https://www.youtube.com/embed/0KBjnNuhRHs",
  },
  {
    name: "Venus",
    type: "Terrestrial",
    temp: "464°C",
    atmosphere: "Thick CO₂ atmosphere",
    description: "Hottest planet in the solar system.",
    details:
      "Venus is similar in size to Earth, but its thick carbon dioxide atmosphere creates a strong greenhouse effect. This makes Venus the hottest planet, even hotter than Mercury.",
    image: "/planets/venus.jpg",
    video: "https://www.youtube.com/embed/BvXa1n9fjow",
  },
  {
    name: "Earth",
    type: "Terrestrial",
    temp: "15°C average",
    atmosphere: "Nitrogen & Oxygen",
    description: "The only planet known to support life.",
    details:
      "Earth is the third planet from the Sun and the only known planet with life. It has liquid water, a breathable atmosphere, and a balanced climate that supports many forms of life.",
    image: "/planets/earth.jpg",
    video: "https://www.youtube.com/embed/HCDVN7DCzYE",
  },
  {
    name: "Mars",
    type: "Terrestrial",
    temp: "-65°C average",
    atmosphere: "Thin CO₂ atmosphere",
    description: "Known as the Red Planet.",
    details:
      "Mars is a cold desert planet with a thin atmosphere. It is called the Red Planet because of iron oxide on its surface. Scientists study Mars to learn whether it once had water and life.",
    image: "/planets/mars.jpg",
    video: "https://www.youtube.com/embed/D8pnmwOXhoY",
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    temp: "-110°C",
    atmosphere: "Hydrogen & Helium",
    description: "Largest planet in our solar system.",
    details:
      "Jupiter is the largest planet in the solar system. It is a gas giant with no solid surface and is famous for the Great Red Spot, a giant storm that has lasted for centuries.",
    image: "/planets/jupiter.jpg",
    video: "https://www.youtube.com/embed/PtkqwslbLY8",
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    temp: "-140°C",
    atmosphere: "Hydrogen & Helium",
    description: "Famous for its rings.",
    details:
      "Saturn is a gas giant best known for its beautiful ring system. The rings are made mostly of ice and rock particles. Saturn is less dense than water.",
    image: "/planets/saturn.jpg",
    video: "https://www.youtube.com/embed/epZdZaEQhS0",
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    temp: "-195°C",
    atmosphere: "Hydrogen, Helium, Methane",
    description: "An ice giant with an extreme tilt.",
    details:
      "Uranus is an ice giant with a blue-green color caused by methane in its atmosphere. It rotates almost on its side, making it one of the most unusual planets.",
    image: "/planets/uranus.jpg",
    video: "https://www.youtube.com/embed/m4NXbFOiOGk",
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    temp: "-200°C",
    atmosphere: "Hydrogen, Helium, Methane",
    description: "Known for very strong winds.",
    details:
      "Neptune is the farthest known planet from the Sun. It is an ice giant with deep blue color and some of the fastest winds in the solar system.",
    image: "/planets/neptune.jpg",
    video: "https://www.youtube.com/embed/NStn7zZKXfE",
  },
];

const FILTERS = ["All", "Terrestrial", "Gas Giant", "Ice Giant"];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function PlanetCard({ planet, index, onOpen }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(planet)}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 text-left shadow-xl shadow-black/30 transition"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={planet.image}
          alt={planet.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        <div className="absolute left-4 top-4">
          <Badge>{planet.type}</Badge>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            {planet.name}
          </h2>
          <p className="mt-1 text-sm text-white/80">{planet.description}</p>
        </div>
      </div>

      <div className="space-y-2 p-5">
        <p className="text-sm text-white/85">
          <span className="font-semibold">Temperature:</span> {planet.temp}
        </p>
        <p className="text-sm text-white/85">
          <span className="font-semibold">Atmosphere:</span> {planet.atmosphere}
        </p>

        <div className="pt-2 text-sm font-medium text-cyan-300">
          Click to learn more →
        </div>
      </div>
    </motion.button>
  );
}

function PlanetModal({ planet, onClose }) {
  if (!planet) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 text-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            ✕ Close
          </button>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <img
                src={planet.image}
                alt={planet.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge>{planet.type}</Badge>
                <h2 className="mt-3 text-4xl font-extrabold text-yellow-400">
                  {planet.name}
                </h2>
                <p className="mt-2 text-white/85">{planet.description}</p>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex flex-wrap gap-2">
                <Badge>Temperature: {planet.temp}</Badge>
                <Badge>Atmosphere: {planet.atmosphere}</Badge>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-bold text-cyan-300">About {planet.name}</h3>
                <p className="mt-3 leading-7 text-white/85">{planet.details}</p>
              </div>

              <div className="mt-6">
                <h3 className="mb-3 text-xl font-bold text-cyan-300">
                  Planet Video
                </h3>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={planet.video}
                      title={`${planet.name} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-white/60">
                Tip: you can replace the video links with your favorite NASA or YouTube planet videos.
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MobileHeader({ search, setSearch, filter, setFilter, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                FARUZ Solar System
              </span>{" "}
              <span className="text-white">Explorer</span>
            </h1>
            <p className="hidden text-sm text-white/60 sm:block">
              Click a planet card to open details and video
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <input
              type="text"
              placeholder="Search planet..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/40 focus:ring-2 focus:ring-yellow-400/20"
            />

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === f
                      ? "bg-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/20"
                      : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "mt-4 max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <input
              type="text"
              placeholder="Search planet..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/40 focus:ring-2 focus:ring-yellow-400/20"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === f
                      ? "bg-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/20"
                      : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const filtered = useMemo(() => {
    let result = planets;

    if (search.trim() !== "") {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (filter !== "All") {
      result = result.filter((p) => p.type === filter);
    }

    return result;
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <MobileHeader
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6 flex items-center justify-between text-sm text-white/60">
          <p>
            Showing <span className="text-white">{filtered.length}</span> planet(s)
          </p>
          <p>
            Filter: <span className="text-white">{filter}</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((planet, index) => (
            <PlanetCard
              key={planet.name}
              planet={planet}
              index={index}
              onOpen={setSelectedPlanet}
            />
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedPlanet && (
          <PlanetModal
            planet={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}