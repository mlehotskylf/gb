export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Residential Protection",
      description: "Secure your home and family with custom bunkers, panic rooms, and advanced security systems tailored to your property.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Commercial Security",
      description: "Protect your business assets with bank-grade vaults, secure storage rooms, and bulletproof installations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Government Facilities",
      description: "Military-grade security solutions for government buildings, secure facilities, and sensitive installations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "High-Value Storage",
      description: "Specialized solutions for storing valuable items, documents, data, and irreplaceable assets with maximum security.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const certifications = [
    "Licensed Security Contractor",
    "Certified Safe Technician",
    "Blast-Resistant Construction Specialist",
    "FEMA Compliant Installations",
    "Military Specification Equipment",
    "Bank Vault Installation Certified"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Specialized Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From residential homes to government facilities, we deliver comprehensive security solutions across all sectors
          </p>
        </div>

        {/* Expertise areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-accent mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {area.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-white/20 pt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Certifications & Standards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 p-4 rounded-lg"
              >
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
