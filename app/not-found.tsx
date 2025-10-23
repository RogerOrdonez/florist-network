"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center bg-linear-to-b from-blue-50 to-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
