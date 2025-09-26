import React from "react";
import Header from "./components/Header";
import MintCard from "./components/MintCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <Header />
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <MintCard />
      </main>
    </div>
  );
}