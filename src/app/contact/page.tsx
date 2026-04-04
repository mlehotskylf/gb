import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export const metadata: Metadata = {
  title: "Contact Global Bunkers US | San Francisco, CA 94123",
  description:
    "Contact Global Bunkers US in San Francisco, CA. Call (415) 990-8051 for custom bunkers, panic rooms & safes. 24/7 emergency service. Free consultation.",
  keywords: [
    "contact Global Bunkers",
    "security company San Francisco",
    "bunker installation Bay Area",
    "panic room contractor CA",
    "bulletproof glass SF",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Global Bunkers US | San Francisco, CA 94123",
    description:
      "Contact Global Bunkers US in San Francisco, CA. Call (415) 990-8051 for custom bunkers, panic rooms & safes. 24/7 emergency service. Free consultation.",
    url: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Let us get in touch with you! We&apos;re here to answer your questions
            and discuss your security needs.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill in your details below and we will be in touch! For
                immediate assistance, please call us directly.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+14159908051"
                      className="text-primary hover:text-accent text-lg font-bold transition-colors"
                    >
                      (415) 990-8051
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      24/7 Emergency Availability
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:contact@globalbunkers.us"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      contact@globalbunkers.us
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Billing Address
                    </h3>
                    <p className="text-gray-700">1592 Union St. Ste 216</p>
                    <p className="text-gray-700">San Francisco, CA 94123</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Emergency Service
                    </h3>
                    <p className="text-gray-700">
                      In Case of Emergency: 24/7 Availability
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-3">
                  Free Consultation Available
                </h3>
                <p className="text-gray-700">
                  We offer complimentary consultations to discuss your security
                  needs and provide expert recommendations tailored to your
                  specific situation.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
