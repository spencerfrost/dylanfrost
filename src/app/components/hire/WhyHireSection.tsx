export default function WhyHireSection() {
  return (
    <section className="w-full max-w-4xl mb-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Key Construction Capabilities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Technical Expertise</h3>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>Residential and commercial renovations</li>
            <li>Custom carpentry and woodworking</li>
            <li>Structural modifications and repairs</li>
            <li>Building code compliance</li>
            <li>Safety protocol implementation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Professional Qualities</h3>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>25+ years of hands-on experience</li>
            <li>Project coordination and timeline management</li>
            <li>Team player and great communicator</li>
            <li>Reliable, punctual, and professional</li>
            <li>Safety-focused and fully certified</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground italic">References available upon request</p>
      </div>
    </section>
  );
}
