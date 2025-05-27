import HeroSection from "./components/shared/HeroSection";
import { Button } from "./components/ui/button";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import FeaturedProjectsSection from "./components/home/FeaturedProjectsSection";
import ProfessionalSummarySection from "./components/home/ProfessionalSummarySection";
import CertificationsSection from "./components/home/CertificationsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ContactSection from "./components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
        <HeroSection
          imageSrc="/images/dylan-happy.png"
          imageAlt="Cartoon of Dylan the contractor, smiling and holding a hammer"
          title="Hi, I'm Dylan. Let's Build Something Great Together."
          description="25+ years of honest, high-quality construction and renovation in London, Ontario."
          actions={
            <>
              <Button asChild size="lg">
                <a href="/work">
                  My Work
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/hire">
                  Hire Me
                </a>
              </Button>
            </>
          }
        />
        <AboutSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <ProfessionalSummarySection />
        <CertificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    );
  }
