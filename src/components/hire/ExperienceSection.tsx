import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ExperienceSection() {
  return (
    <section className="w-full max-w-2xl mb-8">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
              <AvatarImage src="/images/exp-frost-placeholder.png" alt="Frost Renovations" />
              <AvatarFallback>FR</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg">Independent Contractor</CardTitle>
              <CardDescription className="text-base font-medium">Frost Renovations</CardDescription>
              <CardDescription className="text-sm">London, ON | 1995-2020</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Residential & commercial renovations</li>
              <li>Custom carpentry, structural modifications</li>
              <li>Project management & client relations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
              <AvatarImage src="/images/exp-landry-placeholder.png" alt="Michel Landry Corp" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg">Property Manager</CardTitle>
              <CardDescription className="text-base font-medium">Michel Landry Corporation</CardDescription>
              <CardDescription className="text-sm">2018-2021</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Supervised 15+ properties</li>
              <li>Coordinated teams & contractors</li>
              <li>Managed budgets & timelines</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
              <AvatarImage src="/images/exp-city-placeholder.png" alt="City of London" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg">Construction Labourer</CardTitle>
              <CardDescription className="text-base font-medium">City of London</CardDescription>
              <CardDescription className="text-sm">2004-2007</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Municipal construction projects</li>
              <li>Heavy equipment operation</li>
              <li>Concrete, framing, general construction</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
