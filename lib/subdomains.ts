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
