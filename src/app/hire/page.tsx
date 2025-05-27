import HeroSection from "@/components/shared/HeroSection";
import SkillsSection from "@/components/hire/SkillsSection";
import ExperienceSection from "@/components/hire/ExperienceSection";
import ComplianceSection from "@/components/hire/ComplianceSection";
import WhyHireSection from "@/components/hire/WhyHireSection";
import ContactSection from "@/components/hire/ContactSection";
import { Separator } from "@/components/ui/separator";
export default function Hire() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection
        imageSrc="/images/dylan-construction.png"
        imageAlt="Cartoon of Dylan with a resume and hard hat (placeholder)"
        title="Hire Me"
        description="Looking for a reliable, experienced construction and renovation specialist to bring over 25 years of hands-on expertise to your crew or company? I'm seeking to leverage my comprehensive skills in carpentry, structural modifications, and project management, potentially within the Carpenters Union."
        borderColor="accent"
      />
      <SkillsSection />
      <ExperienceSection />
      <ComplianceSection />
      <WhyHireSection />
      <Separator className="mb-4" />
      <ContactSection />
    </div>
  );
}
