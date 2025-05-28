import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ProfessionalSummarySection from "@/components/home/ProfessionalSummarySection";
import CertificationsSection from "@/components/home/CertificationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Dylan Frost - Professional Contractor & Carpenter | London, Ontario",
  description: "Professional contractor with 25+ years experience in construction, renovation, and custom carpentry. Serving London and St. Thomas, Ontario with quality craftsmanship and reliable service.",
  keywords: "contractor, carpenter, construction, renovation, London Ontario, St. Thomas Ontario, home improvement, custom carpentry, residential construction, quality craftsmanship",
  openGraph: {
    title: "Dylan Frost - Professional Contractor & Carpenter",
    description: "25+ years of quality construction and renovation services in London, Ontario.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection
        imageSrc="/images/dylan-happy.png"
        imageAlt="Cartoon of Dylan the contractor, smiling and holding a hammer"
        title={
        <>
          Hi, I'm Dylan. <br />
          Let's build something great together!
        </>
        }
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
