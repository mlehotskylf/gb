"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories } from "@/lib/service-data";
import Lightbox from "@/components/ui/Lightbox";
import type { ServiceCategory } from "@/types";

export default function ServicePageClient({
  service,
}: {
  service: ServiceCategory;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + service.images.length) % service.images.length
    );
  };

  const otherServices = serviceCategories.filter(
    (cat) => cat.id !== service.id
  );

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container-custom">
            <div className="mb-4">
              <Link
                href="/services"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Services
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              {service.description}
            </p>
          </div>
        </section>

        {/* Service Details & Gallery */}
        <section className="bg-gray-50 py-12">
          <div className="container-custom">
            <p className="text-base text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
              {service.description}
            </p>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Project Gallery
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our completed installations. Click any image to view in
              full size.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Explore More Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.slice(0, 4).map((cat) => (
                <Link key={cat.id} href={`/services/${cat.slug}`} className="group">
                  <div className="aspect-[4/3] rounded-lg mb-3 group-hover:shadow-lg transition-all overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.coverImage}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Contact us for a free consultation
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Get In Touch
            </Link>
          </div>
        </section>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={service.images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
