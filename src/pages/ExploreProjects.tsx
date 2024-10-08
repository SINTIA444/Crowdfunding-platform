// src/pages/ExploreProjects.tsx
import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  amount: number;
  approved: boolean; // Nueva propiedad para verificar aprobación
  details: {
    location: string;
    stage: string;
    resources: string;
    expectedReturn: string;
  };
}

const ExploreProjects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Construcción de Edificio",
      description: "Construcción de un edificio de oficinas",
      amount: 100000,
      approved: true, // Proyecto aprobado
      details: {
        location: "Lima, Perú",
        stage: "En progreso",
        resources: "Cemento, Acero, Mano de obra",
        expectedReturn: "15%",
      },
    },
    {
      id: 2,
      title: "Obra de Infraestructura",
      description: "Mejoras en la infraestructura local",
      amount: 50000,
      approved: false, // Proyecto no aprobado
      details: {
        location: "Cusco, Perú",
        stage: "Planeado",
        resources: "Materiales de construcción, Mano de obra",
        expectedReturn: "10%",
      },
    },
    {
      id: 3,
      title: "Proyecto de Vivienda Social",
      description: "Construcción de viviendas para familias de bajos recursos.",
      amount: 75000,
      approved: true, // Proyecto aprobado
      details: {
        location: "Arequipa, Perú",
        stage: "Diseño",
        resources: "Materiales de construcción, Mano de obra",
        expectedReturn: "12%",
      },
    },
    {
      id: 4,
      title: "Renovación de Parque Urbano",
      description: "Renovación y mejora de espacios públicos en la ciudad.",
      amount: 30000,
      approved: true, // Proyecto aprobado
      details: {
        location: "Trujillo, Perú",
        stage: "En progreso",
        resources: "Plantas, Mobiliario urbano, Mano de obra",
        expectedReturn: "8%",
      },
    },
    {
      id: 5,
      title: "Construcción de Centro Educativo",
      description: "Construcción de un nuevo centro educativo en la región.",
      amount: 120000,
      approved: false, // Proyecto no aprobado
      details: {
        location: "Piura, Perú",
        stage: "Planeado",
        resources: "Cemento, Acero, Mano de obra",
        expectedReturn: "18%",
      },
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <h2>Proyectos de Construcción</h2>
      <ul>
        {projects
          .filter((project) => project.approved) // Solo mostrar proyectos aprobados
          .map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Monto: ${project.amount}</p>
              <button onClick={() => handleViewDetails(project)}>
                Ver Detalles
              </button>
            </li>
          ))}
      </ul>

      {selectedProject && (
        <div className="project-details">
          <h3>Detalles del Proyecto: {selectedProject.title}</h3>
          <p>
            <strong>Descripción:</strong> {selectedProject.description}
          </p>
          <p>
            <strong>Monto Necesario:</strong> ${selectedProject.amount}
          </p>
          <p>
            <strong>Ubicación:</strong> {selectedProject.details.location}
          </p>
          <p>
            <strong>Etapa:</strong> {selectedProject.details.stage}
          </p>
          <p>
            <strong>Recursos:</strong> {selectedProject.details.resources}
          </p>
          <p>
            <strong>Rentabilidad Esperada:</strong>{" "}
            {selectedProject.details.expectedReturn}
          </p>
          <button onClick={() => setSelectedProject(null)}>
            Cerrar Detalles
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreProjects;
