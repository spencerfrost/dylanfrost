export default function CallToActionSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-12 text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-lg mb-6">
        Let&apos;s discuss your vision and create something amazing together.
      </p>
      <a
        href="/hire"
        className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow hover:bg-primary/90 transition text-lg"
      >
        Get Started
      </a>
    </section>
  );
}
