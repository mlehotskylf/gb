import type { Metadata } from "next";
import Link from "next/link";
import { galleryCategories } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Galleries | Global Bunkers US",
  description:
    "View our portfolio of security solutions including bunkers, panic rooms, safes, bulletproof glass, and bank liquidation projects.",
};

export default function GalleriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Galleries</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore our extensive portfolio of security solutions and custom
            installations
          </p>
        </div>
      </section>

      {/* Galleries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((gallery) => (
              <Link
                key={gallery.id}
                href={`/galleries/${gallery.slug}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Gallery Image */}
                <div className="aspect-[4/3] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {gallery.title}
                    </h2>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                      {gallery.description}
                    </p>
                    <span className="inline-flex items-center text-accent font-semibold">
                      View Gallery
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
