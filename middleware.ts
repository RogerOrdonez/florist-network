import { type NextRequest, NextResponse } from "next/server";
import { rootDomain, protocol } from "@/lib/utils";

// Lightweight sanitizer for slugs — edge-safe and intentionally simple.
function sanitizeCitySlug(slug: string | null) {
  if (!slug) return null;
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, "") || null;
}

function extractCitySlug(request: NextRequest): string | null {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  // Local development: extract city slug from `city.localhost` hostnames
  if (hostname.includes(".localhost")) {
    return hostname.split(".")[0];
  }

  // Production / preview: remove port from configured root domain
  const rootDomainFormatted = rootDomain.split(":")[0];

  // Handle Vercel preview deployment URLs (city---branch-name.vercel.app)
  if (hostname.includes("---") && hostname.endsWith(".vercel.app")) {
    const parts = hostname.split("---");
    return parts.length > 0 ? parts[0] : null;
  }

  // Regular subdomain detection for root domain
  const isCitySubdomain =
    hostname !== rootDomainFormatted &&
    hostname !== `www.${rootDomainFormatted}` &&
    hostname.endsWith(`.${rootDomainFormatted}`);

  return isCitySubdomain
    ? hostname.replace(`.${rootDomainFormatted}`, "")
    : null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const city = extractCitySlug(request);

  if (city) {
    const sanitized = sanitizeCitySlug(city);

    // Block access to the admin page from city subdomains — redirect to the
    // canonical root domain so users land on the public site/admin there.
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(`${protocol}://${rootDomain}`);
    }

    // If the extracted slug contains unexpected characters, rewrite using
    // the sanitized version. We do not validate existence here because the
    // middleware runs at the edge and should avoid datastore calls.
    if (pathname === "/") {
      const target = sanitized ?? city;
      return NextResponse.rewrite(new URL(`/s/${target}`, request.url));
    }
  }

  // On the root domain, allow normal access
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|[\\w-]+\\.\\w+).*)",
  ],
};
