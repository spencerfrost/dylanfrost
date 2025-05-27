import Image from "next/image";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: "kitchen-renovation",
    title: "Kitchen Renovation",
    location: "Old North, London",
    description: "Transformed a dated kitchen into a bright, modern space with custom cabinetry and new flooring.",
    imageSrc: "/images/project1-placeholder.png",
    imageAlt: "Project 1 before/after placeholder"
  },
  {
    id: "basement-suite",
    title: "Basement Suite",
    location: "Southcrest, London",
    description: "Finished a basement into a legal suite, including egress windows, bathroom, and kitchen install.",
    imageSrc: "/images/project2-placeholder.png",
    imageAlt: "Project 2 before/after placeholder"
  },
  {
    id: "deck-outdoor",
    title: "Deck & Outdoor Living",
    location: "Byron, London",
    description: "Designed and built a custom deck and pergola for summer entertaining and relaxation.",
    imageSrc: "/images/project3-placeholder.png",
    imageAlt: "Project 3 before/after placeholder"
  }
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <div className="relative w-full h-32 sm:h-40 rounded mb-4 bg-gray-200 overflow-hidden">
        <Image
          src={project.imageSrc}
          fill
          alt={project.imageAlt}
          className="object-cover"
        />
      </div>
      <h2 className="font-bold text-lg mb-1">{project.title}</h2>
      <p className="text-sm text-gray-600 mb-2">
        {project.location}
      </p>
      <p className="text-base text-center">
        {project.description}
      </p>
    </div>
  );
}

export default function ProjectGallery() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
