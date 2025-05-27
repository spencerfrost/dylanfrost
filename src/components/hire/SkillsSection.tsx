import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <section className="w-full max-w-2xl mb-8 mt-8">
      <h2 className="text-xl font-semibold mb-4">Skills & Certifications</h2>
      <div className="flex flex-wrap gap-2">
        <Badge variant="accent">WHMIS certified</Badge>
        <Badge variant="accent">MSDS trained</Badge>
        <Badge variant="accent">CNC</Badge>
        <Badge variant="accent">Diamond cutting</Badge>
        <Badge variant="accent">Metal working</Badge>
        <Badge variant="accent">Concrete</Badge>
        <Badge variant="accent">Woodworking</Badge>
        <Badge variant="accent">Excavators</Badge>
        <Badge variant="accent">Loaders</Badge>
        <Badge variant="accent">Construction vehicles</Badge>
        <Badge variant="outline">English (Native)</Badge>
        <Badge variant="outline">French (OAC Level)</Badge>
      </div>
    </section>
  );
}
