// src/pages/MainScreen.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import AddProject from "./AddProject"; // Asegúrate de que esta ruta es correcta
import ExploreProjects from "./ExploreProjects"; // Asegúrate de que esta ruta es correcta
import MissionVision from "../components/MissionVision"; // Importa el nuevo componente
import "./MainScreen.css"; // Asegúrate de la ruta de estilos es correcta

const MainScreen: React.FC = () => {
  const [userRole, setUserRole] = useState<
    "inversor" | "construction companies" | null
  >(null);

  const handleRoleChange = (role: "inversor" | "construction companies") => {
    setUserRole(role);
  };

  return (
    <div className="main-screen-container">
      <h2>Bienvenido a SOLVENCIA-PROYECTO</h2>
      <p>Descubre cómo financiar proyectos del sector construcción.</p>
      <p>
        Únete a nosotros y conoce proyectos innovadores e interesantes que
        necesitan de financiamiento.
      </p>

      <div className="role-selection">
        <button onClick={() => handleRoleChange("construction companies")}>
          Construction companies
        </button>
        <button onClick={() => handleRoleChange("inversor")}>Inversor</button>
      </div>

      <div className="register-button">
        <Link to="/register">
          <button>Registrar</button>
        </Link>
      </div>

      {/* Sección de estadísticas */}
      <div className="statistics-container">
        <div className="statistic-card">
          <h3>Visitantes Recientes</h3>
          <p>150</p> {/* Cambia el valor para simular datos */}
        </div>
        <div className="statistic-card">
          <h3>Proyectos en Curso</h3>
          <p>5</p> {/* Cambia el valor para simular datos */}
        </div>
        <div className="statistic-card">
          <h3>Fondos Recaudados</h3>
          <p>$10,000</p> {/* Cambia el valor para simular datos */}
        </div>
      </div>

      {userRole === "construction companies" && <AddProject />}
      {userRole === "inversor" && <ExploreProjects />}

      {/* Agregar la sección de Misión y Visión */}
      <MissionVision />
    </div>
  );
};

export default MainScreen;
