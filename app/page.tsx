import { getAllCities } from "../lib/subdomains";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import type { Metadata } from "next";
import { protocol, rootDomain } from "../lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Florist Network - Choose Your City",
    description:
      "Find the perfect flowers for your city. Choose from our network of local florists.",
    alternates: {
      canonical: `${protocol}://${rootDomain}`,
    },
  };
}

export default async function HomePage() {
  const cities = await getAllCities();

  return (
    <div className="flex grow flex-col items-center justify-center bg-linear-to-b from-blue-50 to-white p-4 relative">
      <div className="w-full max-w-6xl my-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose Your City
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`${protocol}://${city.slug}.${rootDomain}`}
              className="block transition-transform hover:scale-105"
            >
              <Card className="min-h-48 overflow-hidden pt-0">
                <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500">
                  Image Placeholder
                </div>
                <CardHeader>
                  <CardTitle>{city.name}</CardTitle>
                  <CardDescription>{city.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
