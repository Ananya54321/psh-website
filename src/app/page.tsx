import {
  Header,
  ImportantAlert,
  HeroSection,
  FacilitiesSection,
  ServicesSection,
  StatsSection,
  DoctorsSection,
  TestimonialsSection,
  AboutSection,
  FAQSection,
  ContactSection,
  Footer
} from "@/components/pages";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* place the accepted insurances here */}
      <ImportantAlert />
      <HeroSection />
      <FacilitiesSection />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <TestimonialsSection />
      {/* <AboutSection /> */}
      <FAQSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
