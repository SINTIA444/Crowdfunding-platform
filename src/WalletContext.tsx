// src/WalletContext.tsx
import React, { FC, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  // Puedes agregar más adaptadores de wallets si lo deseas
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Importa los estilos por defecto de los adaptadores de wallet
import "@solana/wallet-adapter-react-ui/styles.css";

interface WalletContextProps {
  children: ReactNode;
}

const WalletContext: FC<WalletContextProps> = ({ children }) => {
  const network = "testnet"; // Cambia a 'mainnet-beta' para producción
  const endpoint = clusterApiUrl(network);

  const wallets = [new PhantomWalletAdapter()]; // Puedes agregar más adaptadores aquí

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContext;
