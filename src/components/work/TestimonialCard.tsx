import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <p className="italic text-center mb-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="text-sm text-muted-foreground text-center">
          — {testimonial.author}
        </p>
      </CardContent>
    </Card>
  );
}

export type { Testimonial, TestimonialCardProps };
