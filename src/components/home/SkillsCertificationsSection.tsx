import { Badge } from "@/components/ui/badge";

export default function SkillsCertificationsSection() {
  return (
    <section className="w-full max-w-4xl mb-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Skills & Certifications</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Equipment Operation</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">CNC Machines</Badge>
            <Badge variant="accent">Diamond Cutting Tools</Badge>
            <Badge variant="accent">Metal Working Equipment</Badge>
            <Badge variant="accent">Concrete Machinery</Badge>
            <Badge variant="accent">Woodworking Tools</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Heavy Machinery</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Excavators</Badge>
            <Badge variant="accent">Loading Equipment</Badge>
            <Badge variant="accent">Construction Vehicles</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">WHMIS Certified</Badge>
            <Badge variant="accent">MSDS Trained</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">English (Native)</Badge>
            <Badge variant="accent">French (OAC Level)</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
