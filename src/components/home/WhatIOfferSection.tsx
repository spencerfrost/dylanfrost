import { Wrench, Home, Building2, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function WhatIOfferSection() {
  return (
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
  );
}
