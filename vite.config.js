import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: fileURLToPath(new URL("./client/", import.meta.url)),
  plugins: [react()],
  server: {
    proxy: {
      "/api": { target: "http://127.0.0.1:8000" },
      "/ws": { target: "ws://127.0.0.1:8000", ws: true },
      "/static": { target: "http://127.0.0.1:8000" },
      "/meetings": { target: "http://127.0.0.1:8000" }
    }
  }
});
