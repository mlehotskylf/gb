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
      title: "Testing & Training",
      description: "We thoroughly test all systems and provide comprehensive training on operation and maintenance to ensure you're completely confident."
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "Enjoy peace of mind with our warranty, maintenance services, and 24/7 emergency support whenever you need assistance."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures a smooth experience from initial contact to final installation and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-accent opacity-20 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow for desktop (except last item in each row) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-accent opacity-30">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to get started on your security project?
          </p>
          <a
            href="/contact"
            className="btn-primary text-lg px-10 py-4 inline-block"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
