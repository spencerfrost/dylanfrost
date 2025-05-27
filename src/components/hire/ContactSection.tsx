import { Button } from "@/components/ui/button";
import { Download, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full max-w-4xl mb-8 text-center">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Let&apos;s Work Together</h2>
        <p className="text-muted-foreground mb-4">Ready to discuss your next project? Get in touch!</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button
            asChild
            size="lg"
            className="bg-yellow-700 hover:bg-yellow-800 text-white"
          >
            <a href="mailto:dylanfrost@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              dylanfrost@gmail.com
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-yellow-700 text-yellow-700 hover:bg-yellow-50"
          >
            <a href="tel:519-670-9420">
              <Phone className="mr-2 h-4 w-4" />
              519-670-9420
            </a>
          </Button>
        </div>
      </div>
      
      <Button
        asChild
        size="lg"
        className="bg-yellow-700 hover:bg-yellow-800 text-white"
      >
        <a href="/resume-placeholder.pdf">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </section>
  );
}
