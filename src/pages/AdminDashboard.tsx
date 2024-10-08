// src/pages/AdminDashboard.tsx
import React from "react";

const AdminDashboard: React.FC = () => {
  // Aquí puedes simular algunos proyectos para revisar
  const projects = [
    {
      id: 1,
      title: "Proyecto A",
      description: "Descripción del Proyecto A",
      amount: 10000,
      status: "Pendiente", // o "Aprobado", "Rechazado"
    },
    {
      id: 2,
      title: "Proyecto B",
      description: "Descripción del Proyecto B",
      amount: 15000,
      status: "Pendiente",
    },
  ];

  const handleApprove = (id: number) => {
    // Lógica para aprobar el proyecto
    console.log(`Proyecto ${id} aprobado`);
  };

  const handleReject = (id: number) => {
    // Lógica para rechazar el proyecto
    console.log(`Proyecto ${id} rechazado`);
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.amount}</td>
              <td>{project.status}</td>
              <td>
                <button onClick={() => handleApprove(project.id)}>
                  Aprobar
                </button>
                <button onClick={() => handleReject(project.id)}>
                  Rechazar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
