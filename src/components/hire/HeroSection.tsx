import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-secondary py-12 flex flex-col items-center border-b border-border">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-accent shadow mb-6 bg-white overflow-hidden">
        <Image
          src="/images/dylan-construction.png"
          fill
          alt="Cartoon of Dylan with a resume and hard hat (placeholder)"
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
        Hire Me
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
        Looking for a reliable, experienced contractor or team member? Here&apos;s what I bring to your crew or company.
      </p>
    </section>
  );
}
