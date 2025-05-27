import SiteLayout from "../../components/layout/SiteLayout";
import HeroSection from "../../components/hire/HeroSection";
import SkillsSection from "../../components/hire/SkillsSection";
import ExperienceSection from "../../components/hire/ExperienceSection";
import WhyHireSection from "../../components/hire/WhyHireSection";
import ContactSection from "../../components/hire/ContactSection";

export default function Hire() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <WhyHireSection />
        <ContactSection />
      </div>
    </SiteLayout>
  );
}
