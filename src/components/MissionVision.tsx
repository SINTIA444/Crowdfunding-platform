// src/components/MissionVision.tsx
import React from "react";
import "./MissionVision.css"; // Asegúrate de tener un archivo CSS para estilos

const MissionVision: React.FC = () => {
  return (
    <div className="mission-vision-container">
      <h2>Misión</h2>
      <p>
        Nuestra misión es proporcionar una plataforma accesible y segura que
        conecte a las empresas constructoras con inversores, facilitando el
        financiamiento de proyectos innovadores y sostenibles en el sector de la
        construcción.
      </p>

      <h2>Visión</h2>
      <p>
        Ser la plataforma líder en la financiación de proyectos de construcción,
        impulsando el desarrollo sostenible y el crecimiento económico en
        nuestra comunidad, mientras fomentamos relaciones transparentes y de
        confianza entre inversores y empresas.
      </p>
    </div>
  );
};

export default MissionVision;
