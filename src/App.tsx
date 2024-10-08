// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Connection } from "@solana/web3.js"; // Importamos la conexión de Solana
import ConnectWallet from "./components/ConnectWallet"; // Asegúrate de que esta ruta es correcta
import Footer from "./components/Footer";
import AddProject from "./components/AddProject"; // Actualizado a la nueva ubicación
import ExploreProjects from "./components/ExploreProjects"; // Actualizado a la nueva ubicación
import Transfer from "./components/Transfer"; // Asegúrate de tener este componente
import CreateToken from "./components/CreateToken"; // Asegúrate de que esta ruta es correcta
import CheckTokenBalance from "./components/CheckTokenBalance"; // Importar el nuevo componente
import ReviewProjects from "./components/ReviewProjects"; // Actualizado a la nueva ubicación
import Register from "./components/Register"; // Actualizado a la nueva ubicación
import MainScreen from "./components/MainScreen"; // Actualizado a la nueva ubicación
import AdminDashboard from "./components/AdminDashboard"; // Ruta actualizada
import InvestorDashboard from "./components/InvestorDashboard"; // Nueva ubicación para InvestorDashboard
import MypeDashboard from "./components/MypeDashboard"; // Nueva ubicación para MypeDashboard
import ContractDetails from "./components/ContractDetails"; // Actualizado a la nueva ubicación
import "./App.css"; // Importar los estilos

const App: React.FC = () => {
  // Nueva funcionalidad para conectarse a la testnet de Solana
  const connection = new Connection(
    "https://api.testnet.solana.com",
    "confirmed"
  );

  // Estado para almacenar el tipo de usuario registrado
  const [userType, setUserType] = useState<"mype" | "investor" | null>(null);

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

  useEffect(() => {
    // Recuperar el tipo de usuario registrado desde localStorage (simulación)
    const savedUserType = localStorage.getItem("userType");
    if (savedUserType === "mype" || savedUserType === "investor") {
      setUserType(savedUserType as "mype" | "investor");
    }
  }, []);

  return (
    <Router>
      <div>
        <div className="app-container">
          <h1>SOLVENCY-PROYECT</h1>
          <ConnectWallet /> {/* Componente para conectar la wallet */}
          <nav>
            {userType === "mype" ? (
              <>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/add">Añadir Proyectos</Link> |{" "}
                <Link to="/explore">Explorar Proyectos</Link>
              </>
            ) : userType === "investor" ? (
              <>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/explore">Explorar Proyectos</Link>
              </>
            ) : (
              <>
                <Link to="/">Inicio</Link> |{" "}
                <Link to="/register">Registro</Link> |{" "}
                <Link to="/transfer">Transferir SOL</Link> |{" "}
                <Link to="/create-token">Crear Token</Link> |{" "}
                <Link to="/check-balance">Verificar Saldo</Link> |{" "}
                <Link to="/review">Revisar Proyectos</Link> |{" "}
                <Link to="/admin">Panel de Administración</Link>
              </>
            )}
          </nav>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route
              path="/register"
              element={
                <Register
                  onRegister={(userType) => {
                    setUserType(userType);
                    localStorage.setItem("userType", userType); // Guardar el tipo de usuario
                    // Redirigir según el tipo de usuario
                    const redirectPath =
                      userType === "mype" ? "/add" : "/explore";
                    window.location.href = redirectPath; // Redirigir a la ruta correspondiente
                  }}
                />
              }
            />
            <Route path="/add" element={<AddProject />} />
            <Route path="/explore" element={<ExploreProjects />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/create-token" element={<CreateToken />} />
            <Route path="/check-balance" element={<CheckTokenBalance />} />
            <Route path="/review" element={<ReviewProjects />} />
            <Route path="/admin" element={<AdminDashboard />} />{" "}
            {/* Ruta actualizada */}
            <Route
              path="/investor-dashboard"
              element={<InvestorDashboard />}
            />{" "}
            {/* Nueva ruta para el dashboard de inversores */}
            <Route path="/mype-dashboard" element={<MypeDashboard />} />{" "}
            {/* Nueva ruta para el dashboard de MYPEs */}
            <Route path="/contract/:projectId" element={<ContractDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
