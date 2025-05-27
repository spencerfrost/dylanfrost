interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Dylan's attention to detail and communication made our renovation stress-free. Highly recommend!",
    author: "Homeowner, London"
  },
  {
    id: "testimonial-2",
    quote: "Professional, reliable, and the results speak for themselves.",
    author: "Repeat Client"
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded p-4 mb-2 shadow-sm">
      <p className="italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <span className="block text-sm text-gray-500 mt-2">
        — {testimonial.author}
      </span>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 mb-8">
      <h2 className="text-xl font-semibold mb-2 text-center">What Clients Say</h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={testimonial.id} 
          testimonial={testimonial}
        />
      ))}
    </section>
  );
}
