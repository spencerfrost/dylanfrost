import SiteLayout from "@/components/SiteLayout";
import Image from "next/image";

export default function Work() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="w-full bg-secondary py-12 flex flex-col items-center justify-center border-b border-border">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary shadow mb-6 bg-white overflow-hidden">
          <Image
            src="/images/dylan-work.png"
            fill
            alt="Gallery of Dylan's construction projects (placeholder)"
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-2 text-center">
          My Work
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
          Explore some of my recent projects and see the quality and care I bring
          to every job.
        </p>
      </section>

      {/* Project Gallery */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder project cards */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="relative w-full h-32 sm:h-40 rounded mb-4 bg-gray-200 overflow-hidden">
            <Image
              src="/images/project1-placeholder.png"
              fill
              alt="Project 1 before/after placeholder"
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-lg mb-1">Kitchen Renovation</h2>
          <p className="text-sm text-gray-600 mb-2">
            Old North, London
          </p>
          <p className="text-base text-center">
            Transformed a dated kitchen into a bright, modern space with custom
            cabinetry and new flooring.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="relative w-full h-32 sm:h-40 rounded mb-4 bg-gray-200 overflow-hidden">
            <Image
              src="/images/project2-placeholder.png"
              fill
              alt="Project 2 before/after placeholder"
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-lg mb-1">Basement Suite</h2>
          <p className="text-sm text-gray-600 mb-2">
            Southcrest, London
          </p>
          <p className="text-base text-center">
            Finished a basement into a legal suite, including egress windows,
            bathroom, and kitchen install.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="relative w-full h-32 sm:h-40 rounded mb-4 bg-gray-200 overflow-hidden">
            <Image
              src="/images/project3-placeholder.png"
              fill
              alt="Project 3 before/after placeholder"
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-lg mb-1">Deck & Outdoor Living</h2>
          <p className="text-sm text-gray-600 mb-2">
            Byron, London
          </p>
          <p className="text-base text-center">
            Designed and built a custom deck and pergola for summer entertaining
            and relaxation.
          </p>
        </div>
        {/* Add more project cards as needed */}
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-4xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-center">What Clients Say</h2>
        <div className="bg-gray-50 rounded p-4 mb-2 shadow-sm">
          <p className="italic">
            &ldquo;Dylan&apos;s attention to detail and communication made our renovation
            stress-free. Highly recommend!&rdquo;
          </p>
          <span className="block text-sm text-gray-500 mt-2">
            — Homeowner, London
          </span>
        </div>
        <div className="bg-gray-50 rounded p-4 shadow-sm">
          <p className="italic">
            &ldquo;Professional, reliable, and the results speak for themselves.&rdquo;
          </p>
          <span className="block text-sm text-gray-500 mt-2">
            — Repeat Client
          </span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl mx-auto py-12 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-6">
          Let&apos;s discuss your vision and create something amazing together.
        </p>
        <a
          href="/hire"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow hover:bg-primary/90 transition text-lg"
        >
          Get Started
        </a>
      </section>
    </SiteLayout>
  );
}
