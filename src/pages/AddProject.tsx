// src/pages/AddProject.tsx
import React, { useState } from "react";

const AddProject: React.FC = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    amount: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Proyecto en espera de revisión:", project);

    // Aquí puedes implementar la lógica para enviar los datos del proyecto a una API o base de datos.
    // Por ejemplo, puedes usar fetch o axios para hacer una llamada a un backend o guardarlo localmente si lo deseas.

    alert(`Proyecto "${project.title}" enviado para revisión.`);
    setProject({ title: "", description: "", amount: 0 }); // Resetea el formulario
  };

  return (
    <div>
      <h2>Añadir Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título del Proyecto"
          value={project.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción del Proyecto"
          value={project.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Monto Necesario (en SOL)"
          value={project.amount}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar para Revisión</button>
      </form>
    </div>
  );
};

export default AddProject;
