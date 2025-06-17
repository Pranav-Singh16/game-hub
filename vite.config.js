import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/game-hub/",
  server: {
    host: "0.0.0.0", // Allow access from other devices
    port: 5173, // Make sure the port is the same as you're using
  },
});
