import { Shield, Award, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="w-full max-w-4xl mb-12 px-4">
      <div className="bg-secondary/50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Fully Certified & Insured</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>WSIB Covered</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <span>WHMIS Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>25+ Years Experience</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
          Committed to safety standards and quality workmanship. All projects completed to Ontario Building Code with proper permits and documentation.
        </p>
      </div>
    </section>
  );
}
