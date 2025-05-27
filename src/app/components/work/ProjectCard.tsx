import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  detailedDescription: string;
  skillsUsed: string[];
  clientProblem: string;
  solution: string;
  keyMaterials?: string[];
  challenges?: string;
  images: {
    main: string;
    before?: string;
    after?: string;
    gallery?: string[];
  };
  imageAlt: string;
}

interface ProjectCardProps {
  readonly project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300 pt-0">
      <CardContent className="p-0">
        <div className="relative w-full h-48 sm:h-56 rounded-t-xl overflow-hidden">
          <Image
            src={project.images.main}
            fill
            alt={project.imageAlt}
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardContent>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-sm font-medium text-primary">
          📍 {project.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold mb-2">Skills Demonstrated:</h4>
            <div className="flex flex-wrap gap-1">
              {project.skillsUsed.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {project.skillsUsed.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.skillsUsed.length - 3} more
                </Badge>
              )}
            </div>
          </div>
          
          <div className="border-t pt-3">
            <h4 className="text-sm font-semibold mb-1">The Challenge:</h4>
            <p className="text-xs text-muted-foreground">
              {project.clientProblem}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-1">My Solution:</h4>
            <p className="text-xs text-muted-foreground">
              {project.solution}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export type { Project, ProjectCardProps };
