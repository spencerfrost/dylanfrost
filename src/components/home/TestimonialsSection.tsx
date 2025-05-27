export default function TestimonialsSection() {
  return (
    <section className="w-full max-w-2xl mb-8">
      <h2 className="text-xl font-semibold mb-2">What Clients Say</h2>
      <div className="bg-card rounded p-4 mb-2 shadow-sm">
        <p className="italic">
          &ldquo;Dylan renovated our kitchen and the results were fantastic. He
          was professional, on time, and the quality was top notch.&rdquo;
        </p>
        <span className="block text-sm text-muted-foreground mt-2">
          — Satisfied Homeowner
        </span>
      </div>
      <div className="bg-card rounded p-4 shadow-sm">
        <p className="italic">
          &ldquo;We trust Dylan for all our property upgrades. He&apos;s reliable,
          honest, and always delivers.&rdquo;
        </p>
        <span className="block text-sm text-muted-foreground mt-2">
          — Property Manager
        </span>
      </div>
    </section>
  );
}
