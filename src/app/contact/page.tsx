import ContactForm from "@/app/components/ui/contact-form";
import { Card } from "@/app/components/ui/card";
import { MapPin, Clock, Shield } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dylan Frost - Experienced Contractor & Carpenter",
  description: "Get in touch for construction projects, employment opportunities, or general inquiries. 25+ years experience in London and St. Thomas, Ontario.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection
        imageSrc="/images/dylan-main.png"
        imageAlt="Cartoon of Dylan the contractor, ready to help with your project"
        title="Let's Connect"
        description="Whether you're interested in my construction services, considering me for a position, or just want to connect, I'd love to hear from you. I respond to all inquiries within 24-48 hours."
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Service Area
                </h3>
                <p className="text-muted-foreground">
                  I proudly serve London, St. Thomas, and surrounding areas in
                  Southwestern Ontario. Travel fees may apply for projects outside
                  the immediate area.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24-48 hours. For urgent
                  matters, please call directly and I&apos;ll do my best to respond
                  the same day.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Your Privacy
                </h3>
                <p className="text-muted-foreground">
                  Your contact information is never shared with third parties.
                  I use it solely to communicate with you and provide
                  the best possible service.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
