// src/pages/Register.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [userType, setUserType] = useState<"mype" | "investor">("mype");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lógica de registro
    console.log("Usuario registrado:", { userType, username, password });

    // Mostrar mensaje de confirmación
    setMessage(
      `Registro exitoso para ${
        userType === "mype" ? "MYPE" : "Inversor"
      }: ${username}`
    );

    // Redirigir automáticamente según el tipo de usuario
    if (userType === "mype") {
      navigate("/mype-dashboard"); // Redirigir a la interfaz de MYPE
    } else {
      navigate("/investor-dashboard"); // Redirigir a la interfaz de inversor
    }

    // Limpiar los campos
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value as "mype" | "investor")}
        >
          <option value="mype">MYPE</option>
          <option value="investor">Inversor</option>
        </select>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>} {/* Mostrar mensaje de confirmación */}
    </div>
  );
};

export default Register;
