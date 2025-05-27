"use client";

import Link from "next/link";

export default function CallToActionSection() {
  const handlePhoneClick = () => {
    const phoneDigits = ['519', '670', '9420'];
    const phone = phoneDigits.join('');
    window.location.href = `tel:+1${phone}`;
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-16 text-center px-4 bg-secondary/50 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Inspired? Let&apos;s Plan Your Project</h2>
      <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
        Every project starts with understanding your vision and needs. Whether it&apos;s a kitchen renovation, basement conversion, or outdoor living space, let&apos;s discuss how we can bring your ideas to life with the same attention to detail and quality craftsmanship you see here.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/hire"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow hover:bg-primary/90 transition text-lg"
        >
          Request a Quote
        </Link>
        <button
          onClick={handlePhoneClick}
          className="inline-block border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition text-lg"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
