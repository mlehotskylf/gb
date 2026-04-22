"use client";

import Link from "next/link";

export default function VideoHero() {
  return (
    <section className="relative h-[560px] md:h-[620px] overflow-hidden bg-gray-900">
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

      {/* Dark gradient overlay — extra dark at bottom for service strip legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl text-white">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              San Francisco Bay Area · Since 1988
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              When Safety<br className="hidden md:block" /> Isn&apos;t Optional
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Underground bunkers, panic rooms, vault rooms & bulletproof glass —
              built to protect what matters most.
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

      {/* Service quick-nav strip — pinned to bottom of hero, hidden on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
        <div className="container-custom">
          <p className="text-white/40 text-xs italic text-right pb-1">Bunker interior walkthrough</p>
          <div className="flex flex-wrap gap-2 pb-5">
            {[
              { label: "Panic & Safe Rooms", href: "/services/panic-safe-rooms" },
              { label: "Vault Rooms", href: "/services/vault-rooms" },
              { label: "Bunkers & Bomb Shelters", href: "/services/bunkers" },
              { label: "Bulletproof Glass", href: "/services/bulletproof-glass" },
              { label: "Any Type of Safes", href: "/services/safes" },
              { label: "Bank Liquidation", href: "/services/bank-liquidation" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm font-semibold text-white bg-white/10 hover:bg-accent border border-white/25 hover:border-accent px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
