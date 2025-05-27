import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="w-full max-w-2xl mb-8 text-center">
      <h2 className="text-xl font-semibold mb-2">
        Let&apos;s Build Something Together
      </h2>
      <p className="mb-2 text-base">
        Ready to start your next project, need a quote, or just want to chat
        about possibilities? I&apos;d love to hear from you.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
        <a href="mailto:dylanfrost@gmail.com">
          Request a Quote
        </a>
      </Button>
    </section>
  );
}
