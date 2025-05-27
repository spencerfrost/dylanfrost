import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full max-w-3xl flex flex-col items-center py-12 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-border bg-white overflow-hidden flex-shrink-0">
          <Image
            src="/images/dylan-main.png"
            fill
            alt="Cartoon of Dylan with a toolbelt"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">
            A Contractor You Can Trust
          </h2>
          <p className="text-base text-muted-foreground max-w-xl">
            I&apos;m Dylan Frost, a trusted contractor serving London and St. Thomas with 
            over 25 years of experience. I believe in delivering exceptional quality, 
            honest communication, and treating every project like it&apos;s my own home. 
            From residential renovations to commercial projects, I&apos;m committed to 
            exceeding your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center text-sm text-muted-foreground mt-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> 89 Sterling St, London, ON
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> 519-670-9420
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />{" "}
              <a href="mailto:dylanfrost@gmail.com" className="underline">
                dylanfrost@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
