import type { MetadataRoute } from "next";
import { getAllCities, getProducts } from "@/lib/data";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";
  const protocol = rootDomain.includes("localhost") ? "http" : "https";
  const cities = await getAllCities();
  const products = getProducts();

  const urls = [
    {
      url: `${protocol}://${rootDomain}/`,
      lastModified: new Date().toISOString(),
    },
    ...cities.map((city) => ({
      url: `${protocol}://${city.slug}.${rootDomain}/`,
      lastModified: new Date().toISOString(),
    })),
    // Solo incluir productos en el dominio principal para evitar duplicación
    ...products.map((product) => ({
      url: `${protocol}://${rootDomain}/p/${product.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  return urls;
}
