// src/components/ConnectWallet.tsx
import React, { useState } from "react";

const ConnectWallet: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const { solana } = window as any;
      if (solana && solana.isPhantom) {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
        console.log("Connected to wallet:", response.publicKey.toString());
      } else {
        alert("Por favor, instala Phantom Wallet.");
      }
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
    }
  };

  return (
    <div>
      {walletAddress ? (
        <p>Conectado como: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Conectar Wallet de Phantom</button>
      )}
    </div>
  );
};

export default ConnectWallet;
