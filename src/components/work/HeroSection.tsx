import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-secondary py-12 flex flex-col items-center justify-center border-b border-border">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary shadow mb-6 bg-white overflow-hidden">
        <Image
          src="/images/dylan-work.png"
          fill
          alt="Gallery of Dylan's construction projects (placeholder)"
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
        My Work
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
        Explore some of my recent projects and see the quality and care I bring
        to every job.
      </p>
    </section>
  );
}
