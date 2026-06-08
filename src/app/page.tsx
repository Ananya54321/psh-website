import {
  DoctorsSection,
  FAQSection,
  FacilitiesSection,
  Footer,
  Header,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/pages";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* place the accepted insurances here */}
      <HeroSection />
      <FacilitiesSection />
      <ServicesSection />
      {/* <StatsSection /> */}
      <DoctorsSection />
      <TestimonialsSection />
      {/* <AboutSection /> */}
      <FAQSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
