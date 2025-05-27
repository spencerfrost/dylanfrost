"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const handlePhoneClick = () => {
    // Construct phone number to avoid scraping
    const phoneDigits = ['519', '670', '9420'];
    const phone = phoneDigits.join('');
    window.location.href = `tel:+1${phone}`;
  };

  return (
    <section className="w-full max-w-2xl mb-8 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Let&apos;s Build Something Great Together
      </h2>
      <p className="mb-6 text-base text-muted-foreground">
        Ready to start your next project? Get a free, no-obligation quote today. 
        I&apos;d love to discuss your vision and show you how we can bring it to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/contact">
            Request a Free Quote
          </Link>
        </Button>
        <Button 
          onClick={handlePhoneClick}
          size="lg" 
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/work">
            View My Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
