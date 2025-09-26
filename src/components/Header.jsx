import React from "react";
import { walletConnect } from "../walletConnect";
import { useAccount } from "wagmi";

export default function Header() {
  const { address, isConnected } = useAccount();

  const handleConnect = async () => {
    await walletConnect.open({ view: "Connect" });
  };

  const handleDisconnect = async () => {
    await walletConnect.disconnect();
  };

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-700">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        CHAD NFT
      </div>
      {isConnected ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-300">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <button
            onClick={handleDisconnect}
            className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg font-semibold"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold"
        >
          Connect Wallet
        </button>
      )}
    </header>
  );
}