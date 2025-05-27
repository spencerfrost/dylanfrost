import { Wrench, Home, Building2, Hammer } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";

export default function ServicesSection() {
  return (
    <section className="w-full max-w-6xl mb-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Home className="w-6 h-6 text-primary" />
              Full-Service Renovations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Complete home transformations from kitchens and bathrooms to basements and additions. Quality craftsmanship that adds real value to your property.</p>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wrench className="w-6 h-6 text-primary" />
              Custom Carpentry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Precision woodworking and custom millwork tailored to your vision. From built-ins to trim work, every detail crafted to perfection.</p>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Hammer className="w-6 h-6 text-primary" />
              Decks & Outdoor Living
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Beautiful outdoor spaces that extend your home. Custom decks, pergolas, and outdoor structures built to last and enhance your lifestyle.</p>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building2 className="w-6 h-6 text-primary" />
              Structural Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Safe structural repairs and modifications completed to code. Load-bearing walls, foundations, and major structural improvements you can trust.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
