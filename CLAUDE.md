# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Global Bunkers US marketing website — a Next.js 14 App Router site for a security solutions company (bunkers, panic rooms, safes, bulletproof glass, bank liquidation). Deployed on Vercel.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (extends `next/core-web-vitals`)
- `npm start` — serve production build

## Architecture

**Next.js 14 App Router** with TypeScript and Tailwind CSS. No backend — static content site with client-side interactivity.

**Routing:** Pages live in `src/app/`. Services use a dynamic `[slug]` route that looks up categories from `src/lib/service-data.ts`.

**Content model:** All service data (categories, image galleries) is defined in `src/lib/service-data.ts` as a static array of `ServiceCategory` objects. Types are in `src/types/index.ts`. To add/edit services, modify this file — no CMS or database.

**Components:**
- `src/components/layout/` — Header, Footer (used in root layout)
- `src/components/home/` — Homepage sections (HeroCarousel, ServicePreview, WhyChooseUs, HowItWorks, Expertise, CTASection)
- `src/components/ui/` — Shared UI (ContactForm, Lightbox)

**Images:** Static images in `public/images/` organized as `galleries/{category-slug}/`, `hero/`, `logos/`. Service detail pages open images in a Lightbox component.

**Styling:** Tailwind with custom theme colors (`primary`, `secondary`, `accent`) and utility classes (`btn-primary`, `btn-secondary`, `container-custom`, `section-padding`) defined in `src/app/globals.css`. Font: Raleway via `next/font/google`.

**Path alias:** `@/*` maps to `./src/*`.

**Remote images:** `next.config.mjs` allows images from `images.format-assets.com` and `format.creatorcdn.com`.

## Notes

- Contact form posts to `POST /api/contact`, which sends email via Resend. Requires `RESEND_API_KEY`, `CONTACT_EMAIL`, and optionally `RESEND_FROM_EMAIL` and `CONTACT_CC_EMAIL` env vars.
- The `[slug]` service page is a server component (`page.tsx`) that exports `generateMetadata` and renders `ServicePageClient.tsx` (a client component) which handles lightbox state.
