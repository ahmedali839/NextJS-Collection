import Hero from "@/components/Hero";
import FeaturedTeas from "@/components/FeaturedTeas";
import WhyUs from "@/components/WhyUs";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTeas />
      <WhyUs />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
