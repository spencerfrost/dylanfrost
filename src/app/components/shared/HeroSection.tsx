import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly title: string | ReactNode;
  readonly description: string;
  readonly actions?: ReactNode;
  readonly borderColor?: "primary" | "accent";
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  title,
  description,
  actions,
  borderColor = "primary"
}: HeroSectionProps) {
  const borderClass = borderColor === "primary" ? "border-primary" : "border-accent";
  
  return (
    <section className="w-full bg-secondary px-4 py-12 flex flex-col items-center border-b border-border">
      <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 ${borderClass} shadow mb-6 bg-white overflow-hidden`}>
        <Image
          src={imageSrc}
          fill
          alt={imageAlt}
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mb-6">
        {description}
      </p>
      {actions && (
        <div className="flex gap-4 mb-4">
          {actions}
        </div>
      )}
    </section>
  );
}
