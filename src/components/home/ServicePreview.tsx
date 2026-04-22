import Link from "next/link";

const services = [
  {
    id: "panic-safe-rooms",
    title: "Panic & Safe Rooms",
    description: "Custom-built secure rooms for ultimate protection",
    image: "/images/galleries/panic-safe-rooms/panic-1.jpg",
    link: "/services/panic-safe-rooms",
    imagePosition: "center 20%",
  },
  {
    id: "vault-rooms",
    title: "Vault Rooms",
    description: "Purpose-built steel and concrete rooms for protecting valuables",
    image: "/images/galleries/vault-rooms/panic-20.jpg",
    link: "/services/vault-rooms",
  },
  {
    id: "bunkers",
    title: "Bunkers & Bomb Shelters",
    description: "Underground fortifications engineered for survival",
    image: "/images/galleries/bunkers/bunker-1.jpg",
    link: "/services/bunkers",
    imagePosition: "center 30%",
  },
  {
    id: "bulletproof-glass",
    title: "Bulletproof Glass Doors & Windows",
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
  {
    id: "bank-liquidation",
    title: "Bank Liquidation",
    description: "High-security vaults and safes from financial institutions",
    image: "/images/galleries/bank-liquidation/bank-1.jpg",
    link: "/services/bank-liquidation",
  },
];

export default function ServicePreview() {
  return (
    <section className="section-padding bg-white border-t-4 border-accent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional installation and custom solutions for ultimate protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-500 text-sm flex-1 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center gap-2 bg-steel hover:bg-steel-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
