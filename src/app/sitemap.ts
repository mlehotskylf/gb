import type { MetadataRoute } from "next";
import { serviceMetaMap } from "@/lib/service-metadata";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(serviceMetaMap).map(
    (slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...serviceRoutes];
}
