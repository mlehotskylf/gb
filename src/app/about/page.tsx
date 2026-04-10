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
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            The premier provider of high-quality safes and security solutions
            since 1988
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitment to Security
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Global Bunkers US has been at the forefront of security
                solutions since 1988. Based in San Francisco, we have spent over
                three decades building a reputation for excellence and
                reliability in the security industry.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to provide comprehensive security solutions that
                give our clients complete peace of mind. Whether you need a
                custom bunker, a panic room, bulletproof glass installation, or
                any type of safe, we have the expertise and experience to
                deliver exceptional results.
              </p>
              <p className="text-lg text-gray-700">
                We understand that security is not one-size-fits-all. That&apos;s why
                every project we undertake is custom-designed to meet your
                specific needs and requirements.
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bunkers & Bomb Shelters",
                description:
                  "Custom-designed underground fortifications built to withstand extreme conditions and provide ultimate protection.",
                href: "/services/bunkers",
              },
              {
                title: "Panic & Safe Rooms",
                description:
                  "Secure, fortified rooms integrated into your home or business for emergency protection and valuable storage.",
                href: "/services/panic-safe-rooms",
              },
              {
                title: "High-Security Safes",
                description:
                  "Any type of safe from compact personal safes to large vault systems for maximum security of your valuables.",
                href: "/services/safes",
              },
              {
                title: "Bulletproof Glass",
                description:
                  "Military-grade transparent armor for windows, doors, and partitions to protect against ballistic threats.",
                href: "/services/bulletproof-glass",
              },
              {
                title: "Bank Liquidation",
                description:
                  "Specialized services for acquiring and repurposing high-security equipment from decommissioned financial institutions.",
                href: "/services/bank-liquidation",
              },
              {
                title: "Security Systems",
                description:
                  "Comprehensive security system integration including surveillance, access control, and alarm systems.",
                href: "/services",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-accent font-semibold inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="section-padding bg-primary text-white">
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
