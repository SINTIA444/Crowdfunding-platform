// src/components/Transfer.tsx
import React, { useState } from "react";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

const Transfer: React.FC = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState<number>(0); // Añadir tipo explícito a amount
  const [message, setMessage] = useState<string>("");

  const handleTransfer = async () => {
    try {
      // Verificar que el objeto window.solana esté disponible
      if (!window.solana || !window.solana.isPhantom) {
        setMessage("Por favor, instala y conecta la wallet Phantom.");
        return;
      }

      const senderPublicKey = window.solana.publicKey;

      // Validar que la dirección del destinatario y el monto sean correctos
      if (!recipient || amount <= 0) {
        setMessage(
          "Por favor, ingresa una dirección válida y un monto positivo."
        );
        return;
      }

      const connection = new Connection("https://api.testnet.solana.com");

      // Crear una transacción
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderPublicKey,
          toPubkey: new PublicKey(recipient),
          lamports: amount * 1e9, // Convertir SOL a lamports
        })
      );

      // Solicitar a la wallet Phantom que firme y envíe la transacción
      const { signature } = await window.solana.signAndSendTransaction(
        transaction
      );

      // Confirmar la transacción en la red
      await connection.confirmTransaction(signature, "confirmed");

      setMessage(`Transferencia exitosa! Firma: ${signature}`);
    } catch (error: any) {
      setMessage(`Error en la transferencia: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Transferir SOL</h2>
      <input
        type="text"
        placeholder="Dirección del destinatario"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto en SOL"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleTransfer}>Transferir</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Transfer;
