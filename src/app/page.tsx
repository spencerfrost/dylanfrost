import SiteLayout from "../components/layout/SiteLayout";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjectsSection from "../components/home/FeaturedProjectsSection";
import ProfessionalSummarySection from "../components/home/ProfessionalSummarySection";
import CertificationsSection from "../components/home/CertificationsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <ProfessionalSummarySection />
        <CertificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </SiteLayout>
  );
}
