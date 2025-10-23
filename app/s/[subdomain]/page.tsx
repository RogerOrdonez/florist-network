import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCities, getCityData } from "@/lib/subdomains";
import { protocol, rootDomain } from "@/lib/utils";
import { getProducts } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}): Promise<Metadata> {
  const { subdomain } = await params;
  const city = subdomain;
  const cityData = await getCityData(city);

  if (!cityData) {
    return { title: rootDomain };
  }

  return {
    title: cityData.title,
    description: cityData.description,
    alternates: {
      canonical: `${protocol}://${subdomain}.${rootDomain}`,
    },
  };
}

export async function generateStaticParams() {
  const cities = await getAllCities();
  return cities.map((city) => ({
    subdomain: city.name,
  }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const city = subdomain;
  const cityData = await getCityData(city);
  const products = getProducts();

  if (!cityData) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-blue-50 to-white p-4">
      <div className="flex-1 flex items-center justify-center mt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Welcome to {cityData.name}
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            {cityData.name ? cityData.description : "This is the city page."}
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/p/${product.slug}`}
              className="block transition-transform hover:scale-105"
            >
              <Card className="h-64 flex flex-col overflow-hidden pt-0">
                <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  Product Image
                </div>
                <CardHeader className="grow">
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-0">
                  <p className="text-lg font-semibold">${product.price}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
