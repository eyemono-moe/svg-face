import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { mediapipeWorkaround } from "./mediapipeWorkaround";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      plugins: [mediapipeWorkaround()],
    },
  },
});
