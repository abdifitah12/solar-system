import mercury from "../assets/planets/mercury.jpg";
import venus from "../assets/planets/venus.jpg";
import earth from "../assets/planets/earth.jpg";
import mars from "../assets/planets/mars.jpg";
import jupiter from "../assets/planets/jupiter.jpg";
import saturn from "../assets/planets/saturn.jpg";
import uranus from "../assets/planets/uranus.jpg";
import neptune from "../assets/planets/neptune.jpg";

export const PLANETS = [
  {
    name: "Mercury",
    type: "Terrestrial",
    sizeNote: "Smallest",
    atmosphere: "Almost no atmosphere (surface-bound exosphere)",
    temp: "Day ~430°C, Night ~-180°C",
    description: "Closest planet to the Sun with extreme temperature swings.",
    image: mercury,
  },
  {
    name: "Venus",
    type: "Terrestrial",
    sizeNote: "Hottest",
    atmosphere: "Thick CO₂ + sulfuric acid clouds",
    temp: "~464°C",
    description: "Runaway greenhouse effect makes it hotter than Mercury.",
    image: venus,
  },
  {
    name: "Earth",
    type: "Terrestrial",
    sizeNote: "Life",
    atmosphere: "Nitrogen–oxygen (about 21% oxygen)",
    temp: "Avg ~15°C",
    description: "Only known world with life and stable liquid water on the surface.",
    image: earth,
  },
  {
    name: "Mars",
    type: "Terrestrial",
    sizeNote: "Red Planet",
    atmosphere: "Thin, mostly CO₂",
    temp: "Avg ~-65°C",
    description: "Cold, dry desert world about half Earth’s size.",
    image: mars,
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    sizeNote: "Largest",
    atmosphere: "Mostly hydrogen and helium",
    temp: "Cloud tops ~-110°C",
    description: "No solid surface; the most massive planet in our solar system.",
    image: jupiter,
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    sizeNote: "Ringed Planet",
    atmosphere: "Mostly hydrogen and helium",
    temp: "Around ~-140°C",
    description: "Famous for its spectacular rings and low density.",
    image: saturn,
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    sizeNote: "Tilted",
    atmosphere: "Hydrogen/helium with methane",
    temp: "Very cold (about ~-195°C)",
    description: "An ice giant with an extreme axial tilt and faint rings.",
    image: uranus,
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    sizeNote: "Windy",
    atmosphere: "Hydrogen/helium with methane",
    temp: "Very cold (about ~-200°C)",
    description: "An ice giant known for powerful winds and storms.",
    image: neptune,
  },
];

export const FILTERS = ["All", "Terrestrial", "Gas Giant", "Ice Giant"];