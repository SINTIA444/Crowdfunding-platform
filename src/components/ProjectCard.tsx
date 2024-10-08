// src/components/ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`} className="details-link">
        Ver Detalles
      </Link>
    </div>
  );
};

export default ProjectCard;
