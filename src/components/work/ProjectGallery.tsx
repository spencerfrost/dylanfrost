import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "kitchen-renovation",
    title: "Complete Kitchen Overhaul in Old North",
    location: "Old North, London",
    description: "Transformed a cramped, outdated 1970s kitchen into a bright, modern culinary space that doubled functionality while maintaining the home's character.",
    detailedDescription: "This complete kitchen renovation involved gutting the existing space and reconfiguring the layout to maximize both storage and workspace. The project included custom cabinetry design, installation of new appliances, and careful coordination of electrical and plumbing work.",
    clientProblem: "The existing kitchen was cramped, poorly lit, and had outdated fixtures from the 1970s. Limited counter space and poor workflow made cooking and entertaining difficult.",
    solution: "Removed a non-load-bearing wall to open up the space, installed custom cabinetry with soft-close drawers, added a large island with granite countertops, and upgraded all electrical and plumbing systems to modern standards.",
    skillsUsed: ["Custom Cabinetry", "Electrical Work", "Plumbing", "Tile Installation", "Drywall & Painting", "Project Management"],
    keyMaterials: ["Granite Countertops", "Soft-Close Cabinet Hardware", "Subway Tile Backsplash", "Hardwood Flooring"],
    challenges: "Working around the home's original structure while maximizing space and ensuring all work met current building codes.",
    images: {
      main: "/images/dylan-construction.png",
    },
    imageAlt: "Modern kitchen renovation showcasing custom cabinetry and granite countertops"
  },
  {
    id: "basement-suite",
    title: "Legal Basement Suite Creation",
    location: "Southcrest, London",
    description: "Converted an unfinished basement into a fully legal rental suite with egress windows, complete bathroom, and modern kitchen facilities.",
    detailedDescription: "This basement transformation required extensive structural and systems work to create a safe, legal rental unit. The project involved installing proper egress windows, building code-compliant bathroom facilities, and creating a functional kitchen space.",
    clientProblem: "Homeowners needed additional income but had an unusable basement that didn't meet safety or building code requirements for habitation.",
    solution: "Installed two egress windows for safety, built a complete bathroom with proper ventilation, created a kitchen with full appliances, and finished all living spaces to rental standards with proper insulation and heating.",
    skillsUsed: ["Egress Window Installation", "Bathroom Construction", "Kitchen Installation", "Electrical Systems", "Plumbing Systems", "Insulation & Framing"],
    keyMaterials: ["Egress Windows", "Waterproofing Systems", "Engineered Flooring", "Energy-Efficient Fixtures"],
    challenges: "Working with limited ceiling height and ensuring proper drainage and waterproofing in a below-grade environment.",
    images: {
      main: "/images/dylan-work.png",
    },
    imageAlt: "Finished basement suite with modern kitchen and living area"
  },
  {
    id: "deck-outdoor",
    title: "Custom Deck & Pergola Paradise",
    location: "Byron, London",
    description: "Designed and built a stunning two-level deck with integrated pergola, creating the perfect outdoor entertainment space for year-round enjoyment.",
    detailedDescription: "This outdoor living project transformed an underutilized backyard into a beautiful entertainment space. The design included a multi-level deck system with built-in seating, a custom pergola for shade, and integrated lighting for evening gatherings.",
    clientProblem: "The backyard had an old, small deck that was unsafe and didn't provide adequate space for family gatherings and entertainment.",
    solution: "Built a large two-level deck with composite decking materials, added a custom pergola with retractable shade, included built-in bench seating with storage, and installed LED lighting throughout for ambiance.",
    skillsUsed: ["Deck Construction", "Custom Carpentry", "Structural Design", "Electrical Installation", "Finish Carpentry", "Landscape Integration"],
    keyMaterials: ["Composite Decking", "Pressure-Treated Framing", "LED Lighting Systems", "Weather-Resistant Hardware"],
    challenges: "Designing the structure to handle Ontario weather conditions while integrating seamlessly with the existing landscape and home architecture.",
    images: {
      main: "/images/dylan-happy.png",
    },
    imageAlt: "Two-level deck with pergola and integrated seating area"
  }
];

export default function ProjectGallery() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
