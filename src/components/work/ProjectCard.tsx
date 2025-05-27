import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProjectCardProps {
  readonly project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <CardContent className="p-0">
        <div className="relative w-full h-32 sm:h-40 rounded-t-xl overflow-hidden">
          <Image
            src={project.imageSrc}
            fill
            alt={project.imageAlt}
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <p className="text-sm">{project.description}</p>
      </CardContent>
    </Card>
  );
}

export type { Project, ProjectCardProps };
