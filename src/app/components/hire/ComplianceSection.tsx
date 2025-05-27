import { Shield, Award, CheckCircle, MapPin } from "lucide-react";

export default function ComplianceSection() {
  return (
    <section className="w-full max-w-4xl mb-8">
      <div className="bg-secondary/50 sm:rounded-lg p-6 text-center border-y sm:border-x border-border">
        <h2 className="text-xl font-semibold mb-4">Fully Licensed & Insured</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>WSIB Covered</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <span>Building Code Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Proper Permits & Documentation</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>London, ON & Southwestern Ontario</span>
          </div>
        </div>
      </div>
    </section>
  );
}
