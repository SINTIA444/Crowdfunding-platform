// src/pages/ReviewProjects.tsx
import React, { useState } from "react";
import CreateToken from "../components/CreateToken"; // Asegúrate de que la ruta es correcta
import "./ReviewProjects.css"; // Asegúrate de que la ruta de estilos es correcta

interface Project {
  id: number;
  title: string;
  description: string;
  amount: number;
  status: "pending" | "approved" | "rejected" | "funding"; // Agregamos "funding"
}

const ReviewProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Proyecto Edificio Comercial",
      description:
        "Construcción de un edificio comercial en el centro de la ciudad.",
      amount: 100000,
      status: "approved", // Cambiado a "approved"
    },
    {
      id: 2,
      title: "Proyecto Viviendas Sociales",
      description: "Desarrollo de viviendas sociales accesibles.",
      amount: 50000,
      status: "approved", // Cambiado a "approved"
    },
    {
      id: 3,
      title: "Proyecto Complejo Deportivo",
      description:
        "Construcción de un complejo deportivo con estadio y gimnasio.",
      amount: 75000,
      status: "pending",
    },
    {
      id: 4,
      title: "Proyecto Jardín Botánico",
      description: "Creación de un jardín botánico en la ciudad.",
      amount: 30000,
      status: "funding", // Proyecto que necesita financiación
    },
    {
      id: 5,
      title: "Proyecto Centro Comunitario",
      description:
        "Construcción de un centro comunitario para actividades culturales.",
      amount: 60000,
      status: "funding", // Proyecto que necesita financiación
    },
  ]);

  const handleApprove = (projectId: number) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, status: "approved" } : project
      )
    );
  };

  const handleFinance = (projectId: number) => {
    // Aquí podrías agregar la lógica para financiar el proyecto, como redirigir a una página de contrato
    console.log(`Financiando el proyecto ID: ${projectId}`);
  };

  return (
    <div className="review-projects-container">
      <h2>Revisión de Proyectos</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Monto: ${project.amount}</p>
          <p>Estado: {project.status}</p>
          {project.status === "pending" && (
            <button onClick={() => handleApprove(project.id)}>Aprobar</button>
          )}
          {project.status === "funding" && (
            <button onClick={() => handleFinance(project.id)}>
              Financiar Proyecto
            </button>
          )}
          {project.status === "approved" && (
            <CreateToken
              projectId={project.id}
              projectAmount={project.amount}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewProjects;
