import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-secondary py-12 flex flex-col items-center border-b border-border">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary shadow mb-6 bg-white overflow-hidden">
        <Image
          src="/images/dylan-happy.png"
          fill
          alt="Cartoon of Dylan the contractor, smiling and holding a hammer"
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
        Hi, I&apos;m Dylan. Let&apos;s Build Something Great Together.
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
        25+ years of honest, high-quality construction and renovation in
        London, Ontario.
      </p>
      <div className="flex gap-4 mb-4">
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
      </div>
    </section>
  );
}
