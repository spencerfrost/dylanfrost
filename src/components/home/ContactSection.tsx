import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full max-w-2xl mb-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Let&apos;s Build Something Great Together
      </h2>
      <p className="mb-6 text-base text-muted-foreground">
        Ready to start your next project? Get a free, no-obligation quote today. 
        I&apos;d love to discuss your vision and show you how we can bring it to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <a href="mailto:dylanfrost@gmail.com">
            Request a Free Quote
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/work">
            View My Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
}
