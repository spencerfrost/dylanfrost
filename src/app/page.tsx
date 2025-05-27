import { Mail, Phone, MapPin, Wrench, Home, Building2, Users } from "lucide-react";
import SiteLayout from "../components/SiteLayout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-secondary py-12 flex flex-col items-center border-b border-border">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary shadow mb-6 bg-white overflow-hidden">
            <Image
              src="/images/dylan-happy.png"
              fill
              alt="Cartoon of Dylan the contractor, smiling and holding a hammer"
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
            Hi, I’m Dylan. Let’s Build Something Great Together.
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
            25+ years of honest, high-quality construction and renovation in
            London, Ontario.
          </p>
          <div className="flex gap-4 mb-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/work">
                My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <a href="/hire">
                Hire Me
              </a>
            </Button>
          </div>
        </section>

        {/* About/Personal Touch */}
        <section className="w-full max-w-3xl flex flex-col items-center py-12 px-4">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-border bg-white overflow-hidden flex-shrink-0">
              <Image
                src="/images/dylan-main.png"
                fill
                alt="Cartoon of Dylan with a toolbelt"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">
                A Contractor You Can Trust
              </h2>
              <p className="text-base text-muted-foreground max-w-xl">
                I’m Dylan Frost, a hands-on, detail-oriented contractor who
                believes in honest work, clear communication, and getting
                the job done right. Whether you’re a homeowner or a builder, I bring
                decades of experience and a friendly, can-do attitude to every
                project.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 items-center text-sm text-muted-foreground mt-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> 89 Sterling St, London, ON
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" /> 519-670-9420
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />{" "}
                  <a href="mailto:dylanfrost@gmail.com" className="underline">
                    dylanfrost@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What I Offer */}
        <section className="w-full max-w-6xl mb-8 px-4">
          <h2 className="text-2xl font-bold text-center mb-6">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Full-Service Renovations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>From kitchens and bathrooms to basements and additions — complete transformation of your space.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Custom Carpentry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Precision woodworking and custom carpentry tailored to your exact specifications and needs.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Structural Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Safe structural repairs and modifications, all completed to code with proper permits.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Clear timelines, honest quotes, and transparent communication — no surprises, just results.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Clean & Respectful</CardTitle>
              </CardHeader>
              <CardContent>
                <p>I keep job sites tidy and disruption minimal — your home stays livable during construction.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Direct Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Friendly, honest communication from start to finish — you&#39;ll always know where your project stands.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-base leading-relaxed">
            Construction and renovation specialist with over 25 years of
            hands-on experience in residential and commercial projects. Expert
            in carpentry, structural modifications, and specialized equipment
            operation. Proven track record of successful project completion and
            safety compliance. I’m always looking for the next project where I
            can put my skills and work ethic to use.
          </p>
        </section>

        {/* Skills & Certifications */}
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

        {/* Experience */}
        <section className="w-full max-w-4xl mb-8 px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/images/dylan-main.png" />
                    <AvatarFallback>DF</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Independent Contractor</CardTitle>
                    <p className="text-muted-foreground">Frost Renovations • London, ON • 1995-2020</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Residential and commercial renovation projects ($10k–$500k)</li>
                  <li>• Custom carpentry, structural modifications, and full home renovations</li>
                  <li>• Worked with architects, engineers, and subcontractors</li>
                  <li>• Maintained safety and quality standards</li>
                  <li>• Managed materials, timelines, and client relationships</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Property Manager</CardTitle>
                    <p className="text-muted-foreground">Michel Landry Corporation • 2018-2021</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Oversaw renovation and maintenance for 15+ properties</li>
                  <li>• Coordinated contractors and supervised teams</li>
                  <li>• Managed budgets and timelines for multiple projects</li>
                  <li>• Ensured code and safety compliance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/images/city-of-london.png" />
                    <AvatarFallback>CL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Construction Labourer</CardTitle>
                    <p className="text-muted-foreground">City of London • 2004-2007</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Large-scale municipal construction projects</li>
                  <li>• Operated heavy machinery and specialized equipment</li>
                  <li>• Concrete work, framing, and general construction</li>
                  <li>• Strict safety and construction standards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Capabilities */}
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

        {/* Testimonials (placeholder) */}
        <section className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-semibold mb-2">What Clients Say</h2>
          <div className="bg-card rounded p-4 mb-2 shadow-sm">
            <p className="italic">
              &ldquo;Dylan renovated our kitchen and the results were fantastic. He
              was professional, on time, and the quality was top notch.&rdquo;
            </p>
            <span className="block text-sm text-muted-foreground mt-2">
              — Satisfied Homeowner
            </span>
          </div>
          <div className="bg-card rounded p-4 shadow-sm">
            <p className="italic">
              &ldquo;We trust Dylan for all our property upgrades. He&apos;s reliable,
              honest, and always delivers.&rdquo;
            </p>
            <span className="block text-sm text-muted-foreground mt-2">
              — Property Manager
            </span>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full max-w-2xl mb-8 text-center">
          <h2 className="text-xl font-semibold mb-2">
            Let’s Build Something Together
          </h2>
          <p className="mb-2 text-base">
            Ready to start your next project, need a quote, or just want to chat
            about possibilities? I’d love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="mailto:dylanfrost@gmail.com">
              Request a Quote
            </a>
          </Button>
        </section>
      </div>
    </SiteLayout>
  );
}
