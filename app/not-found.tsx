"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { rootDomain, protocol } from "@/lib/utils";

export default function NotFound() {
  const [city, setCity] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Extract city slug from the router path if present
    if (pathname?.startsWith("/s/")) {
      const extracted = pathname.split("/")[2];
      if (extracted) {
        setCity(extracted);
      }
    } else {
      // Try to extract from hostname for direct subdomain access
      const hostname = window.location.hostname;
      if (hostname.includes(`.${rootDomain.split(":")[0]}`)) {
        const extracted = hostname.split(".")[0];
        setCity(extracted);
      }
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-blue-50 to-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {city ? (
            <>
              <span className="text-blue-600">
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </span>{" "}
              doesn't exist
            </>
          ) : (
            "City Not Found"
          )}
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          This city hasn't been created yet.
        </p>
      </div>
    </div>
  );
}
