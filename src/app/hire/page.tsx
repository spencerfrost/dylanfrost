import Image from "next/image";
import SiteLayout from "../../components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Mail } from "lucide-react";

export default function Hire() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-secondary py-12 flex flex-col items-center border-b border-border">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-accent shadow mb-6 bg-white overflow-hidden">
            <Image
              src="/images/dylan-construction.png"
              fill
              alt="Cartoon of Dylan with a resume and hard hat (placeholder)"
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
            Hire Me
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
            Looking for a reliable, experienced contractor or team member? Here&apos;s what I bring to your crew or company.
          </p>
        </section>

        {/* Skills & Certifications */}
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

        {/* Experience Timeline */}
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

        {/* Why Hire Dylan */}
        <section className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-semibold mb-2">Why Hire Dylan?</h2>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>25+ years of hands-on experience</li>
            <li>Safety-focused and fully certified</li>
            <li>Team player and great communicator</li>
            <li>Reliable, punctual, and professional</li>
          </ul>
        </section>

        {/* Download Resume & Contact */}
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
      </div>
    </SiteLayout>
  );
}
