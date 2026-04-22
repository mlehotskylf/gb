import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "Contact us for a no-obligation consultation. We'll discuss your security needs, concerns, and budget to understand exactly what you require."
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "Our experts visit your location to evaluate the space, take measurements, and identify the best security solutions for your specific situation."
    },
    {
      number: "03",
      title: "Custom Design",
      description: "We create a detailed plan tailored to your property, incorporating your preferences, budget, and the highest security standards."
    },
    {
      number: "04",
      title: "Professional Installation",
      description: "Our certified team handles the complete installation with minimal disruption to your daily activities, ensuring quality at every step."
    },
    {
      number: "05",
      title: "Walkthrough & Handoff",
      description: "We walk you through every detail of the installation, test all systems together, and make sure you're fully confident before we leave."
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "Enjoy peace of mind with our warranty, maintenance services, and 24/7 emergency support whenever you need assistance."
    }
  ];

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From first call to final walkthrough — a clear, straightforward process with no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">{step.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-10 py-4 rounded-lg transition-colors duration-200"
          >
            Schedule Your Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
