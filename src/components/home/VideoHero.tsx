"use client";

import Link from "next/link";

export default function VideoHero() {
  return (
    <section className="relative h-[500px] md:h-[620px] overflow-hidden bg-gray-900">
      {/* Fallback image shown while video loads */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/hero-1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/globalbunkers.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl text-white">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              San Francisco Bay Area · Since 1988
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Security Solutions<br className="hidden md:block" /> Built to Last
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Custom bunkers, panic rooms, vault rooms, bulletproof glass & safes.
              Expert installation across California.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
