import HeroCarousel from "@/components/home/HeroCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicePreview from "@/components/home/ServicePreview";
import HowItWorks from "@/components/home/HowItWorks";
import Expertise from "@/components/home/Expertise";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServicePreview />
      <WhyChooseUs />
      <HowItWorks />
      <Expertise />
      <CTASection />
    </>
  );
}
