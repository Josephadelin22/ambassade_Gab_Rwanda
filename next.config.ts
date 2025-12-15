// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On force Turbopack à utiliser ce dossier comme racine du projet
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
