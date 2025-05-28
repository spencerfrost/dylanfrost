import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import SkillsSection from "@/components/hire/SkillsSection";
import ExperienceSection from "@/components/hire/ExperienceSection";
import ComplianceSection from "@/components/hire/ComplianceSection";
import WhyHireSection from "@/components/hire/WhyHireSection";
import ContactSection from "@/components/hire/ContactSection";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Hire Dylan Frost - Experienced Contractor & Carpenter | London, Ontario",
  description:
    "Hire Dylan Frost, a professional contractor with 25+ years experience in construction, renovation, and carpentry. Available for employment in London and St. Thomas, Ontario.",
  keywords:
    "hire contractor, experienced carpenter, construction employment, renovation specialist, London Ontario jobs, building contractor, skilled tradesperson",
  openGraph: {
    title: "Hire Dylan Frost - Experienced Contractor & Carpenter",
    description:
      "Professional contractor with 25+ years experience seeking new opportunities in London, Ontario.",
    type: "website",
  },
};

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
