import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export const metadata: Metadata = {
  title: "About Global Bunkers US | San Francisco Security Experts",
  description:
    "Since 1988, Global Bunkers US has served San Francisco and the Bay Area with custom bunkers, panic rooms & safes. 35+ years of expertise. Free consultation.",
  keywords: [
    "Global Bunkers US San Francisco",
    "Bay Area security company",
    "bunker installation California",
    "safe room experts SF",
    "security solutions since 1988",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Global Bunkers US | San Francisco Security Experts",
    description:
      "Since 1988, Global Bunkers US has served San Francisco and the Bay Area with custom bunkers, panic rooms & safes. 35+ years of expertise. Free consultation.",
    url: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a0a0f] text-white py-20">
        <div className="container-custom">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Since 1988</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            35 years building what others can&apos;t. Custom bunkers, panic rooms,
            vault rooms & bulletproof installations across California.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built From the Ground Up
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Global Bunkers US was founded in San Francisco in 1988 by Vince
                Neuwirth — a builder who believed that real security means
                engineering every detail yourself. Over 35 years later, that
                philosophy hasn&apos;t changed.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We design, fabricate, and install everything in-house: steel
                plate vault rooms, underground bunkers, panic rooms, bulletproof
                glass, and high-security safes. No subcontractors, no
                off-the-shelf solutions — every project is custom-built to your
                property and threat profile.
              </p>
              <p className="text-lg text-gray-700">
                Our clients include private homeowners, businesses, and
                institutions across California who need protection that
                actually holds up.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-xl shadow-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/imgi_5_PHOTO-2024-09-11-07-33-05.jpg"
                alt="Global Bunkers Security Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-[#0a0a0f] text-white">
        <div className="container-custom">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3 text-center">What We Build</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Panic & Safe Rooms", description: "Secure, fortified rooms integrated into your home or business for emergency protection and valuable storage.", href: "/services/panic-safe-rooms" },
              { title: "Vault Rooms", description: "Purpose-built steel and concrete rooms for protecting valuables, firearms collections, or sensitive assets.", href: "/services/vault-rooms" },
              { title: "Bunkers & Bomb Shelters", description: "Custom-designed underground fortifications built to withstand extreme conditions and provide ultimate protection.", href: "/services/bunkers" },
              { title: "Bulletproof Glass Doors & Windows", description: "Military-grade transparent armor for windows, doors, and partitions to protect against ballistic threats.", href: "/services/bulletproof-glass" },
              { title: "Any Type of Safes", description: "Any type of safe from compact personal safes to large vault systems for maximum security of your valuables.", href: "/services/safes" },
              { title: "Bank Liquidation", description: "Specialized services for acquiring and repurposing high-security equipment from decommissioned financial institutions.", href: "/services/bank-liquidation" },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white/5 border border-white/10 hover:border-accent/40 p-6 rounded-xl transition-all duration-300 block"
              >
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="text-accent font-semibold text-sm inline-flex items-center gap-1">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-xl shadow-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/imgi_4_Vince-and-Delia-Neuwirth.jpg"
                alt="Vince and Delia Neuwirth - Founders of Global Bunkers US"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience & Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                With over 35 years of experience, our team has successfully
                completed hundreds of security projects across the United States.
                We have worked with private individuals, businesses, and
                institutions to create customized security solutions that meet
                the highest standards.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our founder, Vince Neuwirth, along with our dedicated team,
                brings decades of industry knowledge and technical expertise to
                every project. We stay current with the latest security
                technologies and construction techniques to ensure our clients
                receive the most advanced protection available.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">
                    24/7 Emergency Service
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">
                    100% Custom Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#0a0a0f] via-secondary to-[#0a0a0f] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Security Needs?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation
          </p>
          <Link href="/contact" className="btn-secondary text-lg px-10 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
