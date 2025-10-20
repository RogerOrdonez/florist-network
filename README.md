# Florist Network

A multi-tenant application for cities using subdomains, built with Next.js 15.

## Tech Stack

- Next.js 15 with App Router
- React 19
- Upstash Redis
- Tailwind CSS
- shadcn/ui

## Getting Started

1. Install dependencies: `pnpm install`
2. Set up `.env.local` with Redis credentials
3. Run: `pnpm dev`
4. Access: http://localhost:3000 (main), http://[city].localhost:3000 (cities), /admin (management)

## Deployment

Deploy on Vercel with wildcard DNS for subdomains.
