// src/pages/ContractDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";

const ContractDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div>
      <h2>Detalles del Contrato</h2>
      <p>Detalles del contrato para el proyecto ID: {projectId}</p>
      {/* Aquí puedes añadir más detalles sobre el contrato */}
      <button>Realizar Transacción</button>
    </div>
  );
};

export default ContractDetails;
