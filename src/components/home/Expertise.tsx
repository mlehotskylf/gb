export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Residential",
      description: "Custom bunkers, panic rooms & vault rooms for private homes. Designed to blend in, built to hold up.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Commercial",
      description: "Bank-grade vaults, secure storage & bulletproof installations for businesses that can't afford a breach.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Government",
      description: "Military-spec security for government buildings, secure facilities, and sensitive installations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "High-Value Storage",
      description: "Purpose-built rooms for art, jewelry, firearms, documents & digital assets — with the security to match.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: "35+", label: "Years in business" },
    { value: "500+", label: "Projects completed" },
    { value: "24/7", label: "Emergency availability" },
    { value: "100%", label: "Custom built" },
  ];

  return (
    <section className="section-padding bg-secondary text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text + stats */}
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We Build for<br />Every Threat Level
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              From a hidden home panic room to a blast-resistant government facility —
              our team has done it all. Every project gets the same obsessive attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-accent pl-4">
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — expertise cards */}
          <div className="grid grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 p-6 rounded-xl transition-all duration-300"
              >
                <div className="text-accent mb-3">{area.icon}</div>
                <h3 className="font-bold mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
