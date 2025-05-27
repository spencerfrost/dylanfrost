import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  project?: string;
}

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col h-full">
        {testimonial.project && (
          <div className="mb-3">
            <Badge variant="outline" className="text-xs">
              {testimonial.project}
            </Badge>
          </div>
        )}
        <p className="italic text-muted-foreground mb-4 flex-1">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="text-sm font-medium">
          — {testimonial.author}
        </p>
      </CardContent>
    </Card>
  );
}

export type { Testimonial, TestimonialCardProps };
