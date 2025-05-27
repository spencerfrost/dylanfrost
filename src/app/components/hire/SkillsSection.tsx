import { Badge } from "@/app/components/ui/badge";

export default function SkillsSection() {
  return (
    <section className="w-full max-w-4xl mb-8 mt-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Construction Skills & Certifications</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2 text-muted-foreground">Equipment Operation</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">CNC machines</Badge>
            <Badge variant="accent">Diamond cutting tools</Badge>
            <Badge variant="accent">Metal working equipment</Badge>
            <Badge variant="accent">Concrete machinery</Badge>
            <Badge variant="accent">Woodworking tools</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-muted-foreground">Heavy Machinery</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Excavators</Badge>
            <Badge variant="accent">Loading equipment</Badge>
            <Badge variant="accent">Construction vehicles</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-muted-foreground">Safety Certifications</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">WHMIS certified</Badge>
            <Badge variant="default">MSDS trained</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-muted-foreground">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">English (Native)</Badge>
            <Badge variant="outline">French (OAC Level)</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
