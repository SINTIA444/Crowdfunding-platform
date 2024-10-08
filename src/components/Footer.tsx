// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} SOLVENCY-PROYECT. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
