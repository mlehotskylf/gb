import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0a0a0f] via-secondary to-[#0a0a0f] text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Free consultations — no obligation, no pressure
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Our experts are available 24/7 for emergency situations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-secondary text-lg px-10 py-4"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+14159908051"
              className="flex items-center gap-2 text-xl font-bold hover:text-accent transition-colors"
            >
              <svg
                className="w-6 h-6"
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
              (415) 990-8051
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">35+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-300">Emergency Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-300">Custom Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
