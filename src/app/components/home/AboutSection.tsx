"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const handlePhoneClick = () => {
    const phoneDigits = ["519", "670", "9420"];
    const phone = phoneDigits.join("");
    window.location.href = `tel:+1${phone}`;
  };
  return (
    <section className="flex flex-col items-center py-12 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="text-center w-full">
          <h2 className="text-2xl font-bold mb-2 underline">
            A Contractor You Can Trust
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto sm:mx-0">
            I&apos;m Dylan Frost, a trusted contractor serving London and St.
            Thomas with over 25 years of experience. I believe in delivering
            exceptional quality, honest communication, and treating every
            project like it&apos;s my own home. From residential renovations to
            commercial projects, I&apos;m committed to exceeding your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center text-sm text-muted-foreground mt-4 justify-center">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Serving London & St. Thomas, ON
            </span>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={handlePhoneClick}
              className="flex items-center gap-1 underline hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call for Quote
            </button>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/contact"
              className="flex items-center gap-1 underline hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
