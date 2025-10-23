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

export type City = {
  slug: string;
  name: string;
  title: string;
  description: string;
  longDescription?: string;
};

const CITIES: City[] = [
  {
    slug: "newyork",
    name: "New York",
    title: "New York - Florist Network",
    description: "The Big Apple",
    longDescription:
      "Discover premium floral arrangements in New York City through our Florist Network. From Central Park roses to Times Square orchids, our Manhattan florists deliver fresh bouquets for Broadway celebrations and Wall Street successes. Same-day delivery across all boroughs with sustainable, locally-sourced flowers.",
  },
  {
    slug: "losangeles",
    name: "Los Angeles",
    title: "Los Angeles - Florist Network",
    description: "City of Angels",
    longDescription:
      "Experience Hollywood glamour in Los Angeles with our Florist Network's exquisite bouquets. Tropical orchids and sunflowers as golden as California sunsets, delivered to Malibu beaches and Beverly Hills hills. Organic, fresh arrangements for red carpet events and beach weddings throughout the City of Angels.",
  },
  {
    slug: "chicago",
    name: "Chicago",
    title: "Chicago - Florist Network",
    description: "The Windy City",
    longDescription:
      "Find bold floral designs in Chicago through our Florist Network. Arrangements inspired by the city's architecture, from deep burgundy roses to diverse wildflowers. Fresh bouquets for Wrigley Field victories and Loop business successes, with eco-friendly delivery across the Windy City.",
  },
  {
    slug: "miami",
    name: "Miami",
    title: "Miami - Florist Network",
    description: "The Magic City",
    longDescription:
      "Dive into tropical beauty in Miami with our Florist Network's vibrant bouquets. Exotic bird-of-paradise and hibiscus flowers reflecting Ocean Drive's Art Deco charm. Fresh arrangements for Calle Ocho festivals and beach celebrations, delivered throughout Miami-Dade with sustainable practices.",
  },
  {
    slug: "sanfrancisco",
    name: "San Francisco",
    title: "San Francisco - Florist Network",
    description: "The Golden City",
    longDescription:
      "Embrace San Francisco's charm with our Florist Network's artisanal bouquets. Calla lilies as elegant as the Golden Gate Bridge, featuring organic wildflowers. Sustainable arrangements for tech successes and wine country excursions, with fast delivery across the Bay Area's progressive neighborhoods.",
  },
  {
    slug: "boston",
    name: "Boston",
    title: "Boston - Florist Network",
    description: "The Cradle of Liberty",
    longDescription:
      "Celebrate Boston's heritage with our Florist Network's thoughtful arrangements. Deep blue delphiniums and structured bouquets honoring the Freedom Trail. Fresh flowers for Harvard achievements and Fenway victories, delivered with tradition and innovation throughout Greater Boston.",
  },
  {
    slug: "seattle",
    name: "Seattle",
    title: "Seattle - Florist Network",
    description: "The Emerald City",
    longDescription:
      "Immerse in Seattle's greenery with our Florist Network's stunning bouquets. Rhododendrons as vibrant as coffee culture, featuring local berries and evergreens. Sustainable arrangements for music festivals and outdoor adventures, with eco-friendly delivery across the Emerald City's diverse areas.",
  },
  {
    slug: "denver",
    name: "Denver",
    title: "Denver - Florist Network",
    description: "The Mile High City",
    longDescription:
      "Reach new heights in Denver with our Florist Network's breathtaking bouquets. Columbines and mountain wildflowers capturing Rocky Mountain beauty. Fresh arrangements for brewery tours and outdoor adventures, delivered sustainably across the Mile High City's vibrant communities.",
  },
  {
    slug: "austin",
    name: "Austin",
    title: "Austin - Florist Network",
    description: "The Live Music Capital",
    longDescription:
      "Feel Austin's vibrant energy with our Florist Network's dynamic bouquets in the Live Music Capital. Bluebonnets and wildflowers capture Texas charm, perfect for music festivals and outdoor adventures. Creative florists deliver fresh arrangements across Central Texas, from Sixth Street to Zilker Park, with friendly service and local flair.",
  },
  {
    slug: "nashville",
    name: "Nashville",
    title: "Nashville - Florist Network",
    description: "Music City",
    longDescription:
      "Discover Nashville's musical soul through our Florist Network's harmonious bouquets in Music City. Sunflowers and magnolias echo country roots and Southern charm, ideal for Opry shows and honky-tonk celebrations. Talented florists deliver fresh flowers across Middle Tennessee, blending tradition with innovation for every occasion.",
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    title: "Philadelphia - Florist Network",
    description: "City of Brotherly Love",
    longDescription:
      "Explore Philadelphia's historic charm with our Florist Network's distinguished bouquets in the City of Brotherly Love. Mountain laurel and local blooms honor revolutionary heritage, perfect for cheesesteak gatherings and cultural events. Expert florists deliver thoughtful arrangements throughout the Delaware Valley, combining tradition and modern elegance.",
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    title: "Atlanta - Florist Network",
    description: "The ATL",
    longDescription:
      "Experience Atlanta's rising spirit with our Florist Network's spectacular bouquets in the ATL. Azaleas and peaches symbolize Southern roots and global ambition, ideal for conferences and festivals. Innovative florists deliver fresh flowers across the Southeast, blending hospitality with modern progress.",
  },
  {
    slug: "portland",
    name: "Portland",
    title: "Portland - Florist Network",
    description: "The City of Roses",
    longDescription:
      "Bloom in Portland's creative haven with our Florist Network's artistic bouquets in the City of Roses. Roses and wildflowers capture Oregon's natural beauty and sustainability, perfect for food scenes and outdoor adventures. Passionate florists deliver eco-friendly arrangements throughout the Pacific Northwest, inspiring with nature's harmony.",
  },
  {
    slug: "lasvegas",
    name: "Las Vegas",
    title: "Las Vegas - Florist Network",
    description: "Sin City",
    longDescription:
      "Experience Las Vegas's dazzling spectacle with our Florist Network's extravagant bouquets in Sin City. Exotic orchids and desert blooms reflect theatrical glory, ideal for high-roller celebrations and nightlife. Glamorous florists deliver premium flowers across Southern Nevada, shining as brightly as the Strip's neon lights.",
  },
  {
    slug: "sandiego",
    name: "San Diego",
    title: "San Diego - Florist Network",
    description: "America's Finest City",
    longDescription:
      "Sail into San Diego's paradise with our Florist Network's beautiful bouquets in America's Finest City. Bird-of-paradise and coastal wildflowers celebrate California's coastal charm, perfect for beach weddings and zoo visits. Skilled florists deliver fresh arrangements across San Diego County, blending sunshine, innovation, and coastal beauty.",
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
