const CITIES = [
  {
    slug: "newyork",
    name: "New York",
    description: "The Big Apple",
  },
  {
    slug: "losangeles",
    name: "Los Angeles",
    description: "City of Angels",
  },
  {
    slug: "chicago",
    name: "Chicago",
    description: "The Windy City",
  },
  {
    slug: "miami",
    name: "Miami",
    description: "The Magic City",
  },
  {
    slug: "sanfrancisco",
    name: "San Francisco",
    description: "The Golden City",
  },
  {
    slug: "boston",
    name: "Boston",
    description: "The Cradle of Liberty",
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
