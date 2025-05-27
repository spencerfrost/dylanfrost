import SiteLayout from "../components/layout/SiteLayout";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import WhatIOfferSection from "../components/home/WhatIOfferSection";
import ProfessionalSummarySection from "../components/home/ProfessionalSummarySection";
import SkillsCertificationsSection from "../components/home/SkillsCertificationsSection";
import KeyCapabilitiesSection from "../components/home/KeyCapabilitiesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <WhatIOfferSection />
        <ProfessionalSummarySection />
        <SkillsCertificationsSection />
        <KeyCapabilitiesSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </SiteLayout>
  );
}
