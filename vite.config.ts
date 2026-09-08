import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { precompileRegistryPlugin } from "./scripts/vite-plugin-precompile";

export default defineConfig({
  plugins: [react(), precompileRegistryPlugin()],
  server: { port: 5173, host: true },
});
