// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>SOLVENCY-PROYECT</h1>
      <nav className="navigation">
        <Link to="/">Inicio</Link>
        <Link to="/add">Añadir Proyecto</Link>
        <Link to="/explore">Explorar Proyectos</Link>
      </nav>
    </header>
  );
};

export default Header;
