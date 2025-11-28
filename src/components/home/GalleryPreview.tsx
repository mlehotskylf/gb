import Link from "next/link";

const galleries = [
  {
    id: "bank-liquidation",
    title: "Bank Liquidation",
    description: "High-security vaults and safes from financial institutions",
    image: "/images/galleries/bank-liquidation/bank-1.jpg",
    link: "/galleries/bank-liquidation",
  },
  {
    id: "panic-safe-rooms",
    title: "Panic & Safe Rooms",
    description: "Custom-built secure rooms for ultimate protection",
    image: "/images/galleries/panic-safe-rooms/panic-1.jpg",
    link: "/galleries/panic-safe-rooms",
  },
  {
    id: "bunkers",
    title: "Bunkers & Bomb Shelters",
    description: "Underground fortifications engineered for survival",
    image: "/images/galleries/bunkers/bunker-1.jpg",
    link: "/galleries/bunkers",
  },
  {
    id: "bulletproof-glass",
    title: "Bulletproof Glass",
    description: "Military-grade transparent armor for any application",
    image: "/images/galleries/bulletproof-glass/glass-1.png",
    link: "/galleries/bulletproof-glass",
  },
  {
    id: "safes",
    title: "Any Type of Safes",
    description: "From compact personal safes to massive vault systems",
    image: "/images/galleries/safes/safe-1.jpg",
    link: "/galleries/safes",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of custom security installations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={gallery.link}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gallery Image Background */}
              <div className="aspect-[4/3] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {gallery.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{gallery.description}</p>
                  <span className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                    See More
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
          <Link href="/galleries" className="btn-primary">
            View All Galleries
          </Link>
        </div>
      </div>
    </section>
  );
}
