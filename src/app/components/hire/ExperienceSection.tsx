import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

export default function ExperienceSection() {
  return (
    <section className="w-full max-w-4xl mb-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>
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
              <li>Executed residential and commercial renovation projects ranging from $10,000 to $500,000</li>
              <li>Specialized in custom carpentry, structural modifications, and complete home renovations</li>
              <li>Collaborated with architects, engineers, and subcontractors to ensure project success</li>
              <li>Maintained consistent safety standards and quality control across all projects</li>
              <li>Managed material procurement, project timelines, and client relationships</li>
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
              <li>Oversaw renovation and maintenance projects for 15+ properties</li>
              <li>Coordinated with contractors and supervised construction teams</li>
              <li>Managed project budgets and timelines for multiple concurrent renovations</li>
              <li>Ensured compliance with building codes and safety regulations</li>
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
              <CardDescription className="text-base font-medium">Corporation of the City of London</CardDescription>
              <CardDescription className="text-sm">2004-2007</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Participated in large-scale municipal construction projects</li>
              <li>Operated heavy machinery and specialized construction equipment</li>
              <li>Performed concrete work, framing, and general construction duties</li>
              <li>Maintained strict adherence to safety protocols and construction standards</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
