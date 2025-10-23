export const getProducts = () => [
  {
    slug: "rose-bouquet",
    name: "Rose Bouquet",
    description: "A beautiful bouquet of fresh roses.",
    price: 49.99,
  },
  {
    slug: "tulip-bouquet",
    name: "Tulip Bouquet",
    description: "A vibrant bouquet of colorful tulips.",
    price: 39.99,
  },
  {
    slug: "sunflower-bouquet",
    name: "Sunflower Bouquet",
    description: "A cheerful bouquet of sunflowers.",
    price: 29.99,
  },
  {
    slug: "lily-bouquet",
    name: "Lily Bouquet",
    description: "An elegant bouquet of lilies.",
    price: 44.99,
  },
  {
    slug: "daisy-bouquet",
    name: "Daisy Bouquet",
    description: "A fresh and simple daisy bouquet.",
    price: 24.99,
  },
  {
    slug: "orchid-arrangement",
    name: "Orchid Arrangement",
    description: "A sophisticated orchid arrangement.",
    price: 59.99,
  },
  {
    slug: "carnation-bouquet",
    name: "Carnation Bouquet",
    description: "A classic carnation bouquet.",
    price: 34.99,
  },
  {
    slug: "peony-bouquet",
    name: "Peony Bouquet",
    description: "A lush peony bouquet.",
    price: 54.99,
  },
  {
    slug: "hydrangea-bouquet",
    name: "Hydrangea Bouquet",
    description: "A voluminous hydrangea bouquet.",
    price: 49.99,
  },
  {
    slug: "lavender-bouquet",
    name: "Lavender Bouquet",
    description: "A fragrant lavender bouquet.",
    price: 39.99,
  },
  {
    slug: "chrysanthemum-bouquet",
    name: "Chrysanthemum Bouquet",
    description: "A bright chrysanthemum bouquet.",
    price: 29.99,
  },
  {
    slug: "gerbera-daisy-bouquet",
    name: "Gerbera Daisy Bouquet",
    description: "A colorful gerbera daisy bouquet.",
    price: 32.99,
  },
  {
    slug: "iris-bouquet",
    name: "Iris Bouquet",
    description: "A striking iris bouquet.",
    price: 42.99,
  },
  {
    slug: "mixed-flower-bouquet",
    name: "Mixed Flower Bouquet",
    description: "A delightful mix of various flowers.",
    price: 45.99,
  },
  {
    slug: "wedding-bouquet",
    name: "Wedding Bouquet",
    description: "An exquisite wedding bouquet.",
    price: 89.99,
  },
  {
    slug: "sympathy-arrangement",
    name: "Sympathy Arrangement",
    description: "A thoughtful sympathy flower arrangement.",
    price: 64.99,
  },
];

const CITIES = [
  {
    slug: "newyork",
    name: "New York",
    title: "New York - Florist Network",
    description: "The Big Apple",
  },
  {
    slug: "losangeles",
    name: "Los Angeles",
    title: "Los Angeles - Florist Network",
    description: "City of Angels",
  },
  {
    slug: "chicago",
    name: "Chicago",
    title: "Chicago - Florist Network",
    description: "The Windy City",
  },
  {
    slug: "miami",
    name: "Miami",
    title: "Miami - Florist Network",
    description: "The Magic City",
  },
  {
    slug: "sanfrancisco",
    name: "San Francisco",
    title: "San Francisco - Florist Network",
    description: "The Golden City",
  },
  {
    slug: "boston",
    name: "Boston",
    title: "Boston - Florist Network",
    description: "The Cradle of Liberty",
  },
  {
    slug: "seattle",
    name: "Seattle",
    title: "Seattle - Florist Network",
    description: "The Emerald City",
  },
  {
    slug: "denver",
    name: "Denver",
    title: "Denver - Florist Network",
    description: "The Mile High City",
  },
  {
    slug: "austin",
    name: "Austin",
    title: "Austin - Florist Network",
    description: "The Live Music Capital",
  },
  {
    slug: "nashville",
    name: "Nashville",
    title: "Nashville - Florist Network",
    description: "Music City",
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    title: "Philadelphia - Florist Network",
    description: "City of Brotherly Love",
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    title: "Atlanta - Florist Network",
    description: "The ATL",
  },
  {
    slug: "portland",
    name: "Portland",
    title: "Portland - Florist Network",
    description: "The City of Roses",
  },
  {
    slug: "lasvegas",
    name: "Las Vegas",
    title: "Las Vegas - Florist Network",
    description: "Sin City",
  },
  {
    slug: "sandiego",
    name: "San Diego",
    title: "San Diego - Florist Network",
    description: "America's Finest City",
  },
];

export function sanitizeCitySlug(slug: string) {
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, "");
}

export type CityData = {
  name?: string;
  description?: string;
  createdAt: number;
};

export async function getCityData(citySlug: string) {
  const sanitized = sanitizeCitySlug(citySlug);
  const data = CITIES.find((city) => city.slug === sanitized);
  return data;
}

export async function getAllCities() {
  return CITIES;
}

// Backwards compatibility aliases for older code that used "subdomain" naming
export type SubdomainData = CityData;
export const sanitizeSubdomain = sanitizeCitySlug;
export const getCity = getCityData; // alternate name
export const getSubdomainData = getCityData;
export const getAllSubdomains = getAllCities;
