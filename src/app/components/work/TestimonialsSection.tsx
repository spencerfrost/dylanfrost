import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Dylan's attention to detail and communication made our kitchen renovation completely stress-free. The custom cabinetry exceeded our expectations, and he kept us informed every step of the way. Highly recommend!",
    author: "Sarah & Mike T., Old North London",
    project: "Kitchen Renovation"
  },
  {
    id: "testimonial-2",
    quote: "Professional, reliable, and the results speak for themselves. Our basement suite turned out better than we imagined, and Dylan ensured everything was done to code and beyond.",
    author: "Jennifer L., Southcrest London",
    project: "Basement Suite"
  },
  {
    id: "testimonial-3",
    quote: "The deck and pergola Dylan built has transformed our backyard into our favorite space. The craftsmanship is outstanding and it's held up beautifully through multiple seasons.",
    author: "David & Lisa M., Byron London",
    project: "Deck & Outdoor Living"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}
