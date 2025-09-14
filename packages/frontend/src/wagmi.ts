import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, sepolia, localhost } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Define localhost chain with correct RPC URL
const localhostChain = {
  ...localhost,
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia, localhostChain],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Hacktivation 2025 Summer',
  projectId: 'demo-project-id-for-hacktivation-2025', // Demo project ID
  chains,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});