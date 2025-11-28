import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Services | Global Bunkers US",
  description:
    "Explore our security services including bunkers, panic rooms, safes, bulletproof glass, and bank liquidation solutions.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore our comprehensive range of security solutions and custom
            installations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="aspect-[4/3] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-accent font-semibold">
                      Learn More
                      <svg
                        className="w-5 h-5 ml-1 group-hover:ml-2 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Every project we showcase was custom-designed for our client&apos;s
            specific needs
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
