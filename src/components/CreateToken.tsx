// src/components/CreateToken.tsx
import React, { useState } from "react";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";

const CreateToken: React.FC = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenAddress, setTokenAddress] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const handleCreateToken = async () => {
    try {
      const connection = new Connection("https://api.testnet.solana.com");
      const payer = Keypair.fromSecretKey(
        new Uint8Array(
          JSON.parse(window.localStorage.getItem("SOLANA_PRIVATE_KEY") || "[]")
        )
      );

      // Crear el token
      const mint = await Token.createMint(
        connection,
        payer,
        payer.publicKey,
        null,
        9, // Decimales
        TOKEN_PROGRAM_ID
      );

      setTokenAddress(mint.toBase58()); // Guarda la dirección del token
      setMessage(`Token creado: ${mint.toBase58()}`);
    } catch (error) {
      setMessage(`Error al crear el token: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Crear Token</h2>
      <input
        type="text"
        placeholder="Nombre del token"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Símbolo del token"
        value={tokenSymbol}
        onChange={(e) => setTokenSymbol(e.target.value)}
      />
      <button onClick={handleCreateToken}>Crear Token</button>
      {message && <p>{message}</p>}
      {tokenAddress && <p>Dirección del Token: {tokenAddress}</p>}{" "}
      {/* Muestra la dirección del token */}
    </div>
  );
};

export default CreateToken;
