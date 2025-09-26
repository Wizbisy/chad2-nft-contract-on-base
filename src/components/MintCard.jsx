import React from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../abi";

const IMAGE_URL =
  "https://ipfs.io/ipfs/bafkreif3in6wmhvrcfi26fvojixolla4yhvegltbwvean4sldjju72obo4";

export default function MintCard() {
  const { address, isConnected } = useAccount();

  // 🔹 Read contract data
  const { data: price } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "price", // update if different in your contract
  });

  const { data: totalSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "totalSupply",
  });

  const { data: maxSupply } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "maxSupply", // if your contract has a different name, change here
  });

  const { data: userBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  });

  // 🔹 Write contract (mint)
  const { writeContract } = useWriteContract();

  const handleMint = async () => {
    try {
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "mint",
        value: price,
      });
      alert("Mint successful!");
    } catch (err) {
      console.error(err);
      alert("Mint failed: " + err.message);
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-full max-w-md text-center">
      <img
        src={IMAGE_URL}
        alt="Chad NFT"
        className="rounded-xl w-full mb-4"
      />
      <h2 className="text-xl font-bold mb-4">Mint Your Chad NFT</h2>

      {/* 🔹 NFT Stats */}
      <div className="space-y-2 text-gray-300 mb-6">
        <p>
          <span className="font-bold text-white">Total NFTs:</span>{" "}
          {maxSupply ? Number(maxSupply) : "Loading..."}
        </p>
        <p>
          <span className="font-bold text-white">NFTs Minted:</span>{" "}
          {totalSupply ? Number(totalSupply) : "Loading..."}
        </p>
        <p>
          <span className="font-bold text-white">Your NFTs:</span>{" "}
          {userBalance ? Number(userBalance) : isConnected ? 0 : "—"}
        </p>
      </div>

      {/* 🔹 Mint Button */}
      <p className="text-gray-400 mb-4">
        Price: {price ? `${Number(price) / 1e18} ETH` : "Loading..."}
      </p>
      {isConnected ? (
        <button
          onClick={handleMint}
          className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold"
        >
          Mint NFT
        </button>
      ) : (
        <p className="text-gray-500">Connect wallet to mint</p>
      )}
    </div>
  );
}