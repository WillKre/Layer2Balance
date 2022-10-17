/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ARBITRUM_API_KEY: string;
  readonly VITE_ETHEREUM_API_KEY: string;
  readonly VITE_OPTIMISM_API_KEY: string;
  readonly VITE_POLYGON_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
