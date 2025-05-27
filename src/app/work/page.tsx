import SiteLayout from "@/components/layout/SiteLayout";
import HeroSection from "@/components/work/HeroSection";
import ProjectGallery from "@/components/work/ProjectGallery";
import TestimonialsSection from "@/components/work/TestimonialsSection";
import CallToActionSection from "@/components/work/CallToActionSection";

export default function Work() {
  return (
    <SiteLayout>
      <HeroSection />
      <ProjectGallery />
      <TestimonialsSection />
      <CallToActionSection />
    </SiteLayout>
  );
}
