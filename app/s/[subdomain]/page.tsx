import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCities, getCityData } from "@/lib/subdomains";
import { protocol, rootDomain } from "@/lib/utils";

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
    title: `${city}.${rootDomain}`,
    description: `City page for ${city}.${rootDomain}`,
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

  if (!cityData) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-blue-50 to-white p-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Welcome to {cityData.name}
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            {cityData.name ? cityData.description : "This is the city page."}
          </p>
        </div>
      </div>
    </div>
  );
}
