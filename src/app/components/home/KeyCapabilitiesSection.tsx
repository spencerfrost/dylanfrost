import { Badge } from "@/components/ui/badge";

export default function KeyCapabilitiesSection() {
  return (
    <section className="w-full max-w-4xl mb-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Key Capabilities</h2>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge variant="accent">Residential & Commercial Renovations</Badge>
        <Badge variant="accent">Custom Carpentry & Woodworking</Badge>
        <Badge variant="accent">Structural Modifications & Repairs</Badge>
        <Badge variant="accent">Project Coordination & Timeline Management</Badge>
        <Badge variant="accent">Building Code Compliance</Badge>
        <Badge variant="accent">Safety Protocol Implementation</Badge>
      </div>
    </section>
  );
}
