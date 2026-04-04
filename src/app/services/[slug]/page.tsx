import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/service-data";
import { serviceMetaMap } from "@/lib/service-metadata";
import ServicePageClient from "./ServicePageClient";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const meta = serviceMetaMap[params.slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
