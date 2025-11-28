import Link from "next/link";

const services = [
  {
    id: "bank-liquidation",
    title: "Bank Liquidation",
    description: "High-security vaults and safes from financial institutions",
    image: "/images/galleries/bank-liquidation/bank-1.jpg",
    link: "/services/bank-liquidation",
  },
  {
    id: "panic-safe-rooms",
    title: "Panic & Safe Rooms",
    description: "Custom-built secure rooms for ultimate protection",
    image: "/images/galleries/panic-safe-rooms/panic-1.jpg",
    link: "/services/panic-safe-rooms",
  },
  {
    id: "bunkers",
    title: "Bunkers & Bomb Shelters",
    description: "Underground fortifications engineered for survival",
    image: "/images/galleries/bunkers/bunker-1.jpg",
    link: "/services/bunkers",
  },
  {
    id: "bulletproof-glass",
    title: "Bulletproof Glass",
    description: "Military-grade transparent armor for any application",
    image: "/images/galleries/bulletproof-glass/glass-1.png",
    link: "/services/bulletproof-glass",
  },
  {
    id: "safes",
    title: "Any Type of Safes",
    description: "From compact personal safes to massive vault systems",
    image: "/images/galleries/safes/safe-1.jpg",
    link: "/services/safes",
  },
];

export default function ServicePreview() {
  return (
    <section className="section-padding bg-white border-t-4 border-accent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional installation and custom solutions for ultimate protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Image Background */}
              <div className="aspect-[16/9] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <span className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
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

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
