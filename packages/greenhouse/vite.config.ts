import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "path"
import { copyFileSync } from "fs"

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
    {
      name: "copy-tokens",
      closeBundle() {
        copyFileSync(
          resolve(__dirname, "src/styles/tokens.css"),
          resolve(__dirname, "dist/tokens.css")
        )
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "@floating-ui/react"],
    },
  },
})