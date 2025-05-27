"use client";

import { Button } from "@/app/components/ui/button";
import { Download, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const handlePhoneClick = () => {
    const phoneDigits = ['519', '670', '9420'];
    const phone = phoneDigits.join('');
    window.location.href = `tel:+1${phone}`;
  };
  return (
    <section className="w-full max-w-4xl mb-8 text-center">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Let&apos;s Work Together</h2>
        <p className="text-muted-foreground mb-4">Ready to discuss your next project? Get in touch!</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button
            asChild
            size="lg"
            className="bg-yellow-700 hover:bg-yellow-800 text-white"
          >
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>

          <Button
            onClick={handlePhoneClick}
            size="lg"
            variant="outline"
            className="border-yellow-700 text-yellow-700 hover:bg-yellow-50"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call for Quote
          </Button>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="bg-yellow-700 hover:bg-yellow-800 text-white"
      >
        <a href="/DylanResume.md" download>
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </section>
  );
}
