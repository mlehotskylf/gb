import type { Metadata } from "next";
import VideoHero from "@/components/home/VideoHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicePreview from "@/components/home/ServicePreview";
import HowItWorks from "@/components/home/HowItWorks";
import Expertise from "@/components/home/Expertise";
import CTASection from "@/components/home/CTASection";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export const metadata: Metadata = {
  title: "Global Bunkers US | Bay Area Security Solutions Since 1988",
  description:
    "San Francisco's premier provider of bunkers, panic rooms, bulletproof glass & safes since 1988. Serving the Bay Area. Free consultation: (415) 990-8051.",
  keywords: [
    "bunkers San Francisco",
    "panic rooms Bay Area",
    "bulletproof glass California",
    "safe rooms SF",
    "security solutions Bay Area",
    "bomb shelter California",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Global Bunkers US | Bay Area Security Solutions Since 1988",
    description:
      "San Francisco's premier provider of bunkers, panic rooms, bulletproof glass & safes since 1988. Serving the Bay Area. Free consultation: (415) 990-8051.",
    url: BASE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <ServicePreview />
      <WhyChooseUs />
      <HowItWorks />
      <Expertise />
      <CTASection />
    </>
  );
}
