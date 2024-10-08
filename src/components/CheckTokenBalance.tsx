import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { getAccount, Token } from "@solana/spl-token";

const CheckTokenBalance: React.FC = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const handleCheckBalance = async () => {
    try {
      const connection = new Connection(
        "https://api.testnet.solana.com",
        "confirmed"
      );
      const tokenPublicKey = new PublicKey(tokenAddress);
      const ownerPublicKey = new PublicKey(ownerAddress);

      const tokenAccount = await getAccount(
        connection,
        ownerPublicKey,
        tokenPublicKey
      );
      setBalance(tokenAccount.amount.toNumber());
      setMessage("Saldo verificado con éxito!");
    } catch (error) {
      setMessage(`Error al verificar el saldo: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Verificar Saldo de Token</h2>
      <input
        type="text"
        placeholder="Dirección del Token"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección del Propietario"
        value={ownerAddress}
        onChange={(e) => setOwnerAddress(e.target.value)}
      />
      <button onClick={handleCheckBalance}>Verificar Saldo</button>
      {message && <p>{message}</p>}
      {balance !== null && <p>Saldo: {balance}</p>}
    </div>
  );
};

export default CheckTokenBalance;
