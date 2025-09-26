import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { base } from "viem/chains";

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

if (!projectId) {
  throw new Error("VITE_REOWN_PROJECT_ID is required in .env.local");
}

const wagmiAdapter = new WagmiAdapter({
  networks: [base], // Base chain
  projectId,
});

export const walletConnect = createAppKit({
  adapters: [wagmiAdapter],
  networks: [base],
  projectId,
  features: {
    analytics: true,
  },
});