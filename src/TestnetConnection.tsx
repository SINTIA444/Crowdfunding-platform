import React, { useEffect } from "react";
import { Connection } from "@solana/web3.js";

const TestnetConnection: React.FC = () => {
  const connection = new Connection(
    "https://api.testnet.solana.com",
    "confirmed"
  );

  const checkConnection = async () => {
    try {
      const version = await connection.getVersion();
      console.log("Conectado a la testnet de Solana. Versión:", version);
    } catch (error) {
      console.error("Error conectando a la testnet de Solana:", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div>
      <h3>Conexión a la testnet de Solana</h3>
      <p>Revisa la consola del navegador para ver la versión de la red.</p>
    </div>
  );
};

export default TestnetConnection;
