import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "@/lib/service-data";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export const metadata: Metadata = {
  title: "Security Services | Bunkers & Panic Rooms | Bay Area",
  description:
    "Custom bunkers, panic rooms, bulletproof glass & safes in the Bay Area. Over 35 years of security expertise. Contact us today for a free consultation.",
  keywords: [
    "security services Bay Area",
    "bunkers California",
    "panic rooms San Francisco",
    "bulletproof glass Bay Area",
    "bank vault liquidation",
    "safe installation CA",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Security Services | Bunkers & Panic Rooms | Bay Area",
    description:
      "Custom bunkers, panic rooms, bulletproof glass & safes in the Bay Area. 35+ years of security expertise. Contact us for a free consultation.",
    url: `${BASE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a0a0f] text-white py-20">
        <div className="container-custom">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">What We Build</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            From custom vault rooms and underground bunkers to bulletproof glass
            and bank-grade safes — we design, fabricate, and install complete
            security solutions for residential, commercial, and government clients.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 border-b border-gray-100">
        <div className="container-custom max-w-4xl">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Global Bunkers US has been protecting families, businesses, and
            institutions since 1988. Every project is custom-engineered to your
            property, threat profile, and budget — we don&apos;t sell
            off-the-shelf solutions. Our team handles the full process: site
            assessment, design, fabrication, delivery, and installation.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Browse our services below. Each page includes a full project gallery
            and detailed description of what&apos;s included.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={service.coverImagePosition ? { objectPosition: service.coverImagePosition } : undefined}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h2 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h2>
                  <p className="text-gray-500 text-sm flex-1 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 bg-[#0a0a0f] text-white">
        <div className="container-custom max-w-4xl">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Why Us</p>
          <h2 className="text-3xl font-bold mb-8">Why Global Bunkers US?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "35+ Years of Experience", body: "Founded in 1988, we have completed hundreds of installations across the Bay Area and beyond. Our track record speaks for itself." },
              { title: "Custom Fabrication", body: "We fabricate steel plate walls, vault doors, and ballistic panels in-house — no middlemen, tighter tolerances, and full control over quality." },
              { title: "Bank-Grade Equipment", body: "Through our bank liquidation division we source vault doors, safes, and deposit boxes directly from decommissioned financial institutions — at a fraction of new cost." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-xl p-6 transition-all duration-300">
                <h3 className="text-lg font-bold mb-2 text-accent">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#0a0a0f] via-secondary to-[#0a0a0f] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect What Matters?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Every project starts with a free site consultation. We&apos;ll assess
            your space, understand your needs, and provide a detailed proposal —
            no obligation.
          </p>
          <Link href="/contact" className="btn-secondary text-lg px-10 py-4 inline-flex items-center gap-2">
            Request a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
