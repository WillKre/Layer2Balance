/// <reference types="vite/client" />
import { MetaMaskInpageProvider } from "@metamask/providers";

interface ImportMetaEnv {
  readonly VITE_ARBITRUM_API_KEY: string;
  readonly VITE_ETHEREUM_API_KEY: string;
  readonly VITE_OPTIMISM_API_KEY: string;
  readonly VITE_POLYGON_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
