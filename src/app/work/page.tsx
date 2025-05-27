import HeroSection from "@/components/shared/HeroSection";
import ProjectGallery from "@/components/work/ProjectGallery";
import TestimonialsSection from "@/components/work/TestimonialsSection";
import CallToActionSection from "@/components/work/CallToActionSection";
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
