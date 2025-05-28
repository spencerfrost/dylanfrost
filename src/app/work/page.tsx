import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ProjectGallery from "@/components/work/ProjectGallery";
import TestimonialsSection from "@/components/work/TestimonialsSection";
import CallToActionSection from "@/components/work/CallToActionSection";

export const metadata: Metadata = {
  title: "My Work - Dylan Frost Construction Portfolio | London, Ontario",
  description:
    "View Dylan Frost's construction portfolio showcasing 25+ years of residential and commercial renovation projects in London and St. Thomas, Ontario. Quality craftsmanship and attention to detail.",
  keywords:
    "construction portfolio, renovation projects, London Ontario contractor, residential construction, commercial renovation, custom carpentry, building projects",
  openGraph: {
    title: "My Work - Dylan Frost Construction Portfolio",
    description:
      "View Dylan's construction portfolio showcasing quality renovation and building projects in London, Ontario.",
    type: "website",
  },
};

export default function Work() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection
        imageSrc="/images/dylan-work.png"
        imageAlt="Gallery of Dylan's construction projects (placeholder)"
        title="My Work"
        description="Explore recent projects that showcase the quality, craftsmanship, and attention to detail I bring to every job. From complete renovations to custom builds, each project tells a story of transforming spaces and exceeding expectations."
      />
      <ProjectGallery />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}
