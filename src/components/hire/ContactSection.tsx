import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full max-w-2xl mb-8 text-center">
      <Button
        asChild
        size="lg"
        className="bg-yellow-700 hover:bg-yellow-800 text-white mb-4"
      >
        <a href="/resume-placeholder.pdf">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Let&#39;s Work Together</h2>
        <Button
          asChild
          size="lg"
          className="bg-yellow-700 hover:bg-yellow-800 text-white"
        >
          <a href="mailto:dylanfrost@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Contact Dylan
          </a>
        </Button>
      </div>
    </section>
  );
}
