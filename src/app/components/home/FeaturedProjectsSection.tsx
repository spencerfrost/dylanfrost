import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  return (
    <section className="w-full max-w-6xl mb-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link href="/work" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105">
            <Image
              src="/images/dylan-work.png"
              fill
              alt="Dylan's construction work"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Quality Construction</h3>
              <p className="text-sm opacity-90">Professional craftsmanship</p>
            </div>
          </div>
        </Link>

        <Link href="/work" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105">
            <Image
              src="/images/dylan-construction.png"
              fill
              alt="Dylan's renovation project"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Home Renovation</h3>
              <p className="text-sm opacity-90">Complete transformation</p>
            </div>
          </div>
        </Link>

        <Link href="/work" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <h3 className="text-lg font-semibold mb-2">View All Projects</h3>
              <ArrowRight className="w-8 h-8 mx-auto" />
            </div>
          </div>
        </Link>
      </div>

      <div className="text-center hidden sm:block">
        <Button asChild variant="outline" size="lg">
          <Link href="/work">
            View My Complete Portfolio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
